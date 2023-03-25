"use strict";(self.webpackChunktodoors_web=self.webpackChunktodoors_web||[]).push([[385,228],{9077:function(e,t,r){r.d(t,{Z:function(){return i}});r(2791),r(4164);var s=r.p+"static/media/ToDoorLogo.562d9fab7d32889b4b0e.png",n=r(6871),a=r(184),i=function(e){var t=(0,n.s0)();return(0,a.jsx)("div",{className:"flex ",children:(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("div",{className:"flex relative items-center",children:(0,a.jsx)("img",{src:s,alt:"softwork logo",className:"cursor-pointer w-36",onClick:function(){t("/")}})})})})}},6113:function(e,t,r){var s=r(1413),n=r(885),a=r(5987),i=r(2791),l=r(7198),o=r(8254),c=r(3811),d=r(409),u=r(8182),m=r(184),f=["error"];t.Z=function(e){var t=e.error,r=(0,a.Z)(e,f),p=i.useState(!1),h=(0,n.Z)(p,2),v=h[0],x=h[1],A=i.useCallback((function(){return x((function(e){return!e}))}),[]);return console.log(v),(0,m.jsx)(l.Z,(0,s.Z)({type:v?"text":"password",InputProps:{endAdornment:(0,m.jsx)(o.Z,{position:"end",children:(0,m.jsx)(c.Z,{"aria-label":"toggle password visibility",onClick:A,disabled:e.disabled,children:(0,m.jsx)(d.Z,{className:(0,u.Z)(t?"text-danger":"text-primary"),children:v?"visibility_off":"visibility"})})})},error:t},r))}},9228:function(e,t,r){r.r(t);var s=r(1413),n=r(4165),a=r(5861),i=r(885),l=r(2791),o=r(8152),c=r(5705),d=r(1724),u=r(5588),m=(r(6113),r(7342)),f=(r(676),r(8871),r(9077)),p=(r(7328),r(1306),r(1917)),h=(r(4861),r(2699),r(4565)),v=r(7198),x=r(7205),A=r(6871),j=r(7425),b=r(184);t.default=function(e){var t=l.useState(""),r=(0,i.Z)(t,2),g=(r[0],r[1],(0,A.s0)()),y=((0,u.Ds)().enqueueSnackbar,o.Z.useLoginMutation()),w=(0,i.Z)(y,2),Z=(w[0],w[1],(0,c.TA)({initialValues:{username:"",password:""},validationSchema:d.Ry({username:d.Z_().trim().required(),password:d.Z_().trim().required()}),onSubmit:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("il",!0),g("/dashboard");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}));return(0,b.jsx)("div",{className:"  pl-24 h-screen",children:(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsxs)("div",{className:"pt-12",style:{paddingLeft:"",paddingRight:"",minWidth:"40%"},children:[(0,b.jsx)(f.Z,{}),(0,b.jsxs)("div",{className:"flex-vertical",children:[(0,b.jsxs)("div",{className:"my-8",children:[(0,b.jsx)(h.Z,{variant:"h3",className:"mb-2 mt-3 font-bold",children:"Forgot Password"}),(0,b.jsx)("p",{className:"text-[#7D7878] w-[67%] text-sm",children:"To reset your password, enter your email address, and we'll send you a link."})]}),(0,b.jsxs)("form",{onSubmit:Z.handleSubmit,children:[(0,b.jsxs)("div",{class:"mb-12",children:[(0,b.jsx)(h.Z,{variant:"h6",className:"my-2",children:"Email Address"}),(0,b.jsx)(v.Z,(0,s.Z)({size:"medium",className:"w-full",placeholder:"Enter your username",name:"username"},(0,m.P)(Z,"username")))]}),(0,b.jsxs)("div",{className:"text-white m-b-30 mt-5  ",children:[(0,b.jsx)(x.Z,{className:"p-3 bg-primary-main w-full text-base",type:"submit",children:"Continue"}),(0,b.jsx)("div",{className:"flex justify-center items-center mb-2 m-auto cursor-pointer p-2",children:(0,b.jsxs)("div",{class:"w-1/3 mt-4 flex items-center",children:[(0,b.jsx)("div",{style:{border:"1px solid #494949"},className:"border-solid w-5 mr-2 rounded h-5 flex justify-center items-center",children:(0,b.jsx)(j.jW7,{className:"",style:{fontSize:"22px",color:"#494949"}})}),(0,b.jsx)("p",{style:{color:"#494949"},className:"text-base ",children:"Back to Sign In"})]})})]})]})]})]}),(0,b.jsxs)("div",{className:"relative flex-vertical bg-primary-main py-36 text-white pl-10 justify-center w-2/5",style:{minWidth:"40%",minHeight:"100%",position:"relative"},children:[(0,b.jsx)("img",{className:"absolute z-0 top-0 left-0 w-[100%] h-[100%]",src:p}),(0,b.jsxs)("div",{className:"z-10",children:[(0,b.jsx)(h.Z,{variant:"h1",className:"mt-10 font-bold",children:"Earn"}),(0,b.jsx)(h.Z,{variant:"h1",className:"mt-10 font-bold",children:"Ride"}),(0,b.jsx)(h.Z,{variant:"h1",className:"mt-10 font-bold",children:"Manage."})]})]})]})})}},7342:function(e,t,r){r.d(t,{P:function(){return n}});var s=r(1413);function n(e,t){var r,n,a,i,l;return(0,s.Z)((0,s.Z)({},e.getFieldProps(t)),{},{error:!(null===(r=e.touched)||void 0===r||!r[t])&&!(null===(n=e.errors)||void 0===n||!n[t]),helperText:!(null===(a=e.touched)||void 0===a||!a[t])&&(null===(i=e.errors)||void 0===i?void 0:i[t]),focused:null===(l=e.values)||void 0===l?void 0:l[t]})}},9983:function(e,t,r){r.d(t,{w_:function(){return c}});var s=r(2791),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=s.createContext&&s.createContext(n),i=function(){return i=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)},l=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(r[s[n]]=e[s[n]])}return r};function o(e){return e&&e.map((function(e,t){return s.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return s.createElement(d,i({attr:i({},e.attr)},t),o(e.child))}}function d(e){var t=function(t){var r,n=e.attr,a=e.size,o=e.title,c=l(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&s.createElement("title",null,o),e.children)};return void 0!==a?s.createElement(a.Consumer,null,(function(e){return t(e)})):t(n)}},7328:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOxSURBVHgB3ZrdUtpAFMfPnigkWGfwCcxVx4/pwBtIrzsdQW1vhSfQPoHpE9Q+gXrVm4o4nV4X3wCn9WOmN/EJZEaE+pE93Q3C8BUJECTJ7wLysWTy55w9u3v2MBgD9/nXCYtPJxnxJCGLAzG9qxEjU3yayKHEkUra+sUVeAwDD7je0+Pq7MwqAaWBsZR4aBwGhBGUgHiRFCpoa5cn4AEjibv+tqBrU2yLI2aHEeSMsCpxQ9u4PIARGEqcFKVO446wUhbGymgiBxZXPVrcAo6Gt5bqh+yflBq0X7oWV7eWsid+kYKJQYa2fv7ZbWtX4ir55YRCVBDNdZgwJN7j7qaam8uZ5X5t+4qr5Rc2iZTdl3XDfrhz02fFSWFAyj74kv4CHcXVXVGMPT5Gjo21m9u3Ti6KvS7K4FHvY/6GGCTV2dgXp/s9xakR/OWH4OEKMdZWv4vhqQdd4mqHSzuBEdaAoVE7XJzvvNwmTrqjaGlAwLAjOeF+5/U2cfaUKqiIyYWI7iutl5riHvJvVsY/VxwzXDFaT5viHrmVhaDTYT1bnN3Xgm61Bi3Ws8VFVbYKYUFYTy6e5aEtDi3MQoiIzmqb8hulS8qRHsKESHXIL4xFMQGh40kcUf0gTMhBnX4uzmPoXPKJ6h1LIuN+WoR6B+OkI2egQwhhjMXRX+kDT9ERQky4xRFA3xRZQDFlnwulOJHfLCMj8nWGa1jE1pmJImaaEELo8eEKHy06hZAh48irj39L+DAd8X1+cnCoKD9xLlMqi5lmEUKEmJ3YBquPc1RXGhbUKC/Kb1vcP4x8hbBAUGTv6psjtrgwuSZH2m0cN6dfU4AGBB9zZu38uHHSFDe99vsk8NZjYLSetk+cmZWDgEIg61fO2qoe2sRpmUtTbqpDANFU2u681rXkkdUCzOc7qt2Q0YiQrfRcz5FiZQK0FNp3Kt/oKU6651RkkvUm7pAepuLtJ6f7jivxyPuzUxF9suBfzKjG0yzjXI/ybJrBjj4+FGhbTOWpXv2srR244P7HcsK6BzkZ1WHCELCChpXccxZr4Lr2q3Yk9vBI2RNPT8GEIOLbsY0L1/Pggav2ZLWD+Pe2XzLfKd0Qo5C148Agv4MhsK3IFVkckIUxIv7EMpBlDGKtVkaqlG2IFC+RZkDeWVLMcUksODWoHLjpW86P8YhafnlTpNPSIgCnhhRqipcpEGfH2oc/RfAAz8S1UjlaSjJL0RXGVziQLjclWu/LnKLMlxJiiSx2FVNuiqNYyIn/719aphORCaEAAAAASUVORK5CYII="},1917:function(e,t,r){e.exports=r.p+"static/media/Mask group.3a81471dd3e24685df14.png"},2699:function(e,t,r){e.exports=r.p+"static/media/Rectangle 106.c9fc47c89560e724cf39.png"},4861:function(e,t,r){e.exports=r.p+"static/media/Rectangle 7.3a39a2242bd68e3f457e.png"},1306:function(e,t,r){e.exports=r.p+"static/media/background.d6226b2e65b747407a3a.png"}}]);
//# sourceMappingURL=385.eb2d1598.chunk.js.map