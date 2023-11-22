/**
 * 过滤敏感词
 * @param  {String} str            要过滤的文本内容
 * @param  {Array} sensitiveWords  敏感词
 * @param  {String} replaceStr     替换敏感词
 * @return {String}                过滤替换后的文本
 */
const filterSensitiveWords = (str, sensitiveWords, replaceStr) => {
	const reg = new RegExp(`(${sensitiveWords.join('|')})+`, 'giu');

	return str.replace(reg, replaceStr);
};

export default filterSensitiveWords;
