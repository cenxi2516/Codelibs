/**
 * 接收指定源发送的数据，并将处理结果响应
 * @param  {String} targetOrigin    origin（协议、主机名、端口号）
 * @param  {Function} receiverHandler 数据处理函数
 * @return {undefined}                 undefined
 */
const receiveMessage = (targetOrigin, receiverHandler) => {
    // 消息接收器
    const receiver = async (event) => {
        const {
            origin, // 发送数据的源
            data, // 发送的数据
            source // 谁发送的数据
        } = event;

        // 若不是指定的源发送的数据，则不接收
        if (origin !== targetOrigin) return;

        const {
            body, // 请求或响应的数据
            isResponse = false, // 是请求还是响应
        } = data;

        // 将接收的数据处理后，返回处理结果
        const handleResult = await receiverHandler(data);

        // 若是响应，则不再进行请求，避免出现请求、响应递归
        if (isResponse) return;

        // 向请求的源，响应处理结果
        source.postMessage({
            isResponse: true,
            body: handleResult
        }, origin);
    };

    // 当前窗口接收指定源传输的数据
    window.addEventListener('message', receiver);
};


export default receiveMessage;
