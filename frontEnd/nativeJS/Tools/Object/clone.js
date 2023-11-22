/**
 * 数据浅拷贝
 * @param  {Any} data 任何数据
 * @return {Any}      任何数据
 */
const clone = (data) => {
    // 原始值、方法，直接返回
    if (typeof data !== 'object' || data === null) return data;

    // 数组浅拷贝
    if (Array.isArray(data)) return data.map(v => v);

    // 对象浅拷贝
    // 支持原始值封装类对象拷贝
    const supportOriginCopyType = ['String', 'Number', 'Boolean', 'Symbol', 'BigInt'];
    const dataType = Object.prototype.toString.call(data).slice(8, -1);
    const newData = supportOriginCopyType.includes(dataType) ? Object(data.valueOf()) : new data.constructor();

    Object.setPrototypeOf(newData, Object.getPrototypeOf(data));
    Object.defineProperties(newData, Object.getOwnPropertyDescriptors(data));

    return newData;
};

export default clone;
