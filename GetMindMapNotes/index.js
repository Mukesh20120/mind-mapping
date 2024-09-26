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
        const title = $("title").text();
        const body = $("body").html();

        // Create an object where the key is the filename (without extension)
        notesObject[fileNameWithoutExtension] = { title, body };
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
  fs.writeFileSync("notesData.js", fileContent, "utf-8");

  console.log("Data saved to notesData.js");

  rl.close();
});
