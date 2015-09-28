#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var filename = "01-product-grid.mustache";

//check the directory exists
//check the file exists
//verify the contents of the file

findFile();

function findFile() {
  if (process.cwd().match("organisms")) {
    check(process.cwd())
  } else {
    check(path.join(process.cwd(), "/organisms/"))
  }

  function check(userspath) {
    fs.readdir(userspath, function(err, files) {
      if (err) {
        return console.log(err);
      }
      var allFiles = files.join();
      if (allFiles.match(filename)) {
        console.log("File in organisms folder!");
        checkFile();
      }
      else {
        console.log("File NOT in organisms folder!");
      }
    })
  }
}

function checkFile() {
  fs.readFile(path.join(process.cwd(), "/organisms/" + filename), 'utf8', function (err,data) {
    if (err) {
      console.log("Try running the verify command from the top-level folder of this project.");
      return console.log(err);
    }
    else {
      if (data.indexOf('<div>') > -1) {
        console.log('There\'s a div!');
      }
      if (data.indexOf('{{> molecules-item }}') > -1) {
        var first = (data.indexOf('{{> molecules-item }}'));
        console.log('One item molecule!');
      }
      if (data.indexOf('{{> molecules-item }}', first) > -1) {
        var second = (data.indexOf('{{> molecules-item }}', first));
        console.log('Two item molecules!');
      }
      if (data.indexOf('{{> molecules-item }}', second) > -1) {
        console.log('Three item molecules!');
      }
      if (data.indexOf('</div>') > -1) {
        console.log('Div is closed!');
      }
    }
  });
}
