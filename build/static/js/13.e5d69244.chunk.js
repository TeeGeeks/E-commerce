(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[13],{106:function(e,t,a){e.exports={login:"Login_login__-d0Wd",loginTitle:"Login_loginTitle__1lLVO",loginForm:"Login_loginForm__2OLfB",loginInput:"Login_loginInput__39csA",btn:"Login_btn__7MQrx",links:"Login_links__16Msr",error_span:"Login_error_span__1Fas2"}},174:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(11),s=a(6),r=a.n(s),l=a(106),c=a.n(l),i=a(12),o=a(71),u=a(72),d=a(24),b=a(28),j=a(27),h=a(182),p=a(179),g=a(40),v=a(7);function O(e){var t=Object(s.useState)(!1),a=Object(n.a)(t,2),l=a[0],O=a[1],m=r.a.useState(!1),f=Object(n.a)(m,2),x=f[0],_=f[1],N=Object(s.useState)(!1),w=Object(n.a)(N,2),y=w[0],E=w[1],L=Object(s.useContext)(j.a).dispatch,I=Object(i.g)(),k=Object(o.a)((function(e){return e.trim().length>6})),B=k.value,C=k.hasError,H=k.valueIsValid,S=k.valueHandler,F=k.valueBlurHandler,R=k.reset,P=Object(o.a)((function(e){return e.includes("@")})),T=P.value,V=P.hasError,J=P.valueIsValid,A=P.valueHandler,D=P.valueBlurHandler,M=P.reset,Y=!1;J&&H&&(Y=!0);var G=function(e,t){"clickaway"!==t&&_(!1)},Q=V?"control invalid":"control",W=C?"control invalid":"control";return Object(v.jsx)(s.Fragment,{children:Object(v.jsxs)("div",{className:c.a.login,children:[Object(v.jsx)("span",{className:c.a.loginTitle,children:"Register"}),Object(v.jsxs)("form",{className:c.a.loginForm,onSubmit:function(e){e.preventDefault(),E(!0),Y&&(Object(d.c)(b.a,T,B).then((function(e){var t=e.user;console.log(t),g.b.success("Your account has been successfully registered",{position:"bottom-left"}),L({type:"REGISTER"}),I("/sign-in")})).catch((function(e){O(e),g.b.error("Please enter a valid email or password",{position:"bottom-left"}),E(!1)})),M(),R())},children:[Object(v.jsxs)("div",{className:Q,children:[Object(v.jsx)("label",{children:"Email"}),Object(v.jsx)("input",{type:"email",placeholder:"Enter your Email",className:c.a.loginInput,onChange:A,value:T,onBlur:D}),V&&Object(v.jsx)("p",{className:"error-text",children:"Please enter a valid email"})]}),Object(v.jsxs)("div",{className:W,children:[Object(v.jsx)("label",{children:"Password"}),Object(v.jsx)("input",{type:"password",placeholder:"Password",className:c.a.loginInput,onChange:S,value:B,onBlur:F}),C&&Object(v.jsx)("p",{className:"error-text",children:"Enter valid password (more than 6 character)"})]}),Object(v.jsxs)(u.a,{className:c.a.btn,disabled:!Y,children:[y&&Object(v.jsx)("i",{className:"fa fa-refresh fa-spin"}),"Register"]}),l?Object(v.jsx)("span",{className:"error-text",children:"Email has already been registered!!!"}):Object(v.jsx)(h.a,{open:x,autoHideDuration:6e3,onClose:G,children:Object(v.jsx)(p.a,{elevation:6,variant:"filled",onClose:G,severity:"success",sx:{width:"100%"},children:"Your Account has been successfully Registered!"})})]})]})})}},71:function(e,t,a){"use strict";var n=a(11),s=a(6);t.a=function(e){var t=Object(s.useState)(""),a=Object(n.a)(t,2),r=a[0],l=a[1],c=Object(s.useState)(!1),i=Object(n.a)(c,2),o=i[0],u=i[1],d=e(r);return{value:r,hasError:!d&&o,valueIsValid:d,valueHandler:function(e){l(e.target.value)},valueBlurHandler:function(e){u(!0)},reset:function(){l(""),u(!1)}}}},72:function(e,t,a){"use strict";a(6);var n=a(73),s=a.n(n),r=a(7);t.a=function(e){var t="".concat(e.className," ").concat(s.a.btn);return Object(r.jsx)("button",{className:t,disabled:e.disabled,onClick:e.onClick,type:e.type,children:e.children})}},73:function(e,t,a){e.exports={btn:"Buttons_btn__2wJow"}}}]);
//# sourceMappingURL=13.e5d69244.chunk.js.map