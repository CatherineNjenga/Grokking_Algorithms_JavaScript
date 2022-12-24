// Exercises
// 4.1 Add up all elements in an array and return the total.
// Function declared with a loop.
function sum(arr) {
  let total = 0;
  for (num of arr) {
    total += num;
  }
  return total;
}

let array1 = [2, 4, 6, 12];
console.log(sum(array1));

// 4.1 Function declared with recursion.
function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumRec(arr.slice(1));
  }
}

console.log(sumRec(array1));

// 4.2 Write a recursive function to count the number of elements in an array.
// Function declared with recursion.
function countItems(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    // return length of the first number + length of the remaining elements in the array
    return 1 + countItems(arr.slice(1))
  }
}

console.log(countItems(array1));

// 4.3 Find the maximum number in an array of numbers.
// Function declared with a loop.
function max(arr) {
  let high = 0;
  for (let num of arr) {
    if (num > high) {
      high = num;
    }
  }
  return high;
}
console.log(max(array1));

// 4.3 Function declared with recursion.
function maxNumber(arr) {
  let max = arr[0];
  if (arr.length == 1) {
    return arr[0];
  } else {
    return maxNumber(arr.filter(element => element > max));
  }
}
console.log(maxNumber([2, 5, 7, 14, 16]));

// 4.4 Binary search is a divide-and-conquer algorithm.
// Function declared with recursion.
let array = [2, 4, 9, 14, 16];

function binarySearchRec(arr, searchElement) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 || arr[mid] === searchElement) {
    if (arr[0] === searchElement) {
      console.log(`Found ${searchElement} at index ${array.indexOf(searchElement)}`);
      return;
    } else if (arr[mid] === searchElement) {
      console.log(`Found ${searchElement} at index ${array.indexOf(searchElement)}`);
    }else if (arr[0] != searchElement){
      console.log(`${searchElement} not found.`);
      return;
    }
  } else if (searchElement < arr[mid]) {
    let newArray = arr.slice(0, mid);
    binarySearchRec(newArray, searchElement);
  } else if (searchElement > arr[mid]) {
    let newArray = arr.slice(mid + 1, arr.length);
    binarySearchRec(newArray, searchElement);
  }
}

console.log(binarySearchRec(array, 16));