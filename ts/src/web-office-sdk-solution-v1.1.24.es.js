var e=function(){return(e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function n(e,n,t,r){return new(t||(t=Promise))(function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(a,c)}s((r=r.apply(e,n||[])).next())})}function t(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}var r=function(){function e(){}return e.add=function(n){e.HANDLE_LIST.push(n),window.addEventListener("message",n,!1)},e.remove=function(n){var t=e.HANDLE_LIST.indexOf(n);t>=0&&e.HANDLE_LIST.splice(t,1),window.removeEventListener("message",n,!1)},e.empty=function(){for(;e.HANDLE_LIST.length;)window.removeEventListener("message",e.HANDLE_LIST.shift(),!1)},e.parse=function(e){try{return"object"==typeof e?e:e?JSON.parse(e):e}catch(n){return console.log("Message.parse Error:",n),e}},e.HANDLE_LIST=[],e}();function i(e){if(!e)return!1;for(var n=e;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}function o(e){return"[object Function]"==={}.toString.call(e)}var a,c,s,u,l,f={origin:""};function d(e,n){f[e]=n}function p(e){return f[e]}function v(e){return!!function(e,n){return e!==n&&(e.replace(/www\./i,"").toLowerCase()!==n.replace(/www\./i,"").toLowerCase()||(e.match("www.")?void 0:(d("origin",n),!1)))}(p("origin"),e.origin)}!function(e){e.Spreadsheet="s",e.Writer="w",e.Presentation="p",e.Pdf="f",e.Outline="o"}(a||(a={})),function(e){e.unknown="unknown",e.spreadsheet="s",e.writer="w",e.presentation="p",e.pdf="f"}(c||(c={})),function(e){e.wps="w",e.et="s",e.presentation="p",e.pdf="f"}(s||(s={})),function(e){e.nomal="nomal",e.simple="simple"}(u||(u={})),function(e){e[e.requestFullscreen=1]="requestFullscreen",e[e.exitFullscreen=0]="exitFullscreen"}(l||(l={}));var h,b,m,w=(h=0,function(){return h+=1}),g=function(e,n,t,r){void 0===t&&(t=!0),void 0===r&&(r={});var i="string"==typeof n?document.querySelector(n):n;if(!b){var o=function e(n){var t=n.clientHeight;var r=n.clientWidth;0!==t||0!==r||m?0===t&&0===r||!m||(m.disconnect(),m=null):window.ResizeObserver&&(m=new ResizeObserver(function(t){e(n)})).observe(n);b.style.cssText+="height: "+t+"px; width: "+r+"px"}.bind(null,i);(b=document.createElement("iframe")).classList.add("web-office-iframe");var a={id:"office-iframe",src:e,scrolling:"no",frameborder:"0",allowfullscreen:"allowfullscreen",webkitallowfullscreen:"true",mozallowfullscreen:"true",allow:"clipboard-read; clipboard-write"};if(r&&Object.keys(r).length&&r.allow){var c=r.allow instanceof Array?r.allow:r.allow.split(";");c.unshift("clipboard-write"),c.unshift("clipboard-read"),r.allow=c.join(";"),Object.assign(a,r)}for(var s in i?(a.style="width: "+i.clientWidth+"px; height: "+i.clientHeight+"px;",t&&window.addEventListener("resize",o)):((i=document.createElement("div")).classList.add("web-office-default-container"),function(e){var n=document.createElement("style");document.head.appendChild(n);var t=n.sheet;t.insertRule(e,t.cssRules.length)}(".web-office-default-container {position: absolute; padding: 0;  margin: 0; width: 100%; height: 100%; left: 0; top: 0;}"),document.body.appendChild(i),a.style="position: fixed; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;"),a)b.setAttribute(s,a[s]);i.appendChild(b),b.destroy=function(){b.parentNode.removeChild(b),b=null,window.removeEventListener("resize",o),m&&(m.disconnect(),m=null)}}return b};var y=function(e){g().contentWindow&&g().contentWindow.postMessage(JSON.stringify(e),p("origin"))};function k(e,n,t){return new Promise(function(i){var o=w(),a=function(e){if(!v(e)){var n=r.parse(e.data);n.eventName===t&&n.msgId===o&&(i(n.data),r.remove(a))}};r.add(a),y({data:e,msgId:o,eventName:n})})}var O=function(e){return k(e,"wps.jssdk.api","wps.api.reply")},j=function(e){return k(e,"api.basic","api.basic.reply")},I={idMap:{}};function E(e){return n(this,void 0,void 0,function(){var n,i,o,a,c,s,u,l,f,d;return t(this,function(t){switch(t.label){case 0:return v(e)?[2]:(n=r.parse(e.data),i=n.eventName,o=n.callbackId,a=n.data,o&&(c=I.idMap[o])?(s=c.split(":"),u=s[0],l=s[1],"api.callback"===i&&I[u]&&I[u][l]?[4,(d=I[u][l]).callback.apply(d,a.args)]:[3,2]):[3,2]);case 1:f=t.sent(),y({result:f,callbackId:o,eventName:"api.callback.reply"}),t.label=2;case 2:return[2]}})})}var T=function(e){return n(void 0,void 0,void 0,function(){function n(){return Object.keys(I.idMap).find(function(e){return I.idMap[e]===o+":"+i})}var i,o,a,c,s,u,l,f,d;return t(this,function(t){switch(t.label){case 0:return i=e.prop,o=e.parentObjId,[4,_([a=e.value])];case 1:return c=t.sent(),s=c[0],u=c[1],e.value=s[0],l=Object.keys(u)[0],f=I[o],null===a&&f&&f[i]&&((d=n())&&delete I.idMap[d],delete f[i],Object.keys(f).length||delete I[o],Object.keys(I.idMap).length||r.remove(E)),l&&(Object.keys(I.idMap).length||r.add(E),I[o]||(I[o]={}),I[o][i]={callbackId:l,callback:u[l]},(d=n())&&delete I.idMap[d],I.idMap[l]=o+":"+i),[2]}})})},S=function(i,o,a,c){return n(void 0,void 0,void 0,function(){var s,u,l,f,d,p,h,b;return t(this,function(m){switch(m.label){case 0:return s=w(),f=new Promise(function(e,n){u=e,l=n}),d={},o.args?[4,_(o.args)]:[3,2];case 1:p=m.sent(),h=p[0],b=p[1],o.args=h,d=b,m.label=2;case 2:return"api.setter"!==i?[3,4]:[4,T(o)];case 3:m.sent(),m.label=4;case 4:return function(n){var t=n[0],r=n[1];"function"==typeof(t=e({},t)).data&&(t.data=t.data());r(),y(t)}([{eventName:i,data:o,msgId:s},function(){var e=this,o=function(f){return n(e,void 0,void 0,function(){var e,n,p;return t(this,function(t){switch(t.label){case 0:return v(f)?[2]:"api.callback"===(e=r.parse(f.data)).eventName&&e.callbackId&&d[e.callbackId]?[4,d[e.callbackId].apply(d,e.data.args)]:[3,2];case 1:n=t.sent(),y({result:n,eventName:"api.callback.reply",callbackId:e.callbackId}),t.label=2;case 2:return e.eventName===i+".reply"&&e.msgId===s&&(e.error?((p=new Error("")).stack=e.error+"\n"+a,c&&c(),l(p)):u(e.result),r.remove(o)),[2]}})})};return r.add(o),f}]),[2,f]}})})};function _(e){return n(this,void 0,void 0,function(){var n,r,o,a,c,s,u,l,f,d,p;return t(this,function(t){switch(t.label){case 0:n={},r=[],o=e.slice(0),t.label=1;case 1:return o.length?(a=void 0,[4,o.shift()]):[3,13];case 2:return(c=t.sent())&&c.done?[4,c.done()]:[3,4];case 3:t.sent(),t.label=4;case 4:if(!i(a))return[3,11];for(u in a={},s=[],c)s.push(u);l=0,t.label=5;case 5:return l<s.length?(f=s[l],d=c[f],/^[A-Z]/.test(f)?d&&d.done?[4,d.done()]:[3,7]:[3,8]):[3,10];case 6:t.sent(),t.label=7;case 7:d&&d.objId?d={objId:d.objId}:"function"==typeof d&&(p=w(),n[p]=d,d={callbackId:p}),t.label=8;case 8:a[f]=d,t.label=9;case 9:return l++,[3,5];case 10:return[3,12];case 11:c&&c.objId?a={objId:c.objId}:"function"==typeof c&&void 0===c.objId?(p=w(),n[p]=c,a={callbackId:p}):a=c,t.label=12;case 12:return r.push(a),[3,1];case 13:return[2,[r,n]]}})})}var x=function(n,t){void 0===t&&(t=!0);var r=e({},n),i=r.headers,o=void 0===i?{}:i,a=r.subscriptions,c=void 0===a?{}:a,s=r.mode,l=void 0===s?u.nomal:s,f=r.commonOptions,d=o.backBtn,p=void 0===d?{}:d,v=o.shareBtn,h=void 0===v?{}:v,b=o.otherMenuBtn,m=void 0===b?{}:b,w=function(e,n){e.subscribe&&"function"==typeof e.subscribe&&(e.callback=n,c[n]=e.subscribe,t&&delete e.subscribe)};if(w(p,"wpsconfig_back_btn"),w(h,"wpsconfig_share_btn"),w(m,"wpsconfig_other_menu_btn"),m.items&&Array.isArray(m.items)){var g=[];m.items.forEach(function(e,n){switch(void 0===e&&(e={}),e.type){case"export_img":e.type=1,e.callback="export_img";break;case"export_pdf":e.type=1,e.callback="export_pdf";break;case"save_version":e.type=1,e.callback="save_version";break;case"about_wps":e.type=1,e.callback="about_wps";break;case"split_line":e.type=2;break;case"custom":e.type=3,w(e,"wpsconfig_other_menu_btn_"+n),g.push(e)}}),g.length&&(D||P)&&(m.items=g)}r.url=r.url||r.wpsUrl;var y=[];if((l===u.simple||f&&!1===f.isShowTopArea)&&y.push("simple","hidecmb"),r.debug&&y.push("debugger"),r.url&&y.length&&(r.url=r.url+(r.url.indexOf("?")>=0?"&":"?")+y.join("&")),f&&(f.isParentFullscreen||f.isBrowserViewFullscreen)&&(document.addEventListener("fullscreenchange",F),document.addEventListener("webkitfullscreenchange",F),document.addEventListener("mozfullscreenchange",F)),r.wordOptions&&(r.wpsOptions=r.wordOptions),r.excelOptions&&(r.etOptions=r.excelOptions),r.pptOptions&&(r.wppOptions=r.pptOptions),"object"==typeof c.print){var k="wpsconfig_print";"function"==typeof c.print.subscribe&&(c[k]=c.print.subscribe,r.print={callback:k},void 0!==c.print.custom&&(r.print.custom=c.print.custom)),delete c.print}"function"==typeof c.exportPdf&&(c[k="wpsconfig_export_pdf"]=c.exportPdf,r.exportPdf={callback:k},delete c.exportPdf);return r.commandBars&&L(r.commandBars,!1),e(e({},r),{subscriptions:c})},C=function(n){var t=e({},n);t.fileToken=t.token||t.fileToken;var r=t.appId,o=t.fileId,c=t.officeType,s=t.fileToken,u=t.endpoint,l=t.customArgs,f=void 0===l?"":l;if(!Object.values(a).includes(c))throw Error("[WebOfficeSDK.init] officeType属性值错误，可选值参考WebOfficeSDK.OfficeType: "+JSON.stringify(a));var d=s?1:0,p={token:""};if("string"==typeof s?p.token=s:i(s)&&(p=e({tokenData:p},s)),d&&!p.token)return console.error("[WebOfficeSDK.init] token设置无效"),t;if("string"!=typeof u)throw Error("[WebOfficeSDK.init] endpoint期望为字符串");if(u&&!u.startsWith("http"))return console.error("[WebOfficeSDK.init] endpoint仅支持http、https的地址"),t;if(t.url=u+"/office/"+c+"/"+o+"?_w_appid="+r+"&_w_tokentype="+d,i(f)){var v=Object.entries(f).map(function(e){var n=e[0],t=e[1];return n+"="+encodeURIComponent(t)}).join("&");t.url=t.url+"&"+v}return e({},t)},A=function(e){void 0===e&&(e="");var n="";if(!n&&e){var t=e.toLowerCase();-1!==t.indexOf("/office/s/")&&(n=c.spreadsheet),-1!==t.indexOf("/office/w/")&&(n=c.writer),-1!==t.indexOf("/office/p/")&&(n=c.presentation),-1!==t.indexOf("/office/f/")&&(n=c.pdf)}if(!n){var r=e.match(/[\?&]type=([a-z]+)/)||[];n=s[r[1]]||""}return n};function L(e,n){void 0===n&&(n=!0);var t=e.map(function(e){var n=e.attributes;if(!Array.isArray(n)){var t=[];for(var r in n)if(n.hasOwnProperty(r)){var i={name:r,value:n[r]};t.push(i)}e.attributes=t}return e});return n&&y({data:t,eventName:"setCommandBars"}),t}var N=window.navigator.userAgent.toLowerCase(),D=/Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(N),P=function(){try{return-1!==window._parent.location.search.indexOf("from=wxminiprogram")}catch(e){return!1}}();function F(){var e={status:l.requestFullscreen},n=document,t=n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement;e.status=t?l.requestFullscreen:l.exitFullscreen,y({data:e,eventName:"fullscreenchange"})}var W=function(){I.idMap={}};function B(){console.group("JSSDK 事件机制调整说明"),console.warn("jssdk.on、jssdk.off 和 jssdk.Application.Sub 将在后续版本中被弃用，建议使用改进后的 ApiEvent"),console.warn("具体请参考：https://wwo.wps.cn/docs/front-end/basic-usage/events/intro/"),console.groupEnd()}var R=0,V=!0,H=new Set;function K(e){return R+=1,!e&&function(e){H.forEach(function(n){return n(e)})}(R),R}function M(){var e=new Error("");return(e.stack||e.message||"").split("\n").slice(2).join("\n")}function z(i,o){var a=this;V=!1;var s,u=o.Events,l=o.Enum,f=o.Props,d=f[0],p=f[1],h={objId:R};switch(function n(t,r,i){var o=r.slice(0);var a=function(){var r=o.shift();!r.alias&&~q.indexOf(r.prop)&&o.push(e(e({},r),{alias:r.prop+"Async"})),Object.defineProperty(t,r.alias||r.prop,{get:function(){var o=this;if(!V){var a=1===r.cache,c=a&&this["__"+r.prop+"CacheValue"];if(!c){var s=M(),u=K(a),l=function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];void 0!==r.caller?function n(t,r,i){var o=r.slice(0);var a=function(){var r=o.shift();!r.alias&&~q.indexOf(r.prop)&&o.push(e(e({},r),{alias:r.prop+"Async"})),Object.defineProperty(t,r.alias||r.prop,{get:function(){var e=this;if(!V){var o=1===r.cache,a=o&&this["__"+r.prop+"CacheValue"];if(!a){var c=M(),s=K(o),u=function(){for(var e,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];void 0!==r.caller?n(e={objId:K()},i[r.caller],i):e={};return G(u,e,"api.caller",{obj:u,args:o,parentObjId:t.objId,objId:e.objId,prop:r.prop},c),e};return u.objId=-1,void 0!==r.getter&&(u.objId=s,n(u,i[r.getter],i)),G(t,u,"api.getter",{parentObjId:t.objId,objId:u.objId,prop:r.prop},c,function(){delete e["__"+r.prop+"CacheValue"]}),o&&(this["__"+r.prop+"CacheValue"]=u),u}return a}},set:function(e){if(!V){var n=M();return G(t,{},"api.setter",{value:e,parentObjId:t.objId,objId:-1,prop:r.prop},n)}}})};for(;o.length;)a()}(n={objId:K()},i[r.caller],i):n={};return G(l,n,"api.caller",{obj:l,args:o,parentObjId:t.objId,objId:n.objId,prop:r.prop},s),n};return l.objId=-1,void 0!==r.getter&&(l.objId=u,n(l,i[r.getter],i)),G(t,l,"api.getter",{parentObjId:t.objId,objId:l.objId,prop:r.prop},s,function(){delete o["__"+r.prop+"CacheValue"]}),a&&(this["__"+r.prop+"CacheValue"]=l),l}return c}},set:function(e){if(!V){var n=M();return G(t,{},"api.setter",{value:e,parentObjId:t.objId,objId:-1,prop:r.prop},n)}}})};for(;o.length;)a()}(h,d,p),h.Events=u,h.Enum=l,i.Enum=h.Enum,i.Events=h.Events,i.Props=f,A(i.url)){case c.writer:i.WordApplication=i.WpsApplication=function(){return h};break;case c.spreadsheet:i.ExcelApplication=i.EtApplication=function(){return h};break;case c.presentation:i.PPTApplication=i.WppApplication=function(){return h};break;case c.pdf:i.PDFApplication=function(){return h}}i.Application=h,i.Free=function(e){return S("api.free",{objId:e},"")},i.Stack=h.Stack=(s=function(e){i&&i.Free(e)},function(){var e=[],n=function(n){e.push(n)};return H.add(n),{End:function(){s(e),H.delete(n)}}});var b={};r.add(function(e){return n(a,void 0,void 0,function(){var n,i,o,a,c;return t(this,function(t){switch(t.label){case 0:return v(e)?[2]:"api.event"===(n=r.parse(e.data)).eventName&&n.data?(i=n.data,o=i.eventName,a=i.data,(c=b[o])?[4,c(a)]:[3,2]):[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})}),h.Sub={};var m=function(e){var n=u[e];Object.defineProperty(h.Sub,n,{set:function(e){B(),b[n]=e,y({eventName:"api.event.register",data:{eventName:n,register:!!e,objId:R+=1}})}})};for(var w in u)m(w)}var q=["ExportAsFixedFormat","GetOperatorsInfo","ImportDataIntoFields","ReplaceText","ReplaceBookmark","GetBookmarkText","GetComments"];function J(n,t,r){var i=t.slice(0);var o=function(){var t=i.shift();if(!t.alias&&~q.indexOf(t.prop)){i.push(e(e({},t),{alias:t.prop+"Async"}))}Object.defineProperty(n,t.alias||t.prop,{get:function(){var e=this;if(V){return}var i=t.cache===1;var o=i&&this["__"+t.prop+"CacheValue"];if(!o){var a=M();var c=K(i);var s=function(){for(var e=[],i=0,o;i<arguments.length;i++){e[i]=arguments[i]}if(t.caller!==undefined){o={objId:K()};J(o,r[t.caller],r)}else{o={}}return G(u,o,"api.caller",{obj:u,args:e,parentObjId:n.objId,objId:o.objId,prop:t.prop},a),o};var u=s;u.objId=-1;if(t.getter!==undefined){u.objId=c;J(u,r[t.getter],r)}G(n,u,"api.getter",{parentObjId:n.objId,objId:u.objId,prop:t.prop},a,function(){delete e["__"+t.prop+"CacheValue"]});if(i){this["__"+t.prop+"CacheValue"]=u}return u}return o},set:function(e){if(V){return}var r=M();return G(n,{},"api.setter",{value:e,parentObjId:n.objId,objId:-1,prop:t.prop},r)}})};while(i.length){o()}}function G(e,n,t,r,i,o){var a,c=(e.done?e.done():Promise.resolve()).then(function(){return a||(a=S(t,r,i,o)),a});n.done=function(){return c},n.then=function(e,t){return r.objId>=0?(n.then=null,n.catch=null,c.then(function(){e(n)}).catch(function(e){return t(e)})):c.then(e,t)},n.catch=function(e){return c.catch(e)},n.Destroy=function(){return S("api.free",{objId:n.objId},"")}}var U={};var Z=null,Q={fileOpen:"fileOpen",tabSwitch:"tabSwitch",fileSaved:"fileSaved",fileStatus:"fileStatus",fullscreenChange:"fullscreenChange",error:"error",stage:"stage"},X={getToken:"api.getToken",onToast:"event.toast",onHyperLinkOpen:"event.hyperLinkOpen",getClipboardData:"api.getClipboardData"};function Y(i,o,a,c,s,u,l){var f=this;void 0===a&&(a={});r.add(function(d){return n(f,void 0,void 0,function(){var n,f,p,h,b,m,w,g,k,O,j,I,E,T,S,_,x,C,A;return t(this,function(t){switch(t.label){case 0:return v(d)?[2]:(n=r.parse(d.data),f=n.eventName,p=void 0===f?"":f,h=n.data,b=void 0===h?null:h,m=n.url,w=void 0===m?null:m,-1!==["wps.jssdk.api"].indexOf(p)?[2]:"ready"!==p?[3,1]:(s.apiReadySended&&function(e){var n=[];Object.keys(U).forEach(function(t){U[t].forEach(function(r){var i=t;e.off(i,r),n.push({handle:r,eventName:i})}),delete U[t]}),n.forEach(function(e){var n=e.eventName,t=e.handle;null==Z||Z.ApiEvent.AddApiEventListener(n,t)})}(o),y({eventName:"setConfig",data:e(e({},a),{version:i.version})}),i.tokenData&&i.setToken(e(e({},i.tokenData),{hasRefreshTokenConfig:!!a.refreshToken})),i.iframeReady=!0,[3,15]));case 1:return"error"!==p?[3,2]:(o.emit(Q.error,b),[3,15]);case 2:return"open.result"!==p?[3,3]:(void 0!==(null===(x=null==b?void 0:b.fileInfo)||void 0===x?void 0:x.officeVersion)&&(i.mainVersion=b.fileInfo.officeVersion,console.log("WebOfficeSDK Main Version: V"+i.mainVersion)),o.emit(Q.fileOpen,b),[3,15]);case 3:return"api.scroll"!==p?[3,4]:(window.scrollTo(b.x,b.y),[3,15]);case 4:if(p!==X.getToken)return[3,9];g={token:!1},t.label=5;case 5:return t.trys.push([5,7,,8]),[4,s.refreshToken()];case 6:return g=t.sent(),[3,8];case 7:return k=t.sent(),console.error("refreshToken: "+(k||"fail to get")),[3,8];case 8:return y({eventName:X.getToken+".reply",data:g}),[3,15];case 9:if(p!==X.getClipboardData)return[3,14];O={text:"",html:""},t.label=10;case 10:return t.trys.push([10,12,,13]),[4,s.getClipboardData()];case 11:return O=t.sent(),[3,13];case 12:return j=t.sent(),console.error("getClipboardData: "+(j||"fail to get")),[3,13];case 13:return y({eventName:X.getClipboardData+".reply",data:O}),[3,15];case 14:p===X.onToast?s.onToast(b):p===X.onHyperLinkOpen?s.onHyperLinkOpen(b):"stage"===p?o.emit(Q.stage,b):"event.callback"===p?(I=b.eventName,E=b.data,T=I,"fullScreenChange"===I&&(T=Q.fullscreenChange),"file.saved"===I&&(T=Q.fileStatus),((null===(C=a.commonOptions)||void 0===C?void 0:C.isBrowserViewFullscreen)||(null===(A=a.commonOptions)||void 0===A?void 0:A.isParentFullscreen))&&"fullscreenchange"===T&&(S=E.status,_=E.isDispatchEvent,a.commonOptions.isBrowserViewFullscreen?function(e,n,t,r){0===e?n.style="position: static; width: "+t.width+"; height: "+t.height:1===e&&(n.style="position: absolute; width: 100%; height: 100%"),r&&function(e){["fullscreen","fullscreenElement"].forEach(function(n){Object.defineProperty(document,n,{get:function(){return!!e.status},configurable:!0})});var n=new CustomEvent("fullscreenchange");document.dispatchEvent(n)}({status:e})}(S,u,l,_):a.commonOptions.isParentFullscreen&&function(e,n,t){var r=document.querySelector(t),i=r&&1===r.nodeType?r:n;if(0===e){var o=document,a=o.exitFullscreen||o.mozCancelFullScreen||o.msExitFullscreen||o.webkitCancelFullScreen||o.webkitExitFullscreen;a.call(document)}else if(1===e){var c=i.requestFullscreen||i.mozRequestFullScreen||i.msRequestFullscreen||i.webkitRequestFullscreen;c.call(i)}}(S,u,a.commonOptions.isParentFullscreen)),o.emit(T,E)):"api.ready"===p&&z(i,b),t.label=15;case 15:return"function"==typeof c[p]&&c[p](i,w||b),[2]}})})})}function $(e){return new Promise(function(n){var t=function(i){v(i)||r.parse(i.data).eventName===e&&(n(),r.remove(t))};r.add(t)})}function ee(a){var c,s=this;void 0===a&&(a={}),Z&&Z.destroy();try{var u=x(a),l=u.subscriptions,f=void 0===l?{}:l,p=u.mount,v=void 0===p?null:p,h=u.url,b=u.refreshToken,m=u.onToast,w=u.onHyperLinkOpen,k=u.getClipboardData,I=u.attrAllow;d("origin",(h.match(/https*:\/\/[^\/]+/g)||[])[0]);var E=g(h,v,!0,{allow:I}),T=$("ready"),S=$("open.result"),_=$("api.ready"),C=v?{width:v.clientWidth+"px",height:v.clientHeight+"px"}:{width:"100vw",height:"100vh"};delete u.mount,h&&delete u.url,delete u.subscriptions;var A=(c=c||Object.create(null),{on:function(e,n){(c[e]||(c[e]=[])).push(n)},off:function(e,n){c[e]&&c[e].splice(c[e].indexOf(n)>>>0,1)},emit:function(e,n){(c[e]||[]).slice().map(function(e){e(n)}),(c["*"]||[]).slice().map(function(t){t(e,n)})}}),N={apiReadySended:!1},D=function(e,r,i){return n(s,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return function(e,n,t){if(U[e]){var r=!!U[e].find(function(e){return e===n});return r&&"off"===t?(A.off(e,n),U[e]=U[e].filter(function(e){return e!==n}),!!U[e].length||(U[e]=void 0,!1)):(r||"on"!==t||(U[e].push(n),A.on(e,n)),!0)}return"on"===t?(U[e]=[],U[e].push(n),!1):"off"===t||void 0}(e,r,i)?[3,2]:[4,T];case 1:n.sent(),function(e,n){var t=e.eventName,r=e.type,i=e.handle;"on"===n?A.on(t,i):A.off(t,i),"base.event"===r&&y({eventName:"basic.event",data:{eventName:t,action:n}}),B()}(function(e,n){var t=e,r="base.event";switch(t){case Q.fileSaved:console.warn("fileSaved事件监听即将弃用， 推荐使用fileStatus进行文件状态的监听"),t="fileStatus";break;case Q.fullscreenChange:t="fullscreenchange";break;case"error":case"fileOpen":r="callback.event"}return{eventName:t,type:r,handle:n}}(e,r),i),n.label=2;case 2:return[2]}})})};return Z={url:h,iframe:E,version:"1.1.24",iframeReady:!1,tokenData:null,commandBars:null,tabs:{getTabs:function(){return n(this,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,T];case 1:return e.sent(),[2,j({api:"tab.getTabs"})]}})})},switchTab:function(e){return n(this,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return[4,T];case 1:return n.sent(),[2,j({api:"tab.switchTab",args:{tabKey:e}})]}})})}},setCooperUserColor:function(e){return n(this,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return[4,T];case 1:return n.sent(),[2,j({api:"setCooperUserColor",args:e})]}})})},setToken:function(e){return n(this,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return[4,T];case 1:return n.sent(),Z.tokenData=e,y({eventName:"setToken",data:e}),[2]}})})},ready:function(){return n(this,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return N.apiReadySended?[3,2]:[4,S];case 1:e.sent(),N.apiReadySended=!0,y({eventName:"api.ready"}),e.label=2;case 2:return[4,_];case 3:return e.sent(),[2,new Promise(function(e){return setTimeout(function(){return e(null==Z?void 0:Z.Application)},0)})]}})})},destroy:function(){U={},E.destroy(),r.empty(),Z=null,H=new Set,R=0,V=!0,document.removeEventListener("fullscreenchange",F),document.removeEventListener("webkitfullscreenchange",F),document.removeEventListener("mozfullscreenchange",F),W()},save:function(){return n(this,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,T];case 1:return e.sent(),[2,O({api:"save"})]}})})},setCommandBars:function(e){return n(this,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return[4,T];case 1:return n.sent(),L(e),[2]}})})},updateConfig:function(e){return void 0===e&&(e={}),n(this,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return[4,T];case 1:return n.sent(),e.commandBars?(console.warn("Deprecated: `updateConfig()` 方法即将废弃，请使用`setCommandBars()`代替`updateConfig()`更新`commandBars`配置。"),[4,L(e.commandBars)]):[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}})})},executeCommandBar:function(e){return n(this,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return[4,T];case 1:return n.sent(),L([{cmbId:e,attributes:[{name:"click",value:!0}]}]),[2]}})})},on:function(e,r){return n(this,void 0,void 0,function(){return t(this,function(n){return[2,this.ApiEvent.AddApiEventListener(e,r)]})})},off:function(e,r){return n(this,void 0,void 0,function(){return t(this,function(n){return[2,this.ApiEvent.RemoveApiEventListener(e,r)]})})},ApiEvent:{AddApiEventListener:function(e,r){return n(this,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return[4,D(e,r,"on")];case 1:return[2,n.sent()]}})})},RemoveApiEventListener:function(e,r){return n(this,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return[4,D(e,r,"off")];case 1:return[2,n.sent()]}})})}}},function(e,n,t,r,i,a){n&&o(n)&&(i.refreshToken=n,e.refreshToken={eventName:X.getToken});a&&o(a)&&(i.getClipboardData=a,e.getClipboardData={eventName:X.getClipboardData});t&&o(t)&&(i.onToast=t,e.onToast={eventName:X.onToast});r&&o(r)&&(i.onHyperLinkOpen=r,e.onHyperLinkOpen={eventName:X.onHyperLinkOpen})}(u,b,m,w,N,k),Y(Z,A,u,f,N,E,C),u.fileToken&&(i(u.fileToken)?Z.setToken(e({},u.fileToken)):Z.setToken({token:u.fileToken})),Z}catch(e){console.error(e)}}function ne(n){var t,r,i=e({},n);if(i.url)throw Error("[WebOfficeSDK.init] 不支持传递url，请使用appId、fileId、officeType、token等参数初始化！");if(!i.appId||!i.fileId||!i.officeType)throw Error("[WebOfficeSDK.init] appId、fileId、officeType为必选项！");if(void 0!==i.token&&"string"!=typeof i.token&&"string"!=typeof(null===(t=i.token)||void 0===t?void 0:t.token))throw Error("[WebOfficeSDK.init] token类型必须为字符串！");if(void 0!==i.fileToken&&"string"!=typeof i.fileToken&&"string"!=typeof(null===(r=i.fileToken)||void 0===r?void 0:r.token))throw Error("[WebOfficeSDK.init] fileToken类型必须为字符串！");return i.endpoint=i.endpoint||"https://o.wpsgo.com",ee(C(i))}console.log("WebOfficeSDK JS-SDK V1.1.24");var te=Object.freeze({__proto__:null,listener:Y,config:ee,createApp:ne,get OfficeType(){return a}});window.WPS=te;var re=ee,ie=ne,oe=a;export default{config:ee,init:ne,OfficeType:a};export{oe as OfficeType,re as config,ie as init};
