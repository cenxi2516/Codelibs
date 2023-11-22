/**
 * 任务开始加锁，直到任务结束解锁
 * @param {function} fn 任务
 * @param {function} taskBefore 任务开始前行为
 * @param {function} taskAfter 任务结束后行为
 * @returns {Proxy} 加锁后的代理
 */
const taskLock = (fn, taskBefore, taskAfter) => {
    let locked = false;

    return new Proxy(fn, {
        async apply(target, thisRef, argsList) {
            try {
                if (locked) return;
                locked = true;
                taskBefore ?.(...argsList);

                const result = await Reflect.apply(target, thisRef, argsList);

                locked = false;
                taskAfter ?.(result);

                return result;
            } catch (err) {
                locked = false;
                taskAfter ?.(null);

                return Promise.reject(err);
            }
        }
    });
};

export default taskLock;
