(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21806],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||c;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63148:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var n=t(74034),o=t(79973),c=(t(67294),t(3905)),a={id:"core.queryresult",title:"Interface: QueryResult",sidebar_label:"QueryResult",custom_edit_url:null},i={unversionedId:"api/interfaces/core.queryresult",id:"api/interfaces/core.queryresult",isDocsHomePage:!1,title:"Interface: QueryResult",description:"core.QueryResult",source:"@site/docs/api/interfaces/core.queryresult.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.queryresult",permalink:"/docs/next/api/interfaces/core.queryresult",editUrl:null,version:"current",sidebar_label:"QueryResult",frontMatter:{id:"core.queryresult",title:"Interface: QueryResult",sidebar_label:"QueryResult",custom_edit_url:null},sidebar:"API",previous:{title:"Interface: QueryOrderMap",permalink:"/docs/next/api/interfaces/core.queryordermap"},next:{title:"Interface: ReferenceOptions<T, O\\>",permalink:"/docs/next/api/interfaces/core.referenceoptions"}},s=[{value:"Properties",id:"properties",children:[{value:"affectedRows",id:"affectedrows",children:[]},{value:"insertId",id:"insertid",children:[]},{value:"row",id:"row",children:[]},{value:"rows",id:"rows",children:[]}]}],p={toc:s};function u(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".QueryResult"),(0,c.kt)("h2",{id:"properties"},"Properties"),(0,c.kt)("h3",{id:"affectedrows"},"affectedRows"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"affectedRows"),": ",(0,c.kt)("em",{parentName:"p"},"number")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2885961/packages/core/src/connections/Connection.ts#L132"},"packages/core/src/connections/Connection.ts:132")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"insertid"},"insertId"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"insertId"),": ",(0,c.kt)("em",{parentName:"p"},"number")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2885961/packages/core/src/connections/Connection.ts#L133"},"packages/core/src/connections/Connection.ts:133")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"row"},"row"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,c.kt)("strong",{parentName:"p"},"row"),": ",(0,c.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,c.kt)("em",{parentName:"a"},"Dictionary")),"<any",">"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2885961/packages/core/src/connections/Connection.ts#L134"},"packages/core/src/connections/Connection.ts:134")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"rows"},"rows"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,c.kt)("strong",{parentName:"p"},"rows"),": ",(0,c.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,c.kt)("em",{parentName:"a"},"Dictionary")),"<any",">","[]"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2885961/packages/core/src/connections/Connection.ts#L135"},"packages/core/src/connections/Connection.ts:135")))}u.isMDXComponent=!0}}]);