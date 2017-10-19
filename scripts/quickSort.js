function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array.pop();
  let lesserArray = [];
  let greaterArray = [];
  while (array.length) {
    if (array[array.length -1] >= pivot) {
      greaterArray.push(array.pop());
    } else {
      lesserArray.push(array.pop());
    }
  }
  return [...quickSort(lesserArray), pivot, ...quickSort(greaterArray)];

};

module.exports = quickSort;
