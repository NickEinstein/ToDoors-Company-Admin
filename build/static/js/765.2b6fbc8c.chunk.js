"use strict";(self.webpackChunktodoors_web=self.webpackChunktodoors_web||[]).push([[765],{6683:function(e,n,t){var a=t(4165),i=t(5861),r=t(885),s=t(2791),o=t(8152),l=t(5705),d=t(7942),u=t(5588),c=t(676),v=t(4565),p=t(6871),x=t(184);n.Z=function(e){var n=s.useState(""),t=(0,r.Z)(n,2),m=(t[0],t[1],(0,p.s0)()),f=((0,c.Z)(),(0,u.Ds)().enqueueSnackbar),h=o.Z.useLoginMutation(),g=(0,r.Z)(h,2),Z=g[0];return g[1],(0,l.TA)({initialValues:{username:"",password:""},validationSchema:d.Ry({username:d.Z_().trim().required(),password:d.Z_().trim().required()}),onSubmit:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m("/complete-signUp"),e.prev=1,e.next=4,Z({data:n}).unwrap();case 4:e.sent,f("Logged in successful",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f(null===e.t0||void 0===e.t0||null===(t=e.t0.data)||void 0===t?void 0:t.message,"Failed to login",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()}),(0,x.jsx)("div",{className:"p-20 w-[136px]",style:{border:"none",borderLeft:e.cutborder?"1px solid #C4C4C4":"none"},children:(0,x.jsx)("div",{className:e.rider?"riders-bg text-white text-center mr-3":e.plain?"plain-bg":e.green?"bg-primary-main text-white":e.big?"text-left":" text-white text-center",sx:{minWidth:e.big?220:155,minHeight:e.big?160:120},children:(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{children:(0,x.jsx)(v.Z,{className:e.plain||e.green?" text-center text-white":e.dashboard?"text-center text-primary-main ":"text-center text-primary-main font-bold",sx:{fontSize:14},children:e.name||"Total Companies"})}),(0,x.jsx)("div",{children:(0,x.jsx)(v.Z,{variant:e.small?"h3":e.earnings?"h5":e.big?"h3":"h2",className:e.green?"text-white text-center font-bold":e.bigspace?"text-center font-bold text-primary-main pr-10":e.big?"font-extrabold text-center text-primary-main":"text-center font-bold text-primary-main px-5",children:e.count})})]})})})}},5685:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var a=t(4165),i=t(5861),r=t(885),s=t(2791),o=t(8152),l=t(5705),d=t(6856),u=t(7942),c=t(5588),v=(t(6113),t(676)),p=(t(8871),t(1598),t(7328),t(1306),t(656),t(4861),t(2699),t(184));var x=t(1413),m=(t(4164),t(2556)),f=function(e){var n=e.companyMonthly,t=(e.companyMonthlyTrips,(0,s.useState)([])),a=(0,r.Z)(t,2),i=(a[0],a[1],n?null===n||void 0===n?void 0:n.map((function(e){return{year:(n=e._id.month,1==n?"Jan":2==n?"Feb":3==n?"Mar":4==n?"Apr":5==n?"May":6==n?"Jun":7==n?"Jul":8==n?"Aug":9==n?"Sept":10==n?"Oct":11==n?"Nov":12==n?"Dec":void 0),value:(null===e||void 0===e?void 0:e.total_earning)||(null===e||void 0===e?void 0:e.trips_count)};var n})):[]);console.log(i);var o=[{year:"Jan",value:0},{year:"Feb",value:0},{year:"Mar",value:0},{year:"Apr",value:0},{year:"May",value:0},{year:"Jun",value:0},{year:"Jul",value:0},{year:"Aug",value:0},{year:"Sept",value:0},{year:"Oct",value:0},{year:"Nov",value:0},{year:"Dec",value:0}],l={data:o=o.map((function(e){var n=i.find((function(n){return n.year===e.year}));return console.log(n),n?(0,x.Z)((0,x.Z)({},e),{},{value:n.value}):e})),xField:"year",yField:"value",seriesField:"",color:function(e){e.type;return"#0C3BAA"},label:{content:function(e){var n=parseFloat(e.value);if(n<.05)return(100*n).toFixed(1)+"%"},offset:10},legend:!0,xAxis:{label:{autoHide:!0,autoRotate:!1}},yAxis:{label:{autoHide:!0,autoRotate:!1},grid:{}}};return(0,p.jsx)(m.Z,(0,x.Z)((0,x.Z)({},l),{},{onReady:function(e){e.on("plot:click",(function(n){var t=n.x,a=n.y;e.options.xField,e.chart.getTooltipItems({x:t,y:a})}))}}))},h=(t(1066),t(4565)),g=t(1872),Z=t(6015),b=t(1898),y=t(2851),w=t(5702),j=t(6871),S=(t(3979),t(4781)),N=(t(1843),t(6683)),k=t(3449);var L=function(e){var n,t,x,m=s.useState(!0),L=(0,r.Z)(m,2),C=L[0],A=L[1],R=s.useState("Earnings"),M=(0,r.Z)(R,2),_=M[0],T=M[1],F=s.useState("635fbde0bfadb9f5ea56afa4"),z=(0,r.Z)(F,2),B=z[0],E=(z[1],s.useState()),I=(0,r.Z)(E,2),q=I[0],G=I[1],J=(0,s.useState)(),O=(0,r.Z)(J,2),V=O[0],D=O[1],Q=function(){return G(!q)},H=(0,j.s0)(),U=(0,v.Z)(),W=(0,c.Ds)().enqueueSnackbar,K=o.Z.useLoginMutation(),P=(0,r.Z)(K,2),X=P[0];P[1],console.log(U),(0,l.TA)({initialValues:{username:"",password:""},validationSchema:u.Ry({username:u.Z_().trim().required(),password:u.Z_().trim().required()}),onSubmit:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H("/complete-signUp"),e.prev=1,e.next=4,X({data:n}).unwrap();case 4:e.sent,W("Logged in successful",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),W(null===e.t0||void 0===e.t0||null===(t=e.t0.data)||void 0===t?void 0:t.message,"Failed to login",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()});var Y=null===o.Z||void 0===o.Z?void 0:o.Z.useGetEarningsByMonthQuery(),$=null===o.Z||void 0===o.Z?void 0:o.Z.useGetTripsByMonthQuery(),ee=o.Z.useGetCompanyStatisticsQuery({}),ne=null===ee||void 0===ee?void 0:ee.data,te=null===o.Z||void 0===o.Z?void 0:o.Z.useGetAllBikesQuery(),ae=null===te||void 0===te||null===(n=te.data)||void 0===n?void 0:n.data,ie=(null===o.Z||void 0===o.Z||o.Z.useGetUserQuery({userId:B}),null===o.Z||void 0===o.Z?void 0:o.Z.useGetRiderTripStatisticsQuery());return null===ie||void 0===ie||null===(t=ie.data)||void 0===t||t.data,(0,s.useEffect)((function(){var e,n;D(C?null===Y||void 0===Y||null===(e=Y.data)||void 0===e?void 0:e.data:null===$||void 0===$||null===(n=$.data)||void 0===n?void 0:n.data),T(C?"Earnings":"Rides")}),[C,Y,$]),(0,p.jsxs)("div",{children:[!q&&(0,p.jsxs)("div",{children:[(0,p.jsx)(S.Z,{}),(0,p.jsx)("div",{className:"mb-8",children:(0,p.jsx)(h.Z,{variant:"h5",className:"font-bold",children:"Welcome Back"})}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:"flex-between w-4/6 mb-2 text-xs ",children:[(0,p.jsx)("p",{className:"font-bold flextext-xs self-end",children:"Today"}),(0,p.jsxs)("div",{className:"flex items-center",children:[(0,p.jsx)("span",{className:"text-xs mr-1 opacity-50",children:(0,p.jsx)(d.la_,{})}),(0,p.jsx)("span",{className:"text-xs opacity-50",children:"Refresh"})]})]}),(0,p.jsx)("div",{className:"flex ",children:(0,p.jsxs)("div",{className:"flex items-center border2 p-2",children:[(0,p.jsx)(N.Z,{dashboard:!0,big:!0,name:"Active Bikes",count:null===ae||void 0===ae?void 0:ae.length}),(0,p.jsx)(N.Z,{dashboard:!0,cutborder:!0,big:!0,name:"Rides in progress",count:ne&&(null===ne||void 0===ne?void 0:ne.ongoing_trips)}),(0,p.jsx)(N.Z,{dashboard:!0,cutborder:!0,big:!0,name:"Completed",count:ne&&(null===ne||void 0===ne?void 0:ne.completed_trips)}),(0,p.jsx)(N.Z,{dashboard:!0,cutborder:!0,big:!0,name:"Online",count:ne&&(null===ne||void 0===ne?void 0:ne.online_bikes)}),(0,p.jsx)(N.Z,{dashboard:!0,earnings:!0,cutborder:!0,name:"Earnings",count:function(e){var n;return null===e||void 0===e||null===(n=e.toString())||void 0===n?void 0:n.replace(/\B(?=(\d{3})+(?!\d))/g,",")}(ne&&(null===ne||void 0===ne?void 0:ne.total_earnings))})]})})]}),(0,p.jsxs)("div",{className:"flex-between w-full mb mt-6 text-xl",children:[(0,p.jsxs)("p",{className:" flex  self-end text-primary-main font-bold",children:[C?"Earnings":"Rides"," Over the last 12 Months"]}),(0,p.jsx)("div",{className:"flex items-center",children:(0,p.jsx)("span",{onClick:Q,className:"cursor-pointer p-2 text-primary-main font-bold",children:"View Riders Location"})})]}),(0,p.jsx)(g.Z,{className:"my-2"}),(0,p.jsx)("div",{className:"flex items-center w-1/5 mt-4",children:(0,p.jsx)(Z.Z,{className:" w-full",sx:{minWidth:120},children:(0,p.jsx)(b.Z,{fullWidth:!0,children:(0,p.jsxs)(y.Z,{placeholder:"August",className:"w-full",size:"small",id:"demo-simple-select",value:_,onChange:function(e){A(!C)},children:[(0,p.jsx)(w.Z,{value:"Earnings",children:"Earnings"}),(0,p.jsx)(w.Z,{value:"Rides",children:"Rides"})]})})})}),(0,p.jsx)("div",{className:" flex mt-10 w-full justify-center",children:(0,p.jsx)("div",{className:" w-3/5 mb-10",children:(0,p.jsx)(f,{companyMonthly:V,companyMonthlyTrips:null===$||void 0===$||null===(x=$.data)||void 0===x?void 0:x.data})})})]}),q&&(0,p.jsx)("div",{className:"flex justify-between items-center mt-8",children:(0,p.jsx)(k.default,{switsh:Q,hide:!0})})]})}},3449:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(1413),i=t(4165),r=t(5861),s=t(885),o=t(2791),l=(t(5705),t(7942),t(5588),t(676),t(9126)),d=t(1066),u=t(7993),c=(t(8871),t.p+"static/media/todoor image.2dabe7881be92a826a0c.png"),v=(t(7328),t(656),t(2699),t(7205)),p=t(6871),x=(t(3979),t(4781)),m=t(184);var f=function(e){var n,t=(0,o.useState)(null),f=(0,s.Z)(t,2),h=f[0],g=f[1],Z=(0,o.useState)(null),b=(0,s.Z)(Z,2),y=(b[0],b[1]),w=(0,o.useState)({lat:7,lng:5}),j=(0,s.Z)(w,2),S=j[0],N=(j[1],(0,o.useState)([])),k=(0,s.Z)(N,2),L=k[0],C=k[1],A=(0,o.useState)(null),R=(0,s.Z)(A,2),M=(R[0],R[1]),_=(0,o.useState)(0),T=(0,s.Z)(_,2),F=(T[0],T[1],(0,o.useState)(null)),z=(0,s.Z)(F,2),B=z[0],E=z[1],I=((0,o.useRef)(null),(0,o.useState)(null)),q=(0,s.Z)(I,2),G=(q[0],q[1],localStorage.getItem("token").slice(0,7),function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.U2)({endpoint:"api/company/getActiveCompanyRiders",auth:!0});case 2:return a=e.sent,C((null===a||void 0===a?void 0:a.data)||[]),e.abrupt("return",null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.length);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),J=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.U2)({endpoint:"api/company/getActiveCompanyRiders",auth:!0});case 2:t=e.sent,console.log(null===t||void 0===t?void 0:t.data[0]),O(null===t||void 0===t?void 0:t.data[0]);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(e){if(h){console.log(null===e||void 0===e?void 0:e.gpsLoc);var n=new window.google.maps.LatLngBounds;n.extend(new window.google.maps.LatLng(null===e||void 0===e?void 0:e.gpsLoc[1],null===e||void 0===e?void 0:e.gpsLoc[0])),h.fitBounds(n),h.panTo(new window.google.maps.LatLng(null===e||void 0===e?void 0:e.gpsLoc[1],null===e||void 0===e?void 0:e.gpsLoc[0]))}};(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();J();var n=setInterval(e,3e3);return function(){return clearInterval(n)}}),[h]),(0,p.s0)();var V=(0,u.Ji)({googleMapsApiKey:"AIzaSyAOcmuq7zgq9R_ZubLHlhw6VO_XRidO1Vg"}).isLoaded;if(!V)return(0,m.jsx)("p",{children:"isloaded"});var D=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n,t){var a,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=n&&""!=t){e.next=2;break}return e.abrupt("return");case 2:return a=new google.maps.DirectionsService,e.next=5,a.route({origin:n,destination:t,travelMode:google.maps.TravelMode.DRIVING});case 5:r=e.sent,E(r),y(r.routes[0].legs[0].distance.text),M(r.routes[0].legs[0].duration.text);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Q={color:"blue",fontSize:"12px",fontWeight:"bold",anchor:new window.google.maps.Point(0,20)},H={url:c,scaledSize:new window.google.maps.Size(60,60)};return V?(0,m.jsxs)("div",{className:"w-full",children:[(0,m.jsx)(x.Z,{}),(0,m.jsxs)("div",{className:"flex justify-between items-center",children:[(0,m.jsx)("div",{className:"mb-4",children:(0,m.jsx)(v.Z,{onClick:function(){return D("Apapa, Lagos","Ikeja, Lagos")},style:{color:"#8C8C8C"},className:" ml-3 px-7 py-2 bg-transparent",children:"God's View"})}),(0,m.jsx)("div",{className:"flex-between w-2/5 mr-12",children:(0,m.jsxs)("div",{className:" flex items-center",children:[(0,m.jsx)(l.KC7,{className:"mr-1",style:{color:"#078532"},fontSize:12}),(0,m.jsxs)("p",{children:["Online ",null===L||void 0===L||null===(n=L.map((function(e){return e.isAvailable})))||void 0===n?void 0:n.length]})]})})]}),(0,m.jsxs)(u.b6,{mapContainerStyle:{width:"100%",height:"45vw"},center:S,zoom:50,options:{zoomControl:!1,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1},onLoad:function(e){setTimeout((function(){g(e)}))},children:[h&&(0,m.jsx)("div",{children:null===L||void 0===L?void 0:L.map((function(e){return(null===e||void 0===e?void 0:e.gpsLoc)&&(0,m.jsx)("div",{children:(null===e||void 0===e?void 0:e.isAvailable)&&(0,m.jsx)("div",{children:(0,m.jsx)(u.Jx,{style:{width:"10px"},onClick:function(){O(e)},icon:H,position:{lat:null===e||void 0===e?void 0:e.gpsLoc[1],lng:null===e||void 0===e?void 0:e.gpsLoc[0]},label:(0,a.Z)((0,a.Z)({text:null===e||void 0===e?void 0:e.fname},Q),{},{marginTop:"-250px"})})})})}))}),B&&(0,m.jsx)(u.tH,{directions:B}),(0,m.jsx)(m.Fragment,{})]})]}):(0,m.jsx)(m.Fragment,{})}}}]);
//# sourceMappingURL=765.2b6fbc8c.chunk.js.map