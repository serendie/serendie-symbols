<p align='center'>
  <picture>
    <source srcset='https://github.com/user-attachments/assets/32affc17-886d-4306-8223-31b793e33e82' media="(prefers-color-scheme: dark)" width='600px'/>
    <img src='https://github.com/user-attachments/assets/0dbd3005-c4a6-4a0e-8133-8ff5a3018380' alt="Serendie Symbols" title="Serendie Symbols" width='600px'/>
  </picture>
</p>

<h1 align='center'>Serendie Symbols</h1>

<div align='center'>
  
[![GitHub](https://img.shields.io/github/license/serendie/serendie-symbols?style=flat)](https://github.com/serendie/serendie-symbols/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/%40serendie%2Fsymbols)](https://www.npmjs.com/package/@serendie/symbols)
[![X](https://img.shields.io/twitter/follow/SerendieDesign)](https://x.com/SerendieDesign/)

</div>

Serendie Symbolsは、デジタルプロダクトのなかで汎用性高く使える、Serendieらしい300種類以上のアイコン集です。[Serendie Design System](https://serendie.design/)の一部として提供されています。

## Docs

[ドキュメントサイト](https://serendie.design/foundations/icon/)では、Serendie Symbolsの設計思想をまとめています。アイコンの一覧や検索は[こちら](https://serendie.design/foundations/icon-list/)を参照してください。

## Usage

Serendie SymbolsはReact環境を前提としています。

```tsx
import { SerendieSymbol } from "@serendie/symbols";

<SerendieSymbol name="home" size={24} variant="filled" color="blue" />;
```

## Props

- `name`: アイコン名を指定します。[こちらの一覧](https://serendie.design/foundations/icon-list/)を参照してください。
- `variant?`: アイコンには線`outlined`と塗り`filled`の2種類があります。いずれかを指定してください。
- `size?`: アイコンのサイズを指定します。SVGの`width`と`height`に適用されます。
- `color?`: アイコンの色を指定します。SVGの`color`属性に適用されます。
- その他のSVGのプロパティはコンポーネントを包括しているSVG要素に適用されます

## Development

### scripts/generateSymbolNames.js

- `assets/outlined`と`assets/filled`にあるアイコンの名前を生成するスクリプト
- ビルド時に実行され`src/generated/symbolNames.ts`を更新します
- `npm run generate-symbol-names`で手動実行することもできます

## License

MITライセンスの下で配布されています。 詳しくは[LICENSE](/LICENSE)を参照してください。
