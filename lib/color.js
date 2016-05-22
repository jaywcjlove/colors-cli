/**
 * 
 * [The opaque named colors](https://drafts.csswg.org/css-color/#named-colors)
 * [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code)
 * [Linux Shell Scripting Tutorial]http://www.freeos.com/guides/lsst/misc.htm#colorfunandmore
 * 
 */

var _styles = require('./styles-name')
var isSupported = require('./supports-colors')
var colors = _styles.colors;
var styles = _styles.styles;

exports.color = {}

function Colors(str){
    this.string = str;
    this.styles = [];
    this.fgcolor = null;
    this.bgcolor = null;
}

// 字背景颜色范围:40~49 
// 40:黑, 41:深红, 42:绿, 43:黄色, 44:蓝色, 45:紫色, 46:深绿, 47:白色,
// 字颜色:30~39 
// 30:黑, 31:红, 32:绿, 33:黄, 34:蓝色, 35:紫色, 36:深绿, 37:白色,
for (var i = 0; i < colors.length; i++) {
    (function(i){
        var name = colors[i];
        Object.defineProperty(Colors.prototype, name, {
            get: function() {
              this.fgcolor = i;
              return this;
            }
        });
        Object.defineProperty(Colors.prototype, name + '_bg', {
            get: function() {
              this.bgcolor = i;
              return this;
            }
        });
        
        exports.color[name] = exports[name] = function(text) {
            if (!isSupported) return text;
            return '\x1b[' + (30 + i) + 'm' + text + '\x1b[0m';
        };
        exports.color[name + '_bg'] = exports[name + '_bg'] = function(text) {
            if (!isSupported) return text;
            return '\x1b[' + (40 + i) + 'm' + text + '\x1b[0m';
        };
    })(i)
}

/**
 * ANSI控制码的说明 
 * 
 * 33[0m 关闭所有属性 
 * 33[1m 设置高亮度 
 * 33[4m 下划线 
 * 33[5m 闪烁 
 * 33[7m 反显 
 * 33[8m 消隐 
 * 33[30m -- 33[37m 设置前景色 
 * 33[40m -- 33[47m 设置背景色 
 * 33[nA 光标上移n行 
 * 33[nB 光标下移n行 
 * 33[nC 光标右移n行 
 * 33[nD 光标左移n行 
 * 33[y;xH设置光标位置 
 * 33[2J 清屏 
 * 33[K 清除从光标到行尾的内容 
 * 33[s 保存光标位置 
 * 33[u 恢复光标位置 
 * 33[?25l 隐藏光标 
 * 33[?25h 显示光标 
 */

for (var i = 0; i < styles.length; i++) {
    (function(i) {
        var name = styles[i];
        Object.defineProperty(Colors.prototype, name, {
            get: function() {
              if (this.styles.indexOf(i) === -1) {
                this.styles = this.styles.concat(i + 1);
              }
              return this;
            }
        });
        exports.color[name] = exports[name] = function(text) {
            if (!isSupported) return text;
            return '\x1b[' + (i + 1) + 'm' + text + '\x1b[0m';
        };
    })(i);
}

Colors.prototype.valueOf = function(){
    var text = this.string;
    var reset = '\x1b[0m';
    var is256 = isSupported;
    if(is256){
        if (this.fgcolor !== null) {
          text = '\x1b[38;5;' + this.fgcolor + 'm' + text + reset;
        }
        if (this.bgcolor !== null) {
          text = '\x1b[48;5;' + this.bgcolor + 'm' + text + reset;
        }
    }else{
        if (this.fgcolor !== null && this.fgcolor < 8) {
          text = '\x1b[' + (30 + this.fgcolor) + 'm' + text + reset;
        }
        if (this.bgcolor !== null && this.bgcolor < 8) {
          text = '\x1b[' + (40 + this.bgcolor) + 'm' + text + reset;
        }
    }
    if (this.styles&&this.styles.length) {
      text = '\x1b[' + this.styles.join(';') + 'm' + text + reset;
    }
    return text;
}

exports.Colors = Colors;