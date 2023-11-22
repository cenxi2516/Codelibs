/**
 * 获取浏览器窗口水平滚动条滚动距离
 * @return {Number} 水平滚动距离
 */
const scrollLeft = () => {
    // IE9+最新版浏览器
    const isSupportPageOffset = window.pageXOffset !== undefined;

    if (isSupportPageOffset) return window.pageXOffset;
    // 文档渲染模式是否是标准模式
    const isCSS1Compat = document.compatMode === 'CSS1Compat';

    if (isCSS1Compat) return document.documentElement.scrollLeft;

    return document.body.scrollLeft;

    // return document.scrollingElement.scrollLeft;
};

export default scrollLeft;
