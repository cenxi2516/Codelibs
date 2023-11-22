/**
 * 向指定源发送数据
 * @param  {String} targetOrigin 	目标源origin
 * @param  {Window} targetWindow    目标源窗口对象
 * @param  {Any} data               除方法外的任何数据
 * @return {undefined}              undefined
 */
const postMessage = (targetOrigin, targetWindow, data) => {
    if (!Object.hasOwn(Object(targetWindow), 'postMessage')) {
        throw new Error(`${targetWindow} not is a Window object`);
    }

    targetWindow.postMessage({
        body: data,
        isResponse: false
    }, targetOrigin);
};


export default postMessage;
