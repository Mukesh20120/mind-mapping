import React, { useState } from "react";
import MindMappingWrapper from "./components/MindMappingWrapper/MindMappingWrapper";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [fileName, setFileName] = useState("");
  const sideBarData = [
    { title: "Design Pattern", fileName: "design-pattern" },
    { title: "System Design", fileName: "system_design" },
    { title: "Luck Factor", fileName: "luck_factor_book" },
    { title: "Operating System", fileName: "operating_system" },
  ];
  const handleOnClick = (fileName) => {
    setFileName(fileName);
  };
  return (
    <div className="gap-2 h-screen md:flex ">
      <div className="flex-none w-full sm:w-40">
        <SideBar sideBarData={sideBarData} handleOnClick={handleOnClick} />
      </div>
      <div className="flex-auto">
        <MindMappingWrapper fileName={fileName} />
      </div>
    </div>
  );
}

export default App;
