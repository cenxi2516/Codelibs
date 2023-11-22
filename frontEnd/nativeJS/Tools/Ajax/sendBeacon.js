/**
 * 用于发送异步和非阻塞的请求到服务器，不需要响应。
 * @param  {String} url      URL地址
 * @param  {any} data        发送数据
 * @return {Boolean}          true表示成功地将请求排队交付
 */
const sendBeacon = async (url, data = {}) => {
    if (!navigator.sendBeacon) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        return await response.json();
    }

    return navigator.sendBeacon(url, JSON.stringify(data));
};

/**
 * Beacon API特点：
 * 0、与XMLHttpRequest和Fetch不同。
 * 1、HTTP POST、异步、非阻塞、无响应、少量数据。
 * 2、浏览器会保证在页面卸载前，将请求初始化并运行完成。
 * 3、应用场景：发送客户端分析数据、诊断数据统计数据、会话数据、事件等。
 * 4、当前在Web Worker中不可用（没有通过WorkerNavigator暴露）
 *
 * 参考URL：https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon
 */
