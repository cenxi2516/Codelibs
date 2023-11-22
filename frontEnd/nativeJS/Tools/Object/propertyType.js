/**
 * 检测属性类型
 * @param  {Any} prop 字符串或符号
 * @return {Number}   1表示直接属性，0表示继承属性，-1表示不存在此属性
 */
Object.prototype.propertyType = function(prop) {
    'use strict';
    // 若是null或undefined，则抛出TypeError
    if ([null, undefined].includes(this)) throw new TypeError('Cannot convert undefined or null to object');

    prop = typeof prop === 'symbol' ? prop : String(prop);
    const thisV = Object(this);
    const isExistProp = prop in thisV;
    const isDirectProp = Object.hasOwn(thisV, prop);

    if (!isExistProp) return -1; // 不存在此属性
    if (!isDirectProp && isExistProp) return 0; // 继承属性
    if (isDirectProp) return 1; // 直接属性
};
