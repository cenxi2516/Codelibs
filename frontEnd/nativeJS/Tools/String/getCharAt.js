/**
 * 获取字符串中指定索引位置的字符
 * @param  {String} str   字符串内容
 * @param  {Number} index 从0开始的索引，可以为负整数
 * @return {String}       索引指定位置的字符
 */
const getCharAt = (str, index) => [...str].at(index);

/**
 * 扩展知识————
 * 1、字符串的索引，对应字符串中码元位置。
 * 2、字符串对象的数值属性，对应字符串中码元位置。
 */

/**
 * 获取字符串中指定索引的字符
 * @param  {String} str   字符串文本内容
 * @param  {Number} index 从0开始的正整数
 * @return {String}       指定索引位置的字符
 */
/*
const getCharAt = (str, index) => {
    const codeLen = str.length; // 字符串中码元数量
    if (index >= codeLen) return;

    let charIndex = -1; // 字符指针

    for (let i = 0; i < codeLen; i++) {
        const encodeValue = str.codePointAt(i); // 编码值
        encodeValue > 0xffff && i++;

        charIndex++; // 指针移动
        if (charIndex === index) return String.fromCodePoint(encodeValue);
    }
};
*/
