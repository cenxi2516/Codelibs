import isInViewPort from './isInViewPort.js';
import debounce from './../../Function/debounce.js';

/**
 * <img class="" data-src="url" alt="">
 *  .img {
 *      position: relative;
 *      z-index: -1;
 *      opacity: 0;
 *      transition: opacity .5s;
 *  }
 */
const imageLazyLoadHandler = debounce(() => {
    const showImg = dom => {
        dom.style.cssText = `
                        z-index: 1;
                        opacity: 1;
                    `;
        dom.removeAttribute('data-src');
    };
    const allLazyLoadImg = document.querySelectorAll('img[data-src]');
    allLazyLoadImg.forEach(dom => {
        const isInVP = isInViewPort(dom);
        if (isInVP) {
            dom.onerror = dom.onload = () => showImg(dom);
            dom.src = dom.dataset.src;
        }
    });

}, 5E2);

export default imageLazyLoadHandler;
