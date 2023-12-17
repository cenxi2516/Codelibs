import {
    inject,
    reactive,
    readonly
} from 'vue'

const KEY = Symbol.for('userLogin');

export const provideStore = (app) => {
    const state = reactive({
        // ...
    });

    const provideData = {
        state: readonly(state),
        // ...
    };

    app?.provide(KEY, provideData);

    return provideData;
};

export function useStore(defaultValue = null) {
    return inject(KEY, defaultValue) ? ? provideStore();
}
