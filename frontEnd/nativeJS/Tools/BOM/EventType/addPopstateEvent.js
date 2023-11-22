/**
 * 当前history state变更触发的事件：
 * 1、执行back、forward、go会触发popstate事件。
 * 2、执行pushState、replaceState不会触发popstate事件。
 * 3、修改页面hash，会触发popstate、hashchange事件。
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
const addPopstateEvent = (callback) => window.addEventListener('popstate', callback);
