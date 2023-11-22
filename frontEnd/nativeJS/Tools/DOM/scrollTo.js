/**
 * 元素平滑滚动到页面指定位置
 * @param  {HTMLElement | Window} element 滚动元素或页面
 * @param  {Number} top     元素垂直滚动距离
 * @param  {Number} left    元素水平滚动距离
 * @return {undefined}
 */
const scrollTo = (element, top, left = 0) => element.scrollTo({
    top,
    left,
    behavior: 'smooth'
});

export default scrollTo;
