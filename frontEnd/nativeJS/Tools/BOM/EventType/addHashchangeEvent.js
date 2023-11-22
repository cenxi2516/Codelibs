/**
 * 页面锚点更改触发的事件
 * @param  {Function} callback 回调
 * @return {[type]}            [description]
 */
const addHashchangeEvent = (callback) => window.addEventListener('hashchange', callback);
