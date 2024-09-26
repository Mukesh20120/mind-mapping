import React, { useState } from "react";
import logo from "../../assets/system_design.png";
import { notesData, coordsData } from "../../constant/system_design";

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
    <>
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

      {modalVisible && (
        <div
          onClick={closeModal}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <span  onClick={closeModal}>
              &times;
            </span>
            <div dangerouslySetInnerHTML={{ __html: modalContent.body }} />
          </div>
        </div>
      )}
    </>
  );
}
