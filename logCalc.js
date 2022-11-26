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

console.log(log(1024));