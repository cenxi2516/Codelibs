/**
 * 检测dom是否滚动到底部
 * @param  {HTMLElement} dom
 * @return {Boolean}     true表示滚动到dom底部，false表示未滚动到dom底部
 */
const isScrollToBottomOfElement = (dom) => {
    const {
        scrollHeight,
        clientHeight,
        scrollTop
    } = dom;

    return scrollHeight - clientHeight - scrollTop < 1;
};

export default isScrollToBottomOfElement;
