/**
 * 判断一个数是否是质数
 * @param  {Number} num  数值
 * @return {Boolean}     true是质数，false不是质数
 */
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2, eIndex = Math.sqrt(num); i <= eIndex; i++) {
        if (num % i === 0) return false;
    }

    return true;
};
