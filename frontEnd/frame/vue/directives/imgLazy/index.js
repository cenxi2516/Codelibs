import {debounce, eventBus, isInScrollContainerArea} from '@/tools';
import defaultImgURL from '@/assets/default.gif';

const lazyImgs = new Set();
const DelayTime = 1E2;
const DataSetMark = 'data-img-lazy';

const removeLoadLazyImg = item => {
    lazyImgs.delete(item);
    item.dom.removeAttribute(DataSetMark);
};

const lazyLoadImg = debounce((scrollContainer) => {
    if(scrollContainer === null) return;
    for (const item of lazyImgs) {
        const {dom, src} = item;
        if (isInScrollContainerArea(dom, scrollContainer)) {
            const imgDom = new Image();
            imgDom.addEventListener('load', () => {
                dom.src = src;
            });
            imgDom.src = src;

            removeLoadLazyImg(item);
        }
    }
}, 3E2);

const deleteNotExistImgItem = debounce(() => {
    for (const item of lazyImgs) {
        !document.querySelector(`img[${DataSetMark}][src="${item.src}"]`) && lazyImgs.delete(item);
    }
}, DelayTime);

const addMainScrollEvent = debounce(() => {
    eventBus.$on('mainScroll', lazyLoadImg);
}, DelayTime);

const removeMainScrollEvent = debounce(() => {
    eventBus.$off('mainScroll', lazyLoadImg);
}, DelayTime);

export default {
    bind(el, binding) {
        lazyLoadImg();
        addMainScrollEvent();
        lazyImgs.add({dom: el, src: binding.value});
        el.src = defaultImgURL;
        el.setAttribute(DataSetMark,'');
    }, update(el) {
        deleteNotExistImgItem();
    }, unbind(el) {
        lazyImgs.delete(el);
        removeMainScrollEvent();
    }
};