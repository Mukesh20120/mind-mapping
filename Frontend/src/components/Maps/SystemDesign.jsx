import React, { useState } from "react";
import logo from "../../assets/system_design.png";
import { notesData, coordsData } from "../../constant/system_design";
import "./common.css";

export default function SystemDesign() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const closeModal = () => {
    setModalVisible(false);
    setModalContent("");
  };
  const handleAreaClick = (noteKey) => (event) => {
    event.preventDefault();
    setModalContent(notesData[noteKey]);
    setModalVisible(true);
  };

  return (
    <div className="container">
      {modalVisible && (
        <div onClick={closeModal} className="modal-container">
          <div className="modal-content">
            <span onClick={closeModal} className="modal-close">
              &times;
            </span>
            <div dangerouslySetInnerHTML={{ __html: modalContent.body }} />
          </div>
        </div>
      )}

      <img src={logo} alt="system-design" border="none" useMap="#map" />
      <map name="map">
        {coordsData.map((item) => (
          <>
            <area
              shape="rect"
              coords={item.coords}
              href="#"
              onClick={handleAreaClick(item.noteKey)}
            />
          </>
        ))}
      </map>
    </div>
  );
}
