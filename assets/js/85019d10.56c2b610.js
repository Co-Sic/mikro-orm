(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{1253:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=b(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(t),m=n,d=u["".concat(a,".").concat(m)]||u[m]||s[m]||c;return t?o.a.createElement(d,i(i({ref:r},l),{},{components:t})):o.a.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},669:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return b}));var n=t(3),o=t(7),c=(t(0),t(1253)),a={id:"core.edge",title:"Interface: Edge",sidebar_label:"Edge",hide_title:!0},i={unversionedId:"api/interfaces/core.edge",id:"api/interfaces/core.edge",isDocsHomePage:!1,title:"Interface: Edge",description:"Interface: Edge",source:"@site/docs/api/interfaces/core.edge.md",slug:"/api/interfaces/core.edge",permalink:"/docs/next/api/interfaces/core.edge",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/core.edge.md",version:"current",sidebar_label:"Edge",sidebar:"API",previous:{title:"Interface: DeleteOptions<T>",permalink:"/docs/next/api/interfaces/core.deleteoptions"},next:{title:"Interface: EntityProperty<T>",permalink:"/docs/next/api/interfaces/core.entityproperty"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"from",id:"from",children:[]},{value:"to",id:"to",children:[]},{value:"weight",id:"weight",children:[]}]}],l={toc:p};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-edge"},"Interface: Edge"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".Edge"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Edge"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"from"},"from"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"from"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7ec9f30/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L17"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:17")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"to"},"to"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"to"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7ec9f30/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L18"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:18")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"weight"},"weight"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"weight"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7ec9f30/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L19"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:19")))}b.isMDXComponent=!0}}]);