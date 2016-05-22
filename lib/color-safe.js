var colors = {};
module['exports'] = colors;


var defineProps = Object.defineProperties;
var styles_data = require('./styles-name')
var ansiColors = styles_data.colors;
var ansiStyles = styles_data.styles;

var Colors = require('./color').Colors


ansiColors = (function(){
    var arr = []
    for (var i = 0; i < ansiColors.length; i++) {
        arr.push(ansiColors[i]+'_b')
        arr.push(ansiColors[i]+'_bt')
        arr.push(ansiColors[i]+'_bbt')
    }
    return ansiColors.concat(arr);
})();


var styles = (function () {
    var ret = {};
    var retarr = ansiStyles.concat(ansiColors)
    retarr.forEach(function (key) {
        ret[key] = {
          get: function () {
            return build(this._styles.concat(key));
          }
        };
    });
    return ret;
})();

var proto = defineProps(function colors() {}, styles);


function build(_styles_more) {
    var builder = function builder() {
        return applyStyle.apply(builder, arguments);
    };
    builder._styles = _styles_more;
    // 使用它 __proto__ 是必须返回一个函数
    builder.__proto__ = proto;
    return builder;
}

function applyStyle(){
    var arg = arguments;
    var args_len = arguments.length;
    var str = args_len !== 0 && String(arguments[0]);
    var _sty = this._styles;
    var _Colors = new Colors()
    for (var i = 0; i < _sty.length; i++) {
        
        _Colors.string = str;
        // console.log("_sty[i]::",_sty[i])
        if(_sty[i]) str = _Colors[_sty[i]].valueOf();
    }
    return str;
}

function init() {
    var ret = {};
    Object.keys(styles).forEach(function (name) {
        ret[name] = {
          get: function () {
            return build([name]);
          }
        };
    });
    return ret;
}

defineProps(colors, init());


    