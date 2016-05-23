var Color = require('..').Colors;
console.log();
console.log();
console.log(' System colors');
console.log();
for (var i = 0; i < 16; i++) {
    var c = new Color('  ');
    c.bgcolor_x = i;
    if (i === 0) process.stdout.write(' ');
    if (i === 8) console.log();
    if (i === 8) process.stdout.write(' ');
    process.stdout.write(c.valueOf());
}
console.log();
console.log();
console.log();
console.log(' Background')
console.log();
for (var green = 0; green < 6; green++) {
    for (var red = 0; red < 6; red++) {
        for (var blue = 0; blue < 6; blue++) {
            var c = new Color('  ');
            c.bgcolor_x = 16 + red * 36 + green * 6 + blue;
            if(c.bgcolor_x === 16)process.stdout.write(' ');
            process.stdout.write(c.valueOf());
        }
    }
    console.log();
    process.stdout.write(' ');
}
console.log();
console.log();
console.log(' Grayscale');
console.log();
for (var i = 232; i < 256; i++) {
    var c = new Color('  ');
    c.bgcolor_x = i;
    if(i === 232)process.stdout.write(' ');
    process.stdout.write(c.valueOf());
}
console.log();
console.log();
console.log();
console.log(' Colors');
console.log();
for (var i = 0; i < 256; i++) {
    if (i !== 0 && i % 16 === 0) {
      console.log();
      process.stdout.write(' ');
    }
    if(i === 0)process.stdout.write(' ');
    var c = new Color(wordwrap(i));
    c.fgcolor_x = i;
    process.stdout.write(c.valueOf());
}
console.log();

function wordwrap(i) {
    i = String(i)
    return i + new Array(5 - i.length).join(' ');
}