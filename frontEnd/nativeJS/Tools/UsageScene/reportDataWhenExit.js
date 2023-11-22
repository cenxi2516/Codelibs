import addVisibilitychangeEvent from './../DOM/EventType/addVisibilitychangeEvent.js';
import addPagehideEvent from './../BOM/EventType/addPagehideEvent.js';
import hasProperty from './../Object/hasProperty.js';
import sendBeacon from './../Ajax/sendBeacon.js';
import dataType from './../DataType/index.js';

/**
 * 在离开页面时上报数据
 * @param  {String} url      上报地址
 * @param  {Any} data
 * @param  {Function} thenHandler 后续处理函数
 * @return {undefined}
 */
const reportDataWhenExit = (url, data, thenHandler) => {
    const reportData = async (isReport = true) => {
        if (!isReport) return;

        const result = await sendBeacon(url, data);
        dataType.isFunction(thenHandler) && thenHandler(result);
    };

    if (hasProperty(document, 'onvisibilitychange')) {
        addVisibilitychangeEvent((e) => reportData(document.visibilityState === 'hidden'));
    } else {
        addPagehideEvent((e) => reportData());
    }

    return reportHandler;

};



export reportDataWhenExit;
