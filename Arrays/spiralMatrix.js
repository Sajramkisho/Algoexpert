//time: O(N*M) | space: O(1)

const spiralTraversal = (matrix) => {
  let L = 0,
    R = matrix[0].length
  let T = 0,
    B = matrix.length

  let result = []
  while (L < R && T < B) {
    for (let i = L; i < R; i++) result.push(matrix[T][i])
    T++
    for (let i = T; i < B; i++) result.push(matrix[i][R - 1])
    R--

    //condition is when dimensions are different
    if (T < B) {
      for (let i = R - 1; i >= L; i--) result.push(matrix[B - 1][i])
      B--
    }
    if (L < R) {
      for (let i = B - 1; i >= T; i--) result.push(matrix[i][L])
      L++
    }
  }
  return result
}

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ]
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
console.log(spiralTraversal(matrix))
