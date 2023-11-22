const forceAnimation = (beforeAnimation, targetAnimation) => {
    requestAnimationFrame(() => {
        // 前一帧状态，
        beforeAnimation();
        requestAnimationFrame(() => {
            // 后一帧状态
            targetAnimation();
        });
    });
};


export default forceAnimation;
