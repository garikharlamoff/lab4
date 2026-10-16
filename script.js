//ДЛЯ РЕШЕНИЯ ИСПОЛЬЗУЕМ ДВА СПОСОБА 1 - ЦИКЛЫ 2 - МЕТОДЫ МАССИВОВ

/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {number[]} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
function getIntervalArray1(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

function getIntervalArray2(start, end) {
  if (start > end) return [];
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {number[]} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
function sumArrays1(arr1, arr2) {
  const result = [];
  const maxLen = arr1.length > arr2.length ? arr1.length : arr2.length;
  
  for (let i = 0; i < maxLen; i++) {
    const val1 = arr1[i] !== undefined ? arr1[i] : 0;
    const val2 = arr2[i] !== undefined ? arr2[i] : 0;
    result.push(val1 + val2);
  }
  return result;
}

function sumArrays2(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  return Array.from({ length: maxLength }, (_, i) => (arr1[i] || 0) + (arr2[i] || 0));
}
/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {any[]} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement1(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

function findElement2(arr, value) {
  return arr.indexOf(value);
}

/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
function findAllOccurrences1(arr, item) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      count++;
    }
  }
  return count;
}

function findAllOccurrences2(arr, item) {
  return arr.filter(el => el === item).length;
}

/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
function removeFalsyValues1(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

function removeFalsyValues2(arr) {
  return arr.filter(Boolean);
}

/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {string[]} arr - The input array.
 * @return {number[]} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
function getStringsLength1(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].length);
  }
  return result;
}

function getStringsLength2(arr) {
  return arr.map(str => str.length);
}

/**
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {number[]} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
function getAverage1(arr) {
  if (arr.length === 0) return 0;
  
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return Number((total / arr.length).toFixed(2));
}

function getAverage2(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, current) => acc + current, 0);
  return Number((sum / arr.length).toFixed(2));
}

/**
 * Checks if all strings in an array have the same length.
 *
 * @param {string[]} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
function isSameLength1(arr) {
  if (arr.length === 0) return true;
  const len = arr[0].length;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length !== len) {
      return false;
    }
  }
  return true;
}

function isSameLength2(arr) {
  if (arr.length === 0) return true;
  return arr.every(str => str.length === arr[0].length);
}

/**
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {number[]} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
function isValueEqualsIndex1(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return true;
    }
  }
  return false;
}

function isValueEqualsIndex2(arr) {
  return arr.some((value, index) => value === index);
}

/**
 * Inserts the item into specified array at specified index.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 * @return {any[]}
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
function insertItem1(arr, item, index) {
  const result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (i === index) {
      result.push(item);
    }
    if (i < arr.length) {
      result.push(arr[i]);
    }
  }
  return result;
}

function insertItem2(arr, item, index) {
  const result = [...arr];
  result.splice(index, 0, item);
  return result;
}

/**
 * Returns the n first items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getHead1(arr, n) {
  const result = [];
  const limit = n < arr.length ? n : arr.length;
  for (let i = 0; i < limit; i++) {
    result.push(arr[i]);
  }
  return result;
}

function getHead2(arr, n) {
  return arr.slice(0, n);
}

/**
 * Returns the n last items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getTail1(arr, n) {
  const result = [];
  if (n <= 0) return result;
  
  const start = arr.length - n > 0 ? arr.length - n : 0;
  for (let i = start; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

function getTail2(arr, n) {
  if (n === 0) return [];
  return arr.slice(-n);
}

/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray1(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

function doubleArray2(arr) {
  return arr.concat(arr);
}

/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {any[]} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
function toStringList1(arr) {
  if (arr.length === 0) return '';
  let result = '' + arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    result += ',' + arr[i];
  }
  return result;
}

function toStringList2(arr) {
  return arr.join(',');
}

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
function distinct1(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(arr[i]);
    }
  }
  return result;
}

function distinct2(arr) {
  return [...new Set(arr)];
}

/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {any[]} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
function createNDimensionalArray1(n, size) {
  if (n === 1) {
    const base = [];
    for (let i = 0; i < size; i++) base.push(0);
    return base;
  }
  
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(createNDimensionalArray(n - 1, size));
  }
  return result;
}

function createNDimensionalArray2(n, size) {
  if (n === 1) return Array(size).fill(0);
  return Array.from({ length: size }, () => createNDimensionalArray(n - 1, size));
}

/**
 * Flattens a nested array into a single-level array.
 *
 * @param {any[]} nestedArray - The nested array to be flattened.
 * @return {any[]} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
function flattenArray1(nestedArray) {
  let result = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      // Рекурсивно сглаживаем вложенный массив и добавляем элементы в цикл
      const flatChild = flattenArray(nestedArray[i]);
      for (let j = 0; j < flatChild.length; j++) {
        result.push(flatChild[j]);
      }
    } else {
      result.push(nestedArray[i]);
    }
  }
  return result;
}

function flattenArray2(nestedArray) {
  return nestedArray.flat(Infinity);
}

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {any[]} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {any[]} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany1(arr, childrenSelector) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const children = childrenSelector(arr[i]);
    for (let j = 0; j < children.length; j++) {
      result.push(children[j]);
    }
  }
  return result;
}

function selectMany2(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {number[][]} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
function calculateBalance1(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i][0] - arr[i][1];
  }
  return total;
}

function calculateBalance2(arr) {
  return arr.reduce((balance, month) => balance + (month[0] - month[1]), 0);
}

/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {any[]} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {any[]} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
function createChunks1(arr, chunkSize) {
  const chunks = [];
  let currentChunk = [];
  
  for (let i = 0; i < arr.length; i++) {
    currentChunk.push(arr[i]);
    if (currentChunk.length === chunkSize || i === arr.length - 1) {
      chunks.push(currentChunk);
      currentChunk = [];
    }
  }
  return chunks;
}

function createChunks2(arr, chunkSize) {
  const count = Math.ceil(arr.length / chunkSize);
  return Array.from({ length: count }, (_, i) => 
    arr.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
}

/**
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {number[]} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds1(len) {
  const result = [];
  let current = 1;
  for (let i = 0; i < len; i++) {
    result.push(current);
    current += 2;
  }
  return result;
}

function generateOdds2(len) {
  return Array.from({ length: len }, (_, index) => index * 2 + 1);
}

/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {any[]} arr - The input multidimensional array
 * @param {number[]} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */
