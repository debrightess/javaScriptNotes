// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  let truncatedStr = ''
  if (num <= 0) {
    truncatedStr = ''
  } else if (num >= str.length) {
    truncatedStr = str
  } else if (num < str.length) {
    truncatedStr = str.slice(0, num) + '...'
  }
  return truncatedStr
}

truncateString('A-tisket a-tasket A green and yellow basket', 8)
