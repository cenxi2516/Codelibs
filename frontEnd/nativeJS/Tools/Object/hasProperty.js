/**
 * 检测对象或其原型链中是否存在指定属性
 * @param  {Object} obj      检测目标对象
 * @param  {String|Symbol} property 字符串或符号值
 * @return {Boolean}          true表示对象或其原型链中存在此属性
 */
const hasProperty = (obj, property) => property in obj;

export default hasProperty;
