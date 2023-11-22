const DataStorageUnits = ['b', 'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

/**
 * 数据存储大小展示
 * @param  {Number} dataSize      数据大小，字节数
 * @param. {String} limitUnit.    最大表示的数据存储单位， 默认值为 YB
 * @param  {Number} MaxFloatDigit 最大保留小数位, 默认值为 2
 * @return {String}               例如：500KB
 */
const dataSizeDisplay = (dataSize, limitUnit = 'YB', MaxFloatDigit = 2) => {
	const maxIndexUnit = DataStorageUnits.indexOf(limitUnit);
    const binaryDigit = dataSize.toString(2).length;
    let index = Math.ceil(binaryDigit / 10);
    index = Math.min(index, maxIndexUnit);

    dataSize = dataSize / (1024 ** (index - 1));
    const floatDigit = Math.min(index <= 2 ? 0 : index - 2, MaxFloatDigit);
    const times = 10 ** floatDigit;
    dataSize = Math.round(dataSize * times) / times;

    if (index < maxIndexUnit) {
        [dataSize, index] = dataSize % 1024 === 0 ? [1, index + 1] : [dataSize, index];
    }

    return `${dataSize}${DataStorageUnits[index]}`;
};

export default dataSizeDisplay;










/**
 * 1、将“字节数”转换为二进制，并获取二进制的位数。
 *
 * 2、将二进制的位数除以10，向上取整，确定数据存储单位。（n表示二进制的位数）
 *  B：二进制位数大于等于1,  小于11， [1,  10] Math.ceil( n / 10) 1
 * KB：二进制位数大于等于11, 小于21， [11, 20] Math.ceil( n / 10) 2
 * MB：二进制位数大于等于21, 小于31， [21, 30] Math.ceil( n / 10) 3
 * GB：二进制位数大于等于31, 小于41， [31, 40] Math.ceil( n / 10) 4
 * TB：二进制位数大于等于41, 小于51， [41, 50] Math.ceil( n / 10) 5
 *
 * 3、换算，至多保留2位小数（index表示序号）
 *  B：除以 1024 ** (index - 1) 不保留小数位
 * KB：除以 1024 ** (index - 1) 不保留小数位
 * MB：除以 1024 ** (index - 1) 保留1位小数
 * GB：除以 1024 ** (index - 1) 保留2位小数
 * TB：除以 1024 ** (index - 1) 保留2位小数
 */
