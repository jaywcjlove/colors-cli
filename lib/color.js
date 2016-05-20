/**
 * 
 * [The opaque named colors](https://drafts.csswg.org/css-color/#named-colors)
 * [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code)
 * 
 */
var defineProps = Object.defineProperty;

var colors = [
    'black', 'red', 'green', 'yellow', 'blue',
    'magenta', 'cyan', 'white','aqua'
];
var styles = [
    'bold', 
    'faint', 
    'italic', 
    'underline', 
    'blink', 
    'overline',
    'inverse', 
    'conceal', 
    'strike'
];

function Color(str){
    this.string = str;
    this.styles = [];
    this.fgcolor = null;
    this.bgcolor = null;
}

exports.color = {}

for (var i = 0; i < colors.length; i++) {
    (function(i){
        var name = colors[i];
        defineProps(Color.prototype, name, {
            get: function() {
              this.fgcolor = i;
              return this;
            }
        });
        defineProps(Color.prototype, name + '_bg', {
            get: function() {
              this.bgcolor = i;
              return this;
            }
        });
        exports.color[name] = exports[name] = function(text) {
            return '\x1b[' + (30 + i) + 'm' + text + '\x1b[0m';
        };
        exports.color[name + '_bg'] = exports[name + '_bg'] = function(text) {
            return '\x1b[' + (40 + i) + 'm' + text + '\x1b[0m';
        };
    })(i)
}

for (var i = 0; i < styles.length; i++) {
    (function(i) {
        var name = styles[i];
        defineProps(Color.prototype, name, {
            get: function() {
              if (this.styles.indexOf(i) === -1) {
                this.styles = this.styles.concat(i + 1);
              }
              return this;
            }
        });
        exports.color[name] = exports[name] = function(text) {
            return '\x1b[' + (i + 1) + 'm' + text + '\x1b[0m';
        };
    })(i);
}

Color.prototype = {
    valueOf:function(){
        var text = this.string;
        var reset = '\x1b[0m';
        if (this.fgcolor !== null && this.fgcolor < 8) {
          text = '\x1b[' + (30 + this.fgcolor) + 'm' + text + reset;
        }
        if (this.bgcolor !== null && this.bgcolor < 8) {
          text = '\x1b[' + (40 + this.bgcolor) + 'm' + text + reset;
        }

        if (this.styles.length) {
          text = '\x1b[' + this.styles.join(';') + 'm' + text + reset;
        }
        return text;
    }
}

exports.Color = Color;