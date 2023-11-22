/**
 * 管道函数：输入一个初始值，上一个函数的执行结果作为下一个函数执行的实参传入
 * @param  {...Array} functions 	接收传入的函数
 * @param  {Any}      initialValue  第一个函数执行的实参值
 * @return {Any}
 */
const pipe = (...functions) => {
    return (initialValue) => functions.reduce(
        (acc, func) => func(acc),
        initialValue
    );
};


export default pipe;
