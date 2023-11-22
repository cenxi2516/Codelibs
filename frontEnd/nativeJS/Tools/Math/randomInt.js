/**
 * 获取[min, max]范围内的伪随机整数
 * @param  {Number} min 最小正整数
 * @param  {Number} max 最大正整数
 * @return {Number}     [min, max]范围内的伪随机整数
 */
Math.randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
