(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{5607:function(e,t,a){"use strict";a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(102),r=a(3117),l=a(7294),i=a(6010),o=a(7130),s=a(2613),c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",m=["id"],u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),f=(0,s.LU)().navbar.hideOnScroll;return u?l.createElement(t,(0,r.Z)({},v,{className:(0,i.Z)("anchor",(a={},a[d]=f,a[c]=!f,a)),id:u}),v.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+u,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,v)});var t}},4175:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7294),r=a(9584),l=a(2613),i=a(9524);function o(e){var t=e.title,a=e.description,o=e.keywords,s=e.image,c=e.children,d=(0,l.pe)(t),m=(0,i.C)().withBaseUrl,u=s?m(s,{absolute:!0}):void 0;return n.createElement(r.Z,null,t&&n.createElement("title",null,d),t&&n.createElement("meta",{property:"og:title",content:d}),a&&n.createElement("meta",{name:"description",content:a}),a&&n.createElement("meta",{property:"og:description",content:a}),o&&n.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),u&&n.createElement("meta",{property:"og:image",content:u}),u&&n.createElement("meta",{name:"twitter:image",content:u}),c)}},3301:function(e,t,a){"use strict";var n=a(7294),r=a(6136),l="desktop",i="mobile",o="ssr";function s(){return r.default.canUseDOM?window.innerWidth>996?l:i:o}t.Z=function(){var e=(0,n.useState)((function(){return s()})),t=e[0],a=e[1];return(0,n.useEffect)((function(){function e(){a(s())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},4367:function(e,t,a){"use strict";a.d(t,{ga:function(){return n}});var n={};a.r(n),a.d(n,{CATEGORIES:function(){return l},sendEvent:function(){return r}});var r=function(e){var t=e.category,a=e.action,n=e.label,r=e.value;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:a,eventLabel:n,eventValue:r})},l={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},2318:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _e}});var n=a(7294),r=a(6010),l=a(3301),i=a(2511),o=a(7130);var s=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=a(9962),d=a(7849),m=a(2613);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:r},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,a=e.versionMetadata,l=(0,c.Z)().siteConfig.title,i=(0,d.gA)({failfast:!0}).pluginId,o=(0,m.J)(i).savePreferredVersionName,s=(0,d.Jo)(i),u=s.latestDocSuggestion,g=s.latestVersionSuggestion,h=null!=u?u:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:g.label,to:h.path,onClick:function(){return o(g.name)}})))}var h=function(e){var t=e.versionMetadata;return t.banner?n.createElement(g,{versionMetadata:t}):n.createElement(n.Fragment,null)},p=a(4175);function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function b(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(b,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(3117),y=a(102),_="iconEdit_2_ui",T=["className"],L=function(e){var t=e.className,a=(0,y.Z)(e,T);return n.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(_,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function Z(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(L,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var w="tag_1Okp",C="tagRegular_3MiF",U="tagWithCount_1HU1";var A=function(e){var t,a=e.permalink,l=e.name,o=e.count;return n.createElement(i.Z,{href:a,className:(0,r.Z)(w,(t={},t[C]=!o,t[U]=o,t))},l,o&&n.createElement("span",null,o))},M="tags_2ga9",x="tag_11ep";function B(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(M,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:x},n.createElement(A,{name:t,permalink:a}))}))))}var H="lastUpdated_13-_";function S(e){return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B,e)))}function I(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",H)},(a||l)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function O(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,s=t.tags,c=s.length>0,d=!!(a||l||o);return c||d?n.createElement("footer",{className:(0,r.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(S,{tags:s}),d&&n.createElement(I,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:o,formattedLastUpdatedAt:i})):n.createElement(n.Fragment,null)}var F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"}}]},name:"like",theme:"filled"},D=a(755),z=function(e,t){return n.createElement(D.Z,Object.assign({},e,{ref:t,icon:F}))};z.displayName="LikeFilled";var R=n.forwardRef(z),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 00-26.5-5.4H273v428h.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32z"}}]},name:"dislike",theme:"filled"},j=function(e,t){return n.createElement(D.Z,Object.assign({},e,{ref:t,icon:V}))};j.displayName="DislikeFilled";var G=n.forwardRef(j),W=a(4367),P="root_6dF2",q="rootThanks_12EI",J="title_3yu9",Q="titleLabel_3Haz",Y="subtitle_1I0T",K="action_3IQ4",X="actionLike_3TQ-",$="actionDislike_4tfs",ee=function(e){var t=e.className,a=(0,n.useState)(!1),l=a[0],i=a[1],s=(0,n.useCallback)((function(e){return function(){i(!0),function(e){W.ga.sendEvent({category:W.ga.CATEGORIES.full,action:"Docs:Helpful",label:window.location.href,value:e}),W.ga.sendEvent({category:W.ga.CATEGORIES.mixed,action:"Docs:Helpful",label:e,value:e}),W.ga.sendEvent({category:W.ga.CATEGORIES.short,label:window.location.href,value:e})}(e)}}),[]);return l?n.createElement("div",{className:(0,r.Z)(P,q,t)},n.createElement("span",null,(0,o.I)({id:"features.feedback-doc.thanks"}))):n.createElement("div",{className:(0,r.Z)(P,t)},n.createElement("div",{className:J},n.createElement("span",{className:Q},(0,o.I)({id:"features.feedback-doc.title"})),n.createElement(R,{className:(0,r.Z)(K,X),onClick:s(10)}),n.createElement(G,{className:(0,r.Z)(K,$),onClick:s(0)})),n.createElement("div",{className:Y},n.createElement("span",null,(0,o.I)({id:"features.feedback-doc.subtitle"}))))},te="feedback_TT6i";var ae=function(e){return n.createElement(n.Fragment,null,n.createElement(O,e),n.createElement(ee,{className:te}))},ne=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function re(e){var t=e.toc,a=e.className,r=e.linkClassName,l=e.isChild;return t.length?n.createElement("ul",{className:l?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(re,{isChild:!0,toc:e.children,className:a,linkClassName:r}))}))):null}function le(e){var t=e.toc,a=e.className,r=void 0===a?"table-of-contents table-of-contents__left-border":a,l=e.linkClassName,i=void 0===l?"table-of-contents__link":l,o=e.linkActiveClassName,s=void 0===o?void 0:o,c=e.minHeadingLevel,d=e.maxHeadingLevel,u=(0,y.Z)(e,ne),v=(0,m.LU)(),f=null!=c?c:v.tableOfContents.minHeadingLevel,g=null!=d?d:v.tableOfContents.maxHeadingLevel,h=(0,m.DA)({toc:t,minHeadingLevel:f,maxHeadingLevel:g}),p=(0,n.useMemo)((function(){if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:f,maxHeadingLevel:g}}),[i,s,f,g]);return(0,m.Si)(p),n.createElement(re,(0,N.Z)({toc:h,className:r,linkClassName:i},u))}var ie="tableOfContents_35-E",oe=["className"];var se=function(e){var t=e.className,a=(0,y.Z)(e,oe);return n.createElement("div",{className:(0,r.Z)(ie,"thin-scrollbar",t)},n.createElement(le,(0,N.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},ce="tocCollapsible_1PrD",de="tocCollapsibleButton_2O1e",me="tocCollapsibleContent_2Ydz",ue="tocCollapsibleExpanded_3GYr";function ve(e){var t,a=e.toc,l=e.className,i=e.minHeadingLevel,s=e.maxHeadingLevel,c=(0,m.uR)({initialState:!0}),d=c.collapsed,u=c.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(ce,(t={},t[ue]=!d,t),l)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",de),onClick:u},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:me,collapsed:d},n.createElement(le,{toc:a,minHeadingLevel:i,maxHeadingLevel:s})))}var fe=a(5607),ge="docItemContainer_33ec",he="docItemCol_3FnS",pe="tocMobile_3Hoh";function Ee(e){var t,a=e.content,i=e.versionMetadata,o=a.metadata,c=a.frontMatter,d=c.image,u=c.keywords,v=c.hide_title,f=c.hide_table_of_contents,g=c.toc_min_heading_level,E=c.toc_max_heading_level,b=o.description,k=o.title,N=!v&&void 0===a.contentTitle,y=(0,l.Z)(),_=!f&&a.toc&&a.toc.length>0,T=_&&("desktop"===y||"ssr"===y);return n.createElement(n.Fragment,null,n.createElement(p.Z,{title:k,description:b,keywords:u,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",(t={},t[he]=!f,t))},n.createElement(h,{versionMetadata:i}),n.createElement("div",{className:ge},n.createElement("article",null,i.badge&&n.createElement("span",{className:(0,r.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",i.label),_&&n.createElement(ve,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:E,className:(0,r.Z)(m.kM.docs.docTocMobile,pe)}),n.createElement("div",{className:(0,r.Z)(m.kM.docs.docMarkdown,"markdown")},N&&n.createElement(fe.N,null,k),n.createElement(a,null)),n.createElement(ae,e)),n.createElement(s,{metadata:o}))),T&&n.createElement("div",{className:"col col--3"},n.createElement(se,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:E,className:m.kM.docs.docTocDesktop}))))}var be=a(9584);function ke(e){var t=e.imgUrl;return n.createElement(be.Z,null,n.createElement("meta",{name:"og:image",content:t}),n.createElement("meta",{name:"twitter:image",content:t}))}var Ne=a(8738),ye=a.n(Ne);var _e=function(e){var t=e.content,a=(0,c.Z)().siteConfig.customFields.isOGExperimental,r=function(e,t){void 0===t&&(t="assets/og/");var a=(0,c.Z)(),n=a.siteConfig,r=a.i18n,l=ye()(e.id+r.currentLocale);return n.url+(r.currentLocale!==r.defaultLocale?"/"+r.currentLocale:"")+"/"+t+l+".jpg"}(t.metadata);return n.createElement(n.Fragment,null,a&&n.createElement(ke,{imgUrl:r}),n.createElement(Ee,e))}},487:function(e){var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],a=0;a<e.length;a++)t.push(255&e.charCodeAt(a));return t},bytesToString:function(e){for(var t=[],a=0;a<e.length;a++)t.push(String.fromCharCode(e[a]));return t.join("")}}};e.exports=t},1012:function(e){var t,a;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&a.rotl(e,8)|4278255360&a.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=a.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],a=0,n=0;a<e.length;a++,n+=8)t[n>>>5]|=e[a]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],a=0;a<32*e.length;a+=8)t.push(e[a>>>5]>>>24-a%32&255);return t},bytesToHex:function(e){for(var t=[],a=0;a<e.length;a++)t.push((e[a]>>>4).toString(16)),t.push((15&e[a]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(parseInt(e.substr(a,2),16));return t},bytesToBase64:function(e){for(var a=[],n=0;n<e.length;n+=3)for(var r=e[n]<<16|e[n+1]<<8|e[n+2],l=0;l<4;l++)8*n+6*l<=8*e.length?a.push(t.charAt(r>>>6*(3-l)&63)):a.push("=");return a.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],n=0,r=0;n<e.length;r=++n%4)0!=r&&a.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*r+8)-1)<<2*r|t.indexOf(e.charAt(n))>>>6-2*r);return a}},e.exports=a},8738:function(e,t,a){var n,r,l,i;n=a(1012),r=a(487).utf8,l=a(487).bin,(i=function(e,t){var a=n.wordsToBytes(function(e){e.constructor==String?e=r.stringToBytes(e):"undefined"!=typeof Buffer&&"function"==typeof Buffer.isBuffer&&Buffer.isBuffer(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());var t=n.bytesToWords(e),a=8*e.length,l=[],i=1732584193,o=-271733879,s=-1732584194,c=271733878,d=-1009589776;t[a>>5]|=128<<24-a%32,t[15+(a+64>>>9<<4)]=a;for(var m=0;m<t.length;m+=16){for(var u=i,v=o,f=s,g=c,h=d,p=0;p<80;p++){if(p<16)l[p]=t[m+p];else{var E=l[p-3]^l[p-8]^l[p-14]^l[p-16];l[p]=E<<1|E>>>31}var b=(i<<5|i>>>27)+d+(l[p]>>>0)+(p<20?1518500249+(o&s|~o&c):p<40?1859775393+(o^s^c):p<60?(o&s|o&c|s&c)-1894007588:(o^s^c)-899497514);d=c,c=s,s=o<<30|o>>>2,o=i,i=b}i+=u,o+=v,s+=f,c+=g,d+=h}return[i,o,s,c,d]}(e));return t&&t.asBytes?a:t&&t.asString?l.bytesToString(a):n.bytesToHex(a)})._blocksize=16,i._digestsize=20,e.exports=i}}]);