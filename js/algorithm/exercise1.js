const arr = [1, 2, 3, 4];

function calculateSum(arr) {
  return arr.reduce((sum, item) => {
    return (sum += item);
  }, 0);
}

const result = calculateSum(arr);
console.log(result);