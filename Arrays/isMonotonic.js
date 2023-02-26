//given an array return true or false if it is monotonic or not
//monotonic - non decreasing or non increasing ( these can have equal values too)
//caveat: check for both cases

// time: O(N) | space: O(1)
const isMonotonic = (arr) => {
  if (arr.length == 0) return

  let lo = 0
  let hi = arr.length - 1
  if (arr[lo] <= arr[hi]) {
    lo++
    hi--
    while (lo <= hi) {
      if (arr[lo] <= arr[hi]) {
        lo++
        hi--
      } else return false
    }
    return true
  } else if (arr[lo] >= arr[hi]) {
    lo++
    hi--
    while (lo >= hi) {
      if (arr[lo] >= arr[hi]) {
        lo++
        hi--
      } else return false
    }
    return true
  }
}
console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))
console.log(isMonotonic([10, 8, 2, 11]))
