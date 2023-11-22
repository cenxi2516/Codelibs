/**
 * 将start/end取值范围固定在：[0, length]内
 * @param  {Number} length 0、正整数值（长度值）
 * @param  {Number} start  负整数值、0、正整数值（开始索引）
 * @param  {Number} end    负整数值、0、正整数值（结束索引）
 * @return {Array}        [start, end]
 */
const indexProcess = (length, start = 0, end = length) => {
    // 索引处理
    const paramProcess = (index) => {
        // index 转换为数值并取整
        index = Math.trunc(+index);
        // 负整数值
        index = index < 0 ? index + length : index;
        // index < 0
        index = Math.max(index, 0);
        // index > length
        index = Math.min(index, length);

        return index;
    }

    // start/end取值范围：[0, length]
    start = paramProcess(start);
    end = paramProcess(end);

    return [start, end];
};

export default indexProcess;
