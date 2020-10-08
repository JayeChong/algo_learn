function f(s) {
  let str = s.split('');
  let LeftFlag = '';  // R
  let RightFlag = ''; // L
  let f = 0;
  let b = 0;
  while (f <= str.length) {
    let curStr = str[f] || '.';
    if (curStr !== '.' || f === str.length) {
      LeftFlag = str[b];
      RightFlag = curStr;
      // 整片往一个方向倒
      if (LeftFlag === RightFlag || (RightFlag === 'L' && LeftFlag === '.') || (LeftFlag === 'R' && RightFlag === '.')) {
        for (let bi = b; bi < f; bi++) {
          str[bi] = LeftFlag !== '.' ? LeftFlag : RightFlag;
        }
      }
      // 双向倒
      if (LeftFlag === 'R' && RightFlag === 'L') {
        let index = (f + b) / 2;
        for (let bi = b + 1; bi < f; bi++) {
          str[bi] = bi < index ? 'R' : (bi > index ? 'L' : '.')
        }
      }
      b = f; f++;
    } else {
      f++;
    }
  }
  return str;
}

s = '..L.R...LR..L..';
s1 = '..L..R.....L...L...R....R..L..R..'
s2 = 'L..L...R...R....L..R..R...L..RR....L'

let res = f(s).join('');
console.log(s);
console.log(res);
console.log('原来: ', s1);
console.log('现在: ', f(s1).join(''));
console.log('原来: ', s2);
console.log('现在: ', f(s2).join(''));