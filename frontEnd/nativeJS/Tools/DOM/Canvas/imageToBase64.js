import canvasToBase64 from './canvasToBase64.js';

/**
 * 将图片转换为base64格式图片源（比图片源文件三分之一）
 * @param  {String} imgUrl  图片地址
 * @param  {String} type    转换后图片MIME类型，默认为'image/png'，支持：'image/jpeg'、'image/webp'
 * @param  {Number} quality 转换后图片质量，默认为0.8，取值范围：[0, 1]之间的浮点数
 * @return {Promise}         Promise对象，fulfilled的状态数据为Base64格式的字符串
 */
const imageToBase64 = (imgUrl, type = 'image/png', quality = 0.8) => new Promise((resolve, reject) => {
    const imgDom = new Image();
    imgDom.addEventListener('load', (e) => {
        const {
            width,
            height
        } = imgDom;

        const canvasDom = document.createElement('canvas');
        [canvasDom.width, canvasDom.height] = [width, height];

        resolve(canvasToBase64(canvasDom, type, quality));
    });
    imgDom.addEventListener('error', (e) => reject('图片加载失败'));

    imgDom.src = imgUrl;
});

export default imageToBase64;
