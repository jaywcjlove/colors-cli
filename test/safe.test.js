var color = require('../safe');

var _styles = require('../lib/styles-name')
var colors = _styles.colors;
var styles = _styles.styles;




console.log("====Safe.test.js====")
console.log("")
console.log(" Font Bright Color:")

colors.forEach(function(key) {
  console.log("  "+ eval('color.'+key+'("'+key+' color")') )
  console.log("  "+ eval('color.'+key+'_bt("'+key+' color1")') )
});

console.log("")
console.log("Background Bright Color:")

colors.forEach(function(key) {
  console.log("  "+ eval('color.'+key+'.'+key+'_b("'+key+' color")') )
  console.log("  "+ eval('color.'+key+'.'+key+'_bbt("'+key+' color")') )
});

// 计划实现
// 
// color('在以下示例中，@abc{Object.defineProperty} 函数向用户@ab2{定义}的对象添加访问器属性。',{
//     "abc":"yellow,blue_bg",
//     "ab2":"underline,blink,red"
// })