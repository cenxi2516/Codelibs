/**
 * 匹配是否是空字符串
 * @param  {String} str 匹配内容
 * @return {Boolean}    true表示是空字符串
 */
const emptyStr = (str) => /^(?:)$/.test(str);

export default emptyStr;
