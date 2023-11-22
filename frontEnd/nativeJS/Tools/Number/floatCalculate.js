import convertInt from './convertInt.js';

/**
 * 浮点数运算
 * @param  {String} operator +、-、*、/等运算符
 * @param  {Number} floatNum 数值
 * @return {Number}          浮点数运算结果
 */
Number.prototype.floatCalculate = function(operator, floatNum) {
    floatNum = +floatNum;
    const {
        times,
        value: [currFloatNum, otherFloatNum]
    } = convertInt([+this, +floatNum]);

    // 还原倍数
    let backTimes = 1;
    switch (operator) {
        case '+':
        case '-':
            backTimes = times;
            break;
        case '*':
            backTimes = times ** 2;
            break;
        case '/':
            backTimes = 1;
            break;
         default:
         	throw new TypeError(`仅支持+、-、*、/运算，${operator}不支持`);
    }

    return eval(currFloatNum + operator + otherFloatNum) / backTimes;
    // return new Function(`return (${currFloatNum + operator + otherFloatNum}) / ${backTimes}`)();
};
