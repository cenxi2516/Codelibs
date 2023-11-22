const {
    cookieEnabled,
    onLine,
    pdfViewerEnabled = false,
    language,
    maxTouchPoints: touchPointCount,
    hardwareConcurrency = 0,
    userAgent
} = window.navigator;

const isMatch = (sign) => new RegExp(sign, 'i').test(userAgent);

class UA {
    constructor() {
        Object.assign(this, {
            cookieEnabled, // 浏览器cookie是否能使用
            onLine, // 浏览器是否在线
            pdfViewerEnabled, // 浏览器能否在线预览pdf
            language, // 浏览器界面语言
            touchPointCount, // 当前设备同时能触摸的点数
            hardwareConcurrency, // 能同时运行多少线程
        });
    }

    isFirefox() {
        const FirefoxSign = ['rv', 'Gecko', 'Firefox'];

        return FirefoxSign.every(sign => isMatch(sign));
    }

    isOpera() {
        const OperaSign = 'Opera|OPR';

        return isMatch(OperaSign);
    }

    isEdge() {
        const EdgeSign = 'Edge|Edg|EdgA|EdgiOS';

        return isMatch(EdgeSign);
    }

    isChrome() {
        if (this.isOpera()) return false;
        if (this.isEdge()) return false;
        const ChromeSign = 'Chrome';

        return isMatch(ChromeSign);
    }

    isSafari() {
        if (this.isEdge()) return false;
        if (this.isOpera()) return false;
        if (this.isChrome()) return false;
        const SafariSign = 'Safari';

        return isMatch(SafariSign);
    }

    isIE11() {
        const IE11Sign = ['Trident', 'rv:11.0'];

        return IE11Sign.every(sign => isMatch(sign));
    }

    isIE8To10() {
        const IE8To10Sign = ['compatible', 'MSIE', 'Trident'];

        return IE8To10Sign.every(sign => isMatch(sign));
    }

    isIE10() {
        if (!this.isIE8To10()) return false;
        const IE10Sign = 'Trident/6.0';

        return isMatch(IE10Sign);
    }

    isIE9() {
        if (!this.isIE8To10()) return false;
        const IE9Sign = 'Trident/5.0';

        return isMatch(IE9Sign);
    }

    isIE8() {
        if (!this.isIE8To10()) return false;
        const IE8Sign = 'Trident/4.0';

        return isMatch(IE8Sign);
    }

    isIE6To7() {
        if (this.isIE8To10()) return false;
        // IE6-7，甚至IE6以下
        const IE6To7Sign = ['compatible', 'MSIE'];

        return IE6To7Sign.every(sign => isMatch(sign));
    }

    isIE() {
        return this.isIE11() || this.isIE8To10() || this.isIE6To7();
    }

    isWechat() {
        const WechatSign = 'MicroMessenger';

        return isMatch(WechatSign);
    }

    isMobile() {
        if (this.isIpad() || this.isIpod()) return false;

        const MobileSign = 'Mobile|Mobi';

        return isMatch(MobileSign);
    }

    isPC() {
        if (this.isMobile() || this.isIpad() || this.isIpod()) return false;
        const PCSign = 'SymbianOS|Windows Phone';

        return !isMatch(PCSign);
    }

    isTablet() {
        const TabletSign = 'ipad|Tablet|PlayBook';

        return isMatch(TabletSign);
    }

    isWindows() {
        const WindowsSign = 'Windows';

        return isMatch(WindowsSign);
    }

    isIPhone() {
        if (this.isIpod() || this.isIpad()) return false;
        const IPhoneSign = 'iPhone';

        return isMatch(IPhoneSign);
    }

    isIpod() {
        const IpodSign = 'iPod';

        return isMatch(IpodSign);
    }

    isIpad() {
        const IpadSign = 'iPad';

        return isMatch(IpadSign);
    }

    isMacOS() {
        if (this.isMobile() || this.isIpad() || this.isIpod()) return false;
        const MacOSSign = 'Macintosh|Mac OS X';

        return isMatch(MacOSSign);
    }

    isAndroid() {
        if (!this.isLinux()) return false;
        const AndroidSign = 'Android';

        return isMatch(AndroidSign);
    }

    isIOS() {
        return this.isIPhone() || this.isIpad() || this.isIpod();
    }

    isLinux() {
        return isMatch('Linux');
    }

}


const ua = Object.freeze(new UA());

export default ua;

/*
console.log(ua);
console.log('edge', ua.isEdge());
console.log('ie', ua.isIE());
console.log('ie11', ua.isIE11());
console.log('ie6-7', ua.isIE6To7());
console.log('ie8-10', ua.isIE8To10());
console.log('ie8', ua.isIE8());
console.log('ie9', ua.isIE9());
console.log('ie10', ua.isIE10());
console.log('chrome', ua.isChrome());
console.log('safari', ua.isSafari());
console.log('opera', ua.isOpera());
console.log('firefox', ua.isFirefox());
console.log('pc', ua.isPC());
console.log('macos', ua.isMacOS());
console.log('windows', ua.isWindows());
console.log('ipad', ua.isIpad());
console.log('ipod', ua.isIpod());
console.log('iphone', ua.isIPhone());
console.log('linux', ua.isLinux());
console.log('android', ua.isAndroid());
console.log('tablet', ua.isTablet());
console.log('mobile', ua.isMobile());
console.log('wechat', ua.isWechat());
console.log('iOS', ua.isIOS());
*/
