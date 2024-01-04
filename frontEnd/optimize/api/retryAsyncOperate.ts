const delay = (duration:number) => new Promise<void>(resolve => setTimeout(resolve, duration));

function retryAsyncOperation<T>(
  asyncFn: () => Promise<T>,
  maxRetries = 5,
  duration = 1e3
) {
  let retryCount = 0;

  const retryAsyncFn = async (resolve, reject) => {
    try {
      retryCount++;
      await delay(duration);
      resolve(await asyncFn());
    } catch (err) {
      if (retryCount >= maxRetries) {
        reject(err);
      } else {
        retryAsyncFn(resolve, reject);
      }
    }
  };

  return new Promise<T>((resolve, reject) => {
    asyncFn()
      .then(resolve)
      .catch(() => retryAsyncFn(resolve, reject));
  });
}

export default retryAsyncOperation;
