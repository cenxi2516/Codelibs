/**
 * 在当前窗口打开一个新的窗口
 * @param  {Object}   props   {url, target, isOpenerRef}
 * @return {Window}           新打开widnow对象
 */
const openNewWindow = (props = {}) => {
    const {
        url = 'about:blank',
            target = '_blank',
            isOpenerRef = false
    } = props;

    const windowFeatures = `${isOpenerRef?'':'noopener'}`;
    const newWindow = window.open(
        url,
        target,
        windowFeatures
    );

    return newWindow;
}


export default openNewWindow;
