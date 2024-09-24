import React, { memo, useState } from "react";
import "./SideBar.css";

function SideBar({ sideBarData, handleOnClick }) {
  return (
    <div className="sideBar-container sm:h-full sm:overflow-y-auto w-full overflow-x-auto flex-row flex sm:flex-col">
      {sideBarData &&
        sideBarData.map((item) => {
          return (
            <>
              <div
                className="sideBar-item-container"
                onClick={() => {
                  handleOnClick(item.fileName);
                }}
              >
                <div className="sideBar-item">{item.title}</div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default memo(SideBar);
