/**
 * 阻止事件往上冒泡
 * @param  {Event} event  事件触发时创建的事件对象
 * @return {undefined}    undefined
 */
const stopPropagation = (event) => {
    const {
        bubbles, // 事件本身是否可冒泡
        propagationStoped // 自定义属性，记录是否阻止了事件往上冒泡
    } = event;

    if (bubbles && !propagationStoped) {
        event.stopPropagation();
        event.propagationStoped = true;
    }
};
