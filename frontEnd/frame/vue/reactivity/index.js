import { reactive, readonly } from 'vue'

// 创建默认的全局单例响应式数据，仅供该模块内部使用
const state = reactive({
    // ...
});

// 对外暴露的数据是只读的，不能直接修改
// 也可以进一步使用toRefs进行封装，从而避免解构或展开后响应式丢失
export const userLoginState = readonly(state);
