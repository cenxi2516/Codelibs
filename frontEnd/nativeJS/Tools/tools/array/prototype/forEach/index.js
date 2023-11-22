Array.prototype.myForEach = function (callback, thisArg) {
  const length = +this.length;

  for (let i = 0; i < length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};
