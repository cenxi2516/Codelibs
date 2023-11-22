import cutBoundaryValue from './../Number/cutBoundaryValue.js';

Array.prototype.getDetailInfo = function() {
    // 记录数组中数据信息：数量、位置
    const detailInfo = new Map();

    /**
     * length值处理——
     * 1、强制转换为数值并取整。
     * 2、若是为NaN、负整数值，则取0。
     * 3、若是大于2 ** 32 - 1，则取2 ** 32 - 1。
     * 4、取值范围：[0, 2 ** 32 - 1]
     */
    const length = cutBoundaryValue(0, 2 ** 32 - 1, Math.trunc(+this.length) || 0);

    for (let i = 0; i < length; i++) {
        if (!Object.hasOwn(this, i)) continue;

        const data1 = this[i]; // key

        if (detailInfo.has(data1)) {
            const info = detailInfo.get(data1);
            info.count++; // 数量 +1
            info.indexs.push(i); // 加入索引位置
        } else {
            detailInfo.set(data1, {
                count: 1,
                indexs: [i]
            });
        }
    }

    return [...detailInfo];
};
