/**
 * 检测用户设备是否启用黑暗模式
 * @return {Boolean} true表示黑暗模式，false表示未启用黑暗模式
 */
const isDarkMode = () => !!window.matchMedia ?.("(prefers-color-scheme: dark)") ?.matches;

export default isDarkMode;
