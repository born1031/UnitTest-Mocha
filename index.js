var average = require('./modules/average');
var max = require('./modules/max');
var min = require('./modules/min');

var numArray = [31, 3, 22, 5, 8, 9, 12, 8];

var averageNum = average(numArray);
console.log(averageNum);

var maxNum = max(numArray);
console.log(maxNum);

var minNum = min(numArray);
console.log(minNum);