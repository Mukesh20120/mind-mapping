const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const readline = require("readline");

// Function to read all HTML files from a folder and extract title and body
function extractNotes(folderPath) {
  const notesObject = {};

  // Read all files in the folder
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    if (path.extname(file) === ".html") {
      const fileNameWithoutExtension = path.basename(file, ".html"); // Get filename without extension
      const filePath = path.join(folderPath, file);

      try {
        const htmlData = fs.readFileSync(filePath, "utf-8");

        // Load HTML content using cheerio
        const $ = cheerio.load(htmlData);

        // Extract title and body
       
        const body = $("body").html();

        // Create an object where the key is the filename (without extension)
        notesObject[fileNameWithoutExtension] = { body };
      } catch (error) {
        console.error(`Error reading file: ${file}, Error: ${error.message}`);
      }
    }
  });

  return notesObject;
}
// Function to read all HTML files from a folder and extract title and body
function extractCoords(folderPath) {
  const coordsData = [];

  // Read all files in the folder
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    if (path.extname(file) === ".html") {
      const fileNameWithoutExtension = path.basename(file, ".html");
      const filePath = path.join(folderPath, file);

      try {
        const htmlData = fs.readFileSync(filePath, "utf-8");
        const $ = cheerio.load(htmlData);
        // Extract all <area> tags inside the <map> element
        const areas = $("map area");
        areas.each((index, element) => {
          const coords = $(element).attr("coords");
          const href = $(element).attr("href");
          const noteKey = href.split("/").pop().replace(".html", "");
          if (coords && href) {
            coordsData.push({ coords, noteKey });
          }
        });
      } catch (error) {
        console.error(`Error reading file: ${file}, Error: ${error.message}`);
      }
    }
  });

  return coordsData;
}

// Read user input for folder path
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const createJSXFile = (folderPath) => {
  const filename = folderPath.split("\\").pop() || "constantData";
  const FileNameUpperCase = filename.charAt(0).toUpperCase() + filename.slice(1);
// Create the new .jsx file with the provided content
const jsxContent = `
import { useState } from "react";
import logo from "../../assets/${filename.toLowerCase()}.png";
import { notesData, coordsData } from "../../constant/${filename.toLowerCase()}";
import "./common.css";

export default function ${FileNameUpperCase}() {
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
            <div className="text-white text-xl" dangerouslySetInnerHTML={{ __html: modalContent.body }} />
          </div>
        </div>
      )}

      <img src={logo} alt="image" border="none" useMap="#map" />
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
`;

  const jsxFileName = `D:\\Real Projects\\My Projects\\MindMapping\\Frontend\\src\\components\\Maps\\${FileNameUpperCase}.jsx`;
  fs.writeFileSync(jsxFileName, jsxContent, "utf-8");

  console.log("JSX file created at ", jsxFileName);
}


// Function to copy image to assets folder
function copyImageToAssets(folderPath) {
  const folderName = folderPath.split("\\").pop().toLowerCase();
  const sourceImagePath = path.join(folderPath, `${folderName}.png`);
  const destinationImagePath = `D:\\Real Projects\\My Projects\\MindMapping\\Frontend\\src\\assets\\${folderName}.png`;

  try {
    fs.copyFileSync(sourceImagePath, destinationImagePath);
    console.log(`Image copied to ${destinationImagePath}`);
  } catch (error) {
    console.error(`Error copying image: ${error.message}`);
  }
}


rl.question("Enter the path of your project folder: ", (folderPath) => {
  // const folderPath = "D:/system design2/notes";
  const notes = extractNotes(`${folderPath}/notes`);
  const coords = extractCoords(folderPath);
  // Stringify the result into JavaScript code
  const fileContent = `export const notesData = ${JSON.stringify(
    notes,
    null,
    2
  )}\n\n export const coordsData = ${JSON.stringify(coords, null, 2)}`;

  // Write the file to a JavaScript file (notesData.js)
  const filename = folderPath.split("\\").pop().toLowerCase() || "constantData";
  const constantFileName = `D:\\Real Projects\\My Projects\\MindMapping\\Frontend\\src\\constant\\${filename}.js`;
  fs.writeFileSync(constantFileName, fileContent, "utf-8");
  createJSXFile(folderPath);
  copyImageToAssets(folderPath);
  console.log("Data saved to ", filename);

  rl.close();
});
