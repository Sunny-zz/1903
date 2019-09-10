module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1568080632105, function(require, module, exports) {
//https://github.com/b5156/wxapp-computed

//isObj({foo: 'bar'});//=> true
//isObj([1, 2, 3]);//=> false
function isObj(x) {
  var toString = Object.prototype.toString;
  var prototype;
  return (
    toString.call(x) === "[object Object]" &&
    ((prototype = Object.getPrototypeOf(x)),
    prototype === null || prototype === Object.getPrototypeOf({}))
  );
}

// 解析path到数组
function parsePath(str = "") {
  let list = [];
  const reg = /\[\d+\]/g;
  str.split(".").forEach(item => {
    let arr = item.split(reg).concat(item.match(reg));
    arr = arr.filter(item => !!item);
    arr = arr.map(item => {
      if (item.charAt(0) === "[" && item.charAt(item.length - 1) === "]") {
        return parseInt(item.slice(1, -1));
      } else {
        return item;
      }
    });
    list = list.concat(arr);
  });
  return list;
}

// 设置value到对象路径
function setPath(obj, path, value) {
  const segs = parsePath(path);
  segs.reduce((deep, seg, i) => {
    return (deep[seg] =
      segs.length - 1 === i ? (deep[seg] = value) : deep[seg] || {});
  }, obj);
  return obj;
}

// 计算属性装饰器
function computed(page) {
  if (!isObj(page)) {
    throw new TypeError("参数必须是一个");
  }
  const _onLoad = page.onLoad;
  page.onLoad = function() {
    let _data = page.data;
    const _setData = this.setData;
    Object.defineProperty(this, "setData", {
      configurable: true,
      enumerable: true,
      writable: false,
      value: (d, f) => {
        if (!isObj(d)) {
          throw new TypeError("参数必须是一个Object");
        }
        Object.keys(d).forEach(k => {
          setPath(_data, k, d[k]);
        });
        _setData.call(this, _data, f);
      }
    });
    _onLoad.apply(this, arguments);
  };
  return page;
}

module.exports = computed;

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1568080632105);
})()
//# sourceMappingURL=index.js.map