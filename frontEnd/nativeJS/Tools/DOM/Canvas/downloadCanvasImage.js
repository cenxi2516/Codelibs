/**
 * 将canvas画布转换为图片下载
 * @param  {HTMLCanvasElement} canvasDom canvas元素
 * @param  {String} type    转换后图片MIME类型，默认为'image/png'，支持：'image/jpeg'、'image/webp'
 * @param  {Number} quality 转换后图片质量，默认为0.8，取值范围：[0, 1]之间的浮点数
 * @return {undefined}
 */
const downloadCanvasImage = (canvasDom, type = 'image/png', quality = 0.8) => {
    canvasDom.toBlob(blob => {
        const objectURL = URL.createObjectURL(blob);
        objectURLDownload(objectURL);
    }, type, quality);
};

export default downloadCanvasImage;
