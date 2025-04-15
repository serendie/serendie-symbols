import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_ROOT = path.resolve(__dirname, "../assets");
const OUTPUT_FILE = path.resolve(
  __dirname,
  "../src/generated/exportSymbols.ts"
);

function generateExportSymbols(files, postfix = "") {
  const prefix = "SerendieSymbol";
  return files
    .map((file) => {
      return `export { default as ${prefix}${file.pascalName}${postfix} } from "./${file.path}?react";`;
    })
    .join("\n");
}

function getSvgFilesData(_path) {
  const files = fs.readdirSync(_path);
  return files
    .filter((file) => file.endsWith(".svg"))
    .map((file) => {
      const name = file.replace(".svg", "");
      return {
        pascalName: PascalCase(name),
        name,
        path: path.relative(
          path.dirname(OUTPUT_FILE),
          path.resolve(_path, file)
        ),
      };
    });
}

function PascalCase(str) {
  return str.replace(/(?:^|[-_])(\w)/g, (_, char) => char.toUpperCase());
}

let content = `// This file is auto-generated. Do not edit manually \n`;
content += generateExportSymbols(
  getSvgFilesData(path.join(FILES_ROOT, "outlined"))
);
content += generateExportSymbols(
  getSvgFilesData(path.join(FILES_ROOT, "filled")),
  "Filled"
);

fs.writeFileSync(OUTPUT_FILE, content);
