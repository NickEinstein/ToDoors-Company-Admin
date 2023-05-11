"use strict";(self.webpackChunktodoors_web=self.webpackChunktodoors_web||[]).push([[577],{5932:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(4165),a=t(1413),i=t(5861),s=t(885),o=t(2791),l=t(6015),c=t(7205),u=t(4565),d=t(9444),f=t(5017),m=t(6494),p=t(6856),v=t(1066),x=t(184),h={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",borderRadius:"3%",boxShadow:24,p:4};function b(e){var n,t=e.closeModal,b=e.openModal,j=(e.suspend,o.useState(!1)),Z=(0,s.Z)(j,2),w=(Z[0],Z[1],o.useState([])),g=(0,s.Z)(w,2),y=g[0],N=g[1],k=o.useState(null),C=(0,s.Z)(k,2),S=C[0],B=C[1],E=o.useState(!1),R=(0,s.Z)(E,2),A=(R[0],R[1],o.useState(!1)),P=(0,s.Z)(A,2),q=(P[0],P[1],o.useState()),I=(0,s.Z)(q,2),M=I[0],T=I[1],D=o.useState(0),_=(0,s.Z)(D,2),U=_[0],O=_[1],F=o.useState(0),L=(0,s.Z)(F,2),G=L[0],z=L[1],W=o.useState(0),Y=(0,s.Z)(W,2),H=Y[0],$=Y[1];o.useEffect((function(){J()}),[]);var V=y.map((function(e){return{id:null===e||void 0===e?void 0:e.id,code:null===e||void 0===e?void 0:e.code,label:null===e||void 0===e?void 0:e.name}})),Q=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,i,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={account_number:G,account_bank:null===S||void 0===S?void 0:S.code},e.next=3,(0,v.v_)({endpoint:"api/payment/verifyAccountNumber",body:(0,a.Z)({},i),auth:!0});case 3:s=e.sent,console.log(s),T(null===s||void 0===s||null===(n=s.data)||void 0===n||null===(t=n.response)||void 0===t?void 0:t.data),200==s.status&&O((function(e){return e+1}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.U2)({endpoint:"api/payment/getAllBanks",auth:!0});case 2:a=e.sent,N(null===a||void 0===a||null===(n=a.data)||void 0===n||null===(t=n.response)||void 0===t?void 0:t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){if(U<2){if(U<1)return void Q();O((function(e){return e+1}))}},X=function(){U>0&&O((function(e){return e-1}))},ee=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={account_number:G,account_bank:null===S||void 0===S?void 0:S.code,amount:+H},e.next=3,(0,v.v_)({endpoint:"api/payment/Withdrawal",body:(0,a.Z)({},n),auth:!0});case 3:e.sent,t();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsx)("div",{children:(0,x.jsx)(d.Z,{open:t,onClose:b,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,x.jsxs)("div",{children:[1==U&&(0,x.jsxs)(l.Z,{sx:h,children:[(0,x.jsx)("div",{className:"flex mb-5 text-left ",children:(0,x.jsx)(u.Z,{variant:"h5",className:"font-bold text-left",children:"Withdraw"})}),(0,x.jsx)("p",{className:"mb-2",children:"How much do you want to withdraw"}),(0,x.jsx)(f.Z,{onChange:function(e){return $(e.target.value)},className:"w-full"}),(0,x.jsxs)("div",{className:"mt-10",children:[(0,x.jsx)("p",{className:"text-primary-main mb-5",children:"Saved Account Info"}),(0,x.jsxs)("div",{className:"",children:[(0,x.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,x.jsx)("p",{children:"Account Number:"}),(0,x.jsx)(u.Z,{variant:"h5",className:"font-bold",children:G})]}),(0,x.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,x.jsx)("p",{children:"Bank"}),(0,x.jsx)(u.Z,{className:"font-bold",children:null===S||void 0===S?void 0:S.label})]}),(0,x.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,x.jsx)("p",{children:"Company"}),(0,x.jsx)(u.Z,{className:"font-bold",children:null===M||void 0===M||null===(n=M.account_name)||void 0===n?void 0:n.toUpperCase()})]})]}),(0,x.jsx)(c.Z,{onClick:function(){return K()},className:"w-full mb-3 mt-9 bg-primary-main",children:"Confirm Withdrawal"}),(0,x.jsxs)("div",{class:" flex justify-between text-center text-primary-main font-bold",children:[(0,x.jsxs)("div",{className:"flex cursor-pointer",onClick:X,children:[(0,x.jsx)(p.lrP,{className:"mr-1",size:16}),(0,x.jsx)("p",{children:"Go Back"})]}),(0,x.jsx)("p",{children:"Use another account?"})]})]})]}),2==U&&(0,x.jsxs)(l.Z,{sx:h,children:[(0,x.jsx)("div",{className:"flex justify-center mb-5 text-left ",children:(0,x.jsx)(u.Z,{variant:"h5",className:"font-bold",children:"Confirm Withdrawal"})}),(0,x.jsxs)("p",{className:"mb-2 text-center px-8",children:["You are transferring"," ",(0,x.jsxs)("span",{class:"font-bold",children:["NGN ",H," to "]})," ",(0,x.jsx)("br",{}),(0,x.jsx)("p",{class:"font-bold mt-2",children:null===M||void 0===M?void 0:M.account_name})]}),(0,x.jsxs)("div",{className:"mt-10 flex justify-between items-center",children:[(0,x.jsxs)("div",{className:"flex cursor-pointer",onClick:X,children:[(0,x.jsx)(p.lrP,{className:"mr-1",size:16}),(0,x.jsx)("p",{children:"Go Back"})]}),(0,x.jsx)(c.Z,{onClick:function(){return ee()},className:"bg-primary-main",children:"Confirm"})]})]}),0==U&&(0,x.jsxs)(l.Z,{sx:h,children:[(0,x.jsx)("div",{className:"flex justify-center mb-5 text-left ",children:(0,x.jsx)(u.Z,{variant:"h5",className:"font-bold",children:"Input Account Info"})}),(0,x.jsxs)("div",{className:"text-left my-8",children:[(0,x.jsx)("p",{className:"mb-1 text-left text-sm",children:"Bank Name"}),(0,x.jsx)(m.Z,{disablePortal:!0,className:"w-full bg-[#EBEBEB]",id:"combo-box-demo",options:V,sx:{width:300},onChange:function(e,n){return B(n)},renderInput:function(e){return(0,x.jsx)(f.Z,(0,a.Z)({},e))}})]}),(0,x.jsxs)("div",{className:"text-left my-8",children:[(0,x.jsx)("p",{className:"mb-1 text-left text-sm",children:"Account Number"}),(0,x.jsx)(f.Z,{onChange:function(e){return z(e.target.value)},className:"w-full bg-[#EBEBEB]"})]}),(0,x.jsx)("div",{className:"mt-10 flex justify-between items-center",children:(0,x.jsx)(c.Z,{onClick:K,className:" bg-primary-main h-10 w-full mb-8",children:"Save Account Info"})})]})]})})})}},6683:function(e,n,t){var r=t(4165),a=t(5861),i=t(885),s=t(2791),o=t(8152),l=t(5705),c=t(7942),u=t(5588),d=t(676),f=t(4565),m=t(6871),p=t(184);n.Z=function(e){var n=s.useState(""),t=(0,i.Z)(n,2),v=(t[0],t[1],(0,m.s0)()),x=((0,d.Z)(),(0,u.Ds)().enqueueSnackbar),h=o.Z.useLoginMutation(),b=(0,i.Z)(h,2),j=b[0];return b[1],(0,l.TA)({initialValues:{username:"",password:""},validationSchema:c.Ry({username:c.Z_().trim().required(),password:c.Z_().trim().required()}),onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v("/complete-signUp"),e.prev=1,e.next=4,j({data:n}).unwrap();case 4:e.sent,x("Logged in successful",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),x(null===e.t0||void 0===e.t0||null===(t=e.t0.data)||void 0===t?void 0:t.message,"Failed to login",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()}),(0,p.jsx)("div",{className:"p-20 w-[136px]",style:{border:"none",borderLeft:e.cutborder?"1px solid #C4C4C4":"none"},children:(0,p.jsx)("div",{className:e.rider?"riders-bg text-white text-center mr-3":e.plain?"plain-bg":e.green?"bg-primary-main text-white":e.big?"text-left":" text-white text-center",sx:{minWidth:e.big?220:155,minHeight:e.big?160:120},children:(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{children:(0,p.jsx)(f.Z,{className:e.plain||e.green?" text-center text-white":e.dashboard?"text-center text-primary-main ":"text-center text-primary-main font-bold",sx:{fontSize:14},children:e.name||"Total Companies"})}),(0,p.jsx)("div",{children:(0,p.jsx)(f.Z,{variant:e.small?"h3":e.earnings?"h5":e.big?"h3":"h2",className:e.green?"text-white text-center font-bold":e.bigspace?"text-center font-bold text-primary-main pr-10":e.big?"font-extrabold text-center text-primary-main":"text-center font-bold text-primary-main px-5",children:e.count})})]})})})}},2145:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(1413),a=t(2982),i=t(4165),s=t(5861),o=t(885),l=t(2791),c=t(8152),u=(t(5705),t(7942),t(2426)),d=t.n(u),f=t(5588),m=t(6113),p=t(676),v=t(8871),x=(t(1598),t(7328),t(5139)),h=t(9338),b=(t(656),t(2699),t(5017)),j=t(8254),Z=t(4565),w=t(4162),g=t(6494),y=t(7205),N=t(3978),k=t(6871),C=(t(3979),t(1843),t(4789),t(6683),t(4781)),S=t(184);var B=t(6571),E=t(9885),R=t(7101);var A=function(e){var n=l.useState(""),t=(0,o.Z)(n,2),u=t[0],A=t[1],P=l.useState(""),q=(0,o.Z)(P,2),I=q[0],M=q[1],T=l.useState(""),D=(0,o.Z)(T,2),_=D[0],U=D[1],O=l.useState(""),F=(0,o.Z)(O,2),L=F[0],G=F[1],z=(0,l.useState)(null),W=(0,o.Z)(z,2),Y=W[0],H=W[1],$=(0,l.useState)(null),V=(0,o.Z)($,2),Q=V[0],J=V[1],K=(0,l.useState)(""),X=(0,o.Z)(K,2),ee=X[0],ne=X[1],te=(0,l.useState)(!1),re=(0,o.Z)(te,2),ae=(re[0],re[1],(0,l.useState)("")),ie=(0,o.Z)(ae,2),se=ie[0],oe=ie[1],le=(0,l.useState)(""),ce=(0,o.Z)(le,2),ue=ce[0],de=ce[1],fe=(0,l.useState)(""),me=(0,o.Z)(fe,2),pe=me[0],ve=me[1],xe=(0,l.useState)(""),he=(0,o.Z)(xe,2),be=he[0],je=he[1],Ze=(0,l.useState)(""),we=(0,o.Z)(Ze,2),ge=we[0],ye=(we[1],(0,l.useState)("")),Ne=(0,o.Z)(ye,2),ke=Ne[0],Ce=(Ne[1],(0,l.useState)("")),Se=(0,o.Z)(Ce,2),Be=Se[0],Ee=Se[1],Re=(0,l.useState)(""),Ae=(0,o.Z)(Re,2),Pe=Ae[0],qe=Ae[1],Ie=(0,l.useState)(""),Me=(0,o.Z)(Ie,2),Te=(Me[0],Me[1]),De=(0,l.useState)([]),_e=(0,o.Z)(De,2),Ue=_e[0],Oe=_e[1],Fe=(0,l.useState)([]),Le=(0,o.Z)(Fe,2),Ge=Le[0],ze=Le[1],We=(0,l.useState)(null),Ye=(0,o.Z)(We,2),He=(Ye[0],Ye[1]),$e=(0,l.useState)([]),Ve=(0,o.Z)($e,2),Qe=Ve[0],Je=Ve[1],Ke=(0,k.s0)(),Xe=(0,p.Z)(),en=(0,f.Ds)().enqueueSnackbar,nn=c.Z.useAddBikeMutation(),tn=(0,o.Z)(nn,2),rn=tn[0],an=(tn[1],function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var n,t,r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Pe){e.next=41;break}if(Y){e.next=4;break}return en("Email is Required",{variant:"error"}),e.abrupt("return");case 4:if(_){e.next=7;break}return en("phoneNumber Required",{variant:"error"}),e.abrupt("return");case 7:if(ee){e.next=10;break}return en("password Required",{variant:"error"}),e.abrupt("return");case 10:if(Q){e.next=13;break}return en("Driver's name Required",{variant:"error"}),e.abrupt("return");case 13:if(u){e.next=16;break}return en("Address Required",{variant:"error"}),e.abrupt("return");case 16:if(I){e.next=19;break}return en("City Required",{variant:"error"}),e.abrupt("return");case 19:if(L){e.next=22;break}return en("State Required",{variant:"error"}),e.abrupt("return");case 22:if(be){e.next=25;break}return en("Bike Reg No Required",{variant:"error"}),e.abrupt("return");case 25:if(pe){e.next=28;break}return en("Bike Model Required",{variant:"error"}),e.abrupt("return");case 28:return e.prev=28,e.next=31,rn({data:{email:Y,phoneNo:"+234".concat(_),password:ee,userType:"rider",companyId:Xe._id,fname:Q,dob:"1993-12-07T23:00:00.000Z",bloodGroup:"B+",address:u,city:I,state:L,country:"Nigeria",bikeDetails:{type:"bike",company:ue,regNo:be,RC_ownerName:ge,bikeNo:"",bikeModel:pe}}}).unwrap();case 31:r=e.sent,cn(null===r||void 0===r||null===(n=r.data)||void 0===n||null===(t=n.user)||void 0===t?void 0:t._id),en(r.message,{variant:"success"}),e.next=39;break;case 36:e.prev=36,e.t0=e.catch(28),en(null===e.t0||void 0===e.t0||null===(a=e.t0.data)||void 0===a?void 0:a.message,"Failed to login",{variant:"error"});case 39:e.next=42;break;case 41:en("Profile picture Required",{variant:"error"});case 42:case"end":return e.stop()}}),e,null,[[28,36]])})));return function(){return e.apply(this,arguments)}}()),sn=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var n,t,r,a,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Pe){e.next=54;break}if(Y){e.next=4;break}return en("Email is Required",{variant:"error"}),e.abrupt("return");case 4:if(_){e.next=7;break}return en("phoneNumber Required",{variant:"error"}),e.abrupt("return");case 7:if(ee){e.next=10;break}return en("password Required",{variant:"error"}),e.abrupt("return");case 10:if(Q){e.next=13;break}return en("Driver's name Required",{variant:"error"}),e.abrupt("return");case 13:if(u){e.next=16;break}return en("Address Required",{variant:"error"}),e.abrupt("return");case 16:if(I){e.next=19;break}return en("City Required",{variant:"error"}),e.abrupt("return");case 19:if(L){e.next=22;break}return en("State Required",{variant:"error"}),e.abrupt("return");case 22:if(be){e.next=25;break}return en("Bike Reg No Required",{variant:"error"}),e.abrupt("return");case 25:if(pe){e.next=28;break}return en("Bike Model Required",{variant:"error"}),e.abrupt("return");case 28:return e.prev=28,e.next=31,rn({data:{email:Y,phoneNo:_,password:ee,userType:"rider",companyId:Xe._id,fname:Q,dob:se,bloodGroup:"B+",address:u,city:I,state:L,country:"Nigeria",bikeDetails:{type:"bike",company:ue,regNo:be,RC_ownerName:ge,bikeNo:"",bikeModel:pe,regDate:ke}}}).unwrap();case 31:r=e.sent,cn(null===r||void 0===r||null===(n=r.data)||void 0===n||null===(t=n.user)||void 0===t?void 0:t._id),en(r.message,{variant:"success"}),A(""),M(""),U(""),G(""),H(""),J(""),ne(""),Ee(""),oe(""),de(""),ve(""),je(""),Ke(v.g.TRIPS),e.next=52;break;case 49:e.prev=49,e.t0=e.catch(28),Object.keys(null===e.t0||void 0===e.t0||null===(a=e.t0.data)||void 0===a||null===(s=a.errors)||void 0===s||null===(o=s.message)||void 0===o?void 0:o.errors).forEach((function(n){var t,r,a,i,s,o;console.log("".concat(n,": ").concat(null===e.t0||void 0===e.t0||null===(t=e.t0.data)||void 0===t||null===(r=t.errors)||void 0===r||null===(a=r.message)||void 0===a?void 0:a.errors[n])),en(null===e.t0||void 0===e.t0||null===(i=e.t0.data)||void 0===i||null===(s=i.errors)||void 0===s||null===(o=s.message)||void 0===o?void 0:o.errors[n],"Failed to login",{variant:"error"})}));case 52:e.next=55;break;case 54:en("Profile picture Required",{variant:"error"});case 55:case"end":return e.stop()}}),e,null,[[28,49]])})));return function(){return e.apply(this,arguments)}}(),on=function(e,n,t){var r=new FormData;if(console.log(n),e.target.files[0]){r.append("image",e.target.files[0]);var i=new FileReader;i.addEventListener("load",(function(){He(i.result),Qe.length<3&&Je([].concat((0,a.Z)(Qe),[{id:t,file:r,readerURL:i.result,type:n}]))})),i.readAsDataURL(e.target.files[0])}ln(e.target.files[0])},ln=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new FormData).append("image",n),Te(n.name),qe(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),cn=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t,r,a,s,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(new FormData).append("image",null===(t=Qe[0])||void 0===t?void 0:t.file),r=0;case 3:if(!(r<Qe.length)){e.next=12;break}return console.log(Qe[r].type),e.next=7,(0,E.v_)({endpoint:"api/company/uploadForCompany?id=".concat(n),auth:!0,body:Qe[r].file,updateType:Qe[r].type});case 7:null!==(s=e.sent)&&void 0!==s&&null!==(a=s.data)&&void 0!==a&&a.success?(en(null===s||void 0===s||null===(o=s.data)||void 0===o?void 0:o.message,{variant:"success"}),qe("")):(console.log(s),en((null===s||void 0===s||null===(l=s.data)||void 0===l?void 0:l.message)||"File too large",{variant:"error"}));case 9:r++,e.next=3;break;case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),un=Ue.map((function(e){return{title:null===e||void 0===e?void 0:e.name,year:e.id,alias:null===e||void 0===e?void 0:e.alias}})),dn=Ge.map((function(e){return{title:null===e||void 0===e?void 0:e.name,year:e.id,alias:null===e||void 0===e?void 0:e.alias}}));(0,l.useEffect)((function(){fn()}),[]);var fn=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var n,t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,R.U2)({endpoint:"states",auth:!1});case 2:t=e.sent,Oe(null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),mn=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t,r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Ue.find((function(e){return e.name==n})),e.next=3,(0,R.U2)({endpoint:"regions/".concat(r.alias),auth:!1});case 3:a=e.sent,ze(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,S.jsxs)("div",{className:"add-bike",children:[(0,S.jsx)(C.Z,{}),(0,S.jsxs)("div",{className:"bg-yellow-400 mt-5 p-4 flex justify-between items-center",children:[(0,S.jsx)("p",{className:"text-sm md:text-base font-medium text-gray-800",children:"Please complete your profile and Verify Account to access Add Bikes"}),(0,S.jsx)("button",{className:"ml-4 bg-gray-800 text-white font-medium py-3 px-4 rounded hover:bg-gray-700 transition duration-200",onClick:function(){return Ke("/profile")},children:"Complete Profile"})]}),(0,S.jsxs)("div",{class:"pr-[15%]",children:[(0,S.jsxs)("div",{className:"flex justify-between my-10",children:[(0,S.jsxs)("div",{className:"w-full mr-[5%]",children:[(0,S.jsx)("p",{className:"font-bold",children:"Drivers Full Name"}),(0,S.jsx)(b.Z,{className:"w-full bg-[#EBEBEB] border-none",multiline:!0,rows:1.5,value:Q,onChange:function(e){return J(e.target.value)}})]}),(0,S.jsxs)("div",{className:"w-full ",children:[(0,S.jsx)("p",{className:"font-bold",children:"Drivers Phone No."}),(0,S.jsx)(b.Z,{size:"medium",className:"w-full bg-[#EBEBEB] border-none",InputProps:{startAdornment:(0,S.jsx)(j.Z,{position:"start",children:"+234"})},value:_,onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&function(e){e.target.value.length>0&&"0"!==e.target.value.charAt(0)?U(e.target.value):(U(""),en("Number cannot start with 0",{variant:"error"}))}(e)}})]})]}),(0,S.jsxs)("div",{className:"flex justify-between my-10",children:[(0,S.jsxs)("div",{className:"w-full mr-[5%]",children:[(0,S.jsx)("p",{className:"font-bold",children:"Email Address"}),(0,S.jsx)(b.Z,{onChange:function(e){return H(e.target.value)},className:"w-full bg-[#EBEBEB]",value:Y,multiline:!0,rows:1.5})]}),(0,S.jsxs)("div",{className:"w-full",children:[(0,S.jsx)(Z.Z,{className:"font-bold",children:"Date Of Birth"}),(0,S.jsx)("div",{children:(0,S.jsx)(B._,{dateAdapter:h.H,children:(0,S.jsx)("div",{className:"flex-between",children:(0,S.jsx)(x.M,{className:" mr-8 w-full",value:se,onChange:function(e){oe(d()(e).format("YYYY-MM-DD"))},renderInput:function(e){return(0,S.jsx)(b.Z,(0,r.Z)({},e))}})})})})]})]}),(0,S.jsxs)("div",{className:"flex justify-between my-10",children:[(0,S.jsxs)("div",{className:"w-full mr-[5%]",children:[(0,S.jsx)("p",{className:"font-bold",children:"State"}),(0,S.jsx)(w.Z,{spacing:2,children:(0,S.jsx)(g.Z,{id:"free-solo-2-demo",disableClearable:!0,options:un.map((function(e){return e.title})),onChange:function(e,n){mn(n),G(n)},renderInput:function(e){return(0,S.jsx)(b.Z,(0,r.Z)((0,r.Z)({className:"w-full bg-[#EBEBEB]",multiline:!0,rows:1.5},e),{},{InputProps:(0,r.Z)((0,r.Z)({},e.InputProps),{},{type:"search"})}))}})})]}),(0,S.jsxs)("div",{className:"w-full ",children:[(0,S.jsx)("p",{className:"font-bold",children:"City"}),(0,S.jsx)(w.Z,{spacing:2,children:(0,S.jsx)(g.Z,{id:"free-solo-2-demo",disableClearable:!0,options:dn.map((function(e){return e.title})),onChange:function(e,n){M(n)},renderInput:function(e){return(0,S.jsx)(b.Z,(0,r.Z)((0,r.Z)({className:"w-full bg-[#EBEBEB]",multiline:!0,rows:1.5},e),{},{InputProps:(0,r.Z)((0,r.Z)({},e.InputProps),{},{type:"search"})}))}})})]})]}),(0,S.jsx)("div",{className:"flex justify-between my-10",children:(0,S.jsxs)("div",{className:"w-full ",children:[(0,S.jsx)("p",{className:"font-bold",children:"House Address"}),(0,S.jsx)(b.Z,{className:"w-full bg-[#EBEBEB]",value:u,multiline:!0,rows:2,onChange:function(e){return A(e.target.value)}})]})}),(0,S.jsx)(Z.Z,{variant:"h4",children:"Bike Details"}),(0,S.jsx)("div",{className:"flex justify-between my-10",children:(0,S.jsxs)("div",{className:"w-full ",children:[(0,S.jsx)("p",{className:"font-bold",children:"Bike Model/Brand"}),(0,S.jsx)(b.Z,{className:"w-full bg-[#EBEBEB]",onChange:function(e){return ve(e.target.value)},value:pe})]})}),(0,S.jsx)("div",{className:"flex justify-between my-10",children:(0,S.jsxs)("div",{className:"w-full mr-[5%]",children:[(0,S.jsx)("p",{className:"font-bold",children:"Bike Reg No."}),(0,S.jsx)(b.Z,{onChange:function(e){return je(e.target.value)},className:"w-full bg-[#EBEBEB]",value:be})]})}),(0,S.jsx)("div",{className:"flex justify-between my-10",children:(0,S.jsx)("div",{className:"w-full mr-[5%]"})}),(0,S.jsxs)("div",{className:"flex justify-between my-10",children:[(0,S.jsxs)("div",{className:"w-full mr-[5%]",children:[(0,S.jsx)("p",{className:"font-bold",children:"Create Temporary Password"}),(0,S.jsx)(m.Z,{onChange:function(e){return ne(e.target.value)},className:"w-full bg-[#EBEBEB]",rows:1.5,value:ee})]}),(0,S.jsxs)("div",{className:"w-full ",children:[(0,S.jsx)("p",{className:"font-bold",children:"Confirm Password"}),(0,S.jsx)(m.Z,{className:"w-full bg-[#EBEBEB]",rows:1.5,onChange:function(e){return Ee(e.target.value)},value:Be})]})]}),(0,S.jsxs)("div",{class:"flex justify-between",children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("input",{onChange:function(e){return on(e,"profile",1)},style:{display:"none"},id:"contained-button-file",type:"file"}),(0,S.jsx)("label",{htmlFor:"contained-button-file",className:"mb-8",children:(0,S.jsx)(y.Z,{variant:"contained",color:"primary",component:"span",children:"Upload Profile Picture"})})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("input",{onChange:function(e){return on(e,"bike",2)},style:{display:"none"},id:"contained-button-file2",type:"file"}),(0,S.jsx)("label",{htmlFor:"contained-button-file2",className:"mb-8",children:(0,S.jsx)(y.Z,{variant:"contained",color:"primary",component:"span",children:"Upload Bike Picture"})})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("input",{onChange:function(e){return on(e,"driverLicense",3)},style:{display:"none"},id:"contained-button-file3",type:"file"}),(0,S.jsx)("label",{htmlFor:"contained-button-file3",className:"mb-8",children:(0,S.jsx)(y.Z,{variant:"contained",color:"primary",component:"span",children:"Upload liscence Picture"})})]})]}),(0,S.jsxs)("div",{class:"flex justify-between mt-5",children:[Qe.length>0&&Qe.sort((function(e,n){return e.id-n.id})).map((function(e){return(0,S.jsxs)("div",{children:[(0,S.jsxs)("div",{className:"relative w-20",children:[(0,S.jsx)(N.Z,{className:"w-32 h-32 border border-blue-300",src:e.readerURL}),(0,S.jsx)("div",{onClick:function(){return n=e,console.log(n),void Je(Qe.filter((function(e){return e.id!==n.id})));var n},className:"p-1 bg-red-500 absolute w-4 h-4 flex justify-center hover:cursor-pointer items-center top-0 left-32 text-white rounded-full",children:"x"})]}),(0,S.jsx)(Z.Z,{className:"text-center font-bold",children:e.file.name}),(0,S.jsxs)(Z.Z,{className:"text-center font-bold",children:["( ",e.type,")"]})]})})),Qe.length<=1&&(0,S.jsx)("div",{}),Qe.length<=2&&(0,S.jsx)("div",{})]}),(0,S.jsxs)("div",{className:"w-full flex justify-between my-8 gap-12",children:[(0,S.jsx)(y.Z,{disabled:!Xe.verifies,onClick:an,className:"h-12 w-2/6 bg-primary-main",children:"Save"}),(0,S.jsx)(y.Z,{disabled:!Xe.verifies,onClick:function(){return sn()},className:"h-12 w-2/6 bg-primary-main",children:"Save & Continue"})]})]})]})}},4789:function(e,n,t){var r=t(885),a=t(2791),i=(t(8152),t(5705),t(7942),t(5588),t(5932),t(2426)),s=t.n(i),o=(t(676),t(8871),t(1598),t(7328),t(656),t(2699),t(7205)),l=t(6871),c=(t(3979),t(1843),t(184));n.Z=function(e){var n=e.tableArray,t=a.useState(!1),i=(0,r.Z)(t,2),u=(i[0],i[1]),d=a.useState(!1),f=(0,r.Z)(d,2),m=f[0],p=f[1],v=a.useState(""),x=(0,r.Z)(v,2),h=x[0],b=x[1];return(0,l.s0)(),(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:"",children:(0,c.jsxs)("div",{onClick:function(){b(!h)},style:{border:"1px solid #DADADA"},className:"px-8 w-full flex border2 py-2 min-h-[50%]",children:[(0,c.jsxs)("div",{className:"w-1/5  p-3 flex items-center",children:[(0,c.jsx)("img",{src:null===n||void 0===n?void 0:n.image,className:"rounded-full mr-2"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"font font-semibold",children:"Bank Transfer"}),(0,c.jsx)("p",{className:"text-[#767676]",children:"Withdraw"})]})]}),(0,c.jsx)("div",{className:"w-1/5  p-3 ",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"font font-semibold",children:s()(null===n||void 0===n?void 0:n.updatedAt).format("ll")}),(0,c.jsx)("p",{className:"text-[#767676]",children:s()(null===n||void 0===n?void 0:n.updatedAt).format("hh:mm:ss")})]})}),(0,c.jsx)("div",{className:"w-1/5 flex items-center p-3 ",children:null===n||void 0===n?void 0:n.id}),(0,c.jsxs)("div",{className:"w-1/5 flex items-center  p-3 ",children:["N ",function(e){var n;return null===e||void 0===e||null===(n=e.toString())||void 0===n?void 0:n.replace(/\B(?=(\d{3})+(?!\d))/g,",")}(null===n||void 0===n?void 0:n.amount)]}),(0,c.jsx)("div",{className:"w-1/5  p-3 ",children:(0,c.jsx)(o.Z,{onClick:function(e){p(!m),u(e)},className:"px-12 bg-primary-main flex items-center h-8",children:"successful"})})]})})})}},7101:function(e,n,t){t.d(n,{U2:function(){return c}});var r=t(4165),a=t(5861),i=t(4569),s=t.n(i),o=t(1101),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,i,l,c,u,d){var f,m,p,v,x,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f={"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST GET OPTIONS"},m=o.Z[n]||n,p="https://locus.fkkas.com/api/".concat(m),u&&(p+="/".concat(u)),c&&(v=Object.keys(c).map((function(e){return c[e]&&"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(c[e]))})),p+="?".concat(v.join("&"))),i&&(x=localStorage.getItem("token"))&&(f.Authorization="".concat(x)),h={url:p,method:t,headers:f},l&&(h.data=l),e.abrupt("return",s()(h).then((function(e){return e}),function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&n.response&&n.response.status,e.abrupt("return",n.response);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 9:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s,o){return e.apply(this,arguments)}}(),c=function(e){var n=e.endpoint,t=e.pQuery,r=e.param,a=void 0===r?null:r,i=e.auth;return l(n,"GET",void 0===i||i,null,t,a)}},9885:function(e,n,t){t.d(n,{gz:function(){return u},v_:function(){return c}});var r=t(4165),a=t(5861),i=t(4569),s=t.n(i),o=t(1101),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,i,l,c,u,d,f){var m,p,v,x,h,b;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m={"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST GET OPTIONS",updatetype:f},console.log(f),p=o.Z[n]||n,v="".concat("https://app.todoorapp.com","/").concat(p),u&&(v+="/".concat(u)),c&&(x=Object.keys(c).map((function(e){return c[e]&&"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(c[e]))})),v+="?".concat(x.join("&"))),i&&(h=localStorage.getItem("token"))&&(m.Authorization="".concat(h)),b={url:v,method:t,headers:m},l&&(b.data=l),e.abrupt("return",s()(b).then((function(e){return e}),function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&n.response&&n.response.status,e.abrupt("return",n.response);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 10:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s,o,l){return e.apply(this,arguments)}}(),c=function(e){var n=e.endpoint,t=e.body,r=e.auth,a=void 0===r||r,i=e.multipart,s=e.updateType;return l(n,"POST",a,t,null,null,i,s)},u=function(e){var n=e.endpoint,t=e.body,r=e.auth,a=void 0===r||r,i=e.multipart,s=e.updateType;return l(n,"PUT",a,t,null,null,i,s)}},5194:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(7462),a=t(3366),i=t(2791),s=t(8182),o=t(4419),l=t(6863),c=t(7254),u=t(1217);function d(e){return(0,u.Z)("MuiCardContent",e)}(0,t(5878).Z)("MuiCardContent",["root"]);var f=t(184),m=["className","component"],p=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=i.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiCardContent"}),i=t.className,l=t.component,u=void 0===l?"div":l,v=(0,a.Z)(t,m),x=(0,r.Z)({},t,{component:u}),h=function(e){var n=e.classes;return(0,o.Z)({root:["root"]},d,n)}(x);return(0,f.jsx)(p,(0,r.Z)({as:u,className:(0,s.Z)(h.root,i),ownerState:x,ref:n},v))}))},8928:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(7462),a=t(3366),i=t(2791),s=t(8182),o=t(4419),l=t(6863),c=t(7254),u=t(6650),d=t(1217);function f(e){return(0,d.Z)("MuiCard",e)}(0,t(5878).Z)("MuiCard",["root"]);var m=t(184),p=["className","raised"],v=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),x=i.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiCard"}),i=t.className,l=t.raised,u=void 0!==l&&l,d=(0,a.Z)(t,p),x=(0,r.Z)({},t,{raised:u}),h=function(e){var n=e.classes;return(0,o.Z)({root:["root"]},f,n)}(x);return(0,m.jsx)(v,(0,r.Z)({className:(0,s.Z)(h.root,i),elevation:u?8:void 0,ref:n,ownerState:x},d))}))},4162:function(e,n,t){var r=t(4942),a=t(3366),i=t(7462),s=t(2791),o=t(1184),l=t(5682),c=t(8519),u=t(2466),d=t(6863),f=t(7254),m=t(184),p=["component","direction","spacing","divider","children"];function v(e,n){var t=s.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,a){return e.push(r),a<t.length-1&&e.push(s.cloneElement(n,{key:"separator-".concat(a)})),e}),[])}var x=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,a=(0,i.Z)({display:"flex",flexDirection:"column"},(0,o.k9)({theme:t},(0,o.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var s=(0,l.hB)(t),c=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),d=(0,o.P$)({values:n.direction,base:c}),f=(0,o.P$)({values:n.spacing,base:c});"object"===typeof d&&Object.keys(d).forEach((function(e,n,t){if(!d[e]){var r=n>0?d[t[n-1]]:"column";d[e]=r}}));a=(0,u.Z)(a,(0,o.k9)({theme:t},f,(function(e,t){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((a=t?d[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,l.NA)(s,e))};var a})))}return a=(0,o.dt)(t.breakpoints,a)})),h=s.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiStack"}),r=(0,c.Z)(t),s=r.component,o=void 0===s?"div":s,l=r.direction,u=void 0===l?"column":l,d=r.spacing,h=void 0===d?0:d,b=r.divider,j=r.children,Z=(0,a.Z)(r,p),w={direction:u,spacing:h};return(0,m.jsx)(x,(0,i.Z)({as:o,ownerState:w,ref:n},Z,{children:b?v(j,b):j}))}));n.Z=h}}]);
//# sourceMappingURL=577.be98903f.chunk.js.map