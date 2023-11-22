/**
 * 获取视口尺寸，不包含滚动条宽尺寸
 * @return {Array} [vpWidth, vpHeight]
 */
const viewPortSize = () => {
    // 文档渲染模式是否是标准模式（DTD已声明）
    const isCSS1Compat = document.compatMode === 'CSS1Compat';
    const dom = isCSS1Compat ? document.documentElement : document.body;

    return [dom.clientWidth, dom.clientHeight];
};


export default viewPortSize;
