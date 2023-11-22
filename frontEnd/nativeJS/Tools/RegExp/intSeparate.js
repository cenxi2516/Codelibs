/**
 * 整数值分隔
 * @param  {String} intNumstr 整数值字符串
 * @param  {String} separator 分隔符，默认为','
 * @return {String}           字符串
 */
const intSeparate = (intNumstr, separator = ',') => intNumstr.replaceAll(/(?=\B(\d{3})+$)/g, separator);

export default intSeparate;
