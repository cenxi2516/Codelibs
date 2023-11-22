/**
 * 浏览器从online(在线) ==> offline(离线)触发的事件
 * @param  {Function} callback offlineHandler
 * @return {undefined}            undefined
 */
const addOfflineEvent = (callback) => window.addEventListener('offline', callback);


export default addOfflineEvent;
