var color = require('../safe');

console.log( color.red("2222") );
console.log( color.red.yellow_b('"color red underline"') );
console.log( color.blue('"color red underline"') );
console.log( color.blue('"color red underline"') );

// 计划实现
// 
// color('在以下示例中，@abc{Object.defineProperty} 函数向用户@ab2{定义}的对象添加访问器属性。',{
//     "abc":"yellow,blue_bg",
//     "ab2":"underline,blink,red"
// })