"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[7189],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?l.createElement(h,r(r({ref:t},p),{},{components:n})):l.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=n(7462),i=(n(7294),n(4137));const a={sidebar_position:1,pagination_next:"reference/slices-segments"},r="Layers",o={unversionedId:"reference/layers",id:"reference/layers",title:"Layers",description:"Layers are the first level of organisational hierarchy in Feature-Sliced Design. Their purpose is to separate code based on how much responsibility it needs and how many other modules in the app it depends on.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/layers.mdx",sourceDirName:"reference",slug:"/reference/layers",permalink:"/docs/reference/layers",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/layers.mdx",tags:[],version:"current",lastUpdatedAt:1682170207,formattedLastUpdatedAt:"Apr 22, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,pagination_next:"reference/slices-segments"},sidebar:"referenceSidebar",previous:{title:"\ud83d\udcda Reference",permalink:"/docs/reference/"},next:{title:"Slices and segments",permalink:"/docs/reference/slices-segments"}},s={},u=[{value:"Import rule on layers",id:"import-rule-on-layers",level:2},{value:"Layer definitions",id:"layer-definitions",level:2},{value:"Shared",id:"shared",level:3},{value:"Entities",id:"entities",level:3},{value:"Features",id:"features",level:3},{value:"Widgets",id:"widgets",level:3},{value:"Pages",id:"pages",level:3},{value:"App",id:"app",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"layers"},"Layers"),(0,i.kt)("p",null,"Layers are the first level of organisational hierarchy in Feature-Sliced Design. Their purpose is to separate code based on how much responsibility it needs and how many other modules in the app it depends on."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"On this page, a ",(0,i.kt)("em",{parentName:"p"},"module")," refers to an internal module in the application \u2014 a file or directory with an index file. Not to be confused with npm packages.")),(0,i.kt)("p",null,"Every layer carries special semantic meaning to help you determine how much responsibility you should allocate to a module in your code. The names and meanings of layers are standardized across all projects built with Feature-Sliced Design."),(0,i.kt)("p",null,"There are 6 layers in total, arranged from most responsibility and dependency to least:"),(0,i.kt)("img",{alt:"",src:"/img/layers/layers.svg",width:"128",height:"240",style:{float:"right",margin:"0 2em"}}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"App"),(0,i.kt)("li",{parentName:"ol"},"Pages"),(0,i.kt)("li",{parentName:"ol"},"Widgets"),(0,i.kt)("li",{parentName:"ol"},"Features"),(0,i.kt)("li",{parentName:"ol"},"Entities"),(0,i.kt)("li",{parentName:"ol"},"Shared")),(0,i.kt)("p",null,"You don't have to use every layer in your project \u2014 only add them if you think it brings value to your project."),(0,i.kt)("h2",{id:"import-rule-on-layers"},"Import rule on layers"),(0,i.kt)("p",null,"The difference in dependency is enforced with ",(0,i.kt)("strong",{parentName:"p"},"the import rule on layers"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"A module can only import other modules when they are located on layers strictly below."))),(0,i.kt)("p",null,"For example, a module in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/features/aaa")," cannot import code from ",(0,i.kt)("inlineCode",{parentName:"p"},"~/features/bbb"),", but can import code from ",(0,i.kt)("inlineCode",{parentName:"p"},"~/entities")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"~/shared"),"."),(0,i.kt)("h2",{id:"layer-definitions"},"Layer definitions"),(0,i.kt)("h3",{id:"shared"},"Shared"),(0,i.kt)("p",null,"Isolated modules, components and abstractions that are detached from the specifics of the project or business.\nWarning: not to be treated like ",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/sergeysova/why-utils-helpers-is-a-dump-45fo"},"a utility dump"),"!"),(0,i.kt)("p",null,"This layer, unlike others, does not consist of slices, and instead consists of segments directly."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Content examples"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UI kit"),(0,i.kt)("li",{parentName:"ul"},"API client"),(0,i.kt)("li",{parentName:"ul"},"Code working with browser APIs")),(0,i.kt)("h3",{id:"entities"},"Entities"),(0,i.kt)("p",null,"Concepts from the real world that form together the essence of the project. Commonly, these are the terms that the business uses to describe the product."),(0,i.kt)("p",null,"Each slice in this layer contains static UI elements, data stores and CRUD operations."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Slice examples"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null," For a social network "),(0,i.kt)("th",null," For a Git frontend (e.g., GitHub) "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"User"),(0,i.kt)("li",null,"Post"),(0,i.kt)("li",null,"Group"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Repository"),(0,i.kt)("li",null,"File"),(0,i.kt)("li",null,"Commit")))))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You may notice in the example of a Git frontend that a ",(0,i.kt)("em",{parentName:"p"},"repository")," contains ",(0,i.kt)("em",{parentName:"p"},"files"),". This makes the repository a higher-level entity which has other entities nested inside. That is a common situation with entities, and sometimes it's hard to manage such higher-level entities without breaking the import rule on layers."),(0,i.kt)("p",{parentName:"admonition"},"Here are a few suggestions to overcome this issue:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The UI of entities should contain slots for places where the lower-level entities are to be inserted"),(0,i.kt)("li",{parentName:"ul"},"The business logic related to entity interaction should be placed in features (most of the time)"),(0,i.kt)("li",{parentName:"ul"},"The typings of database entities can be extracted to the Shared layer below, next to the API client"))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("p",null,"Actions that a user can make in the application to interact with the business entities to achieve a valuable outcome. This also includes actions that the app makes on behalf of the user to produce value for them."),(0,i.kt)("p",null,"Each slice in this layer can contain ",(0,i.kt)("em",{parentName:"p"},"interactive")," UI elements, internal state and API calls that enable value-producing actions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Slice examples"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null," For a social network "),(0,i.kt)("th",null," For a Git frontend (e.g., GitHub) "),(0,i.kt)("th",null," Actions on behalf of users "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Authenticate"),(0,i.kt)("li",null,"Create a post"),(0,i.kt)("li",null,"Join a group"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Edit a file"),(0,i.kt)("li",null,"Leave a comment"),(0,i.kt)("li",null,"Merge branches"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Detect dark mode"),(0,i.kt)("li",null,"Perform background computation"),(0,i.kt)("li",null,"User-Agent-based actions")))))),(0,i.kt)("h3",{id:"widgets"},"Widgets"),(0,i.kt)("p",null,"Self-sufficient UI blocks that emerged from the composition of lower-level units like entities and features."),(0,i.kt)("p",null,"This layer provides a way to fill in the slots left in the UI of Entities with other Entities and interactive elements from Features. Therefore, it is common not to have business logic on this layer, instead keeping it in Features. Each slice in this layer contains ready-to-use UI components and sometimes non-business logic such as gestures, keyboard interaction, etc."),(0,i.kt)("p",null,"Sometimes, however, it is more convenient to have business logic on this layer. Usually it happens when the widget is quite rich in interactivity (e.g., interactive data tables) and the business logic inside them is not used in other places."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Slice examples"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null," For a social network "),(0,i.kt)("th",null," For a Git frontend (e.g., GitHub) "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Post card"),(0,i.kt)("li",null,"User profile header (with actions)"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"List of files in a repository (with actions)"),(0,i.kt)("li",null,"Comment in a thread"),(0,i.kt)("li",null,"Repository card")))))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you're using a nested routing system (e.g. the router of ",(0,i.kt)("a",{parentName:"p",href:"https://remix.run"},"Remix"),"), it may be helpful to use the Widgets layer in the same way as a flat routing system would use the Pages layer \u2014 to create complete interface blocks, complete with related data fetching, loading states, and error boundaries. In the same way, you can store page layouts on this layer.")),(0,i.kt)("h3",{id:"pages"},"Pages"),(0,i.kt)("p",null,"Complete pages for a page-based application (like a website) or screens/activities for screen-based applications (like mobile apps)."),(0,i.kt)("p",null,"This layer is similar to Widgets in its compositional nature, albeit on a larger scale. Each slice in this layer contains UI components that are ready to be plugged into a router and sometimes data-fetching logic and error handling."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Slice examples"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null," For a social network "),(0,i.kt)("th",null," For a Git frontend (e.g., GitHub) "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"News feed"),(0,i.kt)("li",null,"Community page"),(0,i.kt)("li",null,"User's public profile"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Repository page"),(0,i.kt)("li",null,"User's repositories"),(0,i.kt)("li",null,"Branches in a repository")))))),(0,i.kt)("h3",{id:"app"},"App"),(0,i.kt)("p",null,"All kinds of app-wide matters, both in the technical sense (e.g., context providers) and in the business sense (e.g., analytics)."),(0,i.kt)("p",null,"This layer usually doesn't contain slices, like Shared, instead having segments directly."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Content examples"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Styles"),(0,i.kt)("li",{parentName:"ul"},"Routing"),(0,i.kt)("li",{parentName:"ul"},"Store and other context providers"),(0,i.kt)("li",{parentName:"ul"},"Analytics initialization")))}c.isMDXComponent=!0}}]);