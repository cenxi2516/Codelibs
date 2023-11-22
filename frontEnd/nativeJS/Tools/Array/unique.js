/**
 * 数组去重
 * @return {Array} 去重后的新数组
 */
Array.prototype.unique = function() {
    // 过滤数组以及类数组中的空槽，返回一个新数组
    const filterEmpty = (_, i, obj) => Object.hasOwn(obj, i);
    const newArr = Array.prototype.filter.call(this, filterEmpty);

    // 将新数组转换为Set集合对象去重
    const set = new Set(newArr);
    // 将Set对象转换为数组
    const uniqueValueArr = [...set];

    return uniqueValueArr;
};
