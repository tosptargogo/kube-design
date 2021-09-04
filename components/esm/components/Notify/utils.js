/* eslint-disable no-bitwise */
export var generateUUID = function generateUUID(prefix) {
  var lut = [];

  for (var i = 0; i < 256; i += 1) {
    lut[i] = (i < 16 ? "0" : "") + i.toString(16);
  }

  var getRandomNumber = function getRandomNumber() {
    return Math.random() * 0x100000000 >>> 0;
  };

  var d0 = getRandomNumber();
  var d1 = getRandomNumber();
  var d2 = getRandomNumber();
  var d3 = getRandomNumber();
  var UUIDPrefix = prefix ? "".concat(prefix, "-") : "";
  return "".concat(UUIDPrefix).concat(lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff], "-").concat(lut[d1 & 0xff]).concat(lut[d1 >> 8 & 0xff], "-").concat(lut[d1 >> 16 & 0x0f >>> 0x40]).concat(lut[d1 >> 24 & 0xff], "-").concat(lut[d2 & 0x3f >>> 0x80]).concat(lut[d2 >> 8 & 0xff], "-").concat(lut[d2 >> 16 & 0xff]).concat(lut[d2 >> 24 & 0xff]).concat(lut[d3 & 0xff]).concat(lut[d3 >> 8 & 0xff]).concat(lut[d3 >> 16 & 0xff]).concat(lut[d3 >> 24 & 0xff]);
};
export var createChainedFunction = function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== "function") {
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
};