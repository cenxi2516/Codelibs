/**
 * 窗口页面从无到有触发的事件
 * @param  {Function} callback pageshowHandler
 * @return {undefined}         undefined
 */
const addPageshowEvent = (callback) => window.addEventListener('pageshow', callback);

export default addPageshowEvent;

/**
 * 以下情况会触发pageshow事件：
 * 1、页面首次载入：hide ==> show 触发pageshow事件
 * 2、页面刷新(加载)：show ==> hide
 * 				   hide ==> show 触发pageshow事件
 *
 * 注意：
 * 1、pageshow事件在load事件后触发：load事件 => pageshow事件
 * 2、event.persisted值
 * 		a、true：从bfcache缓存中载入。
 * 		b、false：未从bfcache缓存中载入。
 */
