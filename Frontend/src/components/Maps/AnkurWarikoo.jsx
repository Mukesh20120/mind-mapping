import React, { useState } from "react";
import logo from "../../assets/ankur_warikoo.png";
import { notesData, coordsData } from "../../constant/ankur_warikoo";
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
            <div className="modal-close-container">
              <p onClick={closeModal} className="modal-close">
                &times;
              </p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: modalContent.body }} />
          </div>
        </div>
      )}

      <img src={logo} alt="Ankur Warikoo" border="none" useMap="#map" />
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
