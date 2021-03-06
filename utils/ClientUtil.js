module.exports.getClient = function(userAgent,appName) {
    let device = 'unknown';
    let os = 'unknown';
    // 移动端
    if (userAgent.indexOf("Android") !== -1) {
        os = "Android";
        device = 'mobile';
    } else if (userAgent.indexOf("iPhone") !== -1) {
        os = "iPhone";
        device = 'mobile';
    } else if (userAgent.indexOf("SymbianOS") !== -1) {
        os = "SymbianOS";
        device = 'mobile';
    } else if (userAgent.indexOf("Windows Phone") !== -1) {
        os = "Windows Pho|ne";
        device = 'mobile';
    } else if (userAgent.indexOf("iPad") !== -1) {
        os = "iPad";
        device = 'mobile';
    } else if (userAgent.indexOf("iPod") !== -1) {
        os = "iPod";
        device = 'mobile';
    }
    // PC 端
    else if (userAgent.indexOf("Windows NT 10.0") !== -1) {
        os = "Windows 10";
        device = 'pc';
    } else if (userAgent.indexOf("Windows NT 6.2") !== -1) {
        os = "Windows 8";
        device = 'pc';
    } else if (userAgent.indexOf("Windows NT 6.1") !== -1) {
        os = "Windows 7";
        device = 'pc';
    } else if (userAgent.indexOf("Windows NT 6.0") !== -1) {
        os = "Windows Vista";
        device = 'pc';
    } else if (userAgent.indexOf("Windows NT 5.1") !== -1) {
        os = "Windows XP";
        device = 'pc';
    } else if (userAgent.indexOf("Windows NT 5.0") !== -1) {
        os = "Windows 2000";
        device = 'pc';
    } else if (userAgent.indexOf("Mac") !== -1) {
        os = "Mac/iOS";
        device = 'pc';
    } else if (userAgent.indexOf("X11") !== -1) {
        os = "UNIX";
        device = 'pc';
    } else if (userAgent.indexOf("Linux") !== -1) {
        os = "Linux";
        device = 'pc';
    }
    /* 浏览器 */
    let nameOffset, verOffset;
    if ((verOffset = userAgent.indexOf("Opera")) !== -1) { // In Opera, the true version is after "Opera" or after "Version"
        appName = "Opera";
    } else if ((userAgent.indexOf("Trident")) !== -1) {   // ( ver >= ie7) In MSIE, the true version is after "MSIE" in userAgent
        appName = "IE";
    } else if ((verOffset = userAgent.indexOf("Chrome")) !== -1) {  // In Chrome, the true version is after "Chrome"
        appName = "Chrome";
    } else if ((verOffset = userAgent.indexOf("Safari")) !== -1) {   // In Safari, the true version is after "Safari" or after "Version"
        appName = "Safari";
    } else if ((verOffset = userAgent.indexOf("Firefox")) !== -1) {    // In Firefox, the true version is after "Firefox"
        appName = "Firefox";
    } else if ((nameOffset = userAgent.lastIndexOf(' ') + 1) < (verOffset = userAgent.lastIndexOf('/'))) {   // In most other browsers, "name/version" is at the end of userAgent
        appName = userAgent.substring(nameOffset, verOffset);
    }
    return {
        device: device,
        os: os,
        browserName: appName
    }
}


