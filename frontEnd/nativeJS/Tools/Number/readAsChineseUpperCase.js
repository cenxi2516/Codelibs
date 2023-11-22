/**
 * 将整数值读作中文大写格式，仅支持32位整数值
 * @param  {BigInt | String | Number} numStr BigInt型整数值、字符串型整数值、数值型整数值
 * @return {String}        中文大写格式
 */
const readAsChineseUpperCase = (numStr) => {
    const NumZero = '0';
    const ChineseZero = '零';
    const ChineseUpperCaseNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const DigitUnits = ['拾', '佰', '仟', '万', '亿', '兆'];

    // 获取位数单位
    const CalcDigitUnit = (nLen) => {
        // 十、百、千 2-4位
        if (nLen <= 4) return DigitUnits[nLen - 2];
        // 万、十万、百万、千万 5-8位. 最后加 万
        if (nLen <= 8) return DigitUnits[3];
        // 亿、十亿、百亿、千亿、万亿、十万亿、百万亿、千万亿 9-16位 最后加 亿
        if (nLen <= 16) return DigitUnits[4];
        // 兆、十兆、百兆、千兆、万兆、十万兆、百万兆、千万兆、亿兆、十亿兆、百亿兆 千亿兆、万亿兆、十万亿兆、百万亿兆、千万亿兆 17-32位 最后加兆
        if (nLen <= 32) return DigitUnits[5];
    };

    // 指定范围的位数
    const RangeDigit = (BigNumStr, start, end) => {
        const BigNumLen = BigNumStr.length;
        const FrontFourDigitNum = BigNumStr.slice(-end, -(start - 1)); // 最前四位数
        const LastFourDigitNum = BigNumStr.slice(-(start - 1)); // 最后四位数
        const IsAllZero = +LastFourDigitNum === +NumZero;
        const IsFirstZero = LastFourDigitNum[0] === NumZero;
        // 最后四位数：为0000，则为空字符串。为0xxxx，则加零。
        const PadZero = !IsAllZero && IsFirstZero ? ChineseZero : '';

        return `${InnerConvert(FrontFourDigitNum, FrontFourDigitNum.length === 2)+ CalcDigitUnit(BigNumLen) + PadZero + (IsAllZero?'':InnerConvert(LastFourDigitNum))}`;
    };

    const InnerConvert = (numStr, isTwoDigit = false) => {
        const BigNumStr = String(BigInt(numStr));
        const BigNumLen = BigNumStr.length;

        // 1位数
        if (BigNumLen === 1) return ChineseUpperCaseNums[BigNumStr[0]];

        // 2位数
        if (BigNumLen === 2) {
            const FirstNum = BigNumStr[0];
            const SecondNum = BigNumStr[1];
            const FirstNumChineseCase = ChineseUpperCaseNums[FirstNum];
            const SecondNumChineseCase = ChineseUpperCaseNums[SecondNum];
            const FirstNumDigitUnit = CalcDigitUnit(BigNumLen);

            // 处理：10-19，例如：10 读作 十，11 读作 十一
            // 处理：末尾为0，则为空字符串
            return `${ (isTwoDigit && FirstNum === '1'?'':FirstNumChineseCase) + FirstNumDigitUnit + (SecondNumChineseCase === ChineseZero?'':SecondNumChineseCase)}`;
        }

        // 3-4位数
        if ([3, 4].includes(BigNumLen)) {
            const FirstNumChineseCase = ChineseUpperCaseNums[BigNumStr[0]];
            const FirstNumDigit = CalcDigitUnit(BigNumLen);
            const RestNumStr = BigNumStr.slice(1);

            // 第二位为0，全部为0，则为空字符串，否则加零
            if (BigNumStr[1] === NumZero) {
                return `${FirstNumChineseCase+FirstNumDigit + (+RestNumStr === +NumZero?'':ChineseZero+InnerConvert(RestNumStr))}`;
            }

            return `${FirstNumChineseCase+FirstNumDigit + InnerConvert(RestNumStr)}`;
        }

        // 5-8位数
        if (BigNumLen >= 5 && BigNumLen <= 8) return RangeDigit(BigNumStr, 5, 8);

        // 9-16位数
        if (BigNumLen >= 9 && BigNumLen <= 16) return RangeDigit(BigNumStr, 9, 16);

        // 17-32位数
        if (BigNumLen >= 17 && BigNumLen <= 32) return RangeDigit(BigNumStr, 17, 32);
    }

    return InnerConvert(numStr, String(BigInt(numStr)).length === 2);
};