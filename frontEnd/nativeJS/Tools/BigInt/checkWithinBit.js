/**
 * 检测有符号BigInt值是否在指定位数的数值范围内
 * @param  {Number} n 指定位数，范围为：[-2^(n - 1), 2^(n - 1) - 1]
 * @return {Boolean}  true在指定范围，false不在指定范围
 */
BigInt.prototype.checkWithinBit = function(n) {
    const bNum = this.valueOf();
    return BigInt.asIntN(n, bNum) === bNum;
};
