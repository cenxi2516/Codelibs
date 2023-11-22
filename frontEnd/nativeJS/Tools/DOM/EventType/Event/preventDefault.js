/**
 * 阻止事件在客户端默认行为
 * @param  {Event} event 事件触发时创建的事件对象
 * @return {undefined}   undefined
 */
const preventDefault = (event) => {
    const {
        cancelable, // 事件自身是否能取消在客户端默认行为
        defaultPrevented // 事件在客户端默认行为是否取消
    } = event;

    if (cancelable && !defaultPrevented) {
        event.preventDefault();
    }
};
