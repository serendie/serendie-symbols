import { SerendieSymbolHome, SerendieSymbolHomeFilled } from "@serendie/symbol";

export function PartialImport() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bulk Import</h1>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <div>
          <h3>Outlined</h3>
          <SerendieSymbolHome />
        </div>

        <div>
          <h3>Filled</h3>
          <SerendieSymbolHomeFilled />
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Different Sizes</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <SerendieSymbolHome width={16} height={16} />
          <SerendieSymbolHome width={24} height={24} />
          <SerendieSymbolHome width={32} height={32} color="red" />
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Different Colors</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <SerendieSymbolHome color="red" />
          <SerendieSymbolHomeFilled color="blue" />
          <SerendieSymbolHomeFilled color="green" />
        </div>
      </div>
    </div>
  );
}
