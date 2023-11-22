import eachNode from './eachNode.js';

/**
 * 遍历满足条件的文本节点
 * @param  {Node} rootNode 				节点
 * @param  {String | RegExp} pattern  	查找文本内容或正则表达式
 * @return {Array}          			遍历节点
 */
const grep = (rootNode, pattern) => {
    let matches = [];

    eachNode(rootNode, (node) => {
        // 若不是Node.TEXT_NODE，则结束callback
        if (node.nodeType !== Node.TEXT_NODE) return;

        if (typeof pattern === 'string') {
            // 字符串匹配
            node.textContent.includes(pattern) && matches.push(node);
        } else if (Object.prototype.toString.call(pattern) === '[object RegExp]') {
            pattern.test(node.textContent) && matches.push(node);
        }
    });

    return matches;
};



export default grep;
