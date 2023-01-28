// A hash function maps strings to numbers.
// Hash tablesa are also known as hash maps, maps, dictionaries, and associative arrays
let book = new Map();
book.set("apple", 0.67);
book.set("milk", 1.49);
book.set("avocado", 1.49);
console.log(book);
console.log(book.get("avocado"));

let phoneBook = new Map();
phoneBook.set("jenny", 8675309);
phoneBook.set("emergency", 911);
console.log(phoneBook.get("jenny"));

let voted = new Map();

function checkVoter(name) {
  if (voted.get(name)) {
    console.log("kick them out");
  } else {
    voted.set(name, true);
    console.log("let them vote!");
  }
}

console.log(checkVoter("tom"));
console.log(checkVoter("mike"));
console.log(checkVoter("mike"));

let cache = new Map();
function getPage(url) {
  if (cache.get(url)) {
    return cache(url);  // returns cached data
  } else {
    let data = getDataFromServer(url);
    cache.set(url, data); // saves this data in your cache first
    return data;  
  }
}

