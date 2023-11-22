# 全屏

## 当前页面全屏模式是否可用

> **`document.fullscreenEnabled`**：布尔值，表示当前页面全屏模式是否可用，只读属性。

全屏模式仅适用于：

- 不包含任何窗口化插件的页面。
- 页面中的所有`iframe`元素都设置了`allowfullscreen`属性。

```javascript
document.fullscreenEnabled
```



## 当前页面呈现全屏模式的元素

> **`document.fullscreenElement`**：返回当前页面中以全屏模式呈现的**`元素`**。如果当前页面未使用全屏模式，则返回**`null`**，只读属性。

```javascript
document.fullscreenElement
```



## 异步请求回退到上一个全局模式的状态

> **`document.exitFullscreen()`**：会让文档回退到上一个调用`Element.requestFullscreen()`方法进入全屏模式之前的状态。

例如：如果一个元素A在请求进入全屏模式之前，已经存在其他元素处于全屏状态。当这个元素A退出全屏模式之后，之前的元素仍然处于全屏状态。浏览器内部维护了一个全屏元素栈用于实现这个目的。

```javascript
document.exitFullscreen().then(() => {
    // 成功回退
    
}).catch(err => {
    // 回退失败，err：错误对象
    
}); // 退出当前元素全屏状态
```



## 异步请求使元素进入全屏模式

> **`Element.requestFullscreen()`**：用于发出异步请求使元素进入全屏模式。

- 如果元素被允许进入全屏模式，返回的`Promise`状态为`fulfilled`，并且该元素会收到一个`fullscreenchange`事件，通知它已经进入全屏模式。

- 如果全屏请求被拒绝，返回的`Promise`状态为`rejected`，并且该元素会收到一个`fullscreenerror`事件。

```javascript
element.requestFullscreen().then(() => {
    // 元素成功进入全屏模式
    
}).catch(err => {
   	// 元素进入全屏模式失败
    
});
```



## 元素全屏模式状态更改事件

**`fullscreenchange`**：元素进入或退出全屏模式，皆会触发。

```javascript
element.addEventListener('fullscreenchange', (e) => {
    const targetDom = e.target;
    if(targetDom === document.fullscreenElement){
        // 元素进入全屏模式
        
    } else {
        // 元素离开全屏模式
        
    }
});
```



## 元素请求进入全屏模式被拒绝事件

> `fullscreenerror`：元素请求进入全屏模式被拒绝触发的事件。

```javascript
element.addEventListener('fullscreenerror', handler);
```















