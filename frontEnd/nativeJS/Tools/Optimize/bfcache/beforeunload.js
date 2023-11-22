import createPageSavedChangeEvent from './../../DOM/EventType/CustomEvent/createPageSavedChangeEvent.js'

// 创建页面保存更改事件：在未保存、保存时触发。
const pageSavedChangeEvent = createPageSavedChangeEvent({
    isSaved() {
        // 检测页面更改是否已保存
    }
});

// beforeunload处理程序
const beforeunloadHandler = (event) => {

};

// 页面保存更改处理程序
const pageSavedChangeHandler = (event) => {
    const {
        addBeforeUnloadListener,
        removeBeforeUnloadListener,
        isSaved
    } = event.detail;

    const handler = isSaved() ? removeBeforeUnloadListener : addBeforeUnloadListener;
    handler(beforeunloadHandler);
}

// 向页面添加保存更改事件
pageSavedChangeEvent.add(pageSavedChangeHandler);


/**
 * 在保存发生变更处调度：触发事件
 * pagepageSavedChangeEvent.dispatch();
 */
