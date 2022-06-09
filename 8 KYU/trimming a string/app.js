// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// USING SUBSTR;
function removeChar(str) { return str.substr(1, str.length - 2) }

// USING SLICE;
// const removeChar = str => str.slice(1,-1)