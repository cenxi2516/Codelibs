# 视频

> [MDN：video](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)



## 视频常用属性和方法

```javascript
// 检测视频暂停播放，布尔值。true表示暂停播放，false，表示正在播放
videoDom.paused;

// 播放视频
videoDom.play();

// 暂停播放视频
videoDom.pause();

// 获取视频播放总时间，单位为秒数
videoDom.duration;

// 获取视频当前播放时间点，单位为秒数
videoDom.currentTime;

// 设置视频播放时间点，单位为秒数。设置成功的前提条件：响应头中必须存在Content-Range字段。
videoDom.currentTime = ms;

// 设置视频播放速率，默认为1，1.5，2，2.5
videoDom.playbackRate = rate;

// 设置播放音量，取值范围：[0,1]
videoDom.volume = num;
```

