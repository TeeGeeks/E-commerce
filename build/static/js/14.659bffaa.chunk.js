(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[14],{147:function(e,t,n){e.exports={login:"Register_login__3mQaN",loginTitle:"Register_loginTitle__3H8gv",loginForm:"Register_loginForm__PGuec",loginInput:"Register_loginInput__1yZOS"}},176:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(6),s=n(71),r=n(72),o=n(147),c=n.n(o),l=n(27),i=n(12),u=n(40),d=n(7);function b(e){var t=Object(a.useContext)(l.a).resetPassword,n=function(){var e=Object(i.f)();return new URLSearchParams(e.search)}(),o=Object(i.g)(),b=Object(s.a)((function(e){return e.trim().length>6})),g=b.value,j=b.hasError,p=b.valueIsValid,h=b.valueHandler,v=b.valueBlurHandler,m=b.reset,f=!1;p&&(f=!0);var O=j?"control invalid":"control";return Object(d.jsx)(a.Fragment,{children:Object(d.jsxs)("div",{className:c.a.login,children:[Object(d.jsx)("span",{className:c.a.loginTitle,children:"Reset Password"}),Object(d.jsxs)("form",{className:c.a.loginForm,onSubmit:function(e){e.preventDefault(),f&&(t(n.get("oobCode"),g).then((function(e){console.log(e),u.b.success("Your password has been reset",{position:"bottom-left"}),o("/sign-in")})).catch((function(e){console.log(e.message),u.b.error("Please enter a valid password",{position:"bottom-left"})})),m())},children:[Object(d.jsxs)("div",{className:O,children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",placeholder:"Password",className:c.a.loginInput,onChange:h,value:g,onBlur:v}),j&&Object(d.jsx)("p",{className:"error-text",children:"Enter valid password (more than 6 character)"})]}),Object(d.jsx)(r.a,{className:c.a.btn,disabled:!f,children:"Reset"})]})]})})}},71:function(e,t,n){"use strict";var a=n(11),s=n(6);t.a=function(e){var t=Object(s.useState)(""),n=Object(a.a)(t,2),r=n[0],o=n[1],c=Object(s.useState)(!1),l=Object(a.a)(c,2),i=l[0],u=l[1],d=e(r);return{value:r,hasError:!d&&i,valueIsValid:d,valueHandler:function(e){o(e.target.value)},valueBlurHandler:function(e){u(!0)},reset:function(){o(""),u(!1)}}}},72:function(e,t,n){"use strict";n(6);var a=n(73),s=n.n(a),r=n(7);t.a=function(e){var t="".concat(e.className," ").concat(s.a.btn);return Object(r.jsx)("button",{className:t,disabled:e.disabled,onClick:e.onClick,type:e.type,children:e.children})}},73:function(e,t,n){e.exports={btn:"Buttons_btn__2wJow"}}}]);
//# sourceMappingURL=14.659bffaa.chunk.js.map