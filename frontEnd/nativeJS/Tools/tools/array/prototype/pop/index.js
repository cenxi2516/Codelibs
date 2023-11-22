Array.prototype.myPop = function () {
  const length = +this.length;

  if (!length) return undefined;

  const delValue = this[0];

  for (let i = 0; i < length; i++) {
    this[i] = this[i + 1];
  }

  this.length = length - 1;

  return delValue;
};
