/**
 * 按顺序执行异步或同步任务：下一个任务等待上一个任务的执行结果
 * @param  {...Array} functions 接收任务队列
 * @return {Function}
 */
const asyncPipe = (...functions) => {
    /**
     * 按顺序执行异步或同步任务
     * @param  {Any} initialValue 第一个任务的初始值
     * @return {Promise}          反馈结果
     */
    return (initialValue) => {
        initialValue = Promise.resolve(initialValue);
        return functions.reduce(
            async (acc, func) => func(await acc),
                initialValue
        );
    }
};
