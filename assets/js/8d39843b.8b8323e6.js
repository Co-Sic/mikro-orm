(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=o.a.createContext({}),u=function(e){var t=o.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),b=u(r),p=n,d=b["".concat(i,".").concat(p)]||b[p]||l[p]||a;return r?o.a.createElement(d,c(c({ref:t},m),{},{components:r})):o.a.createElement(d,c({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},702:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(1253)),i={id:"nodestate",title:"Enumeration: NodeState",sidebar_label:"NodeState"},c={unversionedId:"api/enums/nodestate",id:"version-4.3/api/enums/nodestate",isDocsHomePage:!1,title:"Enumeration: NodeState",description:"Enumeration members",source:"@site/versioned_docs/version-4.3/api/enums/nodestate.md",slug:"/api/enums/nodestate",permalink:"/docs/4.3/api/enums/nodestate",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/enums/nodestate.md",version:"4.3",lastUpdatedBy:"Patrick Klein",lastUpdatedAt:1611857892,sidebar_label:"NodeState",sidebar:"version-4.3/API",previous:{title:"Enumeration: LockMode",permalink:"/docs/4.3/api/enums/lockmode"},next:{title:"Enumeration: QueryFlag",permalink:"/docs/4.3/api/enums/queryflag"}},s=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"IN_PROGRESS",id:"in_progress",children:[]},{value:"NOT_VISITED",id:"not_visited",children:[]},{value:"VISITED",id:"visited",children:[]}]}],m={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(a.b)("h3",{id:"in_progress"},"IN","_","PROGRESS"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"IN","_","PROGRESS"),":  = 1"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L6"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:6"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"not_visited"},"NOT","_","VISITED"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"NOT","_","VISITED"),":  = 0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L5"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:5"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"visited"},"VISITED"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"VISITED"),":  = 2"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L7"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:7"))))}u.isMDXComponent=!0}}]);