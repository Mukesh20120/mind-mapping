import React, { useState } from "react";
import MindMappingWrapper from "./components/MindMappingWrapper/MindMappingWrapper";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [fileName, setFileName] = useState("");
  const sideBarData = [
    { title: "Design Pattern", fileName: "design-pattern" },
    { title: "Operating System", fileName: "operating-system" },
  ];
  const handleOnClick = (fileName) => {
    console.log(fileName);
    setFileName(fileName);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <SideBar sideBarData={sideBarData} handleOnClick={handleOnClick} />
      <MindMappingWrapper fileName={fileName} />
    </div>
  );
}

export default App;
