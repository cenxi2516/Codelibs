const memorized = (fn) => {
    const resultMap = new Map();

    return (...argList) => {
        const key = JSON.stringify(argList);

        if (resultMap.has(key)) return resultMap.get(key);

        const value = fn(...argList);
        resultMap.set(key, value);

        return value;
    };
};

export default memorized;
