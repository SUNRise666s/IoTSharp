"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[113],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),f=p(r),d=a,g=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(g,o(o({ref:e},l),{},{components:r})):n.createElement(g,o({ref:e},l))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2089:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:5},s="\u5982\u4f55\u5bf9\u63a5\u7b2c\u4e09\u65b9\u7f51\u5173\uff1f",p={unversionedId:"tutorial-basics/gateway",id:"tutorial-basics/gateway",title:"\u5982\u4f55\u5bf9\u63a5\u7b2c\u4e09\u65b9\u7f51\u5173\uff1f",description:"\u672c\u6559\u7a0b\u4f7f\u7528iotgateway \u8fdb\u884c\u6f14\u793a\u8bbe\u5907\u8f93\u5165\u7684\u63a5\u5165 \uff0c\u6e90\u7801\u5730\u5740 https://github.com/iioter/iotgateway",source:"@site/docs/tutorial-basics/gateway.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/gateway",permalink:"/docs/tutorial-basics/gateway",editUrl:"https://github.com/IoTSharp/IoTSharp/edit/master/docs/docs/tutorial-basics/gateway.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u914d\u7f6eIoTSharp?",permalink:"/docs/tutorial-basics/appsettings"},next:{title:"\u5982\u4f55\u67e5\u8be2\u9065\u6d4b\u6e90\u6570\u636e?",permalink:"/docs/tutorial-basics/influxdb"}},l={},u=[{value:"\u6dfb\u52a0\u7f51\u5173",id:"\u6dfb\u52a0\u7f51\u5173",level:2},{value:"\u590d\u5236\u7f51\u5173token",id:"\u590d\u5236\u7f51\u5173token",level:2},{value:"\u4fee\u6539\u7f51\u5173\u914d\u7f6e",id:"\u4fee\u6539\u7f51\u5173\u914d\u7f6e",level:2},{value:"\u5237\u65b0iotsharp\u9875\u9762",id:"\u5237\u65b0iotsharp\u9875\u9762",level:2}],f={toc:u};function d(t){var e=t.components,c=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5982\u4f55\u5bf9\u63a5\u7b2c\u4e09\u65b9\u7f51\u5173"},"\u5982\u4f55\u5bf9\u63a5\u7b2c\u4e09\u65b9\u7f51\u5173\uff1f"),(0,i.kt)("p",null,"\u672c\u6559\u7a0b\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"iotgateway")," \u8fdb\u884c\u6f14\u793a\u8bbe\u5907\u8f93\u5165\u7684\u63a5\u5165 \uff0c\u6e90\u7801\u5730\u5740 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iioter/iotgateway"},"https://github.com/iioter/iotgateway")),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u7f51\u5173"},"\u6dfb\u52a0\u7f51\u5173"),(0,i.kt)("p",null,"\u6ce8\u610f",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907\u7c7b\u578b"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u8ba4\u8bc1\u65b9\u5f0f"),"\n",(0,i.kt)("img",{alt:"\u6dfb\u52a0\u7f51\u5173",src:r(9241).Z,width:"1889",height:"620"})),(0,i.kt)("h2",{id:"\u590d\u5236\u7f51\u5173token"},"\u590d\u5236\u7f51\u5173token"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u590d\u5236\u7f51\u5173token",src:r(3991).Z,width:"1892",height:"614"})),(0,i.kt)("h2",{id:"\u4fee\u6539\u7f51\u5173\u914d\u7f6e"},"\u4fee\u6539\u7f51\u5173\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u4fee\u6539\u7f51\u5173\u914d\u7f6e",src:r(4993).Z,width:"1794",height:"575"})),(0,i.kt)("h2",{id:"\u5237\u65b0iotsharp\u9875\u9762"},"\u5237\u65b0iotsharp\u9875\u9762"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IoTSharp"),"\u8bbe\u5907\u5217\u8868\u53ef\u4ee5\u770b\u5230\uff0c\u4e00\u4e2a\u7f51\u51732\u4e2a\u8bbe\u5907\u5747\u5df2\u5728\u7ebf"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u8bbe\u5907\u5728\u7ebf",src:r(9072).Z,width:"1919",height:"723"})))}d.isMDXComponent=!0},9241:function(t,e,r){e.Z=r.p+"assets/images/add-gateway-0ef42e6d3fd265198890c0f86134bc38.png"},4993:function(t,e,r){e.Z=r.p+"assets/images/gateway-config-7bb29f6e2f5dc142b00a3a2bbc1af069.png"},9072:function(t,e,r){e.Z=r.p+"assets/images/gateway-online-40e2c13f01a817a750fc9b1f30ae4fd9.png"},3991:function(t,e,r){e.Z=r.p+"assets/images/gateway-token-c11f01d6f84e8fe8d360647f64fe23df.png"}}]);