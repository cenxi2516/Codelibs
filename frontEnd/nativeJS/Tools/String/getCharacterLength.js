/**
 * 获取字符串中字符的数量
 * @param  {String} str 字符串文本
 * @return {Number}     字符串字符数量
 */
const getCharacterLength = (str) => [...str].length;

/**
 * 字符串length属性，统计字符串中UTF-16码元数量。
 * 1、常用字符，一个字符由一个码元组成。
 * 2、生僻字、表情符号、数学符号等字符，一个字符由两个码元组成，即码点。
 *
 * 字符串迭代器，每次迭代的是码点（字符），不是码元。
 */

/**
 * 获取字符串中字符数量
 * @param  {String} str 字符串文本
 * @return {Number}     字符串中字符数量
 */
/*
const getCharacterLength = (str) => {
    const codeLen = str.length; // 字符串中码元数量
    let charCount = codeLen; // 字符串中字符数量

    for (let i = 0; i < codeLen; i++) {
        // 0xffff 等于 2 ** 16 - 1
        if (str.codePointAt(i) > 0xffff) {
            charCount--;
            i++;
        }
    }

    return charCount;
};
*/
