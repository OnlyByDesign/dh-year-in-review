/* Function to make IE9+ support forEach: */
if (window.NodeList && !NodeList.prototype.forEach){NodeList.prototype.forEach = Array.prototype.forEach;}
/* css-vars-ponyfill v2.1.2 https://jhildenbiddle.github.io/css-vars-ponyfill/ (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com> MIT license */
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e,t){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).cssVars=t()}(void 0,function(){function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},n=Array.isArray(e)?e:[e],o=Array.apply(null,Array(n.length)).map(function(e){return null});function s(){return!("<"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().charAt(0))}function a(e,t){r.onError(e,n[t],t)}function c(e,t){var s=r.onSuccess(e,n[t],t);e=!1===s?"":s||e,o[t]=e,-1===o.indexOf(null)&&r.onComplete(o)}var i=document.createElement("a");n.forEach(function(e,t){if(i.setAttribute("href",e),i.href=String(i.href),Boolean(document.all&&!window.atob)&&i.host.split(":")[0]!==location.host.split(":")[0])if(i.protocol===location.protocol){var n=new XDomainRequest;n.open("GET",e),n.timeout=0,n.onprogress=Function.prototype,n.ontimeout=Function.prototype,n.onload=function(){s(n.responseText)?c(n.responseText,t):a(n,t)},n.onerror=function(e){a(n,t)},setTimeout(function(){n.send()},0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),a(null,t);else{var o=new XMLHttpRequest;o.open("GET",e),r.mimeType&&o.overrideMimeType&&o.overrideMimeType(r.mimeType),r.onBeforeSend(o,e,t),o.onreadystatechange=function(){4===o.readyState&&(200===o.status&&s(o.responseText)?c(o.responseText,t):a(o,t))},o.send()}})}function r(e){var r={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},o={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},s=Array.apply(null,o.rootElement.querySelectorAll(o.include)).filter(function(e){return t=e,r=o.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,r);var t,r}),a=Array.apply(null,Array(s.length)).map(function(e){return null});function c(){if(-1===a.indexOf(null)){var e=a.join("");o.onComplete(e,a,s)}}function i(e,r,n,s){var i=o.onSuccess(e,n,s);!function e(r,n,s,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],l=u(r,s,i);l.rules.length?t(l.absoluteUrls,{onBeforeSend:function(e,t,r){o.onBeforeSend(e,n,t)},onSuccess:function(e,t,r){var s=o.onSuccess(e,n,t),a=u(e=!1===s?"":s||e,t,i);return a.rules.forEach(function(t,r){e=e.replace(t,a.absoluteRules[r])}),e},onError:function(t,o,u){c.push({xhr:t,url:o}),i.push(l.rules[u]),e(r,n,s,a,c,i)},onComplete:function(t){t.forEach(function(e,t){r=r.replace(l.rules[t],e)}),e(r,n,s,a,c,i)}}):a(r,c)}(e=void 0!==i&&!1===Boolean(i)?"":i||e,n,s,function(e,t){null===a[r]&&(t.forEach(function(e){return o.onError(e.xhr,n,e.url)}),!o.filter||o.filter.test(e)?a[r]=e:a[r]="",c())})}function u(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s={};return s.rules=(e.replace(r.cssComments,"").match(r.cssImports)||[]).filter(function(e){return-1===o.indexOf(e)}),s.urls=s.rules.map(function(e){return e.replace(r.cssImports,"$1")}),s.absoluteUrls=s.urls.map(function(e){return n(e,t)}),s.absoluteRules=s.rules.map(function(e,r){var o=s.urls[r],a=n(s.absoluteUrls[r],t);return e.replace(o,a)}),s}s.length?s.forEach(function(e,r){var s=e.getAttribute("href"),u=e.getAttribute("rel"),l="LINK"===e.nodeName&&s&&u&&"stylesheet"===u.toLowerCase(),f="STYLE"===e.nodeName;if(l)t(s,{mimeType:"text/css",onBeforeSend:function(t,r,n){o.onBeforeSend(t,e,r)},onSuccess:function(t,o,a){var c=n(s,location.href);i(t,r,e,c)},onError:function(t,n,s){a[r]="",o.onError(t,e,n),c()}});else if(f){var p=e.textContent;o.useCSSOM&&(p=Array.apply(null,e.sheet.cssRules).map(function(e){return e.cssText}).join("")),i(p,r,e,location.href)}else a[r]="",c()}):o.onComplete("",[])}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}var o=s;function s(e,t,r){e instanceof RegExp&&(e=a(e,r)),t instanceof RegExp&&(t=a(t,r));var n=c(e,t,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+e.length,n[1]),post:r.slice(n[1]+t.length)}}function a(e,t){var r=t.match(e);return r?r[0]:null}function c(e,t,r){var n,o,s,a,c,i=r.indexOf(e),u=r.indexOf(t,i+1),l=i;if(i>=0&&u>0){for(n=[],s=r.length;l>=0&&!c;)l==i?(n.push(l),i=r.indexOf(e,l+1)):1==n.length?c=[n.pop(),u]:((o=n.pop())<s&&(s=o,a=u),u=r.indexOf(t,l+1)),l=i<u&&i>=0?i:u;n.length&&(c=[s,a])}return c}function i(t){var r=e({},{preserveStatic:!0,removeComments:!1},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});function n(e){throw new Error("CSS parse error: ".concat(e))}function s(e){var r=e.exec(t);if(r)return t=t.slice(r[0].length),r}function a(){return s(/^{\s*/)}function c(){return s(/^}/)}function i(){s(/^\s*/)}function u(){if(i(),"/"===t[0]&&"*"===t[1]){for(var e=2;t[e]&&("*"!==t[e]||"/"!==t[e+1]);)e++;if(!t[e])return n("end of comment is missing");var r=t.slice(2,e);return t=t.slice(e+2),{type:"comment",comment:r}}}function l(){for(var e,t=[];e=u();)t.push(e);return r.removeComments?[]:t}function f(){for(i();"}"===t[0];)n("extra closing bracket");var e=s(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,function(e){return e.replace(/,/g,"‌")}).split(/\s*(?![^(]*\)),\s*/).map(function(e){return e.replace(/\u200C/g,",")})}function p(){s(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,t=s(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=t[0].trim(),!s(/^:\s*/))return n("property missing ':'");var r=s(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),o={type:"declaration",property:t.replace(e,""),value:r?r[0].replace(e,"").trim():""};return s(/^[;\s]*/),o}}function d(){if(!a())return n("missing '{'");for(var e,t=l();e=p();)t.push(e),t=t.concat(l());return c()?t:n("missing '}'")}function m(){i();for(var e,t=[];e=s(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),s(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:d()}}function v(){if(i(),"@"===t[0]){var e=function(){var e=s(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=s(/^([-\w]+)\s*/)))return n("@keyframes missing name");var r,o=e[1];if(!a())return n("@keyframes missing '{'");for(var i=l();r=m();)i.push(r),i=i.concat(l());return c()?{type:"keyframes",name:o,vendor:t,keyframes:i}:n("@keyframes missing '}'")}}()||function(){var e=s(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:y()}}()||function(){if(s(/^@host\s*/))return{type:"host",rules:y()}}()||function(){var e=s(/^@media([^{]+)*/);if(e)return{type:"media",media:(e[1]||"").trim(),rules:y()}}()||function(){var e=s(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}()||function(){if(s(/^@page */))return{type:"page",selectors:f()||[],declarations:d()}}()||function(){var e=s(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:y()}}()||function(){if(s(/^@font-face\s*/))return{type:"font-face",declarations:d()}}()||function(){var e=s(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}();if(e&&!r.preserveStatic){return(e.declarations?e.declarations.some(function(e){return/var\(/.test(e.value)}):(e.keyframes||e.rules||[]).some(function(e){return(e.declarations||[]).some(function(e){return/var\(/.test(e.value)})}))?e:{}}return e}}function h(){if(!r.preserveStatic){var e=o("{","}",t);if(e){var s=/:(?:root|host)(?![.:#(])/.test(e.pre)&&/--\S*\s*:/.test(e.body),a=/var\(/.test(e.body);if(!s&&!a)return t=t.slice(e.end+1),{}}}var c=f()||[],i=r.preserveStatic?d():d().filter(function(e){var t=c.some(function(e){return/:(?:root|host)(?![.:#(])/.test(e)})&&/^--\S/.test(e.property),r=/var\(/.test(e.value);return t||r});return c.length||n("selector missing"),{type:"rule",selectors:c,declarations:i}}function y(e){if(!e&&!a())return n("missing '{'");for(var r,o=l();t.length&&(e||"}"!==t[0])&&(r=v()||h());)r.type&&o.push(r),o=o.concat(l());return e||c()?o:n("missing '}'")}return{type:"stylesheet",stylesheet:{rules:y(!0),errors:[]}}}function u(t){var r=e({},{parseHost:!1,store:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),n=new RegExp(":".concat(r.parseHost?"host":"root","(?![.:#(])"));return"string"==typeof t&&(t=i(t,r)),t.stylesheet.rules.forEach(function(e){"rule"===e.type&&e.selectors.some(function(e){return n.test(e)})&&e.declarations.forEach(function(e,t){var n=e.property,o=e.value;n&&0===n.indexOf("--")&&(r.store[n]=o)})}),r.store}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,n={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+o(e.rules)+"}"},"font-face":function(e){return"@font-face{"+o(e.declarations)+"}"},host:function(e){return"@host{"+o(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+o(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+o(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+o(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+o(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+o(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+o(e.rules)+"}"}};function o(e){for(var o="",s=0;s<e.length;s++){var a=e[s];r&&r(a);var c=n[a.type](a);c&&(o+=c,c.length&&a.selectors&&(o+=t))}return o}return o(e.stylesheet.rules)}s.range=c;var f="--",p="var";function d(t){var r=e({},{preserveStatic:!0,preserveVars:!1,variables:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return"string"==typeof t&&(t=i(t,r)),function e(t,r){t.rules.forEach(function(n){n.rules?e(n,r):n.keyframes?n.keyframes.forEach(function(e){"keyframe"===e.type&&r(e.declarations,n)}):n.declarations&&r(n.declarations,t)})}(t.stylesheet,function(e,t){for(var n=0;n<e.length;n++){var o=e[n],s=o.type,a=o.property,c=o.value;if("declaration"===s)if(r.preserveVars||!a||0!==a.indexOf(f)){if(-1!==c.indexOf(p+"(")){var i=v(c,r);i!==o.value&&(i=m(i),r.preserveVars?(e.splice(n,0,{type:s,property:a,value:i}),n++):o.value=i)}}else e.splice(n,1),n--}}),l(t)}function m(e){return(e.match(/calc\(([^)]+)\)/g)||[]).forEach(function(t){var r="calc".concat(t.split("calc").join(""));e=e.replace(t,r)}),e}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(-1===e.indexOf("var("))return e;var n=o("(",")",e);return n?"var"===n.pre.slice(-3)?0===n.body.trim().length?(t.onWarning("var() must contain a non-whitespace string"),e):n.pre.slice(0,-3)+function(e){var n=e.split(",")[0].replace(/[\s\n\t]/g,""),o=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],s=Object.prototype.hasOwnProperty.call(t.variables,n)?String(t.variables[n]):void 0,a=s||(o?String(o):void 0),c=r||e;return s||t.onWarning('variable "'.concat(n,'" is undefined')),a&&"undefined"!==a&&a.length>0?v(a,t,c):"var(".concat(c,")")}(n.body)+v(n.post,t):n.pre+"(".concat(v(n.body,t),")")+v(n.post,t):(-1!==e.indexOf("var(")&&t.onWarning('missing closing ")" in the value "'.concat(e,'"')),e)}var h="undefined"!=typeof window,y=h&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),g={group:0,job:0},S={rootElement:h?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function(){},onWarning:function(){},onError:function(){},onSuccess:function(){},onComplete:function(){}},b={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssMediaQueries:/@media[^{]+\{([\s\S]+?})\s*}/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVarDeclRules:/(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,cssVarDecls:/(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,cssVarFunc:/var\(\s*--[\w-]/,cssVars:/(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},E={dom:{},job:{},user:{}},w=!1,C=null,O=0,x=null,A=!1;function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n="cssVars(): ",o=e({},S,t);function s(e,t,r,s){!o.silent&&window.console&&console.error("".concat(n).concat(e,"\n"),t),o.onError(e,t,r,s)}function a(e){!o.silent&&window.console&&console.warn("".concat(n).concat(e)),o.onWarning(e)}if(h){if(o.watch)return o.watch=S.watch,function(e){function t(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")&&!e.disabled}window.MutationObserver&&(C&&(C.disconnect(),C=null),(C=new MutationObserver(function(r){r.some(function(r){var n,o=!1;return"attributes"===r.type?o=t(r.target):"childList"===r.type&&(n=r.addedNodes,o=Array.apply(null,n).some(function(e){var r=1===e.nodeType&&e.hasAttribute("data-cssvars"),n=function(e){return"STYLE"===e.tagName&&!e.disabled}(e)&&b.cssVars.test(e.textContent);return!r&&(t(e)||n)})||function(t){return Array.apply(null,t).some(function(t){var r=1===t.nodeType,n=r&&"out"===t.getAttribute("data-cssvars"),o=r&&"src"===t.getAttribute("data-cssvars"),s=o;if(o||n){var a=t.getAttribute("data-cssvars-group"),c=e.rootElement.querySelector('[data-cssvars-group="'.concat(a,'"]'));o&&(M(e.rootElement),E.dom={}),c&&c.parentNode.removeChild(c)}return s})}(r.removedNodes)),o})&&j(e)})).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0}))}(o),void j(o);if(!1===o.watch&&C&&(C.disconnect(),C=null),!o.__benchmark){if(w===o.rootElement)return void function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;clearTimeout(x),x=setTimeout(function(){e.__benchmark=null,j(e)},t)}(t);if(o.__benchmark=_(),o.exclude=[C?'[data-cssvars]:not([data-cssvars=""])':'[data-cssvars="out"]',o.exclude].filter(function(e){return e}).join(","),o.variables=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=/^-{2}/;return Object.keys(e).reduce(function(r,n){return r[t.test(n)?n:"--".concat(n.replace(/^-+/,""))]=e[n],r},{})}(o.variables),!C&&(Array.apply(null,o.rootElement.querySelectorAll('[data-cssvars="out"]')).forEach(function(e){var t=e.getAttribute("data-cssvars-group");t&&o.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t,'"]'))||e.parentNode.removeChild(e)}),O)){var c=o.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');c.length<O&&(O=c.length,E.dom={})}}if("loading"!==document.readyState)if(y&&o.onlyLegacy){if(o.updateDOM){var f=o.rootElement.host||(o.rootElement===document?document.documentElement:o.rootElement);Object.keys(o.variables).forEach(function(e){f.style.setProperty(e,o.variables[e])})}}else!A&&(o.shadowDOM||o.rootElement.shadowRoot||o.rootElement.host)?r({rootElement:S.rootElement,include:S.include,exclude:o.exclude,onSuccess:function(e,t,r){return(e=((e=e.replace(b.cssComments,"").replace(b.cssMediaQueries,"")).match(b.cssVarDeclRules)||[]).join(""))||!1},onComplete:function(e,t,r){u(e,{store:E.dom,onWarning:a}),A=!0,j(o)}}):(w=o.rootElement,r({rootElement:o.rootElement,include:o.include,exclude:o.exclude,onBeforeSend:o.onBeforeSend,onError:function(e,t,r){var n=e.responseURL||k(r,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");s("CSS XHR Error: ".concat(n," ").concat(e.status," ").concat(o),t,e,n)},onSuccess:function(e,t,r){var n=o.onSuccess(e,t,r);return e=void 0!==n&&!1===Boolean(n)?"":n||e,o.updateURLs&&(e=function(e,t){return(e.replace(b.cssComments,"").match(b.cssUrls)||[]).forEach(function(r){var n=r.replace(b.cssUrls,"$1"),o=k(n,t);e=e.replace(r,r.replace(n,o))}),e}(e,r)),e},onComplete:function(t,r){var n,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],f={},p=o.updateDOM?E.dom:Object.keys(E.job).length?E.job:E.job=JSON.parse(JSON.stringify(E.dom));if(c.forEach(function(e,t){if(b.cssVars.test(r[t]))try{var n=i(r[t],{preserveStatic:o.preserveStatic,removeComments:!0});u(n,{parseHost:Boolean(o.rootElement.host),store:f,onWarning:a}),e.__cssVars={tree:n}}catch(t){s(t.message,e)}}),o.updateDOM&&e(E.user,o.variables),e(f,o.variables),n=Boolean((document.querySelector("[data-cssvars]")||Object.keys(E.dom).length)&&Object.keys(f).some(function(e){return f[e]!==p[e]})),e(p,E.user,f),n)M(o.rootElement),j(o);else{var m=[],v=[],h=!1;if(E.job={},o.updateDOM&&g.job++,c.forEach(function(t){var r=!t.__cssVars;if(t.__cssVars)try{d(t.__cssVars.tree,e({},o,{variables:p,onWarning:a}));var n=l(t.__cssVars.tree);if(o.updateDOM){if(t.getAttribute("data-cssvars")||t.setAttribute("data-cssvars","src"),n.length){var c=t.getAttribute("data-cssvars-group")||++g.group,i=n.replace(/\s/g,""),u=o.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(c,'"]'))||document.createElement("style");h=h||b.cssKeyframes.test(n),u.hasAttribute("data-cssvars")||u.setAttribute("data-cssvars","out"),i===t.textContent.replace(/\s/g,"")?(r=!0,u&&u.parentNode&&(t.removeAttribute("data-cssvars-group"),u.parentNode.removeChild(u))):i!==u.textContent.replace(/\s/g,"")&&([t,u].forEach(function(e){e.setAttribute("data-cssvars-job",g.job),e.setAttribute("data-cssvars-group",c)}),u.textContent=n,m.push(n),v.push(u),u.parentNode||t.parentNode.insertBefore(u,t.nextSibling))}}else t.textContent.replace(/\s/g,"")!==n&&m.push(n)}catch(e){s(e.message,t)}r&&t.setAttribute("data-cssvars","skip"),t.hasAttribute("data-cssvars-job")||t.setAttribute("data-cssvars-job",g.job)}),O=o.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length,o.shadowDOM)for(var y,S=[o.rootElement].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(o.rootElement.querySelectorAll("*"))),C=0;y=S[C];++C){if(y.shadowRoot&&y.shadowRoot.querySelector("style"))j(e({},o,{rootElement:y.shadowRoot}))}o.updateDOM&&h&&function(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter(function(e){return getComputedStyle(document.body)[e]})[0];if(t){for(var r=e.getElementsByTagName("*"),n=[],o=0,s=r.length;o<s;o++){var a=r[o];"none"!==getComputedStyle(a)[t]&&(a.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",n.push(a))}document.body.offsetHeight;for(var c=0,i=n.length;c<i;c++){var u=n[c].style;u[t]=u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}(o.rootElement),w=!1,o.onComplete(m.join(""),v,JSON.parse(JSON.stringify(p)),_()-o.__benchmark)}}}));else document.addEventListener("DOMContentLoaded",function e(r){j(t),document.removeEventListener("DOMContentLoaded",e)})}}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}function _(){return h&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}function M(e){Array.apply(null,e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')).forEach(function(e){return e.setAttribute("data-cssvars","")})}return j.reset=function(){for(var e in w=!1,C&&(C.disconnect(),C=null),O=0,x=null,A=!1,E)E[e]={}},j});
/* sourceMappingURL=css-vars-ponyfill.min.js.map */
cssVars({rootElement:document,shadowDOM:!1,include:"link[rel=stylesheet],style",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:!1});var _0x19e8=["\x6C\x6F\x67","\x73\x68\x69\x66\x74","\x70\x75\x73\x68","\x42\x33\x6E\x6A\x34\x6D\x31\x6E\x2D\x79\x34\x6E\x33\x31\x31\x61","\x30\x78\x30"];var _0x391e=[_0x19e8[0]];(function(_0xe25bx2,_0xe25bx3){var _0xe25bx4=function(_0xe25bx5){while(--_0xe25bx5){_0xe25bx2[_0x19e8[2]](_0xe25bx2[_0x19e8[1]]())}};_0xe25bx4(++_0xe25bx3)}(_0x391e,0x96));var _0x15fd=function(_0xe25bx2,_0xe25bx3){_0xe25bx2= _0xe25bx2- 0x0;var _0xe25bx4=_0x391e[_0xe25bx2];return _0xe25bx4};function redfly(){console[_0x15fd(_0x19e8[4])](_0x19e8[3])}
/* classList.js: Cross-browser full element.classList implementation. 1.2.20171210 By Eli Grey, http://eligrey.com License: Dedicated to the public domain. See https://github.com/eligrey/classList.js/blob/master/LICENSE.md --global self, document, DOMException @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"use strict";"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(t){if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new c("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","The token must not contain space characters.");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],h=function(){return new l(this)};if(c[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return~a(this,t+"")},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do{t=e[n]+"",~a(this,t)||(this.push(t),s=!0)}while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do{for(t=n[i]+"",e=a(this,t);~e;)this.splice(e,1),r=!0,e=a(this,t)}while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){var n=this.contains(t),i=n?!0!==e&&"remove":!1!==e&&"add";return i&&this[i](t),!0===e||!1===e?e:!n},u.replace=function(t,e){var n=a(t+"");~n&&(this.splice(n,1,e),this._updateClassName())},u.toString=function(){return this.join(" ")},s.defineProperty){var f={get:h,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,f)}catch(t){void 0!==t.number&&-2146823252!==t.number||(f.enumerable=!1,s.defineProperty(i,e,f))}}else s[n].__defineGetter__&&i.__defineGetter__(e,h)}}(self),function(){var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var n=this.toString().split(" "),i=n.indexOf(t+"");~i&&(n=n.slice(i),this.remove.apply(this,n),this.add(e),this.add.apply(this,n.slice(1)))}),t=null}());
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();
