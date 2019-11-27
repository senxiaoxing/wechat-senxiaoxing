const Qrterminal = require('qrcode-terminal')
/**
 * 扫描登录，显示二维码
 */
async function onScan (qrcode, status){
  Qrterminal.generate(qrcode, {small: true})
    const qrImgUrl = ['https://api.qrserver.com/v1/create-qr-code/?data=', encodeURIComponent(qrcode),'&size=100x100&margin=10'].join('')
    console.log(qrImgUrl)
}

module.exports = onScan