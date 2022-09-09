const fs = require('fs');
const request = require('request');
const args = process.argv;


request(args[2], (error, response, body) => {
  //console.log('error:', error);
  //console.log('statusCode:', response && response.statusCode);
  fs.writeFile(args[3], body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${args[3]}`)
  });
});

