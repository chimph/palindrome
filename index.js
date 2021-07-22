//assign reverse function to String object
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

//assign check for blank string to String object
String.prototype.isBlank = function() {
  return !!(this.match(/^\s*$/g));
}

Array.prototype.getLast = function() {
  return this.slice(this.length-1);
}
// Reverses a string.
// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

// Returns true for a palindrome, false otherwise.
// function palindrome(string) {
//   let lowerCaseIt = string.toLowerCase();
//   return lowerCaseIt === reverse(lowerCaseIt);
// }

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  };

  //Makes phrase LOUDER
  this.louder = function() {
    return this.content.toUpperCase();
  };

  this.lowerCaseIt = function lowerCaseIt() {
    return this.processor(this.content);
  };

  //Returns true if phrase is a palindrome, false otherwise.
  this.palindrome = function() {
    return this.lowerCaseIt() === this.lowerCaseIt().reverse();
  }

}

//Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //Returns translation porocessed for palindome testing
  this.lowerCaseIt = function lowerCaseIt() {
    return this.translation.toLowerCase();
  }
}

TranslatedPhrase.prototype = new Phrase();
