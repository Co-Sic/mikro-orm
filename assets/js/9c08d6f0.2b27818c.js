(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36942],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return k},kt:function(){return N}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=d(a),N=r,u=s["".concat(m,".").concat(N)]||s[N]||o[N]||l;return a?n.createElement(u,p(p({ref:t},k),{},{components:a})):n.createElement(u,p({ref:t},k))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},28078:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return m},default:function(){return k}});var n=a(74034),r=a(79973),l=(a(67294),a(3905)),p={id:"knex.knex-1.batchinsertbuilder",title:"Interface: BatchInsertBuilder<TRecord, TResult>",sidebar_label:"BatchInsertBuilder",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/knex.knex-1.batchinsertbuilder",id:"version-4.5/api/interfaces/knex.knex-1.batchinsertbuilder",isDocsHomePage:!1,title:"Interface: BatchInsertBuilder<TRecord, TResult\\>",description:"knex.Knex.BatchInsertBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.batchinsertbuilder.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.batchinsertbuilder",permalink:"/docs/api/interfaces/knex.knex-1.batchinsertbuilder",editUrl:null,version:"4.5",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1622235616,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"BatchInsertBuilder",frontMatter:{id:"knex.knex-1.batchinsertbuilder",title:"Interface: BatchInsertBuilder<TRecord, TResult>",sidebar_label:"BatchInsertBuilder",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: AsymmetricAggregation<TRecord, TResult, TValue\\>",permalink:"/docs/api/interfaces/knex.knex-1.asymmetricaggregation"},next:{title:"Interface: ChainableInterface<T\\>",permalink:"/docs/api/interfaces/knex.knex-1.chainableinterface"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"Symbol.toStringTag",id:"symboltostringtag",children:[]}]},{value:"Methods",id:"methods",children:[{value:"catch",id:"catch",children:[]},{value:"finally",id:"finally",children:[]},{value:"returning",id:"returning",children:[]},{value:"then",id:"then",children:[]},{value:"transacting",id:"transacting",children:[]}]}],d={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".BatchInsertBuilder"),(0,l.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"),"[]")))),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"Promise"),"<ResolveResult<TResult",">",">"),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},"BatchInsertBuilder")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"symboltostringtag"},"[Symbol.toStringTag]"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"[Symbol.toStringTag]"),": ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,"Inherited from: void"),(0,l.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"catch"},"catch"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"catch"),"<TResult",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"onrejected?"),": ",(0,l.kt)("em",{parentName:"p"},"null")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"p"},"reason"),": ",(0,l.kt)("em",{parentName:"p"},"any"),") => TResult ","|"," ",(0,l.kt)("em",{parentName:"p"},"PromiseLike"),"<TResult",">","): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<Resolve<TResult",">"," ","|"," TResult",">"),(0,l.kt)("p",null,"Attaches a callback for only the rejection of the Promise."),(0,l.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"never"))))),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"onrejected?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"null")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"td"},"reason"),": ",(0,l.kt)("em",{parentName:"td"},"any"),") => TResult ","|"," ",(0,l.kt)("em",{parentName:"td"},"PromiseLike"),"<TResult",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The callback to execute when the Promise is rejected.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<Resolve<TResult",">"," ","|"," TResult",">"),(0,l.kt)("p",null,"A Promise for the completion of the callback."),(0,l.kt)("p",null,"Inherited from: void"),(0,l.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:1460"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"finally"},"finally"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"finally"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"onfinally?"),": ",(0,l.kt)("em",{parentName:"p"},"null")," ","|"," () => ",(0,l.kt)("em",{parentName:"p"},"void"),"): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<Resolve<TResult",">",">"),(0,l.kt)("p",null,"Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The\nresolved value cannot be modified from the callback."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"onfinally?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"null")," ","|"," () => ",(0,l.kt)("em",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The callback to execute when the Promise is settled (fulfilled or rejected).")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<Resolve<TResult",">",">"),(0,l.kt)("p",null,"A Promise for the completion of the callback."),(0,l.kt)("p",null,"Inherited from: void"),(0,l.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es2018.promise.d.ts:31"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"returning"},"returning"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"returning"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,l.kt)("em",{parentName:"p"},"**): ["),"BatchInsertBuilder",(0,l.kt)("em",{parentName:"p"},"](/docs/api/interfaces/knex.knex-1.batchinsertbuilder)<TRecord, DeferredKeySelection<TRecord, never, "),"false",(0,l.kt)("em",{parentName:"p"},", {}, "),"false*, {}, never",">","[]",">"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"column")),(0,l.kt)("td",{parentName:"tr",align:"left"},"***")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.batchinsertbuilder"},(0,l.kt)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, DeferredKeySelection<TRecord, never, ",(0,l.kt)("em",{parentName:"p"},"false"),", {}, ",(0,l.kt)("em",{parentName:"p"},"false"),", {}, never",">","[]",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1547"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"returning"),"<TKey, TResult2",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"column"),": TKey): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.batchinsertbuilder"},(0,l.kt)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),(0,l.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"SetSingle"),"<AddKey<SetBase<UnwrapArrayMember<TResult",">",", ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},(0,l.kt)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",(0,l.kt)("em",{parentName:"td"},"base"),">",">",", TKey",">",", ",(0,l.kt)("em",{parentName:"td"},"true"),">","[]")))),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"column")),(0,l.kt)("td",{parentName:"tr",align:"left"},"TKey")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.batchinsertbuilder"},(0,l.kt)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1548"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"returning"),"<TKey, TResult2",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"columns"),": readonly TKey[]): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.batchinsertbuilder"},(0,l.kt)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),(0,l.kt)("h4",{id:"type-parameters-3"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"SetSingle"),"<AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult",">",", ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},(0,l.kt)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",(0,l.kt)("em",{parentName:"td"},"base"),">",">",", TKey",">",", {}",">",", ",(0,l.kt)("em",{parentName:"td"},"false"),">","[]")))),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columns")),(0,l.kt)("td",{parentName:"tr",align:"left"},"readonly TKey[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.batchinsertbuilder"},(0,l.kt)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1558"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"returning"),"<TResult2",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,l.kt)("em",{parentName:"p"},"unknown")," ",(0,l.kt)("em",{parentName:"p"},"extends")," TRecord ? ",(0,l.kt)("em",{parentName:"p"},"string")," ","|"," readonly ",(0,l.kt)("em",{parentName:"p"},"string"),"[] : ",(0,l.kt)("em",{parentName:"p"},"never"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.batchinsertbuilder"},(0,l.kt)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),(0,l.kt)("h4",{id:"type-parameters-4"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult2")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"Partial"),"<AnyOrUnknownToOther<TRecord, {}",">",">","[]")))),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"column")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"unknown")," ",(0,l.kt)("em",{parentName:"td"},"extends")," TRecord ? ",(0,l.kt)("em",{parentName:"td"},"string")," ","|"," readonly ",(0,l.kt)("em",{parentName:"td"},"string"),"[] : ",(0,l.kt)("em",{parentName:"td"},"never"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.batchinsertbuilder"},(0,l.kt)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1568"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"then"},"then"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"then"),"<TResult1, TResult2",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"onfulfilled?"),": ",(0,l.kt)("em",{parentName:"p"},"null")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,l.kt)("em",{parentName:"p"},"Resolve"),"<TResult",">",") => TResult1 ","|"," ",(0,l.kt)("em",{parentName:"p"},"PromiseLike"),"<TResult1",">",", ",(0,l.kt)("inlineCode",{parentName:"p"},"onrejected?"),": ",(0,l.kt)("em",{parentName:"p"},"null")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"p"},"reason"),": ",(0,l.kt)("em",{parentName:"p"},"any"),") => TResult2 ","|"," ",(0,l.kt)("em",{parentName:"p"},"PromiseLike"),"<TResult2",">","): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<TResult1 ","|"," TResult2",">"),(0,l.kt)("p",null,"Attaches callbacks for the resolution and/or rejection of the Promise."),(0,l.kt)("h4",{id:"type-parameters-5"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult1")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"Resolve"),"<TResult",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult2")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"never"))))),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"onfulfilled?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"null")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,l.kt)("em",{parentName:"td"},"Resolve"),"<TResult",">",") => TResult1 ","|"," ",(0,l.kt)("em",{parentName:"td"},"PromiseLike"),"<TResult1",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The callback to execute when the Promise is resolved.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"onrejected?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"null")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"td"},"reason"),": ",(0,l.kt)("em",{parentName:"td"},"any"),") => TResult2 ","|"," ",(0,l.kt)("em",{parentName:"td"},"PromiseLike"),"<TResult2",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The callback to execute when the Promise is rejected.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<TResult1 ","|"," TResult2",">"),(0,l.kt)("p",null,"A Promise for the completion of which ever callback is executed."),(0,l.kt)("p",null,"Inherited from: void"),(0,l.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:1453"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"transacting"},"transacting"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"transacting"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"trx"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.transaction"},(0,l.kt)("em",{parentName:"a"},"Transaction")),"<any, any",">","): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.batchinsertbuilder"},(0,l.kt)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"trx")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.transaction"},(0,l.kt)("em",{parentName:"a"},"Transaction")),"<any, any",">")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.batchinsertbuilder"},(0,l.kt)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1545"))}k.isMDXComponent=!0}}]);