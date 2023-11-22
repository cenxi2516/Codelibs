/**
 * 得到dom在页面中的绝对位置
 * @param  {HTMLElement} dom
 * @return {Array}     		 [left, top]
 */
const getPositionOfPage = (dom) => {
    const {
        left,
        top
    } = dom.getBoundingClientRect();

    const sTop = scrollTop();
    const sLeft = scrollLeft();

    return [sLeft + left, sTop + top];
};

export default getPositionOfPage;
