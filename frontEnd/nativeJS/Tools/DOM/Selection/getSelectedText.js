/**
 * 获取用户选中的文本内容，包括input和textarea中选中的文本内容
 * @return {String} 选中的文本内容，未选中返回空字符串
 */
const getSelectedText = () => {
	// 获取页面焦点元素，若是没有焦点，则返回null或body
	const activeElement = document.activeElement;
	// 解决window.getSelection()对单行文本框和多行文本框失效
	const tagName = activeElement?.tagName.toLowerCase();
	if(['input', 'textarea'].includes(tagName)){
		const {selectionStart, selectionEnd, value} = activeElement;
		return value.slice(selectionStart, selectionEnd);
	}

	// document.getSelection() 与 window.getSelection() 等价
	return document.getSelection().toString();
};

export default getSelectedText
