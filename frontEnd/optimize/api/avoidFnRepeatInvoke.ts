function avoidFnRepeatInvoke <T> (fn: () => T) {
    let result: T | null = null;

    return new Proxy(fn, {
        async apply(target, thisRef, argList) {
            if (result) return await result;

            const data = (result = Reflect.apply(target, thisRef, argList));

            return await data;
        },
    });
}

export default avoidFnRepeatInvoke;
