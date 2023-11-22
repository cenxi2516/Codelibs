import { handleStartIndex } from './../../indexHandle';

const isEqual = (a, b) => Object.is(a, b) || (a === 0 && b === 0);

Array.prototype.myIndexOf = function (data, startIndex) {
  const length = +this.length;
  startIndex = handleStartIndex(length, startIndex);

  for (let i = startIndex; i < length; i++) {
    if (isEqual(this[i], data)) return i;
  }

  return -1;
};
