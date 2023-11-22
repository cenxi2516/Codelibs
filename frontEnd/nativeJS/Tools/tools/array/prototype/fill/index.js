import { handleStartIndex, handleEndIndex } from './../../indexHandle';

Array.prototype.myFill = function (data, start = 0, end) {
  const length = +this.length;
  end = end ?? length;
  end = handleEndIndex(length, end);
  start = handleStartIndex(length, start);

  for (let i = start; i < end; i++) {
    this[i] = data;
  }

  return this;
};

const arr = [1, 2, 3, 4, 5];
arr.myFill(0);

console.log(arr);
