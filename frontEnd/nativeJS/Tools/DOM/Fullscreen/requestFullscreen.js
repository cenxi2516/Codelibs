/**
 * 元素请求进入全屏模式
 * @param  {HTMLElement} options.dom        请求进入全屏模式的元素
 * @param  {Function} options.enterCallback 成功进入全屏模式回调函数
 * @param  {Function} options.leaveCallback 退出全屏模式回调函数
 * @param  {Function} options.errorCallback 拒绝进入全屏模式回调函数
 * @return {undefined}                      undefined
 */
const requestFullscreen = ({
    dom,
    enterCallback = null,
    leaveCallback = null,
    errorCallback = null
}) => {
    if (document.fullscreenEnabled) {
        // 当前页面支持进入全屏模式
        dom.requestFullscreen().then(() => {
            // 元素进入全屏模式
            enterCallback ?.(dom);

            const fullscreenChangeHandler = (e) => {
                if (!document.fullscreenElement) {
                    // 元素退出全屏模式
                    leaveCallback ?.(dom);
                    dom.removeEventListener(e.type, fullscreenChangeHandler);
                }
            };
            dom.addEventListener('fullscreenchange', fullscreenChangeHandler);
        }).catch(err => {
            // 元素未能进入全屏模式，错误对象：err
            errorCallback ?.(err);
        });
    } else {
        // 当前页面不支持进入全屏模式
    }
};

export default requestFullscreen;
