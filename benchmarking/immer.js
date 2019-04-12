/**
 * A simple performance benchmarking for immer against JSON.parse/JSON.stringify
 */

const immer = require('immer');

const N = 1000 * 1000;

function json_parse_stringify(obj) {
  const newObj = JSON.parse(JSON.stringify(obj));
  newObj.name = 'jack';
  return newObj;
}

function immer_produce(obj) {
  return immer.produce(obj, s => {
    s.name = 'jack';
  });
}

const method = process.argv[2];
let func;
if (method === 'json') {
  func = json_parse_stringify;
} else if (method === 'immer') {
  func = immer_produce;
}

let i = 0;
const obj = { name: 'gary' };

console.log(`Run ${method} for ${N} times\n`);

console.time(method);
i = 0;
while (i < N) {
  func(obj);
  i += 1;
}
console.timeEnd(method);

console.log(`\nMemory Usage: \n`);

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`);
}
