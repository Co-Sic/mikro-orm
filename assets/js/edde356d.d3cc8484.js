(window.webpackJsonp=window.webpackJsonp||[]).push([[1081],{1151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(3),b=a(7),n=(a(0),a(1253)),c={id:"tsmorphmetadataprovider",title:"Class: TsMorphMetadataProvider",sidebar_label:"TsMorphMetadataProvider"},i={unversionedId:"api/classes/tsmorphmetadataprovider",id:"version-4.3/api/classes/tsmorphmetadataprovider",isDocsHomePage:!1,title:"Class: TsMorphMetadataProvider",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/tsmorphmetadataprovider.md",slug:"/api/classes/tsmorphmetadataprovider",permalink:"/docs/4.3/api/classes/tsmorphmetadataprovider",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/tsmorphmetadataprovider.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611917607,sidebar_label:"TsMorphMetadataProvider",sidebar:"version-4.3/API",previous:{title:"Class: TransactionContext",permalink:"/docs/4.3/api/classes/transactioncontext"},next:{title:"Class: Type<JSType, DBType>",permalink:"/docs/4.3/api/classes/type"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"project",id:"project",children:[]},{value:"sources",id:"sources",children:[]}]},{value:"Methods",id:"methods",children:[{value:"extractType",id:"extracttype",children:[]},{value:"getExistingSourceFile",id:"getexistingsourcefile",children:[]},{value:"getSourceFile",id:"getsourcefile",children:[]},{value:"initProperties",id:"initproperties",children:[]},{value:"initPropertyType",id:"initpropertytype",children:[]},{value:"initSourceFiles",id:"initsourcefiles",children:[]},{value:"loadEntityMetadata",id:"loadentitymetadata",children:[]},{value:"loadFromCache",id:"loadfromcache",children:[]},{value:"processWrapper",id:"processwrapper",children:[]},{value:"readTypeFromSource",id:"readtypefromsource",children:[]},{value:"useCache",id:"usecache",children:[]}]}],o={toc:p};function l(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"MetadataProvider"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"TsMorphMetadataProvider")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new TsMorphMetadataProvider"),"(",Object(n.b)("inlineCode",{parentName:"p"},"config"),": IConfiguration): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/tsmorphmetadataprovider"}),"TsMorphMetadataProvider")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/tsmorphmetadataprovider"}),"TsMorphMetadataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/tsmorphmetadataprovider#constructor"}),"constructor"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in packages/core/dist/metadata/MetadataProvider.d.ts:6")),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"config")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IConfiguration")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/tsmorphmetadataprovider"}),"TsMorphMetadataProvider")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"config"},"config"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"config"),": IConfiguration"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/tsmorphmetadataprovider"}),"TsMorphMetadataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/tsmorphmetadataprovider#config"}),"config"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in packages/core/dist/metadata/MetadataProvider.d.ts:6")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"project"},"project"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"project"),": Project = new Project({ compilerOptions: { strictNullChecks: true, }, })"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L6"}),"packages/reflection/src/TsMorphMetadataProvider.ts:6"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sources"},"sources"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("strong",{parentName:"p"},"sources"),": SourceFile[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L12"}),"packages/reflection/src/TsMorphMetadataProvider.ts:12"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"extracttype"},"extractType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"extractType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L49"}),"packages/reflection/src/TsMorphMetadataProvider.ts:49"))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityProperty")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getexistingsourcefile"},"getExistingSourceFile"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getExistingSourceFile"),"(",Object(n.b)("inlineCode",{parentName:"p"},"path"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"ext?"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"validate?"),": boolean): Promise","<","SourceFile>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L26"}),"packages/reflection/src/TsMorphMetadataProvider.ts:26"))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"path")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"ext?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"validate")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","SourceFile>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getsourcefile"},"getSourceFile"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"getSourceFile"),"(",Object(n.b)("inlineCode",{parentName:"p"},"tsPath"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"validate"),": boolean): Promise","<","SourceFile ","|"," undefined>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L99"}),"packages/reflection/src/TsMorphMetadataProvider.ts:99"))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"tsPath")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"validate")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","SourceFile ","|"," undefined>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"initproperties"},"initProperties"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected"),Object(n.b)("strong",{parentName:"p"},"initProperties"),"(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": EntityMetadata): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L36"}),"packages/reflection/src/TsMorphMetadataProvider.ts:36"))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityMetadata")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"initpropertytype"},"initPropertyType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"initPropertyType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": EntityMetadata, ",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L61"}),"packages/reflection/src/TsMorphMetadataProvider.ts:61"))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityMetadata")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityProperty")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"initsourcefiles"},"initSourceFiles"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"initSourceFiles"),"(): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L127"}),"packages/reflection/src/TsMorphMetadataProvider.ts:127"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"loadentitymetadata"},"loadEntityMetadata"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"loadEntityMetadata"),"(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": EntityMetadata, ",Object(n.b)("inlineCode",{parentName:"p"},"name"),": string): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L18"}),"packages/reflection/src/TsMorphMetadataProvider.ts:18"))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityMetadata")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"name")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"loadfromcache"},"loadFromCache"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"loadFromCache"),"(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": EntityMetadata, ",Object(n.b)("inlineCode",{parentName:"p"},"cache"),": EntityMetadata): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/tsmorphmetadataprovider"}),"TsMorphMetadataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/tsmorphmetadataprovider#loadfromcache"}),"loadFromCache"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in packages/core/dist/metadata/MetadataProvider.d.ts:9")),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityMetadata")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"cache")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityMetadata")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"processwrapper"},"processWrapper"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"processWrapper"),"(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty, ",Object(n.b)("inlineCode",{parentName:"p"},"wrapper"),": string): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L113"}),"packages/reflection/src/TsMorphMetadataProvider.ts:113"))),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityProperty")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"wrapper")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"readtypefromsource"},"readTypeFromSource"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"readTypeFromSource"),"(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": EntityMetadata, ",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": EntityProperty): Promise","<","{ optional?: boolean ; type: string  }>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L73"}),"packages/reflection/src/TsMorphMetadataProvider.ts:73"))),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityMetadata")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityProperty")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","{ optional?: boolean ; type: string  }>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"usecache"},"useCache"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"useCache"),"(): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/reflection/src/TsMorphMetadataProvider.ts#L14"}),"packages/reflection/src/TsMorphMetadataProvider.ts:14"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"))}l.isMDXComponent=!0},1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),l=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=l(a),O=r,s=d["".concat(c,".").concat(O)]||d[O]||m[O]||n;return a?b.a.createElement(s,i(i({ref:t},o),{},{components:a})):b.a.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=O;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var o=2;o<n;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);