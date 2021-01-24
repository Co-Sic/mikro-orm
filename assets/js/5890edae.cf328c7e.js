(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{1140:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return y}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(o),m=n,y=b["".concat(a,".").concat(m)]||b[m]||u[m]||i;return o?r.a.createElement(y,s(s({ref:t},p),{},{components:o})):r.a.createElement(y,s({ref:t},p))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},438:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var n=o(3),r=o(7),i=(o(0),o(1140)),a={title:"Using EntityRepository instead of EntityManager",sidebar_label:"Entity Repository"},s={unversionedId:"repositories",id:"version-4.3/repositories",isDocsHomePage:!1,title:"Using EntityRepository instead of EntityManager",description:"More convenient way of fetching entities from database is by using EntityRepository, that",source:"@site/versioned_docs/version-4.3/repositories.md",slug:"/repositories",permalink:"/docs/repositories",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/repositories.md",version:"4.3",lastUpdatedBy:"Jason Wilson",lastUpdatedAt:1611480035,sidebar_label:"Entity Repository",sidebar:"version-4.3/docs",previous:{title:"Collections",permalink:"/docs/collections"},next:{title:"Transactions and Concurrency",permalink:"/docs/transactions"}},c=[{value:"Custom Repository",id:"custom-repository",children:[{value:"Inferring custom repository type",id:"inferring-custom-repository-type",children:[]}]}],p={toc:c};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"More convenient way of fetching entities from database is by using ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRepository"),", that\ncarries the entity name so you do not have to pass it to every ",Object(i.b)("inlineCode",{parentName:"p"},"find")," and ",Object(i.b)("inlineCode",{parentName:"p"},"findOne")," calls:"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const booksRepository = orm.em.getRepository(Book);\n\n// with sorting, limit and offset parameters, populating author references\nconst books = await booksRepository.find({ author: '...' }, ['author'], { title: QueryOrder.DESC }, 2, 1);\n\n// or with options object\nconst books = await booksRepository.find({ author: '...' }, { \n  populate: ['author'],\n  limit: 1,\n  offset: 2,\n  sort: { title: QueryOrder.DESC },\n});\n\nconsole.log(books); // Book[]\n")),Object(i.b)("h2",{id:"custom-repository"},"Custom Repository"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Since v4, we need to make sure we are working with correctly typed ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRepository"),"\nto have access to driver specific methods (like ",Object(i.b)("inlineCode",{parentName:"p"},"createQueryBuilder()"),"). Use the one\nexported from your driver package."))),Object(i.b)("p",null,"To use custom repository, just extend ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRepository<T>")," class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { EntityRepository } from '@mikro-orm/mysql'; // or any other driver package\n\n@Repository(Author)\nexport class CustomAuthorRepository extends EntityRepository<Author> {\n\n  // your custom methods...\n  public findAndUpdate(...) {\n    // ...\n  }\n\n}\n")),Object(i.b)("p",null,"You can also omit the ",Object(i.b)("inlineCode",{parentName:"p"},"@Repository")," decorator and register your repository in ",Object(i.b)("inlineCode",{parentName:"p"},"@Entity"),"\ndecorator instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity({ customRepository: () => CustomAuthorRepository })\nexport class Author {\n  // ...\n}\n")),Object(i.b)("p",null,"Note that we need to pass that repository reference inside a callback so we will not run\ninto circular dependency issues when using entity references inside that repository."),Object(i.b)("p",null,"Now you can access your custom repository via ",Object(i.b)("inlineCode",{parentName:"p"},"em.getRepository()")," method."),Object(i.b)("h3",{id:"inferring-custom-repository-type"},"Inferring custom repository type"),Object(i.b)("p",null,"To have the ",Object(i.b)("inlineCode",{parentName:"p"},"em.getRepository()")," method return correctly typed custom repository\ninstead of the generic ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRepository<T>"),", we can use ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRepositoryType"),"\nsymbol:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"@Entity({ customRepository: () => AuthorRepository })\nexport class Author {\n\n  [EntityRepositoryType]?: AuthorRepository;\n\n}\n\nconst repo = em.getRepository(Author); // repo has type AuthorRepository\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also register custom base repository (for all entities where you do not specify\n",Object(i.b)("inlineCode",{parentName:"p"},"customRepository"),") globally, via ",Object(i.b)("inlineCode",{parentName:"p"},"MikroORM.init({ entityRepository: CustomBaseRepository })"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that you cannot use both ",Object(i.b)("inlineCode",{parentName:"p"},"@Repository(Author)")," on the repository and ",Object(i.b)("inlineCode",{parentName:"p"},"{ customRepository: () => AuthorRepository }")," on the entity at the same time. This will cause a circular dependency and throws an error. Either one of options achieves the same goal.")),Object(i.b)("p",null,"For more examples, take a look at\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"}),Object(i.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"}),Object(i.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."))}l.isMDXComponent=!0}}]);