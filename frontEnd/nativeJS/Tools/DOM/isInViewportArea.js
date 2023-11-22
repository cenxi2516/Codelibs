import viewPortSize from './viewPortSize.js';

/**
 * 检测dom是否在文档可视区域内
 * @param  {HTMLElement} dom
 * @return {Boolean}     true表示dom在文档可视区域内，false表示dom不在文档可视区域内
 */
const isInViewportArea = (dom) => {
    const {
        left,
        top,
        width,
        height
    } = dom.getBoundingClientRect();
    const [vpWidth, vpHeight] = viewPortSize();

    // 水平方向: (-width, vpWidth)
    // 垂直方向：(-height, vpHeight)
    return (left > -width && left < vpWidth) && (top > -height && top < vpHeight);
};

export default isInViewportArea;
