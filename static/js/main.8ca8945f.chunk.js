(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(54)},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),c=a(8),i=a(10),s=(a(35),a(3)),u=a.n(s),d=a(7),m=a(1),f=a(29),p=a(9),g=a(16),b=a(13),v=a.n(b),E=r.a.createContext(),w=new g.a,h={language:"en",subtitles:"en",quality:480},y={configuration:h,dbIndex:[],isInit:!1,isSupported:!0,videos:[],player:null,storage:null},N=function(){var e=Object(p.a)(u.a.mark(function e(t){var a,n,r,o,l,c,i,s,p,g,b,E,N,k,O;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=fetch("data/videos.json").then(function(e){return e.json()}),v.a.polyfill.installAll(),n=v.a.Player.isBrowserSupported(),r=v.a.offline.Storage.support(),!n||!r){e.next=22;break}return o=new v.a.Player,l=new v.a.offline.Storage(o),c=l.list(),i=function(e){console.error("Error code",e.code,"object",e)},o.addEventListener("error",function(e){var t=e.detail;return i(t)}),s=w.get("userPreferredQuality"),p={language:w.get("userPreferredAudioLanguage")||h.language,subtitles:w.get("userPreferredTextLanguage")||h.subtitles,quality:s?parseInt(s):h.quality},g=function(e){var t=h.quality,a=h.language,n=h.subtitles;w.get("userPreferredQuality")&&(t=parseInt(w.get("userPreferredQuality"))),w.get("userPreferredAudioLanguage")&&(a=w.get("userPreferredAudioLanguage")),w.get("userPreferredTextLanguage")&&(n=w.get("userPreferredTextLanguage")),window.customConfig&&(t=window.customConfig.quality,a=window.customConfig.language,n=window.customConfig.subtitles,window.customConfig=null);var r=e.sort(function(e,t){return e.height-t.height}).filter(function(e){return"variant"===e.type&&e.height<=t}),o=r.filter(function(e){return e.language===a}),l=e.filter(function(e){return"text"===e.type}).filter(function(e){return e.language===n});return[].concat(Object(f.a)(l),[o.length>0?o.pop():r.pop()])},b=function(e,t){return window.dispatchEvent(new CustomEvent("storage-progress",{detail:{content:e,progress:t}}))},o.configure({offline:{progressCallback:b,trackSelectionCallback:g},preferredAudioLanguage:p.language,preferredTextLanguage:p.subtitles}),e.next=17,Promise.all([a,c]);case 17:return E=e.sent,N=Object(m.a)(E,2),k=N[0],O=N[1],e.abrupt("return",t({type:"INIT_DONE",payload:{configuration:p,dbIndex:O,isInit:!0,isSupported:n&&r,player:o,storage:l,videos:k}}));case 22:return e.abrupt("return",t({type:"INIT_DONE",payload:Object(d.a)({},y,{isInit:!0,isSupported:!1})}));case 23:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(e,t){var a=t.type,n=t.payload,r=t.dispatch;switch(a){case"INIT":return N(r),e;case"INIT_DONE":return Object(d.a)({},e,{isInit:n.isInit,isSupported:n.isSupported,videos:n.videos,dbIndex:n.dbIndex,configuration:n.configuration,player:n.player,storage:n.storage});case"UPDATE_DB_INDEX":return Object(d.a)({},e,{dbIndex:n.dbIndex});case"SET_CONFIG_LANGUAGE":return w.set("userPreferredAudioLanguage",n,{path:"/"}),e.player.configure({preferredAudioLanguage:n}),Object(d.a)({},e,{configuration:Object(d.a)({},e.configuration,{language:n})});case"SET_CONFIG_SUBTITLES":return w.set("userPreferredTextLanguage",n,{path:"/"}),e.player.configure({preferredTextLanguage:"none"===n?"":n}),Object(d.a)({},e,{configuration:Object(d.a)({},e.configuration,{subtitles:n})});case"SET_CONFIG_QUALITY":return w.set("userPreferredQuality",n,{path:"/"}),Object(d.a)({},e,{configuration:Object(d.a)({},e.configuration,{quality:n})});default:return e}},O=function(){return r.a.createElement("div",{className:"container",style:{height:"100vh"}},r.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))},x=function(e){var t=e.routes,a=Object(n.useState)(!1),o=Object(m.a)(a,2),l=o[0],i=o[1],s=Object(n.useState)(!1),u=Object(m.a)(s,2),d=u[0],f=u[1],p=Object(n.useRef)(),g=function(){return f(!0)},b=function(){return f(!1)};Object(n.useEffect)(function(){return f(window.navigator.onLine),window.addEventListener("online",g),window.addEventListener("offline",b),function(){window.removeEventListener("online",g),window.removeEventListener("offline",b)}},[]);var v=function(e){p.current.contains(e.target)||i(!1)};return Object(n.useEffect)(function(){return l?document.addEventListener("mousedown",v):document.removeEventListener("mousedown",v),function(){document.removeEventListener("mousedown",v)}},[l]),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark fixed-top"},r.a.createElement(c.b,{className:"navbar-brand",exact:!0,to:"/"},"Shaka-O-Matik"),r.a.createElement("button",{className:"navbar-toggler",type:"button","aria-expanded":l,"aria-label":"Toggle navigation",onClick:function(){return i(!l)}},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse ".concat(l?"show":""),ref:p},r.a.createElement("div",{className:"navbar-nav"},t.map(function(e){var t=e.exact,a=e.key,n=e.label,o=e.path;return r.a.createElement(c.b,{activeClassName:"active",className:"nav-item nav-link",exact:t,key:a,onClick:function(){return i(!1)},to:o},n,r.a.createElement("span",{className:"sr-only"},"(current)"))}))),d?r.a.createElement("button",{type:"button",className:"btn btn-success",disabled:!0},"Online"):r.a.createElement("button",{type:"button",className:"btn btn-danger",disabled:!0},"Offline"))},j=a(27),_=a.n(j),I=function(){var e=Object(p.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",navigator.storage.estimate().then(function(e){var t=e.quota,a=e.usage;return{quota:Math.round(t/1e6),usage:Math.round(a/1e6)}}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(n.useState)({usage:0,quota:100}),t=Object(m.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){if("storage"in navigator&&"estimate"in navigator.storage){var e=setInterval(function(){I().then(o)},5e3);return I().then(o),function(){return clearInterval(e)}}},[]),r.a.createElement("div",{className:"card",style:{marginTop:"1rem"}},r.a.createElement("div",{className:"card-body"},"You have ",a.quota,"MB of accessible storage and currently use ",a.usage,"MB.",r.a.createElement("div",{className:"progress",style:{height:"2rem"}},r.a.createElement("div",{className:"progress-bar bg-info",role:"progressbar",style:{width:"".concat(a.usage/a.quota*100,"%")},"aria-valuenow":a.usage,"aria-valuemin":"0","aria-valuemax":a.quota}))))},S=function(e){var t=e.id,a=e.removeMedia,n=e.title,o=e.downloadedOn,l=e.language,i=e.subtitles,s=e.quality;return r.a.createElement("li",{className:"list-group-item"},n,r.a.createElement("br",null),r.a.createElement("small",null,"downloaded on: ",o),r.a.createElement("br",null),r.a.createElement("small",null,"language: ",l),r.a.createElement("br",null),r.a.createElement("small",null,"subtitles: ",i),r.a.createElement("br",null),r.a.createElement("small",null,"quality: ",s,"p"),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(c.b,{className:"btn btn-primary",to:"/offline/".concat(t)},"Watch"),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:a},"Remove")))},L=function(e){var t=e.title,a=e.dateStarted,n=e.progress;return r.a.createElement("li",{className:"list-group-item"},t,r.a.createElement("br",null),r.a.createElement("small",null,"started: ",a),r.a.createElement("hr",null),r.a.createElement("div",{className:"progress",style:{marginBottom:"0.5rem"}},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":100*n,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(100*n,"%")}})))},T=function(){var e=Object(n.useContext)(E),t=e.state,a=t.dbIndex,o=t.storage,l=e.dispatch,c=Object(n.useState)({content:null,progress:0}),i=Object(m.a)(c,2),s=i[0],d=s.content,f=s.progress,g=i[1];Object(n.useEffect)(function(){o&&function(){var e=Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.list();case 2:t=e.sent,l({type:"UPDATE_DB_INDEX",payload:{dbIndex:t}});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[l,o]);var b=function(e){g(e.detail)};Object(n.useEffect)(function(){return window.addEventListener("storage-progress",b),function(){window.removeEventListener("storage-progress",b)}},[]);var v=function(){var e=Object(p.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.remove(t);case 2:return e.next=4,o.list();case 4:a=e.sent,l({type:"UPDATE_DB_INDEX",payload:{dbIndex:a}});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=Object(n.useRef)(_()(Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g({content:null,progress:0}),e.next=3,o.list();case 3:t=e.sent,l({type:"UPDATE_DB_INDEX",payload:{dbIndex:t}});case 5:case"end":return e.stop()}},e)})),1e3));return Object(n.useEffect)(function(){d&&w.current()}),r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:"list-group"},d&&r.a.createElement(L,{title:d.appMetadata.title,progress:f,dateStarted:d.appMetadata.downloaded}),a.reverse().map(function(e,t){var a=e.appMetadata,n=e.offlineUri,o=e.tracks,l=o.find(function(e){return"variant"===e.type}),c=o.find(function(e){return"text"===e.type});return r.a.createElement(S,{title:a.title,key:"download_".concat(t,"_").concat(a.title),done:!0,id:a.id,removeMedia:function(){return v(n)},downloadedOn:a.downloaded,language:l.language,subtitles:c?c.language:"None",quality:l.height})})),r.a.createElement(C,{max:2e3,current:500}))},P=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Hello, world!"),r.a.createElement("p",{className:"lead"},"This is an App that demonstates offline storage and playback of videos with the Shaka player."),r.a.createElement("hr",null),r.a.createElement("p",null,"There are many bugs and few features."))},D=function(e){var t=e.id,a=e.onClickDownload,o=e.poster,l=e.tagline,i=e.title,s=e.languages,u=e.qualities,d=e.subtitles,f=Object(n.useRef)(),p=Object(n.useState)(!1),g=Object(m.a)(p,2),b=g[0],v=g[1],E=Object(n.useState)(s[0]),w=Object(m.a)(E,2),h=w[0],y=w[1],N=Object(n.useState)(d.length?d[0]:""),k=Object(m.a)(N,2),O=k[0],x=k[1],j=Object(n.useState)(u[0]),_=Object(m.a)(j,2),I=_[0],C=_[1],S=function(e){f.current.contains(e.target)||v(!1)};return Object(n.useEffect)(function(){return b?document.addEventListener("mousedown",S):document.removeEventListener("mousedown",S),function(){document.removeEventListener("mousedown",S)}},[b]),r.a.createElement("div",{className:"col-md-6",style:{marginBottom:"1rem"}},r.a.createElement("div",{className:"card bg-dark text-white",style:{background:"black"}},r.a.createElement("img",{alt:"image_".concat(i),className:"card-img-top",src:o,style:{minHeight:"10rem",opacity:"0.4",borderRadius:".25rem"}}),r.a.createElement("div",{className:"card-img-overlay d-flex justify-content-between flex-column"},r.a.createElement("h5",{className:"card-title"},i),r.a.createElement("p",{className:"card-text"},l),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("button",{className:"btn btn-secondary",onClick:a,type:"button",title:"Download with default configuration"},"Download"),r.a.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"btn btn-secondary dropdown-toggle dropdown-toggle-split","data-toggle":"dropdown",id:"dropdown_download_options-".concat(t),onClick:function(){return v(!0)},type:"button",title:"Download with custom configuration"},r.a.createElement("span",{className:"sr-only"},"Toggle Download Options Dropdown")),r.a.createElement("div",{"aria-labelledby":"dropdown_download_options-".concat(t),className:'dropdown-menu dropdown-menu-right"'.concat(b?" show":""),ref:f},r.a.createElement("form",{className:"px-4"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-form-label col-form-label-sm",htmlFor:"dropdown_download_options-".concat(t,"-language")},"Language"),r.a.createElement("select",{className:"custom-select custom-select-sm",defaultValue:h||"",id:"dropdown_download_options-".concat(t,"-language"),onChange:function(e){return y(e.target.value)}},s.map(function(e,a){return r.a.createElement("option",{key:"dropdown_download_options-".concat(t,"-language-").concat(a),value:e},e)}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-form-label col-form-label-sm",htmlFor:"dropdown_download_options-".concat(t,"-subtitles")},"Subtitles"),d.length?r.a.createElement("select",{className:"custom-select custom-select-sm",value:O||"",id:"dropdown_download_options-".concat(t,"-subtitles"),onChange:function(e){return x(e.target.value)}},d.map(function(e,a){return r.a.createElement("option",{key:"dropdown_download_options-".concat(t,"-subtitles-").concat(a),value:e},e)}),r.a.createElement("option",{value:"none"},"None")):r.a.createElement("select",{className:"custom-select custom-select-sm",value:"none",id:"dropdown_download_options-".concat(t,"-subtitles"),disabled:!0},r.a.createElement("option",{value:"none"},"None"))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-form-label col-form-label-sm",htmlFor:"dropdown_download_options-".concat(t,"-quality")},"Quality"),r.a.createElement("select",{className:"custom-select custom-select-sm",defaultValue:I||"",id:"dropdown_download_options-".concat(t,"-quality"),onChange:function(e){return C(e.target.value)}},u.map(function(e,a){return r.a.createElement("option",{key:"dropdown_download_options-".concat(t,"-quality-").concat(a),value:e},e,"p")}))),r.a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:function(){window.customConfig={language:h,subtitles:O,quality:I},a()},type:"button"},"Download")))),r.a.createElement(c.b,{className:"btn btn-primary",exact:!0,role:"button",to:"/stream/".concat(t)},"Watch now!")))))},q=function(e){var t=e.history,a=Object(n.useContext)(E).state,o=a.dbIndex,l=a.storage,c=a.videos,i=Object(n.useState)(""),s=Object(m.a)(i,2),u=s[0],d=s[1];return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"input-group",style:{paddingBottom:"1rem"}},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search",onChange:function(e){return d(e.target.value)},value:u}),u&&r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return d("")}},"Clear"))),r.a.createElement("div",{className:"row"},c.filter(function(e){return e.title.includes(u)}).map(function(e,a){return r.a.createElement(D,Object.assign({},e,{key:"media_".concat(a,"_").concat(e.title),onClickDownload:function(){return function(e){if(l.getStoreInProgress())alert("Download already in Progress!");else{if(o.find(function(t){return t.appMetadata.id===e}))return void alert("You already have the video in your library.");var a=c.find(function(t){return t.id===e});l.store(a.manifestUri,{downloaded:Date(),id:a.id,title:a.title}),t.push("/downloads")}}(e.id)}}))})))},A=a(28),U=(a(53),new g.a),F=function(e){var t=e.match,a=e.history,o=Object(n.useRef)(null),l=Object(n.useContext)(E).state,c=l.player,i=l.storage,s=l.videos.find(function(e){return e.id===t.params.id});return Object(n.useEffect)(function(){var e=o.current,a=function(){0!==e.currentTime&&U.set("videoPlaybackTime:"+s.id,e.currentTime)},n=function(e){var a=U.get("videoPlaybackTime:"+s.id);console.log("playbacktime is: "+a),a&&0!==parseInt(a)?Object(A.confirmAlert)({title:"Resume Playback?",message:"Would you like to resume this video where you left off?",buttons:[{label:"Yes",onClick:function(){console.log("clickedyes"),"stream"===e?c.load(s.manifestUri,a):i.list().then(function(e){var n=e.find(function(e){return e.appMetadata.id===t.params.id});c.load(n.offlineUri,a)})}},{label:"No",onClick:function(){"stream"===e?c.load(s.manifestUri,a):i.list().then(function(e){var a=e.find(function(e){return e.appMetadata.id===t.params.id});c.load(a.offlineUri)})}}]}):"stream"===e?c.load(s.manifestUri):i.list().then(function(e){var a=e.find(function(e){return e.appMetadata.id===t.params.id});c.load(a.offlineUri)})};return e.addEventListener("pause",a),e.addEventListener("ended",a),c.attach(e),"stream"===t.params.mode?n("stream"):n("offline"),function(){c.detach(e),a(),e.removeEventListener("pause",a),e.removeEventListener("ended",a)}},[t,s,c,i]),r.a.createElement("div",{className:"card bg-light"},r.a.createElement("div",{className:"card-header"},s?s.title:"404",r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:a.goBack},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"card-body"},s?r.a.createElement("video",{ref:o,style:{width:"100%",maxHeight:"80vh"},poster:s.poster,controls:!0,autoPlay:!0}):"Video not found."))},B=[{label:"English",id:"en"},{label:"Deutsch",id:"de"},{label:"Fran\xe7ais",id:"fr"}],M=[].concat(B,[{label:"None",id:"none"}]),R=function(){var e=Object(n.useContext)(E),t=e.state,a=e.dispatch,o=t.configuration;return r.a.createElement("div",{className:"form-check"},r.a.createElement("form",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},r.a.createElement("legend",{className:"col-form-label col-sm-2 pt-0"},"Preferred Language"),r.a.createElement("div",{className:"col"},B.map(function(e){var t=e.label,n=e.id;return r.a.createElement("div",{className:"form-check",key:"key_language_".concat(n)},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"languageRadios",id:"language_".concat(n),value:n,checked:n===o.language,onChange:function(e){return a({type:"SET_CONFIG_LANGUAGE",payload:e.target.value})}}),r.a.createElement("label",{className:"form-check-label",htmlFor:"language_".concat(n)},t))}))),r.a.createElement("div",{className:"row"},r.a.createElement("legend",{className:"col-form-label col-sm-2 pt-0"},"Preferred Subtitles"),r.a.createElement("div",{className:"col"},M.map(function(e){var t=e.label,n=e.id;return r.a.createElement("div",{className:"form-check",key:"key_subtitles_".concat(n)},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"subtitleRadios",id:"subtitles_".concat(n),value:n,checked:n===o.subtitles,onChange:function(e){return a({type:"SET_CONFIG_SUBTITLES",payload:e.target.value})}}),r.a.createElement("label",{className:"form-check-label",htmlFor:"subtitles_".concat(n)},t))}))),r.a.createElement("div",{className:"row"},r.a.createElement("legend",{className:"col-form-label col-sm-2 pt-0"},"Preferred Video Quality"),r.a.createElement("div",{className:"col"},[1080,720,480].map(function(e){return r.a.createElement("div",{className:"form-check",key:"key_quality_".concat(e)},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"qualityRadios",id:"quality_".concat(e),value:e,checked:e===o.quality,onChange:function(e){return a({type:"SET_CONFIG_QUALITY",payload:parseInt(e.target.value)})}}),r.a.createElement("label",{className:"form-check-label",htmlFor:"quality_".concat(e)},e))})))))))},G=[{exact:!0,key:"media",label:"Media",path:"/media"},{exact:!0,key:"downloads",label:"Downloads",path:"/downloads"},{exact:!0,key:"configuration",label:"Configuration",path:"/configuration"}],W=function(){var e=Object(n.useContext)(E),t=e.state,a=t.isInit,o=t.isSupported,l=e.dispatch;return Object(n.useEffect)(function(){!a&&l({type:"INIT",dispatch:l})}),a?o?r.a.createElement(c.a,{onUpdate:function(){return window.scrollTo(0,0)}},r.a.createElement("div",{className:"App"},r.a.createElement(x,{routes:G}),r.a.createElement("main",{className:"container",style:{paddingTop:"4.5rem"}},r.a.createElement(n.Fragment,null,r.a.createElement(i.a,{component:P,exact:!0,path:"/"}),r.a.createElement(i.a,{component:q,exact:!0,path:"/media"}),r.a.createElement(i.a,{component:T,exact:!0,path:"/downloads"}),r.a.createElement(i.a,{component:F,exact:!0,path:"/:mode(stream|offline)/:id"}),r.a.createElement(i.a,{component:R,exact:!0,path:"/configuration"}))))):r.a.createElement("div",{className:"alert alert-danger",role:"alert"},r.a.createElement("h4",{className:"alert-heading"},"Browser not supported!"),r.a.createElement("hr",null),"Unfortunately your browser does not support all required technologies. Please update your browser. Safari on iOS is not supported, but Chrome and Firefox on iOS are."):r.a.createElement(O,null)},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(function(e){var t=e.children,a=Object(n.useReducer)(k,y),o=Object(m.a)(a,2),l={state:o[0],dispatch:o[1]};return r.a.createElement(E.Provider,{value:l},t)},null,r.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/awt-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/awt-pwa","/custom-sw.js");Q?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Y(t,e)})}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.8ca8945f.chunk.js.map