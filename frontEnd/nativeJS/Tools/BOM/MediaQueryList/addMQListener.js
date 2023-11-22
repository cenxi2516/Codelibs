/**
 * 添加一个媒体查询的监听
 * @param  {MediaQueryList}   mq
 * @param  {Function} callback 回调函数
 */
const addMQListener = (mq, callback) => {
    if (mq.addEventListener) {
        mq.addEventListener('change', callback);
    } else {
        mq.addListener(callback);
    }
}


export default addMQListener;


/**
 * MDN示例：https://developer.mozilla.org/zh-CN/docs/Web/API/MediaQueryList/matches
 * 创建MediaQueryList实例对象，使用window.matchMedia(mediaQueryString);
 */
