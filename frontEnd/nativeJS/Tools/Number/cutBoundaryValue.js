/**
 * value值只能在[min, max]之间。
 * 1、若是value小于min，则value取min。
 * 2、若是value大于max，则value取max。
 * @param  {Number} min   左边界值
 * @param  {Number} max   右边界值
 * @param  {Number} value 当前值
 * @return {Number}       value最终取值
 */
const cutBoundaryValue = (min, max, value) => {
    // 若是value小于min，则取min，否则取value
    value = Math.max(value, min);
    // 若是value大于max，则取max，否则取value
    value = Math.min(value, max);

    return value;
};
