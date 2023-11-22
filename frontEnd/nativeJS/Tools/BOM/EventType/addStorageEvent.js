/**
 * 当修改localStorage缓存的数据时，打开的同源页面触发的事件
 * @param  {Function} callback  回调函数
 * @return {undefined}          undefined
 */
const addStorageEvent = (callback) => window.addEventListener('storage', callback);
