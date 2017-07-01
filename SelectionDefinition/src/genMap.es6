import fs from 'fs'
import _ from 'lodash'

const sampleSize = 100,
    maxWidth = 1024,
    maxHeight = 1024;

const generateSprite() {
    const x = Math.floor(Math.random() * (maxWidth + 1)); //The maximum is inclusive and the minimum is inclusive
    const y = Math.floor(Math.random() * (maxHeight + 1));
}


const map = _
    .chain(new Array(sampleSize))
    .map(()=>{
        return 1
    })
    .value()

console.log('map is', map);


fs.writeFile("/tmp/test", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});