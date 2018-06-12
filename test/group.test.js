
var color = require('../safe');

console.log()
console.log(" Group Color:")
console.log()
console.log('  =>', color.red.bold('Hello!' + color.yellow.bold('world!') + 'wcj!'))
console.log('  =>', color.red('red') + ' plain ' + color.blue('blue'));
console.log('  =>', color.red('red ' + color.underline.yellow('blue') + ' wcj!'));
console.log('  =>', color.red.magenta_bt.underline('hello'));

// 背景色
console.log('  =>', color.magenta_b('hello'));
console.log('  =>', color.magenta_bbt('hello'));
// 文字颜色
console.log('  =>', color.magenta('hello'));
console.log('  =>', color.magenta_bt('hello'));
// 文字颜色 + 背景色
console.log('  =>', color.magenta_bt.underline('hello ' + color.blue_bt('wo' + color.yellow_bt.magenta_bbt('r') + 'ld') + ' !!!!'));
console.log('  =>', color.magenta_bt.underline('hello ' + color.blue_bt('wo' + color.yellow_bt.magenta_bbt('r'))));
console.log('  =>', color.magenta_bt.underline('hello ' + color.blue_bt('world') + ' !!!!' + color.yellow('kenny') + ' wong' ));


console.log();
