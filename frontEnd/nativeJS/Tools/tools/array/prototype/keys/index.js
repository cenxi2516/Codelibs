Array.prototype.myKeys = function* () {
  const length = +this.length;

  for (let i = 0; i < length; i++) {
    yield i;
  }
};
