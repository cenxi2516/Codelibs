/**
 * 在页面统一处理Promise状态为rejected
 * @param  {Function} callback 回调函数
 * @return {undefined}         undefined
 */
const handleRejected = (callback) => {
	// 当页面中存在Promise的rejected状态未处理时触发
	window.addEventListener('unhandledrejection', (e) => {
		callback(e.reason);

		// 默认行为，在控制台打印未处理的Rejected状态数据
		if (e.cancelable && !e.defaultPrevented) e.preventDefault();
	});
};

export default handleRejected;
