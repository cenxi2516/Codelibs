/**
 * 检测浏览器是否兼容signal
 * @return {Boolean} true兼容，false不兼容
 */
const isCompatSignal = () => {
    let isSupportSignal = false;
    const abortController = new AbortController();

    try {
        const options = {
            get signal() {
                isSupportSignal = true;

                return abortController.signal;
            }
        };

        // 若是浏览器兼容signal，则会调用signal
        window.addEventListener('test', null, options);
        window.removeEventListener('test', null, options);
    } catch (e) {
        return false;
    }

    return isSupportSignal;
};


export default isCompatSignal;
