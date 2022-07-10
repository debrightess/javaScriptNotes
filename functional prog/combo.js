// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.

const squareList = (arr) => {
  // Only change code below this line
  let newArr = arr.filter((item) => item > 0 && Number.isInteger(item))
  // newArr = newArr.filter((item) => Number.isInteger(item))

  return newArr.map((item) => item ** 2)

  // Only change code above this line
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
