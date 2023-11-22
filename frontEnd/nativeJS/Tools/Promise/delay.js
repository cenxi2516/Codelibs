
/**
 * 异步延迟指定毫秒数
 * @param  {Number} duration 延迟的毫秒数
 * @return {Promise}         Promise对象
 */
const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

export default delay;
