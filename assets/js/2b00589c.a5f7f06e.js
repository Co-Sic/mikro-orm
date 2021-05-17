(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88554],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54178:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i={title:"Using AsyncLocalStorage"},c={unversionedId:"async-local-storage",id:"version-4.3/async-local-storage",isDocsHomePage:!1,title:"Using AsyncLocalStorage",description:"By default, the domain api is used in the RequestContext helper. Since v4.0.3,",source:"@site/versioned_docs/version-4.3/async-local-storage.md",sourceDirName:".",slug:"/async-local-storage",permalink:"/docs/4.3/async-local-storage",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/async-local-storage.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1621290287,formattedLastUpdatedAt:"5/17/2021",frontMatter:{title:"Using AsyncLocalStorage"},sidebar:"version-4.3/docs",previous:{title:"Using native BigInt PKs (MySQL and PostgreSQL)",permalink:"/docs/4.3/using-bigint-pks"},next:{title:"Creating Custom Driver",permalink:"/docs/4.3/custom-driver"}},s=[],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"domain")," api is used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper. Since v4.0.3,\nyou can use the new ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," too, if you are on up to date node version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const storage = new AsyncLocalStorage<EntityManager>();\n\nconst orm = await MikroORM.init({\n  context: () => storage.getStore(),\n  // ...\n});\n\napp.use((req, res, next) => {\n  storage.run(orm.em.fork(true, true), next);\n});\n")))}u.isMDXComponent=!0}}]);