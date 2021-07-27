module.exports = Phrase;

//assign reverse function to String object
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.lowerCaseIt = function lowerCaseIt() {
    return this.letters().toLowerCase();
  };

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    const letterRegex = /[a-z]/gi;
    return (this.content.match(letterRegex) || []).join("");
  }

  //Returns true if phrase is a palindrome, false otherwise.
  this.palindrome = function() {
    if (this.letters()) {
      return this.lowerCaseIt() === this.lowerCaseIt().reverse();
    } else {
      return false;
    }
  }
}
