/**
 * 检测当前文件的MIME是否支持，例如：image/png
 * @param  {String} fileType  文件的MIME
 * @param  {Array} FileTypes  支持文件的数组，例如：['png', 'jpg', 'jpeg', 'webp']
 * @return {Boolean}          支持返回true，否则返回false
 */
const isSupportFileType = (fileType, FileTypes) => {
    const type = fileType.replace(/[a-z]+\//i, '').toLowerCase();

    return FileTypes.includes(type);
};

export default isSupportFileType;
