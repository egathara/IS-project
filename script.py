import os
import re
import sys

# List of directories or files to scan
APP_DIRS = [
    "./src",
    "./index.html",
    "./package.json",
    "./eslint.config.js",
    "./tsconfig.json",
    "./tailwind.config.js",
    "./postcss.config.js",
    "./tsconfig.node.json",
    "./tsconfig.server.json",
    "./tsconfig.app.json",
    "./vite.config.ts"
]

# File extensions to include
EXTENSIONS = {".js", ".jsx", ".ts", ".tsx", ".py", ".prisma", ".css", ".json", ".md", ".sh", ".yml", ".yaml"}

# Output file
OUTPUT_FILE = "dump.txt"


def remove_comments(content):
    """Remove both single-line and multi-line comments from code"""
    string_pattern = r'("(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\'|`(?:[^`\\]|\\.)*`)'

    # Remove multi-line comments
    content = re.sub(r'/\*(?:[^*]|\*(?!/))*?\*/', '', content, flags=re.DOTALL)

    # Remove single-line comments outside strings
    lines = []
    for line in content.split('\n'):
        strings = re.findall(string_pattern, line)
        placeholder = "___STRING_PLACEHOLDER___"

        # Replace strings with placeholders
        for i, s in enumerate(strings):
            line = line.replace(s, f'{placeholder}_{i}')

        # Remove comments
        line = re.sub(r'//.*', '', line)
        line = re.sub(r'#.*', '', line)

        # Restore original strings
        for i, s in enumerate(strings):
            line = line.replace(f'{placeholder}_{i}', s)

        lines.append(line)

    return '\n'.join(lines)


def scan_and_save_code(paths, output_file):
    """Scan specified paths and save cleaned code to a file."""
    with open(output_file, "w", encoding="utf-8") as f_out:
        for path in paths:
            if not os.path.exists(path):
                print(f"Not found: {path}")
                continue

            # If it's a single file
            if os.path.isfile(path):
                ext = os.path.splitext(path)[1].lower()
                if ext in EXTENSIONS:
                    f_out.write(f"\n=== FILE: {path} ===\n")
                    try:
                        with open(path, "r", encoding="utf-8") as f_in:
                            content = f_in.read()
                            cleaned_content = remove_comments(content)
                            f_out.write(cleaned_content)
                    except Exception as e:
                        f_out.write(f"Could not read file: {e}\n")
                continue

            # If it's a directory
            f_out.write(f"\n===== DIRECTORY: {path} =====\n")
            for root, _, files in os.walk(path):
                for file in files:
                    ext = os.path.splitext(file)[1].lower()
                    if ext in EXTENSIONS:
                        full_path = os.path.join(root, file)
                        f_out.write(f"\n=== FILE: {full_path} ===\n")
                        try:
                            with open(full_path, "r", encoding="utf-8") as f_in:
                                content = f_in.read()
                                cleaned_content = remove_comments(content)
                                f_out.write(cleaned_content)
                        except Exception as e:
                            f_out.write(f"Could not read file: {e}\n")

def remove_excess_blank_lines(file_path):
    """
    Reads a file, removes excess blank lines (leaving a maximum of two),
    and overwrites the original file.
    """
    with open(file_path, "r", encoding="utf-8") as f_in:
        lines = f_in.readlines()

    cleaned_lines = []
    blank_line_count = 0

    for line in lines:
        if line.strip() == "":
            # Only append up to two consecutive blank lines
            if blank_line_count < 2:
                cleaned_lines.append("\n")
                blank_line_count += 1
        else:
            # Reset counter on a non-blank line
            blank_line_count = 0
            cleaned_lines.append(line)

    with open(file_path, "w", encoding="utf-8") as f_out:
        f_out.writelines(cleaned_lines)


if __name__ == "__main__":
    # If run with args, override the default list
    paths_to_scan = sys.argv[1:] if len(sys.argv) > 1 else APP_DIRS

    scan_and_save_code(paths_to_scan, OUTPUT_FILE)
    print(f"✅ Code dump complete. Scanned {len(paths_to_scan)} path(s).")

    # Post-process the output file to remove excess blank lines
    remove_excess_blank_lines(OUTPUT_FILE)
    print(f"📝 Excess blank lines removed. Output saved to: {OUTPUT_FILE}")
