import md5 from 'js-md5'
const request = require('request-promise')

function getToken() {
    const device_ID = "8513efac-09ea-3709-b214-95b366f1a185"
    // 获取秒级时间戳
    const time = Date.parse(new Date()) / 1000
    const tmp1 = '0x' + time.toString(16)
    const tmp2 = md5(time.toString())
    const tmp3 = 'token://com.coolapk.market/c67ef5943784d09750dcfbb31020f0ab?' + tmp2 + '$' + device_ID + '&com.coolapk.market'
    const tmp4 = md5(btoa(tmp3))
    const token = tmp4 + device_ID + tmp1
    return token
}

function getJson(pageUrl) {
    const options = {
        headers: {
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; MI 8 SE MIUI/9.5.9) (#Build; Xiaomi; MI 8 SE; PKQ1.181121.001; 9) +CoolMarket/9.2.2-1905301",
            "X-App-Id": "com.coolapk.market",
            "X-Requested-With": "XMLHttpRequest",
            "X-Sdk-Int": "28",
            "X-Sdk-Locale": "zh-CN",
            "X-Api-Version": "9",
            "X-App-Version": "9.2.2",
            "X-App-Code": "1903501",
            "X-App-Device": "QRTBCOgkUTgsTat9WYphFI7kWbvFWaYByO1YjOCdjOxAjOxEkOFJjODlDI7ATNxMjM5MTOxcjMwAjN0AyOxEjNwgDNxITM2kDMzcTOgsTZzkTZlJ2MwUDNhJ2MyYzM",
            "Host": "api.coolapk.com",
            "X-Dark-Mode": "0",
            "X-App-Token": getToken(),
        },
        uri: pageUrl,
        json: true
    }
    return request(options)
}

// 你的接口 / Your interface
export default {
    get(url) {
        return getJson(url)
    }
}
