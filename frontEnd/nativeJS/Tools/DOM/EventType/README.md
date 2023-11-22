# EventType（事件相关）
- 文档显式状态更变触发的事件：addVisibilitychangeEvent


## CustomEvent（自定义事件）
- 为元素创建一个自定义事件：createCustomEvent
- 创建页面保存改变事件：createPageSavedChangeEvent


## EventTarget（事件目标）
- 检测浏览器是否兼容passive属性：isCompatPassive
- 检测浏览器是否兼容signal属性：isCompatSignal
- 改善页面滚屏性能：optimizePageScroll
- 使用中断控制器移除事件监听：addEventListener

## Event（事件对象）
- 阻止事件在客户端默认行为：preventDefault
- 阻止事件往上冒泡：stopPropagation
- 获取事件冒泡路径：bubblesPath
