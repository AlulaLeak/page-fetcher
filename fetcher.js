const fs = require('fs');

let addy = process.argv;
addy.shift();
addy.shift();

const request = require('request');
request(addy[0], function (error, response, body) {

  fs.writeFile(addy[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved 3261 bytes to ${addy[1]}`);
  });
});

