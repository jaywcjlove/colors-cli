# colors-cli


Terminal string styling done right.


Install with npm:

```bash
npm install colors-cli --save-dev
```

# Styles

`bold`、 `faint`、 `italic`、 `underline`、 `blink`、 `overline`、 `inverse`、 `conceal`、 `strike`、

# Colors

<table>
  <thead><th>Foreground</th><th>Background</th><th></th></thead>
  <tbody>
    <tr><td>black</td><td>black_bg</td><td><img src="./img/black.png" width="20" height="20" /></td></tr>
    <tr><td>red</td><td>red_bg</td><td><img src="./img/red.png" width="20" height="20" /></td></tr>
    <tr><td>green</td><td>green_bg</td><td><img src="./img/green.png" width="20" height="20" /></td></tr>
    <tr><td>yellow</td><td>yellow_bg</td><td><img src="./img/yellow.png" width="20" height="20" /></td></tr>
    <tr><td>blue</td><td>blue_bg</td><td><img src="./img/blue.png" width="20" height="20" /></td></tr>
    <tr><td>magenta</td><td>magenta_bg</td><td><img src="./img/magenta.png" width="20" height="20" /></td></tr>
    <tr><td>cyan</td><td>cyan_bg</td><td><img src="./img/cyan.png" width="20" height="20" /></td></tr>
    <tr><td>white</td><td>white_bg</td><td><img src="./img/white.png" width="20" height="20" /></td></tr>
  </tbody>
</table>

## Basic usage:

Output colored text:

```js
var color = require('colors-cli')
console.log( color.red('hello') )
```

Styles can be mixed:

```js
var color = require('colors-cli/safe')
console.log( color.red.bold.underline('hello') )
```


```js
require('colors-cli/toxic')
console.log( 'hello'.green );
console.log( 'hello'.green.black_bg.underline );
```

### Use the command line

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


The [ANSI Escape](https://en.wikipedia.org/wiki/ANSI_escape_code) sequences control code screen.

```
echo -e "\033[31;41;4m something here 33[0m"
```

`\033` As the escape character, inform the terminal to switch to the escape mode.  
`[` The beginning of the CSI.  
`m` Make the action to be performed.  
`;` ASCII code separator.  