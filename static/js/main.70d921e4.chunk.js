(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),r=n.n(s),l=(n(14),n(2)),o=(n(15),n(5)),i=n.n(o),d=n(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(d.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(d.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault",children:"enable darkmode"})]})]})]})})}function h(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(d.jsx)("h1",{children:e.heading}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(d.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Converted to upper case!","success")},children:"Convert to uppercase"}),Object(d.jsx)("button",{className:"btn btn-primary  mx-2",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Converted to lower case!","success")},children:"Convert to Lowercase"}),Object(d.jsx)("button",{className:"btn btn-primary  mx-2",onClick:function(){s(""),e.showAlert("Cleared text!","success")},children:"Clear text"}),Object(d.jsx)("button",{className:"btn btn-primary  mx-2",onClick:function(){s(c.split("").reverse().join("")),e.showAlert("Reverse text!","success")},children:"Reverse text"})]}),Object(d.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(d.jsx)("h1",{children:"Your Text Summary"}),Object(d.jsxs)("p",{children:[c.split(" ").length," words, ",c.length," characters"]}),Object(d.jsxs)("p",{children:[.008*c.split(" ").length," Minutes Reading Times"]}),Object(d.jsxs)("p",{children:[.0066*c.split(" ").length," Minutes Speaking Time"]}),Object(d.jsx)("h2",{children:"Preview"}),Object(d.jsx)("p",{children:c.length>0?c:"Enter something in box to preview"})]})]})}b.prototype={title:i.a.string.isRequired,Abouttext:i.a.string.isRequired},b.defaultProps={tilte:"set title here",Abouttext:"About"};var j=function(e){return e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsxs)("strong",{children:[" ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)]}),": ",e.alert.msg]})};var u=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(l.a)(s,2),o=r[0],i=r[1],u=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),1500)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{title:"Textutils",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.background="#042743",u("dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(c("light"),document.body.style.background="white",u("light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(d.jsx)(j,{alert:o}),Object(d.jsx)("div",{className:" container my-3 ",children:Object(d.jsx)(h,{showAlert:u,heading:"enter the text to enalyze below",mode:n})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),m()}},[[19,1,2]]]);
//# sourceMappingURL=main.70d921e4.chunk.js.map