/**
 * 深拷贝：
 * 1、支持拷贝对象原型
 * 2、支持拷贝属性描述符
 * 3、支持循环引用
 * 4、支持拷贝BigInt值
 * @param  {Any}  data    要拷贝数据
 * @param  {WeakMap} weakMap
 * @return {Any}          拷贝后数据
 */
const deepClone = (data, weakMap = new WeakMap()) => {
    // 若是原始值、方法，则直接返回
    if (typeof data !== 'object' || data === null) return data;

    // 若是weakMap中存在，则返回对应的值，解决循环引用
    if (weakMap.has(data)) return weakMap.get(data);

    // 创建新的对象，支持原始值封装类对象
    const supportOriginCopyType = ['String', 'Number', 'Boolean', 'Symbol', 'BigInt'];
    const dataType = Object.prototype.toString.call(data).slice(8, -1);
    const newData = supportOriginCopyType.includes(dataType) ? Object(data.valueOf()) : new data.constructor();
    // 指定新对象的原型
    Object.setPrototypeOf(newData, Object.getPrototypeOf(data));
    // 若是weakMap中不存在，则将创建的新对象添加到weakMap中
    weakMap.set(data, newData);

    const allKeys = Reflect.ownKeys(data);
    const descriptors = Object.getOwnPropertyDescriptors(data);

    // 循环迭代，克隆value值
    for (const prop of allKeys) {
        descriptors[prop] = {
            ...descriptors[prop],
            value: deepClone(data[prop], weakMap)
        };
    }

    // 将克隆的属性描述符，添加到新创建的对象
    Object.defineProperties(newData, descriptors);

    return newData;
};

export default deepClone;
