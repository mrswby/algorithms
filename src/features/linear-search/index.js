const linearSearch = (array, predicate) => {
  const foundElements = [];

  array.forEach((element, index) => {
    predicate(element) && foundElements.push({
      value: element, index
    });
  });

  return foundElements;
}

export default linearSearch;