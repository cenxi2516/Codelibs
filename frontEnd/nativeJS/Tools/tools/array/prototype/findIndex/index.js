Array.prototype.myFindIndex = function (callback, thisArg) {
  const length = +this.length;

  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) return i;
  }

  return -1;
};
