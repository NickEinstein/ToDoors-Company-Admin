"use strict";(self.webpackChunktodoors_web=self.webpackChunktodoors_web||[]).push([[525],{6113:function(e,t,n){var r=n(1413),a=n(885),i=n(5987),s=n(2791),o=n(5017),c=n(8254),l=n(3811),u=n(409),d=n(8182),p=n(184),f=["error"];t.Z=function(e){var t=e.error,n=(0,i.Z)(e,f),A=s.useState(!1),x=(0,a.Z)(A,2),m=x[0],v=x[1],h=s.useCallback((function(){return v((function(e){return!e}))}),[]);return(0,p.jsx)(o.Z,(0,r.Z)({type:m?"text":"password",InputProps:{endAdornment:(0,p.jsx)(c.Z,{position:"end",children:(0,p.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:h,disabled:e.disabled,children:(0,p.jsx)(u.Z,{className:(0,d.Z)(t?"text-danger":"text-primary"),children:m?"visibility_off":"visibility"})})})},error:t},n))}},4781:function(e,t,n){var r=n(885),a=n(2791),i=n(8152),s=n(6856),o=n(676),c=n(4373),l=n(5017),u=n(8254),d=n(3978),p=n(7205),f=n(1872),A=n(6871),x=n(184);t.Z=function(e){var t,n=e.hide,m=e.pad,v=(0,o.Z)(),h=a.useState(v._id),Z=(0,r.Z)(h,2),b=Z[0],g=(Z[1],(0,A.s0)());console.log(v);var y=null===i.Z||void 0===i.Z?void 0:i.Z.useGetUserQuery({userId:b}),w=null===y||void 0===y?void 0:y.data;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,x.jsx)(l.Z,{InputProps:{endAdornment:(0,x.jsx)(u.Z,{position:"start",children:(0,x.jsx)(s.Zh8,{})})},variant:"outlined",style:{backgroundColor:"#EBEBEB",border:"none",borderRadius:"7px"},className:"w-[30%] text-ssm ",placeholder:"Search Company "}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)("div",{className:"border-l-2 px-8 py-5 ",children:(0,x.jsx)(c.G58,{className:"text-[#00000080]",size:26})}),(0,x.jsx)("div",{className:" border-l-2 py-5 px-10",children:(0,x.jsx)("div",{className:m?"flex justify-between items-center pr-8":"flex justify-between items-center",children:(0,x.jsxs)("div",{className:"flex items-center ",children:[(0,x.jsx)(d.Z,{className:"mr-3 h-12 w-12",alt:"Travis Howard",src:null===w||void 0===w?void 0:w.profileUrl}),(0,x.jsxs)("div",{className:"cursor-pointer",onClick:function(){g("/profile")},children:[(0,x.jsxs)("p",{className:"text-[#1E1E1E] text-sm text-center mb-1",children:[null===w||void 0===w||null===(t=w.fname)||void 0===t?void 0:t.toUpperCase(),", ",null===w||void 0===w?void 0:w.city]}),(0,x.jsx)(p.Z,{className:null!==w&&void 0!==w&&w.verified?"h-6 bg-green-400":"h-6 bg-yellow-300 text-black font-bold",children:null!==w&&void 0!==w&&w.verified?"Verified":"Unverified"})]})]})})})]})]}),!n&&(0,x.jsx)(f.Z,{className:"mb-8"})]})}},3979:function(e,t,n){var r=n(4165),a=n(5861),i=n(885),s=(n(2791),n(8152)),o=n(5705),c=n(7942),l=n(5588),u=(n(6113),n(676)),d=(n(8871),n(1598),n(7328),n(1306),n(1917),n(2699),n(8928)),p=n(5194),f=n(4565),A=n(7205),x=n(6871),m=n(184);t.Z=function(e){var t=(0,x.s0)(),n=((0,u.Z)(),(0,l.Ds)().enqueueSnackbar),v=s.Z.useLoginMutation(),h=(0,i.Z)(v,2),Z=h[0];return h[1],(0,o.TA)({initialValues:{username:"",password:""},validationSchema:c.Ry({username:c.Z_().trim().required(),password:c.Z_().trim().required()}),onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("/complete-signUp"),e.prev=1,e.next=4,Z({data:a}).unwrap();case 4:e.sent,n("Logged in successful",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(null===e.t0||void 0===e.t0||null===(i=e.t0.data)||void 0===i?void 0:i.message,"Failed to login",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}),(0,m.jsx)("div",{className:"relative",children:(0,m.jsx)(d.Z,{className:e.rider?"riders-bg text-white text-center mr-3":e.plain?"plain-bg":e.green?"bg-primary-main text-white":e.big?"text-left border ":" text-white text-center",sx:{minWidth:155,minHeight:!e.short&&120,maxHeight:e.short&&105},children:(0,m.jsxs)(p.Z,{className:e.big?"pr-24":"",children:[(0,m.jsx)("div",{children:(0,m.jsx)(f.Z,{className:e.plain||e.green?" text-left text-white z-10":e.dashboard?"text-left text-secondary-light z-10":"text-left text-primary-main font-bold z-10",style:{fontSize:14,zIndex:100},children:e.name||"Total Companies"})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)(f.Z,{variant:"h5",className:e.green?"text-white text-left font- z-10":e.short?"text-left font- text-primary-main mb-3 z-10":e.small?"text-left font- text-primary-main mt-4":"text-left font- text-primary-main z-10 ",children:[e.count," ",(0,m.jsx)("span",{className:"text-ssm",children:"Naira"})]}),e.button&&(0,m.jsx)("div",{class:"mt-4 ",children:(0,m.jsx)(A.Z,{onClick:function(){return e.openModal()},className:"bg-[#F7AD2B] px-16 text-white",children:"Withdraw"})})]})]})})})}},1843:function(e,t,n){n(2791),n(8152),n(5705),n(7942),n(5588),n(6113),n(676),n(8871),n(1598),n(7328),n(1306),n(656),n(4861),n(2699),n(184)},1101:function(e,t){t.Z={login:"login",dashboardStats:"payrollapi/dashboardstats",postPassword2:"services/api/resetpassword/resetpassword",notification:"services/api/notifications",employeeProfile:"global/api/employee/profile"}},1066:function(e,t,n){n.d(t,{U2:function(){return l},gz:function(){return d},v_:function(){return u}});var r=n(4165),a=n(5861),i=n(4569),s=n.n(i),o=n(1101),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,i,c,l,u,d){var p,f,A,x,m,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p={"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST GET OPTIONS"},f=o.Z[t]||t,A="".concat("https://app.todoorapp.com","/").concat(f),console.log("https://app.todoorapp.com"),u&&(A+="/".concat(u)),l&&(x=Object.keys(l).map((function(e){return l[e]&&"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(l[e]))})),A+="?".concat(x.join("&"))),i&&(m=localStorage.getItem("token"))&&(p.Authorization="".concat(m)),v={url:A,method:n,headers:p},c&&(v.data=c),e.abrupt("return",s()(v).then((function(e){return e}),function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.response&&t.response.status,e.abrupt("return",t.response);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:case"end":return e.stop()}}),e)})));return function(t,n,r,a,i,s,o){return e.apply(this,arguments)}}(),l=function(e){var t=e.endpoint,n=e.pQuery,r=e.param,a=void 0===r?null:r,i=e.auth;return c(t,"GET",void 0===i||i,null,n,a)},u=function(e){var t=e.endpoint,n=e.body,r=e.auth,a=void 0===r||r,i=e.multipart;return c(t,"POST",a,n,null,null,i)},d=function(e){var t=e.endpoint,n=e.body,r=e.auth,a=void 0===r||r,i=e.multipart;return c(t,"PUT",a,n,null,null,i)}},7328:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOxSURBVHgB3ZrdUtpAFMfPnigkWGfwCcxVx4/pwBtIrzsdQW1vhSfQPoHpE9Q+gXrVm4o4nV4X3wCn9WOmN/EJZEaE+pE93Q3C8BUJECTJ7wLysWTy55w9u3v2MBgD9/nXCYtPJxnxJCGLAzG9qxEjU3yayKHEkUra+sUVeAwDD7je0+Pq7MwqAaWBsZR4aBwGhBGUgHiRFCpoa5cn4AEjibv+tqBrU2yLI2aHEeSMsCpxQ9u4PIARGEqcFKVO446wUhbGymgiBxZXPVrcAo6Gt5bqh+yflBq0X7oWV7eWsid+kYKJQYa2fv7ZbWtX4ir55YRCVBDNdZgwJN7j7qaam8uZ5X5t+4qr5Rc2iZTdl3XDfrhz02fFSWFAyj74kv4CHcXVXVGMPT5Gjo21m9u3Ti6KvS7K4FHvY/6GGCTV2dgXp/s9xakR/OWH4OEKMdZWv4vhqQdd4mqHSzuBEdaAoVE7XJzvvNwmTrqjaGlAwLAjOeF+5/U2cfaUKqiIyYWI7iutl5riHvJvVsY/VxwzXDFaT5viHrmVhaDTYT1bnN3Xgm61Bi3Ws8VFVbYKYUFYTy6e5aEtDi3MQoiIzmqb8hulS8qRHsKESHXIL4xFMQGh40kcUf0gTMhBnX4uzmPoXPKJ6h1LIuN+WoR6B+OkI2egQwhhjMXRX+kDT9ERQky4xRFA3xRZQDFlnwulOJHfLCMj8nWGa1jE1pmJImaaEELo8eEKHy06hZAh48irj39L+DAd8X1+cnCoKD9xLlMqi5lmEUKEmJ3YBquPc1RXGhbUKC/Kb1vcP4x8hbBAUGTv6psjtrgwuSZH2m0cN6dfU4AGBB9zZu38uHHSFDe99vsk8NZjYLSetk+cmZWDgEIg61fO2qoe2sRpmUtTbqpDANFU2u681rXkkdUCzOc7qt2Q0YiQrfRcz5FiZQK0FNp3Kt/oKU6651RkkvUm7pAepuLtJ6f7jivxyPuzUxF9suBfzKjG0yzjXI/ybJrBjj4+FGhbTOWpXv2srR244P7HcsK6BzkZ1WHCELCChpXccxZr4Lr2q3Yk9vBI2RNPT8GEIOLbsY0L1/Pggav2ZLWD+Pe2XzLfKd0Qo5C148Agv4MhsK3IFVkckIUxIv7EMpBlDGKtVkaqlG2IFC+RZkDeWVLMcUksODWoHLjpW86P8YhafnlTpNPSIgCnhhRqipcpEGfH2oc/RfAAz8S1UjlaSjJL0RXGVziQLjclWu/LnKLMlxJiiSx2FVNuiqNYyIn/719aphORCaEAAAAASUVORK5CYII="},656:function(e){e.exports="data:image/png;base64,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"},1917:function(e,t,n){e.exports=n.p+"static/media/Mask group.3a81471dd3e24685df14.png"},2699:function(e,t,n){e.exports=n.p+"static/media/Rectangle 106.c9fc47c89560e724cf39.png"},4861:function(e,t,n){e.exports=n.p+"static/media/Rectangle 7.3a39a2242bd68e3f457e.png"},1306:function(e,t,n){e.exports=n.p+"static/media/background.d6226b2e65b747407a3a.png"}}]);
//# sourceMappingURL=525.c95b09e3.chunk.js.map