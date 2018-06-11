var aa = require('./color')

exports = module.exports = aa;

exports.toxic = function() {
  // 在String原型上扩展
  // 不建议在原型对象上扩展
  var colors = exports.color;
  Object.keys(colors).forEach(function(key) {
    var fn = colors[key];
    Object.defineProperty(String.prototype, key, {
      get: function() {
        return fn(this.valueOf());
      }
    });
  });
};
