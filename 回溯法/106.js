let a = `sdkf{%className%}jakfdsf{%age%}fff`;
const b = {
  className: '111',
  age: 28
}
const reg = /\{%(\w+)%\}/g;
// 方法一：正则表达式，匹配到组之后替换。
console.log(a.replace(reg, function () { return b[arguments[1]] }));

// 方法二：for循环
const arr = a.split('');
let l = 0;
let r = 0;
let res = [];
let addAble = true;
for (let i = 0; i < arr.length; i++) {
  let cur = arr[i];
  if (cur === '{') {
    l = i;
    addAble = false;
  }
  addAble && res.push(cur)

  if (cur === '}') {
    r = i;
    let k = a.substring(l + 2, r - 1);
    res.push(b[k])
    addAble = true;
  }
}

console.log(res.join(''));

