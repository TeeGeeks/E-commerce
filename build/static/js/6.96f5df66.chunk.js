/*! For license information please see 6.96f5df66.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{100:function(e,t,n){"use strict";var a=n(31),r=n(6),i=n(67),o=n.n(i),s=n(7);t.a=function(e){return r.forwardRef((function(t,n){return Object(s.jsx)("div",Object(a.a)(Object(a.a)({},t),{},{ref:n,className:o()(t.className,e)}))}))}},110:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return p}));var a=n(65),r=n(88),i=n(6),o=n.n(i),s=n(34),c=n.n(s),l=!1,u=n(93),f="unmounted",d="exited",b="entering",p="entered",v="exiting",m=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r=d,a.appearStatus=b):r=p:r=t.unmountOnExit||t.mountOnEnter?f:d,a.state={status:r},a.nextCallback=null,a}Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===f?{status:d}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==b&&n!==p&&(t=b):n!==b&&n!==p||(t=v)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===b?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:f})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[c.a.findDOMNode(this),a],i=r[0],o=r[1],s=this.getTimeouts(),u=a?s.appear:s.enter;!e&&!n||l?this.safeSetState({status:p},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:b},(function(){t.props.onEntering(i,o),t.onTransitionEnd(u,(function(){t.safeSetState({status:p},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:c.a.findDOMNode(this);t&&!l?(this.props.onExit(a),this.safeSetState({status:v},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:d},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:d},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===f)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(a.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(u.a.Provider,{value:null},"function"===typeof n?n(e,r):o.a.cloneElement(o.a.Children.only(n),r))},t}(o.a.Component);function j(){}m.contextType=u.a,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:j,onEntering:j,onEntered:j,onExit:j,onExiting:j,onExited:j},m.UNMOUNTED=f,m.EXITED=d,m.ENTERING=b,m.ENTERED=p,m.EXITING=v;t.c=m},115:function(e,t,n){"use strict";e.exports=function(e,t,n,a,r,i,o,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,a,r,i,o,s],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},116:function(e,t,n){"use strict";n(6)},117:function(e,t,n){"use strict";var a=function(){};e.exports=a},141:function(e,t,n){"use strict";(function(e){var a=n(6),r="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,i="undefined"!==typeof document;t.a=i||r?a.useLayoutEffect:a.useEffect}).call(this,n(42))},142:function(e,t,n){"use strict";function a(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return a}))},143:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},144:function(e,t,n){"use strict";var a=n(145);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,o){if(o!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},145:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},178:function(e,t,n){"use strict";var a=n(31),r=n(66),i=n(67),o=n.n(i),s=n(6),c=n.n(s),l=n(26),u=n(65);n(115);function f(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function d(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function b(e,t){return Object.keys(t).reduce((function(n,a){var r,i=n,o=i[f(a)],c=i[a],b=Object(u.a)(i,[f(a),a].map(d)),p=t[a],v=function(e,t,n){var a=Object(s.useRef)(void 0!==e),r=Object(s.useState)(t),i=r[0],o=r[1],c=void 0!==e,l=a.current;return a.current=c,!c&&l&&i!==t&&o(t),[c?e:i,Object(s.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(a)),o(e)}),[n])]}(c,o,e[p]),m=v[0],j=v[1];return Object(l.a)({},b,((r={})[a]=m,r[p]=j,r))}),e)}n(88);function p(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function v(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function m(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}p.__suppressDeprecationWarning=!0,v.__suppressDeprecationWarning=!0,m.__suppressDeprecationWarning=!0;var j=function(e){var t=Object(s.useRef)(e);return Object(s.useEffect)((function(){t.current=e}),[e]),t};function O(e){var t=j(e);return Object(s.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var h=n(11);n(116);n(141),new WeakMap;var x=n(7),y=["as","disabled"];function E(e){var t=e.tagName,n=e.disabled,a=e.href,r=e.target,i=e.rel,o=e.onClick,s=e.tabIndex,c=void 0===s?0:s,l=e.type;t||(t=null!=a||null!=r||null!=i?"a":"button");var u={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},u];var f=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),n?e.stopPropagation():null==o||o(e)};return"a"===t&&(a||(a="#"),n&&(a=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:c,href:a,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?i:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},u]}var g=s.forwardRef((function(e,t){var n=e.as,a=e.disabled,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,y),i=E(Object.assign({tagName:n,disabled:a},r)),o=Object(h.a)(i,2),s=o[0],c=o[1].tagName;return Object(x.jsx)(c,Object.assign({},r,s,{ref:t}))}));g.displayName="Button";var N=["onKeyDown"];var w=s.forwardRef((function(e,t){var n,a=e.onKeyDown,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,N),i=E(Object.assign({tagName:"a"},r)),o=Object(h.a)(i,1)[0],s=O((function(e){o.onKeyDown(e),null==a||a(e)}));return((n=r.href)&&"#"!==n.trim()||r.role)&&"button"!==r.role?Object(x.jsx)("a",Object.assign({ref:t},r,{onKeyDown:a})):Object(x.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:s}))}));w.displayName="Anchor";var C=w,k=n(69),P=n(4),S=n(110),R=n(142);function T(e,t){return function(e){var t=Object(R.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var I=/([A-Z])/g;var L=/^ms-/;function F(e){return function(e){return e.replace(I,"-$1").toLowerCase()}(e).replace(L,"-ms-")}var D=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var _=function(e,t){var n="",a="";if("string"===typeof t)return e.style.getPropertyValue(F(t))||T(e).getPropertyValue(F(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!D.test(e))}(r)?n+=F(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(F(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n},V=n(143),M=!1,z=!1;try{var A={get passive(){return M=!0},get once(){return z=M=!0}};V.a&&(window.addEventListener("test",A,A),window.removeEventListener("test",A,!0))}catch(he){}var U=function(e,t,n,a){if(a&&"boolean"!==typeof a&&!z){var r=a.once,i=a.capture,o=n;!z&&r&&(o=n.__once||function e(a){this.removeEventListener(t,e,i),n.call(this,a)},n.__once=o),e.addEventListener(t,o,M?a:i)}e.addEventListener(t,n,a)};var H=function(e,t,n,a){var r=a&&"boolean"!==typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var W=function(e,t,n,a){return U(e,t,n,a),function(){H(e,t,n,a)}};function K(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e,t,n,a){if(void 0===n&&(n=!1),void 0===a&&(a=!0),e){var r=document.createEvent("HTMLEvents");r.initEvent(t,n,a),e.dispatchEvent(r)}}(e,"transitionend",!0)}),t+n),i=W(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),i()}}function B(e,t,n,a){null==n&&(n=function(e){var t=_(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var r=K(e,n,a),i=W(e,"transitionend",t);return function(){r(),i()}}function G(e,t){var n=_(e,t)||"",a=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*a}function X(e,t){var n=G(e,"transitionDuration"),a=G(e,"transitionDelay"),r=B(e,(function(n){n.target===e&&(r(),t(n))}),n+a)}var Y=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var J=function(e,t){return Object(s.useMemo)((function(){return function(e,t){var n=Y(e),a=Y(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])},Z=n(34),$=n.n(Z);var q,Q=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],ee=c.a.forwardRef((function(e,t){var n=e.onEnter,i=e.onEntering,o=e.onEntered,l=e.onExit,u=e.onExiting,f=e.onExited,d=e.addEndListener,b=e.children,p=e.childRef,v=Object(r.a)(e,Q),m=Object(s.useRef)(null),j=J(m,p),O=function(e){var t;j((t=e)&&"setState"in t?$.a.findDOMNode(t):null!=t?t:null)},h=function(e){return function(t){e&&m.current&&e(m.current,t)}},y=Object(s.useCallback)(h(n),[n]),E=Object(s.useCallback)(h(i),[i]),g=Object(s.useCallback)(h(o),[o]),N=Object(s.useCallback)(h(l),[l]),w=Object(s.useCallback)(h(u),[u]),C=Object(s.useCallback)(h(f),[f]),k=Object(s.useCallback)(h(d),[d]);return Object(x.jsx)(S.c,Object(a.a)(Object(a.a)({ref:t},v),{},{onEnter:y,onEntered:g,onEntering:E,onExit:N,onExited:C,onExiting:w,addEndListener:k,nodeRef:m,children:"function"===typeof b?function(e,t){return b(e,Object(a.a)(Object(a.a)({},t),{},{ref:O}))}:c.a.cloneElement(b,{ref:O})}))})),te=["className","children","transitionClasses"],ne=(q={},Object(P.a)(q,S.b,"show"),Object(P.a)(q,S.a,"show"),q),ae=s.forwardRef((function(e,t){var n=e.className,i=e.children,c=e.transitionClasses,l=void 0===c?{}:c,u=Object(r.a)(e,te),f=Object(s.useCallback)((function(e,t){!function(e){e.offsetHeight}(e),null==u.onEnter||u.onEnter(e,t)}),[u]);return Object(x.jsx)(ee,Object(a.a)(Object(a.a)({ref:t,addEndListener:X},u),{},{onEnter:f,childRef:i.ref,children:function(e,t){return s.cloneElement(i,Object(a.a)(Object(a.a)({},t),{},{className:o()("fade",n,i.props.className,ne[e],l[e])}))}}))}));ae.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ae.displayName="Fade";var re=ae,ie=n(68),oe=n.n(ie),se=["className","variant"],ce={"aria-label":oe.a.string,onClick:oe.a.func,variant:oe.a.oneOf(["white"])},le=s.forwardRef((function(e,t){var n=e.className,i=e.variant,s=Object(r.a)(e,se);return Object(x.jsx)("button",Object(a.a)({ref:t,type:"button",className:o()("btn-close",i&&"btn-close-".concat(i),n)},s))}));le.displayName="CloseButton",le.propTypes=ce,le.defaultProps={"aria-label":"Close"};var ue=le,fe=n(100),de=n(95),be=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],pe=Object(fe.a)("h4");pe.displayName="DivStyledAsH4";var ve=Object(de.a)("alert-heading",{Component:pe}),me=Object(de.a)("alert-link",{Component:C}),je={variant:"primary",show:!0,transition:re,closeLabel:"Close alert"},Oe=s.forwardRef((function(e,t){var n=b(e,{show:"onClose"}),i=n.bsPrefix,s=n.show,c=n.closeLabel,l=n.closeVariant,u=n.className,f=n.children,d=n.variant,p=n.onClose,v=n.dismissible,m=n.transition,j=Object(r.a)(n,be),h=Object(k.b)(i,"alert"),y=O((function(e){p&&p(!1,e)})),E=!0===m?re:m,g=Object(x.jsxs)("div",Object(a.a)(Object(a.a)({role:"alert"},E?void 0:j),{},{ref:t,className:o()(u,h,d&&"".concat(h,"-").concat(d),v&&"".concat(h,"-dismissible")),children:[v&&Object(x.jsx)(ue,{onClick:y,"aria-label":c,variant:l}),f]}));return E?Object(x.jsx)(E,Object(a.a)(Object(a.a)({unmountOnExit:!0},j),{},{ref:void 0,in:s,children:g})):s?g:null}));Oe.displayName="Alert",Oe.defaultProps=je;t.a=Object.assign(Oe,{Link:me,Heading:ve})},180:function(e,t,n){"use strict";var a=n(31),r=n(66),i=n(67),o=n.n(i),s=n(68),c=n.n(s),l=n(6),u=n(7),f=["as","className","type","tooltip"],d={type:c.a.string,tooltip:c.a.bool,as:c.a.elementType},b=l.forwardRef((function(e,t){var n=e.as,i=void 0===n?"div":n,s=e.className,c=e.type,l=void 0===c?"valid":c,d=e.tooltip,b=void 0!==d&&d,p=Object(r.a)(e,f);return Object(u.jsx)(i,Object(a.a)(Object(a.a)({},p),{},{ref:t,className:o()(s,"".concat(l,"-").concat(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=d;var p=b,v=l.createContext({}),m=n(69),j=["id","bsPrefix","className","type","isValid","isInvalid","as"],O=l.forwardRef((function(e,t){var n=e.id,i=e.bsPrefix,s=e.className,c=e.type,f=void 0===c?"checkbox":c,d=e.isValid,b=void 0!==d&&d,p=e.isInvalid,O=void 0!==p&&p,h=e.as,x=void 0===h?"input":h,y=Object(r.a)(e,j),E=Object(l.useContext)(v).controlId;return i=Object(m.b)(i,"form-check-input"),Object(u.jsx)(x,Object(a.a)(Object(a.a)({},y),{},{ref:t,type:f,id:n||E,className:o()(s,i,b&&"is-valid",O&&"is-invalid")}))}));O.displayName="FormCheckInput";var h=O,x=["bsPrefix","className","htmlFor"],y=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.htmlFor,c=Object(r.a)(e,x),f=Object(l.useContext)(v).controlId;return n=Object(m.b)(n,"form-check-label"),Object(u.jsx)("label",Object(a.a)(Object(a.a)({},c),{},{ref:t,htmlFor:s||f,className:o()(i,n)}))}));y.displayName="FormCheckLabel";var E=y;var g=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],N=l.forwardRef((function(e,t){var n=e.id,i=e.bsPrefix,s=e.bsSwitchPrefix,c=e.inline,f=void 0!==c&&c,d=e.disabled,b=void 0!==d&&d,j=e.isValid,O=void 0!==j&&j,x=e.isInvalid,y=void 0!==x&&x,N=e.feedbackTooltip,w=void 0!==N&&N,C=e.feedback,k=e.feedbackType,P=e.className,S=e.style,R=e.title,T=void 0===R?"":R,I=e.type,L=void 0===I?"checkbox":I,F=e.label,D=e.children,_=e.as,V=void 0===_?"input":_,M=Object(r.a)(e,g);i=Object(m.b)(i,"form-check"),s=Object(m.b)(s,"form-switch");var z=Object(l.useContext)(v).controlId,A=Object(l.useMemo)((function(){return{controlId:n||z}}),[z,n]),U=!D&&null!=F&&!1!==F||function(e,t){return l.Children.toArray(e).some((function(e){return l.isValidElement(e)&&e.type===t}))}(D,E),H=Object(u.jsx)(h,Object(a.a)(Object(a.a)({},M),{},{type:"switch"===L?"checkbox":L,ref:t,isValid:O,isInvalid:y,disabled:b,as:V}));return Object(u.jsx)(v.Provider,{value:A,children:Object(u.jsx)("div",{style:S,className:o()(P,U&&i,f&&"".concat(i,"-inline"),"switch"===L&&s),children:D||Object(u.jsxs)(u.Fragment,{children:[H,U&&Object(u.jsx)(E,{title:T,children:F}),C&&Object(u.jsx)(p,{type:k,tooltip:w,children:C})]})})})}));N.displayName="FormCheck";var w=Object.assign(N,{Input:h,Label:E}),C=n(4),k=(n(117),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),P=l.forwardRef((function(e,t){var n,i,s=e.bsPrefix,c=e.type,f=e.size,d=e.htmlSize,b=e.id,p=e.className,j=e.isValid,O=void 0!==j&&j,h=e.isInvalid,x=void 0!==h&&h,y=e.plaintext,E=e.readOnly,g=e.as,N=void 0===g?"input":g,w=Object(r.a)(e,k),P=Object(l.useContext)(v).controlId;(s=Object(m.b)(s,"form-control"),y)?n=Object(C.a)({},"".concat(s,"-plaintext"),!0):(i={},Object(C.a)(i,s,!0),Object(C.a)(i,"".concat(s,"-").concat(f),f),n=i);return Object(u.jsx)(N,Object(a.a)(Object(a.a)({},w),{},{type:c,size:d,ref:t,readOnly:E,id:b||P,className:o()(p,n,O&&"is-valid",x&&"is-invalid","color"===c&&"".concat(s,"-color"))}))}));P.displayName="FormControl";var S=Object.assign(P,{Feedback:p}),R=n(95),T=Object(R.a)("form-floating"),I=["controlId","as"],L=l.forwardRef((function(e,t){var n=e.controlId,i=e.as,o=void 0===i?"div":i,s=Object(r.a)(e,I),c=Object(l.useMemo)((function(){return{controlId:n}}),[n]);return Object(u.jsx)(v.Provider,{value:c,children:Object(u.jsx)(o,Object(a.a)(Object(a.a)({},s),{},{ref:t}))})}));L.displayName="FormGroup";var F=L,D=n(11),_=["as","bsPrefix","className"],V=["className"];var M=l.forwardRef((function(e,t){var n=function(e){var t=e.as,n=e.bsPrefix,i=e.className,s=Object(r.a)(e,_);n=Object(m.b)(n,"col");var c=Object(m.a)(),l=[],u=[];return c.forEach((function(e){var t,a,r,i=s[e];delete s[e],"object"===typeof i&&null!=i?(t=i.span,a=i.offset,r=i.order):t=i;var o="xs"!==e?"-".concat(e):"";t&&l.push(!0===t?"".concat(n).concat(o):"".concat(n).concat(o,"-").concat(t)),null!=r&&u.push("order".concat(o,"-").concat(r)),null!=a&&u.push("offset".concat(o,"-").concat(a))})),[Object(a.a)(Object(a.a)({},s),{},{className:o.a.apply(void 0,[i].concat(l,u))}),{as:t,bsPrefix:n,spans:l}]}(e),i=Object(D.a)(n,2),s=i[0],c=s.className,l=Object(r.a)(s,V),f=i[1],d=f.as,b=void 0===d?"div":d,p=f.bsPrefix,v=f.spans;return Object(u.jsx)(b,Object(a.a)(Object(a.a)({},l),{},{ref:t,className:o()(c,!v.length&&p)}))}));M.displayName="Col";var z=M,A=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],U=l.forwardRef((function(e,t){var n=e.as,i=void 0===n?"label":n,s=e.bsPrefix,c=e.column,f=e.visuallyHidden,d=e.className,b=e.htmlFor,p=Object(r.a)(e,A),j=Object(l.useContext)(v).controlId;s=Object(m.b)(s,"form-label");var O="col-form-label";"string"===typeof c&&(O="".concat(O," ").concat(O,"-").concat(c));var h=o()(d,s,f&&"visually-hidden",c&&O);return b=b||j,c?Object(u.jsx)(z,Object(a.a)({ref:t,as:"label",className:h,htmlFor:b},p)):Object(u.jsx)(i,Object(a.a)({ref:t,className:h,htmlFor:b},p))}));U.displayName="FormLabel",U.defaultProps={column:!1,visuallyHidden:!1};var H=U,W=["bsPrefix","className","id"],K=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.id,c=Object(r.a)(e,W),f=Object(l.useContext)(v).controlId;return n=Object(m.b)(n,"form-range"),Object(u.jsx)("input",Object(a.a)(Object(a.a)({},c),{},{type:"range",ref:t,className:o()(i,n),id:s||f}))}));K.displayName="FormRange";var B=K,G=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],X=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.size,s=e.htmlSize,c=e.className,f=e.isValid,d=void 0!==f&&f,b=e.isInvalid,p=void 0!==b&&b,j=e.id,O=Object(r.a)(e,G),h=Object(l.useContext)(v).controlId;return n=Object(m.b)(n,"form-select"),Object(u.jsx)("select",Object(a.a)(Object(a.a)({},O),{},{size:s,ref:t,className:o()(c,n,i&&"".concat(n,"-").concat(i),d&&"is-valid",p&&"is-invalid"),id:j||h}))}));X.displayName="FormSelect";var Y=X,J=["bsPrefix","className","as","muted"],Z=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.as,c=void 0===s?"small":s,l=e.muted,f=Object(r.a)(e,J);return n=Object(m.b)(n,"form-text"),Object(u.jsx)(c,Object(a.a)(Object(a.a)({},f),{},{ref:t,className:o()(i,n,l&&"text-muted")}))}));Z.displayName="FormText";var $=Z,q=l.forwardRef((function(e,t){return Object(u.jsx)(w,Object(a.a)(Object(a.a)({},e),{},{ref:t,type:"switch"}))}));q.displayName="Switch";var Q=Object.assign(q,{Input:w.Input,Label:w.Label}),ee=["bsPrefix","className","children","controlId","label"],te=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.children,c=e.controlId,l=e.label,f=Object(r.a)(e,ee);return n=Object(m.b)(n,"form-floating"),Object(u.jsxs)(F,Object(a.a)(Object(a.a)({ref:t,className:o()(i,n),controlId:c},f),{},{children:[s,Object(u.jsx)("label",{htmlFor:c,children:l})]}))}));te.displayName="FloatingLabel";var ne=te,ae=["className","validated","as"],re={_ref:c.a.any,validated:c.a.bool,as:c.a.elementType},ie=l.forwardRef((function(e,t){var n=e.className,i=e.validated,s=e.as,c=void 0===s?"form":s,l=Object(r.a)(e,ae);return Object(u.jsx)(c,Object(a.a)(Object(a.a)({},l),{},{ref:t,className:o()(n,i&&"was-validated")}))}));ie.displayName="Form",ie.propTypes=re;t.a=Object.assign(ie,{Group:F,Control:S,Floating:T,Check:w,Switch:Q,Label:H,Text:$,Range:B,Select:Y,FloatingLabel:ne})},65:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(65);function r(e,t){if(null==e)return{};var n,r,i=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},67:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},68:function(e,t,n){e.exports=n(144)()},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));n(31);var a=n(6),r=(n(7),["xxl","xl","lg","md","sm","xs"]),i=a.createContext({prefixes:{},breakpoints:r});i.Consumer,i.Provider;function o(e,t){var n=Object(a.useContext)(i).prefixes;return e||n[t]||t}function s(){return Object(a.useContext)(i).breakpoints}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(29);function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Object(a.a)(e,t)}},93:function(e,t,n){"use strict";var a=n(6),r=n.n(a);t.a=r.a.createContext(null)},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(31),r=n(66),i=n(67),o=n.n(i),s=/-(.)/g;var c=n(6),l=n(69),u=n(7),f=["className","bsPrefix","as"],d=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,i=void 0===n?d(e):n,s=t.Component,b=t.defaultProps,p=c.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,d=t.as,b=void 0===d?s||"div":d,p=Object(r.a)(t,f),v=Object(l.b)(c,e);return Object(u.jsx)(b,Object(a.a)({ref:n,className:o()(i,v)},p))}));return p.defaultProps=b,p.displayName=i,p}}}]);
//# sourceMappingURL=6.96f5df66.chunk.js.map