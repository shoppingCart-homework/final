(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{325:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(68),s=c.n(r),o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,418)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))},i=c(181),b=c(395),j=c(11),l=c(52),u=c(25),O=c(407),d=c(385),f=c(408),p=void 0,x=1,h=2,m=0,g=n.a.createContext({status:x,setStatus:function(e){p.status=e}}),v=c(132),y=c.n(v),w=c(169),k=c.n(w),C=c(102),S=c.n(C),I=c(170),B=c.n(I),E=c(171),W=c.n(E),q=c(173),P=c.n(q),T=c(172),N=c.n(T),U=c(2);function F(){var e=Object(a.useContext)(g);return Object(U.jsx)(O.a,{sx:{width:360},children:Object(U.jsx)(O.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(U.jsxs)(d.a,{variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,"aria-label":"icon position tabs example",children:[Object(U.jsx)(f.a,{component:l.b,to:"/homepage",label:"HOME",color:"inherit",icon:Object(U.jsx)(y.a,{}),iconPosition:"start"}),e.status!=h?Object(U.jsx)(O.a,{}):Object(U.jsx)(f.a,{component:l.b,to:"/product",label:"MENU",color:"inherit",icon:Object(U.jsx)(k.a,{}),iconPosition:"start"}),e.status!=h?Object(U.jsx)(O.a,{}):Object(U.jsx)(f.a,{component:l.b,to:"/employee",label:"cart",color:"inherit",icon:Object(U.jsx)(S.a,{}),iconPosition:"start"}),e.status!=h?Object(U.jsx)(O.a,{}):Object(U.jsx)(f.a,{component:l.b,to:"/newpage",label:"Order",color:"inherit",icon:Object(U.jsx)(B.a,{}),iconPosition:"start"}),e.status!=h?Object(U.jsx)(O.a,{}):Object(U.jsx)(f.a,{component:l.b,to:"/complete",label:"Completed",color:"inherit",icon:Object(U.jsx)(W.a,{}),iconPosition:"start"}),e.status===h?Object(U.jsx)(f.a,{component:l.b,to:"/",label:"logout",color:"inherit",icon:Object(U.jsx)(N.a,{}),iconPosition:"start"}):Object(U.jsx)(f.a,{component:l.b,to:"/",label:"login",color:"inherit",icon:Object(U.jsx)(P.a,{}),iconPosition:"start"})]})})})}var A=c.p+"static/media/background.32c6d77b.jpg",M=c(111),z=c(378);function L(){return Object(U.jsxs)(O.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(U.jsx)(F,{}),Object(U.jsx)(M.a,{icon:Object(U.jsx)(z.a,{}),content:"\u6ce8\u610f\uff01\u65b0\u7522\u54c1\uff1a\u5fae\u7b11\u85af\u9905\u5373\u5c07\u4e0a\u5e02\uff01\u611f\u8b1d\u4f60\u7684\u6ce8\u610f\uff01",color:"info"}),Object(U.jsx)("link",{href:"//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css",rel:"stylesheet"}),Object(U.jsx)("img",{style:{height:360},src:A})]})}var R=c(5),$=c(48),D=c(24),J=c(0),Q=c.n(J),V=c(4),_=c(409),G=c(397),H=c(396),K=c(392),X=c(49),Y=c(31),Z=c(182),ee={apiKey:"AIzaSyB3EuucPFsW92-c8eyA1Mdhnpczdzz4qro",authDomain:"appcart-39b32.firebaseapp.com",projectId:"appcart-39b32",storageBucket:"appcart-39b32.appspot.com",messagingSenderId:"334869830598",appId:"1:334869830598:web:163b837129f1b5c4f070c7",measurementId:"G-Q2XLR6R1QL"},te=Object(Y.b)(ee),ce=(Object(Z.a)(te),c(382)),ae=c(400),ne=c(398),re=c(411),se=c(399),oe=c(33);function ie(){var e=Object(oe.b)(),t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)([]),o=Object(j.a)(s,2),i=(o[0],o[1]),b=Object(a.useState)(0),l=Object(j.a)(b,2),u=l[0],d=l[1],f=function(){var t=Object(V.a)(Q.a.mark((function t(c){var a,n;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(c.target.files[0]),t.prev=1,r(""),a=Object(oe.d)(e,c.target.files[0].name),t.next=6,Object(oe.e)(a,c.target.files[0]);case 6:return console.log("Uploaded a blob or file!"),t.next=9,Object(oe.a)(a);case 9:n=t.sent,console.log(n),d((function(e){return e+1})),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0.code),"storage/unauthorized"===t.t0.code&&r("\u5c1a\u672a\u767b\u5165");case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){function t(){return t=Object(V.a)(Q.a.mark((function t(){var c,a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r("waiting..."),c=Object(oe.d)(e,"/"),t.next=5,Object(oe.c)(c);case 5:a=t.sent,i([]),a.items.forEach(function(){var e=Object(V.a)(Q.a.mark((function e(t){var c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.a)(t);case 2:c=e.sent,i((function(e){return[].concat(Object(D.a)(e),[{img:c,title:t.name}])}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(""),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),r(t.t0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])}))),t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,u]),Object(U.jsxs)(O.a,{children:[Object(U.jsx)(H.a,{type:"file",accept:"image/x-png,image/jpeg",onChange:f}),Object(U.jsx)("br",{}),n]})}var be=c(42),je=c.n(be),le=(Object(Y.b)(ee),Object(X.c)());function ue(e){var t=Object(a.useContext)(g),c=Object(a.useState)({bfname:"",bfprice:0,bfimage:"",bfdesc:""}),r=Object(j.a)(c,2),s=r[0],o=r[1],i=function(e){o(Object($.a)(Object($.a)({},s),{},Object(R.a)({},e.target.name,e.target.value)))},b=function(){var t=Object(V.a)(Q.a.mark((function t(){var c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(X.a)(Object(X.b)(le,"breakfast"),{bfprice:parseInt(s.bfprice),bfimage:(a=s.bfimage,"https://firebasestorage.googleapis.com/v0/b/appcart-39b32.appspot.com/o/"+a+"?alt=media"),bfname:s.bfname,bfdesc:s.bfdesc});case 3:c=t.sent,console.log(c.id),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:e.update(s),je.a.fire({icon:"success",title:"\u65b0\u589e\u6210\u529f\uff0c\u8acb\u91cd\u65b0\u5237\u65b0\u9801\u9762"});case 12:case"end":return t.stop()}var a}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();var l=n.a.useState(!1),u=Object(j.a)(l,2),d=u[0],f=u[1],p=function(){f(!1)};return Object(U.jsxs)("div",{children:[t.status!=h?Object(U.jsx)(O.a,{}):Object(U.jsx)(_.a,{color:"primary","aria-label":"Add",onClick:function(){f(!0)},children:"+"}),Object(U.jsxs)(G.a,{open:d,onClose:p,children:[Object(U.jsx)(ce.a,{id:"alert-dialog-title",children:"\u65b0\u589e\u7522\u54c1"}),Object(U.jsx)(ne.a,{children:Object(U.jsxs)(se.a,{id:"alert-dialog-description",children:["\u7522\u54c1\u540d\u7a31:",Object(U.jsx)(H.a,{type:"text",name:"bfname",value:s.bfname,onChange:i}),Object(U.jsx)("br",{}),"\u7522\u54c1\u50f9\u683c:",Object(U.jsx)(H.a,{type:"number",name:"bfprice",value:s.bfprice,onChange:i}),Object(U.jsx)("br",{}),"\u7522\u54c1\u6558\u8ff0:",Object(U.jsx)(H.a,{type:"text",name:"bfdesc",value:s.bfdesc,onChange:i}),Object(U.jsx)("br",{}),"\u5716\u7247\u6a94\u540d:",Object(U.jsx)(H.a,{type:"text",name:"bfimage",value:s.bfimage,onChange:i}),Object(U.jsx)("br",{}),Object(U.jsx)(re.a,{id:"outlined-weight-helper-text",children:"\u8acb\u5b8c\u6574\u8f38\u5165\u6a94\u540d(\u4f8b\uff1a\u5fae\u7b11\u85af\u9905.jpg)"}),Object(U.jsx)(ie,{})]})}),Object(U.jsxs)(ae.a,{children:[Object(U.jsx)(K.a,{variant:"contained",color:"primary",onClick:b,children:"\u65b0\u589e"}),Object(U.jsx)(K.a,{onClick:p,children:"\u95dc\u9589"})]})]})]})}var Oe=c(412),de=c(22),fe=c(109),pe=c.n(fe),xe=c(94),he=c.n(xe);c(401),c(402);var me=c(403),ge=c(406),ve=c(405),ye=c(404),we=c(333),ke=c(383),Ce=c(41);function Se(){Object(Y.b)(ee);var e=Object(X.c)();console.log("db_line43:"+e);var t=Object(Ce.b)().currentUser;if(t){var c=t.email;t.uid;console.log("email:"+c)}else console.log("\u6c92\u767b\u5165");var r=function(){var a=Object(V.a)(Q.a.mark((function a(n,r){var s,o,i,b,j,l,u,O,d,f;return Q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=Object(de.h)(Object(de.b)(e,"cart"),Object(de.k)("ctstate","==",0),Object(de.k)("useremail","==",t.email)),a.next=3,Object(de.e)(Object(de.h)(s));case 3:if(1!=a.sent.empty){a.next=28;break}return a.next=7,Object(de.e)(Object(de.b)(e,"cart"));case 7:return o=a.sent,i=0,b=0,o.forEach((function(e){i=e.id})),j=parseInt(i)+1,l=j.toString(),a.prev=13,a.next=16,Object(de.i)(Object(de.d)(e,"cart",l),{ctaddress:"",ctstate:0,useremail:c});case 16:return b=Object(de.d)(e,"cart",l),a.next=19,Object(de.a)(Object(de.b)(b,"ctcontent"),{bfname:n,bfprice:r,bfquantity:1,useremail:c});case 19:a.sent,je.a.fire({icon:"success",title:"\u5df2\u52a0\u5165\u8cfc\u7269\u8eca\uff01",text:"\u8acb\u81f3\u60a8\u7684\u8cfc\u7269\u8eca\u5167\u78ba\u8a8d"}),a.next=26;break;case 23:a.prev=23,a.t0=a.catch(13),console.log(a.t0);case 26:a.next=50;break;case 28:return console.log("db_line93:"+e),console.log("useremail:"+t.email),a.next=32,Object(de.e)(Object(de.h)(Object(de.b)(e,"cart"),Object(de.k)("useremail","==",t.email)));case 32:return u=a.sent,O=0,d=0,console.log(u),u.forEach((function(e){console.log(e.id," => ",e.data()),O=e,d=e.id})),console.log(d),a.prev=38,O=Object(de.d)(e,"cart",d),a.next=42,Object(de.a)(Object(de.b)(O,"ctcontent"),{bfname:n,bfprice:r,bfquantity:1,useremail:c});case 42:f=a.sent,console.log(f.id),je.a.fire({icon:"success",title:"\u5df2\u52a0\u5165\u8cfc\u7269\u8eca\uff01",text:"\u8acb\u81f3\u60a8\u7684\u8cfc\u7269\u8eca\u5167\u78ba\u8a8d"}),a.next=50;break;case 47:a.prev=47,a.t1=a.catch(38),console.log(a.t1);case 50:case"end":return a.stop()}}),a,null,[[13,23],[38,47]])})));return function(e,t){return a.apply(this,arguments)}}(),s=(Object(a.useContext)(g),n.a.useState(1)),o=Object(j.a)(s,2),i=(o[0],o[1],Object(a.useState)([])),b=Object(j.a)(i,2),l=b[0],u=b[1];Object(a.useEffect)((function(){function t(){return(t=Object(V.a)(Q.a.mark((function t(){var c,a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return se(!0),t.next=3,Object(de.e)(Object(de.b)(e,"breakfast"));case 3:c=t.sent,a=[],c.forEach((function(e){console.log(e.id," => ",e.data()),a.push({id:e.id,bfdesc:e.data().bfdesc,bfname:e.data().bfname,bfprice:e.data().bfprice,bfimage:e.data().bfimage})})),console.log(a),u([].concat(a)),se(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var d=Object(a.useState)([]),f=Object(j.a)(d,2),p=f[0],x=f[1];Object(a.useEffect)((function(){function c(){return(c=Object(V.a)(Q.a.mark((function c(){var a,n,r;return Q.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return se(!0),a=Object(de.b)(e,"user"),c.next=4,Object(de.e)(Object(de.h)(a,Object(de.k)("useremail","==",t.email)));case 4:n=c.sent,r=[],n.forEach((function(e){console.log(e.id," => ",e.data()),r.push({useremail:e.data().useremail,userauth:e.data().userauth,username:e.data().username})})),console.log(r),x([].concat(r)),se(!1);case 10:case"end":return c.stop()}}),c)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()}),[e]),p.map((function(e){return console.log(e.userauth)}));Object(de.g)(Object(de.d)(e,"breakfast","SF"),(function(e){console.log("Current data: ",e.data())}));var h=n.a.useState(!1),m=Object(j.a)(h,2),v=m[0],y=m[1],w=function(){y(!1)},k=Object(a.useState)([]),C=Object(j.a)(k,2),I=C[0],B=C[1],E=function(){var t=Object(V.a)(Q.a.mark((function t(c){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,se(!0),t.next=4,Object(de.c)(Object(de.d)(e,"breakfast",c));case 4:B(I+1),se(!1),je.a.fire({icon:"success",title:"\u522a\u9664\u6210\u529f\uff0c\u8acb\u91cd\u65b0\u5237\u65b0\u9801\u9762"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),W=Object(a.useState)({bfname:"",bfprice:0,bfimage:"",bfdesc:""}),q=Object(j.a)(W,2),P=q[0],T=q[1],N=function(e){T(Object($.a)(Object($.a)({},P),{},Object(R.a)({},e.target.name,e.target.value)))},A=function(){var t=Object(V.a)(Q.a.mark((function t(c){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log(L),t.next=4,Object(de.j)(Object(de.d)(e,"breakfast",L),{bfprice:parseInt(c.bfprice),bfname:c.bfname,bfdesc:c.bfdesc});case 4:je.a.fire({icon:"success",title:"\u7de8\u8f2f\u6210\u529f\uff0c\u8acb\u91cd\u65b0\u5237\u65b0\u9801\u9762"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),M=Object(a.useState)(0),z=Object(j.a)(M,2),L=z[0],J=z[1],_=function(e){y(!0),J(e.id)},Z=Object(a.useState)(!1),te=Object(j.a)(Z,2),re=te[0],se=te[1],oe=function(){return Object(U.jsx)(ke.a,{sx:{width:"100%",maxWidth:360},spacing:2,children:l.map((function(e,t){return Object(U.jsxs)(me.a,{children:[Object(U.jsx)(ye.a,{component:"img",height:"140",image:e.bfimage}),Object(U.jsxs)(ve.a,{divider:!0,children:[Object(U.jsx)(we.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.bfname}),Object(U.jsxs)(we.a,{variant:"body2",color:"text.secondary",children:[e.bfdesc,Object(U.jsx)("br",{}),"NT$"+e.bfprice]})]},t),Object(U.jsxs)(ge.a,{children:[Object(U.jsx)(O.a,{children:Object(U.jsx)(K.a,{onClick:function(){return r(e.bfname,e.bfprice)},variant:"contained",startIcon:Object(U.jsx)(S.a,{}),color:"secondary",children:"\u52a0\u5165\u8cfc\u7269\u8eca"})}),p.map((function(t){return Object(U.jsx)(O.a,{children:"1"!=t.userauth?Object(U.jsx)(O.a,{}):Object(U.jsx)(K.a,{style:{borderRadius:50},onClick:function(){return _(e)},variant:"contained",startIcon:Object(U.jsx)(he.a,{}),color:"primary",children:"\u7de8\u8f2f"})})})),p.map((function(t){return Object(U.jsx)(O.a,{children:"1"!=t.userauth?Object(U.jsx)(O.a,{}):Object(U.jsx)(K.a,{style:{borderRadius:50},onClick:function(){return E(e.id)},variant:"contained",startIcon:Object(U.jsx)(pe.a,{}),color:"primary",children:"\u522a\u9664"})})}))]})]})}))})};return Object(U.jsxs)(O.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(U.jsx)(F,{}),re?Object(U.jsx)(Oe.a,{}):Object(U.jsx)(oe,{}),Object(U.jsxs)(G.a,{open:v,onClose:w,children:[Object(U.jsx)(ce.a,{id:"alert-dialog-title",children:"\u4fee\u6539\u7522\u54c1"}),Object(U.jsxs)(ne.a,{children:["\u7522\u54c1\u63cf\u8ff0:",Object(U.jsx)(H.a,{type:"text",name:"bfname",value:P.bfname,onChange:N}),Object(U.jsx)("br",{}),"\u7522\u54c1\u50f9\u683c:",Object(U.jsx)(H.a,{type:"number",name:"bfprice",value:P.bfprice,onChange:N}),Object(U.jsx)("br",{}),"\u7522\u54c1\u6558\u8ff0:",Object(U.jsx)(H.a,{type:"text",name:"bfdesc",value:P.bfdesc,onChange:N})]}),Object(U.jsxs)(ae.a,{children:[Object(U.jsx)(K.a,{variant:"contained",color:"primary",onClick:function(){return A(P)},children:"\u7de8\u8f2f"}),Object(U.jsx)(K.a,{onClick:w,children:"\u95dc\u9589"})]})]}),Object(U.jsx)(ue,{update:function(e){u((function(t){return[].concat(Object(D.a)(t),[e])}))}})]})}var Ie=c(413),Be=c(389),Ee=c(414),We=c(415),qe=c(178),Pe=c.n(qe);function Te(){Object(Y.b)(ee);var e=Object(de.f)(),t=(Object(a.useContext)(g),n.a.useState(1)),c=Object(j.a)(t,2),r=c[0],s=c[1],o=Object(Ce.b)().currentUser;if(o)o.email;else console.log("\u6c92\u767b\u5165");var i=Object(a.useState)(0),b=Object(j.a)(i,2),l=(b[0],b[1],Object(a.useState)([])),u=Object(j.a)(l,2),d=u[0],f=u[1];Object(a.useEffect)((function(){function t(){return(t=Object(V.a)(Q.a.mark((function t(){var c,a,n,r,s,i;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(de.h)(Object(de.b)(e,"cart"),Object(de.k)("ctstate","==",0),Object(de.k)("useremail","==",o.email)),t.next=3,Object(de.e)(Object(de.h)(c));case 3:if(1!=(a=t.sent).empty){t.next=8;break}console.log("\u8cfc\u7269\u8eca\u70ba\u7a7a"),t.next=18;break;case 8:return n=0,r=0,a.forEach((function(e){n=e,r=e.id})),n=Object(de.d)(e,"cart",r),t.next=14,Object(de.e)(Object(de.b)(n,"ctcontent"));case 14:s=t.sent,i=[],s.forEach((function(e){i.push({id:e.id,bfname:e.data().bfname,bfprice:e.data().bfprice,bfquantity:e.data().bfquantity})})),f([].concat(i));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var p=Object(a.useState)([]),x=Object(j.a)(p,2),h=x[0],m=x[1],v=function(){var t=Object(V.a)(Q.a.mark((function t(c){var a,n,r,s;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object(de.h)(Object(de.b)(e,"cart"),Object(de.k)("ctstate","==",0),Object(de.k)("useremail","==",o.email)),t.next=4,Object(de.e)(Object(de.h)(a));case 4:return n=t.sent,r=0,s=0,n.forEach((function(e){console.log(e.id," => ",e.data()),r=e,s=e.id})),r=Object(de.d)(e,"cart",s),t.next=11,Object(de.c)(Object(de.d)(r,"ctcontent",c));case 11:m(h+1),je.a.fire({icon:"success",title:"\u522a\u9664\u6210\u529f\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u9801\u9762"}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}();return Object(U.jsxs)(O.a,{sx:{width:"100vw",maxWidth:360,height:"100vh",backgroundColor:"background.paper",color:"black",textAlign:"left"},children:[Object(U.jsx)(F,{}),Object(U.jsxs)(Ie.a,{"aria-label":"employee list",children:[d.map((function(e,t){return Object(U.jsxs)(Be.a,{divider:!0,onClick:function(){return function(e){s(e)}(t)},selected:r===t,children:[Object(U.jsx)(Ee.a,{primary:e.bfname,secondary:"NT$"+e.bfprice}),Object(U.jsx)("button",{children:"-"}),Object(U.jsx)("input",{id:"num",value:e.bfquantity,size:"1"}),Object(U.jsx)("button",{children:"+"}),Object(U.jsx)(We.a,{edge:"end",onClick:function(){return v(e.id)},children:Object(U.jsx)(pe.a,{})})]},t)})),Object(U.jsxs)(Be.a,{children:[Object(U.jsx)(Ee.a,{children:"\u7e3d\u8a08\uff1a"}),Object(U.jsx)(K.a,{variant:"contained",endIcon:Object(U.jsx)(Pe.a,{}),children:"\u9001\u51fa\u8a02\u55ae"})]})]})]})}var Ne=c(390),Ue=c(416),Fe=c(417),Ae=c(76),Me=c.n(Ae);function ze(){var e=Object(a.useState)([{id:"0",name:"\u8a02\u8cfc\u4eba@gmail.com",department:"\u6728\u661f"},{id:"1",name:"kurosaki@gmail.com",department:"\u8d85\u91cf\u6b21\u5143"}]),t=Object(j.a)(e,1)[0],c=Object(a.useState)([{stuff:"\u5fae\u7b11\u4e16\u754c",quantity:"5"},{stuff:"\u5fae\u7b11\u85e5\u6c34",quantity:"10"},{stuff:"\u5fae\u7b11\u5b87\u5b99",quantity:"15"}]),r=Object(j.a)(c,1)[0],s=Object(a.useState)(0),o=Object(j.a)(s,2),i=(o[0],o[1],n.a.useState(!1)),b=Object(j.a)(i,2);b[0],b[1];return Object(U.jsxs)(O.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(U.jsx)(F,{}),Object(U.jsx)(Ie.a,{"aria-label":"employee list"}),t.map((function(e,t){return Object(U.jsxs)(Ne.a,{children:[Object(U.jsx)(Ue.a,{expandIcon:Object(U.jsx)(Me.a,{}),"aria-controls":"panel1a-content",id:t,children:Object(U.jsx)(we.a,{children:e.name})}),Object(U.jsxs)(Fe.a,{children:[Object(U.jsxs)("strong",{children:["\u5730\u5740\uff1a",e.department]}),Object(U.jsxs)(we.a,{children:[r.map((function(e,t){return Object(U.jsx)(Ee.a,{primary:"\u54c1\u9805\uff1a"+e.stuff,secondary:"\u4efd\u6578\uff1a"+e.quantity})})),Object(U.jsx)(K.a,{variant:"contained",color:"success",edge:"end",children:"\u5b8c\u6210\u8a02\u55ae"})]})]})]})}))]})}function Le(){var e=Object(a.useState)([{id:"0",name:"akabareiji@yahoo.com.tw",department:"\u5929\u738b\u661f"},{id:"1",name:"123@gmail.com",department:"\u6d77\u738b\u661f"}]),t=Object(j.a)(e,1)[0],c=Object(a.useState)([{stuff:"\u5fae\u7b11\u4e16\u754c",quantity:"5"},{stuff:"\u5fae\u7b11\u85e5\u6c34",quantity:"10"},{stuff:"\u5fae\u7b11\u5b87\u5b99",quantity:"15"}]),r=Object(j.a)(c,1)[0],s=Object(a.useState)(0),o=Object(j.a)(s,2),i=(o[0],o[1],n.a.useState(!1)),b=Object(j.a)(i,2);b[0],b[1];return Object(U.jsxs)(O.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(U.jsx)(F,{}),Object(U.jsx)(Ie.a,{"aria-label":"employee list"}),t.map((function(e,t){return Object(U.jsxs)(Ne.a,{children:[Object(U.jsx)(Ue.a,{expandIcon:Object(U.jsx)(Me.a,{}),"aria-controls":"panel1a-content",id:t,children:Object(U.jsx)(we.a,{children:e.name})}),Object(U.jsxs)(Fe.a,{children:[Object(U.jsxs)("strong",{children:["\u5730\u5740\uff1a",e.department]}),Object(U.jsxs)(we.a,{children:[r.map((function(e,t){return Object(U.jsx)(Ee.a,{primary:"\u54c1\u9805\uff1a"+e.stuff,secondary:"\u4efd\u6578\uff1a"+e.quantity})})),Object(U.jsx)(K.a,{variant:"contained",color:"success",edge:"end",disabled:!0,children:"\u5df2\u5b8c\u6210"})]})]})]})}))]})}var Re=c(384),$e=c(394),De=c(179),Je=c.n(De),Qe=(c(387),Object(Y.b)(ee),Object(X.c)());function Ve(){var e;0===Object(Y.a)().length&&Object(Y.b)(ee);var t=Object(a.useContext)(g),c=Object(a.useState)({email:"",password:"",displayName:""}),n=Object(j.a)(c,2),r=n[0],s=n[1],o=Object(a.useState)(""),i=Object(j.a)(o,2),b=i[0],l=(i[1],function(e){s(Object($.a)(Object($.a)({},r),{},Object(R.a)({},e.target.name,e.target.value)))}),u=function(){var e=Object(V.a)(Q.a.mark((function e(){var c,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=Object(Ce.b)(),e.next=4,Object(Ce.a)(c,r.email,r.password);case 4:if(!e.sent){e.next=13;break}return e.next=8,Object(Ce.e)(c.currentUser,{displayName:r.displayName});case 8:return t.setStatus(x),e.next=11,Object(X.a)(Object(X.b)(Qe,"user"),{userauth:parseInt("0"),useremail:r.email,username:r.name});case 11:a=e.sent,console.log(a.id);case 13:je.a.fire({icon:"success",title:"Success",text:"\u8a3b\u518a\u6210\u529f\uff0c\u53ef\u4ee5\u767b\u5165\u4e86\u3002",confirmButtonText:"\u78ba\u5b9a"}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),je.a.fire({icon:"error",title:"Oops...",text:"\u8f38\u5165\u932f\u8aa4\u6216\u5df2\u7d93\u8a3b\u518a\u904e\u4e86\u3002",confirmButtonText:"\u95dc\u9589",showCancelButton:!0,showConfirmButton:!1,cancelButtonText:"\u95dc\u9589"});case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();function d(){return Object(U.jsx)(O.a,{sx:{height:5,backgroundColor:function(e){return"light"===e.palette.mode?"rgba(255, 255, 255, 0.1)":"rgb(255 132 132 / 25%)"}}})}return Object(U.jsx)(O.a,(e={component:"form",sx:{"& .MuiTextField-root":{m:.5,width:"25ch"}},noValidate:!0,autoComplete:"off"},Object(R.a)(e,"sx",{width:"100%",maxWidth:360,bgcolor:"background.paper"}),Object(R.a)(e,"children",Object(U.jsx)(me.a,{children:Object(U.jsxs)(ve.a,{children:[Object(U.jsx)(we.a,{children:Object(U.jsx)(O.a,{display:"flex",justifyContent:"center",alignItems:"center",p:2,children:Object(U.jsx)($e.a,{children:Object(U.jsx)(Je.a,{})})})}),Object(U.jsx)(we.a,{variant:"body2",align:"center",children:Object(U.jsxs)("form",{children:[Object(U.jsx)(Re.a,{type:"text",name:"name",value:r.name,placeholder:"\u59d3\u540d",label:"\u59d3\u540d:",onChange:l}),Object(U.jsx)("br",{}),Object(U.jsx)(d,{}),Object(U.jsx)(Re.a,{type:"email",name:"email",value:r.email,placeholder:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1",label:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1:",onChange:l,autoComplete:"email"}),Object(U.jsx)("br",{}),Object(U.jsx)(d,{}),Object(U.jsx)(Re.a,{type:"password",name:"password",value:r.password,placeholder:"\u5bc6\u78bc",label:"\u5bc6\u78bc:",onChange:l,autoComplete:"current-password"}),Object(U.jsx)("br",{}),b,Object(U.jsx)("br",{}),Object(U.jsx)(K.a,{variant:"contained",color:"primary",onClick:u,children:"\u8a3b\u518a"}),Object(U.jsx)("br",{}),"\u5df2\u7d93\u6709\u5e33\u865f\u4e86\uff1f",Object(U.jsx)(K.a,{color:"secondary",onClick:function(){t.setStatus(x)},children:"\u767b\u5165"})]})})]})})),e))}var _e=c(180),Ge=c.n(_e);Object(Y.b)(ee),Object(X.c)();function He(){var e;0===Object(Y.a)().length&&Object(Y.b)(ee);var t=Object(a.useContext)(g),c=Object(a.useState)({email:"",password:"",displayName:""}),n=Object(j.a)(c,2),r=n[0],s=n[1],o=Object(a.useState)(""),i=Object(j.a)(o,2),b=i[0],l=i[1],u=function(e){s(Object($.a)(Object($.a)({},r),{},Object(R.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(V.a)(Q.a.mark((function e(){var c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=Object(Ce.b)(),e.next=4,Object(Ce.c)(c,r.email,r.password);case 4:e.sent&&t.setStatus(h),l(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),je.a.fire({icon:"error",title:"Oops...",text:"\u5e33\u865f\u6216\u5bc6\u78bc\u8f38\u5165\u932f\u8aa4\u3002",confirmButtonText:"\u95dc\u9589",showCancelButton:!0,showConfirmButton:!1,cancelButtonText:"\u95dc\u9589"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();function f(){return Object(U.jsx)(O.a,{sx:{height:5,backgroundColor:function(e){return"light"===e.palette.mode?"rgba(255, 255, 255, 0.1)":"rgb(255 132 132 / 25%)"}}})}return Object(U.jsx)(O.a,(e={component:"form",sx:{"& .MuiTextField-root":{m:.5,width:"25ch"}},noValidate:!0,autoComplete:"off"},Object(R.a)(e,"sx",{width:"100%",maxWidth:360,bgcolor:"background.paper"}),Object(R.a)(e,"children",Object(U.jsx)(me.a,{children:Object(U.jsxs)(ve.a,{children:[Object(U.jsx)(we.a,{children:Object(U.jsx)(O.a,{display:"flex",justifyContent:"center",alignItems:"center",p:2,children:Object(U.jsx)($e.a,{children:Object(U.jsx)(Ge.a,{})})})}),Object(U.jsx)(we.a,{variant:"body2",align:"center",children:Object(U.jsxs)("form",{children:[Object(U.jsx)(Re.a,{type:"text",name:"email",value:r.email,placeholder:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1",label:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1:",onChange:u,autoComplete:"email"}),Object(U.jsx)("br",{}),Object(U.jsx)(f,{}),Object(U.jsx)(Re.a,{type:"password",name:"password",value:r.password,placeholder:"\u5bc6\u78bc",label:"\u5bc6\u78bc:",onChange:u,autoComplete:"current-password"}),Object(U.jsx)("br",{}),b,Object(U.jsx)("br",{}),Object(U.jsx)(K.a,{variant:"contained",color:"primary",onClick:d,children:"\u767b\u5165"}),Object(U.jsx)("br",{}),"\u9084\u6c92\u6709\u5e33\u865f\uff1f",Object(U.jsx)(K.a,{color:"secondary",onClick:function(){t.setStatus(m)},children:"\u8a3b\u518a"})]})})]})})),e))}function Ke(){0===Object(Y.a)().length&&Object(Y.b)(ee);var e=Object(a.useContext)(g),t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1],s=function(){var t=Object(V.a)(Q.a.mark((function t(){var c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=Object(Ce.b)(),t.next=4,Object(Ce.d)(c);case 4:r(""),e.setStatus(x),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r(""+t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),o=Object(Ce.b)().currentUser;if(o){var i=o.email,b=o.uid;console.log(i,b)}return Object(U.jsxs)("form",{children:[Object(U.jsx)(ke.a,{sx:{width:"100%",maxWidth:360},spacing:2,children:Object(U.jsx)(M.b,{status:"success",title:"\u767b\u5165\u6210\u529f",description:"\u4f7f\u7528\u5e33\u865f\uff1a"+i})}),Object(U.jsx)(K.a,{variant:"contained",color:"primary",onClick:s,children:"\u767b\u51fa"}),n,Object(U.jsx)("br",{})]})}function Xe(){var e=Object(a.useContext)(g);return Object(U.jsxs)("div",{children:[Object(U.jsx)(F,{}),e.status===m?Object(U.jsx)(Ve,{}):e.status===x?Object(U.jsx)(He,{}):Object(U.jsx)(Ke,{})]})}function Ye(){var e=Object(a.useState)(x),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(U.jsx)(g.Provider,{value:{status:c,setStatus:n},children:Object(U.jsx)(l.a,{children:Object(U.jsxs)(u.c,{children:[Object(U.jsx)(u.a,{path:"/",element:Object(U.jsx)(Xe,{})}),Object(U.jsx)(u.a,{path:"/homepage",element:Object(U.jsx)(L,{})}),Object(U.jsx)(u.a,{path:"/product",element:Object(U.jsx)(Se,{})}),Object(U.jsx)(u.a,{path:"/employee",element:Object(U.jsx)(Te,{})}),Object(U.jsx)(u.a,{path:"/newpage",element:Object(U.jsx)(ze,{})}),Object(U.jsx)(u.a,{path:"/complete",element:Object(U.jsx)(Le,{})})]})})})}var Ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function et(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var tt=Object(i.a)({palette:{primary:{main:"#ffdb4d"},secondary:{main:"#ffcc00"}}});s.a.render(Object(U.jsx)(n.a.StrictMode,{children:Object(U.jsx)(b.a,{theme:tt,children:Object(U.jsx)(Ye,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/final",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/final","/service-worker.js");Ze?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var a=c.headers.get("content-type");404===c.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):et(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):et(t,e)}))}}(),o()}},[[325,1,2]]]);
//# sourceMappingURL=main.98f6e8c5.chunk.js.map