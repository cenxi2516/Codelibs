Array.prototype.myFlat = function (layer = 1) {
  let newArr = this;
  let index = 1;

  while (index <= layer) {
    if (newArr.every((item) => !Array.isArray(item))) return newArr;

    newArr = [].concat(...newArr);
    index++;
  }

  return newArr;
};
