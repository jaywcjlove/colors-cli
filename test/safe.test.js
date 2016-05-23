var color = require('../safe');

var _styles = require('../lib/styles-name')
var colors = _styles.colors;
var styles = _styles.styles;

console.log("")
console.log(" Font Bright Color:")
console.log();

colors.forEach(function(key) {
  process.stdout.write("  "+ eval('color.'+key+'("'+key+'")') )
});
console.log();
colors.forEach(function(key) {
  process.stdout.write("  "+ eval('color.'+key+'_bt("'+key+'")') )
});


console.log("")
console.log("")
console.log(" Background Bright Color:")
console.log("")


colors.forEach(function(key) {
  process.stdout.write("  "+ eval('color.'+key+'.'+key+'_b("'+key+' color")') )
});
console.log();
colors.forEach(function(key) {
  process.stdout.write("  "+ eval('color.'+key+'.'+key+'_bbt("'+key+' color")') )
});
console.log();

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