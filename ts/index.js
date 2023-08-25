"use strict";
let code;
let openid;
let token;
window.onload = () => {
    code = localStorage.getItem('code');
    openid = localStorage.getItem('openid');
    token = localStorage.getItem('token');
};
