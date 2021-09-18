import { useState } from "react";
import { selectionSort, history } from "utils/selectionSort";

function sort(originalArr, compareFn) {
  let arr = [...originalArr];
  let len = arr.length
  for(let i = 0; i < len; ++i) {
    let minIndex = i + 1;
    for (let j = i + 2; j < len; ++j) {
      if (compareFn(arr[j], arr[minIndex]) < 0) {
        minIndex = j;
      }
    }
    if (compareFn(arr[i], arr[minIndex]) > 0) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        history.push([...arr]);
    }
  }
  return arr;
}


function compareNumbers(num1, num2) {
  return num1 - num2;
}

const matrix = [
  [5.2, 1.6, 7, 9.3, 2],
  [4.3, 1.2, 8, 917, 21],
  [10.2, 36, 1, 14.3, 29],
];

function App() {

  const [showSorted, setShowSorted] = useState(false);

  function renderMatrix(matrix) {
    function renderCell(data) {
      return <td style={{
        padding: 20, 
        border: '1px solid grey'
      }}>{data}</td>;
    } 
    function renderRow(row) {
      return <tr>{row.map(renderCell)}</tr>;
    }
    
    return (
      <table>
        <tbody>{matrix.map(renderRow)}</tbody>
      </table>
    )
  }

  function renderChange(matrix) {
    return <>
      {renderMatrix()}
      <br/>
    </>
  }

  return (
    <> 
      {renderMatrix(matrix)}
      <br/>
      <button onClick={() => setShowSorted(true)}>Сортувати стовпці матриці</button>
      <br/>
      <br/>
      {showSorted && (
        <>
          <span>Відсортована матриця:</span>
          <br/>
          <br/>
          {renderMatrix(selectionSort(matrix))}
        </>
      )}
    </>
  );
}

export default App;