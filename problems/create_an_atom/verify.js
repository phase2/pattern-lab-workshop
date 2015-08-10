// checks if a file exists, named a certain way, containing the mustache we want
fs.readFile(path.join(process.cwd(), 'atoms/01-tutorial-button.mustache'), 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  if((data.indexOf('<button>') !== -1) & (data.indexOf('</button>') !== -1)) {
    console.log(data);
  }
}); //data is the contents of the file, for this lesson we want it to have: <button></button>
