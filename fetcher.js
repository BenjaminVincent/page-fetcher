/* 

[ ] takes a URL as a commandline argument
[ ] as well as a local file path
[ ] downloads resources to specified path
[ ] print to console: Downloaded and saved x bytes to [file path]!

*/

const request = require('request');
const fs = require('fs');
//const filesize = require("filesize"); 

const args = process.argv.slice(2);

let URL = args[0];
let PATH = args[1];


request(URL, (error, response, body) => {
  fs.writeFile(PATH, body, function (err) {
    if (err) throw err;
    console.log('Saved!');


    let stats = fs.statSync(PATH);


    

    console.log(`Downloaded and saved ${stats.size} bytes to ${PATH}`);
  });
});



//console.log(URL + "\n" + PATH);

// node fetcher.js http://google.com /vagrant/w2/d3-net/page-fetcher/indexOut.html
