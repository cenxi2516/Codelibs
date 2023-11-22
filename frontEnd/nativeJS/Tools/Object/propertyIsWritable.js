/**
 * 对象属性是否可写
 * @param  {Any} prop 	 字符串或Symbol
 * @return {Boolean}     true表示对象属性可写，false表示对象属性不存在或对象属性不可配置
 */
Object.prototype.propertyIsWritable = function(prop) {
    'use strict';
    // 若是this指向为null或undefined，则报TypeError
    if ([null, undefined].includes(this)) throw new TypeError('Cannot convert undefined or null to object');
    // 将prop转换为字符串
    prop = typeof prop === 'symbol' ? prop : String(prop);
    // 检测this自身中是否存在prop
    if (!Object.hasOwn(this, prop)) return false;

    const descriptor = Object.getOwnPropertyDescriptor(this, prop);

    return !!(descriptor.writable || descriptor.set);
}
