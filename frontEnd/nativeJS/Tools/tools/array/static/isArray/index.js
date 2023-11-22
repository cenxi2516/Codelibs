Array.myIsArray = (data) =>
  Object.prototype.toString.call(data) === '[object Array]';
