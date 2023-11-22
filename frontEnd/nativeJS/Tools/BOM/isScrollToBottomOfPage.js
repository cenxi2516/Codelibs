import scrollTop from './scrollTop.js';
import viewPortSize from './../DOM/viewPortSize.js';

/**
 * 检测当前页面是否滚动到底部
 * @return {Boolean} 		true表示页面已经滚动到底部，false表示页面未滚动到底部
 */
const isScrollToBottomOfPage = () => {
    const sTop = scrollTop(); // 页面垂直滚动距离，可能不是整数值
    const [, vpHeight] = viewPortSize(); // 页面视口的高度
    const htmlScrollHeight = document.documentElement.scrollHeight; // 页面滚动的高度

    return Math.abs(htmlScrollHeight - vpHeight - sTop) < 1;
};

export default isScrollToBottomOfPage;
