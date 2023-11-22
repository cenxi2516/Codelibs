/**
 * 强制https协议访问页面
 * @return {undefined} undefined
 */
const forceHttpsAccess = () => location.replace(location.href.replace('http://', 'https://'));

export default forceHttpsAccess;

/**
 * 或者重定向：
 * <meta http-equiv="refresh" content="0;url=重定向地址">
 */
