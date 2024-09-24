import React, { memo, useState } from "react";
import "./SideBar.css";

function SideBar({ sideBarData, handleOnClick }) {
  return (
    <div className="sideBar-container">
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
