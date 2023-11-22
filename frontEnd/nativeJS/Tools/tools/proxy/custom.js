// 观察者模式
const createObserver = (target, notificationHandle) => {
  // 01. 创建观察者
  const observer = Object.create(null);

  // 02. 为观察者添加存取器属性
  Object.keys(target).forEach((key) => {
    Object.defineProperty(observer, key, {
      get() {
        return target[key];
      },
      set(value) {
        const oldValue = this[key];
        if (oldValue !== value) {
          target[key] = value;
          notificationHandle?.(observer, oldValue);
        }
      },
      enumerable: true,
    });
  });

  // 03. 阻止观察者扩展
  Object.preventExtensions(observer);

  return observer;
};

// 偷懒的构造函数
const constructorProxy = (TargetConstructor, ...propNames) =>
  function (...propValues) {
    const target = new TargetConstructor();

    propNames.forEach((key, index) => (target[key] = propValues[index]));

    return target;
  };

// 可验证的函数参数
const verifiableFuncParam = (func, ...paramTypes) => {
  return function(...paramValues) {
    paramValues.forEach((value, index) => {
      const targetType = paramTypes[index];
      const currentType = typeof value;

      if(targetType !== currentType) {
        throw new TypeError(`第${index+1}个参数，传递值为${value}，类型应该是${targetType}`);
      }
    });

    return func(...paramValues);
  };
};