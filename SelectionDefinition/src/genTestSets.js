const _ = require('lodash');

const
  mapsNumber = 5,
  positionsNumber = 3,
  sampleSize = 100,
  maxWidth = 1024,
  maxHeight = 1024;

//use integer value for applying A/B select
const generateSprite = () => {
  const x = Math.floor(Math.random() * (maxWidth + 1)),
    y = Math.floor(Math.random() * (maxHeight + 1)),
    width = Math.floor(Math.random() * (maxWidth - x + 1)),
    height = Math.floor(Math.random() * (maxHeight - y + 1));
  return { x, y, width, height }
};

const generatePosition = () => {
  const x = Math.random() * maxWidth,
    y = Math.random() * maxHeight;
  return { x, y }
};


const mapArray = (arraySize, mapFunction) => _
  .chain(new Array(arraySize))
  .map(mapFunction)
  .value();

// Array( Array ( Object{x, y, width, height}) )
const maps = mapArray(mapsNumber, ()=> mapArray(sampleSize, generateSprite));
const positions = mapArray(positionsNumber, ()=> generatePosition());

module.exports = {
  maps, positions
};

// Deprecated with saved file;
// fs.writeFile("./tmp/map", maps, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// });