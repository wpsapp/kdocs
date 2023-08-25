let code:string|null;
let openid:string|null;
let token:string|null;
window.onload=()=>{
    code=localStorage.getItem('code');
    openid=localStorage.getItem('openid');
    token=localStorage.getItem('token');   
}