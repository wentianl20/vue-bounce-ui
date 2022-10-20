/**
 * Create by pirlo
 * Date: 2022/10/20 3:54 PM
 * Update: 2022/10/20 3:54 PM
 */

export function getDeviceType() {
    const u = navigator.userAgent
    if (/iphone/i.test(u)) {
        return 'iphone'
    }
    if (/ipad/i.test(u)) {
        return 'ipad'
    }
    if (/Android|Adr/i.test(u)) {
        if (window.matchMedia('("min-width:750px)"').matches) {
            return 'androidpad'
        } else {
            return 'android'
        }
    }
    return 'other'
}
