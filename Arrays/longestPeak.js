// time: O(N) | space: O(1)
const longestPeak = (arr) => {
  let maxCount = Number.MIN_VALUE
  let count = 0
  for (let i = 1; i < arr.length - 1; i++) {
    let isPeak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i]
    if (!isPeak) continue

    //isPeak === true
    let L = i - 2
    while (L >= 0 && arr[L] < arr[L + 1]) L--

    let R = i + 2
    while (R < arr.length && arr[R] < arr[R - 1]) R++

    count = R - L - 1
    maxCount = Math.max(count, maxCount)
  }
  console.log(maxCount)
}

longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])
