module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.some(element => Array.isArray(element))) {
      return 1 + this.calculateDepth(arr.flat());
    } else {
      return 1;
    }
  }
};