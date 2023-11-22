/**
 * 访问器属性默认描述符
 * @param  {Function} setter setter方法,不能是箭头函数，仅有一个参数
 * @param  {Function} getter getter方法，不能是箭头函数，没有参数
 * @return {Object}          访问器属性描述符
 */
const accessorPropertyDefaultDescriptor = (setter, getter) => {
    const descriptor = accessorPropertyDefaultDescriptor.descriptor || (
        accessorPropertyDefaultDescriptor.descriptor = {
            configurable: false,
            enumerable: false,
            set: setter,
            get: getter
        }
    );

    // 避免重复赋值，更改set、get
    if (descriptor.set !== setter) descriptor.set = setter;
    if (descriptor.get !== getter) descriptor.get = getter;

    return descriptor;
};


/**
 * 扩展：
 * 1、属性类型：数据属性、访问器属性。
 * 2、数据属性与访问器属性皆有的描述符属性：
 * 	a、configurable（可配置），默认值为false。
 * 		- 属性类型能否在数据属性和访问器属性间切换更改。
 * 		- 能否被删除。
 * 		- 能否修改描述符中其他属性。
 * 			- configurable为true，描述符其他属性能修改。
 * 			- configurable为false，描述符其他属性不能修改。（特例：当writable为true时，
 * 			能使用赋值运算符修改属性的值，可以修改value的值，可以修改writable的值为false）
 * 	b、enumerable（可枚举），默认值为false。
 * 		- true，属性可枚举。除符号属性外，可以在for...in、Object.values、Object.keys、
 * 		Object.entries中枚举到。
 * 		- false，属性不可枚举。一般系统提供的属性皆不可枚举。
 *
 * 3、数据属性描述符独有属性：
 * 	a、writable（可写的），默认值为false
 * 		- true，可写的。能被赋值运算符修改属性的值。能修改value的值，能修改writable的值为false。
 * 		- false，不可写的。不能被赋值运算符修改属性的值。
 * 			- 若是configurable为true，则可以修改value的值。
 * 			- 若是configurable为false，则不可以修改value的值。
 * 	b、value（属性值），默认值为undefined
 *
 * 4、访问器属性描述符独有属性：
 * 	a、set：作为setter属性的值，若是未定义，默认值为undefined（不存在setter）。
 * 		- 仅有一个参数，在对象属性赋值时，调用setter方法。
 * 		- 若是要删除setter，设置set值为undefined
 * 	b、get：作为getter属性的值，若是未定义，默认值为undefined（不存在getter）。
 * 		- 没有参数，在对象属性取值时，调用getter方法，返回值作为属性值。
 * 		- 若是要删除getter，设置get值为undefined
 */
