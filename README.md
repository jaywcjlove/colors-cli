# colors-cli

[![](https://jaywcjlove.github.io/sb/ico/npm.svg)](https://www.npmjs.com/package/colors-cli)

Terminal string styling done right.

<img align="right" height="150" src="./img/colors-cli.png">


Install with npm:

```bash
npm install colors-cli --save-dev
```

# Styles

`bold`、 `faint`、 `italic`、 `underline`、 `blink`、 `overline`、 `inverse`、 `conceal`、 `strike`、

# Colors

<table>
  <thead><th>Foreground</th><th>Background</th><th></th><th>Bright Foreground</th><th>Bright Background</th><th></th></thead>
  <tbody>
    <tr>
      <td>black</td><td>black_b</td><td><img src="./img/black.png" width="20" height="20" /></td>
      <td>black_bt</td><td>black_bbt</td><td><img src="./img/black_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>red</td><td>red_b</td><td><img src="./img/red.png" width="20" height="20" /></td>
      <td>red_bt</td><td>red_bbt</td><td><img src="./img/red_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>green</td><td>green_b</td><td><img src="./img/green.png" width="20" height="20" /></td>
      <td>green_bt</td><td>green_bbt</td><td><img src="./img/green_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>yellow</td><td>yellow_b</td><td><img src="./img/yellow.png" width="20" height="20" /></td>
      <td>yellow_bt</td><td>yellow_bbt</td><td><img src="./img/yellow_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>blue</td><td>blue_b</td><td><img src="./img/blue.png" width="20" height="20" /></td>
      <td>blue_bt</td><td>blue_bbt</td><td><img src="./img/blue_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>magenta</td><td>magenta_b</td><td><img src="./img/magenta.png" width="20" height="20" /></td>
      <td>magenta_bt</td><td>magenta_bbt</td><td><img src="./img/magenta_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>cyan</td><td>cyan_b</td><td><img src="./img/cyan.png" width="20" height="20" /></td>
      <td>cyan_bt</td><td>cyan_bbt</td><td><img src="./img/cyan_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>white</td><td>white_b</td><td><img src="./img/white.png" width="20" height="20" /></td>
      <td>white_bt</td><td>white_bbt</td><td><img src="./img/white_bright.png" width="20" height="20" /></td>
    </tr>
  </tbody>
</table>

## Basic usage:

Output colored text:

```js
var color = require('colors-cli')
console.log( color.red('hello') )
```

Best way is to predefine needed stylings and then use it:

```js
var error = color.red.bold;
var warn = color.yellow;
var notice = color.blue;
console.log(error('Error!'));
console.log(warn('Warning'));
console.log(notice('Notice'));
```


Styles can be mixed:

```js
var color = require('colors-cli/safe')
console.log( color.red.bold.underline('hello') )
```


```js
require('colors-cli/toxic')
console.log( 'hello'.green );
console.log( 'hello'.green.black_b.underline );
```

### Use the command line

```bash
 Usage: colors

 Options:

   --black  => black
   --black_b  => black_b
   --red  => red
   --red_b  => red_b
   --green  => green
   --green_b  => green_b
   --yellow  => yellow
   --yellow_b  => yellow_b
   --blue  => blue
   --blue_b  => blue_b
   --magenta  => magenta
   --magenta_b  => magenta_b
   --cyan  => cyan
   --cyan_b  => cyan_b
   --white  => white
   --white_b  => white_b
   --aqua  => aqua
   --aqua_b  => aqua_b
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