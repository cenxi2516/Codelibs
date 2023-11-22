/**
 * 数组乱序，不改变原数组，返回乱序后的新数组
 * @param  {Array} arr 要乱序的数组
 * @return {Array}     乱序后的新数组
 */
const shuffleArray = arr => [...arr].sort(() => Math.random() - 0.5);

export default shuffleArray;
