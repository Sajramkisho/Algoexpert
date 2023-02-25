//inputArray [2,1,2,2,2,3,4,2]
//element : 2
//output: [1,3,4,2,2,2,2,2]
//caveats:
//the order of other numbers really don't matter
//do it inplace

//time: O(N) | space: O(1)
const moveElementToEnd = (inputArr, element) => {
  if (inputArr.length === 0) return

  let lo = 0
  let hi = inputArr.length - 1

  while (lo < hi) {
    if (inputArr[lo] === element && inputArr[hi] === element) {
      hi--
    }
    if (inputArr[lo] === element && inputArr[hi] !== element) {
      let temp = inputArr[lo]
      inputArr[lo] = inputArr[hi]
      inputArr[hi] = temp
      lo++
      hi--
    }
    if (inputArr[lo] !== element && inputArr[hi] !== element) {
      lo++
    }
  }
  return inputArr
}
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))
