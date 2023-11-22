// 负数处理
export const negativeHandle = (length, index) => {
  index = index < 0 ? length + index : index;
  index = index < 0 ? 0 : index;

  return index;
};

export const handleStartIndex = (length, index) => {
  // 负数处理
  index = negativeHandle(length, index);
  // 大于数组长度处理
  index = index >= length ? length - 1 : index;

  return index;
};

export const handleEndIndex = (length, index) => {
  // 负数处理
  index = negativeHandle(length, index);
  // 大于数组长度处理
  index = index >= length ? length : index;

  return index;
};
