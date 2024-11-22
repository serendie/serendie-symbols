# Serendie Symbols

## Usage

```tsx
import { SerendieSymbol } from "@serendie/symbols";

<SerendieSymbol name="home" size={24} variant="filled" color="red" />;
```

## Props

- `name`: アイコンの名前、[symbolNames.ts](./src/generated/symbolNames.ts)を参照
- `variant?`: アイコンのバリアント、`outlined`か`filled`
- `size?`: アイコンのサイズ、SVG の width と height に適用される
- `color?`: アイコンの色、SVG の color 属性に適用される
- その他の SVG のプロパティはコンポーネントを包括している SVG 要素に適用される

## scripts/generateSymbolNames.js

- `assets/outlined`と`assets/filled`にあるアイコンの名前を生成するスクリプト
- ビルド時に実行され、`src/generated/symbolNames.ts`を更新する
- `npm run generate-symbol-names`で手動実行することもできる
