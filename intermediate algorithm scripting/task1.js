// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let allItems = []
  let sortArr = arr.sort(function (a, b) {
    return a - b
  })
  for (let i = sortArr[0]; i <= arr[sortArr.length - 1]; i++) {
    allItems.push(i)
  }
  return allItems.reduce((a, b) => a + b, 0)
}
