/**
 * 窗口页面失去焦点触发的事件
 * @param  {Function} callback 回调函数
 * @return {undefiend}         undefined
 */
const addBlurEvent = (callback) => window.addEventListener('blur', callback);
