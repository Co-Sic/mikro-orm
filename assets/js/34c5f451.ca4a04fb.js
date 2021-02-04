(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),m=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,d=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),r=(n(0),n(1256)),o={title:"Migrations"},c={unversionedId:"migrations",id:"version-3.6/migrations",isDocsHomePage:!1,title:"Migrations",description:"MikroORM has integrated support for migrations via umzug.",source:"@site/versioned_docs/version-3.6/migrations.md",slug:"/migrations",permalink:"/docs/3.6/migrations",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/migrations.md",version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612438298,sidebar:"version-3.6/docs",previous:{title:"Entity Generator",permalink:"/docs/3.6/entity-generator"},next:{title:"Read Replica Connections",permalink:"/docs/3.6/read-connections"}},l=[{value:"Migration class",id:"migration-class",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Using via CLI",id:"using-via-cli",children:[]},{value:"Using the Migrator programmatically",id:"using-the-migrator-programmatically",children:[]},{value:"Limitations",id:"limitations",children:[{value:"MySQL",id:"mysql",children:[]}]}],s={toc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"MikroORM has integrated support for migrations via ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sequelize/umzug"}),"umzug"),".\nIt allows you to generate migrations with current schema differences."),Object(r.b)("p",null,"By default, each migration will be all executed inside a transaction, and all of them will\nbe wrapped in one master transaction, so if one of them fails, everything will be rolled back. "),Object(r.b)("h2",{id:"migration-class"},"Migration class"),Object(r.b)("p",null,"Migrations are classes that extend Migration abstract class:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class Migration20191019195930 extends Migration {\n\n  async up(): Promise<void> {\n    this.addSql('select 1 + 1');\n  }\n\n}\n")),Object(r.b)("p",null,"To support undoing those changed, you can implement the ",Object(r.b)("inlineCode",{parentName:"p"},"down")," method, which throws an error by default. "),Object(r.b)("p",null,"Migrations are by default wrapped in a transaction. You can override this behaviour on\nper migration basis by implementing the ",Object(r.b)("inlineCode",{parentName:"p"},"isTransactional(): boolean")," method."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Configuration")," object and driver instance are available in the ",Object(r.b)("inlineCode",{parentName:"p"},"Migration")," class context."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"await MikroORM.init({\n  // default values:\n  migrations: {\n    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions\n    path: './migrations', // path to the folder with migrations\n    pattern: /^[\\w-]+\\d+\\.ts$/, // regex pattern for the migration files\n    transactional: true, // wrap each migration in a transaction\n    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent\n    allOrNothing: true, // wrap all migrations in master transaction\n    dropTables: true, // allow to disable table dropping\n    safe: false, // allow to disable table and column dropping\n    emit: 'ts', // migration generation mode\n  },\n})\n")),Object(r.b)("h2",{id:"using-via-cli"},"Using via CLI"),Object(r.b)("p",null,"You can use it via CLI: "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx mikro-orm migration:create   # Create new migration with current schema diff\nnpx mikro-orm migration:up       # Migrate up to the latest version\nnpx mikro-orm migration:down     # Migrate one step down\nnpx mikro-orm migration:list     # List all executed migrations\nnpx mikro-orm migration:pending  # List all pending migrations\n")),Object(r.b)("p",null,"For ",Object(r.b)("inlineCode",{parentName:"p"},"migration:up")," and ",Object(r.b)("inlineCode",{parentName:"p"},"migration:down")," commands you can specify ",Object(r.b)("inlineCode",{parentName:"p"},"--from")," (",Object(r.b)("inlineCode",{parentName:"p"},"-f"),"), ",Object(r.b)("inlineCode",{parentName:"p"},"--to")," (",Object(r.b)("inlineCode",{parentName:"p"},"-t"),")\nand ",Object(r.b)("inlineCode",{parentName:"p"},"--only")," (",Object(r.b)("inlineCode",{parentName:"p"},"-o"),") options to run only a subset of migrations:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx mikro-orm migration:up --from 2019101911 --to 2019102117  # the same as above\nnpx mikro-orm migration:up --only 2019101923                  # apply a single migration\nnpx mikro-orm migration:down --to 0                           # migratee down all migrations\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"To run TS migration files, you will need to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/installation"}),"enable ",Object(r.b)("inlineCode",{parentName:"a"},"useTsNode")," flag"),"\nin your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),".")),Object(r.b)("h2",{id:"using-the-migrator-programmatically"},"Using the Migrator programmatically"),Object(r.b)("p",null,"Or you can create a simple script where you initialize MikroORM like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./migrate.ts"',title:'"./migrate.ts"'}),"import { MikroORM } from 'mikro-orm';\n\n(async () => {\n  const orm = await MikroORM.init({\n    dbName: 'your-db-name',\n    // ...\n  });\n\n  const migrator = orm.getMigrator();\n  await migrator.createMigration(); // creates file Migration20191019195930.ts\n  await migrator.up(); // runs migrations up to the latest\n  await migrator.up('up-to-name'); // runs migrations up to given version\n  await migrator.down('down-to-name'); // runs migrations down to given version\n  await migrator.down(); // migrates one step down\n  await migrator.down({ to: 0 }); // migrates down to the first version\n\n  await orm.close(true);\n})();\n")),Object(r.b)("p",null,"Then run this script via ",Object(r.b)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",Object(r.b)("inlineCode",{parentName:"p"},"node"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ ts-node migrate\n")),Object(r.b)("h2",{id:"limitations"},"Limitations"),Object(r.b)("h3",{id:"mysql"},"MySQL"),Object(r.b)("p",null,"There is no way to rollback DDL changes in MySQL. An implicit commit is forced for those\nqueries automatically, so transactions are not working as expected. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mikro-orm/mikro-orm/issues/217"}),"https://github.com/mikro-orm/mikro-orm/issues/217")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"}),"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"))),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.6/index#table-of-contents"}),"\u2190"," Back to table of contents")))}m.isMDXComponent=!0}}]);