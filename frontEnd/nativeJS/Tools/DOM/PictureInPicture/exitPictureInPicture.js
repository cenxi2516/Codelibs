/**
 * 异步请求退出画中画模式
 * @return {undefined} undefined
 */
const exitPictureInPicture = () => {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture().then(() => {
            // 成功退出画中画模式
        }).catch(err => {
            // 退出画中画模式失败，err：错误对象
        })
    }
};

export default exitPictureInPicture;
