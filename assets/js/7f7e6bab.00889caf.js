(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30585],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92759:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),o={id:"core.assignoptions",title:"Interface: AssignOptions",sidebar_label:"AssignOptions",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/interfaces/core.assignoptions",id:"version-4.5/api/interfaces/core.assignoptions",isDocsHomePage:!1,title:"Interface: AssignOptions",description:"core.AssignOptions",source:"@site/versioned_docs/version-4.5/api/interfaces/core.assignoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.assignoptions",permalink:"/docs/api/interfaces/core.assignoptions",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1621931266,formattedLastUpdatedAt:"5/25/2021",sidebar_label:"AssignOptions",frontMatter:{id:"core.assignoptions",title:"Interface: AssignOptions",sidebar_label:"AssignOptions",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: TsMorphMetadataProvider",permalink:"/docs/api/classes/reflection.tsmorphmetadataprovider"},next:{title:"Interface: CacheAdapter",permalink:"/docs/api/interfaces/core.cacheadapter"}},p=[{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"em",id:"em",children:[]},{value:"merge",id:"merge",children:[]},{value:"mergeObjects",id:"mergeobjects",children:[]},{value:"onlyProperties",id:"onlyproperties",children:[]},{value:"updateNestedEntities",id:"updatenestedentities",children:[]}]}],c={toc:p};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".AssignOptions"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"convertCustomTypes"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L188"},"packages/core/src/entity/EntityAssigner.ts:188")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"em"},"em"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"em"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,a.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,a.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,a.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L191"},"packages/core/src/entity/EntityAssigner.ts:191")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"merge"},"merge"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"merge"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L190"},"packages/core/src/entity/EntityAssigner.ts:190")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mergeobjects"},"mergeObjects"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"mergeObjects"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L189"},"packages/core/src/entity/EntityAssigner.ts:189")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onlyproperties"},"onlyProperties"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"onlyProperties"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L187"},"packages/core/src/entity/EntityAssigner.ts:187")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updatenestedentities"},"updateNestedEntities"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"updateNestedEntities"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L186"},"packages/core/src/entity/EntityAssigner.ts:186")))}l.isMDXComponent=!0}}]);