# colors-cli


Install with npm:

```bash
npm install bannerjs --save
```


## Basic usage:

```js
var color = require('colors-cli')
console.log( color.red('hello') )
```


```js
require('colors-cli/toxic')
console.log( 'hello'.green );
```

```bash
 Usage: colors

 Options:

   --black  => black
   --black_bg  => black_bg
   --red  => red
   --red_bg  => red_bg
   --green  => green
   --green_bg  => green_bg
   --yellow  => yellow
   --yellow_bg  => yellow_bg
   --blue  => blue
   --blue_bg  => blue_bg
   --magenta  => magenta
   --magenta_bg  => magenta_bg
   --cyan  => cyan
   --cyan_bg  => cyan_bg
   --white  => white
   --white_bg  => white_bg
   --aqua  => aqua
   --aqua_bg  => aqua_bg
   --bold  => bold
   --faint  => faint
   --italic  => italic
   --underline  => underline
   --blink  => blink
   --overline  => overline
   --inverse  => inverse
   --conceal  => conceal
   --strike  => strike

 Examples:

   colors --red "\nhello world" --bold,underline,yellow "wcj"
   colors --green,bold "\nhello world"
```


# 参考

- [The opaque named colors](https://drafts.csswg.org/css-color/#named-colors)
- [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code)