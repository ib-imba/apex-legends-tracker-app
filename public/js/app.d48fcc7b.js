(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},2546:function(e,t,a){"use strict";var r=a("70a8"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("Header"),a("router-view")],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("img",{attrs:{src:e.image,alt:"logo"}}),e._m(0)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"perfil"},[e._v("Use this Gamertag:"),a("h3",[e._v("Zednim")])])}],l={name:"Header",data:function(){return{image:a("cf05")}}},c=l,u=(a("2546"),a("2877")),p=Object(u["a"])(c,o,i,!1,null,"d579ed0a",null),f=p.exports,m={name:"app",components:{Header:f}},g=m,v=(a("034f"),Object(u["a"])(g,n,s,!1,null,null,null)),d=v.exports,_=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"search"},[a("h1",[e._v("Track Player Stats")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"platform"}},[e._v("Platform")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.platform,expression:"platform"}],attrs:{name:"platform",id:"platform"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.platform=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"psn"}},[e._v("Playstation")]),a("option",{attrs:{value:"xbl"}},[e._v("Xbox")]),a("option",{attrs:{value:"Origin"}},[e._v("Origin")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"gamertag"}},[e._v("Gamertag")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gamertag,expression:"gamertag"}],attrs:{type:"text",name:"text",id:"gamertag",placeholder:"Origin ID, Xbox Live gamertag, PSN ID, etc"},domProps:{value:e.gamertag},on:{input:function(t){t.target.composing||(e.gamertag=t.target.value)}}})]),e._m(0)])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])}],y=(a("99af"),{name:"Search",data:function(){return{platform:"psn",gamertag:""}},beforeCreate:function(){document.body.className="body-bg-image"},methods:{onSubmit:function(){this.gamertag?this.$router.push("/profile/".concat(this.platform,"/").concat(this.gamertag)):this.$toasted.show("Please enter a gmertag",{duration:3e3,icon:"exclamation-circle"})}}}),D=y,x=Object(u["a"])(D,h,b,!1,null,null,null),w=x.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[e.loading?a("div",[a("h3",[e._v("Loading...")])]):e._e(),e.error?a("div",[a("h1",[e._v(e._s(e.error))]),a("router-link",{attrs:{to:"/"}},[e._v("Go Back")])],1):e._e(),e.profileData?a("div",{staticClass:"container"},[a("h1",{staticClass:"gamertag"},[a("img",{staticClass:"platform-avatar",attrs:{src:e.profileData.platformInfo.avatarUrl,alt:""}}),e._v(" "+e._s(e.profileData.platformInfo.platformUserId)+" ")]),a("div",{staticClass:"grid"},[a("div",[a("img",{attrs:{src:e.profileData.segments[1].metadata.imageUrl,alt:""}})]),a("div",[a("ul",[a("li",[a("h4",[e._v("Selected Legend")]),a("p",[e._v(e._s(e.profileData.metadata.activeLegendName))])]),e.profileData.segments[0].stats.season2Wins?a("li",[a("h4",[e._v("Season 2 Wins")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.season2Wins.displayValue)+" "),a("span",[e._v("("+e._s(e.profileData.segments[0].stats.season2Wins.percentile)+")")])])]):e._e(),e.profileData.segments[0].stats.level?a("li",[a("h4",[e._v("Apex Level")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.level.displayValue)+" "),a("span",[e._v("("+e._s(e.profileData.segments[0].stats.level.percentile)+"%)")])])]):e._e(),e.profileData.segments[0].stats.kills?a("li",[a("h4",[e._v("Lifetime Kills")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.kills.displayValue)+" "),a("span",[e._v("("+e._s(e.profileData.segments[0].stats.kills.percentile)+"%)")])])]):e._e(),e.profileData.segments[0].stats.damage?a("li",[a("h4",[e._v("Damage Done")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.damage.displayValue)+" "),a("span",[e._v("("+e._s(e.profileData.segments[0].stats.damage.percentile)+"%)")])])]):e._e()])])]),a("router-link",{attrs:{to:"/"}},[e._v("Go Back")])],1):e._e()])},P=[],j=(a("96cf"),a("89ba")),k=a("bc3a"),C=a.n(k),S={name:"Profile",data:function(){return{loading:!1,error:null,profileData:null}},beforeCreate:function(){document.body.className="body-bg-no-image"},created:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,C.a.get("/api/v1/profile/".concat(this.$route.params.platform,"/").concat(this.$route.params.gamertag));case 4:t=e.sent,this.profileData=t.data.data,this.loading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),this.loading=!1,this.error=e.t0.response.data.message;case 13:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}()},$=S,E=(a("9b4e"),Object(u["a"])($,O,P,!1,null,"3d2e23f2",null)),L=E.exports;r["a"].use(_["a"]);var N=new _["a"]({mode:"history",routes:[{path:"/",name:"search",component:w},{path:"/profile/:platform/:gamertag",name:"profile",component:L}]}),I=a("a65d"),G=a.n(I);r["a"].config.productionTip=!1,r["a"].use(G.a,{iconPack:"fontawesome"}),new r["a"]({router:N,render:function(e){return e(d)}}).$mount("#app")},"70a8":function(e,t,a){},"85ec":function(e,t,a){},"9b4e":function(e,t,a){"use strict";var r=a("abac"),n=a.n(r);n.a},abac:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.badc059d.png"}});
//# sourceMappingURL=app.d48fcc7b.js.map