interface FnInvokeRecordType<T> {
  isInvoke: boolean; // 记录接口是否调用
  lock: boolean; // 接口调用后加锁
  result: T; // 接口调用后获取的数据
  awaitTask?: Promise<T>;
}

function avoidFnRepeatInvoke<T>(fn: () => T) {
  const fnInvokeRecord: FnInvokeRecordType<T> = {
    isInvoke: false,
    lock: false,
    result: null as T,
  };

  return new Proxy(fn, {
    async apply(target, thisRef, argList) {
      const { isInvoke, result, lock, awaitTask } = fnInvokeRecord;

      if (lock) return await awaitTask;

      fnInvokeRecord.lock = true;
      if (isInvoke && result) return result;

      const data = (fnInvokeRecord.awaitTask = Reflect.apply(
        target,
        thisRef,
        argList
      ));

      Object.assign(fnInvokeRecord, {
        isInvoke: true,
        result: await data,
        lock: false,
      });

      return await data;
    },
  });
}

export default avoidFnRepeatInvoke;
