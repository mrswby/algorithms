export let history = [];

export function bubbleSort(array) {
  history.length = 0;
  
  let arr = [...array];
  let len = arr.length;
  for (let i  = 0; i < len; ++i) {
    let flag = true;

    for (let j = 0; j < len - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = false;
        history.push([...arr]);
      }
    }

    if (flag) break;
  } 

  return arr;
}