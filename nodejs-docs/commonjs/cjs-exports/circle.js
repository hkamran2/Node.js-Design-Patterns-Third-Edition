const { PI } = Math

function area (r) {
  return 2 * PI * r ** 2
}

function circumference (r) {
  return 2 * PI * r
}

// we can use the exports object to assign values
exports.area = area
exports.circumference = circumference

// This won't work because of the module wrapping
exports = {
  area, circumference
};

// module wrapping
(function (exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
})()
