/*

[ ] takes a URL as a commandline argument
[ ] as well as a local file path
[ ] downloads resources to specified path
[ ] print to console: Downloaded and saved x bytes to [file path]!

*/

const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

let URL = args[0];
let PATH = args[1];


request(URL, (error, response, body) => {
  if (response && response.statusCode === 200) {
    fs.writeFile(PATH, body, function(err) {
  
      if (err) console.log("Invalid input");
      else if (error) console.log("INVALID URL");
      else {
        console.log('Saved!');
        let stats = fs.statSync(PATH);
        console.log(`Downloaded and saved ${stats.size} bytes to ${PATH}`);
      }
  
    });
  } else {
    console.log("beg coneect");
  }

});
