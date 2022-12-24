// Worst-case scenario if the array is sorted
function quicksort1(array) {
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[0];
    let less = array.slice(1)
                    .filter(element => element < pivot);
    let greater = array.slice(1)
                       .filter(element => element > pivot);
    return quicksort1(less).concat(pivot, quicksort1(greater));
  }
}

// Average/best-case scenario for a sorted array. Pick an element from the array randomly and use as a pivot.
function quicksort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let randomIndex = Math.floor(Math.random() * array.length);
    let pivot = array[randomIndex];
    // To-do refactor to combine the chaining of method calls to one method call, probably reduce or map.
    let less = array.filter(element => element !== pivot)
                    .filter(element => element < pivot);
    let greater = array.filter(element => element !== pivot)
                       .filter(element => element > pivot);
    return quicksort(less).concat(pivot, quicksort(greater));
  }
}

console.log(quicksort([5, 10, 8, 2, 16, 1]));

