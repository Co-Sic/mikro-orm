(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(r),m=n,f=l["".concat(a,".").concat(m)]||l[m]||u[m]||o;return r?c.a.createElement(f,i(i({ref:t},s),{},{components:r})):c.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},360:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),c=r(7),o=(r(0),r(1253)),a={id:"core.migrationobject",title:"Interface: MigrationObject",sidebar_label:"MigrationObject",hide_title:!0},i={unversionedId:"api/interfaces/core.migrationobject",id:"api/interfaces/core.migrationobject",isDocsHomePage:!1,title:"Interface: MigrationObject",description:"Interface: MigrationObject",source:"@site/docs/api/interfaces/core.migrationobject.md",slug:"/api/interfaces/core.migrationobject",permalink:"/docs/next/api/interfaces/core.migrationobject",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/core.migrationobject.md",version:"current",sidebar_label:"MigrationObject",sidebar:"API",previous:{title:"Interface: ManyToOneOptions<T, O>",permalink:"/docs/next/api/interfaces/core.manytooneoptions"},next:{title:"Interface: MikroORMOptions<D>",permalink:"/docs/next/api/interfaces/core.mikroormoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"class",id:"class",children:[]},{value:"name",id:"name",children:[]}]}],s={toc:p};function b(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-migrationobject"},"Interface: MigrationObject"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".MigrationObject"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MigrationObject"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"class"},"class"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"class"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#constructor"}),Object(o.b)("em",{parentName:"a"},"Constructor")),"<Migration",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7ec9f30/packages/core/src/typings.ts#L355"}),"packages/core/src/typings.ts:355")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"name"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7ec9f30/packages/core/src/typings.ts#L354"}),"packages/core/src/typings.ts:354")))}b.isMDXComponent=!0}}]);