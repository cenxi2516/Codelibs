const defaultConfig = {};

/**
 * 所有API封装基于originFetch
 * @param  {String} url    请求地址
 * @param  {Object} config 请求配置
 * @return {Promise}
 */
export const originFetch = async (url, config = {}) => {
    const response = await fetch(url, {
        ...defaultConfig,
        ...config,
    });

    // 状态码为[200,299]时，Promise状态才为fulfilled
    if (response.ok) return response;

    /**
     * 其他情况：
     * 1、状态码范围不再[200,299]
     * 2、网络错误
     * 3、中断错误
     * 4、超时错误
     * 5、不支持跨域错误
     * 6、参数配置错误
     * ...
     * Promise状态皆为rejected
     */
    throw response;
};


/**
 * 超时请求
 * @param  {String} url     请求地址
 * @param  {Object} config  请求配置
 * @param  {Number} timeout 超时时间，毫秒数
 * @return {Promise}
 */
export const timeoutRequest = (url, config = {}, timeout = 5000) => {
    const controller = new AbortController();

    const response = new Promise(resolve => {
        controller.timeoutId = setTimeout(() => controller.abort(), timeout);

        resolve(originFetch(url, {
            signal: controller.signal,
            ...config
        }));
    });

    // Promise进入settled阶段，后续处理
    response.finally(() => clearTimeout(controller.timeoutId));

    return response;
};
