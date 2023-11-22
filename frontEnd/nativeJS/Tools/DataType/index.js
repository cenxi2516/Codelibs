import isWithinRange from './../Number/isWithinRange.js';
import hasProperty from './../Object/hasProperty.js';

class DataType {
    /**
     * 检测是否是undefined
     * @param  {*}  data 检测数据
     * @return {Boolean}   true表示是undefined
     */
    isUndefined(data) {
        return data === undefined;
    }

    /**
     * 检测是否是null
     * @param  {*}  data 检测数据
     * @return {Boolean}   true表示是null
     */
    isNull(data) {
        return data === null;
    }

    /**
     * 检测是否是一个函数
     * @param  {*} data 检测数据
     * @return {Boolean}  true表示是一个函数
     */
    isFunction(data) {
        return typeof data === 'function';
    }

    /**
     * 检测是否是一个箭头函数
     * @param  {*} data 检测数据
     * @return {Boolean}  true表示是箭头函数
     */
    isArrowFunction(data) {
        return this.isFunction(data) && !Object.hasOwn(data, 'prototype');
    }

    /**
     * 不是箭头函数的普通函数
     * @param  {*} data 检测数据
     * @return {Boolean}  true表示是普通函数
     */
    isNormalFunction(data) {
        return this.isFunction(data) && !this.isArrowFunction(data)
    }

    /**
     * 检测是否是一个对象
     * @param  {*} data 检测数据
     * @return {Boolean}  true表示是一个对象
     */
    isObject(data) {
        return !this.isNull(data) && typeof data === 'object';
    }

    /**
     * 检测是否是原始值
     * @param  {*} data 检测数据
     * @return {Boolean}  true表示是原始值
     */
    isPrimitiveValue(data) {
        return !(this.isFunction(data) || this.isObject(data));
    }

    /**
     * 判断是否是类数组
     * @param  {*} data 检测数据
     * @return {Boolean}  true表示是类数组
     */
    isLikeArray(data) {
        // 不是原始值、函数、数组
        if (!this.isObject(data) || Array.isArray(data)) return false;
        // 存在length属性，且强制转换为数值后。整数值，取值范围：[0, 0xffffffff]
        const length = +data.length;

        return Number.isSafeInteger(length) && isWithinRange(length, 0, 2 ** 32 - 1);
    }

    /**
     * 检测是否是可迭代对象
     * @param  {*}  data 检测数据
     * @return {Boolean}   true表示可迭代
     */
    isIterable(data) {
        // 若是原始值、函数，则返回false
        if (this.isPrimitiveValue(data) || this.isFunction(data)) return false;
        // 若是对象中不存在[Symbol.iterator]属性，或该属性不是一个方法，则返回false
        const iteratorSign = Symbol.iterator;
        if (!hasProperty(data, iteratorSign) || !this.isFunction(data[iteratorSign])) return false;
        try {
            // 若是能在数组中展开，则表示是可迭代对象或迭代器
            /**
             * 每次使用展开运算或for...of语法。
             * 	- 若是可迭代对象，会使用[Symbol.iterator]创建一个新的迭代器。
             * 	- 若是对象本身是迭代器，则进行迭代，无需再创建新的迭代器。
             */
            // 创建一个新的迭代器
            const iterator = data[Symbol.iterator] ?.();
            // iterator或其原型中是否存在next属性，next是否是一个方法
            return hasProperty(iterator, 'next') && isFunction(iterator.next);
        } catch (e) {
            // 否则不是一个可迭代对象
            return false;
        }
    };

    /**
     * 检测是否是URL链接地址
     * @param  {*}  data 检测数据
     * @return {Boolean}   true表示是URL链接地址
     */
    isURL(data) {
        try {
            return !!new URL(data);
        } catch (e) {
            return false
        }
    }

    /**
     * 获取数据类型
     * @param  {*} data 数据
     * @return {String}   原始值全小写，引用值默认大驼峰
     */
    getType(data) {
        // 原始值
        if (this.isPrimitiveValue(data)) return this.isNull(data) ? 'null' : typeof data;
        // 引用值
        const ObjectType = '[object Object]';
        let dataType = Object.prototype.toString.call(this);
        // '[object Xxxx]'
        dataType = dataType === ObjectType ? `[object ${this.constructor.name}]` : dataType;
        // 'Xxxx'
        dataType = dataType.slice(8, -1);

        return dataType;
    }

    /**
     * 检测对象是否是符合Promise A+规范的对象
     * @param  {*}  data
     * @return {Boolean}      true表示符合Promise A+规范的对象
     */
    isPromiseLike(data) {
        // 检测是否是Promise对象
        if (Object.prototype.toString.call(data) === '[object Promise]') return true;

        // 检测对象是否符合Promise A+规范的对象
        return typeof data === 'object' && typeof data.then === 'function';
    }

    /**
     * 检测对象中某个属性是否是访问器属性
     * @param  {Object}  obj      对象
     * @param  {String}  propName 属性名
     * @return {Boolean}          true表示该属性是个访问器属性，否则是个数据属性
     */
    isAccessorProperty(obj, propName) {
        const {
            writable
        } = Object.getOwnPropertyDescriptor(obj, propName);

        return typeof writable !== 'boolean';
    }
};


const dataType = Object.freeze(new DataType());

export default dataType;
