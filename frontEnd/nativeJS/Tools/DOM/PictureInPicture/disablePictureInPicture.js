/**
 * 获取或设置视频元素能否呈现画中画模式
 * @param  {HTMLVideoElement} dom      	视频元素
 * @param  {Boolean|undefined} disabled 为布尔值设置，为undefined获取
 * @return {Boolean}           			当前视频画中画模式能否呈现
 */
const disablePictureInPicture = (dom, disabled) => {
    if (disabled === undefined) {
        return dom.disablePictureInPicture;
    }

    return dom.disablePictureInPicture = disabled;
}

export default disablePictureInPicture;
