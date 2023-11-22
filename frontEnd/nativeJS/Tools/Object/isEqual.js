/**
 * 判断两个数据是否完全相等，包含NaN与NaN相等，+0与-0相等
 * @param  {Any} data1 比较数据1
 * @param  {Any} data2 比较数据2
 * @return {Boolean}   true表示两个数据完全相等
 */
const isEqual = (data1, data2) => Object.is(data1, data2) || data1 === data2;
