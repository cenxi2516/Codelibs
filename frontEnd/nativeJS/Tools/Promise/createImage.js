/**
 * 异步加载图片
 * @param  {String} imgURL 图片地址
 * @return {Promise}       Promise对象，加载成功fulfilled，加载失败rejected
 */
const createImage = (imgURL) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const eventConfig = {
            once: true
        };

        // 图像加载完成事件
        img.addEventListener('load', (e) => resolve(img), eventConfig);
        // 图像加载失败事件
        img.addEventListener('error', (e) => reject('error'), eventConfig);

        img.src = imgURL;
    });
};

export default createImage;
