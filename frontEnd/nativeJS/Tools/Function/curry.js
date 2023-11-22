/**
 * 函数柯里化：固定函数前面参数
 * @param  {Function}    func
 * @param  {Array} fixedArgs 固定函数的参数
 * @return {Proxy}
 */
const curry = function(func, ...fixedArgs) {
    const totalArgCount = func.length,
        fixedArgCount = fixedArgs.length;

    return new Proxy(func, {
        apply(target, thisRef, argsList) {
            const restArgCount = argsList.length;
            const totalArgs = [...fixedArgs, ...argsList];

            if (fixedArgCount + restArgCount >= totalArgCount) {
                return Reflect.apply(target, thisRef, totalArgs);
            }

            return curry(target, ...totalArgs);
        }
    });
};

export default curry;
