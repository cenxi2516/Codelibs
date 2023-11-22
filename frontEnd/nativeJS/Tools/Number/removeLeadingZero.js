/**
 * 删除小数的前导零并作为字符串返回
 * @param  {Number} num 数值
 * @return {String}     数值字符串
 */
const removeLeadingZero = (num) => {
    const strNum = String(num);

    /**
     * 0.5   ==> .5  ==> (0, 1)
     * -0.5  ==> -.5 ==> (-1, 0)
     *
     * Math.abs(num) ==> (0, 1)
     */
    num = Math.abs(num);
    if (num > 0 && num < 1) return strNum.replace(/(?<=-|\b)0(?=\.)/, '');

    return strNum;
};

export default removeLeadingZero;
