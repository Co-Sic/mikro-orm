(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77914],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return y}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),y=r,f=m["".concat(p,".").concat(y)]||m[y]||u[y]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96517:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var i=n(74034),r=n(79973),o=(n(67294),n(3905)),a={title:"EntityRepository API"},l={unversionedId:"repositories-api",id:"version-4.1/repositories-api",isDocsHomePage:!1,title:"EntityRepository API",description:"find(where FindOptions): Promise",source:"@site/versioned_docs/version-4.1/repositories-api.md",sourceDirName:".",slug:"/repositories-api",permalink:"/docs/4.1/repositories-api",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/repositories-api.md",version:"4.1",lastUpdatedBy:"Tolga Paksoy",lastUpdatedAt:1620733981,formattedLastUpdatedAt:"5/11/2021",frontMatter:{title:"EntityRepository API"},sidebar:"version-4.1/docs",previous:{title:"EntityManager API",permalink:"/docs/4.1/entity-manager-api"},next:{title:"Query Builder API",permalink:"/docs/4.1/query-builder-api"}},p=[],s={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"findwhere-filterqueryt-options-findoptions-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"find(where: FilterQuery<T>, options?: FindOptions): Promise<T[]>")),(0,o.kt)("p",null,"Returns array of entities found for given condition. You can specify ",(0,o.kt)("inlineCode",{parentName:"p"},"FindOptions")," to request\npopulation of referenced entities or control the pagination:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface FindOptions {\n  populate?: string[];\n  orderBy?: { [k: string]: QueryOrder };\n  limit?: number;\n  offset?: number;\n  schema?: string;\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"find(where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),(0,o.kt)("p",null,"Same as previous ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",(0,o.kt)("inlineCode",{parentName:"p"},"populate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"limit"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"offset"),"."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findandcountwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"findAndCount(where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),(0,o.kt)("p",null,"Combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," methods. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findalloptions-findoptions-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"findAll(options?: FindOptions): Promise<T[]>")),(0,o.kt)("p",null,"Returns all entities for given type. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findallpopulate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"findAll(populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),(0,o.kt)("p",null,"Same as previous ",(0,o.kt)("inlineCode",{parentName:"p"},"findAll")," method, just with dedicated parameters for ",(0,o.kt)("inlineCode",{parentName:"p"},"populate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"limit"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"offset"),"."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findonewhere-filterqueryt--string-populate-string-promiset--null"},(0,o.kt)("inlineCode",{parentName:"h4"},"findOne(where: FilterQuery<T> | string, populate?: string[]): Promise<T | null>")),(0,o.kt)("p",null,"Finds an entity by given ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," condition. You can use primary key as ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," value, then\nif the entity is already managed, no database call will be made. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findoneorfailwhere-filterqueryt--string-populate-string-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"findOneOrFail(where: FilterQuery<T> | string, populate?: string[]): Promise<T>")),(0,o.kt)("p",null,"Just like ",(0,o.kt)("inlineCode",{parentName:"p"},"findOne"),", but throws when entity not found, so it always resolves to given entity.\nYou can customize the error either globally via ",(0,o.kt)("inlineCode",{parentName:"p"},"findOneOrFailHandler")," option, or locally via\n",(0,o.kt)("inlineCode",{parentName:"p"},"failHandler")," option in ",(0,o.kt)("inlineCode",{parentName:"p"},"findOneOrFail")," call."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"mergedata-entitydatat-t"},(0,o.kt)("inlineCode",{parentName:"h4"},"merge(data: EntityData<T>): T")),(0,o.kt)("p",null,"Adds given entity to current Identity Map. After merging, entity becomes managed.\nThis is useful when you want to work with cached entities. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"getreferenceid-string-t"},(0,o.kt)("inlineCode",{parentName:"h4"},"getReference(id: string): T")),(0,o.kt)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually\nloading it, if the entity is not yet loaded."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"countwhere-filterqueryt-promisenumber"},(0,o.kt)("inlineCode",{parentName:"h4"},"count(where?: FilterQuery<T>): Promise<number>")),(0,o.kt)("p",null,"Gets count of entities matching the ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," condition. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"persistentity-anyentity--anyentity-promisevoid"},(0,o.kt)("inlineCode",{parentName:"h4"},"persist(entity: AnyEntity | AnyEntity[]): Promise<void>")),(0,o.kt)("p",null,"Tells the EntityManager to make an instance managed and persistent. The entity will be\nentered into the database at or before transaction commit or as a result of the flush\noperation. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"persistandflushentity-anyentity--anyentity-promisevoid"},(0,o.kt)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: AnyEntity | AnyEntity[]): Promise<void>")),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("inlineCode",{parentName:"p"},"persist")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"flush"),"."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"persistlaterentity-anyentity--anyentity-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"persistLater(entity: AnyEntity | AnyEntity[]): void")),(0,o.kt)("p",null,"Shortcut for just ",(0,o.kt)("inlineCode",{parentName:"p"},"persist"),", without flushing. Deprecated, use ",(0,o.kt)("inlineCode",{parentName:"p"},"em.persist()"),"."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"flush-promisevoid"},(0,o.kt)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),(0,o.kt)("p",null,"Flushes all changes to objects that have been queued up to now to the database."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"removewhere-anyentity--referenceanyentity--anyentity--referenceanyentity-promisevoid"},(0,o.kt)("inlineCode",{parentName:"h4"},"remove(where: AnyEntity | Reference<AnyEntity> | (AnyEntity | Reference<AnyEntity>)[]): Promise<void>")),(0,o.kt)("p",null,"When provided entity instance as ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," value, then it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEntity(entity, flush)"),",\notherwise it fires delete query with given ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," condition. "),(0,o.kt)("p",null,"This method fires ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks only if you provide entity instance.  "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"removeandflushentity-anyentity-promisevoid"},(0,o.kt)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: AnyEntity): Promise<void>")),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"flush"),"."),(0,o.kt)("p",null,"This method fires ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"removelaterentity-anyentity-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"removeLater(entity: AnyEntity): void")),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," without flushing. Deprecated, use ",(0,o.kt)("inlineCode",{parentName:"p"},"em.remove()"),"."),(0,o.kt)("p",null,"This method fires ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"canpopulateproperty-string-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"canPopulate(property: string): boolean")),(0,o.kt)("p",null,"Returns whether given entity has given property which can be populated (is reference or\ncollection)."),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);