import React from "react";
import DesignPattern from "./components/DesignPattern/DesignPattern";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Mind Mapping</h1>
      <DesignPattern />
    </div>
  );
}

export default App;
