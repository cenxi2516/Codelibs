/**
 * 获取字符串的字节数
 * @param  {String} str 字符串文本
 * @return {Number}     字符串字节数
 */
const getByteCount = (str) => {
    // 获取字符串码元数量
    const codeUnitCount = str.length;
    let byteCount = codeUnitCount;
    // 字符串索引是码元的索引
    for (let i = 0; i < codeUnitCount; i++) {
        /**
         * 一个码元占1~2byte：
         * [0, 0xff]		1byte	标准ASCII 或 扩展ASCII
         * [0, 0xffff]		2byte 	标准Unicode(UTF-16)
         */
        if (str.charCodeAt(i) > 0xff) {
            byteCount++;
        }
    }

    return byteCount;
};

/**
 * 一个码位占1~4byte：
 * [0, 0xff]  		1byte	8bit    标准ASCII 或 扩展ASCII
 * [0, 0xffff]		2byte	16bit	标准Unicode
 * [0, 0xffffffff]	4byte	32bit	扩展Unicode
 */

/*
const getByteCount = (str) => {
    // 展开码位对应的字符
    const arr = [...str];
    const byteCount = arr.reduce((byteCount, curStr) => {
        const codeValue = curStr.codePointAt();

        if (codeValue <= 0xff) {
            byteCount += 1;
        } else if (codeValue <= 0xffff) {
            byteCount += 2;
        } else {
            byteCount += 4;
        }

        return byteCount;
    }, 0);

    return byteCount;
};
*/
export default getByteCount;
