Array.prototype.myFilter = function (callback, thisArg) {
  const length = +this.length;
  const newArr = [];

  for (let i = 0; i < length; i++) {
    const item = this[i];
    if (callback.call(thisArg, item, i, this)) {
      newArr.push(item);
    }
  }

  return newArr;
};
