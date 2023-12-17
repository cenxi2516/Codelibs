let routerTitle = '',
    pageTitle = '';

export const setRouterTitle = (title) => {
    routerTitle = title;
};

export const setPageTitle = (title) => {
    pageTitle = title;
};

export default () => {
    let title = '';
    if (routerTitle && pageTitle) {
        title = `${routerTitle}-${pageTitle}`;
    } else if (!routerTitle && pageTitle) {
        title = pageTitle;
    } else if (routerTitle && !pageTitle) {
        title = routerTitle;
    }

    document.title = title;
};
