import React, { useEffect, useState } from "react";
import "./MindMappingWrapper.css";

function MindMappingWrapper({ fileName }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [notesData, setNotesData] = useState([]);
  const [coordsData, setCoordsData] = useState([]);
  const [logo, setLogo] = useState();

  useEffect(() => {
    (async function () {
      if (fileName !== "") {
        const { notesData, coordsData } = await import(
          `../../constant/${fileName}.js`
        );
        const image = await import(`../../assets/${fileName}.png`);
        if (notesData && coordsData) {
          setNotesData(notesData);
          setCoordsData(coordsData);
        }
        if (image) {
          setLogo(image.default);
        }
      }
    })();
  }, [fileName]);

  const handleAreaClick = (noteKey) => (event) => {
    event.preventDefault();
    setModalContent(notesData[noteKey]);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent("");
  };

  if (fileName === "") return;

  return (
    <div>
      {logo && <img src={logo} alt="Design Pattern OOP" useMap="#map" />}
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

export default MindMappingWrapper;
