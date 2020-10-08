/*
N 岛的数量
3
K 每条桥的最大预算
400
arr 每个桥路线以及它对应的花费
[
  [1,2, 200],
  [2,3, 300]
]
*/
function f(N, K, arr) {
  let bool = true;
  // 过滤出花费不超预算的桥
  let bridges = arr.filter(item => {
    const cost = item[2];
    return cost <= K
  })
  if (bridges.length === 0) {
    bool = false;
  } else {
    console.log(bridges);
    let res = [];
    const [a, b] = bridges[0];
    res = a === b ? [a] : [a, b];
    let len = bridges.length;
    for (let i = 1; i < len; i++) {
      const [curA, curB] = bridges[i];
      for (let j = i + 1; j < len; j++) {
        let cur = bridges[j];
        if ((cur.indexOf(curA) !== -1 || cur.indexOf(curB) !== -1)) {
          console.log('cur: ', cur, curA, curB);
          (res.indexOf(curA) === -1) && res.push(curA);
          (res.indexOf(curB) === -1) && res.push(curB);
        }
      }
    }
    console.log(res);
    if (res.length < N) {
      bool = false;
    }
  }
  return bool ? 'Yes' : 'No'
}

let N = 4;
let K = 400;
let arr = [
  [1, 2, 200],
  [3, 4, 100],
];
console.log(f(N, K, arr));