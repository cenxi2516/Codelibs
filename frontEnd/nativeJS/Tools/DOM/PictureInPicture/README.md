# 画中画

## 页面画中画模式是否可用

> **`document.pictureInPictureEnabled`**：布尔值，表示页面画中画模式是否可用，只读属性。

```javascript
document.pictureInPictureEnabled
```



## 当前文档画中画元素

> **`document.pictureInPictureElement`**：返回当前文档中以画中画模式呈现的`元素`，如果没有使用画中画模式，则返回`null`。

```javascript
document.pictureInPictureElement
```



## 异步恢复页面之前的状态

> **`document.exitPictureInPicture()`**：异步请求退出以画中画模式浮动在此文档中播放的视频，来恢复屏幕之前的状态。这通常与先前调用的`HTMLVideoElement.requestPictureInPicture()`相反。

```javascript
document.exitPictureInPicture().then(() => {
    // 成功退出画中画模式
    
}).catch(err => {
    // 退出画中画模式失败
    
});
```



## 异步请求以画中画的模式显示

> **`HTMLVideoElement.prototype.requestPictureInPicture()`**：异步请求以画中画的模式显示视频。

如果允许进入画中画模式，返回的`Promise`状态为`fulfilled`，并且会收到一个`enterpictureinpicture`事件，通知它已经进入画中画模式。

状态数据为[PictureInPictureWindow](https://developer.mozilla.org/zh-CN/docs/Web/API/PictureInPictureWindow)对象。

- 可以用于监听用户何时调整该浮动窗口的大小（`resize`事件）。
- 获得浮动视频窗口的宽度(`width`属性)。
- 获取浮动视频窗口的高度(`height`属性)。

```javascript
videoElement.requestPictureInPicture().then(pictureInPictureWindow => {
    // 成功进入画中画模式
    
}).catch(err => {
    // 进入画中画模式失败
    
});
```



## 设置/获取能否进入画中画模式

> **`HTMLVideoElement.prototype.disablePictureInPicture`**：布尔值，可读可写。

- 可以获取当前`video元素`是否被禁用进入画中画模式，默认值为`false`。
- 可以设置当前`video元素`能否进入画中画模式。

```javascript
videoElement.disablePictureInPicture // 获取
videoElement.disablePictureInPicture = true; // 设置
```



## 成功进入画中画模式事件

> **`enterpictureinpicture`**：在`HTMLVideoElement`成功进入画中画模式时触发。

```javascript
videoElement.addEventListener('enterpictureinpicture', handler);
```



## 成功退出画中画模式事件

> **`leavepictureinpicture`**：在`HTMLVideoElement`成功退出画中画模式时触发。

```javascript
videoElement.addEventListener("leavepictureinpicture", handler);
```

















