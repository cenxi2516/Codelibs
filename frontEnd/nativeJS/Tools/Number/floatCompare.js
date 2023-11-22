/**
 * 浮点数比较相等及大小，支持==、!=、===、!==、>、>=、<、<= 比较
 * @param  {String} operator   ==、!=、===、!==、>、>=、<、<=
 * @param  {Number} floatNum   比较另一个数值
 * @return {Boolean}           比较结果
 */
Number.prototype.floatCompare = function(operator, floatNum) {
    floatNum = +floatNum;
    // 获取整数值位数
    const currIntLen = String(Math.trunc(+this)).length;
    const otherIntLen = String(Math.trunc(floatNum)).length;
    const maxIntLen = currIntLen > otherIntLen ? currIntLen : otherIntLen;
    // 整数值位数相同，不同前面补零
    const IntPadStartZero = (numStr) => {
        const numStrArr = numStr.split('.');
        numStrArr[0] = numStrArr[0].padStart(maxIntLen, '0');

        return numStrArr.join('.');
    };
    const currFloatNumStr = IntPadStartZero(this.toString());
    const floatNumStr = IntPadStartZero(floatNum.toString());

    const supportCompareOperator = ['==', '===', '!=', '!==', '<', '<=', '>', '>='];
    if (!supportCompareOperator.includes(operator)) {
        throw new TypeError(`仅支持${supportCompareOperator.join('、')}比较运算， 不支持${operator}`);
    }

    // ASCII码值：-(43)、.(46)、0-9(48-57)
    return eval(`'${currFloatNumStr}' ${operator} '${floatNumStr}'`);
    // return new Function(`return '${currFloatNumStr}' ${operator} '${floatNumStr}'`)();
};
