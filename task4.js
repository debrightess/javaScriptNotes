// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let largestArr = []
  let arrLength = arr.length
  for (let i = 0; i < arrLength; i++) {
    let summedArr = arr[i]
    let sum = summedArr[0]
    // console.log(summedArr)
    for (let j = 0; j < summedArr.length; j++) {
      if (parseInt(summedArr[j]) > sum) {
        sum = summedArr[j]
      }
    }
    largestArr.push(sum)
  }
  console.log(largestArr)
  return largestArr
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
])
