module.exports = function countCats(arr) {
  let flat_arr = arr.reduce((acc, val) => acc.concat(val), []);
  let count = 0;
  for(let i = 0; i < flat_arr.length; i++) {
    if (flat_arr[i] == '^^') {
      count++
    }
  }
  return count
};
