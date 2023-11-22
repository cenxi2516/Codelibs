/**
 * 使用递归的方式(深度优先)对rootNode的所有后代节点执行回调函数（包括rootNode自身）
 * 1、未传递callback时，返回一个数组。采用深度优先，遍历rootNode(包含)中所有节点。
 * 2、传递callback时，若是callback返回true，则停止遍历。用于节点查找。
 * @param  {Node}   rootNode 	遍历的根节点，必需
 * @param  {Function} callback 	回调函数，可选
 * @return {Array|Boolean}
 */
const eachNode = (rootNode, callback) => {
    // 若是未传递callback，或传递的callback不是一个function。则返回rootNode所有后代节点，包括rootNode
    if (!callback || typeof callback !== 'function') {
        const allNodes = [];
        eachNode(rootNode, (node) => allNodes.push(node));

        return allNodes;
    }

    // 检测rootNode是否满足callback，满足则结束当前遍历
    if (callback(rootNode) === true) return true;

    // 遍历rootNode子节点
    if (rootNode.hasChildNodes()) {
        const nodes = rootNode.childNodes;
        for (let i = 0, count = nodes.length; i < count; i++) {
            if (eachNode(nodes[i], callback) === true) return true;
        }
    }

    return false;
};

export default eachNode;
