const isDragSuccess = e => {
    const {
        effectAllowed,
        dropEffect
    } = e.dataTransfer;

    const isContainsAndEqual = new RegExp(dropEffect, 'i').test(effectAllowed);
    const isSupportAll = ['uninitialized', 'all'].includes(effectAllowed) && dropEffect !== 'none';

    return isContainsAndEqual || isSupportAll;
};

export default isDragSuccess;
