(window.webpackJsonp=window.webpackJsonp||[]).push([[795],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),m=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=m(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},i=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=m(a),i=r,j=O["".concat(c,".").concat(i)]||O[i]||s[i]||n;return a?b.a.createElement(j,p(p({ref:t},o),{},{components:a})):b.a.createElement(j,p({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=i;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var o=2;o<n;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"},864:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),b=a(7),n=(a(0),a(1253)),c={id:"core.type",title:"Class: Type<JSType, DBType>",sidebar_label:"Type",hide_title:!0},p={unversionedId:"api/classes/core.type",id:"api/classes/core.type",isDocsHomePage:!1,title:"Class: Type<JSType, DBType>",description:"Class: Type",source:"@site/docs/api/classes/core.type.md",slug:"/api/classes/core.type",permalink:"/docs/next/api/classes/core.type",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/core.type.md",version:"current",sidebar_label:"Type",sidebar:"API",previous:{title:"Class: TransactionEventBroadcaster",permalink:"/docs/next/api/classes/core.transactioneventbroadcaster"},next:{title:"Class: UnderscoreNamingStrategy",permalink:"/docs/next/api/classes/core.underscorenamingstrategy"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"types",id:"types",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],o={toc:l};function m(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-typejstype-dbtype"},"Class: Type<JSType, DBType",">"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".Type"),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"JSType")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"DBType")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSType")))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Type")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.datetype"}),Object(n.b)("em",{parentName:"a"},"DateType"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.timetype"}),Object(n.b)("em",{parentName:"a"},"TimeType"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.biginttype"}),Object(n.b)("em",{parentName:"a"},"BigIntType"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.blobtype"}),Object(n.b)("em",{parentName:"a"},"BlobType"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.arraytype"}),Object(n.b)("em",{parentName:"a"},"ArrayType"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.jsontype"}),Object(n.b)("em",{parentName:"a"},"JsonType"))))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new Type"),"<JSType, DBType",">","(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"JSType")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"DBType")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSType")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"types"},"types"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("inlineCode",{parentName:"p"},"Static")," ",Object(n.b)("strong",{parentName:"p"},"types"),": ",Object(n.b)("em",{parentName:"p"},"Map"),"<",Object(n.b)("em",{parentName:"p"},"any"),", ",Object(n.b)("em",{parentName:"p"},"any"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/ba94e28/packages/core/src/types/Type.ts#L6"}),"packages/core/src/types/Type.ts:6")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"compareastype"},"compareAsType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"compareAsType"),"(): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"How should the raw database values be compared? Used in ",Object(n.b)("inlineCode",{parentName:"p"},"EntityComparator"),".\nPossible values: string | number | boolean | date | any | buffer | array"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/ba94e28/packages/core/src/types/Type.ts#L26"}),"packages/core/src/types/Type.ts:26")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": JSType ","|"," DBType, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),", ",Object(n.b)("inlineCode",{parentName:"p"},"fromQuery?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): DBType"),Object(n.b)("p",null,"Converts a value from its JS representation to its database representation of this type."),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSType ","|"," DBType")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"fromQuery?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," DBType"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/ba94e28/packages/core/src/types/Type.ts#L11"}),"packages/core/src/types/Type.ts:11")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": JSType ","|"," DBType, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),"): JSType"),Object(n.b)("p",null,"Converts a value from its database representation to its JS representation of this type."),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSType ","|"," DBType")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," JSType"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/ba94e28/packages/core/src/types/Type.ts#L18"}),"packages/core/src/types/Type.ts:18")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),"): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Gets the SQL declaration snippet for a field of this type."),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(n.b)("em",{parentName:"td"},"any"),">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/ba94e28/packages/core/src/types/Type.ts#L41"}),"packages/core/src/types/Type.ts:41")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tojson"},"toJSON"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toJSON"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": JSType, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),"): JSType ","|"," DBType"),Object(n.b)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSType")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," JSType ","|"," DBType"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/ba94e28/packages/core/src/types/Type.ts#L34"}),"packages/core/src/types/Type.ts:34")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"gettype"},"getType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getType"),"<JSType, DBType",">","(",Object(n.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#constructor"}),Object(n.b)("em",{parentName:"a"},"Constructor")),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">","): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"JSType"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"cls")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/modules/core#constructor"}),Object(n.b)("em",{parentName:"a"},"Constructor")),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/ba94e28/packages/core/src/types/Type.ts#L46"}),"packages/core/src/types/Type.ts:46")))}m.isMDXComponent=!0}}]);