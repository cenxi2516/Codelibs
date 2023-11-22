/**
 * 生成指定范围的十六进制颜色值
 * @param  {Number}  min        最小值，取值范围：[0, 0xffffff]
 * @param  {Number}  max        最大值，取值范围：[0, 0xffffff]
 * @param  {Boolean} shortWrite 简写形式，默认简写
 * @param  {Boolean} upperCase  大写形式，默认小写形式
 * @return {String}             十六进制颜色值
 */
const generateRandomHexColor = (min = 0, max = 0xffffff, shortWrite = true, upperCase = false) => {
    min = Math.max(min, 0);
    min = Math.min(min, 0xffffff);
    max = Math.max(max, 0);
    max = Math.min(max, 0xffffff);

    const hexStr = Math.floor(Math.random() * (max - min + 1) + min).toString(16);
    const padStartZeroStr = hexStr.padStart(6, '0');
    const shortShortStr = shortWrite ? padStartZeroStr.replace(/([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3/i, '$1$2$3') : padStartZeroStr;
    const upperCaseStr = upperCase ? shortShortStr.toUpperCase() : shortShortStr.toLowerCase();

    return `#${upperCaseStr}`;
};

export default generateRandomHexColor;
