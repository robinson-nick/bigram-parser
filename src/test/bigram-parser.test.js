var expect = require('chai').expect;
var bigramParser = require('../bigram-parser.js');

describe('Bigram Parser', function() {
  it('should indicate there are no bigrams for strings with less than two words', function() {
    var emptyString = '';
    var emptyStringHistogram = bigramParser.countBigrams(emptyString);
    expect(emptyStringHistogram).to.equal('No bigrams in the text!');

    var oneWordString = 'oneWord';
    var oneWordStringHistogram = bigramParser.countBigrams(oneWordString);
    expect(oneWordStringHistogram).to.equal('No bigrams in the text!');
  });

  it('should return a histogram with one key with value 1 for string with 2 words (1 bigram)', function() {
    var twoWordString = 'two words';
    var twoWordStringHistogram = bigramParser.countBigrams(twoWordString);
    
    var histogramKeys = Object.keys(twoWordStringHistogram);
    var histogramKeyLength = histogramKeys.length;
    var histogramKey = histogramKeys[0];
    
    expect(histogramKeyLength).to.equal(1);
    expect(histogramKey).to.equal('two-words');
    expect(twoWordStringHistogram[histogramKey]).to.equal(1);
  });

  it('should return a histogram with one key with value 2 for string with 3 identical words (2 bigrams)', function() {
    var threeMatchString = 'sameWord sameWord sameWord';
    var threeMatchHistogram = bigramParser.countBigrams(threeMatchString);

    var histogramKeys = Object.keys(threeMatchHistogram);
    var histogramKeyLength = histogramKeys.length;
    var histogramKey = histogramKeys[0];

    expect(histogramKeyLength).to.equal(1);
    expect(histogramKey).to.equal('sameWord-sameWord');
    expect(threeMatchHistogram[histogramKey]).to.equal(2);
  });

  it('should return a histogram with 2 keys with value 1 for string with 2 bigrams', function() {
    var twoBigramString = 'the fox goes';
    var twoBigramHistogram = bigramParser.countBigrams(twoBigramString);

    var histogramKeys = Object.keys(twoBigramHistogram);
    var histogramKeyLength = histogramKeys.length;

    expect(histogramKeyLength).to.equal(2);

    var first = histogramKeys[0];
    var second = histogramKeys[1];

    expect(first).to.equal('the-fox');
    expect(second).to.equal('fox-goes');
    expect(twoBigramHistogram[first]).to.equal(1);
    expect(twoBigramHistogram[second]).to.equal(1);
  });

  //All cases beyond this covered by combination of the previous
});