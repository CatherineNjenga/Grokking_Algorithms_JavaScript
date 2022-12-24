function lookForKey(mainBox) {

  // To-do makeAPileToLookThrough() function declaration.
  let pile = makeAPileToLookThrough(mainBox);
  while (pileIsNotEmpty) {

    // To-do grabABox() function declaration.
    let box = grabABox(pile);
    for (let item in box) {

      // To-do isABox() function declaration.
      if (isABox(item)) {
        pile.push(item);

        // To-do itemIsAKey() function declaration.
      } else if (itemIsAKey(item)) {
        console.log("Found the key!");
      }
    }
  }
}

function lookForKey(box) {
  for (itemInBox;;) {
    if (isABox(item)) {
      lookForKey(item);
    } else if(isAKey(item)) {
      console.log("Found the key!");
    }
  }
}

// Example of a call stack
function greet(name) {
  console.log(`hello ${name}!`);
  greet2(name);
  console.log("getting ready to say bye...");
  bye();
}

function greet2(name) {
  console.log(`how are you, ${name}?`);
}

function bye() {
console.log("ok, bye!");
}

// Using recursion to declare a factorial function
function fact(x) {
  if (x === 1) {
    return 1;
  } else {
    return x * fact(x - 1);
  }
}

console.log(fact(3));

// Using recursion to declare a logarithmic calculator
let loop = 0;

function log(number) {
  if ((number / 2 === 1) || (number / 2 === 1.5)) {
    return loop = 1
  } else {
    log(Math.ceil(number / 2));
    loop += 1;
  }

  return loop;
}

console.log(log(8));