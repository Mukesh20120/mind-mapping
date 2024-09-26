import React, { useState } from "react";
import logo from "../../assets/operating_system.png";
import { notesData, coordsData } from "../../constant/operating_system";

export default function OperatingSystem() {
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
    <div className="flex items-center justify-center">
      <img src={logo} alt="system-design" useMap="#map" />
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
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}
    </div>
  );
}
