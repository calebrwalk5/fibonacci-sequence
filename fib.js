const PROMPT = require('readline-sync');

repeat = Number(PROMPT.question(`\nHow many fibonacci numbers do you want to display? `));

var fibonacci = function (num) {
  if (num===1) {
    return [0, 1];
} else {
    var s = fibonacci(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci(repeat));