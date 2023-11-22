/**
 * 数据属性默认描述符
 * @param  {Any} value 任意值
 * @return {Object}    数据属性描述符
 */
const dataPropertyDefaultDescriptor = (value) => {
    const descriptor = dataPropertyDefaultDescriptor.descriptor || (
        dataPropertyDefaultDescriptor.descriptor = {
            configurable: false,
            enumerable: false,
            writable: false,
            value
        }
    );

    // 更改value值，避免重复赋值
    if (descriptor.value !== value) descriptor.value = value;

    return descriptor;
};


export default dataPropertyDefaultDescriptor;
