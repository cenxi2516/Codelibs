const Listeners = Object.create(null);

const eventBus = {
    /**
     * 往事件总线里添加eventName的handler
     * @param  {String|Symbol}      eventName 事件名
     * @param  {Function}           handler   事件处理程序
     * @return {undefined}
     */
    $on(eventName, handler) {
        let eventListener = Listeners[eventName];

        if (!eventListener) {
            eventListener = Listeners[eventName] = new Set();
        }

        eventListener.add(handler);
    },

    /**
     * 从事件总线里移除eventName中的handler
     * @param  {String|Symbol}    eventName 事件名
     * @param  {Function}         handler   事件处理程序
     * @return {undefined}
     */
    $off(eventName, handler) {
        let eventListener = Listeners[eventName];
        if (!eventListener) return;

        eventListener.delete(handler);
    },

    /**
     * 往事件总线里添加eventName的handler，处理一次后自动解绑
     * @param  {String | Symbol}      eventName 事件名
     * @param  {Function}             handler   事件处理程序
     * @return {undefined}
     */
    $once(eventName, handler) {
    	// 若是事件总线eventName中，已经存在handler，则先移除handler。
    	const that = this;
    	that.$off(eventName, handler);
    	const newOnceHandler = new Proxy(handler, {
    		apply(target, thisRef, argsList){
    			that.$off(eventName, newOnceHandler)
    			Reflect.apply(target, thisRef, argsList);
    		}
    	});
    	// 再加入，触发后解绑
    	that.$on(eventName, newOnceHandler);
    },

    /**
     * 通知事件总线，触发eventName事件，并执行其中的handler
     * @param  {String | Symbol}    	eventName 	事件名
     * @param  {Array} 					args      	接受剩余参数的数组
     * @return {undefined}
     */
    $emit(eventName, ...args) {
        const eventListener = Listeners[eventName];
        if (!eventListener) return;

        for (const handler of eventListener) {
            handler(...args);
        }
    }
};

export default eventBus;
