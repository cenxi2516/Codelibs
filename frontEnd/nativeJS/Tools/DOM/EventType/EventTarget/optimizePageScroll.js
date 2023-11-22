import isCompatPassive from './isCompatPassive.js';

const optimizePageScroll = (scrollEventHandler) => {
    window.addEventListener('scroll', scrollEventHandler, isCompatPassive() ? {
        passive: true
    } : false);
};

const scrollEventHandler = (event) => {
    // 不能调用：event.preventDefault();
};

export default optimizePageScroll;
