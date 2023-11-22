/**
 * 通过URL.createObjectURL创建的url下载文件
 * @param  {String} objectURL blob格式的url
 * @param  {String} filename  文件名
 * @return {undefined}
 */
const objectURLDownload = (objectURL, filename = '') => {
    const aDom = document.createElement('a');
    aDom.href = objectURL;
    aDom.download = filename;

    const clickEvent = new MouseEvent('click');
    aDom.dispatchEvent(clickEvent);

    // 使用完objectURL，释放objectURL占用的内存空间
	setTimeout(() => URL.revokeObjectURL(objectURL), 4E4);
};

export default objectURLDownload;
