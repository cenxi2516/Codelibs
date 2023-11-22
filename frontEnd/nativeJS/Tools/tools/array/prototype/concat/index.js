Array.prototype.myConcat = function (...arrayItems) {
  const newArr = Array.from(this);
  for (const item of arrayItems) {
    if (Array.isArray(item)) {
      newArr.push(...item);
    } else {
      newArr.push(item);
    }
  }

  return newArr;
};
