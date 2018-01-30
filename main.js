var fileReader = require("./src/file-reader");
var bigramParser = require("./src/bigram-parser");

function main() {
  var fileName = process.argv[2];
  var text = fileReader.readFile(fileName);

  if (text) {
    var histogram = bigramParser.countBigrams(text);
    console.log(histogram);
  }
}

main();