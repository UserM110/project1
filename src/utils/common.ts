const sharp = require('sharp');

fetch('../images')
  .then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log(data);
  });
sharp(inputBuffer)
  .resize(320, 240)
  .toFile('output.webp', () => {});

function inputBuffer(inputBuffer: typeof require) {
    throw new Error("Function not implemented.");
}
  