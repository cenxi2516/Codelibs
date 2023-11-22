/**
 * 文档显示状态变更触发的事件
 * @param  {Function} callback visibilitychangeHandler
 * @return {undefined}         undefined
 */
const addVisibilitychangeEvent = (callback) => {
    document.addEventListener('visibilitychange', callback);
}

export default addVisibilitychangeEvent;

/**
 * document的visibilitychange事件：
 * 1、页面首次载入：none => visible
 * 2、页面刷新(reload)：visible => none  				触发visibilitychange事件
 * 					  none => visible
 * 3、切换Tab页、浏览器窗口隐藏、设备息屏：visible => 		触发visibilitychange事件
 * 4、切回Tab页、浏览器窗口显示、设备亮屏：hidden => 		触发visibilitychange事件
 * 5、关闭窗口：visible => none 						触发visibilitychange事件
 */
