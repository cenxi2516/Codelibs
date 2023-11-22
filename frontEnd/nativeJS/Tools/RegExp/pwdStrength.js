// 密码字典
const pwdDictionary = {
    lowercase: '[a-z]', // 小写字母
    uppercase: '[A-Z]', // 大写字母
    number: '[0-9]', // 数字
    specialSign: '[`~!@#\\$%\\^&\\*\\(\\)\\-_=\\+{\\[}\\]\\\\;:\'"\\<\\,\\.>\\?\\/\\|]' // 特殊字符
};

/**
 * 检测密码强度
 * >= 90: 非常安全
 * >= 80: 安全（Secure）
 * >= 70: 非常强
 * >= 60: 强（Strong）
 * >= 50: 一般（Average）
 * >= 25: 弱（Weak）
 * >=  0：非常弱
 * 0: 密码不符合要求
 * @param  {String} str 密码
 * @param  {Number} min 最小密码长度
 * @param  {Number} max 最大密码长度
 * @return {Number}     [0,95]
 */
const checkPwdStrength = (str, min, max) => {
    /**
     * 密码长度
     * - 0  分: 小于 min 个字符 或 大于 max 个字符 (不符合)
     * - 15 分: min 到 mid 个字符
     * - 25 分: mid 到 max 个字符
     */
    if (new RegExp(`^.{${0},${min - 1}}$`).test(str)) return 0;
    if (new RegExp(`^.{${max + 1},}$`).test(str)) return 0;

    const mid = max - Math.floor((max - min) / 2);
    let strength = 0;

    if (new RegExp(`^.{${min},${mid}}$`).test(str)) {
        strength += 15;
    } else if (new RegExp(`^.{${mid},${max}}$`).test(str)) {
        strength += 25;
    }

    /**
     * 字母
     * - 0  分: 没有字母
     * - 10 分: 全都是小（大）写字母
     * - 20 分: 大小写混合字母
     */
    const isExistLowerCase = new RegExp(`(?=.*${pwdDictionary.lowercase})`).test(str);
    const isExistUpperCase = new RegExp(`(?=.*${pwdDictionary.uppercase})`).test(str);

    if (isExistLowerCase && isExistUpperCase) {
        strength += 20;
    } else if (isExistLowerCase && !isExistUpperCase) {
        strength += 10;
    } else if (!isExistLowerCase && isExistUpperCase) {
        strength += 10;
    }

    /**
     * 数字
     * - 0  分: 没有数字
     * - 10 分: 1个数字
     * - 20 分: 大于1个数字
     */
    const numCount = (str.match(new RegExp(`${pwdDictionary.number}`, 'g')) || []).length;

    if (numCount === 1) {
        strength += 10;
    } else if (numCount > 1) {
        strength += 20;
    }

    /**
     * 特殊符号
     * - 0  分: 没有符号
     * - 10 分: 1个符号
     * - 25 分: 大于1个符号
     */
    const specialSignCount = (str.match(new RegExp(`${pwdDictionary.specialSign}`, 'g')) || []).length;

    if (specialSignCount === 1) {
        strength += 10;
    } else if (specialSignCount > 1) {
        strength += 25;
    }

    /**
     * 奖励
     * - 2  分: 字母和数字
     * - 3  分: 字母、数字和符号
     * - 5  分: 大小写字母、数字和符号
     */
    const isExistNumber = !!numCount;
    const isExistSpecialSign = !!specialSignCount;

    if(isExistLowerCase && isExistUpperCase && isExistNumber && isExistSpecialSign){
    	strength += 5;
    } else if((isExistLowerCase || isExistUpperCase) && isExistNumber && isExistSpecialSign){
    	strength += 3;
    } else if((isExistLowerCase || isExistUpperCase) && isExistNumber){
    	strength += 2;
    }

    return strength;
};


export default checkPwdStrength;
