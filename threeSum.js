//inputArr : [12,3,1,2,-6,5,-8,6]
//target: 0
//none of the numbers are repeated
//output: find all triplets which sums up to the target

// //time: O(N^3) | space: O(1)
const tripletSum = (inputArr, targetSum) => {
  const result = []
  for (let i = 0; i < inputArr.length - 2; i++) {
    for (let j = i + 1; j < inputArr.length - 1; j++) {
      for (let k = j + 1; k < inputArr.length; k++) {
        let sum = inputArr[i] + inputArr[j] + inputArr[k]
        if (sum === targetSum) {
          let triplet = [inputArr[i], inputArr[j], inputArr[k]]
          result.push(triplet)
        }
      }
    }
  }
  return result
}
console.log(tripletSum([12, 3, 1, 2, -6, 5, -8, 6], 0))

//time: O(N^2) | space: O(1)
const tripletSum_ = (inputArr, targetSum) => {
  let result = []
  // inputArr.sort() wont sort numbers correctly so we have to compare it
  inputArr.sort((a, b) => {
    return a - b
  })
  for (let i = 0; i < inputArr.length - 2; i++) {
    let L = i + 1
    let R = inputArr.length - 1
    let N = i
    while (L < R) {
      let sum = inputArr[L] + inputArr[R] + inputArr[N]
      if (sum < targetSum) L++
      else if (sum > targetSum) R--
      else {
        result.push([inputArr[L], inputArr[R], inputArr[N]])
        L++
        R--
      }
    }
  }
  return result
}
console.log(tripletSum_([12, 3, 1, 2, -6, 5, -8, 6], 0))
