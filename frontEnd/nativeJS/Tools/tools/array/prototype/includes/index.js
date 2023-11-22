import { handleStartIndex } from './../../indexHandle';

const isEqual = (a, b) => Object.is(a, b) || (a === 0 && b === 0);

Array.prototype.myIncludes = function (data, startIndex = 0) {
  const length = +this.length;
  startIndex = handleStartIndex(length, startIndex);

  for (let i = startIndex; i < length; i++) {
    if (isEqual(data, this[i])) return true;
  }

  return false;
};
