/**
 * 弥补toFixed四舍五入缺陷
 * @param  {Number} digit 保留的小数位
 * @return {String}       四舍五入保留指定小数位格式的字符串数值
 */
Number.prototype.toRoundFixed = function(digit = 0) {
    const num = +this;
    if (num >= Number.MAX_SAFE_INTEGER) return num.toFixed(digit);

    // 放大倍数
    const scaleTimes = 10 ** digit;
    // 四舍五入取整、小数位不足，则补零
    return (Math.round(num * scaleTimes) / scaleTimes).toFixed(digit);
};
