var toxic = require('../toxic')

console.log( "underline.red.bold.yellow_b string".underline.red.bold.yellow_b );
console.log( "yellow.underline string".red.underline );


var _styles = require('../lib/styles-name')
var colors = _styles.colors;
var styles = _styles.styles;


console.log("")
console.log("styles:")

styles.forEach(function(key) {
    console.log("  "+key[key].red)
    // console.log(key[key].red)
});

console.log("")
console.log("colors:")

colors.forEach(function(key) {
  console.log("  "+key[key])
});

console.log("")
console.log("background colors:")

colors.forEach(function(key) {
  console.log("  "+key[key+'_b'])
});
