/**
 * 将canvas画布转换为base64格式的图片源
 * @param  {HTMLCanvasElement} canvasDom Canvas元素
 * @param  {String} type      图片MIME类型，默认为'image/png'，支持'image/jpeg'、'image/webp'
 * @param  {Number} quality   图片质量，默认值为0.8，取值范围：[0,1]
 * @return {String}           base64格式的图片源
 */
const canvasToBase64 = (canvasDom, type = 'image/png', quality = 0.8) => {
    const {
        width,
        height
    } = canvasDom;
    const ctx = canvasDom.getContext('2d');
    ctx.drawImage(imgDom, 0, 0, width, height);

    return canvasDom.toDataURL(type, quality);
};

export default canvasToBase64;
