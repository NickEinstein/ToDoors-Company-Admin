"use strict";(self.webpackChunktodoors_web=self.webpackChunktodoors_web||[]).push([[205],{1598:function(e,n,r){r.d(n,{Z:function(){return i}});r(2791);var t=r.p+"static/media/ToDoorLogo.562d9fab7d32889b4b0e.png",s=r(6871),a=r(184),i=function(e){var n=(0,s.s0)();return(0,a.jsx)("div",{className:"flex ",children:(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("div",{className:"flex relative items-center",children:(0,a.jsx)("img",{src:t,alt:"softwork logo",className:"cursor-pointer w-36",onClick:function(){n("/")}})})})})}},6113:function(e,n,r){var t=r(1413),s=r(885),a=r(5987),i=r(2791),o=r(5017),l=r(8254),c=r(3811),u=r(409),d=r(8182),m=r(184),v=["error"];n.Z=function(e){var n=e.error,r=(0,a.Z)(e,v),f=i.useState(!1),p=(0,s.Z)(f,2),h=p[0],x=p[1],Z=i.useCallback((function(){return x((function(e){return!e}))}),[]);return(0,m.jsx)(o.Z,(0,t.Z)({type:h?"text":"password",InputProps:{endAdornment:(0,m.jsx)(l.Z,{position:"end",children:(0,m.jsx)(c.Z,{"aria-label":"toggle password visibility",onClick:Z,disabled:e.disabled,children:(0,m.jsx)(u.Z,{className:(0,d.Z)(n?"text-danger":"text-primary"),children:h?"visibility_off":"visibility"})})})},error:n},r))}},2594:function(e,n,r){r.r(n);var t=r(4165),s=r(1413),a=r(5861),i=r(885),o=r(2791),l=r(8152),c=r(5705),u=(r(7942),r(5588)),d=r(6113),m=r(7342),v=r(1598),f=r(4871),p=r(2900),h=r(8823),x=r(1917),Z=(r(4569),r(4565)),j=r(5017),b=r(4162),w=r(6494),g=r(7205),y=r(6871),N=r(7101),k=r(184);n.default=function(e){var n=(0,o.useState)([]),r=(0,i.Z)(n,2),P=r[0],C=r[1],S=(0,o.useState)([]),I=(0,i.Z)(S,2),A=I[0],E=I[1],T=o.useState(""),z=(0,i.Z)(T,2),O=z[0],R=z[1],U=o.useState(""),M=(0,i.Z)(U,2),W=M[0],D=M[1],$=o.useState(""),B=(0,i.Z)($,2),L=B[0],_=B[1],F=(0,y.s0)(),G=(0,u.Ds)().enqueueSnackbar,q=l.Z.useSignupMutation(),Q=(0,i.Z)(q,1)[0],V=(0,c.TA)({initialValues:{email:"",password:"",userType:"company",fname:"",country:"Nigeria",state:"",city:"",address:"",dob:""},onSubmit:function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a,i,o,l,c,u,d,m,v,f,p,h;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("il",!0),console.log(n),e.prev=2,e.next=5,Q({data:(0,s.Z)((0,s.Z)({},n),{},{state:W,city:O,phoneNo:L})}).unwrap();case 5:r=e.sent,G(null===r||void 0===r?void 0:r.message,{variant:"success"}),console.log(null===r||void 0===r?void 0:r.message),F("/"),e.next=17;break;case 11:for(e.prev=11,e.t0=e.catch(2),console.log(null===e.t0||void 0===e.t0||null===(a=e.t0.data)||void 0===a||null===(i=a.errors)||void 0===i?void 0:i.message.errors),console.log(Object.keys(null===e.t0||void 0===e.t0||null===(o=e.t0.data)||void 0===o||null===(l=o.errors)||void 0===l?void 0:l.message.errors)),d=Object.keys(null===e.t0||void 0===e.t0||null===(c=e.t0.data)||void 0===c||null===(u=c.errors)||void 0===u?void 0:u.message.errors),m=0;m<d.length;m++)console.log(null===e.t0||void 0===e.t0||null===(v=e.t0.data)||void 0===v||null===(f=v.errors)||void 0===f?void 0:f.message.errors[d[m]][0]),G(null===e.t0||void 0===e.t0||null===(p=e.t0.data)||void 0===p||null===(h=p.errors)||void 0===h?void 0:h.message.errors[d[m]][0],"Failed to login",{variant:"error"});case 17:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(n){return e.apply(this,arguments)}}()});(0,o.useEffect)((function(){H()}),[]);var H=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,N.U2)({endpoint:"states",auth:!1});case 2:r=e.sent,C(null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,s,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=P.find((function(e){return e.name==n})),e.next=3,(0,N.U2)({endpoint:"regions/".concat(s.alias),auth:!1});case 3:a=e.sent,E(null===a||void 0===a||null===(r=a.data)||void 0===r?void 0:r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=null===P||void 0===P?void 0:P.map((function(e){return{title:null===e||void 0===e?void 0:e.name,year:e.id,alias:null===e||void 0===e?void 0:e.alias}})),X=null===A||void 0===A?void 0:A.map((function(e){return{title:null===e||void 0===e?void 0:e.name,year:e.id,alias:null===e||void 0===e?void 0:e.alias}}));return(0,k.jsx)("div",{className:"z  pl-24",children:(0,k.jsxs)("div",{className:"flex justify-between ",children:[(0,k.jsxs)("div",{className:"pt-4",style:{paddingLeft:"",paddingRight:"",minWidth:"40%"},children:[(0,k.jsx)(v.Z,{}),(0,k.jsxs)("div",{className:"flex-vertical",children:[(0,k.jsx)("div",{className:"my-8",children:(0,k.jsx)(Z.Z,{variant:"h3",className:"mb-2 mt-3 font-bold",children:"Sign Up"})}),(0,k.jsxs)("form",{onSubmit:V.handleSubmit,children:[(0,k.jsxs)("div",{class:"flex gap-5 w-full",children:[(0,k.jsxs)("div",{className:"w-full",children:[(0,k.jsx)(Z.Z,{variant:"h6",className:"mb-2",children:"Email Address"}),(0,k.jsx)(j.Z,(0,s.Z)({multiline:!0,rows:1.5,fullWidth:!0,size:"medium",className:"w-full",placeholder:"Enter your email",name:"email"},(0,m.P)(V,"email")))]}),(0,k.jsxs)("div",{className:"w-full",children:[(0,k.jsx)(Z.Z,{variant:"h6",className:"mb-2",children:"Phone Number"}),(0,k.jsx)(j.Z,{multiline:!0,rows:1.5,fullWidth:!0,type:"number",size:"medium",className:"w-full",placeholder:"Enter your Phone Number",name:"phoneNo",onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&_(e.target.value)},value:L})]})]}),(0,k.jsxs)("div",{class:"flex gap-5",children:[(0,k.jsxs)("div",{className:"w-full",children:[(0,k.jsx)(Z.Z,{variant:"h6",className:"mb-2 mt-4",children:"Company Name"}),(0,k.jsx)(j.Z,(0,s.Z)({multiline:!0,rows:1.5,fullWidth:!0,size:"medium",className:"w-full",placeholder:"Enter your Company Name",name:"fname"},(0,m.P)(V,"fname")))]}),(0,k.jsxs)("div",{className:"w-full",children:[(0,k.jsx)(Z.Z,{variant:"h6",className:"mb-2 mt-4",children:"Country"}),(0,k.jsx)(j.Z,{value:"Nigeria",multiline:!0,rows:1.5,fullWidth:!0,size:"medium",className:"w-full",placeholder:"Enter your Country",name:"country"})]})]}),(0,k.jsxs)("div",{className:"flex justify-between my-4",children:[(0,k.jsxs)("div",{className:"w-full mr-[5%]",children:[(0,k.jsx)("p",{className:"font-bold",children:"State"}),(0,k.jsx)(b.Z,{spacing:2,children:(0,k.jsx)(w.Z,{id:"free-solo-2-demo",disableClearable:!0,options:null===K||void 0===K?void 0:K.map((function(e){return e.title})),onChange:function(e,n){J(n),D(n)},renderInput:function(e){return(0,k.jsx)(j.Z,(0,s.Z)((0,s.Z)({multiline:!0,rows:1.5,className:"w-full bg-[]"},e),{},{InputProps:(0,s.Z)((0,s.Z)({},e.InputProps),{},{type:"search"})}))}})})]}),(0,k.jsxs)("div",{className:"w-full ",children:[(0,k.jsx)("p",{className:"font-bold",children:"City"}),(0,k.jsx)(b.Z,{spacing:2,children:(0,k.jsx)(w.Z,{multiline:!0,rows:1.5,id:"free-solo-2-demo",disableClearable:!0,options:null===X||void 0===X?void 0:X.map((function(e){return e.title})),onChange:function(e,n){R(n)},renderInput:function(e){return(0,k.jsx)(j.Z,(0,s.Z)((0,s.Z)({className:"w-full bg-[]",multiline:!0,rows:1.5},e),{},{InputProps:(0,s.Z)((0,s.Z)({},e.InputProps),{},{type:"search"})}))}})})]})]}),(0,k.jsxs)("div",{className:"w-full",children:[(0,k.jsx)(Z.Z,{variant:"h6",className:"mb-2 mt-4",children:"Address"}),(0,k.jsx)(j.Z,(0,s.Z)({multiline:!0,rows:1.5,size:"medium",className:"w-full",placeholder:"Enter your Adress",name:"address"},(0,m.P)(V,"address")))]}),(0,k.jsx)(Z.Z,{multiline:!0,rows:1.5,variant:"h6",className:"mt-4 mb-2",children:"Choose Password"}),(0,k.jsx)(d.Z,(0,s.Z)({className:"w-full",placeholder:"Enter your Password",name:"password"},(0,m.P)(V,"password"))),(0,k.jsx)(Z.Z,{variant:"h6",className:"mt-4 mb-2",children:"Confirm Password"}),(0,k.jsx)(d.Z,(0,s.Z)({className:"w-full ",placeholder:"Confirm your Password",name:"password"},(0,m.P)(V,"confirmPassword"))),(0,k.jsx)(f.Z,{children:(0,k.jsx)(p.Z,{className:"mt-3",control:(0,k.jsx)(h.Z,{defaultChecked:!0}),label:"Remember Information"})}),(0,k.jsx)("div",{className:"text-white m-b-30 mt-3  ",children:(0,k.jsx)(g.Z,{className:"p-3 w-full text-base",type:"submit",children:"Sign Up"})})]}),(0,k.jsx)("a",{className:"text-center",href:"",children:(0,k.jsxs)("h2",{className:"mb-5",children:["Already have an account?",(0,k.jsx)("b",{onClick:function(){F("/")},className:"ml-1  color{#039836}",children:"Sign In"})]})})]})]}),(0,k.jsxs)("div",{className:"relative flex-vertical min-h-screen bg-primary-main text-white pl-10 justify-center w-2/5",style:{minWidth:"40%",position:"relative"},children:[(0,k.jsx)("img",{className:"absolute z-0 top-0 left-0 w-[100%] h-[100%]",src:x}),(0,k.jsxs)("div",{className:"z-10",children:[(0,k.jsx)(Z.Z,{variant:"h1",className:"mt-10 font-bold",children:"Earn"}),(0,k.jsx)(Z.Z,{variant:"h1",className:"mt-10 font-bold",children:"Ride"}),(0,k.jsx)(Z.Z,{variant:"h1",className:"mt-10 font-bold",children:"Manage."})]})]})]})})}},1101:function(e,n){n.Z={login:"login",dashboardStats:"payrollapi/dashboardstats",postPassword2:"services/api/resetpassword/resetpassword",notification:"services/api/notifications",employeeProfile:"global/api/employee/profile"}},7101:function(e,n,r){r.d(n,{U2:function(){return c}});var t=r(4165),s=r(5861),a=r(4569),i=r.n(a),o=r(1101),l=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n,r,a,l,c,u,d){var m,v,f,p,h,x;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m={"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST GET OPTIONS"},v=o.Z[n]||n,f="https://locus.fkkas.com/api/".concat(v),u&&(f+="/".concat(u)),c&&(p=Object.keys(c).map((function(e){return c[e]&&"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(c[e]))})),f+="?".concat(p.join("&"))),a&&(h=localStorage.getItem("token"))&&(m.Authorization="".concat(h)),x={url:f,method:r,headers:m},l&&(x.data=l),e.abrupt("return",i()(x).then((function(e){return e}),function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&n.response&&n.response.status,e.abrupt("return",n.response);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 9:case"end":return e.stop()}}),e)})));return function(n,r,t,s,a,i,o){return e.apply(this,arguments)}}(),c=function(e){var n=e.endpoint,r=e.pQuery,t=e.param,s=void 0===t?null:t,a=e.auth;return l(n,"GET",void 0===a||a,null,r,s)}},7342:function(e,n,r){r.d(n,{P:function(){return s}});var t=r(1413);function s(e,n){var r,s,a,i,o;return(0,t.Z)((0,t.Z)({},e.getFieldProps(n)),{},{error:!(null===(r=e.touched)||void 0===r||!r[n])&&!(null===(s=e.errors)||void 0===s||!s[n]),helperText:!(null===(a=e.touched)||void 0===a||!a[n])&&(null===(i=e.errors)||void 0===i?void 0:i[n]),focused:null===(o=e.values)||void 0===o?void 0:o[n]})}},4162:function(e,n,r){var t=r(4942),s=r(3366),a=r(7462),i=r(2791),o=r(1184),l=r(5682),c=r(8519),u=r(2466),d=r(6863),m=r(7254),v=r(184),f=["component","direction","spacing","divider","children"];function p(e,n){var r=i.Children.toArray(e).filter(Boolean);return r.reduce((function(e,t,s){return e.push(t),s<r.length-1&&e.push(i.cloneElement(n,{key:"separator-".concat(s)})),e}),[])}var h=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,r=e.theme,s=(0,a.Z)({display:"flex",flexDirection:"column"},(0,o.k9)({theme:r},(0,o.P$)({values:n.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var i=(0,l.hB)(r),c=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof n.spacing&&null!=n.spacing[r]||"object"===typeof n.direction&&null!=n.direction[r])&&(e[r]=!0),e}),{}),d=(0,o.P$)({values:n.direction,base:c}),m=(0,o.P$)({values:n.spacing,base:c});"object"===typeof d&&Object.keys(d).forEach((function(e,n,r){if(!d[e]){var t=n>0?d[r[n-1]]:"column";d[e]=t}}));s=(0,u.Z)(s,(0,o.k9)({theme:r},m,(function(e,r){return{"& > :not(style) + :not(style)":(0,t.Z)({margin:0},"margin".concat((s=r?d[r]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[s])),(0,l.NA)(i,e))};var s})))}return s=(0,o.dt)(r.breakpoints,s)})),x=i.forwardRef((function(e,n){var r=(0,m.Z)({props:e,name:"MuiStack"}),t=(0,c.Z)(r),i=t.component,o=void 0===i?"div":i,l=t.direction,u=void 0===l?"column":l,d=t.spacing,x=void 0===d?0:d,Z=t.divider,j=t.children,b=(0,s.Z)(t,f),w={direction:u,spacing:x};return(0,v.jsx)(h,(0,a.Z)({as:o,ownerState:w,ref:n},b,{children:Z?p(j,Z):j}))}));n.Z=x},1917:function(e,n,r){e.exports=r.p+"static/media/Mask group.3a81471dd3e24685df14.png"}}]);
//# sourceMappingURL=205.0cc40ca4.chunk.js.map