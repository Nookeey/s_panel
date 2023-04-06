import{T as D,a as s,F as dr,j as w,f as ur}from"./app-eda820e9.js";function pr(){for(var r=0,e,o,t="";r<arguments.length;)(e=arguments[r++])&&(o=or(e))&&(t&&(t+=" "),t+=o);return t}function or(r){if(typeof r=="string")return r;for(var e,o="",t=0;t<r.length;t++)r[t]&&(e=or(r[t]))&&(o&&(o+=" "),o+=e);return o}var B="-";function fr(r){var e=gr(r);function o(n){var i=n.split(B);return i[0]===""&&i.length!==1&&i.shift(),nr(i,e)||br(n)}function t(n){return r.conflictingClassGroups[n]||[]}return{getClassGroupId:o,getConflictingClassGroupIds:t}}function nr(r,e){var a;if(r.length===0)return e.classGroupId;var o=r[0],t=e.nextPart.get(o),n=t?nr(r.slice(1),t):void 0;if(n)return n;if(e.validators.length!==0){var i=r.join(B);return(a=e.validators.find(function(l){var c=l.validator;return c(i)}))==null?void 0:a.classGroupId}}var rr=/^\[(.+)\]$/;function br(r){if(rr.test(r)){var e=rr.exec(r)[1],o=e==null?void 0:e.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}function gr(r){var e=r.theme,o=r.prefix,t={nextPart:new Map,validators:[]},n=vr(Object.entries(r.classGroups),o);return n.forEach(function(i){var a=i[0],l=i[1];V(l,t,a,e)}),t}function V(r,e,o,t){r.forEach(function(n){if(typeof n=="string"){var i=n===""?e:er(e,n);i.classGroupId=o;return}if(typeof n=="function"){if(mr(n)){V(n(t),e,o,t);return}e.validators.push({validator:n,classGroupId:o});return}Object.entries(n).forEach(function(a){var l=a[0],c=a[1];V(c,er(e,l),o,t)})})}function er(r,e){var o=r;return e.split(B).forEach(function(t){o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o}function mr(r){return r.isThemeGetter}function vr(r,e){return e?r.map(function(o){var t=o[0],n=o[1],i=n.map(function(a){return typeof a=="string"?e+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(function(l){var c=l[0],u=l[1];return[e+c,u]})):a});return[t,i]}):r}function hr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function n(i,a){o.set(i,a),e++,e>r&&(e=0,t=o,o=new Map)}return{get:function(a){var l=o.get(a);if(l!==void 0)return l;if((l=t.get(a))!==void 0)return n(a,l),l},set:function(a,l){o.has(a)?o.set(a,l):n(a,l)}}}var ar="!";function yr(r){var e=r.separator||":";return function(t){for(var n=0,i=[],a=0,l=0;l<t.length;l++){var c=t[l];n===0&&c===e[0]&&(e.length===1||t.slice(l,l+e.length)===e)&&(i.push(t.slice(a,l)),a=l+e.length),c==="["?n++:c==="]"&&n--}var u=i.length===0?t:t.substring(a),f=u.startsWith(ar),b=f?u.substring(1):u;return{modifiers:i,hasImportantModifier:f,baseClassName:b}}}function xr(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach(function(t){var n=t[0]==="[";n?(e.push.apply(e,o.sort().concat([t])),o=[]):o.push(t)}),e.push.apply(e,o.sort()),e}function wr(r){return{cache:hr(r.cacheSize),splitModifiers:yr(r),...fr(r)}}var kr=/\s+/;function Cr(r,e){var o=e.splitModifiers,t=e.getClassGroupId,n=e.getConflictingClassGroupIds,i=new Set;return r.trim().split(kr).map(function(a){var l=o(a),c=l.modifiers,u=l.hasImportantModifier,f=l.baseClassName,b=t(f);if(!b)return{isTailwindClass:!1,originalClassName:a};var y=xr(c).join(":"),x=u?y+ar:y;return{isTailwindClass:!0,modifierId:x,classGroupId:b,originalClassName:a}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var l=a.modifierId,c=a.classGroupId,u=l+c;return i.has(u)?!1:(i.add(u),n(c).forEach(function(f){return i.add(l+f)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" ")}function Nr(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var t,n,i,a=l;function l(u){var f=e[0],b=e.slice(1),y=b.reduce(function(x,g){return g(x)},f());return t=wr(y),n=t.cache.get,i=t.cache.set,a=c,c(u)}function c(u){var f=n(u);if(f)return f;var b=Cr(u,t);return i(u,b),b}return function(){return a(pr.apply(null,arguments))}}function d(r){var e=function(t){return t[r]||[]};return e.isThemeGetter=!0,e}var ir=/^\[(?:([a-z-]+):)?(.+)\]$/i,zr=/^\d+\/\d+$/,Ar=new Set(["px","full","screen"]),Ir=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Gr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/,Mr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function h(r){return j(r)||Ar.has(r)||zr.test(r)||z(r)}function z(r){return A(r,"length",Tr)}function Sr(r){return A(r,"size",lr)}function jr(r){return A(r,"position",lr)}function Rr(r){return A(r,"url",Or)}function $(r){return A(r,"number",j)}function j(r){return!Number.isNaN(Number(r))}function M(r){return tr(r)||A(r,"number",tr)}function p(r){return ir.test(r)}function S(){return!0}function C(r){return Ir.test(r)}function Er(r){return A(r,"",Lr)}function A(r,e,o){var t=ir.exec(r);return t?t[1]?t[1]===e:o(t[2]):!1}function Tr(r){return Gr.test(r)}function lr(){return!1}function Or(r){return r.startsWith("url(")}function tr(r){return Number.isInteger(Number(r))}function Lr(r){return Mr.test(r)}function Wr(){var r=d("colors"),e=d("spacing"),o=d("blur"),t=d("brightness"),n=d("borderColor"),i=d("borderRadius"),a=d("borderSpacing"),l=d("borderWidth"),c=d("contrast"),u=d("grayscale"),f=d("hueRotate"),b=d("invert"),y=d("gap"),x=d("gradientColorStops"),g=d("inset"),v=d("margin"),k=d("opacity"),N=d("padding"),U=d("saturate"),O=d("scale"),q=d("sepia"),Z=d("skew"),H=d("space"),J=d("translate"),L=function(){return["auto","contain","none"]},W=function(){return["auto","hidden","clip","visible","scroll"]},X=function(){return["auto",e]},K=function(){return["",h]},R=function(){return["auto",j,p]},Q=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},E=function(){return["solid","dashed","dotted","double","none"]},Y=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},P=function(){return["start","end","center","between","around","evenly"]},I=function(){return["","0",p]},_=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},G=function(){return[j,$]},T=function(){return[j,p]};return{cacheSize:500,theme:{colors:[S],spacing:[h],blur:["none","",C,z],brightness:G(),borderColor:[r],borderRadius:["none","","full",C,z],borderSpacing:[e],borderWidth:K(),contrast:G(),grayscale:I(),hueRotate:T(),invert:I(),gap:[e],gradientColorStops:[r],inset:X(),margin:X(),opacity:G(),padding:[e],saturate:G(),scale:G(),sepia:I(),skew:T(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",p]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Q(),[p])}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",M]}],basis:[{basis:[e]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",p]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",M]}],"grid-cols":[{"grid-cols":[S]}],"col-start-end":[{col:["auto",{span:[M]},p]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[S]}],"row-start-end":[{row:["auto",{span:[M]},p]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",p]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",p]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:P()}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:[].concat(P(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(P(),["baseline","stretch"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[N]}],px:[{px:[N]}],py:[{py:[N]}],pt:[{pt:[N]}],pr:[{pr:[N]}],pb:[{pb:[N]}],pl:[{pl:[N]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[H]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[H]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",h]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[C]},C,z]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",h]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",C,z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",$]}],"font-family":[{font:[S]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",z]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",h]}],"list-style-type":[{list:["none","disc","decimal",p]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(E(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",h]}],"underline-offset":[{"underline-offset":["auto",h]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap"]}],break:[{break:["normal","words","all","keep"]}],content:[{content:["none",p]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Q(),[jr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Sr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Rr]}],"bg-color":[{bg:[r]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[].concat(E(),["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:E()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(E())}],"outline-offset":[{"outline-offset":[h]}],"outline-w":[{outline:[h]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[h]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",C,Er]}],"shadow-color":[{shadow:[S]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":Y()}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",C,p]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[b]}],saturate:[{saturate:[U]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[U]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",p]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",p]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",p]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[M,p]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[Z]}],"skew-y":[{"skew-y":[Z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",p]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",p]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",p]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[h,$]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-t","rounded-r","rounded-b","rounded-l","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]}}}var Pr=Nr(Wr),$r=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fr=$r,sr=Symbol("isTwElement?"),Vr=(r,e)=>r.reduce((o,t,n)=>o.concat(t||[],e[n]||[]),[]),Br=(r,e="")=>{let o=r.join(" ").trim().replace(/\n/g," ").replace(/\s{2,}/g," ").split(" ").filter(n=>n!==","),t=e?e.split(" "):[];return Pr(...o.concat(t).filter(n=>n!==" "))},Ur=([r])=>r.charAt(0)!=="$",F=r=>r[sr]===!0,cr=r=>(e,...o)=>{let t=(n=[])=>{let i=D.forwardRef((a,l)=>{let{$as:c=r,style:u={},...f}=a,b=F(r)?r:c,y=n?n.reduce((g,v)=>Object.assign(g,typeof v=="function"?v(a):v),{}):{},x=F(b)?f:Object.fromEntries(Object.entries(f).filter(Ur));return D.createElement(b,{...x,style:{...y,...u},ref:l,className:Br(Vr(e,o.map(g=>g({...f,$as:c}))),f.className),...F(r)?{$as:c}:{}})});return i[sr]=!0,typeof r!="string"?i.displayName=r.displayName||r.name||"tw.Component":i.displayName="tw."+r,i.withStyle=a=>t(n.concat(a)),i};return t()},qr=Fr.reduce((r,e)=>({...r,[e]:cr(e)}),{}),Zr=Object.assign(cr,qr),Hr=Zr;Hr.li`
    py-2
    px-4
    hover:bg-gray-200
    cursor-pointer
`;const Jr=[{href:"dashboard",text:"Dashboard"},{href:"invoice.index",text:"Faktury"},{href:"allegro.index",text:"Allegro"}];function Xr(r){return s(dr,{children:s("nav",{className:"navbar-default navbar-static-side",role:"navigation",children:s("div",{className:"sidebar-collapse",children:w("ul",{className:"nav metismenu",id:"side-menu",children:[w("li",{className:"nav-header",children:[w("div",{className:"dropdown profile-element",children:[s("a",{"data-toggle":"dropdown",className:"dropdown-toggle",href:"index.html#",children:s("span",{className:"block m-t-xs font-bold",children:"SLOTH"})}),w("ul",{className:"dropdown-menu animated fadeInRight m-t-xs",children:[s("li",{children:s("a",{className:"dropdown-item",href:"profile.html",children:"Profile"})}),s("li",{children:s("a",{className:"dropdown-item",href:"contacts.html",children:"Contacts"})}),s("li",{children:s("a",{className:"dropdown-item",href:"mailbox.html",children:"Mailbox"})}),s("li",{className:"dropdown-divider"}),s("li",{children:s("a",{className:"dropdown-item",href:"login.html",children:"Logout"})})]})]}),s("div",{className:"logo-element",children:"IN+"})]}),Jr.map((e,o)=>s("li",{children:s(ur,{href:route(e.href),children:e.text})},o))]})})})})}function Kr(r){function e(){document.body.classList.toggle("mini-navbar")}return w("nav",{className:"navbar navbar-static-top",role:"navigation",style:{marginBottom:0},children:[s("div",{className:"navbar-header",children:w("div",{className:"navbar-minimalize minimalize-styl-2 btn btn-primary",onClick:e,children:[s("i",{className:"fa fa-bars"})," "]})}),s("ul",{className:"nav navbar-top-links navbar-right",children:s("li",{children:w("a",{href:"login.html",children:[s("i",{className:"fa fa-sign-out"})," Log out"]})})})]})}function Yr({auth:r,children:e}){return s("div",{id:"app",children:w("div",{id:"wrapper",children:[s(Xr,{}),w("div",{id:"page-wrapper",className:"gray-bg dashbard-1",children:[s("div",{className:"row border-bottom",children:s(Kr,{})}),s("div",{className:"py-[15px] animated fadeIn",children:e})]})]})})}export{Yr as A};