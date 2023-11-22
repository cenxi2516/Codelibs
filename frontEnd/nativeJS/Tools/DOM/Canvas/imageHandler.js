/**
 * 基于某种图片算法处理图片
 * @param  {HTMLImageElement} imgDom         img元素
 * @param  {Function} imageAlgorithm 图片算法函数
 * @param  {HTMLCanvasElement} canvasDom      canvas元素
 * @return {HTMLCanvasElement}                canvas元素
 */
const imageHandler = (imgDom, imageAlgorithm, canvasDom) => {
    canvasDom = canvasDom ?? document.createElement('canvas');
    const {
        width,
        height
    } = imgDom;

    const ctx = canvasDom.getContext('2d');
    ctx.drawImage(imgDom, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height);

    imageAlgorithm(imageData);

    ctx.putImageData(imageData, 0, 0, 0, 0, width, height);

    return canvasDom;
};

export default imageHandler;
