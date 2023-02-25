// inputarray = [3, 5, -4, 8, 11, 1, -1, 6]
// target = 10
// expected: return the two numbers sums up to target . dont return indices

//timecomplexity : O(N^2)
//spacecomplexity: O(1)
const twoSum1 = (inputArr, targetSum) => {
  let result = []
  for (let i = 0; i < inputArr.length - 1; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      if (targetSum - inputArr[i] === inputArr[j]) {
        return [inputArr[i], inputArr[j]]
      }
    }
  }
}
console.log(twoSum1([3, 5, -4, 8, 11, 1, -1, 6], 10))

//timecomplexity : O(NlogN)
//spacecomplexity: O(1)
const twoSum2 = (inputArr, targetSum) => {
  let result = []
  // inputArr.sort() wont sort numbers correctly so we have to compare it
  inputArr.sort((a, b) => {
    return a - b
  })

  let L = inputArr[0]
  let R = inputArr[inputArr.length - 1]

  while (L < R) {
    if (L + R < targetSum) L++
    else if (L + R > targetSum) R++
    else return [R, L]
  }
}
console.log(twoSum2([3, 5, -4, 8, 11, 1, -1, 6], 10))

//timecomplexity : O(N)
//spacecomplexity: O(N)
const twoSum3 = (inputArr, targetSum) => {
  let result = []

  let map = new Map()
  for (let i = 0; i < inputArr.length; i++) {
    map.set(inputArr[i], i)
  }

  for (let i = 0; i < inputArr.length; i++) {
    // 10 - 3 = 7
    let anotherNum = targetSum - inputArr[i]
    // both numbers should be different
    if (map.has(anotherNum) && anotherNum !== inputArr[i]) {
      return [inputArr[i], anotherNum]
    }
  }
}
console.log(twoSum3([3, 5, -4, 8, 11, 1, -1, 6], 10))
