type ResolveFn = (value?: any) => void;
type Task<K> = () => Promise<K>;

// 相同域名，浏览器并发请求是固定的
class LimitConcurrentRequest<T> {
  private blockQueue: Array<ResolveFn> = []; // 阻塞队列
  private currentReqNum: number = 0; // 当前请求数
  constructor(private maxConcurrentNum: number = 2) {
    this.maxConcurrentNum = maxConcurrentNum; // 最大并发数
  }

  async request(task: Task<T>) {
    if (this.currentReqNum >= this.maxConcurrentNum) {
      // 阻塞，加入阻塞队列
      await new Promise((resolve: ResolveFn) => this.blockQueue.push(resolve));
    }

    return this._handleTask(task);
  }

  private async _handleTask(task: Task<T>) {
    try {
      this.currentReqNum++;
      return await task();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      this.currentReqNum--;
      if (this.blockQueue.length) {
        const resolve = this.blockQueue.shift();
        resolve?.();
      }
    }
  }
}

export default LimitConcurrentRequest;