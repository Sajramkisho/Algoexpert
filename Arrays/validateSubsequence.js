//https://www.algoexpert.io/questions/validate-subsequence

// if order doesn't matters
// _____________________________________________________________________________________________

//time: O(N^2) | space: O(1)
const validateSubsequence = (arr, seq) => {
  let count = 0
  for (let i = 0; i < seq.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === seq[i]) {
        count++
      }
    }
  }
  if (count === seq.length) return true
  return false
}

console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))

//time: O(N) | space: O(N)
const validateSubsequence_ = (arr, seq) => {
  let freqMap = new Map()
  arr.forEach((element) => {
    freqMap.set(element, 1)
  })

  let count = 0
  seq.forEach((element) => {
    if (freqMap.has(element)) {
      count++
    }
  })
  if (count === seq.length) return true
  return false
}

console.log(validateSubsequence_([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))

//_________________________________________________________________________________________________

//if order matters
//time: O(N) | space: O(1)
const validateSubsequence__ = (arr, seq) => {
  let i = 0
  let j = 0
  while (i < arr.length) {
    if (arr[i] === seq[j]) {
      i++
      j++
    } else if (arr[i] !== seq[j]) {
      i++
    }
  }
  if (j === seq.length) return true
  return false
}
console.log(validateSubsequence__([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
