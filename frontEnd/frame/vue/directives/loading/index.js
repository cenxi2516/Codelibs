import loadingURL from '@/assets/loading.svg';
import styles from './index.module.less';

const createLoading = () => {
    const oDiv = document.createElement('div');
    oDiv.dataset.loading = true;

    oDiv.className = styles['loading-container'];

    const oImg = new Image();
    oImg.src = loadingURL;

    oDiv.appendChild(oImg);

    return oDiv;
};

const isExistLoading = (el) => {
    return el.querySelector('div[data-loading=true]');
};


export default (el, binding) => {
    const isLoading = binding.value; // 指令值
    const curLoading = isExistLoading(el);
    if (isLoading) {
        if (!curLoading) { // 判断元素loading效果是否存在
            // 向元素插入loading效果
            const oLoading = createLoading();
            el.appendChild(oLoading);
        }
    } else {
        if (curLoading) { // 判断元素loading效果是否存在
            // 删除元素loading效果
            curLoading.remove();
        }
    }
};