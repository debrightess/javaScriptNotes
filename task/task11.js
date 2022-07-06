// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let arrUpdated = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      arrUpdated.push(arr[i])
    }
  }
  console.log(arrUpdated)
  return arrUpdated
}

bouncer([7, 'ate', '', false, 9])
