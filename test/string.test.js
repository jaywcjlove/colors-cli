var toxic = require('../toxic')

// console.log( "underline string".underline.red );
// console.log( "underline string".yellow.underline );


var styles = [
  'bold', 'faint', 'italic', 'underline', 'blink', 'overline',
  'inverse', 'conceal', 'strike'
];
var colors = [
  'black', 'red', 'green', 'yellow', 'blue',
  'magenta', 'cyan', 'white', 'grey', 'gray'
];


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
