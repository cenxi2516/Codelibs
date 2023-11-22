const runAsyncTask = (generatorFunc) => {
  const generator = generatorFunc();
  let result = generator.next(); // 开始迭代，并得到迭代数据
  handleResult(); // 处理迭代数据

  function handleResult() {
    // 数据迭代完成
    if (result.done) return;

    if (typeof result.value?.then === 'function') {
      // Promise数据， 异步
      result.value.then(
        (data) => {
          result = generator.next(data);
          handleResult();
        },
        (reason) => {
          generator.throw(reason);
        }
      );
    } else {
      // 其他数据，同步
      result = generator.next(result.value);
      handleResult();
    }
  }
};
