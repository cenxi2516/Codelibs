/**
 * RGB或RGBA转换为Hex颜色值
 * @param  {String}  rgba      RGB或RGBA颜色值
 * @param  {Boolean} upperCase 输出Hex是否大写， 默认Hex小写
 * @param  {Boolean} short     输出Hex是否短格式，默认Hex长格式
 * @return {String}            Hex颜色值
 */
const rgbToHexColor = (rgba, upperCase = false, short = false) => {
    // 1. 获取rgba中的r，g，b，a值, 存放到数组中
    const rgbaArr = rgba.replace(/[rgba()]/gi, '').split(',');
    // 2. 将数组中每一项转换为十六进制
    const newRgbaArr = rgbaArr.map((value, index) => {
        let numValue = +value;
        // 对alpha处理，可能为百分比、小数
        if (index === 3) {
            numValue = Math.round((value.includes('%') ? parseFloat(value) / 100 : +value) * 255);
        }
        return numValue.toString(16).padStart(2, '0');
    });
    // 3. 将其合并为十六进制颜色值
    let hexColor = `#${newRgbaArr.join('')}`;

    // 01. 返回小写、长格式的十六进制颜色值
    if (!upperCase && !short) return hexColor;
    // 02、返回大写、长格式的十六进制颜色值
    if (upperCase && !short) return hexColor.toUpperCase();

    // 4. 转换为十六进制短格式颜色值
    const isExistAlpha = newRgbaArr.length === 4;
    const reg = new RegExp(`([0-9a-f])\\1([0-9a-f])\\2([0-9a-f])\\3${isExistAlpha?'([0-9a-f])\\4':''}`, 'gi');
    const shortHexColor = hexColor.replace(reg, (...rest) => {
        const newRest = rest.slice(1, isExistAlpha ? 5 : 4).filter(value => value);
        return newRest.join('');
    });

    // 03. 返回小写、短格式的十六进制颜色值
    if (!upperCase && short) return shortHexColor;
    // 04. 返回大写、短格式的十六进制颜色值
    return shortHexColor.toUpperCase();
};