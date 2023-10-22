"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("@koale/useworker");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};function o(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function a(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){a.label=c[1];break}if(6===c[0]&&a.label<i[1]){a.label=i[1],i=c;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(c);break}i[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}"function"==typeof SuppressedError&&SuppressedError;var c={container:{overflow:"hidden",position:"relative",width:"100%",paddingTop:"100%"},hidden:{display:"none"},videoPreview:{top:0,left:0,display:"block",position:"absolute",overflow:"hidden",width:"100%",height:"100%",objectFit:"cover",transform:void 0}},u=function(e){return o(void 0,void 0,void 0,(function(){var t,n,r,i;return a(this,(function(c){switch(c.label){case 0:return[4,navigator.mediaDevices.enumerateDevices()];case 1:if((t=(t=c.sent()).filter((function(e){return"videoinput"===e.kind}))).length<1)throw new Error("No video input devices found");return n="environment"===e?/rear|back|environment/gi:/front|user|face/gi,[4,Promise.all(t.filter((function(e){return n.test(e.label)})).map((function(e){return o(void 0,void 0,void 0,(function(){var t;return a(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:e.deviceId}}})];case 1:return(t=n.sent()).getVideoTracks().forEach((function(e){e.getCapabilities(),e.getSettings()})),t.getTracks().forEach((function(e){return e.stop()})),[2,{deviceId:e.deviceId,streamError:!1}];case 2:return n.sent(),[2,{deviceId:e.deviceId,streamError:!0}];case 3:return[2]}}))}))})))];case 2:if(r=c.sent(),!(i=r.filter((function(e){return!e.streamError}))[0]))throw new Error("No video input devices found");return[2,i.deviceId]}}))}))},s=function(e){var t=e.data,n=e.width,r=e.height,i=self.jsQR(t,n,r,{inversionAttempts:"attemptBoth"});try{return JSON.parse(null==i?void 0:i.data)}catch(e){return null==i?void 0:i.data}},d=function(e){var t=e.resolution,n=e.preview,r=e.canvas;return o(void 0,void 0,void 0,(function(){return a(this,(function(e){return[2,new Promise((function(e){if(n&&r||e(null),n.readyState===n.HAVE_ENOUGH_DATA){var i,o,a=Math.floor(n.videoWidth),c=Math.floor(n.videoHeight),u=t/(a<c?a:c);o=((c*=u)-t)/2*-1,i=((a*=u)-t)/2*-1,r.width=t,r.height=t;var s=r.getContext("2d",{alpha:!1});s.imageSmoothingEnabled=!1,s.drawImage(n,i,o,a,c),e(s.getImageData(0,0,r.width,r.height))}else e(null)}))]}))}))},l=function(e){var t=e.facingMode,n=e.constraints,r=e.resolution;return o(void 0,void 0,void 0,(function(){var e,o,c,s,d,l;return a(this,(function(a){switch(a.label){case 0:return e=/firefox/i.test(null===navigator||void 0===navigator?void 0:navigator.userAgent),o=null===(l=null===navigator||void 0===navigator?void 0:navigator.mediaDevices)||void 0===l?void 0:l.getSupportedConstraints(),c={width:{min:r}},(null==o?void 0:o.facingMode)&&(c.facingMode={ideal:t}),(null==o?void 0:o.frameRate)&&(c.frameRate={ideal:25,min:10}),s=null,o.facingMode||e?(s=n||c,[3,3]):[3,1];case 1:return[4,u(t)];case 2:d=a.sent(),s=i({deviceId:d},n),a.label=3;case 3:return[4,navigator.mediaDevices.getUserMedia({video:s})];case 4:return[2,a.sent()]}}))}))},f=function(e){var t=e.preview,n=e.stream;return o(void 0,void 0,void 0,(function(){return a(this,(function(e){return[2,new Promise((function(e,r){try{t&&n||e(),window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,"srcObject"in t?t.srcObject=n:"mozSrcObject"in t?t.mozSrcObject=n:t.src=window.URL&&window.URL.createObjectURL(n)||n,t.setAttribute("playsInline",!0),e()}catch(e){r(e)}}))]}))}))},v=function(n){var r=n.callbacks,i=r[0],c=r[1],u=r[2],v=n.refs,p=v[0],h=v[1],w=n.constraints,m=n.facingMode,g=n.resolution,b=n.debug,y=e.useRef([]),E=e.useRef([]),R=t.useWorker(s,{remoteDependencies:["https://cdn.jsdelivr.net/npm/jsqr@1.2.0/dist/jsQR.min.js"],autoTerminate:!1}),k=R[0],j=R[1].kill,S=function(){return o(void 0,void 0,void 0,(function(){var e,t,n,r;return a(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,4,5]),[4,d({preview:h.current,canvas:p.current,resolution:g})];case 1:if(e=i.sent(),b&&b(e,"raw_data"),!e)throw"[QrReader]: error while trying to decode value";return[4,k(e)];case 2:return t=i.sent(),"function"==typeof c&&(b&&b(t,"value"),c(t)),[3,5];case 3:return n=i.sent(),"function"==typeof u&&(b&&b(n,"error"),u(n)),[3,5];case 4:return r=window.requestAnimationFrame(S),y.current.push(r),[7];case 5:return[2]}}))}))},M=function(){return o(void 0,void 0,void 0,(function(){var e,t,n;return a(this,(function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),[4,l({constraints:w,resolution:g,facingMode:m})];case 1:return e=r.sent(),E.current.push(e),[4,f({preview:h.current,stream:e})];case 2:return r.sent(),[4,h.current.play()];case 3:return r.sent(),"function"==typeof i&&(b&&b(e,"load"),i(e)),t=window.requestAnimationFrame(S),y.current.push(t),[3,5];case 4:return n=r.sent(),"function"==typeof u&&(b&&b(n,"error"),u(n)),[3,5];case 5:return[2]}}))}))};e.useEffect((function(){var e=setTimeout(M,500);return function(){j(),clearTimeout(e),function(e){e.forEach(window.cancelAnimationFrame)}(y.current),function(e){e&&(e.pause(),e.mozSrcObject=null,e.srcObject=null,e.src="")}(h.current),function(e){var t=new RTCPeerConnection;e.forEach((function(e){e.stop?(e.stop&&e.stop(),t.addStream&&t.addStream(e)):e.getTracks().forEach((function(n){n.enabled=!n.enabled,n.stop(),t.addTrack(n,e)}))}))}(E.current)}}),[])},p=function(t){var n=t.constraints,o=t.facingMode,a=t.resolution,u=t.ViewFinder,s=t.className,d=t.onError,l=t.onScan,f=t.onLoad,p=t.style,h=t.debug,w=e.useRef(null),m=e.useRef(null);return v({callbacks:[f,l,d],refs:[w,m],constraints:n,facingMode:o,resolution:a,debug:h}),r.default.createElement("section",{className:s,style:p},r.default.createElement("section",{style:c.container},!!u&&r.default.createElement(u,null),r.default.createElement("video",{muted:!0,ref:m,style:i(i({},c.videoPreview),{transform:"user"===o&&"scaleX(-1)"})}),r.default.createElement("canvas",{ref:w,style:c.hidden})))};p.displayName="QrReader",p.defaultProps={resolution:600,constraints:null,facingMode:"environment"},exports.QrReader=p;
//# sourceMappingURL=index.js.map
