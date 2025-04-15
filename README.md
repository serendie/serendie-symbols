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

Serendie Symbols は、デジタルプロダクトのなかで汎用性高く使える、Serendie らしい 300 種類以上のアイコン集です。[Serendie Design System](https://serendie.design/)の一部として提供されています。

## Docs

[ドキュメントサイト](https://serendie.design/foundations/icon/)では、Serendie Symbols の設計思想をまとめています。アイコンの一覧や検索は[こちら](https://serendie.design/foundations/icon-list/)を参照してください。

## Usage

Serendie Symbols は React 環境を前提としています。

### 基本的な使い方 (推奨: 個別コンポーネントのインポート)

各アイコンを個別のコンポーネントとしてインポートする方法です。この方法が推奨されます。

```tsx
import {
  SerendieSymbolHome,
  SerendieSymbolSettingsFilled,
} from "@serendie/symbols";

function MyComponent() {
  return (
    <>
      <SerendieSymbolHome size={24} color="green" />
      <SerendieSymbolSettingsFilled size={32} />
    </>
  );
}
```

**利点:**

- **バンドルサイズの最適化:** アプリケーションで使用しているアイコンのみが最終的なバンドルに含まれるため、Tree Shaking が最も効果的に機能します。

**利用可能なコンポーネント:**

- アイコン名 (`home`, `settings` など) をパスカルケース (`Home`, `Settings`) に変換し、プレフィックス `SerendieSymbol` を付けたものがコンポーネント名になります (`SerendieSymbolHome`, `SerendieSymbolSettings`)。
- 塗りつぶし (`filled`) バリアントの場合は、さらにサフィックス `Filled` が付きます (`SerendieSymbolHomeFilled`, `SerendieSymbolSettingsFilled`)。
- 利用可能なアイコン名の一覧は[こちら](https://serendie.design/foundations/icon-list/)を参照してください。
- コンポーネントは標準の SVG プロパティ (`className`, `onClick` など) を受け付けます。

### 代替: 動的読み込みコンポーネント

単一の `SerendieSymbol` コンポーネントを使用して、`name` や `variant` プロパティによって表示するアイコンを切り替える方法も提供しています。

```tsx
import { SerendieSymbol } from "@serendie/symbols";

<SerendieSymbol name="home" size={24} variant="filled" color="blue" />;
```

**利点:**

- **動的なアイコン選択:** コンポーネントのプロパティ (`name`, `variant`) を変更することで、表示するアイコンを実行時に簡単に切り替えられます。

**トレードオフと注意点:**

- **バンドルサイズの増加:** このコンポーネントを使用する場合、内部的にすべてのアイコンデータを保持しているため、アプリケーションの最終的なバンドルサイズが大きくなります。実際に使用しないアイコンも含まれてしまいます。
- **Tree Shaking の非適用:** バンドラーはビルド時にどのアイコンが必要か判断できないため、このコンポーネントとそれに含まれるすべてのアイコンは Tree Shaking の対象外となります。

## 動的読み込みコンポーネント (`SerendieSymbol`) の Props

- `name`: アイコン名を指定します。[こちらの一覧](https://serendie.design/foundations/icon-list/)を参照してください。
- `variant?`: アイコンには線`outlined`と塗り`filled`の 2 種類があります。デフォルトは`outlined`です。
- `size?`: アイコンのサイズを指定します。SVG の`width`と`height`に適用されます。デフォルトは`24`です。
- `color?`: アイコンの色を指定します。SVG の`color`属性に適用されます。
- その他の SVG のプロパティはコンポーネントを包括している SVG 要素に適用されます。

## Development

assets に含まれる SVG ファイルからコンポーネントを生成するため、アイコンを変更した場合は以下のコマンドを実行してください。

```bash
npm run generate
```

## License

MIT ライセンスの下で配布されています。 詳しくは[LICENSE](/LICENSE)を参照してください。
