/**
 * 移除媒体查询的监听
 * @param  {MediaQueryList} mq
 * @param  {Function} callback 回调函数
 */
const removeMQListener = (mq, callback) => {
    if (mq.removeEventListener) {
        mq.removeEventListener('change', callback);
    } else {
        mq.removeListener(callback);
    }
}

export default removeMQListener;
