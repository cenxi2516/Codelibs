import viewPortSize from './viewPortSize.js';

/**
 * 在页面可视区域移动dom
 * @param  {HTMLElement} dom
 * @return {undefined}
 */
const moveDom = (dom) => {
    const throttle = (func) => {
        let timer = null;
        return new Proxy(func, {
            apply(target, thisArg, argsList) {
                if (!timer) {
                    timer = window.requestAnimationFrame(() => {
                        timer = null;
                    });
                    return Reflect.apply(target, thisArg, argsList);
                }
            }
        });
    };

    dom.addEventListener('mousedown', (e) => {
        const {
            left,
            top,
            width,
            height
        } = dom.getBoundingClientRect();
        const {
            clientX: startClientX,
            clientY: startClientY
        } = e;
        let moveX = 0,
            moveY = 0;
        const [vpWidth, vpHeight] = viewPortSize();
        const maxMoveY = vpHeight - height - top,
            minMoveY = -top,
            maxMoveX = vpWidth - width - left,
            minMoveX = -left;

        dom.style.cursor = 'move';
        document.getSelection().removeAllRanges();

        const mousemoveHandler = throttle((e) => {
            const {
                clientX: curClientX,
                clientY: curClientY
            } = e;
            moveX = curClientX - startClientX;
            moveX = Math.max(minMoveX, moveX);
            moveX = Math.min(maxMoveX, moveX);
            moveY = curClientY - startClientY;
            moveY = Math.max(minMoveY, moveY);
            moveY = Math.min(maxMoveY, moveY);

            document.getSelection().removeAllRanges();
            dom.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        document.addEventListener('mousemove', mousemoveHandler);
        document.addEventListener('mouseup', (e) => {
            dom.style.cursor = '';
            dom.style.transform = '';
            dom.style.top = `${top+moveY}px`;
            dom.style.left = `${left+moveX}px`;
            document.removeEventListener('mousemove', mousemoveHandler);
        }, {
            once: true
        });
    });
};

export default moveDom;
