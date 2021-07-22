module.exports = Phrase;

//assign reverse function to String object
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  };

  this.lowerCaseIt = function lowerCaseIt() {
    return this.processor(this.content);
  };

  //Returns true if phrase is a palindrome, false otherwise.
  this.palindrome = function() {
    return this.lowerCaseIt() === this.lowerCaseIt().reverse();
  }
}
