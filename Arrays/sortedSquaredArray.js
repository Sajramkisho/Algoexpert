//Given an array of integers that are sorted in increasing order, write a function that squares all the integers in the array and returns them in a new array, also sorted in increasing order.

// time: O(NlogN) | space: O(1)

const sortedSquaredArray = (arr) => {
  let squaredSorted = []
  arr.forEach((e) => {
    squaredSorted.push(e * e)
  })
  squaredSorted.sort((a, b) => a - b)
  return squaredSorted
}

console.log(sortedSquaredArray([-2, -1, 0, 3, 4, 5, 6, 8, 10]))

// time: O(N) | space: O(1)
const sortedSquaredArray_ = (arr) => {
  let squaredSorted = []

  let i = 0
  while (i < arr.length && arr[i] < 0) {
    i++
  }
  let neg = i - 1
  let pos = i + 1

  if (arr[i] === 0) squaredSorted.push(arr[i])
  while (neg >= 0 || pos < arr.length) {
    if (arr[neg] * arr[neg] < arr[pos] * arr[pos]) {
      squaredSorted.push(arr[neg] * arr[neg])
      neg--
    } else {
      squaredSorted.push(arr[pos] * arr[pos])
      pos++
    }
  }
  return squaredSorted
}
console.log(sortedSquaredArray_([-2, -1, 0, 3, 4, 5, 6, 8, 10]))
