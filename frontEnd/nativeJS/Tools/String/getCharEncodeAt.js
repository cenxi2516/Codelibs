/**
 * 获取字符串中指定索引位置字符的编码值
 * @param  {String} str   字符串内容
 * @param  {Number} index 非字符串码元索引，而是码点索引，支持负整数值
 * @return {Number}       非负整数或undefined
 */
const getCharEncodeAt = (str, index) => [...str].at(index)?.codePointAt(0);
