Array.prototype.myFindLast = function (callback, thisArg) {
  const length = +this.length;

  for (let i = length - 1; i >= 0; i--) {
    const value = this[i];
    if (callback.call(thisArg, value, i, this)) return value;
  }

  return undefined;
};
