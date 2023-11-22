/**
 * 异步请求视频元素进入画中画模式
 * @param  {HTMLVideoElement} options.dom           视频元素
 * @param  {Function} options.enterCallback 		成功进入画中画模式回调函数
 * @param  {Function} options.leaveCallback 		成功离开画中画模式回调函数
 * @param  {Function} options.errorCallback 		进入画中画模式错误
 * @return {undefined}                      		undefined
 */
const requestPictureInPicture = ({
    dom,
    enterCallback = null,
    leaveCallback = null,
    errorCallback = null
}) => {
    if (document.pictureInPictureEnabled) {
        // 当前页面支持画中画模式
        dom.requestPictureInPicture().then(pictureInPictureWindow => {
            // 元素进入画中画模式成功
            enterCallback ?.(pictureInPictureWindow, dom);
            dom.addEventListener('leavepictureinpicture', leaveCallback, {
                once: true
            });
        }).catch(err => {
            // 元素进入画中画模式失败
            errorCallback ?.(err);
        })
    } else {
        // 当前页面不支持画中画模式
    }
};

export default requestPictureInPicture;
