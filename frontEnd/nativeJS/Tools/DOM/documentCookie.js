class DocumentCookie {
    /**
     * cookie 中键值对数量
     * @return {Number} 长度值
     */
    get length() {
        return this.keys().length;
    }

    /**
     * cookie值
     * @return {String} cookie值
     */
    get cookie() {
        return document.cookie;
    }

    /**
     * 新增或修改 cookie 中的键值对
     * @param {String}  key       键，必需
     * @param {String}  value     值，必需
     * @param {String | Number | Date}  validDate 有效期，Infinity为始终有效，秒数
     * @param {String}  path      路径，未设置，则为当前路径
     * @param {String}  domain    域名，未设置，则为当前域名
     * @param {Boolean} secure    是否安全
     */
    setItem(key, value, validDate = null, path = null, domain = null, secure = false) {
        // 若是key为空字符串，或为expires、max-age、path、domain、secure，则返回false
        if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) return false;

        // 设置有效期：expires 或 max-age
        let cExpires = '';
        if (validDate) {
            switch (validDate.constructor) {
                case Number:
                    cExpires =
                        validDate === Infinity ?
                        '; expires=Fri, 31 Dec 9999 23:59:59 GMT' :
                        `; max-age=${validDate}`;
                    break;
                case String:
                    cExpires = `; expires=${validDate}`;
                    break;
                case Date:
                    cExpires = `; expires=${validDate.toUTCString()}`;
                    break;
            }
        }

        const encodeKey = encodeURIComponent(key);
        const encodeValue = encodeURIComponent(value);
        const cDomain = domain ? `; domain=${domain}` : '';
        const cPath = path ? `; path=${path}` : '';
        const cSecure = secure ? '; secure' : '';

        document.cookie = `${encodeKey}=${encodeValue+cExpires+cDomain+cPath+cSecure}`;

        return true;
    }

    /**
     * 获取 cookie 中指定key的值，若是key不存在，则返回null。
     * @param  {String} key 键
     * @return {String|null}     value 或 null
     */
    getItem(key) {
        const encodeKey = encodeURIComponent(key).replace(/[-.+*]/g, "\\$&");
        const reg = new RegExp(`(?:(?:^|.*;)\\s*${encodeKey}\\s*\\=\\s*([^;]*).*$)|^.*$`);
        const decodeValue = decodeURIComponent(this.cookie.replace(reg, "$1"));

        return decodeValue || null;
    }

    /**
     * 移除 cookie 中指定的键值对
     * @param  {String} key    键 必需
     * @param  {String} path   路径 可选
     * @param  {String} domain 域名 可选
     * @return {Boolean}       true表示移除成功，false表示移除失败
     */
    removeItem(key, path = null, domain = null) {
        if (!key || !this.hasItem(key)) return false;

        const encodeKey = encodeURIComponent(key);
        const cExpires = '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        const cDomain = domain ? `; domain=${domain}` : '';
        const cPath = path ? `; path=${path}` : '';

        document.cookie = encodeKey + cExpires + cDomain + cPath;

        return true;
    }

    /**
     * 检测 cookie 中是否存在指定key
     * @param  {String}  key 键
     * @return {Boolean}     true表示存在，false表示不存在
     */
    hasItem(key) {
        const encodeKey = encodeURIComponent(key).replace(/[-.+*]/g, "\\$&");
        const reg = new RegExp(`(?:^|;\\s*)${encodeKey}\\s*\\=`);

        return reg.test(this.cookie);
    }

    /**
     * 遍历 cookie 切分为一个数组
     * @return {Array} 字符串数组
     */
    keys() {
        const aKeys = document.cookie
            .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "")
            .split(/\s*(?:\=[^;]*)?;\s*/);

        for (let nIdx = 0, len = aKeys.length; nIdx < len; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }

        return aKeys;
    }

    /**
     * 获取 cookie 中键对应的值组成的数组
     * @return {Array}  字符串数组
     */
    values() {
        const cKeys = this.keys();
        const cValues = cKeys.map(key => this.getItem(key));

        return cValues;
    }

    /**
     * 获取 cookie 中键值对组成的数组
     * @return {Array} 二维数组
     */
    entries() {
        const cKeys = this.keys();
        const cEntries = cKeys.map(key => [key, this.getItem(key)]);

        return cEntries;
    }
}

const documentCookie = new DocumentCookie();

export default documentCookie;
