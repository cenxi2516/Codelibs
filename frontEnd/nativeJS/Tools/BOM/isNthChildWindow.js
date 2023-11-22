
/**
 * 判断当前窗口(或指定窗口)是否是父窗口中第N个子窗口
 * @param  {Number} n 第n个
 * @param  {Window} self Window对象
 * @return {Boolean}  true是，false否
 */
const isNthChildWindow = (n = 0, self = window) => self.parent.frames[n] === self;


export default isNthChildWindow;
