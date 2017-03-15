"use strict";

"debugger";

let fs = require("fs");

let args = process.argv;

fs.readFile("./movies.txt", 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ');
  console.log(typeof data)
});


console.log(args[2]);
//console.log(movies);