"use strict";(self.webpackChunktodoors_web=self.webpackChunktodoors_web||[]).push([[604],{5932:function(e,s,n){n.d(s,{Z:function(){return j}});var a=n(4165),l=n(1413),t=n(5861),i=n(885),r=n(2791),o=n(6015),d=n(7205),c=n(4565),u=n(9444),m=n(5017),x=n(6494),v=n(6856),f=n(1066),h=n(184),p={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",borderRadius:"3%",boxShadow:24,p:4};function j(e){var s,n=e.closeModal,j=e.openModal,b=(e.suspend,r.useState(!1)),N=(0,i.Z)(b,2),Z=(N[0],N[1],r.useState([])),g=(0,i.Z)(Z,2),y=g[0],w=g[1],k=r.useState(null),S=(0,i.Z)(k,2),C=S[0],B=S[1],E=r.useState(!1),D=(0,i.Z)(E,2),G=(D[0],D[1],r.useState(!1)),_=(0,i.Z)(G,2),A=(_[0],_[1],r.useState()),X=(0,i.Z)(A,2),I=X[0],R=X[1],W=r.useState(0),F=(0,i.Z)(W,2),L=F[0],M=F[1],T=r.useState(0),P=(0,i.Z)(T,2),U=P[0],H=P[1],z=r.useState(0),q=(0,i.Z)(z,2),J=q[0],K=q[1];r.useEffect((function(){V()}),[]);var O=y.map((function(e){return{id:null===e||void 0===e?void 0:e.id,code:null===e||void 0===e?void 0:e.code,label:null===e||void 0===e?void 0:e.name}})),Q=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var s,n,t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={account_number:U,account_bank:null===C||void 0===C?void 0:C.code},e.next=3,(0,f.v_)({endpoint:"api/payment/verifyAccountNumber",body:(0,l.Z)({},t),auth:!0});case 3:i=e.sent,console.log(i),R(null===i||void 0===i||null===(s=i.data)||void 0===s||null===(n=s.response)||void 0===n?void 0:n.data),200==i.status&&M((function(e){return e+1}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var s,n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.U2)({endpoint:"api/payment/getAllBanks",auth:!0});case 2:l=e.sent,w(null===l||void 0===l||null===(s=l.data)||void 0===s||null===(n=s.response)||void 0===n?void 0:n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){if(L<2){if(L<1)return void Q();M((function(e){return e+1}))}},$=function(){L>0&&M((function(e){return e-1}))},ee=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={account_number:U,account_bank:null===C||void 0===C?void 0:C.code,amount:+J},e.next=3,(0,f.v_)({endpoint:"api/payment/Withdrawal",body:(0,l.Z)({},s),auth:!0});case 3:e.sent,n();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{children:(0,h.jsx)(u.Z,{open:n,onClose:j,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,h.jsxs)("div",{children:[1==L&&(0,h.jsxs)(o.Z,{sx:p,children:[(0,h.jsx)("div",{className:"flex mb-5 text-left ",children:(0,h.jsx)(c.Z,{variant:"h5",className:"font-bold text-left",children:"Withdraw"})}),(0,h.jsx)("p",{className:"mb-2",children:"How much do you want to withdraw"}),(0,h.jsx)(m.Z,{onChange:function(e){return K(e.target.value)},className:"w-full"}),(0,h.jsxs)("div",{className:"mt-10",children:[(0,h.jsx)("p",{className:"text-primary-main mb-5",children:"Saved Account Info"}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,h.jsx)("p",{children:"Account Number:"}),(0,h.jsx)(c.Z,{variant:"h5",className:"font-bold",children:U})]}),(0,h.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,h.jsx)("p",{children:"Bank"}),(0,h.jsx)(c.Z,{className:"font-bold",children:null===C||void 0===C?void 0:C.label})]}),(0,h.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,h.jsx)("p",{children:"Company"}),(0,h.jsx)(c.Z,{className:"font-bold",children:null===I||void 0===I||null===(s=I.account_name)||void 0===s?void 0:s.toUpperCase()})]})]}),(0,h.jsx)(d.Z,{onClick:function(){return Y()},className:"w-full mb-3 mt-9 bg-primary-main",children:"Confirm Withdrawal"}),(0,h.jsxs)("div",{class:" flex justify-between text-center text-primary-main font-bold",children:[(0,h.jsxs)("div",{className:"flex cursor-pointer",onClick:$,children:[(0,h.jsx)(v.lrP,{className:"mr-1",size:16}),(0,h.jsx)("p",{children:"Go Back"})]}),(0,h.jsx)("p",{children:"Use another account?"})]})]})]}),2==L&&(0,h.jsxs)(o.Z,{sx:p,children:[(0,h.jsx)("div",{className:"flex justify-center mb-5 text-left ",children:(0,h.jsx)(c.Z,{variant:"h5",className:"font-bold",children:"Confirm Withdrawal"})}),(0,h.jsxs)("p",{className:"mb-2 text-center px-8",children:["You are transferring"," ",(0,h.jsxs)("span",{class:"font-bold",children:["NGN ",J," to "]})," ",(0,h.jsx)("br",{}),(0,h.jsx)("p",{class:"font-bold mt-2",children:null===I||void 0===I?void 0:I.account_name})]}),(0,h.jsxs)("div",{className:"mt-10 flex justify-between items-center",children:[(0,h.jsxs)("div",{className:"flex cursor-pointer",onClick:$,children:[(0,h.jsx)(v.lrP,{className:"mr-1",size:16}),(0,h.jsx)("p",{children:"Go Back"})]}),(0,h.jsx)(d.Z,{onClick:function(){return ee()},className:"bg-primary-main",children:"Confirm"})]})]}),0==L&&(0,h.jsxs)(o.Z,{sx:p,children:[(0,h.jsx)("div",{className:"flex justify-center mb-5 text-left ",children:(0,h.jsx)(c.Z,{variant:"h5",className:"font-bold",children:"Input Account Info"})}),(0,h.jsxs)("div",{className:"text-left my-8",children:[(0,h.jsx)("p",{className:"mb-1 text-left text-sm",children:"Bank Name"}),(0,h.jsx)(x.Z,{disablePortal:!0,className:"w-full bg-[#EBEBEB]",id:"combo-box-demo",options:O,sx:{width:300},onChange:function(e,s){return B(s)},renderInput:function(e){return(0,h.jsx)(m.Z,(0,l.Z)({},e))}})]}),(0,h.jsxs)("div",{className:"text-left my-8",children:[(0,h.jsx)("p",{className:"mb-1 text-left text-sm",children:"Account Number"}),(0,h.jsx)(m.Z,{onChange:function(e){return H(e.target.value)},className:"w-full bg-[#EBEBEB]"})]}),(0,h.jsx)("div",{className:"mt-10 flex justify-between items-center",children:(0,h.jsx)(d.Z,{onClick:Y,className:" bg-primary-main h-10 w-full mb-8",children:"Save Account Info"})})]})]})})})}},4789:function(e,s,n){var a=n(885),l=n(2791),t=(n(8152),n(5705),n(7942),n(5588),n(5932),n(2426)),i=n.n(t),r=(n(676),n(8871),n(1598),n(7328),n(656),n(2699),n(7205)),o=n(6871),d=(n(3979),n(1843),n(184));s.Z=function(e){var s=e.tableArray,n=l.useState(!1),t=(0,a.Z)(n,2),c=(t[0],t[1]),u=l.useState(!1),m=(0,a.Z)(u,2),x=m[0],v=m[1],f=l.useState(""),h=(0,a.Z)(f,2),p=h[0],j=h[1];return(0,o.s0)(),(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{onClick:function(){j(!p)},style:{border:"1px solid #DADADA"},className:"px-8 w-full flex border2 py-2 min-h-[50%]",children:[(0,d.jsxs)("div",{className:"w-1/5  p-3 flex items-center",children:[(0,d.jsx)("img",{src:null===s||void 0===s?void 0:s.image,className:"rounded-full mr-2"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"font font-semibold",children:"Bank Transfer"}),(0,d.jsx)("p",{className:"text-[#767676]",children:"Withdraw"})]})]}),(0,d.jsx)("div",{className:"w-1/5  p-3 ",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"font font-semibold",children:i()(null===s||void 0===s?void 0:s.updatedAt).format("ll")}),(0,d.jsx)("p",{className:"text-[#767676]",children:i()(null===s||void 0===s?void 0:s.updatedAt).format("hh:mm:ss")})]})}),(0,d.jsx)("div",{className:"w-1/5 flex items-center p-3 ",children:null===s||void 0===s?void 0:s.id}),(0,d.jsxs)("div",{className:"w-1/5 flex items-center  p-3 ",children:["N ",function(e){var s;return null===e||void 0===e||null===(s=e.toString())||void 0===s?void 0:s.replace(/\B(?=(\d{3})+(?!\d))/g,",")}(null===s||void 0===s?void 0:s.amount)]}),(0,d.jsx)("div",{className:"w-1/5  p-3 ",children:(0,d.jsx)(r.Z,{onClick:function(e){v(!x),c(e)},className:"px-12 bg-primary-main flex items-center h-8",children:"successful"})})]})})})}},604:function(e,s,n){n.r(s),n.d(s,{default:function(){return G}});var a=n(4165),l=n(5861),t=n(885),i=n(2791),r=n(8152),o=n(5705),d=n(7942),c=n(2426),u=n.n(c),m=n(5588),x=(n(656),n(8014)),v=n(2575),f=n(4565),h=n(3978),p=n(7205),j=n(2637),b=n(464),N=n(8440),Z=n(9444),g=n(6015),y=n(1872),w=n(6871),k=n(4781),S=n(676),C=(n(8871),n(5017)),B=(n(3979),n(1843),n(4789),n(1066)),E=n(184);var D=function(e){var s,n,o,d,c,u=e.editbikeObj,x=e.handleClose,v=i.useState(null===u||void 0===u?void 0:u.address),f=(0,t.Z)(v,2),h=f[0],j=f[1],b=i.useState(null===u||void 0===u?void 0:u.city),N=(0,t.Z)(b,2),Z=N[0],g=N[1],y=i.useState(null===u||void 0===u?void 0:u.phoneNo),k=(0,t.Z)(y,2),D=k[0],G=k[1],_=i.useState(null===u||void 0===u?void 0:u.state),A=(0,t.Z)(_,2),X=A[0],I=A[1],R=(0,i.useState)(null===u||void 0===u?void 0:u.email),W=(0,t.Z)(R,2),F=W[0],L=W[1],M=(0,i.useState)(null===u||void 0===u?void 0:u.fname),T=(0,t.Z)(M,2),P=T[0],U=T[1],H=(0,i.useState)(null===u||void 0===u?void 0:u.password),z=(0,t.Z)(H,2),q=z[0],J=(z[1],(0,i.useState)(null===u||void 0===u?void 0:u._id)),K=(0,t.Z)(J,2),O=K[0],Q=(K[1],(0,i.useState)(!1)),V=(0,t.Z)(Q,2),Y=(V[0],V[1],(0,i.useState)(null===u||void 0===u?void 0:u.liscence)),$=(0,t.Z)(Y,2),ee=$[0],se=$[1],ne=(0,i.useState)(null===u||void 0===u||null===(s=u.bikeDetails)||void 0===s?void 0:s.company),ae=(0,t.Z)(ne,2),le=ae[0],te=(ae[1],(0,i.useState)(null===u||void 0===u||null===(n=u.bikeDetails)||void 0===n?void 0:n.bikeModel)),ie=(0,t.Z)(te,2),re=ie[0],oe=(ie[1],(0,i.useState)(null===u||void 0===u||null===(o=u.bikeDetails)||void 0===o?void 0:o.regNo)),de=(0,t.Z)(oe,2),ce=de[0],ue=(de[1],(0,i.useState)(null===u||void 0===u||null===(d=u.bikeDetails)||void 0===d?void 0:d.RC_ownerName)),me=(0,t.Z)(ue,2),xe=me[0],ve=(me[1],(0,i.useState)(null===u||void 0===u||null===(c=u.bikeDetails)||void 0===c?void 0:c.regDate)),fe=(0,t.Z)(ve,2),he=(fe[0],fe[1],(0,i.useState)("")),pe=(0,t.Z)(he,2),je=(pe[0],pe[1],(0,i.useState)({email:"",phoneNo:"",password:"",userType:"rider",companyId:"",fname:"",dob:"1993-12-07T23:00:00.000Z",bloodGroup:"B+",address:"",city:"",state:"",country:"Nigeria",bikeDetails:{type:"bike",company:"",regNo:"",RC_ownerName:"",bikeNo:"",bikeModel:""}})),be=(0,t.Z)(je,2),Ne=(be[0],be[1],(0,w.s0)(),(0,S.Z)()),Ze=(0,m.Ds)().enqueueSnackbar,ge=r.Z.useUpdateBikeMutation({userId:O}),ye=(0,t.Z)(ge,2),we=(ye[0],ye[1],function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={email:F,phoneNo:D,password:q,userType:"rider",companyId:Ne._id,fname:P,dob:"1993-12-07T23:00:00.000Z",bloodGroup:"B+",address:h,city:Z,state:X,country:"Nigeria",bikeDetails:{type:"bike",company:le,regNo:ce,RC_ownerName:xe,bikeNo:"",bikeModel:re}},e.next=3,(0,B.gz)({endpoint:"api/company/updateBike?userId=".concat(O),body:s,auth:!0});case 3:e.sent,Ze("updated successfully",{variant:"success"}),x();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return(0,E.jsx)("div",{className:"add-bike",children:(0,E.jsxs)("div",{class:"w-full",children:[(0,E.jsxs)("div",{className:"flex justify-between my-10",children:[(0,E.jsxs)("div",{className:"w-full mr-[5%]",children:[(0,E.jsx)("p",{className:"font-bold",children:"Drivers Full Name"}),(0,E.jsx)(C.Z,{className:"w-full bg-[#EBEBEB] border-none",multiline:!0,rows:1.5,value:P,onChange:function(e){return U(e.target.value)}})]}),(0,E.jsxs)("div",{className:"w-full ",children:[(0,E.jsx)("p",{className:"font-bold",children:"Drivers Phone No."}),(0,E.jsx)(C.Z,{disabled:!0,className:"w-full bg-[#EBEBEB]",multiline:!0,value:D,rows:1.5,onChange:function(e){return G(e.target.value)}})]})]}),(0,E.jsxs)("div",{className:"flex justify-between my-10",children:[(0,E.jsxs)("div",{className:"w-full mr-[5%]",children:[(0,E.jsx)("p",{className:"font-bold",children:"Email Address"}),(0,E.jsx)(C.Z,{disabled:!0,onChange:function(e){return L(e.target.value)},className:"w-full bg-[#EBEBEB]",value:F,multiline:!0,rows:1.5})]}),(0,E.jsxs)("div",{className:"w-full",children:[(0,E.jsx)("p",{className:"font-bold",children:"Liscence Expiry"}),(0,E.jsx)(C.Z,{className:"w-full bg-[#EBEBEB]",multiline:!0,onChange:function(e){return se(e.target.value)},value:ee,rows:1.5})]})]}),(0,E.jsxs)("div",{className:"flex justify-between my-10",children:[(0,E.jsxs)("div",{className:"w-full mr-[5%]",children:[(0,E.jsx)("p",{className:"font-bold",children:"City"}),(0,E.jsx)(C.Z,{onChange:function(e){return g(e.target.value)},className:"w-full bg-[#EBEBEB]",value:Z,multiline:!0,rows:1.5})]}),(0,E.jsxs)("div",{className:"w-full",children:[(0,E.jsx)("p",{className:"font-bold",children:"State"}),(0,E.jsx)(C.Z,{className:"w-full bg-[#EBEBEB]",multiline:!0,value:X,rows:1.5,onChange:function(e){return I(e.target.value)}})]})]}),(0,E.jsx)("div",{className:"flex justify-between my-10",children:(0,E.jsxs)("div",{className:"w-full ",children:[(0,E.jsx)("p",{className:"font-bold",children:"House Address"}),(0,E.jsx)(C.Z,{className:"w-full bg-[#EBEBEB]",value:h,multiline:!0,rows:2,onChange:function(e){return j(e.target.value)}})]})}),(0,E.jsx)("div",{className:"w-full flex justify-between mb-8 gap-12",children:(0,E.jsx)(p.Z,{onClick:we,className:"h-12 w-2/6 bg-primary-main",children:"Save"})})]})})};var G=function(e){for(var s,n,c,S,C=i.useState(),G=(0,t.Z)(C,2),_=G[0],A=G[1],X=i.useState(),I=(0,t.Z)(X,2),R=I[0],W=I[1],F=i.useState([]),L=(0,t.Z)(F,2),M=L[0],T=L[1],P=i.useState(!1),U=(0,t.Z)(P,2),H=U[0],z=U[1],q=i.useState(!1),J=(0,t.Z)(q,2),K=J[0],O=(J[1],i.useState({})),Q=(0,t.Z)(O,2),V=(Q[0],Q[1],i.useState(!1)),Y=(0,t.Z)(V,2),$=Y[0],ee=Y[1],se=(0,i.useState)(1),ne=(0,t.Z)(se,2),ae=ne[0],le=ne[1],te=null===r.Z||void 0===r.Z?void 0:r.Z.useGetUserQuery({userId:_}),ie=null===te||void 0===te?void 0:te.data,re=null===r.Z||void 0===r.Z?void 0:r.Z.useGetAllBikesQuery({pageNo:ae}),oe=null===re||void 0===re||null===(s=re.data)||void 0===s||null===(n=s.meta)||void 0===n?void 0:n.totalNoOfPages,de=function(){ee(!1),fe()},ce=function(e){le(e),console.log(e)},ue=[],me=1;me<=oe;me++)ue.push(me);var xe=(0,w.s0)();(0,i.useEffect)((function(){fe()}),[ae]);var ve,fe=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var s,n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,B.U2)({endpoint:"api/company/bikes?pageNo=".concat(ae),auth:!0});case 2:l=e.sent,T(null===l||void 0===l||null===(s=l.data)||void 0===s||null===(n=s.data)||void 0===n?void 0:n.sort((function(e,s){return e.created_at-s.created_at})).reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=r.Z.useDeleteBikeMutation(),pe=(0,t.Z)(he,2),je=pe[0],be=(pe[1],function(){var e=(0,l.Z)((0,a.Z)().mark((function e(s){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je({data:{userId:s}});case 3:e.sent,fe(),ge("Bike deleted successfully!",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),ge(null===e.t0||void 0===e.t0||null===(n=e.t0.data)||void 0===n?void 0:n.message,"Failed to login",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(s){return e.apply(this,arguments)}}()),Ne=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(s){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee(!0),W(null===s||void 0===s?void 0:s.obj);case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();function Ze(e,s,n,a,l,t,i,r,o,d,c,u,m){return{place:e,origin:s,image:n,destination:a,rider:l,orderId:t,status:i,fee:r,departureDate:o,arrivalDate:d,timeDelay:c,id:u,obj:m}}ve=null!==M&&void 0!==M&&M.length?null===M||void 0===M?void 0:M.map((function(e){return Ze(e.fname,e.state,e.profileUrl,e.bikeDetails.regNo,e.phoneNo,u()(null===e||void 0===e?void 0:e.created_at).format("ll"),"N200,000","11 Sept. 9:00am","15 Sept. 1:00am","-","",e._id,e)})):[],Ze("Lagos","George Femi","435","NGN30,908","WXHDGDJKGG","Delivered","N200,000","11 Sept. 9:00am","15 Sept. 1:00am","-"),Ze("Lagos","George Femi","435","NGN30,908","WXHDGDJKGG","Delivered","N200,000","11 Sept. 9:00am","15 Sept. 1:00am","-"),Ze("Lagos","George Femi","435","NGN30,908","WXHDGDJKGG","Delivered","N200,000","11 Sept. 9:00am","15 Sept. 1:00am","-"),Ze("Lagos","George Femi","435","NGN30,908","WXHDGDJKGG","Delivered","N200,000","11 Sept. 9:00am","15 Sept. 1:00am","-");var ge=(0,m.Ds)().enqueueSnackbar,ye=r.Z.useLoginMutation(),we=(0,t.Z)(ye,2),ke=we[0];return we[1],(0,o.TA)({initialValues:{username:"",password:""},validationSchema:d.Ry({username:d.Z_().trim().required(),password:d.Z_().trim().required()}),onSubmit:function(){var e=(0,l.Z)((0,a.Z)().mark((function e(s){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xe("/complete-signUp"),e.prev=1,e.next=4,ke({data:s}).unwrap();case 4:e.sent,ge("Logged in successful",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),ge(null===e.t0||void 0===e.t0||null===(n=e.t0.data)||void 0===n?void 0:n.message,"Failed to login",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(s){return e.apply(this,arguments)}}()}),(0,E.jsxs)("div",{children:[(0,E.jsx)(k.Z,{}),(0,E.jsx)(f.Z,{variant:"h5",className:"my-8",children:"Manage Riders/Bikes"}),(0,E.jsx)("nav",{className:"flex justify-center",children:(0,E.jsxs)("ul",{className:"flex",children:[ae>1&&(0,E.jsx)("li",{children:(0,E.jsx)("a",{href:"#",onClick:function(){return ce(ae-1)},className:"py-2 px-4 bg-gray-400 text-white font-bold rounded-l hover:bg-gray-600",children:"Prev"})}),ue.map((function(e){return(0,E.jsx)("li",{children:(0,E.jsx)("a",{href:"#",onClick:function(){return ce(e)},className:ae===e?"py-2 px-4 bg-primary-main text-white font-bold":"py-2 px-4 hover:bg-gray-400/10",children:e})},e)})),ae<ue.length&&(0,E.jsx)("li",{children:(0,E.jsx)("a",{href:"#",onClick:function(){return ce(ae+1)},className:"py-2 px-4 bg-gray-400 text-white font-bold rounded-r hover:bg-gray-600",children:"Next"})})]})}),(null===(c=ve)||void 0===c?void 0:c.length)<1&&(0,E.jsx)(f.Z,{className:"text-center mt-36",variant:"h3",children:"No Registered Riders For This Company"}),!K&&(0,E.jsxs)("div",{className:"",children:[(0,E.jsx)("div",{sx:{minWidth:650},"aria-label":"simple table",children:(0,E.jsx)("div",{className:"mt-3",children:null===(S=ve)||void 0===S?void 0:S.map((function(e){return(0,E.jsxs)("div",{onClick:function(){A(e.id)},className:"flex my-5",sx:{"&:last-child td, &:last-child th":{border:0},marginTop:10,backgroundColor:""},children:[(0,E.jsxs)("div",{onClick:function(){return z(!0)},className:"w-1/5 border3b px-3 py-3 flex gap-2 items-center  text-center",children:[(0,E.jsx)(h.Z,{className:"w-[52px] h-[52px] rounded-full",src:null===e||void 0===e?void 0:e.image}),(0,E.jsxs)("div",{children:[(0,E.jsx)(p.Z,{className:"h-7 bg-primary-main",children:e.origin}),(0,E.jsx)("p",{className:"font-semibold my-2",children:e.place})]})]}),(0,E.jsxs)("div",{className:"w-1/5  px-3 py-3  border3b text-center",children:[(0,E.jsx)("p",{className:"text-[#959595] text-[11px] h-6",children:"Bike Reg No."}),(0,E.jsx)("p",{className:"font-semibold my-2",children:e.destination})]}),(0,E.jsxs)("div",{className:"w-1/5  px-3 py-3  border3b text-center",children:[(0,E.jsx)("p",{className:"text-[#959595] text-[11px] h-6",children:"Phone Number"}),(0,E.jsx)("p",{className:"font-semibold my-2",children:e.rider})]}),(0,E.jsxs)("div",{className:"w-1/5  px-3 py-3  border3b text-center",children:[(0,E.jsx)("p",{className:"text-[#959595] text-[11px] h-6",children:"Reg Date"}),(0,E.jsx)("p",{className:"font-semibold my-2",children:e.orderId})]}),(0,E.jsxs)("div",{className:"w-1/5 cursor-pointer flex gap-5 items-center px-3 py-3  border3b text-center",children:[(0,E.jsxs)("div",{class:"ml-16",children:[(0,E.jsx)(x.Fe4,{className:"mt-2 ml-2 ",style:{color:"#888888"},size:26,onClick:function(){return be(e.id)}}),(0,E.jsx)("p",{className:"text-[#959595] text-[11px] text-left mt-1",children:"Remove"})]})," ",(0,E.jsxs)("div",{children:[(0,E.jsx)(v.Z,{className:"mt-2 ml-2 ",style:{color:"#888888"},size:26,onClick:function(){return Ne(e)}}),(0,E.jsx)("p",{className:"text-[#959595] text-[11px] text-left mt-1 ml-3",children:"Edit"})]})]})]},e.name)}))})}),(0,E.jsx)("div",{children:(0,E.jsxs)(j.Z,{open:$,onClose:de,fullWidth:!0,maxWidth:"lg",style:{width:""},className:"",children:[(0,E.jsx)(b.Z,{id:"alert-dialog-title",children:"Edit Rider"}),(0,E.jsx)(N.Z,{className:"w-full ",children:(0,E.jsx)(D,{handleClose:de,editbikeObj:R})})]})})]}),(0,E.jsx)(Z.Z,{open:H,onClose:function(){return z(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,E.jsx)("div",{children:(0,E.jsx)(g.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",minHeight:"520px",bgcolor:"background.paper",borderRadius:"3%",boxShadow:24,p:4},children:(0,E.jsxs)("div",{children:[(0,E.jsxs)("div",{className:"flex gap-8",children:[(0,E.jsx)("div",{className:"flex",children:(0,E.jsx)(h.Z,{sx:{width:100,height:100},src:"/broken-image.jpg"})}),(0,E.jsx)("div",{className:"mt-4",children:(0,E.jsx)(f.Z,{className:"font-bold",variant:"h5",children:null===ie||void 0===ie?void 0:ie.fname})})]}),(0,E.jsx)(y.Z,{className:"my-8"}),(0,E.jsxs)("div",{class:"flex gap-20",children:[(0,E.jsxs)("div",{className:" gap-16 font-semibold",children:[(0,E.jsx)(f.Z,{className:"my-3 font-semibold",children:"Total Earnings"}),(0,E.jsxs)(f.Z,{className:"font-semibold text-primary-main",children:[" ","XXXXXXX"]})]}),(0,E.jsxs)("div",{className:" font-semibold",children:[(0,E.jsx)(f.Z,{className:"my-3 font-semibold",children:"No Of Rides"}),(0,E.jsx)(f.Z,{className:"font-semibold text-primary-main",children:"XXXXX"})]})]}),(0,E.jsx)(y.Z,{className:"my-8"}),(0,E.jsxs)("div",{class:"flex gap-16 ",children:[(0,E.jsxs)("div",{className:"flex flex-col gap-3 font-semibold",children:[(0,E.jsx)(f.Z,{className:"font-semibold",children:"Address:"}),(0,E.jsx)(f.Z,{className:"font-semibold",children:"Phone Number:"}),(0,E.jsx)(f.Z,{className:"font-semibold",children:"Email address:"}),(0,E.jsx)(f.Z,{className:"font-semibold",children:"ID Card:"}),(0,E.jsx)(f.Z,{className:"font-semibold",children:"Last Login Image"})]}),(0,E.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,E.jsx)(f.Z,{children:null===ie||void 0===ie?void 0:ie.city}),(0,E.jsx)(f.Z,{children:null===ie||void 0===ie?void 0:ie.phoneNo}),(0,E.jsx)(f.Z,{children:null===ie||void 0===ie?void 0:ie.email}),(0,E.jsx)(f.Z,{children:"****"}),(0,E.jsx)(f.Z,{children:"***"})]})]})]})})})})]})}}}]);
//# sourceMappingURL=604.77bce05b.chunk.js.map