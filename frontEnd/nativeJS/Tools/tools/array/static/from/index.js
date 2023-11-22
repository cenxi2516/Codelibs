Array.myFrom = (data) => {
  data = new Object(data);
  const { length } = data;

  if (
    typeof data[Symbol.iterator] === 'function' &&
    typeof data[Symbol.iterator]()?.next === 'function'
  ) {
    // 1. 是否可迭代对象
    return [...data];
  } else if (
    Number.isFinite(+length) &&
    length >= 0 &&
    length <= Math.pow(2, 32) - 1
  ) {
    // 2. 是否类数组
    return Array.prototype.slice.call(data);
  } else {
    throw new TypeError(`${data}不是一个类数组或可迭代对象`);
  }
};
