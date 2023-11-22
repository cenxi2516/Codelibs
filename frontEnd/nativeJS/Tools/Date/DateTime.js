class DateTime extends Date {
    // 获取四位数年份数
    get year() {
        return this.getFullYear();
    }

    // 获取[0,11]月份数
    get month() {
        return this.getMonth();
    }

    // 获取[1,31]天数
    get day() {
        return this.getDate();
    }

    // 获取[0,6]星期数
    get weekday() {
        return this.getDay();
    }

    // 获取[0,23]小时数
    get hours() {
        return this.getHours();
    }

    // 获取[0,59]分钟数
    get minutes() {
        return this.getMinutes();
    }

    // 获取[0,59]秒数
    get seconds() {
        return this.getSeconds();
    }
    // 获取[0,999]毫秒数
    get milliseconds() {
        return this.getMilliseconds();
    }

    /**
     * 获取时区
     * @return {String}    东半球为：+num，西半球为：-num
     */
    getTimezone() {
        const timezone = -this.getTimezoneOffset() / 60;
        const timezoneStr = String(timezone);

        return timezone < 0 ? timezoneStr : `+${timezoneStr}`;
    }

    /**
     * 两个日期时间的时间差
     * @param  {DateTime | Date} dateTime DateTime或Date实例对象
     * @return {Object}          时间差结果
     * {
     * 	  diffResult, // 比较结果，0表示相等，-1表示this大于dateTime，1表示this小于dateTime
     * 	  day, // 相差的天数
     * 	  hours, // 相差的小时数
     * 	  minutes, // 相差的分钟数
     * 	  seconds, // 相差的秒数
     * 	  milliseconds // 相差的毫秒数
     * }
     */
    timeDiff(dateTime) {
        // 相差的总毫秒数
        let msDiff = this - dateTime;
        // 0表示相等，-1表示this大于dateTime，1表示this小于dateTime
        const diffResult = msDiff === 0 ? 0 : (msDiff < 0 ? 1 : -1);
        const secondsMs = 1000, // 1秒
            minutesMs = 60 * secondsMs, // 1分钟
            hoursMs = 60 * minutesMs, // 1小时
            dayMs = 24 * hoursMs; // 1天

        // 相差的天数
        msDiff = Math.abs(msDiff);
        const day = Math.floor(msDiff / dayMs);
        // 相差的小时数
        msDiff %= dayMs;
        const hours = Math.floor(msDiff / hoursMs);
        // 相差的分钟数
        msDiff %= hoursMs;
        const minutes = Math.floor(msDiff / minutesMs);
        // 相差的秒数
        msDiff %= minutesMs;
        const seconds = Math.floor(msDiff / secondsMs);
        // 相差的毫秒数
        msDiff %= secondsMs;
        const milliseconds = msDiff;

        return {
            diffResult,
            day,
            hours,
            minutes,
            seconds,
            milliseconds
        };
    }

    /**
     * 使用指定格式，格式化日期时间：
     * - YYYY：年	例：2023
     * - MM：月		例：08
     * - M： 月 		例：8
     * - DD：日		例：04
     * - D： 日 		例：4
     * - HH：(24)时	例：09
     * - H： (24)时  例：9
     * - mm：分		例：03
     * - m： 分      例：3
     * - ss：秒 		例：07
     * - s： 秒      例：7
     * - SSS：毫秒   例：003
     * @param  {String} formatStr 指定格式的字符串
     * @return {String}           格式化后的日期时间
     */
    format(formatStr = 'YYYY-MM-DD HH:mm:ss') {
        const {
            year: YYYY,
            month: MM,
            day: DD,
            hours: HH,
            minutes: mm,
            seconds: ss,
            milliseconds: SSS
        } = this;

        const dateTime = {
            YYYY,
            MM: MM + 1,
            M: +MM + 1,
            DD,
            D: +DD,
            HH,
            H: +HH,
            mm,
            m: +mm,
            ss,
            s: +ss,
            SSS
        };

        return formatStr.replace(/YYYY|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,
            ($) => String(dateTime[$]).padStart($.length, 0)
        );
    }
}

Object.defineProperty(DateTime.prototype, Symbol.toStringTag, {
    value: 'DateTime'
});

export default DateTime;
