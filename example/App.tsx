import React from "react";
import { SerendieSymbol } from "../src";

export function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Symbol Examples</h1>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <div>
          <h3>Outlined</h3>
          <SerendieSymbol name="home" variant="outlined" />
        </div>

        <div>
          <h3>Filled</h3>
          <SerendieSymbol name="home" variant="filled" />
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Different Sizes</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <SerendieSymbol name="home" size={16} />
          <SerendieSymbol name="home" size={24} />
          <SerendieSymbol name="home" size={32} />
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Different Colors</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <SerendieSymbol name="lock" color="red" />
          <SerendieSymbol name="home" color="blue" />
          <SerendieSymbol name="home" color="green" />
        </div>
      </div>
    </div>
  );
}
