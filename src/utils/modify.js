export function modify(arr) {
  arr = [...arr];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 === 0) {
      arr[i] = Math.round(Math.sqrt(Math.abs(arr[i] - 10)) * 100) / 100;
    }
  } 
  return arr;
}

export function swapCols(matrix, idx1, idx2) {
  for (let i = 0; i < matrix.length; ++i) {
    let temp = matrix[i][idx1];
    matrix[i][idx1] = matrix[i][idx2];
    matrix[i][idx2] = temp;
  }
}