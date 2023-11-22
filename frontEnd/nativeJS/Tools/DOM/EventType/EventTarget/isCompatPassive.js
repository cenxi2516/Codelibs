/**
 * 检测浏览器是否兼容passive
 * @return {Boolean} true兼容，false不兼容
 */
const isCompatPassive = () => {
    let isSupportPassive = false;

    try {
        const options = {
            get passive() {
                isSupportPassive = true;

                return false;
            }
        };

        // 若是浏览器兼容passive，则会调用passive
        window.addEventListener('test', null, options);
        window.removeEventListener('test', null, options);
    } catch (e) {
        return false;
    }

    return isSupportPassive;
};


export default isCompatPassive;
