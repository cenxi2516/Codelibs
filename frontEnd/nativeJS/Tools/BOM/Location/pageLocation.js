class PageLocation {
    constructor(href = window.location.href) {
        const url = new URL(href);

        this.url = url;
        this.searchParams = url.searchParams;
    }

    // 设置协议://主机名:端口号
    setOrigin(value) {
        this.url.origin = value;
    }

    // 设置主机名:端口号
    setHost(value) {
        this.url.host = value;
    }

    // 设置主机名：域名或IP地址
    setHostname(value) {
        this.url.hostname = value;
    }

    // 设置href
    setHref(value) {
        this.url.href = value;
    }

    // 设置路径
    setPathname(value) {
        this.url.pathname = value;
    }

    // 设置协议名
    setProtocol(value) {
        this.url.protocol = value;
    }

    // 设置hash
    setHash(value) {
        this.url.hash = value;
    }

    // 设置端口号
    setPort(value) {
        this.url.port = value;
    }

    // 获取源：协议://主机名:端口号
    getOrigin() {
        return this.url.origin;
    }

    // 获取主机名:端口号
    getHost() {
        return this.url.host;
    }

    // 获取主机名
    getHostname() {
        return this.url.hostname;
    }

    // 获取href
    getHref() {
        return this.url.href;
    }

    // 获取路径
    getPathname() {
        return this.url.pathname;
    }

    // 获取端口号
    getPort() {
        return this.url.port;
    }

    // 得到查询参数，不包含?
    getSearch() {
        return this.url.search.slice(1);
    }

    // 获取协议名
    getProtocol() {
        return this.url.protocol.slice(0, -1);
    }

    // 获取页面hash, 不包含#
    getHash() {
        return this.url.hash.slice(1);
    }

    // 将查询参数转换为普通对象并encodeURIComponent
    get params() {
        const decodeSearchParams = (searchParams) => {
            searchParams = [...searchParams];
            const newSearchParams = searchParams.map(([name, value]) => [name, encodeURIComponent(value)]);

            return Object.fromEntries(newSearchParams);
        };

        return decodeSearchParams(this.searchParams);
    }

    // 将所有行为更新到当前页面的url中
    update() {
        window.location.href = this.url.href;
    }
}

export const createPageLocation = (url) => new PageLocation(url);

const pageLocation = new PageLocation();

export default pageLocation;
