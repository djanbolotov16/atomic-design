(this["webpackJsonptest-booklet"]=this["webpackJsonptest-booklet"]||[]).push([[0],{11:function(e,t,c){e.exports={button:"style_button__1YnaT",selected:"style_selected__1f-Dg",disabled:"style_disabled__1v6NP"}},12:function(e,t,c){e.exports={main:"style_main__39RBq",selected:"style_selected__3VnEo"}},15:function(e,t,c){e.exports={wrapper:"style_wrapper__1ouvR",tip:"style_tip__rUALy"}},16:function(e,t,c){e.exports={container:"style_container__2ZVvy",show:"style_show__vcWth"}},2:function(e,t,c){e.exports={container:"main-page-styled_container__36X31",montsterrat:"main-page-styled_montsterrat__oPqTQ",m2:"main-page-styled_m2__1C0To",card:"main-page-styled_card__1t7QM",text_container:"main-page-styled_text_container__Pev6K",photo:"main-page-styled_photo__3dqls"}},20:function(e,t,c){e.exports={button:"style_button__H2Wdu"}},21:function(e,t,c){e.exports={main:"style_main__3ZcdF"}},22:function(e,t,c){e.exports={main:"style_main__2aJRd"}},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(19),l=c.n(s),i=c(23),r=c(3),o=c(25),d=c(26),b=c(8),j=c(11),u=c.n(j),m=c(0),h=function(e){var t=e.children,c=e.className,n=e.disabled,a=e.selected,s=e.onClick;return Object(m.jsx)("button",{onClick:s,className:"".concat(u.a.button," ").concat(n?u.a.disabled:""," ").concat(a?u.a.selected:""," ").concat(c),type:"button",children:t})};h.defaultProps={className:"",disabled:!1,selected:!1};var x=h,O=c(15),v=c.n(O),_=function(e){var t=e.label,c=e.children,n=e.className;return Object(m.jsxs)("div",{className:"".concat(v.a.wrapper," ").concat(n),children:[Object(m.jsx)("div",{className:v.a.tip,children:t}),c]})};_.defaultProps={className:""};var p=_,A=c(12),f=c.n(A),N=function(e){var t=e.color,c=e.label,n=e.className,a=e.onClick;return e.selected?Object(m.jsx)("button",{type:"button",onClick:a,className:"".concat(f.a.main," ").concat(f.a.selected," ").concat(n),style:{backgroundColor:t}}):Object(m.jsx)(p,{label:c,className:n,children:Object(m.jsx)("button",{type:"button",onClick:a,className:f.a.main,style:{backgroundColor:t}})})};N.defaultProps={className:"",selected:!1};var C=N,y=c(20),k=c.n(y),g=function(e){var t=e.submit,c=e.children,n=e.className,a=e.disabled,s=e.onClick;return Object(m.jsx)("button",{disabled:a,onClick:s,type:t?"submit":"button",className:"".concat(k.a.button," ").concat(n),children:c})};g.defaultProps={submit:!1,className:"",disabled:!1};var w=g,S=c(21),z=c.n(S),P=function(e){var t=e.disabled,c=e.count,n=e.Function1,a=e.Function2;return Object(m.jsxs)("div",{className:z.a.main,children:[Object(m.jsx)(w,{disabled:t,onClick:n,className:"ml-4-vw mr-4-vw",children:"-"}),c,Object(m.jsx)(w,{onClick:a,className:"ml-4-vw mr-4-vw",children:"+"})]})};P.defaultProps={disabled:!1};var Q=P,B=c(22),D=c.n(B),X=function(e){e.className;var t=e.children,c=e.onClick;return Object(m.jsxs)("div",{role:"button",tabIndex:0,className:D.a.main,onKeyDown:c,onClick:c,children:[t,Object(m.jsx)("img",{alt:"#",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAHCAYAAADTcMcaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABPSURBVHgBhc1RDQAgCARQIhjBSDbQaDYyghGMgOcmP7iT2+4H9kAEUdWJDjQJCXYVXWizwQHK4AWWYsN8vz3QgeavPfALCJwhIDAGDnYGNua0qiZQG6lPAAAAAElFTkSuQmCC"})]})};X.defaultProps={className:""};var E=X,R=c(16),T=c.n(R),L=function(e){var t=e.children,c=e.display;return Object(m.jsx)("div",{className:c?T.a.container:T.a.show,children:t})},F=c(2),Y=c.n(F),I=c.p+"static/media/Rectangle 2.5879d043.png",M=function(e){var t=e.hidden,c=e.setHidden,n=e.counter,a=e.selectedColor,s=e.selectedSize,l=e.price;return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:Y.a.card,children:[Object(m.jsxs)("div",{className:Y.a.container,children:[Object(m.jsx)("img",{alt:"#",className:Y.a.photo,src:I}),Object(m.jsxs)("div",{className:Y.a.text_container,children:[Object(m.jsxs)("div",{className:Y.a.container,children:[Object(m.jsxs)("div",{className:Y.a.montsterrat,children:[Object(m.jsx)("h4",{children:"Back Collection"}),Object(m.jsx)("h4",{children:"Abignail XT"})]}),Object(m.jsx)("div",{role:"button",tabIndex:0,onKeyDown:function(){return c(!t)},onClick:function(){return c(!t)},children:"\u270e"})]}),Object(m.jsxs)("div",{className:Y.a.container,children:[Object(m.jsx)("h5",{className:Y.a.montsterrat,children:"Left: 297pc."}),Object(m.jsxs)("h5",{className:Y.a.montsterrat,children:["Quantity: x ",n]})]})]})]}),Object(m.jsxs)("div",{className:Y.a.container,children:[Object(m.jsx)(C,{className:"mr-3-vw ml-3-vw",onClick:function(){return 0},label:a.label,color:a.color},a.id),Object(m.jsx)(x,{className:"mr-3-vw ml-3-vw",onClick:function(){return 0},children:s.size},a.id+1),Object(m.jsx)("h4",{children:"Total:"}),Object(m.jsxs)("h4",{children:["$ ",l]})]})]})})})},H=["id"],U=function(){var e=a.a.useState(!1),t=Object(b.a)(e,2),c=t[0],s=t[1],l=a.a.useState(null),i=Object(b.a)(l,2),r=i[0],j=i[1],u=a.a.useState(null),h=Object(b.a)(u,2),O=h[0],v=h[1],_=a.a.useState(!1),p=Object(b.a)(_,2),A=p[0],f=p[1],N=a.a.useState(!1),y=Object(b.a)(N,2),k=y[0],g=y[1],w=a.a.useState(1),S=Object(b.a)(w,2),z=S[0],P=S[1],B=a.a.useState(499),D=Object(b.a)(B,2),X=D[0],R=D[1],T=Object(n.useMemo)((function(){return[{id:0,size:"XS"},{id:1,size:"S"},{id:2,size:"M"},{id:3,size:"2XL"},{id:4,size:"XL"},{id:5,size:"L"},{id:6,size:"3XL"},{id:7,size:"4XL"}]}),[]),F=Object(n.useMemo)((function(){return[{id:0,label:"Dark blue",color:"#346E92"},{id:1,label:"Aqua",color:"#B0E0FE"},{id:2,label:"Green",color:"rgba(57, 182, 59, 1)"},{id:3,label:"Violet",color:"#493B87"},{id:4,label:"Purple",color:"#902749"},{id:5,label:"Light blue",color:"#9F8DEF"},{id:6,label:"Red",color:"rgba(237, 42, 84, 1)"},{id:7,label:"Yellow",color:"rgba(255, 255, 0, 1)"}]}),[]),U=function(e){return function(){j(e),f(!A)}},W=function(e){return function(){v(e),g(!k)}};return Object(n.useEffect)((function(){R(499*z)}),[z,c]),c&&null!==r&&null!==O?Object(m.jsx)(M,{hidden:c,setHidden:s,counter:z,selectedColor:F[O],selectedSize:T[r],price:X}):Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:Y.a.card,children:[Object(m.jsxs)("div",{className:Y.a.container,children:[Object(m.jsx)("img",{alt:"#",className:Y.a.photo,src:I}),Object(m.jsxs)("div",{className:Y.a.text_container,children:[Object(m.jsxs)("div",{className:Y.a.container,children:[Object(m.jsxs)("div",{className:Y.a.montsterrat,children:[Object(m.jsx)("h4",{children:"Back Collection"}),Object(m.jsx)("h4",{children:"Abignail XT"})]}),Object(m.jsx)("div",{role:"button",tabIndex:0,onKeyDown:function(){return s(!c)},onClick:function(){return s(!c)},children:"\u2716"})]}),Object(m.jsxs)("div",{className:Y.a.container,children:[Object(m.jsx)("h4",{children:"Total"}),Object(m.jsxs)("h4",{children:["$ ",X]})]})]})]}),Object(m.jsxs)("div",{className:Y.a.container,children:[Object(m.jsx)(E,{onClick:function(){return g(!k)},children:Object(m.jsx)(C,{className:"mr-3-vw ml-3-vw",onClick:function(){return 0},label:F[O||0].label,color:F[O||0].color},O)}),Object(m.jsx)(E,{onClick:function(){return f(!A)},children:Object(m.jsx)(x,{className:"mr-3-vw ml-3-vw",onClick:function(){return 0},children:T[r||0].size},r)}),Object(m.jsx)(Q,{disabled:1===z,Function1:function(){return P(z-1)},Function2:function(){return P(z+1)},count:z})]}),Object(m.jsx)(L,{display:A,children:T.map((function(e){var t=e.id,c=e.size;return Object(m.jsx)(x,{className:Y.a.m2,onClick:U(t),selected:t===r,children:c},t)}))}),Object(m.jsx)(L,{display:k,children:F.map((function(e){var t=e.id,c=Object(d.a)(e,H);return Object(m.jsx)(C,Object(o.a)({className:Y.a.m2,onClick:W(t),selected:t===O},c),t)}))})]})})})},W=function(){return Object(m.jsx)(i.a,{children:Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{path:"/",component:U,exact:!0})})})};c(40);l.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(W,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.70c8fd27.chunk.js.map