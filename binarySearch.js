function binarySearch(array, element) {
  let low = 0;
  let high = array.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let guess = array[mid];
    if (guess === element) {
      return mid;
    }
    if (guess > element) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
  
}

let myList = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(myList, 9));
console.log(binarySearch(myList, -1));