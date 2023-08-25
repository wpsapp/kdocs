let code:string|null;
let openid:string|null;
let token:string|null;
window.onload=()=>{
    code=localStorage.getItem('code');
    openid=localStorage.getItem('openid');
    token=localStorage.getItem('token');   
    let http=new XMLHttpRequest();
    http.open("GET","https://zhibiao.uicp.fun/weixin",false);
    http.send();
    console.log(http.responseText);
}