const nullAndUndefinedHandle = (data) =>
  data === null || data === undefined ? '' : data.toString();

Array.prototype.myJoin = function (separator = ',') {
  const length = +this.length;
  if (!length) return '';

  let result = nullAndUndefinedHandle(this[0]);

  for (let i = 1; i < length; i++) {
    result += separator + nullAndUndefinedHandle(this[i]);
  }

  return result;
};
