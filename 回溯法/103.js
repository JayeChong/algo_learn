
function snakeMatrix(num, num2) {
  const map = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  console.log(map.length);
  let row = num;
  let col = num2;
  let q = Math.ceil(num / 2);
  let result = new Array(row);
  for (let i = 0; i < row; i++) {
    result[i] = new Array(col);
  }
  let n = 0;
  let begin = 1;
  while (n <= q) {
    let top = col - 2 * n;
    for (let i = 0; i < top; i++) {
      //
      result[n][i + n] = [(begin + i) % 26];
    }
    let right = row - 2 * n;
    for (let i = 0; i < right; i++) {
      //
      result[i + n][col - n - 1] = [(begin + top + i - 1) % 26];
    }
    let bottom = col - 2 * n;
    for (let i = 0; i < bottom; i++) {
      //
      result[row - n - 1][col - n - i - 1] = [(begin + top + right + i - 2) % 26];
    }
    let left = row - 2 * n - 1;
    for (let i = 0; i < left; i++) {
      //
      result[row - i - n - 1][n] = [(begin + top + right + bottom + i - 3) % 26];
    }
    begin += top + right + bottom + left - 3;
    n++;
  }
  return result;
}
console.log(snakeMatrix(5, 6));