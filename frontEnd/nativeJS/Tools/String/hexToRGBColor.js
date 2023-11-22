/**
 * Hex颜色值转RGB或RGBA颜色值
 * @param  {String} hexColor Hex颜色值
 * @return {String}          RGB或RGBA颜色值
 */
const hexToRGBColor = (hexColor) => {
    let newHexColor = hexColor.slice(1),
        newHexColorArr = [];

    if (![3, 4, 6, 8].includes(newHexColor.length)) {
        throw `传入的颜色值${hexColor}，格式不对`;
    }

    // Hex短格式处理
    if ([3, 4].includes(newHexColor.length)) {
        newHexColor = newHexColor.replace(/([0-9a-f])/ig, ($, $1) => $1.repeat(2));
    }
    newHexColor.replace(/[0-9a-f]{2}/gi, ($) => newHexColorArr.push($));

    newHexColorArr = newHexColorArr.map((value, index) => {
        let decimalNum = Number.parseInt(value, '16');
        // alpha处理
        if (index === 3) {
            decimalNum = +(1 / 255 * decimalNum).toFixed(2);
        }
        return decimalNum;
    });

    return `${(newHexColorArr.length === 3 ? 'rgb(' : 'rgba(') + newHexColorArr.join(',')})`;
}