function getElementByIndices1(arr, indices) {
  let current = arr;
  for (let i = 0; i < indices.length; i++) {
    current = current[indices[i]];
  }
  return current;
}

function getElementByIndices2(arr, indices) {
  return indices.reduce((currentLevel, index) => currentLevel[index], arr);
}

/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
function getFalsyValuesCount1(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      count++;
    }
  }
  return count;
}

function getFalsyValuesCount2(arr) {
  return arr.filter(el => !el).length;
}

/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {number[][]} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix1(n) {
  const matrix = [];
  
  for (let i = 0; i < n; i++) {
    const row = [];
    
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    matrix.push(row);
  }
  return matrix;
}
function getIdentityMatrix2(n) {
  return Array(n).fill(null).map((_, rowIndex) => {
    const row = Array(n).fill(0);
    row[rowIndex] = 1;
    return row;
  });
}

/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {number[]} numbers - The array of numbers.
 * @return {number[]} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers1(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
}

function getIndicesOfOddNumbers2(numbers) {
  return numbers
    .map((num, idx) => (num % 2 !== 0 ? idx : -1))
    .filter(idx => idx !== -1);
}

/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {number[]} arr - The input array.
 * @return {string[]} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues1(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let hex = arr[i].toString(16).toUpperCase();
    while (hex.length < 6) {
      hex = '0' + hex;
    }
    result.push('#' + hex);
  }
  return result;
}

function getHexRGBValues2(arr) {
  return arr.map(num => '#' + num.toString(16).padStart(6, '0').toUpperCase());
}

