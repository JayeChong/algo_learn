// S也是正常的地方
// const map = [
//   ['S', '#', '+', '+', 'O', '#'],
//   ['O', 'X', 'X', '#', 'X', '#'],
//   ['+', '+', '+', '+', '+', '+'],
//   ['#', '#', '#', 'X', 'X', '#'],
//   ['+', '+', '#', 'O', '#', '+'],
//   ['O', 'X', 'O', '+', '+', 'X'],
// ];
const map = [
  ['#', '#', '+', '+', 'O', '#'],
  ['O', 'X', '#', '#', 'X', '#'],
  ['+', '+', '+', '+', '+', '+'],
  ['#', '#', '#', 'X', 'X', '#'],
  ['+', '+', '#', 'O', 'S', '+'],
  ['O', 'O', 'O', '+', '+', 'X'],
];
const route = 'SSDDDDDAWWSSSAWSSSADDD';
// map[row][col];
function move(map, r, c, dir, row, col, res, p, q, mark) {
  if (dir === 'S') {
    row = row + 1;
  }
  if (dir === 'A') {
    col = col - 1;
  }
  if (dir === 'W') {
    row = row - 1;
  }
  if (dir === 'D') {
    col = col + 1;
  }
  // 判断是否到过
  let visited = mark.filter((item) => item[0] === row && item[1] === col).length
  // 没有超出边界或碰到墙
  if (-1 < row && row < r && -1 < col && col < c && map[row][col] !== '#') {
    console.log('没越界或撞墙');
    if (visited) {
      return { row, col, res };
    } else {
      mark.push([row, col]);
      let cur = map[row][col];
      if (cur === '+' || cur === 'S') {
        return {
          row, col, res,
        };
      }
      if (cur === 'O') {
        return {
          row, col, res: res + p,
        };
      }
      if (cur === 'X') {
        return {
          row, col, res: res - q,
        };
      }
    }
  } else {
    // 超出边界要相应回退分数不变
    console.log('越界或撞墙');
    if (dir === 'S') {
      row = row - 1;
    }
    if (dir === 'A') {
      col = col + 1;
    }
    if (dir === 'W') {
      row = row + 1;
    }
    if (dir === 'D') {
      col = col - 1;
    }
    return { row, col, res };
  }
}

function main(map, r, c, p, q, route) {
  let start = [0, 0];
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (map[i][j] === 'S') {
        start = [i, j];
        break;
      }
    }
  }
  const mark = [];
  let [row, col] = start;
  console.log('row: ', row, ' col: ', col);
  let res = 0;
  route.split('').forEach(dir => {
    const rr = move(map, r, c, dir, row, col, res, p, q, mark);
    console.log(rr);
    const { row: newRow, col: newCol, res: newRes } = rr;
    row = newRow;
    col = newCol;
    res = newRes;
    console.log(dir, ' : ', row, col, res);
  });
  return res;
}

console.log(main(map, 6, 6, 20, 10, route));