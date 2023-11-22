import createCustomEvent from './createCustomEvent.js';

// 创建一个pageSavedChangeEvent事件
const createPageSavedChangeEvent = (detail = {}) => createCustomEvent({
    dom: window,
    type: 'pageSavedChange',
    detail: {
        addBeforeUnloadListener(callback) {
            window.addEventListener('beforeunload', callback);
        },
        removeBeforeUnloadListener(callback) {
            window.removeEventListener('beforeunload', callback);
        },
        ...detail
    }
});

export default createPageSavedChangeEvent;
