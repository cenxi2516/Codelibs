/**
 * 得到斐波拉契数列第n项的值
 * @param  {Number} n 斐波拉契数列第n项
 * @return {Number}   第n项的值
 */
const getFeibonacciNthValue = (n = 1) => {
    if (n === 1 || n === 2) return 1;
    let prevTh1 = 1,
        prevTh2 = 1,
        current;

    for (let i = 3; i <= n; i++) {
        current = prevTh1 + prevTh2;
        prevTh1 = prevTh2;
        prevTh2 = current;
    }

    return current;
};