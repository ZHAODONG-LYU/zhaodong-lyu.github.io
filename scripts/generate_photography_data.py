#!/usr/bin/env python3
"""
从 assets/images/photography/ 中的图片读取 EXIF 日期，生成 photographyData 并更新 assets/js/script.js。
- 时间（date / year / month）：来自 EXIF DateTimeOriginal，无则用文件修改时间。
- 地点（theme）：从 script.js 中的 PHOTOGRAPHY_DEFAULT_THEME 读取；改 theme 请编辑该 JS 常量后重新运行脚本。
"""

import re
import sys
from pathlib import Path
from datetime import datetime

try:
    from PIL import Image
except ImportError:
    print("请先安装: pip install Pillow")
    sys.exit(1)

ROOT = Path(__file__).resolve().parent.parent
PHOTO_DIR = ROOT / "assets" / "images" / "photography"
SCRIPT_JS = ROOT / "assets" / "js" / "script.js"

TAG_DATETIME_ORIGINAL = 36867
TAG_DATETIME = 306


def get_theme_from_script_js() -> str:
    """从 script.js 中读取 PHOTOGRAPHY_DEFAULT_THEME 常量。"""
    if not SCRIPT_JS.exists():
        return "Singapore"
    text = SCRIPT_JS.read_text(encoding="utf-8")
    m = re.search(r'PHOTOGRAPHY_DEFAULT_THEME\s*=\s*["\']([^"\']+)["\']', text)
    return m.group(1).strip() if m else "Singapore"


def get_exif_date(image_path: Path) -> tuple[str, int, int] | None:
    """读取图片的拍摄日期。返回 (date_str, year, month) 或 None。"""
    try:
        img = Image.open(image_path)
        exif = img._getexif()
        if not exif:
            mtime = image_path.stat().st_mtime
            dt = datetime.fromtimestamp(mtime)
            return (dt.strftime("%Y-%m-%d"), dt.year, dt.month)
        raw = exif.get(TAG_DATETIME_ORIGINAL) or exif.get(TAG_DATETIME)
        if not raw:
            mtime = image_path.stat().st_mtime
            dt = datetime.fromtimestamp(mtime)
            return (dt.strftime("%Y-%m-%d"), dt.year, dt.month)
        s = str(raw).strip().replace(":", "-", 2)
        parts = s.split()
        if parts:
            date_part = parts[0].replace(":", "-")
            try:
                dt = datetime.strptime(date_part, "%Y-%m-%d")
                return (date_part, dt.year, dt.month)
            except ValueError:
                pass
        mtime = image_path.stat().st_mtime
        dt = datetime.fromtimestamp(mtime)
        return (dt.strftime("%Y-%m-%d"), dt.year, dt.month)
    except Exception as e:
        print(f"Warning: {image_path.name}: {e}", file=sys.stderr)
        return None


def build_entries(theme: str) -> list[dict]:
    """扫描图片目录，用 EXIF 日期 + 声明的 theme 生成条目。"""
    if not PHOTO_DIR.exists():
        print(f"目录不存在: {PHOTO_DIR}", file=sys.stderr)
        sys.exit(1)

    extensions = {".jpg", ".jpeg", ".JPG", ".JPEG"}
    files = sorted(
        [f for f in PHOTO_DIR.iterdir() if f.is_file() and f.suffix in extensions],
        key=lambda p: p.name,
    )

    entries = []
    for i, path in enumerate(files, start=1):
        rel = path.relative_to(ROOT)
        rel_str = str(rel).replace("\\", "/")
        date_info = get_exif_date(path)
        if not date_info:
            continue
        date_str, year, month = date_info
        entries.append({
            "id": i,
            "title": path.stem,
            "theme": theme,
            "date": date_str,
            "year": year,
            "month": month,
            "image": rel_str,
        })
    return entries


def update_script_js(entries: list[dict]) -> bool:
    """用新生成的条目替换 script.js 中的 photographyData 数组。"""
    if not SCRIPT_JS.exists():
        print(f"未找到 {SCRIPT_JS}", file=sys.stderr)
        return False
    text = SCRIPT_JS.read_text(encoding="utf-8")
    start_marker = "const photographyData = ["
    end_marker = "\n];"
    start_idx = text.find(start_marker)
    if start_idx == -1:
        print("未找到 photographyData 数组起始位置", file=sys.stderr)
        return False
    end_idx = text.find(end_marker, start_idx)
    if end_idx == -1:
        print("未找到 photographyData 数组结束位置", file=sys.stderr)
        return False
    end_idx += len(end_marker)
    lines = ["const photographyData = ["]
    for e in entries:
        lines.append(f"""    {{
        id: {e['id']},
        title: "{e['title']}",
        theme: "{e['theme']}",
        date: "{e['date']}",
        year: {e['year']},
        month: {e['month']},
        image: "{e['image']}"
    }},""")
    lines.append("];")
    new_block = "\n".join(lines)
    new_text = text[:start_idx] + new_block + text[end_idx:]
    SCRIPT_JS.write_text(new_text, encoding="utf-8")
    print(f"已更新 {SCRIPT_JS}", file=sys.stderr)
    return True


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="从摄影图片 EXIF 生成 photographyData（theme 从 script.js 的 PHOTOGRAPHY_DEFAULT_THEME 读取），并可选更新 script.js")
    parser.add_argument("--update", action="store_true", help="直接更新 assets/js/script.js 中的数组")
    parser.add_argument("--theme", default=None, help="覆盖 script.js 中的 PHOTOGRAPHY_DEFAULT_THEME（可选）")
    args = parser.parse_args()

    theme = args.theme if args.theme is not None else get_theme_from_script_js()
    entries = build_entries(theme=theme)
    if not entries:
        print("没有可用的图片条目。", file=sys.stderr)
        sys.exit(1)

    if args.update:
        if update_script_js(entries):
            print("script.js 已更新。")
        else:
            sys.exit(1)
    else:
        print("// 以下为自动生成，可复制到 assets/js/script.js 的 photographyData 数组中")
        print("// 生成时间: " + datetime.now().isoformat())
        print("")
        for e in entries:
            print(f"""    {{
        id: {e['id']},
        title: "{e['title']}",
        theme: "{e['theme']}",
        date: "{e['date']}",
        year: {e['year']},
        month: {e['month']},
        image: "{e['image']}"
    }},""")
