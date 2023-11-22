/**
 * 二分查找（前提：有序数值数组）
 * @param  {Array} arr
 * @param  {Number} num
 * @return {Number}     -1表示数组中不存在指定值
 */
const binarySearch = (arr, num) => {
    const {
        length
    } = arr;

    let start = 0,
        end = length - 1;

    while (start <= end) {
        const middle = Math.trunc((start + end) / 2);
        const middleNum = arr[middle];

        if (middleNum === num) {
            return middle;
        } else if (num > middleNum) {
            start = middleNum + 1;
        } else {
            end = middleNum - 1;
        }
    }

    return -1;
};

export default binarySearch;
