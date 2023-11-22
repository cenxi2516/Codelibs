/**
 * 拷贝source对象自身可枚举属性的descriptor到target中
 * @param  {Object}    target  目标对象
 * @param  {...Array} sources  接受源对象的数组集合
 * @return {Object}            修改后的目标对象
 */
Object.completeAssign = (target, ...sources) => {
    return sources.reduce((target, source) => {
        // 若是null或undefined，则忽略
        if ([null, undefined].includes(source)) return target;
        // 若是数值、字符串值、布尔值、符号值、大整数值，则封装为对应的包装类对象
        source = Object(source);
        // 获取对象中所有的可枚举属性名
        const allEnumerableKeys = Reflect.ownKeys(source).filter(key => Object.prototype.propertyIsEnumerable.call(source, key));
        // 获取对象中所有可枚举属性的descriptor
        const descriptors = allEnumerableKeys.reduce((descriptors, key) => {
            descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
            return descriptors;
        }, {});
        /**
         * 问题：目标对象与源对象相同属性。依据target属性特性
         * 若是target此属性的configurable为false，
         * 	a、writable为false，则不支持配置。
         * 	b、writable为true，仅支持writable将true变为false。
         * 若是target此属性的configurable为true，支持配置。
         */
        Object.defineProperties(target, descriptors);

        return target;
    }, target);
};
