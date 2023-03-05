// //time: O(N) | space: O(N)

// const removeDuplicates = (arr) => {
//   let set = new Set()

//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     set.add(arr[i])
//   }
//   //console.log(set)
//   let i = 0
//   set.forEach((value) => {
//     let temp = value
//     arr[i] = temp
//     if (i < set.size) i++
//     count++
//   })

//   return count
//   //console.log(arr)
// }

//time: O(N) | space: O(1)
const removeDuplicates = (nums) => {
  let i
  let j
  for (j = 1, i = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      nums[++i] = nums[j]
    }
  }
  console.log(nums)
  return i + 1
}
console.log(removeDuplicates([1, 2, 3, 3, 4, 6, 7, 7, 7, 9, 9, 10, 14]))
