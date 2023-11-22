/**
 * 判断当前窗口(或指定窗口)是否是脚本打开的窗口
 * 1、脚本打开的窗口，会在window.opener中保留打开它的窗口引用。
 * 2、若是打开它的窗口被关闭，则引用也会断开，变为null。
 * @param  {Window} self Window对象
 * @return {Boolean} true表示一定是脚本打开的窗口
 */
const isScriptOpenWindow = (self = window) => !!self.opener;
