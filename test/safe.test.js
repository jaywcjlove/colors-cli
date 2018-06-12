var color = require('../safe');

var _styles = require('../lib/styles-name')
var colors = _styles.colors;
// var styles = _styles.styles;

var str = '"\\n  Font Bright Color:\\n\\n  " + ';

colors.forEach(function(key) {
  str += 'color.' + key + '("' + key + '   ") +';
});

str += ' "\\n  " + ';

colors.forEach(function (key) {
  str += 'color.' + key + '_bt("' + key + '   ") +';
});

console.log(eval(str.replace(/\+$/, '')))


str = ' "\\n  Background Bright Color:\\n\\n  " +';

colors.forEach(function (key) {
  str += 'color.' + key + '.' + key + '_b("' + key + ' color") +';
});
str += '"\\n  " + ';
colors.forEach(function (key) {
  str += 'color.' + key + '.' + key + '_bbt("' + key + ' color") +';
});

console.log(eval(str.replace(/\+$/, '')))
console.log()

// 计划实现
//
// clr.art('.........\n. Hello .\n' .........\n', {
//      ".":clr.red.bold('H')
//
// })
//
// color('在以下示例中，@abc{Object.defineProperty} 函数向用户@ab2{定义}的对象添加访问器属性。',{
//     "abc":"yellow,blue_bg",
//     "ab2":"underline,blink,red"
// })
