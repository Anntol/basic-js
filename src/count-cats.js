module.exports = function countCats(matrix) {
  let result = 0;
  if (matrix !== undefined) {
    for (let i = 0; i < matrix.length; i ++) {
      for (j = 0; j < matrix[i].length; j ++) {
        if (matrix[i][j] === '^^') result++;
      }
    }
  }
  console.log (result);
  return result;
};