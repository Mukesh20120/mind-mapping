import React, { useEffect, useState } from "react";
import "./MindMappingWrapper.css";

function MindMappingWrapper({ fileName }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [notesData, setNotesData] = useState([]);
  const [coordsData, setCoordsData] = useState([]);
  const [logo, setLogo] = useState();
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
    setLastPosition({ x: 0, y: 0 });
    (async function () {
      try {
        if (fileName !== "") {
          try {
            const { notesData, coordsData } = await import(
              `../../constant/${fileName}.js`
            );
            if (notesData && coordsData) {
              setNotesData(notesData);
              setCoordsData(coordsData);
            }
          } catch (error) {
            console.log(error.message);
          }
          try {
            const image = await import(`../../assets/${fileName}.png`);
            if (image) {
              setLogo(image.default);
            }
          } catch (error) {
            console.log(error.message);
          }
        }
      } catch (error) {
        console.log(error.message);
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

  const handleWheel = (event) => {
    event.preventDefault();
    const zoomDirection = event.deltaY > 0 ? -0.1 : 0.1;
    setScale((prevScale) =>
      Math.min(Math.max(prevScale + zoomDirection, 1), 3)
    ); // Zoom between 1x and 3x
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setLastPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - lastPosition.x;
    const deltaY = event.clientY - lastPosition.y;

    setPosition((prevPosition) => ({
      x: prevPosition.x + deltaX,
      y: prevPosition.y + deltaY,
    }));

    setLastPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (fileName === "") return;

  return (
    <div className="box-container">
      <div
        className="image-container"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {logo && (
          <img
            src={logo}
            alt="Zoomable"
            style={{
              transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
              cursor: isDragging ? "grabbing" : "grab",
            }}
            className="zoom-pan-image"
            useMap="#map"
          />
        )}
      </div>
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
