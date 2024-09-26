import React from "react";
import { Link } from "react-router-dom";
import "./Link.css";

export default function Links() {
  const linksData = [
    { title: "System Design", path: "system_design" },
    { title: "Luck Factor", path: "luck_factor_book" },
    { title: "Operating System", path: "operating_system" },
  ];

  return (
    <>
      <h1 className=" text-center">All Links of Mind Map</h1>
      <div className="link-body flex justify-center items-center flex-wrap">
        {linksData.map((item) => (
          <div key={item.path} className="link--box m-3 rounded-lg">
            <Link to={item.path} target="_blank">
              <p className="link--text font-bold p-2">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
