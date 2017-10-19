function mergeSort(array) { 
  if (array.length <= 1) { 
    return array;
  }
  const midPoint = Math.floor(array.length / 2);
  const a = array.slice(0, midPoint); 
  const b = array.slice(midPoint, array.length); 

  return merge(mergeSort(a), mergeSort(b)); 
};

function merge(a, b) { 
  let result = [];

  while (a.length && b.length) { 
    if (a[0] <= b[0]) {
      result.push(a.shift());
    } else {
      result.push(b.shift());
    }
  }
  while (a.length) { 
    result.push(a.shift());
  }
  while (b.length) { 
    result.push(b.shift());
  }
  return result;
};

module.exports = mergeSort;
