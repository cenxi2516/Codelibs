/**
 * 函数节流
 * @param  {Function} callback         要节流的函数
 * @param  {Number}   delay            延迟时间
 * @param  {Boolean}  immediateExecute 是否立即执行
 * @return {Proxy}
 */
const throttle = function(callback, delay, immediateExecute = true) {
    let timer = null;

    return new Proxy(callback, {
        apply(target, thisArg, argsList) {
            if (immediateExecute) {
                if (!timer) {
                    timer = setTimeout(() => {
                        timer = null;
                    }, delay);
                    Reflect.apply(target, thisArg, argsList);
                }
            } else {
                if (!timer) {
                    timer = setTimeout(() => {
                        Reflect.apply(target, thisArg, argsList);
                        timer = null;
                    }, delay);
                }
            }
        }
    });
};


export default throttle;
