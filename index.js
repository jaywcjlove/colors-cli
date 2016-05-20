exports = module.exports = require('./lib/color');

exports.toxic = function() {
    // 在String原型上扩展
    // 不建议在原型对象上扩展
    var colors = exports.color;
    Object.keys(colors).forEach(function(key) {
        var fn = colors[key];
        Object.defineProperty(String.prototype, key, {
            get: function() {
                // console.log("key",key)
                return fn(this.valueOf());
            }
        });
    });
};
    