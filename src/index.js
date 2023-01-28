
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  for (let i = 0; i < matrix?.length || 0; i++) {
    const arr = i % 2 === 0 ? matrix[i].sort((a, b) => a - b) : matrix[i].sort((a, b) => b - a);
    console.log(arr)
    res.push(...arr);
  };
  return res;
}