/**
 * Returns the n largest values from the specified array
 *
 * @param {number[]} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {number[]} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems1(arr, n) {
  const copy = [...arr];
  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length - 1 - i; j++) {
      if (copy[j] < copy[j + 1]) {
        const temp = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = temp;
      }
    }
  }
  const result = [];
  const limit = n < copy.length ? n : copy.length;
  for (let i = 0; i < limit; i++) {
    result.push(copy[i]);
  }
  return result;
}

function getMaxItems2(arr, n) {
  return [...arr].sort((a, b) => b - a).slice(0, n);
}

/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements1(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    let isInArr2 = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        isInArr2 = true;
        break;
      }
    }
    if (isInArr2) {
      let alreadyAdded = false;
      for (let k = 0; k < result.length; k++) {
        if (result[k] === arr1[i]) {
          alreadyAdded = true;
          break;
        }
      }
      if (!alreadyAdded) result.push(arr1[i]);
    }
  }
  return result;
}

function findCommonElements2(arr1, arr2) {
  const common = arr1.filter(el => arr2.includes(el));
  return [...new Set(common)];
}

/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence1(nums) {
  if (nums.length === 0) return 0;
  let globalMax = 1;
  let currentMax = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentMax++;
    } else {
      currentMax = 1;
    }
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }
  return globalMax;
}

function findLongestIncreasingSubsequence2(nums) {
  if (nums.length === 0) return 0;
  let currentMax = 1;
  
  return nums.reduce((globalMax, currentNum, index) => {
    if (index === 0) return globalMax;
    currentMax = currentNum > nums[index - 1] ? currentMax + 1 : 1;
    return currentMax > globalMax ? currentMax : globalMax;
  }, 1);
}

/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {any[]} arr - The input array
 * @return {any[]}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex1(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      result.push(arr[i]);
    }
  }
  return result;
}

function propagateItemsByPositionIndex2(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {any[]} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {any[]} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray1(arr, n) {
  if (arr.length === 0) return [];
  const result = [...arr];
  const steps = ((n % arr.length) + arr.length) % arr.length;
  
  for (let i = 0; i < steps; i++) {
    const last = result.pop();
    result.unshift(last);
  }
  return result;
}

function shiftArray2(arr, n) {
  if (arr.length === 0) return [];
  const k = ((n % arr.length) + arr.length) % arr.length;
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}

/**
 * Sorts digit names.
 *
 * @param {string[]} arr - The input array.
 * @return {string[]} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder1(arr) {
  const order = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const copy = [...arr];
  
  for (let i = 1; i < copy.length; i++) {
    let current = copy[i];
    let currentIndex = -1;
    for (let m = 0; m < order.length; m++) if (order[m] === current) currentIndex = m;
    
    let j = i - 1;
    while (j >= 0) {
      let prevIndex = -1;
      for (let m = 0; m < order.length; m++) if (order[m] === copy[j]) prevIndex = m;
      
      if (prevIndex > currentIndex) {
        copy[j + 1] = copy[j];
        j--;
      } else {
        break;
      }
    }
    copy[j + 1] = current;
  }
  return copy;
}

function sortDigitNamesByNumericOrder2(arr) {
  const order = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return [...arr].sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail1(arr) {
  const result = [];
  const mid = Math.floor(arr.length / 2);
  
  const tailStart = arr.length % 2 === 0 ? mid : mid + 1;
  for (let i = tailStart; i < arr.length; i++) {
    result.push(arr[i]);
  }
  
  if (arr.length % 2 !== 0) {
    result.push(arr[mid]);
  }
  
  for (let i = 0; i < mid; i++) {
    result.push(arr[i]);
  }
  return result;
}

function swapHeadAndTail2(arr) {
  const mid = Math.floor(arr.length / 2);
  const head = arr.slice(0, mid);
  const middle = arr.length % 2 === 0 ? [] : [arr[mid]];
  const tail = arr.slice(arr.length % 2 === 0 ? mid : mid + 1);
  
  return tail.concat(middle, head);
}


function runAutoTest() {
    const command = prompt("Введите функцию для проверки, например: getHypotenuse(3, 4)");
    
    if (command) { 
        try {
            const result = eval(command); 
            alert("Результат: " + result);
        } catch (error) {
            alert("Ошибка в команде: " + error.message);
        }
  
        runAutoTest();
    }
}

runAutoTest();