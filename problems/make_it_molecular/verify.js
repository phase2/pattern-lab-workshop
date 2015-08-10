#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var filename = "01-item.mustache";

//check the directory exists
//check the file exists
//verify the contents of the file

findFile();

function findFile() {
  if (process.cwd().match("molecules")) {
    check(process.cwd())
  } else {
    check(path.join(process.cwd(), "/molecules/"))
  }

  function check(userspath) {
    fs.readdir(userspath, function(err, files) {
      if (err) return console.log(err);
      var allFiles = files.join();
      if (allFiles.match(filename)) {
        console.log("File in molecules folder!");
        checkFile();
      }
      else console.log("File NOT in molecules folder!");
    })
  }
}

function checkFile() {
  fs.readFile(path.join(process.cwd(), "/molecules/" + filename), 'utf8', function (err,data) {
    if (err) {
      console.log("Try running the verify command from the top-level folder of this project.");
      return console.log(err);
    }
    else console.log(data);
  });
}
