
/**
 * 函数防抖
 * @param  {Function} callback 要防抖函数
 * @param  {Number}   delay    延迟毫秒数
 * @return {Proxy}             防抖后的函数
 */
const debounce = function(callback, delay) {
    let timer = null;

    return new Proxy(callback, {
        apply(target, thisArg, argsList) {
            timer && clearTimeout(timer);

            timer = setTimeout(() => {
                Reflect.apply(target, thisArg, argsList);
                timer = null;
            }, delay);
        }
    });
};

export default debounce;
