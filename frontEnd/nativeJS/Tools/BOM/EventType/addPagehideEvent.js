/**
 * 窗口页面从有到无触发的事件
 * @param  {Function} callback pagehideHandler
 * @return {undefined} undefined
 */
const addPagehideEvent = (callback) => window.addEventListener('pagehide', callback);

export default addPagehideEvent;


/**
 * window的pagehide 与 document的visibilitychange：
 * 1、页面首次载入：hide => show
 * 				 none => visible
 *
 * 2、页面刷新(reload)：show => hide 		触发pagehide事件
 * 					  visible => none 	触发visibilitychange事件
 * 					  hide => show
 *        			  none => visible
 *
 * 3、切换Tab页、隐藏浏览器窗口、设备息屏：visible => hidden 触发visibilitychange事件
 * 4、切回Tab页、显式浏览器窗口、显式设备：hidden => visible 触发visibilitychange事件
 * 5、关闭Tab页：show => hide 			触发pagehide事件
 * 			    visible => none 		触发visibilitychange事件
 *
 * 6、前进或后退按钮：show => hide      	触发pagehide事件
 * 				   visibility => none 	触发visibilitychange事件
 *
 * 触发顺序：pagehide => visibilitychange
 *
 * 注意：
 * 1、event.persisted值
 * 		a、true：启用bfcache缓存，整个页面以及Javascript堆的快照，缓存在内存中。
 * 		b、false：未启用bfcahe缓存，整个页面快照未缓存。
 */


