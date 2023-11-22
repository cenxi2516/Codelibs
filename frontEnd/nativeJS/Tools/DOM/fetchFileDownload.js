import objectURLDownload from './objectURLDownload.js';

/**
 * 通过url下载文件
 * @param  {String} url    url地址
 * @param  {Object} config 请求配置
 * @return {Promise}
 */
const fetchFileDownload = async (url, config = {}) => {
	const response = await fetch(url, config);
    const blob = await response.blob();
    const blobURL = URL.createObjectURL(blob);
    const filename = url.match(/[^/]+\.\w+$/i);

    objectURLDownload(blobURL, filename);
}

export default fetchFileDownload;
