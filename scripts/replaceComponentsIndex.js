import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function replaceComponentsIndex(filePath, postFix = "") {
  /*
  例：
  export { default as Activity } from "./Activity";
  を
  export { default as SerendieSymbolActivityFilled } from "./Activity";
  に変換する
  */
  const content = fs.readFileSync(filePath, "utf8");
  const newContent = content.replace(
    /export { default as (\w+) } from "\.\/(\w+)";/g,
    (match, p1, p2) => {
      const newName = `SerendieSymbol${p1}${postFix}`;
      return `export { default as ${newName} } from "./${p2}";`;
    }
  );
  fs.writeFileSync(filePath, newContent);
}

replaceComponentsIndex(
  path.resolve(__dirname, "../src/generated/components/filled/index.tsx"),
  "Filled"
);

replaceComponentsIndex(
  path.resolve(__dirname, "../src/generated/components/outlined/index.tsx")
);
