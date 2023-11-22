/**
 * 将 text 复制到剪切板
 * @param  {String} text 要复制的文本
 * @return {undefined}
 */
const copyToClipboard = text => navigator.clipboard ?.writeText ?.(text);

export default copyToClipboard;
