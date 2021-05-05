(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{204:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(26),i=(t(89),t(52),t(8)),o=t.n(i),c=t(17),s=t(35),u=t(13),m=t(7),d=t(9),b=t(22),v=[{value:18,label:"18+"},{value:45,label:"45+"}],p=[{value:1,label:"Andaman and Nicobar Islands"},{value:2,label:"Andhra Pradesh"},{value:3,label:"Arunachal Pradesh"},{value:4,label:"Assam"},{value:5,label:"Bihar"},{value:6,label:"Chandigarh"},{value:7,label:"Chhattisgarh"},{value:8,label:"Dadra and Nagar Haveli"},{value:37,label:"Daman and Diu"},{value:9,label:"Delhi"},{value:10,label:"Goa"},{value:11,label:"Gujarat"},{value:12,label:"Haryana"},{value:13,label:"Himachal Pradesh"},{value:14,label:"Jammu and Kashmir"},{value:15,label:"Jharkhand"},{value:16,label:"Karnataka"},{value:17,label:"Kerala"},{value:18,label:"Ladakh"},{value:19,label:"Lakshadweep"},{value:20,label:"Madhya Pradesh"},{value:21,label:"Maharashtra"},{value:22,label:"Manipur"},{value:23,label:"Meghalaya"},{value:24,label:"Mizoram"},{value:25,label:"Nagaland"},{value:26,label:"Odisha"},{value:27,label:"Puducherry"},{value:28,label:"Punjab"},{value:29,label:"Rajasthan"},{value:30,label:"Sikkim"},{value:31,label:"Tamil Nadu"},{value:32,label:"Telangana"},{value:33,label:"Tripura"},{value:34,label:"Uttar Pradesh"},{value:35,label:"Uttarakhand"},{value:36,label:"West Bengal"}],h=b.b().shape({name:b.c().matches(/^[a-zA-Z ]*$/,"Name should not contain special character").required("Please enter a valid Name").min(3,"First name is too short (minimum is 3 characters)"),age:b.b().required("Please select valid age group"),email:b.c().email("Please enter a valid email address").required("Email is required"),mode:b.a().required("Mode is mandatory")}),f=t(1),E=t(2),g=t(5),y=t(6),j=t(83),O=t(28),w=t.n(O),S=function(e){Object(g.a)(t,e);var a=Object(y.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){var e=this.props,a=e.value,t=e.onChange,l=e.isDisabled,r=e.error,i=e.options,o=e.isMulti,c=e.isSearchable,s=e.placeholder,u=e.className,m=e.defaultValue,d=e.labelText,b=e.required,v=e.classNameOut;return n.a.createElement("div",{className:w()("form-group",v)},d?n.a.createElement("label",null,d,b?n.a.createElement("sup",null,"*"):null):null,n.a.createElement(j.a,{classNamePrefix:"select-dropdown",className:u,onChange:t,value:a,isDisabled:l,placeholder:s,options:i,isMulti:o,isSearchable:c,defaultValue:m}),r?n.a.createElement("span",{className:"error-message"},r):null)}}]),t}(l.Component),N=function(e){Object(g.a)(t,e);var a=Object(y.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.type,l=e.placeholder,r=e.id,i=e.conditionalClass,o=e.labelText,c=e.required,s=e.className,u=e.disabled;return n.a.createElement("div",{className:w()("form-group",s)},o?n.a.createElement("label",null,o," ",c?n.a.createElement("sup",null,"*"):null):null,n.a.createElement(d.b,{name:a,type:t,id:r,placeholder:l,className:w()("form-control",i),disabled:u}),n.a.createElement(d.a,{name:a,component:"span",className:"error-message"}))}}]),t}(l.Component),x="https://covid.shopatdoor.in",k={name:"",age:"",email:"",mode:"",state:"",district:"",pincode:""},C=function(){var e=Object(l.useState)(Object(u.a)({},k)),a=Object(m.a)(e,2),t=a[0],r=a[1],i=Object(l.useState)([]),b=Object(m.a)(i,2),f=b[0],E=b[1],g=function(e,a,l){r(Object(u.a)(Object(u.a)({},t),{},Object(s.a)({},a,l))),e(a,l)},y=function(){var e=Object(c.a)(o.a.mark((function e(a){var t,l,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}return e.next=3,fetch("".concat(x,"/districts"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({state_id:a})});case 3:return t=e.sent,e.next=6,t.json();case 6:200===(null===(l=e.sent)||void 0===l?void 0:l.status)?(r=(r=null===l||void 0===l||null===(n=l.data)||void 0===n?void 0:n.districts).map((function(e){return{value:e.district_id.toString(),label:e.district_name}})),E(r)):window.alert("Something Went Wrong!");case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){var e;y(null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.value)}),[t.state]),n.a.createElement("div",null,n.a.createElement("div",{className:"box1 form-wrapper"},n.a.createElement(d.c,{initialValues:t,validationSchema:h,onSubmit:function(){var e=Object(c.a)(o.a.mark((function e(a,t){var l,n,i,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n={}).name=a.name,n.email=a.email,n.age=null===(l=a.age)||void 0===l?void 0:l.value,n.mode=parseInt(a.mode),1===n.mode?n.pincode=a.pincode:2===n.mode&&(n.dist_id=null===(i=a.district)||void 0===i?void 0:i.value),e.next=8,fetch("".concat(x,"/userinfo"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(Object(u.a)({},n))});case 8:return c=e.sent,e.next=11,c.json();case 11:s=e.sent,console.log(s),200===(null===s||void 0===s?void 0:s.status)?(window.alert(s.data),t.resetForm({}),r(Object(u.a)({},k))):window.alert("Something Went Wrong!");case 14:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement(N,{id:"name",name:"name",placeholder:"Enter your name"}),n.a.createElement("label",{htmlFor:"age"},"Age"),n.a.createElement(S,{placeholder:"Select Age Group",value:null===t||void 0===t?void 0:t.age,onChange:function(a){g(e.setFieldValue,"age",a)},options:v,error:e.errors.age}),n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement(N,{id:"email",name:"email",placeholder:"Enter your Email",type:"email"}),n.a.createElement("div",{id:"my-radio-group"},"Mode"),n.a.createElement("div",{role:"group","aria-labelledby":"mode"},n.a.createElement("label",null,n.a.createElement(d.b,{type:"radio",name:"mode",value:"1"}),"Pincode")," ",n.a.createElement("label",null,n.a.createElement(d.b,{type:"radio",name:"mode",value:"2"}),"District")),n.a.createElement(d.a,{name:"mode",component:"div",className:"error-message"}),"1"===e.values.mode&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"age"},"Pincode"),n.a.createElement(N,{id:"pincode",name:"pincode",placeholder:"Enter your pincode",type:"pincode"})),"2"===e.values.mode&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"state"},"State"),n.a.createElement(S,{placeholder:"Select State",value:null===t||void 0===t?void 0:t.state,onChange:function(a){g(e.setFieldValue,"state",a)},options:p,error:e.errors.state}),n.a.createElement("label",{htmlFor:"District"},"District"),n.a.createElement(S,{placeholder:"Select District",value:null===t||void 0===t?void 0:t.district,onChange:function(a){return g(e.setFieldValue,"district",a)},options:f,error:e.errors.district})),n.a.createElement("br",null),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}))))},P={email:""},F=function(){var e=Object(l.useState)(Object(u.a)({},P)),a=Object(m.a)(e,2),t=a[0];a[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"box1 form-wrapper"},n.a.createElement(d.c,{initialValues:t,onSubmit:function(){var e=Object(c.a)(o.a.mark((function e(a,t){var l,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l={}).email=a.email,console.log("foo"),e.next=5,fetch("".concat(x,"/unsubscribe"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(Object(u.a)({},l))});case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,console.log(r),400===(null===r||void 0===r?void 0:r.status)?(window.alert(r.data),t.resetForm({})):window.alert("Something Went Wrong!");case 11:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement(N,{id:"email",name:"email",placeholder:"Enter your Email",type:"email"}),n.a.createElement("br",null),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Unsubscribe from Mail"))}))))},T=function(){var e=Object(l.useState)(null),a=Object(m.a)(e,2),t=a[0],r=a[1],i=function(){var e=Object(c.a)(o.a.mark((function e(a,t){var l,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/users"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return l=e.sent,e.next=5,l.json();case 5:n=e.sent,console.log(n),200===(null===n||void 0===n?void 0:n.status)&&r(n.data);case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){i(),setInterval((function(){i()}),5e3)}),[]),n.a.createElement("div",{className:"box2 subscription"},"Registered Users Count : ",t)},A=function(){return n.a.createElement("div",{className:"container-fluid col-md-6"},n.a.createElement("div",{className:"heading"},n.a.createElement("h1",null,"Vaccine Availability"),n.a.createElement("br",null),n.a.createElement("h5",null,"Submit following details, and we'll notify you, as soon as COVID-19 vaccine is available in your area for next 7 days.")),n.a.createElement(T,null),n.a.createElement(C,null),n.a.createElement(F,null),n.a.createElement("div",{className:"box2 withLove"},"Created by Vikesh with \ud83d\udda4"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(r.render)(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,a,t){},84:function(e,a,t){e.exports=t(204)}},[[84,1,2]]]);
//# sourceMappingURL=main.811834a3.chunk.js.map