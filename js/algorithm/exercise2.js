const arr = [10, 5, 8];

let max = arr[0];
function findMaxItem(arr) {
  return arr.reduce((max, item) => {
    if(max < item) {
        max = item;
    }
    return max;
  }, arr[0]);
}

function findMinItem(arr) {
  return arr.reduce((min, item) => {
    if(item < min) {
        min = item;
    }
    return min;
  }, arr[0]);
}

const maxItem = findMaxItem(arr);
const minItem = findMinItem(arr);

result = `So lon nhat: ${maxItem}, So nho nhat: ${minItem}`;
console.log(result);
