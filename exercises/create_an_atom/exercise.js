var through2 = require('through2');
var hyperquest = require('hyperquest');
var bl = require('bl');
var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var fs = require('fs');

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// compare stdout of solution and submission
// exercise = comparestdout(exercise);

// checks if a file exists, named a certain way, containing the mustache we want
fs.readFile('solution/atoms/01-tutorial-button.mustache', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  if((data.indexOf('<button>') !== -1) & (data.indexOf('</button>') !== -1)) {
    console.log(data);
  }
}); //data is the contents of the file, for this lesson we want it to have: <button></button>


module.exports = exercise;
