import { handleEndIndex } from './../../indexHandle';

const isEqual = (a, b) => Object.is(a, b) || (a === 0 && b === 0);

Array.prototype.myLastIndexOf = function (data, endIndex) {
  const length = +this.length;
  endIndex = endIndex ?? length - 1;
  endIndex = handleEndIndex(length, endIndex);

  for (let i = endIndex; i >= 0; i--) {
    if (isEqual(this[i], data)) return i;
  }

  return -1;
};
