import { IconHomeOutlined, IconHomeFilled } from "@serendie/symbol";

export function PartialImport() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bulk Import</h1>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <div>
          <h3>Outlined</h3>
          <IconHomeOutlined />
        </div>

        <div>
          <h3>Filled</h3>
          <IconHomeFilled />
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Different Sizes</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <IconHomeOutlined width={16} height={16} />
          <IconHomeOutlined width={24} height={24} />
          <IconHomeOutlined width={32} height={32} color="red" />
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Different Colors</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <IconHomeOutlined color="red" />
          <IconHomeFilled color="blue" />
          <IconHomeFilled color="green" />
        </div>
      </div>
    </div>
  );
}
