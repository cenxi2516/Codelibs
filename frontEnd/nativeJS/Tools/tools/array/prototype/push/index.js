Array.prototype.myPush = function (...addItems) {
  const addLenth = addItems.length;

  for (let i = 0; i < addLenth; i++) {
    this[this.length] = addItems[i];
  }

  return this.length;
};
