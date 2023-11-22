Array.prototype.myFind = function (callback, thisArg) {
  const length = +this.length;

  for (let i = 0; i < length; i++) {
    const value = this[i];
    if (callback.call(thisArg, value, i, this)) return value;
  }

  return undefined;
};
