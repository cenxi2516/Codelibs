Array.prototype.myFlatMap = function (callback, thisArg) {
  const flatArr = this.flat();

  return flatArr.map(callback, thisArg);
};
