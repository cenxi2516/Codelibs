/**
 * 测试函数执行花费时间
 * @param  {Function} callback 函数
 * @return {String}            执行时间
 */
const testExecuteTime = (callback) => {
    const start = performance.now();

    callback();

    const end = performance.now();

    return `${(end - start).toFixed(2)}ms`;
};
