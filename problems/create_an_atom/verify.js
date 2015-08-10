#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var filename = "01-tutorial-button.mustache";

//check the directory exists
//check the file exists
//verify the contents of the file

//exec('git config user.username', function(err, stdout, stderr) {
//  if (err) return console.log(err)
//  username = stdout.trim()
//
//  exec('git rev-parse --abbrev-ref HEAD', function(err, stdout, stderr) {
//    if (err) return console.log(err)
//    var actualBranch = stdout.trim()
//    var expectedBranch = "add-" + username
//    if (actualBranch.match(expectedBranch)) {
//      console.log("Found branch as expected!")
//      checkPush(actualBranch)
//    } else {
//      console.log("Branch name expected: " + expectedBranch)
//      checkPush(actualBranch)
//    }
//  })
//})
//
//function checkPush(branchname) {
//  exec('git reflog show origin/' + branchname, function(err, stdout, stderr) {
//    if (err) return console.log(err)
//    if (stdout.match("update by push")) console.log("Changes have been pushed!")
//    else console.log("Changes not pushed")
//    findFile()
//  })
//}

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
    else console.log(data);
  });
}
