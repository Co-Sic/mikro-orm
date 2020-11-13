(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{548:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var r=a(1),n=a(6),c=(a(0),a(807)),b={id:"metadataprovider",title:"Class: MetadataProvider",sidebar_label:"MetadataProvider"},i={unversionedId:"api/classes/metadataprovider",id:"version-4.2/api/classes/metadataprovider",isDocsHomePage:!1,title:"Class: MetadataProvider",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/metadataprovider.md",slug:"/api/classes/metadataprovider",permalink:"/docs/api/classes/metadataprovider",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/metadataprovider.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1605283252,sidebar_label:"MetadataProvider",sidebar:"version-4.2/API",previous:{title:"Class: MetadataError<T>",permalink:"/docs/api/classes/metadataerror"},next:{title:"Class: MetadataStorage",permalink:"/docs/api/classes/metadatastorage"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]}]},{value:"Methods",id:"methods",children:[{value:"initProperties",id:"initproperties",children:[]},{value:"loadEntityMetadata",id:"loadentitymetadata",children:[]},{value:"loadFromCache",id:"loadfromcache",children:[]},{value:"useCache",id:"usecache",children:[]}]}],p={rightToc:o};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"MetadataProvider")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/javascriptmetadataprovider"}),"JavaScriptMetadataProvider")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/reflectmetadataprovider"}),"ReflectMetadataProvider")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new MetadataProvider"),"(",Object(c.b)("inlineCode",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/iconfiguration"}),"IConfiguration"),"): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/metadataprovider"}),"MetadataProvider")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataProvider.ts#L9"}),"packages/core/src/metadata/MetadataProvider.ts:9"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/iconfiguration"}),"IConfiguration"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/metadataprovider"}),"MetadataProvider")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"config"},"config"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/iconfiguration"}),"IConfiguration")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataProvider.ts#L11"}),"packages/core/src/metadata/MetadataProvider.ts:11"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"initproperties"},"initProperties"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected"),Object(c.b)("strong",{parentName:"p"},"initProperties"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),", ",Object(c.b)("inlineCode",{parentName:"p"},"fallback"),": (prop: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"),") => void ","|"," Promise","<","void>): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataProvider.ts#L23"}),"packages/core/src/metadata/MetadataProvider.ts:23"))),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"fallback")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(prop: ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"),") => void ","|"," Promise","<","void>")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadentitymetadata"},"loadEntityMetadata"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"loadEntityMetadata"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),", ",Object(c.b)("inlineCode",{parentName:"p"},"name"),": string): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataProvider.ts#L13"}),"packages/core/src/metadata/MetadataProvider.ts:13"))),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadfromcache"},"loadFromCache"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadFromCache"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),", ",Object(c.b)("inlineCode",{parentName:"p"},"cache"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"): void"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataProvider.ts#L15"}),"packages/core/src/metadata/MetadataProvider.ts:15"))),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"cache")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," void"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"usecache"},"useCache"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"useCache"),"(): boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataProvider.ts#L19"}),"packages/core/src/metadata/MetadataProvider.ts:19"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," boolean"))}d.isMDXComponent=!0},807:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),d=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=d(a),m=r,O=l["".concat(b,".").concat(m)]||l[m]||s[m]||c;return a?n.a.createElement(O,i(i({ref:t},p),{},{components:a})):n.a.createElement(O,i({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var p=2;p<c;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);