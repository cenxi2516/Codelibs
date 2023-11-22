/**
 * 检测无符号BigInt值是否在指定位数的范围内
 * @param  {Number} n  指定位数，范围为：[0, 2^n - 1]
 * @return {Boolean}   true在指定范围，false不在指定范围
 */
BigInt.prototype.checkWithinUbit = function(n){
	const bNum = this.valueOf();

	return BigInt.asUintN(n, bNum) === bNum;
};
