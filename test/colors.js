var toxic = require('../toxic')
var color = require('../safe');
require('../toxic')

var _styles = require('../lib/styles-name')
var colors = _styles.colors;
var styles = _styles.styles;

console.log('\n')

styles.forEach(function (key) {
  process.stdout.write("  " + key[key]);
});

var str = ' "\\n  " + ';
colors.forEach(function (key) {
  str += 'color.' + key + '(" ' + key + '       ") +';
});
str += ' "\\n  " + ';
colors.forEach(function (key) {
  str += 'color.' + key + '_bt(" ' + key + '_bt    ") +';
});

console.log(eval(str.replace(/\+$/, '')))

colors.forEach(function (key) {
  process.stdout.write("  " + eval('" ' + key + "_bbt" + ' ".' + key + "_bbt"))
});
console.log();
colors.forEach(function (key) {
  process.stdout.write("  " + eval('" ' + key + "_b  " + ' ".' + key + "_b"))
});
console.log();