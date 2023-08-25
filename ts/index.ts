let code:string|null;
let openid:string|null;
let token:string|null=null;
let weixintoken:{ticket:string,timetamp:number};

window.onload=()=>{
    code=localStorage.getItem('code');
    openid=localStorage.getItem('openid');
    token=localStorage.getItem('token');   
    let http=new XMLHttpRequest();
    http.open("GET","https://zhibiao.uicp.fun/weixin",false);
    http.send();
    weixintoken= JSON.parse(http.responseText);
    let sha1=new jsSHA("SHA-1","TEXT",{ encoding: "UTF8" });
    let jsticket=weixintoken.ticket;
    let timestamp=weixintoken.timetamp;
}