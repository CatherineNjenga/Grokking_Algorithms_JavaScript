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
  let newArr = [];
  let arrayCopy = arr.slice();
  // In a loop
  for (let i = 0; i < arrayCopy.length; i += 1) {
    let smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr = arr.filter(element => {
      return element != arr[smallest]
    })
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));