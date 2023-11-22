export class ChildCustomEvent extends CustomEvent {
    constructor({
        dom,
        type,
        detail = null,
        ...props
    } = {}) {
        super(type, {
            ...props,
            detail
        });
        this.dom = dom;
    }

    // 注册自定义事件
    add(callback) {
        this.dom.addEventListener(this.type, callback);
    }

    // 移除自定义事件
    remove(callback) {
        this.dom.removeEventListener(this.type, callback);
    }

    // 向dom分发事件，不同于浏览器原生事件是经过事件循环异步执行的，自定义事件是同步执行的
    dispatch() {
        return this.dom.dispatchEvent(this);
    }
}

const createCustomEvent = (props) => new ChildCustomEvent(props);

export default createCustomEvent;
