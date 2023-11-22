const updateOldAndSensitiveData = (event, isUpdate) => {
	// 是否基于HTTP缓存，更新页面陈旧或敏感数据
	if(event.persisted && isUpdate) location.reload();
};

export default updateOldAndSensitiveData;

// 以下为使用案例
const isUpdate = () => {
	/**
	 * 页面从BFCache恢复后，更新页面。以下情况更新：
	 * 1、页面中保存着用户敏感信息。
	 * 2、页面每分钟更新页面信息。
	 *
	 * 当用户注销登录后（删除当前页面的token），检测当前页面是否存在token。
	 */
};


window.addEventListener('pageshow', (e) => {
	// 触发pageshow事件时，页面已经从BFCache恢复。
	updateOldAndSensitiveData(e, isUpdate());
});
