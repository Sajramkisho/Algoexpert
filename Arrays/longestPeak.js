// time: O(N^2) | space: O(1)
const longestPeak = (arr) => {
  if (arr.length <= 2) return

  let count
  let maxCount = Number.MIN_VALUE
  for (let i = 0; i < arr.length; i++) {
    count = 0
    if (i == 0) continue
    else {
      let left = i - 1
      let right = i + 1
      while (left >= 0 || right < arr.length) {
        if (arr[i] > arr[left] && arr[i] > arr[right]) {
          count = 3
          left--
          right++
        } else if (arr[i] > arr[left] && arr[i] <= arr[right]) {
          count++
          left--
        } else if (arr[i] <= arr[left] && arr[i] > arr[right]) {
          count++
          right++
        } else break
      }
    }
    maxCount = Math.max(count, maxCount)
  }
  return maxCount
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))
