Array.prototype.myMap = function (callback, thisArg) {
  const length = +this.length;

  const newArr = new Array(length);

  for (let i = 0; i < length; i++) {
    if (this.hasOwnProperty(i)) {
      newArr[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return newArr;
};
