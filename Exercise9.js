function calculateMatrixSum(matrix) {
 const sum = matrix.map(number => number.reduce((a, b) => a + b))
 return sum.reduce((acc,val) => acc + val, 0);
}
  