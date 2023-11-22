Array.prototype.myFindLastIndex = function (callback, thisArg) {
  const length = +this.length;

  for (let i = length - 1; i >= 0; i--) {
    if (callback.call(thisArg, this[i], i, this)) return i;
  }

  return -1;
};
