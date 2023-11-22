/**
 * 将一组浮点数同时放大10**n转换为整数
 * @param  {Array}  numArr 浮点数数组
 * @return {Object}        {times: 放大倍数， value: 输出整数数组}
 */
const convertInt = (numArr = []) => {
    // 获取小数位数
    const getFloatLen = (num) => {
        const numStr = String(num);
        const numDecimalPointIndex = numStr.indexOf('.');
        return numDecimalPointIndex === -1 ? 0 : numStr.slice(numDecimalPointIndex + 1).length;
    };
    // 获取一组数中最大小数位数
    const maxLen = numArr.reduce((maxLen, num) => {
        const currLen = getFloatLen(num);
        return currLen > maxLen ? currLen : maxLen;
    }, 0);
    // 数组中每一项放大times倍数
    const times = 10 ** maxLen;
    const numTimesArr = numArr.map(v => Math.trunc(v * times));

    return {
        times,
        value: numTimesArr
    };
};

export default convertInt;
