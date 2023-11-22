/**
 * 获取值类型：
 * 自定义构造函数创建的实例对象，通过Object.prototype.toString打印皆为[object Object]，
 * 无法区分实例类型。
 * 现今，将[object Object] ==> [object 构造器名]，以便于区分不同的构造器类型。
 * @return {String} Xxxx
 */
Object.prototype.typeOf = function() {
    'use strict';
    const ObjectType = '[object Object]';
    let dataType = Object.prototype.toString.call(this);
    // '[object Xxxx]'
    dataType = dataType === ObjectType ? `[object ${this.constructor.name}]` : dataType;
    // 'Xxxx'
    dataType = dataType.slice(8, -1);

    return dataType;
};
/**
 * 调用Object.prototype.toString()
 * 返回值：'[object Type]'
 *
 * Type，是每个对象或其原型中[Symbol.toStringTag]属性的值。
 */
