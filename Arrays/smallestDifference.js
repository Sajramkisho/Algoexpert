//time: O(N^2) | space: O(N)
const smallestDifference = (arrayOne, arrayTwo) => {
  let resultMap = new Map()
  let absDifference = Number.MAX_SAFE_INTEGER

  if (arrayOne === [] && arrayTwo === []) return []

  if (arrayOne.length >= arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      for (let j = 0; j < arrayTwo.length; j++) {
        //both are equal
        if (arrayOne[i] == arrayTwo[j]) return [arrayOne[i], arrayTwo[j]]

        absDifference = Math.abs(arrayOne[i] - arrayTwo[j])
        //console.log(`${arrayOne[i]} , ${arrayTwo[j]} ==> ${absDifference}`)
        resultMap.set(absDifference, [arrayOne[i], arrayTwo[j]])
      }
    }
  } else {
    for (let i = 0; i < arrayTwo.length; i++) {
      for (let j = 0; j < arrayOne.length; j++) {
        //both are equal
        if (arrayOne[i] == arrayTwo[j]) return [arrayTwo[i], arrayOne[j]]

        absDifference = Math.abs(arrayTwo[i] - arrayOne[j])
        //console.log(`${arrayOne[i]} , ${arrayTwo[j]} ==> ${absDifference}`)
        resultMap.set(absDifference, [arrayTwo[i], arrayOne[j]])
      }
    }
  }

  let minHashKey = []
  resultMap.forEach((values, keys) => {
    minHashKey.push(keys)
  })

  let minVal = minHashKey[0]
  for (let i = 1; i < minHashKey.length; i++) {
    if (minHashKey[i] < minVal) minVal = minHashKey[i]
  }
  //console.log(minVal)
  return resultMap.get(minVal)
}
console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))

//time : O(NlogN + MlogM) | space: O(1)
const smallestDifference_ = (arrayOne, arrayTwo) => {
  if (arrayOne === [] && arrayTwo === []) return []

  arrayOne.sort((a, b) => {
    return a - b
  })
  arrayTwo.sort((a, b) => {
    return a - b
  })

  let i = 0
  let j = 0
  let difference = Number.MAX_SAFE_INTEGER
  let minimumDifference = Number.MAX_SAFE_INTEGER
  let result = []
  while (i < arrayOne.length && j < arrayTwo.length) {
    let firstNum = arrayOne[i]
    let secondNum = arrayTwo[j]
    if (firstNum === secondNum) {
      return [firstNum, secondNum]
    } else if (firstNum > secondNum) {
      difference = Math.abs(firstNum - secondNum)
      j++
    } else {
      difference = Math.abs(firstNum - secondNum)
      i++
    }
    if (difference < minimumDifference) {
      minimumDifference = difference
      result = [firstNum, secondNum]
    }
  }
  return result
}
console.log(smallestDifference_([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))
