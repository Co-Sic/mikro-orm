(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),o=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=o(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=o(a),O=r,j=i["".concat(p,".").concat(O)]||i[O]||s[O]||b;return a?n.a.createElement(j,c(c({ref:t},m),{},{components:a})):n.a.createElement(j,c({ref:t},m))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,p=new Array(b);p[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var m=2;m<b;m++)p[m]=a[m];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},311:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),b=(a(0),a(1026)),p={id:"core.decimaltype",title:"Class: DecimalType",sidebar_label:"DecimalType",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/classes/core.decimaltype",id:"api/classes/core.decimaltype",isDocsHomePage:!1,title:"Class: DecimalType",description:"Class: DecimalType",source:"@site/docs/api/classes/core.decimaltype.md",slug:"/api/classes/core.decimaltype",permalink:"/docs/next/api/classes/core.decimaltype",editUrl:null,version:"current",sidebar_label:"DecimalType",sidebar:"API",previous:{title:"Class: DeadlockException",permalink:"/docs/next/api/classes/core.deadlockexception"},next:{title:"Class: DoubleType",permalink:"/docs/next/api/classes/core.doubletype"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToDatabaseValueSQL",id:"converttodatabasevaluesql",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"convertToJSValueSQL",id:"converttojsvaluesql",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],m={toc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-decimaltype"},"Class: DecimalType"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".DecimalType"),Object(b.b)("p",null,"Type that maps an SQL DECIMAL to a JS string."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<string ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," undefined, string ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," undefined",">"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"DecimalType")))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new DecimalType"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.decimaltype"},Object(b.b)("em",{parentName:"a"},"DecimalType"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.decimaltype"},Object(b.b)("em",{parentName:"a"},"DecimalType"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"compareastype"},"compareAsType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"compareAsType"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/9e68a88/packages/core/src/types/DecimalType.ts#L14"},"packages/core/src/types/DecimalType.ts:14")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),", ",Object(b.b)("inlineCode",{parentName:"p"},"fromQuery?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Converts a value from its JS representation to its database representation of this type."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"td"},"null")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"fromQuery?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/9e68a88/packages/core/src/types/Type.ts#L11"},"packages/core/src/types/Type.ts:11")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttodatabasevaluesql"},"convertToDatabaseValueSQL"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional"),Object(b.b)("strong",{parentName:"p"},"convertToDatabaseValueSQL"),"(",Object(b.b)("inlineCode",{parentName:"p"},"key"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Converts a value from its JS representation to its database representation of this type."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"key")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/9e68a88/packages/core/src/types/Type.ts#L25"},"packages/core/src/types/Type.ts:25")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Converts a value from its database representation to its JS representation of this type."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"td"},"null")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/9e68a88/packages/core/src/types/Type.ts#L18"},"packages/core/src/types/Type.ts:18")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttojsvaluesql"},"convertToJSValueSQL"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional"),Object(b.b)("strong",{parentName:"p"},"convertToJSValueSQL"),"(",Object(b.b)("inlineCode",{parentName:"p"},"key"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Modifies the SQL expression (identifier, parameter) to convert to a JS value."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"key")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/9e68a88/packages/core/src/types/Type.ts#L30"},"packages/core/src/types/Type.ts:30")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/9e68a88/packages/core/src/types/DecimalType.ts#L10"},"packages/core/src/types/DecimalType.ts:10")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"td"},"null")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/9e68a88/packages/core/src/types/Type.ts#L44"},"packages/core/src/types/Type.ts:44")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettype"},"getType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getType"),"<JSType, DBType",">","(",Object(b.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#constructor"},Object(b.b)("em",{parentName:"a"},"Constructor")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">","): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"JSType")),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"DBType")),Object(b.b)("td",{parentName:"tr",align:"left"},"JSType")))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"cls")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#constructor"},Object(b.b)("em",{parentName:"a"},"Constructor")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/9e68a88/packages/core/src/types/Type.ts#L55"},"packages/core/src/types/Type.ts:55")))}o.isMDXComponent=!0}}]);