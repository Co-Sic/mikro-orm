(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(1253)),o={title:"Defining entities"},c={unversionedId:"defining-entities",id:"version-2.7/defining-entities",isDocsHomePage:!1,title:"Defining entities",description:"Entities are simple javascript objects (so called POJO), decorated with @Entity decorator.",source:"@site/versioned_docs/version-2.7/defining-entities.md",slug:"/defining-entities",permalink:"/docs/2.7/defining-entities",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/defining-entities.md",version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611917607,sidebar:"version-2.7/docs",previous:{title:"Installation & Usage",permalink:"/docs/2.7/installation"},next:{title:"Working with Entity Manager",permalink:"/docs/2.7/entity-manager"}},s=[{value:"Entity file names",id:"entity-file-names",children:[]},{value:"Using BaseEntity",id:"using-baseentity",children:[]},{value:"Note about SQL drivers and @PrimaryKey",id:"note-about-sql-drivers-and-primarykey",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Entities are simple javascript objects (so called POJO), decorated with ",Object(a.b)("inlineCode",{parentName:"p"},"@Entity")," decorator.\nNo real restrictions are made, you do not have to extend any base class, you are more than welcome\nto ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/entity-constructors"}),"use entity constructors"),", just do not forget to specify primary key with\n",Object(a.b)("inlineCode",{parentName:"p"},"@PrimaryKey")," decorator."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'}),"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  title: string;\n\n  @ManyToOne() // when you provide correct type hint, ORM will read it for you\n  author: Author;\n\n  @ManyToOne({ entity: () => Publisher }) // or you can specify the entity as class reference or string name\n  publisher: Publisher;\n\n  @ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\n  tags = new Collection<BookTag>(this);\n\n  constructor(title: string, author: Author) {\n    this.title = title;\n    this.author = author;\n  }\n\n}\n\nexport interface Book extends IEntity<string> { }\n")),Object(a.b)("p",null,"You will need to extend Book's interface with ",Object(a.b)("inlineCode",{parentName:"p"},"IEntity"),". The interface represents internal\nmethods added to your entity's prototype via ",Object(a.b)("inlineCode",{parentName:"p"},"@Entity")," decorator."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"IEntity")," is generic interface, its type parameter depends on data type of normalized primary\nkey produced by used driver. SQL drivers usually use ",Object(a.b)("inlineCode",{parentName:"p"},"number")," and Mongo driver uses ",Object(a.b)("inlineCode",{parentName:"p"},"string"),".\nThis type default to union type ",Object(a.b)("inlineCode",{parentName:"p"},"number | string"),". Keep in mind that you have to worry about\nthis only when you define your primary key as ",Object(a.b)("inlineCode",{parentName:"p"},"_id")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"id"),".")),Object(a.b)("p",null,"As you can see, entity properties are decorated either with ",Object(a.b)("inlineCode",{parentName:"p"},"@Property")," decorator, or with one\nof reference decorators: ",Object(a.b)("inlineCode",{parentName:"p"},"@ManyToOne"),", ",Object(a.b)("inlineCode",{parentName:"p"},"@OneToMany"),", ",Object(a.b)("inlineCode",{parentName:"p"},"@OneToOne")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@ManyToMany"),". "),Object(a.b)("p",null,"Here is another example of ",Object(a.b)("inlineCode",{parentName:"p"},"Author")," entity, that was referenced from the ",Object(a.b)("inlineCode",{parentName:"p"},"Book")," one:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./entities/Author.ts"',title:'"./entities/Author.ts"'}),"@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  name: string;\n\n  @Property()\n  email: string;\n\n  @Property()\n  age: number;\n\n  @Property()\n  termsAccepted = false;\n\n  @Property()\n  identities: string[];\n\n  @Property()\n  born: Date;\n\n  @OneToMany({ entity: () => Book, mappedBy: 'author' })\n  books = new Collection<Book>(this);\n\n  @ManyToOne()\n  favouriteBook: Book;\n\n  version: number;\n  versionAsString: string;\n\n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n\n}\n\nexport interface Author extends IEntity { }\n")),Object(a.b)("p",null,"More information about how collections work can be found on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/collections"}),"collections page"),"."),Object(a.b)("p",null,"If you want to define your entity in Vanilla JavaScript, take a look ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/usage-with-js"}),"here"),"."),Object(a.b)("h2",{id:"entity-file-names"},"Entity file names"),Object(a.b)("p",null,"You are free to choose one of those formats for entity filename (for a ",Object(a.b)("inlineCode",{parentName:"p"},"BookTag")," entity):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"BookTag.ts")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"BookTag.model.ts")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"book-tag.ts")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"book-tag.model.ts")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"book-tag.entity.ts"))),Object(a.b)("p",null,"Entity name is inferred from the first part of file name before first dot occurs, so you can\nadd any suffix behind the dot, not just ",Object(a.b)("inlineCode",{parentName:"p"},".model.ts")," or ",Object(a.b)("inlineCode",{parentName:"p"},".entity.ts"),". "),Object(a.b)("h2",{id:"using-baseentity"},"Using BaseEntity"),Object(a.b)("p",null,"You can define your own base entity with properties that you require on all entities, like\nprimary key and created/updated time. "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you are initializing the ORM via ",Object(a.b)("inlineCode",{parentName:"p"},"entities")," option, you need to specify all your\nbase entities as well.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./entities/BaseEntity.ts"',title:'"./entities/BaseEntity.ts"'}),"export abstract class BaseEntity {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n}\n")),Object(a.b)("h2",{id:"note-about-sql-drivers-and-primarykey"},"Note about SQL drivers and @PrimaryKey"),Object(a.b)("p",null,"All entities described above were defined with ",Object(a.b)("inlineCode",{parentName:"p"},"_id: ObjectID")," primary key - those were Mongo\nentities. "),Object(a.b)("p",null,"For SQL drivers, you will want to define your primary key as ",Object(a.b)("inlineCode",{parentName:"p"},"id: number")," instead:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@PrimaryKey()\nid: number;\n")),Object(a.b)("p",null,"With your entities set up, you can start ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/entity-manager"}),"using entity manager")," and\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/repositories"}),"repositories")," as described in following sections. "),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/index#table-of-contents"}),"\u2190"," Back to table of contents")))}p.isMDXComponent=!0},1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,y=b["".concat(o,".").concat(u)]||b[u]||d[u]||a;return n?i.a.createElement(y,c(c({ref:t},l),{},{components:n})):i.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);