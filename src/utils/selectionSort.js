import { swapCols } from "./modify";
export let history = [];

function compareNumbers(num1, num2) {
  return num1 - num2;
}

export function selectionSort(originalMatrix) {
  const matrix = [];
  for (let i = 0; i < originalMatrix.length; ++i) {
    matrix.push([...originalMatrix[i]]);
  }
  const arr = matrix[0];
  let len = arr.length
  for(let i = 0; i < len; ++i) {
    let minIndex = i + 1;
    for (let j = i + 2; j < len; ++j) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (arr[i] > arr[minIndex]) {
      swapCols(matrix, i, minIndex);
      history.push([...arr]);
    }
  }
  return matrix;
}