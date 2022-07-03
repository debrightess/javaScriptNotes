// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let items = str.split(' ')
  let longestWordLength = 0
  for (let i = 0; i < items.length; i++) {
    if (items[i].length > longestWordLength) {
      longestWordLength = items[i].length
    }
  }
  console.log(longestWordLength)

  return longestWordLength
}

findLongestWordLength('The quick brown fox jumped over the lazy dog')
