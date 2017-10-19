const chai = require('chai');
const assert = chai.assert;

const mergeSort = require('../scripts/mergeSort.js');
const arrayGenerator = require('../scripts/arrayGenerator.js');

describe ('mergeSort', () => {
  it('should be a function', () => {
    assert.isFunction(mergeSort);
  });

  it('should sort a small array of numbers', () => {
    const numbers = [3, 4, 1, 6, 5, 2];
    assert.deepEqual(mergeSort(numbers), [1, 2, 3, 4, 5, 6]);
  })

  it('should sort an array of negative numbers', () => {
    const numbers = [-77, 8, 0, -10, 20, -5, -34];
    assert.deepEqual(mergeSort(numbers), [-77, -34, -10, -5, 0, 8, 20]);
  })

  it('should sort letters alphabetically', () => {
    const letters = ['j', 'p', 'd', 'b', 'n', 'l'];
    assert.deepEqual(mergeSort(letters), ['b', 'd', 'j', 'l', 'n', 'p']);
  })

  it('should sort an array of 1000 numbers', () => {
    const numbers = arrayGenerator(1000);
    const result = mergeSort(numbers);
    for (let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    };
  });

  it('should sort an array of 10,000 numbers', () => {
    const numbers = arrayGenerator(10000);
    const result = mergeSort(numbers);
    for (let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    };
  });

  it('should sort an array of 20,000 numbers', () => {
    const numbers = arrayGenerator(20000);
    const result = mergeSort(numbers);
    for (let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    };
  });

  it('should sort an array of 50,000 numbers', () => {
    const numbers = arrayGenerator(50000);
    const result = mergeSort(numbers);
    for (let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    };
  });

  it('should sort an array of 100,000 numbers', () => {
    const numbers = arrayGenerator(100000);
    const result = mergeSort(numbers);
    for (let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i] <= result[i + 1], true);
    };
  });
});