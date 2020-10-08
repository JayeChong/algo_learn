function main(str) {
  let arrs = [];
  for (let i = 0; i < str.length - 2; i += 3) {
    arrs.push(str.slice(i, i + 3).split(''));
  }
  let count = 0;
  for (let i = 0; i < 3; i++) {
    let n = 1;
    let cur = arrs[0][i];
    while (n < arrs.length) {
      if (cur !== arrs[n][i]) {
        count++;
        break;
      } else {
        n++
      }
    }
  }
  return !(count > 1);
}
let s = 'ABCABDABDABEABEABF'
console.log(main(s));