import isCompatSignal from 'isCompatSignal.js';

const addEventListener = (dom, type, callback, options = {}) => {
    if (isCompatSignal()) {
        const abortController = new AbortController();
        const signal = abortController.signal;

        dom.addEventListener(type, callback, {
            signal,
            ...options
        });

        return () => abortController.abort();
    }

    dom.addEventListener(type, callback, options);

    return () => dom.removeEventListener(type, callback, options);
};


export default addEventListener;
