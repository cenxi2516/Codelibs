import dataPropertyDefaultDescriptor from './dataPropertyDefaultDescriptor.js';

/**
 * 创建一个类数组对象
 * @param  {Iterable} iterableObj 可迭代对象
 * @param  {Object}   descriptors 属性描述符集合
 * @return {LikeArray}   		  类数组对象
 */
const createLikeArray = (() => {
    // 数组prototype
    const ArrayPrototype = Array.prototype;
    // 类数组prototype描述符
    const LikeArrayAddDescriptors = {
        length: {
            ...dataPropertyDefaultDescriptor(0),
            writable: true,
        },
        [Symbol.toStringTag]: {
        	...dataPropertyDefaultDescriptor('LikeArray')
        },
        [Symbol.isConcatSpreadable]: {
        	...dataPropertyDefaultDescriptor(true)
        },
    }
    // 类数组
    class LikeArray {
        constructor(iterableObj = [], descriptors = {}) {
            this.length = 0;
            this.push(...iterableObj);
            const LikeArrayPrototype = LikeArray.prototype;
            // 给类数组prototype新增成员
            Object.defineProperties(LikeArrayPrototype, LikeArrayAddDescriptors);
            // 用户给类数组prototype新增成员
            Object.defineProperties(LikeArrayPrototype, descriptors);
        }

        // 获取指定索引的值，可以为负整数
        at(index){
        	return ArrayPrototype.at.call(this, index);
        }
        // 末尾新增
        push(...elementArgs) {
            return ArrayPrototype.push.call(this, ...elementArgs);
        }
        // 末尾删除
        pop() {
            return ArrayPrototype.pop.call(this);
        }
        // 开始新增
        unshift(...elementArgs) {
            return ArrayPrototype.unshift.call(this, ...elementArgs);
        }
        // 开始删除
        shift() {
            return ArrayPrototype.shift.call(this);
        }
        // forEach遍历
        forEach(callbackFn, thisArg) {
            return ArrayPrototype.forEach.call(this, callbackFn, thisArg);
        }
        // 可迭代协议，返回一个可迭代迭代器
        [Symbol.iterator]() {
            return ArrayPrototype[Symbol.iterator].call(this);
        }
    }

    return (iterableObj, descriptors) => new LikeArray(iterableObj, descriptors);
})();


export default createLikeArray;
