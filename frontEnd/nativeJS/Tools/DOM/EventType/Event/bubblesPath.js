/**
 * 获取事件冒泡路径
 * @param  {Event} event 	触发事件时创建的事件对象
 * @return {Array}          事件冒泡路径
 */
const bubblesPath = (event) => {
    const {
        bubbles,
        propagationStoped
    } = event;

    if (!(bubbles && !propagationStoped)) return [];

    return event.composedPath();
};

export default bubblesPath;
