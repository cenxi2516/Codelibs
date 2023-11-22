/**
 * 监听信号是否中断
 * @param  {AbortSignal} signal AbortSignal实例对象
 * @return {Promise}
 */
const watchAbort = (signal) => new Promise((resolve, reject) => {
    if (signal.aborted) {
        // 若是已经中断
        reject(signal.reason);
    } else {
        // 若是没有中断，添加中断监听器，中断后移除监听
        signal.addEventListener('abort', (e) => {
            reject(signal.reason);
        }, {
            once: true
        });
    }
});

export default watchAbort;
