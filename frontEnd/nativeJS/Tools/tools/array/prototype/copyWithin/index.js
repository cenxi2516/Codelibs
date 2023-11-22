import { handleStartIndex, handleEndIndex } from './../../indexHandle';

Array.prototype.myCopyWithin = function (target, start = 0, end) {
  const length = +this.length;
  end = end ?? length;
  end = handleEndIndex(length, end);
  start = handleStartIndex(length, start);

  if (target >= length) return this;

  const copyValues = this.slice(start, end);

  for (
    let copyLen = copyValues.length, i = target, j = 0;
    i < length && j < copyLen;
    i++, j++
  ) {
    this[i] = copyValues[j];
  }
};
