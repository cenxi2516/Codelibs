Array.prototype.myEvery = function (callback, thisArg) {
  const { length } = this;
  if (+length === 0) return true;

  for (let i = 0; i < length; i++) {
    if (!callback.call(thisArg, this[i], i, this)) return false;
  }

  return true;
};
