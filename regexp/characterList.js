// // whitespace
// let whiteSpace = 'Whitespace. Whitespace everywhere!'
// let spaceRegex = /\s/g
// whiteSpace.match(spaceRegex)
// // This match call would return [" ", " "].

// Match Non-Whitespace Characters
let whiteSpace = 'Whitespace. Whitespace everywhere!'
let nonSpaceRegex = /\S/g
whiteSpace.match(nonSpaceRegex).length
// The value returned by the .length method would be 32.

// Check for All or None
let american = 'color'
let british = 'colour'
let rainbowRegex = /colou?r/
rainbowRegex.test(american)
rainbowRegex.test(british)

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = 'astronaut'
let pwRegex = /(?=\w{6})(?=\w*\d{2})/ // Change this line
let result = pwRegex.test(sampleWord)

// Reuse Patterns Using Capture Groups
// capture alhpanumeric characters

// The example below matches a word that occurs thrice separated by spaces:
let repeatRegex = /(\w+) \1 \1/
repeatRegex.test(repeatStr) // Returns true
repeatStr.match(repeatRegex) // Returns ["row row row", "row"]
