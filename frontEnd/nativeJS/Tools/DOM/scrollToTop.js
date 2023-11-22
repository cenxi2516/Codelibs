/**
 * 元素平滑滚动到元素顶部
 * @param  {HTMLElement} element 滚动元素
 * @return {undefined}           undefined
 */
const scrollToTop = element => element.scrollIntoView({
    behavior: "smooth",
    block: "start"
});

export default scrollToTop;
