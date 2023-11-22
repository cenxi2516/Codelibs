/**
 * 格式化模板字符串中左右中括号
 * @param  {...Array} argsArr 剩余参数
 * @return {String}            字符串内容
 */
const formatHTMLEntity = (...argsArr) => {
    const [staticStrArr, ...expressStrArr] = argsArr;
    const toEntityChar = str => {
        const reg = new RegExp(Object.keys(encodeChars).join('|'), 'g');
        return str.replaceAll(reg, $ => encodeChars[`\\${$}`] ?? encodeChars[$]);
    };
    const resultStrArr = expressStrArr.reduce((resultStrArr, strItem, index) => {
        resultStrArr.push(staticStrArr[index] + strItem);
        return resultStrArr;
    }, []);

    resultStrArr.push(staticStrArr.at(-1));

    return toEntityChar(resultStrArr.join(''));
};

// 正则中特殊字符，需要转义。例如：? ==> \\?
const encodeChars = {
    "<": "&lt;",
    ">": "&gt;"
};

export default formatHTMLEntity;
