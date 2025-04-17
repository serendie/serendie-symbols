import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILES_ROOT = path.resolve(__dirname, "../assets");
const OUTPUT_FILE = path.resolve(
  __dirname,
  "../src/generated/exportSymbols.tsx"
);

function generateExportStatements(files, postfix = "") {
  const prefix = "SerendieSymbol";
  const imports = files
    .map((file) => {
      const importName = `Original${file.pascalName}${postfix}`;
      return `import ${importName} from "./${file.path}?react";`;
    })
    .join("\n");

  const exports = files
    .map((file) => {
      const componentName = `${prefix}${file.pascalName}${postfix}`;
      const importName = `Original${file.pascalName}${postfix}`;
      return `export const ${componentName} = ${importName};`;
    })
    .join("\n");

  return { imports, exports };
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

const outlinedFiles = getSvgFilesData(path.join(FILES_ROOT, "outlined"));
const filledFiles = getSvgFilesData(path.join(FILES_ROOT, "filled"));

const outlinedResult = generateExportStatements(outlinedFiles);
const filledResult = generateExportStatements(filledFiles, "Filled");

const content = [
  `// This file is auto-generated. Do not edit manually`,
  outlinedResult.imports,
  filledResult.imports,
  outlinedResult.exports,
  filledResult.exports,
].join("\n");

fs.writeFileSync(OUTPUT_FILE, content);

console.log(`Generated ${path.basename(OUTPUT_FILE)}`);
