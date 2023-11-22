/**
 * 浏览器从offline(离线) ==> online(在线) 触发的事件
 * @param  {Function} callback onlineHandler
 * @return {undefined}         undefined
 */
const addOnlineEvent = (callback) => window.addEventListener('online', callback);


export default addOnlineEvent;
