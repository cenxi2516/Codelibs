/**
 * 获取浏览器窗口垂直滚动条滚动的距离
 * @return {Number} 滚动距离
 */
const scrollTop = () => {
	// IE9+最新版浏览器
    const isSupportPageOffset = window.pageXOffset !== undefined;

    if (isSupportPageOffset) return window.pageYOffset;
    // 文档渲染模式是否是标准模式
    const isCSS1Compat = document.compatMode === 'CSS1Compat';

    if (isCSS1Compat) return document.documentElement.scrollTop;

    return document.body.scrollTop;

    // return document.scrollingElement.scrollTop;
};

export default scrollTop;
