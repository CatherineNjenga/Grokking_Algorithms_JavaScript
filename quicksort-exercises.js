// Exercises
// 4.1 Sum function with a loop
function sum(arr) {
  let total = 0;
  for (num of arr) {
    total += num;
  }
  return total;
}

let array1 = [2, 4, 6, 12];
console.log(sum(array1));

// 4.1 Sum function with recursion.
function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumRec(arr.slice(1));
  }
}

console.log(sumRec(array1));

// 4.2 Function count items with recursion.
function countItems(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    // return length of the first number + length of the remaining elements in the array
    return 1 + countItems(arr.slice(1))
  }
}

console.log(countItems(array1));

// 4.3 function max with a loop.
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

// 4.3 Function maximum number with recursion.
function maxNumber(arr) {
  let max = arr[0];
  if (arr.length == 1) {
    return arr[0];
  } else {
    return maxNumber(arr.filter(element => element > max));
  }
}
console.log(maxNumber([2, 5, 7, 14, 5]));

// 4.4 function for binary search with a loop.
function binarySearch(arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    binarySearch(arr.length / 2)
  }
}


