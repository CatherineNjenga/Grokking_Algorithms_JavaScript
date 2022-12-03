function findSmallest(array) {
  let smallest = array[0];
  let smallestIndex = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  // A new array to save the sorted elements
  let newArr = [];

  // A variable to save the length of the array.
  let length = arr.length;

  // Loop through the array and each time check for the smallest index
  for (let i = 0; i < length; i += 1) {
    let smallest = findSmallest(arr);

    // Add the element at the smallest index
    newArr.push(arr[smallest]);

    // Remove only the element at the smallest index from the arr.
    arr.splice(smallest, 1);
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));