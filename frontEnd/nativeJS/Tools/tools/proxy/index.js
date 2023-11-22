// 观察者模式
const createObserver = (target, notificationHandle) =>
  new Proxy(target, {
    set(target, key, value) {
      const currentValue = Reflect.get(target, key);
      if (currentValue !== value) {
        Reflect.set(target, key, value);
        notificationHandle?.(target, currentValue);
      }
    },
    get(target, key) {
      return Reflect.get(target, key);
    },
  });

// 偷懒的构造函数
const constructorProxy = (Class, ...propNames) =>
  new Proxy(Class, {
    construct(target, argumentsList) {
      const instance = Reflect.construct(target, argumentsList);
      propNames.forEach((key, index) => (instance[key] = argumentsList[index]));

      return instance;
    },
  });

// 可验证的函数参数
const verifyFuncParam = (func, ...paramTypes) =>
  new Proxy(func, {
    apply(target, thisArg, argumentsList) {
      paramTypes.forEach((targetType, index) => {
        const value = argumentsList[index];
        const currentType = typeof value;
        if (currentType !== targetType) {
          throw new TypeError(
            `第${index + 1}个参数，传递值为${value}，类型应该为${targetType}`
          );
        }
      });

      return Reflect.apply(target, thisArg, argumentsList);
    },
  });