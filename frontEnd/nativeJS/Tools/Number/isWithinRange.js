/**
 * 判断数值是否在[min, max]区间内
 * @param  {Number} num 检测数值
 * @param  {Number} min 最小值
 * @param  {Number} max 最大值
 * @return {Boolean}    true表示在[min, max]区间
 */
const isWithinRange = (num, min, max) => num >= min && num <= max;

export default isWithinRange;
