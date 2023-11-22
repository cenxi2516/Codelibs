// 定时器类型
const TimerType = {
    requestAnimationFrame: 'requestAnimationFrame',
    setTimeout: 'setTimeout',
    setInterval: 'setInterval',
};

// 注销对应定时器类型
const TimerLogoutType = {
    requestAnimationFrame: 'cancelAnimationFrame',
    setTimeout: 'clearTimeout',
    setInterval: 'clearInterval'
};

/**
 * 清除定时器
 * @param  {Timer} timer  		Timer实例对象
 * @param  {TimerType} type   	定时器类型
 * @param  {Number} signId 		定时器标识
 * @return {Boolean}        	是否成功注销定时器
 */
const clearTimer = (timer, type, signId) => {
    const identityIndex = timer.findIdentityIndex(type, signId);
    if (identityIndex <= -1) return false;

    window[TimerLogoutType[type]](signId);

    // 删除identities中对应索引的identity
    timer.identities.splice(identityIndex, 1);

    return true;
};

/**
 * 启用定时器
 * @param  {Timer}   timer        	Timer实例
 * @param  {TimerType}   type     	定时器类型
 * @param  {Function} callback    	回调函数
 * @param  {Number}   hz          	回调函数执行频率，毫秒
 * @param  {Boolean}  isOnceTimer 	是否是一次性定时器
 * @return {Object}               	{ signId }
 */
const setTimer = (timer, type, callback, hz, isOnceTimer = true) => {
    // 一次性定时器，在回调函数执行完后，需要从identities中删除identity，避免意外
    const onceCallback = isOnceTimer ? (async () => {
        // 异步执行回调函数
        await callback();
        // 从identities中删除identity
        await timer[TimerLogoutType[type]](identity.signId);
    }) : callback;

    const signId = type === TimerType.requestAnimationFrame ?
        window[type](onceCallback) : window[type](onceCallback, hz);

    const identity = {
        type,
        signId,
        callback: onceCallback,
        hz
    };

    timer.identities.push(identity);

    return {
        get signId() {
            return identity.signId;
        }
    };
};

/**
 * 1、解决页面可见性变更时，统一处理定时器注销和注册。
 * 2、管理页面中所有定时器的标识、回调函数、执行频率。
 * 		- 在定时器注册时，新增定时器身份信息。
 * 		- 在定时器注销时，删除定时器身份信息。
 *
 */
class Timer {
    constructor() {
        /**
         	一个定时器信息：
         	{
        		type: 'requestAnimationFrame', // 定时器类型
        		signId: 1, // 定时器标识（非零数值）
        		callback: null, // 定时器回调函数
        		hz: 1000 / 60 // 定时器执行频率，单位：毫秒(ms)
        	};
         */
        this.identities = [];

        window.addEventListener('visibilitychange', () => {
            const {
                visibilityState
            } = document;
            const {
                length
            } = this.identities;

            // 若是没有任何可取消或恢复的，立刻结束暂停和更新
            if (!length) return;

            if (visibilityState === 'hidden') {
                // 在页面不可见时，暂停所有定时器执行回调函数
                this.pauseAllTimer();
            } else {
                // 在页面可见时，恢复所有定时器执行回调函数，并更新定时器身份信息
                this.updateAllTimer();
            }
        });
    }

    // 查找type类型signId标识的定时器身份位置（不存在，返回-1）
    findIdentityIndex(type, signId) {
        return this.identities.findIndex((value) => value.signId === signId && value.type === type);
    }

    // 重复性定时器
    setInterval(callback, hz) {
        return setTimer(this, TimerType.setInterval, callback, hz, false);
    }

    // 注销定时器，false表示定时器不存在，true表示注销成功
    clearInterval(signId) {
        return clearTimer(this, TimerType.setInterval, signId);
    }

    // 一次性定时器
    setTimeout(callback, hz) {
        return setTimer(this, TimerType.setTimeout, callback, hz);
    }

    // 注销定时器，false表示定时器不存在，true表示注销成功
    clearTimeout(signId) {
        return clearTimer(this, TimerType.setTimeout, signId);
    }

    // 请求动画帧定时器（一次性定时器）
    requestAnimationFrame(callback) {
        return setTimer(this, TimerType.requestAnimationFrame, callback, 1000 / 60);
    }

    // 注销定时器，false表示定时器不存在，true表示注销成功
    cancelAnimationFrame(signId) {
        return clearTimer(this, TimerType.requestAnimationFrame, signId);
    }

    // 暂停所有定时器，定时器所有标识全部失效，依旧保留(作为恢复使用)
    pauseAllTimer() {
        this.identities.forEach(({
            type,
            signId
        }) => {
            window[TimerLogoutType[type]](signId);
        });
    }

    // 重新注册定时器，并更新所有定时器identity
    updateAllTimer() {
        this.identities.forEach((identity, index) => {
            const {
                type,
                callback,
                hz
            } = identity;

            // 重新注册定时器
            const signId = type === TimerType.requestAnimationFrame ?
                window[TimerType[type]](callback) : window[TimerType[type]](callback, hz);

            // 更新定时器identity
            Object.assign(identity, {
                signId
            });
        });
    }
}

const timer = new Timer();

export default timer;
