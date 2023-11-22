
/**
 * 初始化canvas尺寸、分辨率
 * @param  {String} id      canvas中id值
 * @param  {Number} width   canvas的宽度
 * @param  {Number} height  canvas的高度
 * @param  {String} context 默认值为2d
 * @return {Array}          [ctx, canvas]
 */
const initCanvas = (id, width = 200, height = 200, context = '2d') => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext(context);

    // css像素，在页面展示的尺寸
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // 物理(屏幕实际)像素 / CSS像素
    const scale = globalThis.devicePixelRatio;

    // 单个CSS像素需要多少屏幕的实际像素(物理像素)来渲染
    canvas.width = Math.floor(width * scale);
    canvas.height = Math.floor(height * scale);

    ctx.scale(scale, scale);

    return [ctx, canvas];
};


export default initCanvas;
