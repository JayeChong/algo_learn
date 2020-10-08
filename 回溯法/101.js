function Permutation(str) {
  const result = [];
  if (str) {
    queue = str.split('')
    PermutationCore(queue, result);
  }
  result.sort();
  return [... new Set(result)];
}

function PermutationCore(queue, result, temp = "", current = "") {
  current += temp;
  console.log('cur: ', current);
  if (queue.length === 0) {
    result.push(current);
    return;
  }
  for (let i = 0; i < queue.length; i++) {
    console.log('shift', i, ' ', queue, queue.length);
    temp = queue.shift();
    PermutationCore(queue, result, temp, current);
    queue.push(temp);
    console.log('push back', i, ' ', queue, queue.length);
  }
}

let abc = Permutation('abc');
console.log(abc);