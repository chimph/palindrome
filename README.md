# Phrase object (with palindrome detector)

This is a sample NPM module to detect palindromes

```
$ npm install --global chimph-palindrome
$ vim test.js
let Phrase = require("chimph-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
