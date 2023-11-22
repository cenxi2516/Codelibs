/**
 * 退出当前全屏元素
 */
const exitFullscreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen().then(() => {
            // 当前元素成功退出全屏模式
        }).catch(err => {
            // 当前元素退出全屏模式失败
        });
    }
};

export default exitFullscreen;
