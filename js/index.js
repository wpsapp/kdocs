"use strict";
let code;
let openid;
let token = null;
let weixintoken;
let iWps;
window.onload = () => {
    code = localStorage.getItem('code');
    openid = localStorage.getItem('openid');
    token = localStorage.getItem('token');
    iWps = WebOfficeSDK.config({
        url: "https://www.kdocs.cn/wo/sl/v32eDTAf?_w_tokentype=1",
    });
    if (token)
        iWps.setToken({ token: token, timeout: 24 * 60 * 60 * 1000, hasRefreshTokenConfig: false });
};
function weixin() {
    let http = new XMLHttpRequest();
    http.open("GET", "https://zhibiao.uicp.fun/weixin", false);
    http.send();
    weixintoken = JSON.parse(http.responseText);
    let sha1 = new jsSHA("SHA-1", "TEXT", { encoding: "UTF8" });
    let jsticket = weixintoken.ticket;
    let timestamp = weixintoken.timetamp;
    wx.config({
        debug: false,
        appId: 'wx8301d806150dba74',
        timestamp: timestamp,
        nonceStr: 'fxzqf',
        signature: sha1.update("jsapi_ticket=" + jsticket + "&" + "noncestr=fxzqf&" + "timestamp=" + timestamp + "&" + "url=" + window.location.href).getHash("HEX"),
        jsApiList: [
            'scanQRCode'
        ]
    });
    wx.ready(function () {
        wx.error(function (res) {
            alert(res.errMsg);
        });
    });
    let qrBt = document.querySelector('#scanQRCode1');
    // 9.1.2 扫描二维码并返回结果
    qrBt.onclick = function () {
        wx.scanQRCode({
            needResult: 1,
            desc: 'scanQRCode desc',
            success: function (res) {
                //APP1.Sheets(2).then((e:any)=>{
                //    e.Record.CreateRecords({Records:[{fields:{"编码":res.resultStr,"名称":"新添加商品"}}]});
                //})
            }
        });
    };
    qrBt.innerText = "扫码添加";
}
