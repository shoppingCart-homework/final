(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{167:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(66),s=a.n(r),j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,256)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},b=a(135),i=a(232),o=a(11),l=a(57),u=a(24),O=a(5),d=a(44),x=a(23),p=a(0),f=a.n(p),m=a(4),h=a(244),v=a(245),g=a(234),y=a(233),C=a(230),w=a(45),k=a(32),S=a(136),I={apiKey:"AIzaSyB3EuucPFsW92-c8eyA1Mdhnpczdzz4qro",authDomain:"appcart-39b32.firebaseapp.com",projectId:"appcart-39b32",storageBucket:"appcart-39b32.appspot.com",messagingSenderId:"334869830598",appId:"1:334869830598:web:163b837129f1b5c4f070c7",measurementId:"G-Q2XLR6R1QL"},q=Object(k.b)(I),B=(Object(S.a)(q),void 0),E=1,N=2,W=0,F=n.a.createContext({status:E,setStatus:function(e){B.status=e}}),z=a(220),A=a(237),T=a(235),U=a(247),L=a(236),M=a(31),P=a(2);function D(){var e=Object(M.b)(),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)([]),j=Object(o.a)(s,2),b=(j[0],j[1]),i=Object(c.useState)(0),l=Object(o.a)(i,2),u=l[0],O=l[1],d=function(){var t=Object(m.a)(f.a.mark((function t(a){var c,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a.target.files[0]),t.prev=1,r(""),c=Object(M.d)(e,a.target.files[0].name),t.next=6,Object(M.e)(c,a.target.files[0]);case 6:return console.log("Uploaded a blob or file!"),t.next=9,Object(M.a)(c);case 9:n=t.sent,console.log(n),O((function(e){return e+1})),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0.code),"storage/unauthorized"===t.t0.code&&r("\u5c1a\u672a\u767b\u5165");case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){function t(){return t=Object(m.a)(f.a.mark((function t(){var a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r("waiting..."),a=Object(M.d)(e,"/"),t.next=5,Object(M.c)(a);case 5:c=t.sent,b([]),c.items.forEach(function(){var e=Object(m.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)(t);case 2:a=e.sent,b((function(e){return[].concat(Object(x.a)(e),[{img:a,title:t.name}])}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(""),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),r(t.t0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])}))),t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,u]),Object(P.jsxs)(h.a,{children:[Object(P.jsx)(y.a,{type:"file",accept:"image/x-png,image/jpeg",onChange:d}),Object(P.jsx)("br",{}),n]})}Object(k.b)(I);var $=Object(w.c)();function J(e){var t=Object(c.useContext)(F),a=Object(c.useState)({bfname:"",bfprice:0,bfimage:"",bfdesc:""}),r=Object(o.a)(a,2),s=r[0],j=r[1],b=function(e){j(Object(d.a)(Object(d.a)({},s),{},Object(O.a)({},e.target.name,e.target.value)))},i=function(){var t=Object(m.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w.a)(Object(w.b)($,"breakfast"),{bfprice:parseInt(s.bfprice),bfimage:(c=s.bfimage,"https://firebasestorage.googleapis.com/v0/b/appcart-39b32.appspot.com/o/"+c+"?alt=media"),bfname:s.bfname,bfdesc:s.bfdesc});case 3:a=t.sent,console.log(a.id),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:e.update(s);case 11:case"end":return t.stop()}var c}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();var l=n.a.useState(!1),u=Object(o.a)(l,2),x=u[0],p=u[1],k=function(){p(!1)};return Object(P.jsxs)("div",{children:[t.status===E?Object(P.jsx)(h.a,{}):Object(P.jsx)(v.a,{color:"primary","aria-label":"Add",onClick:function(){p(!0)},children:"+"}),Object(P.jsxs)(g.a,{open:x,onClose:k,children:[Object(P.jsx)(z.a,{id:"alert-dialog-title",children:"\u65b0\u589e\u7522\u54c1"}),Object(P.jsx)(T.a,{children:Object(P.jsxs)(L.a,{id:"alert-dialog-description",children:["\u7522\u54c1\u540d\u7a31:",Object(P.jsx)(y.a,{type:"text",name:"bfname",value:s.bfname,onChange:b}),Object(P.jsx)("br",{}),"\u7522\u54c1\u50f9\u683c:",Object(P.jsx)(y.a,{type:"number",name:"bfprice",value:s.bfprice,onChange:b}),Object(P.jsx)("br",{}),"\u7522\u54c1\u6558\u8ff0:",Object(P.jsx)(y.a,{type:"text",name:"bfdesc",value:s.bfdesc,onChange:b}),Object(P.jsx)("br",{}),"\u5716\u7247\u6a94\u540d:",Object(P.jsx)(y.a,{type:"text",name:"bfimage",value:s.bfimage,onChange:b}),Object(P.jsx)("br",{}),Object(P.jsx)(U.a,{id:"outlined-weight-helper-text",children:"\u8acb\u5b8c\u6574\u8f38\u5165\u6a94\u540d(\u4f8b\uff1a\u5fae\u7b11\u85af\u9905.jpg)"}),Object(P.jsx)(D,{})]})}),Object(P.jsxs)(A.a,{children:[Object(P.jsx)(C.a,{variant:"contained",color:"primary",onClick:i,children:"\u65b0\u589e"}),Object(P.jsx)(C.a,{onClick:k,children:"\u95dc\u9589"})]})]})]})}var Q=a(238),R=a(239),G=a(249),K=a(227),X=a(250),H=a(251),V=a(252),Y=a(48),Z=a(131),_=a.n(Z),ee=a(83),te=a.n(ee),ae=a(99),ce=a.n(ae),ne=a(223),re=a(248);function se(){var e=Object(c.useContext)(F);return Object(P.jsx)(h.a,{sx:{width:360},children:Object(P.jsx)(h.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(P.jsxs)(ne.a,{variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,"aria-label":"scrollable force tabs example",children:[Object(P.jsx)(re.a,{component:l.b,to:"/product",label:"MENU",color:"inherit"}),e.status===E?Object(P.jsx)(h.a,{}):Object(P.jsx)(re.a,{component:l.b,to:"/employee",label:"cart",color:"inherit"}),e.status===E?Object(P.jsx)(h.a,{}):Object(P.jsx)(re.a,{component:l.b,to:"/newpage",label:"Order",color:"inherit"}),e.status===E?Object(P.jsx)(h.a,{}):Object(P.jsx)(re.a,{component:l.b,to:"/complete",label:"Completed",color:"inherit"}),e.status===N?Object(P.jsx)(re.a,{component:l.b,to:"/",label:"logout",color:"inherit"}):Object(P.jsx)(re.a,{component:l.b,to:"/",label:"login",color:"inherit"})]})})})}var je=a(130),be=a.n(je);var ie=a(132),oe=a.n(ie),le=a(240),ue=a(243),Oe=a(242),de=a(241),xe=a(175),pe=a(221),fe=a(42),me=(Object(k.b)(I),Object(w.c)()),he=Object(fe.b)().currentUser;if(he){var ve=he.email,ge=he.uid;console.log(ve,ge)}else console.log("\u6c92\u767b\u5165");function ye(){var e=Object(c.useContext)(F),t=n.a.useState(1),a=Object(o.a)(t,2),r=(a[0],a[1],Object(c.useState)([])),s=Object(o.a)(r,2),j=s[0],b=s[1];Object(c.useEffect)((function(){function e(){return(e=Object(m.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie(!0),e.next=3,Object(Y.e)(Object(Y.b)(me,"breakfast"));case 3:t=e.sent,a=[],t.forEach((function(e){console.log(e.id," => ",e.data()),a.push({id:e.id,bfdesc:e.data().bfdesc,bfname:e.data().bfname,bfprice:e.data().bfprice,bfimage:e.data().bfimage})})),console.log(a),b([].concat(a)),ie(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[me]);Object(Y.g)(Object(Y.d)(me,"breakfast","SF"),(function(e){console.log("Current data: ",e.data())}));var i=n.a.useState(!1),l=Object(o.a)(i,2),u=l[0],p=l[1],v=function(){p(!1)},w=Object(c.useState)([]),k=Object(o.a)(w,2),S=k[0],I=k[1],q=function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,ie(!0),e.next=4,Object(Y.c)(Object(Y.d)(me,"breakfast",t));case 4:I(S+1),ie(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),B=Object(c.useState)({bfname:"",bfprice:0,bfimage:"",bfdesc:""}),N=Object(o.a)(B,2),W=N[0],U=N[1],L=function(e){U(Object(d.a)(Object(d.a)({},W),{},Object(O.a)({},e.target.name,e.target.value)))},M=function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(Z),e.next=4,Object(Y.h)(Object(Y.d)(me,"breakfast",Z),{bfprice:parseInt(t.bfprice),bfname:t.bfname,bfdesc:t.bfdesc});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),D=Object(c.useState)(0),$=Object(o.a)(D,2),Z=$[0],ee=$[1],ae=function(e){p(!0),ee(e.id)},ne=Object(c.useState)(!1),re=Object(o.a)(ne,2),je=re[0],ie=re[1],fe=function(){return Object(P.jsx)(pe.a,{sx:{width:"100%",maxWidth:360},spacing:2,children:j.map((function(t,a){return Object(P.jsxs)(le.a,{children:[Object(P.jsx)(de.a,{component:"img",height:"140",image:t.bfimage}),Object(P.jsxs)(Oe.a,{divider:!0,children:[Object(P.jsx)(xe.a,{gutterBottom:!0,variant:"h5",component:"div",children:t.bfname}),Object(P.jsxs)(xe.a,{variant:"body2",color:"text.secondary",children:[t.bfdesc,Object(P.jsx)("br",{}),"NT$"+t.bfprice]})]},a),Object(P.jsxs)(ue.a,{children:[e.status===E?Object(P.jsx)(h.a,{}):Object(P.jsx)(C.a,{variant:"contained",startIcon:Object(P.jsx)(be.a,{}),children:"\u52a0\u5165\u8cfc\u7269\u8eca"}),e.status===E?Object(P.jsx)(h.a,{}):Object(P.jsx)(C.a,{onClick:function(){return ae(t)},variant:"contained",startIcon:Object(P.jsx)(te.a,{}),children:"\u7de8\u8f2f"}),e.status===E?Object(P.jsx)(h.a,{}):Object(P.jsx)(C.a,{onClick:function(){return q(t.id)},variant:"contained",startIcon:Object(P.jsx)(ce.a,{}),children:"\u522a\u9664"})]})]})}))})},he=function(){return Object(P.jsx)(G.a,{children:j.map((function(t,a){return Object(P.jsxs)(K.a,{divider:!0,children:[Object(P.jsx)(Q.a,{sx:{width:85,height:85},cols:1,children:Object(P.jsx)(R.a,{children:Object(P.jsx)("img",{src:"".concat(t.bfimage),srcSet:"".concat(t.bfimage)})},t.image)}),Object(P.jsx)(X.a,{primary:t.bfname,secondary:"NT$"+t.bfprice}),e.status===E?Object(P.jsx)(h.a,{}):Object(P.jsx)(H.a,{edge:"end","aria-label":"edit",onClick:function(){return ae(t)},children:Object(P.jsx)(te.a,{})}),e.status===E?Object(P.jsx)(h.a,{}):Object(P.jsx)(H.a,{edge:"end","aria-label":"delete",onClick:function(){return q(t.id)},children:Object(P.jsx)(_.a,{})}),e.status===E?Object(P.jsx)(h.a,{}):Object(P.jsx)(H.a,{edge:"end","aria-label":"cart",children:Object(P.jsx)(oe.a,{})})]},a)}))})};return Object(P.jsxs)(h.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(P.jsx)(se,{}),Object(P.jsx)(fe,{}),je?Object(P.jsx)(V.a,{}):Object(P.jsx)(he,{}),Object(P.jsxs)(g.a,{open:u,onClose:v,children:[Object(P.jsx)(z.a,{id:"alert-dialog-title",children:"\u4fee\u6539\u7522\u54c1"}),Object(P.jsxs)(T.a,{children:["\u7522\u54c1\u63cf\u8ff0:",Object(P.jsx)(y.a,{type:"text",name:"bfname",value:W.bfname,onChange:L}),Object(P.jsx)("br",{}),"\u7522\u54c1\u50f9\u683c:",Object(P.jsx)(y.a,{type:"number",name:"bfprice",value:W.bfprice,onChange:L}),Object(P.jsx)("br",{}),"\u7522\u54c1\u6558\u8ff0:",Object(P.jsx)(y.a,{type:"text",name:"bfdesc",value:W.bfdesc,onChange:L})]}),Object(P.jsxs)(A.a,{children:[Object(P.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){return M(W)},children:"\u7de8\u8f2f"}),Object(P.jsx)(C.a,{onClick:v,children:"\u95dc\u9589"})]})]}),Object(P.jsx)(J,{update:function(e){b((function(t){return[].concat(Object(x.a)(t),[e])}))}})]})}var Ce=a(134),we=a.n(Ce),ke=a(133),Se=a.n(ke),Ie=a(77),qe=a.n(Ie);function Be(){Object(c.useContext)(F);var e=Object(c.useState)([{id:"0",name:"A",department:"100",num:"1"},{id:"1",name:"B",department:"30",num:"1"},{id:"2",name:"C",department:"20",num:"1"},{id:"3",name:"D",department:"60",num:"1"},{id:"4",name:"E",department:"1000",num:"1"}]),t=Object(o.a)(e,1)[0],a=Object(c.useState)(0),n=Object(o.a)(a,2),r=n[0],s=n[1];return Object(P.jsxs)(h.a,{sx:{width:"100vw",maxWidth:360,height:"100vh",backgroundColor:"background.paper",color:"black",textAlign:"left"},children:[Object(P.jsx)(se,{}),Object(P.jsx)(G.a,{"aria-label":"employee list",children:t.map((function(e,t){return Object(P.jsxs)(K.a,{divider:!0,onClick:function(){return function(e){s(e)}(t)},selected:r===t,children:[Object(P.jsx)(X.a,{primary:e.name,secondary:"NT$"+e.department}),Object(P.jsx)(H.a,{edge:"end",children:Object(P.jsx)(Se.a,{})}),e.num,Object(P.jsx)(H.a,{edge:"end",children:Object(P.jsx)(qe.a,{})}),Object(P.jsx)(H.a,{edge:"end",children:Object(P.jsx)(ce.a,{})})]},t)}))}),Object(P.jsx)(C.a,{variant:"contained",endIcon:Object(P.jsx)(we.a,{}),children:"\u9001\u51fa\u8a02\u55ae"})]})}var Ee=a(228),Ne=a(253),We=a(254);function Fe(){var e=Object(c.useState)([{id:"0",name:"\u8a02\u8cfc\u4eba\u59d3\u540d",department:"\u6728\u661f"},{id:"1",name:"\u8a02\u8cfc\u4eba\u59d3\u540d2",department:"\u51a5\u738b\u661f"}]),t=Object(o.a)(e,1)[0],a=Object(c.useState)([{stuff:"\u5fae\u7b11\u4e16\u754c",quantity:"5"},{stuff:"\u5fae\u7b11\u85e5\u6c34",quantity:"10"},{stuff:"\u5fae\u7b11\u5b87\u5b99",quantity:"15"}]),r=Object(o.a)(a,1)[0],s=Object(c.useState)(0),j=Object(o.a)(s,2),b=(j[0],j[1],n.a.useState(!1)),i=Object(o.a)(b,2);i[0],i[1];return Object(P.jsxs)(h.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(P.jsx)(se,{}),Object(P.jsx)(G.a,{"aria-label":"employee list"}),t.map((function(e,t){return Object(P.jsxs)(Ee.a,{children:[Object(P.jsx)(Ne.a,{expandIcon:Object(P.jsx)(qe.a,{}),"aria-controls":"panel1a-content",id:t,children:Object(P.jsx)(xe.a,{children:e.name})}),Object(P.jsxs)(We.a,{children:[Object(P.jsxs)("strong",{children:["\u5730\u5740\uff1a",e.department]}),Object(P.jsxs)(xe.a,{children:[r.map((function(e,t){return Object(P.jsx)(X.a,{primary:"\u54c1\u9805\uff1a"+e.stuff,secondary:"\u4efd\u6578\uff1a"+e.quantity})})),Object(P.jsx)(C.a,{variant:"contained",color:"success",edge:"end",children:"\u5b8c\u6210\u8a02\u55ae"})]})]})]})}))]})}function ze(){var e=Object(c.useState)([{id:"0",name:"\u8a02\u8cfc\u4eba\u59d3\u540d3",department:"\u5929\u738b\u661f"},{id:"1",name:"\u8a02\u8cfc\u4eba\u59d3\u540d4",department:"\u6d77\u738b\u661f"}]),t=Object(o.a)(e,1)[0],a=Object(c.useState)([{stuff:"\u5fae\u7b11\u4e16\u754c",quantity:"5"},{stuff:"\u5fae\u7b11\u85e5\u6c34",quantity:"10"},{stuff:"\u5fae\u7b11\u5b87\u5b99",quantity:"15"}]),r=Object(o.a)(a,1)[0],s=Object(c.useState)(0),j=Object(o.a)(s,2),b=(j[0],j[1],n.a.useState(!1)),i=Object(o.a)(b,2);i[0],i[1];return Object(P.jsxs)(h.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(P.jsx)(se,{}),Object(P.jsx)(G.a,{"aria-label":"employee list"}),t.map((function(e,t){return Object(P.jsxs)(Ee.a,{children:[Object(P.jsx)(Ne.a,{expandIcon:Object(P.jsx)(qe.a,{}),"aria-controls":"panel1a-content",id:t,children:Object(P.jsx)(xe.a,{children:e.name})}),Object(P.jsxs)(We.a,{children:[Object(P.jsxs)("strong",{children:["\u5730\u5740\uff1a",e.department]}),Object(P.jsxs)(xe.a,{children:[r.map((function(e,t){return Object(P.jsx)(X.a,{primary:"\u54c1\u9805\uff1a"+e.stuff,secondary:"\u4efd\u6578\uff1a"+e.quantity})})),Object(P.jsx)(C.a,{variant:"contained",color:"success",edge:"end",disabled:!0,children:"\u5df2\u5b8c\u6210"})]})]})]})}))]})}var Ae=a(222),Te=(Object(k.b)(I),Object(w.c)());function Ue(){0===Object(k.a)().length&&Object(k.b)(I);var e=Object(c.useContext)(F),t=Object(c.useState)({email:"",password:"",displayName:""}),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),j=Object(o.a)(s,2),b=j[0],i=j[1],l=function(e){r(Object(d.a)(Object(d.a)({},n),{},Object(O.a)({},e.target.name,e.target.value)))},u=function(){var t=Object(m.a)(f.a.mark((function t(){var a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object(fe.b)(),t.next=4,Object(fe.a)(a,n.email,n.password);case 4:if(!t.sent){t.next=13;break}return t.next=8,Object(fe.e)(a.currentUser,{displayName:n.displayName});case 8:return e.setStatus(E),t.next=11,Object(w.a)(Object(w.b)(Te,"user"),{userauth:parseInt("0"),useremail:n.email,username:n.name});case 11:c=t.sent,console.log(c.id);case 13:i(""),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),i(""+t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}}();return Object(P.jsxs)("form",{children:[Object(P.jsx)(Ae.a,{type:"text",name:"name",value:n.name,placeholder:"\u59d3\u540d",label:"\u59d3\u540d:",onChange:l}),Object(P.jsx)("br",{}),Object(P.jsx)(Ae.a,{type:"email",name:"email",value:n.email,placeholder:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1",label:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1:",onChange:l,autoComplete:"email"}),Object(P.jsx)("br",{}),Object(P.jsx)(Ae.a,{type:"password",name:"password",value:n.password,placeholder:"\u5bc6\u78bc",label:"\u5bc6\u78bc:",onChange:l,autoComplete:"current-password"}),Object(P.jsx)("br",{}),b,Object(P.jsx)("br",{}),Object(P.jsx)(C.a,{variant:"contained",color:"primary",onClick:u,children:"\u8a3b\u518a"}),Object(P.jsx)(C.a,{variant:"contained",color:"secondary",onClick:function(){e.setStatus(E)},children:"\u6211\u8981\u767b\u5165"})]})}Object(k.b)(I),Object(w.c)();function Le(){0===Object(k.a)().length&&Object(k.b)(I);var e=Object(c.useContext)(F),t=Object(c.useState)({email:"",password:"",displayName:""}),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),j=Object(o.a)(s,2),b=j[0],i=j[1],l=function(e){r(Object(d.a)(Object(d.a)({},n),{},Object(O.a)({},e.target.name,e.target.value)))},u=function(){var t=Object(m.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object(fe.b)(),t.next=4,Object(fe.c)(a,n.email,n.password);case 4:t.sent&&e.setStatus(N),i(""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),i(""+t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(P.jsxs)("form",{children:[Object(P.jsx)(Ae.a,{type:"text",name:"email",value:n.email,placeholder:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1",label:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1:",onChange:l,autoComplete:"email"}),Object(P.jsx)("br",{}),Object(P.jsx)(Ae.a,{type:"password",name:"password",value:n.password,placeholder:"\u5bc6\u78bc",label:"\u5bc6\u78bc:",onChange:l,autoComplete:"current-password"}),Object(P.jsx)("br",{}),b,Object(P.jsx)("br",{}),Object(P.jsx)(C.a,{variant:"contained",color:"primary",onClick:u,children:"\u767b\u5165"}),Object(P.jsx)(C.a,{variant:"contained",color:"secondary",onClick:function(){e.setStatus(W)},children:"\u8a3b\u518a"})]})}var Me=a(225),Pe=a(255);function De(){0===Object(k.a)().length&&Object(k.b)(I);var e=Object(c.useContext)(F),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1],s=function(){var t=Object(m.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object(fe.b)(),t.next=4,Object(fe.d)(a);case 4:r(""),e.setStatus(E),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r(""+t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),j=Object(fe.b)().currentUser;if(j){var b=j.email,i=j.uid;console.log(b,i)}return Object(P.jsxs)("form",{children:[Object(P.jsx)(pe.a,{sx:{width:"100%",maxWidth:360},spacing:2,children:Object(P.jsxs)(Me.a,{severity:"success",children:[Object(P.jsx)(Pe.a,{children:Object(P.jsx)("strong",{children:"\u767b\u5165\u6210\u529f"})}),"\u4f7f\u7528\u5e33\u865f\uff1a",b]})}),Object(P.jsx)(C.a,{variant:"contained",color:"primary",onClick:s,children:"\u767b\u51fa"}),n,Object(P.jsx)("br",{})]})}function $e(){var e=Object(c.useContext)(F);return Object(P.jsxs)("div",{children:[Object(P.jsx)(se,{}),e.status===W?Object(P.jsx)(Ue,{}):e.status===E?Object(P.jsx)(Le,{}):Object(P.jsx)(De,{})]})}function Je(){var e=Object(c.useState)(E),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(P.jsx)(F.Provider,{value:{status:a,setStatus:n},children:Object(P.jsx)(l.a,{children:Object(P.jsxs)(u.c,{children:[Object(P.jsx)(u.a,{path:"/",element:Object(P.jsx)($e,{})}),Object(P.jsx)(u.a,{path:"/product",element:Object(P.jsx)(ye,{})}),Object(P.jsx)(u.a,{path:"/employee",element:Object(P.jsx)(Be,{})}),Object(P.jsx)(u.a,{path:"/newpage",element:Object(P.jsx)(Fe,{})}),Object(P.jsx)(u.a,{path:"/complete",element:Object(P.jsx)(ze,{})})]})})})}var Qe=Object(b.a)({palette:{primary:{main:"#ffdb4d"},secondary:{main:"#ffcc00"}}});s.a.render(Object(P.jsx)(n.a.StrictMode,{children:Object(P.jsx)(i.a,{theme:Qe,children:Object(P.jsx)(Je,{})})}),document.getElementById("root")),j()}},[[167,1,2]]]);
//# sourceMappingURL=main.627ec860.chunk.js.map