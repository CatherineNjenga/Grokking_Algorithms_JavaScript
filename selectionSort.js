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

  // A shallow copy of the original array to enable us access the length of the original array.
  let arrayCopy = arr.slice();

  // Loop through the array and each time check for the smallest index
  for (let i = 0; i < arrayCopy.length; i += 1) {
    let smallest = findSmallest(arr);
    newArr.push(arr[smallest]);

    // filter out the smallest element that have been added to the newArray.
    arr = arr.filter(element => {
      return element != arr[smallest]
    });
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));