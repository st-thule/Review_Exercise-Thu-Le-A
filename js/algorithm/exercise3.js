const arr = [1, 2, 3, 4];

function filterEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}

function filterOdd(arr) {
  return arr.filter((item) => item % 2 !== 0);
}
console.log(filterEven(arr));
console.log(filterOdd(arr));
