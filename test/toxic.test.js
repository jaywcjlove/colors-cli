var toxic = require('../toxic')

// console.log(" ಠ_ಠ ")

// console.log( "underline.red.bold.yellow_b string".underline.red.bold.yellow_b );
// console.log( "yellow.underline string".red.underline );


var _styles = require('../lib/styles-name')
var colors = _styles.colors;
var styles = _styles.styles;


console.log("")
console.log(" Styles:toxic.test.js")
console.log("")

styles.forEach(function(key) {
  process.stdout.write("  "+key[key])
  // console.log(key[key].red)
});

console.log("")
console.log("")
console.log(" colors:")
console.log("")

colors.forEach(function(key) {
  process.stdout.write("  "+key[key])
});

console.log("")
console.log("")
console.log(" Background colors:")
console.log("")

colors.forEach(function(key) {
  // process.stdout.write("  "+key[key+'_b'])
  process.stdout.write("  "+eval( '" ' +key+"_b"+ ' ".'+key+"_b"))
});


console.log("")
console.log("")
console.log(" Font Bright Color:")
console.log("")

colors.forEach(function(key) {
  // process.stdout.write("  "+key[key+'_bt'])
  process.stdout.write("  "+eval( '" ' +key+"_bt"+ ' ".'+key+"_bt"))
});


console.log("")
console.log("")
console.log(" Background Bright Color:")
console.log("")

colors.forEach(function (key) {
  process.stdout.write("  "+eval( '" ' +key+"_bbt"+ ' ".'+key+"_bbt"))
});

console.log();
