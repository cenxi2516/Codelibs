/**
 * 获取Clipboard实例，进行剪切、粘贴、复制操作。
 * @return {Clipboard} Clipboard实例对象
 */
const clipboard = (() => navigator.clipboard)();

export default clipboard;
