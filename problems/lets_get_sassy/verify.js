#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var filename = "01-tutorial-button.scss";

//check the directory exists
//check the file exists
//verify the contents of the file

findFile();

function findFile() {
  if (process.cwd().match("atoms")) {
    check(process.cwd())
  } else {
    check(path.join(process.cwd(), "/atoms/"))
  }

  function check(userspath) {
    fs.readdir(userspath, function(err, files) {
      if (err) return console.log(err);
      var allFiles = files.join();
      if (allFiles.match(filename)) {
        console.log("File in atoms folder!");
        checkFile();
      }
      else console.log("File NOT in atoms folder!");
    })
  }
}

function checkFile() {
  fs.readFile(path.join(process.cwd(), "/atoms/" + filename), 'utf8', function (err,data) {
    if (err) {
      console.log("Try running the verify command from the top-level folder of this project.");
      return console.log(err);
    }
    else {
      if ((data.indexOf('btn') > -1) || (data.indexOf('button') > -1)) console.log("Styling the button!");
      if (data.indexOf('color: red') > -1) console.log("The color is red!");
      if (data.indexOf('text-align: center') > -1) console.log("The text is center-aligned!");
    }
  });
}
