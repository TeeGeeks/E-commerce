(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[8],{109:function(t,e,c){"use strict";var n=c(11),a=c(6),r=c.n(a),s=c(31),i=c(98),o=c.n(i),d=c(7),l=r.a.forwardRef((function(t,e){return Object(d.jsxs)("div",{className:o.a.input,children:[Object(d.jsx)("label",{htmlFor:t.input.id,children:t.label}),Object(d.jsx)("input",Object(s.a)({ref:e},t.input))]})})),u=c(99),j=c.n(u);e.a=function(t){var e=Object(a.useState)(!0),c=Object(n.a)(e,2),r=c[0],s=c[1],i=Object(a.useRef)();return Object(d.jsxs)("form",{className:j.a.form,onSubmit:function(e){e.preventDefault();var c=i.current.value,n=+c;0===c.trim().length||n<1||n>5?s(!1):t.onAddToCart(n)},children:[Object(d.jsx)(l,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsxs)("button",{className:j.a.button_icon_add,children:[Object(d.jsx)("i",{className:"fa-solid fa-cart-plus"})," Add"]}),!r&&Object(d.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})}},148:function(t,e,c){t.exports={product_container:"SingleProduct_product_container__7S4hH",img:"SingleProduct_img__3dp_H",name_price:"SingleProduct_name_price__u84W3",product_description:"SingleProduct_product_description__JLuwg"}},177:function(t,e,c){"use strict";c.r(e);var n=c(31),a=c(3),r=c(11),s=c(0),i=c.n(s),o=c(6),d=c(12),l=c(39),u=c(28),j=c(109),m=c(148),b=c.n(m),_=c(35),p=c(27),O=c(84),x=c(41),h=c(7);e.default=function(t){var e=Object(o.useState)([]),c=Object(r.a)(e,2),s=c[0],m=c[1],f=Object(o.useState)(!1),v=Object(r.a)(f,2),g=v[0],C=v[1],N=Object(d.h)(),I=Object(o.useContext)(_.a),k=Object(o.useContext)(p.a),w=k.hideCartHandler,P=k.cartIsShown;return Object(o.useEffect)((function(){var t=function(){var t=Object(a.a)(i.a.mark((function t(){var e,c,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(!0),e=Object(l.b)(u.b,"posts"),t.next=4,Object(l.e)(e);case 4:c=t.sent,a=c.docs.map((function(t){return Object(n.a)(Object(n.a)({},t.data()),{},{id:t.id})})),r=a.find((function(t){return t.id===N.productId})),console.log(r),m(r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().catch((function(t){console.log(t)})),C(!1)}),[N.productId]),Object(h.jsxs)("div",{children:[P&&Object(h.jsx)(O.a,{onClose:w}),g&&Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(x.a,{})}),Object(h.jsxs)("div",{className:b.a.product_container,children:[Object(h.jsx)("div",{className:b.a.product_image,children:Object(h.jsx)("img",{className:b.a.img,src:s.imageUrl,alt:""})}),Object(h.jsxs)("div",{className:b.a.product_detail,children:[Object(h.jsxs)("div",{className:b.a.name_price,children:[Object(h.jsx)("h3",{children:s.name}),Object(h.jsxs)("p",{children:["\u20a6",s.productPrice]})]}),Object(h.jsx)(j.a,{onAddToCart:function(t){I.addItem({id:s.id,images:s.imageUrl,name:s.name,amount:t,price:s.productPrice})}}),Object(h.jsxs)("div",{className:b.a.product_description,children:[Object(h.jsx)("h4",{children:"Product Details"}),Object(h.jsx)("p",{children:s.productDesc})]})]})]})]})}},81:function(t,e,c){t.exports={backdrop:"Modal_backdrop__2B1ot",modal:"Modal_modal__MgJbw","slide-down":"Modal_slide-down__8bgvA"}},82:function(t,e,c){t.exports={"cart-item":"CartItem_cart-item__30wJA",img:"CartItem_img__2rnf-",summary:"CartItem_summary__1ZPGp",price:"CartItem_price__2XYw7",amount:"CartItem_amount__1Bmvd",actions:"CartItem_actions__69nnv"}},83:function(t,e,c){t.exports={"cart-items":"Cart_cart-items__1LfbG",total:"Cart_total__2t_0E",actions:"Cart_actions__2PWhj","button--alt":"Cart_button--alt__1JGM_",button:"Cart_button__55mkj",button_link:"Cart_button_link__3jWOD"}},84:function(t,e,c){"use strict";var n=c(31),a=c(6),r=c(34),s=c.n(r),i=c(27),o=c(81),d=c.n(o),l=c(7),u=function(t){return Object(l.jsx)("div",{className:d.a.backdrop,onClick:t.onHideCart})},j=function(t){return Object(l.jsx)("div",{className:d.a.modal,children:Object(l.jsx)("div",{className:d.a.content,children:t.children})})};var m=function(t){var e=Object(a.useContext)(i.a).hideCartHandler;return Object(l.jsxs)(a.Fragment,{children:[s.a.createPortal(Object(l.jsx)(u,{onHideCart:e}),document.getElementById("backdrop")),s.a.createPortal(Object(l.jsx)(j,{children:t.children}),document.getElementById("backdrop"))]})},b=c(82),_=c.n(b),p=function(t){return Object(l.jsxs)("li",{className:_.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:_.a.img,src:t.images,alt:""}),Object(l.jsx)("h2",{children:t.name}),Object(l.jsxs)("div",{className:_.a.summary,children:[Object(l.jsxs)("span",{className:_.a.price,children:["\u20a6",t.price]}),Object(l.jsxs)("span",{className:_.a.amount,children:["x ",t.amount]})]})]}),Object(l.jsxs)("div",{className:_.a.actions,children:[Object(l.jsx)("button",{onClick:t.onRemove,children:"\u2212"}),Object(l.jsx)("button",{onClick:t.onAdd,children:"+"})]})]})},O=c(83),x=c.n(O),h=c(35),f=c(16);e.a=function(t){var e=Object(a.useContext)(h.a),c=e.items.length>0,r="".concat(e.totalAmount),s=function(t){e.removeItem(t)},i=function(t){e.addItem(Object(n.a)(Object(n.a)({},t),{},{amount:1}))},o=Object(l.jsx)("ul",{className:x.a["cart-items"],children:e.items.map((function(t){return Object(l.jsx)(p,{images:t.images,name:t.name,amount:t.amount,price:t.price,onRemove:s.bind(null,t.id),onAdd:i.bind(null,t)},t.id)}))});return Object(l.jsxs)(m,{onClose:t.onClose,children:[o,Object(l.jsxs)("div",{className:x.a.total,children:[Object(l.jsx)("span",{children:"Total Amount"}),Object(l.jsxs)("span",{children:["\u20a6",r]})]}),Object(l.jsxs)("div",{className:x.a.actions,children:[Object(l.jsx)("button",{className:x.a["button--alt"],onClick:t.onClose,children:"Close"}),c&&Object(l.jsx)("button",{className:x.a.button,children:Object(l.jsx)(f.b,{to:"/checkout",children:"Order"})})]})]})}},98:function(t,e,c){t.exports={input:"Input_input__34jXE"}},99:function(t,e,c){t.exports={form:"MealItemForm_form__1HF1c",button_icon_add:"MealItemForm_button_icon_add__26VIc"}}}]);
//# sourceMappingURL=8.e037fa1b.chunk.js.map