webpackJsonp([0],[,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(0),o=n(32),a=n(35),i=n(36),s=n(37),c={ENTER:13,TAB:9,BACKSPACE:8,UP_ARROW:38,DOWN_ARROW:40},l={root:"react-tags",rootFocused:"is-focused",selected:"react-tags__selected",selectedTag:"react-tags__selected-tag",selectedTagName:"react-tags__selected-tag-name",search:"react-tags__search",searchInput:"react-tags__search-input",suggestions:"react-tags__suggestions",suggestionActive:"is-active",suggestionDisabled:"is-disabled"},u=function(e){function t(t){e.call(this,t),this.state={query:"",focused:!1,expandable:!1,selectedIndex:-1,classNames:Object.assign({},l,this.props.classNames)}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentWillReceiveProps=function(e){this.setState({classNames:Object.assign({},l,e.classNames)})},t.prototype.handleInput=function(e){var t=e.target.value;this.props.handleInputChange&&this.props.handleInputChange(t),this.setState({query:t})},t.prototype.handleKeyDown=function(e){var t=this.state,n=t.query,r=t.selectedIndex,o=this.props,a=o.delimiters,i=o.delimiterChars;if((a.indexOf(e.keyCode)>-1||i.indexOf(e.key)>-1)&&((n||r>-1)&&e.preventDefault(),n.length>=this.props.minQueryLength)){var s=this.suggestions.state.options.findIndex(function(e){return 0===e.name.search(new RegExp("^"+n+"$","i"))}),l=-1===r?s:r;l>-1?this.addTag(this.suggestions.state.options[l]):this.props.allowNew&&this.addTag({name:n})}e.keyCode===c.BACKSPACE&&0===n.length&&this.props.allowBackspace&&this.deleteTag(this.props.tags.length-1),e.keyCode===c.UP_ARROW&&(e.preventDefault(),r<=0?this.setState({selectedIndex:this.suggestions.state.options.length-1}):this.setState({selectedIndex:r-1})),e.keyCode===c.DOWN_ARROW&&(e.preventDefault(),this.setState({selectedIndex:(r+1)%this.suggestions.state.options.length}))},t.prototype.handleClick=function(e){document.activeElement!==e.target&&this.input.input.focus()},t.prototype.handleBlur=function(){this.setState({focused:!1,selectedIndex:-1}),this.props.handleBlur&&this.props.handleBlur()},t.prototype.handleFocus=function(){this.setState({focused:!0}),this.props.handleFocus&&this.props.handleFocus()},t.prototype.addTag=function(e){e.disabled||(this.props.handleAddition(e),this.setState({query:"",selectedIndex:-1}))},t.prototype.deleteTag=function(e){this.props.handleDelete(e),this.setState({query:""})},t.prototype.render=function(){var e=this,t=this.props.tagComponent||a,n=this.props.tags.map(function(n,o){return r.createElement(t,{key:o,tag:n,classNames:e.state.classNames,onDelete:e.deleteTag.bind(e,o)})}),o=this.state.focused&&this.state.query.length>=this.props.minQueryLength,c=[this.state.classNames.root];return this.state.focused&&c.push(this.state.classNames.rootFocused),r.createElement("div",{className:c.join(" "),onClick:this.handleClick.bind(this)},r.createElement("div",{className:this.state.classNames.selected,"aria-live":"polite","aria-relevant":"additions removals"},n),r.createElement("div",{className:this.state.classNames.search,onBlurCapture:this.handleBlur.bind(this),onFocusCapture:this.handleFocus.bind(this),onInput:this.handleInput.bind(this),onKeyDown:this.handleKeyDown.bind(this)},r.createElement(i,Object.assign({},this.state,{ref:function(t){e.input=t},listboxId:"ReactTags-listbox",autofocus:this.props.autofocus,autoresize:this.props.autoresize,expandable:o,placeholder:this.props.placeholder})),r.createElement(s,Object.assign({},this.state,{ref:function(t){e.suggestions=t},listboxId:"ReactTags-listbox",expandable:o,suggestions:this.props.suggestions,addTag:this.addTag.bind(this),maxSuggestionsLength:this.props.maxSuggestionsLength}))))},t}(r.Component);u.defaultProps={tags:[],placeholder:"Add new tag",suggestions:[],autofocus:!0,autoresize:!0,delimiters:[c.TAB,c.ENTER],delimiterChars:[],minQueryLength:2,maxSuggestionsLength:6,allowNew:!1,allowBackspace:!0,tagComponent:null},u.propTypes={tags:o.arrayOf(o.object),placeholder:o.string,suggestions:o.arrayOf(o.object),autofocus:o.bool,autoresize:o.bool,delimiters:o.arrayOf(o.number),delimiterChars:o.arrayOf(o.string),handleDelete:o.func.isRequired,handleAddition:o.func.isRequired,handleInputChange:o.func,handleFocus:o.func,handleBlur:o.func,minQueryLength:o.number,maxSuggestionsLength:o.number,classNames:o.object,allowNew:o.bool,allowBackspace:o.bool,tagComponent:o.oneOfType([o.func,o.element])},e.exports=u},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(u(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(u(r.parts[a],t));h[r.id]={id:r.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s=a[1],c=a[2],l=a[3],u={css:s,media:c,sourceMap:l};r[i]?r[i].parts.push(u):n.push(r[i]={id:i,parts:[u]})}return n}function a(e,t){var n=b(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=v[v.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=b(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),a(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),a(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var l=y++;n=m||(m=s(t)),r=p.bind(null,n,l,!1),o=p.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=f.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=d.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var h={},g=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(n){if(void 0===t[n]){var r=e.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[n]=r}return t[n]}}(function(e){return document.querySelector(e)}),m=null,y=0,v=[],x=n(43);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],c=h[s.id];c.refs--,a.push(c)}if(e){r(o(e,t),t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete h[c.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=n(5),l=n(30),u=n(31),p=n(39);n(41),n(44);var d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return s.createElement("div",null,s.createElement("h2",{className:"page-title"},"Settings: Facebook Developer Interests"),s.createElement(l,null),s.createElement(u,null),s.createElement(p,null))}}]),t}(s.Component);c.render(s.createElement(d,null),document.getElementById("root"))},,,,,,,,,,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=(n(5),function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={value:"",status:"Set API Key"},chrome.storage.sync.get("apikey",function(t){t.apikey&&e.setState({value:t.apikey,status:"Modify API Key"})}),e.handleChange=e.handleChange.bind(e),e.handleSubmit=e.handleSubmit.bind(e),e}return a(t,e),i(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value,status:"Update API Key"})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this;chrome.storage.sync.set({apikey:t.state.value},function(){t.setState({status:"Saved"}),setTimeout(function(){t.setState({status:"Modify API Key"})},1500)})}},{key:"render",value:function(){return s.createElement("form",{onSubmit:this.handleSubmit,className:"apikey_form"},s.createElement("label",{htmlFor:"apikey"},s.createElement("h3",null,"Facebook Graph API Key (App Token) ",s.createElement("a",{target:"_blank",className:"hint",href:"https://developers.facebook.com/tools/accesstoken/"},"?"))),s.createElement("div",{className:"form-group"},s.createElement("input",{type:"text",name:"apikey",id:"apikey",value:this.state.value,onChange:this.handleChange,spellcheck:"false",required:!0}),s.createElement("button",null,this.state.status)))}}]),t}(s.Component));e.exports=c},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),l=(n(5),n(16)),u=n(38),p=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tags:[],suggestions:u},chrome.storage.sync.get("groups",function(e){var t=e.groups||[],r=t.map(function(e){return u.find(function(t){return t.id===e})}),o=u.filter(function(e){return!t.includes(e.id)});n.setState({tags:r,suggestions:o})}),n}return i(t,e),s(t,[{key:"handleDelete",value:function(e){var t=this.state.tags.slice(0),n=t.splice(e,1);this.setState({tags:t});var o=[].concat(r(this.state.suggestions),r(n));this.setState({suggestions:o});var a=t.map(function(e){return e.id});chrome.storage.sync.set({groups:a})}},{key:"handleAddition",value:function(e){var t=[].concat(this.state.tags,e);t=t.filter(Boolean),this.setState({tags:t});var n=this.state.suggestions.filter(function(t){return t.id!==e.id});this.setState({suggestions:n});var r=t.map(function(e){return e.id});chrome.storage.sync.set({groups:r})}},{key:"render",value:function(){return c.createElement("div",null,c.createElement("h3",null,"Blacklist Groups"),c.createElement(l,{tags:this.state.tags,suggestions:this.state.suggestions,placeholder:"Add a group",handleDelete:this.handleDelete.bind(this),handleAddition:this.handleAddition.bind(this)}))}}]),t}(c.Component);e.exports=p},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(33)(o,!0)}else e.exports=n(34)()}).call(t,n(1))},function(e,t,n){"use strict";(function(t){var r=n(2),o=n(4),a=n(7),i=n(3),s=n(9),c=n(8);e.exports=function(e,n){function l(e){var t=e&&(E&&e[E]||e[S]);if("function"==typeof t)return t}function u(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function p(e){this.message=e,this.stack=""}function d(e){function r(r,l,u,d,f,h,g){if(d=d||j,h=h||u,g!==s)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var b=d+":"+u;!i[b]&&c<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,d),i[b]=!0,c++)}return null==l[u]?r?new p(null===l[u]?"The "+f+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`.":"The "+f+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(l,u,d,f,h)}if("production"!==t.env.NODE_ENV)var i={},c=0;var l=r.bind(null,!1);return l.isRequired=r.bind(null,!0),l}function f(e){function t(t,n,r,o,a,i){var s=t[n];if(_(s)!==e)return new p("Invalid "+o+" `"+a+"` of type `"+C(s)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return d(t)}function h(e){function t(t,n,r,o,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i)){return new p("Invalid "+o+" `"+a+"` of type `"+_(i)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<i.length;c++){var l=e(i,c,r,o,a+"["+c+"]",s);if(l instanceof Error)return l}return null}return d(t)}function g(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||j;return new p("Invalid "+o+" `"+a+"` of type `"+O(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return d(t)}function b(e){function n(t,n,r,o,a){for(var i=t[n],s=0;s<e.length;s++)if(u(i,e[s]))return null;return new p("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?d(n):("production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function m(e){function t(t,n,r,o,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],c=_(i);if("object"!==c)return new p("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in i)if(i.hasOwnProperty(l)){var u=e(i,l,r,o,a+"."+l,s);if(u instanceof Error)return u}return null}return d(t)}function y(e){function n(t,n,r,o,a){for(var i=0;i<e.length;i++){if(null==(0,e[i])(t,n,r,o,a,s))return null}return new p("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var o=0;o<e.length;o++){var i=e[o];if("function"!=typeof i)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",D(i),o),r.thatReturnsNull}return d(n)}function v(e){function t(t,n,r,o,a){var i=t[n],c=_(i);if("object"!==c)return new p("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var u=e[l];if(u){var d=u(i,l,r,o,a+"."+l,s);if(d)return d}}return null}return d(t)}function x(e){function t(t,n,r,o,a){var c=t[n],l=_(c);if("object"!==l)return new p("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var u=i({},t[n],e);for(var d in u){var f=e[d];if(!f)return new p("Invalid "+o+" `"+a+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=f(c,d,r,o,a+"."+d,s);if(h)return h}return null}return d(t)}function k(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(k);if(null===t||e(t))return!0;var n=l(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!k(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!k(a[1]))return!1}return!0;default:return!1}}function w(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function _(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":w(t,e)?"symbol":t}function C(e){if(void 0===e||null===e)return""+e;var t=_(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function D(e){var t=C(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function O(e){return e.constructor&&e.constructor.name?e.constructor.name:j}var E="function"==typeof Symbol&&Symbol.iterator,S="@@iterator",j="<<anonymous>>",A={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:function(){return d(r.thatReturnsNull)}(),arrayOf:h,element:function(){function t(t,n,r,o,a){var i=t[n];if(!e(i)){return new p("Invalid "+o+" `"+a+"` of type `"+_(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return d(t)}(),instanceOf:g,node:function(){function e(e,t,n,r,o){return k(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return d(e)}(),objectOf:m,oneOf:b,oneOfType:y,shape:v,exact:x};return p.prototype=Error.prototype,A.checkPropTypes=c,A.PropTypes=A,A}}).call(t,n(1))},function(e,t,n){"use strict";var r=n(2),o=n(4),a=n(9);e.exports=function(){function e(e,t,n,r,i,s){s!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){return r.createElement("button",{type:"button",className:e.classNames.selectedTag,title:"Click to remove tag",onClick:e.onDelete},r.createElement("span",{className:e.classNames.selectedTagName},e.tag.name))}},function(e,t,n){"use strict";var r=n(0),o={position:"absolute",width:0,height:0,visibility:"hidden",overflow:"scroll",whiteSpace:"pre"},a=["fontSize","fontFamily","fontWeight","fontStyle","letterSpacing"],i=function(e){function t(t){e.call(this,t),this.state={inputWidth:null}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentDidMount=function(){this.props.autoresize&&(this.copyInputStyles(),this.updateInputWidth()),this.props.autofocus&&this.input.focus()},t.prototype.componentDidUpdate=function(e){this.updateInputWidth()},t.prototype.componentWillReceiveProps=function(e){this.input.value!==e.query&&(this.input.value=e.query)},t.prototype.copyInputStyles=function(){var e=this,t=window.getComputedStyle(this.input);a.forEach(function(n){e.sizer.style[n]=t[n]})},t.prototype.updateInputWidth=function(){var e;this.props.autoresize&&(e=Math.ceil(this.sizer.scrollWidth)+2),e!==this.state.inputWidth&&this.setState({inputWidth:e})},t.prototype.render=function(){var e=this,t=this.props,n=t.query,a=t.placeholder,i=t.expandable,s=t.listboxId,c=t.selectedIndex;return r.createElement("div",{className:this.props.classNames.searchInput},r.createElement("input",{ref:function(t){e.input=t},value:n,placeholder:a,role:"combobox","aria-autocomplete":"list","aria-label":a,"aria-owns":s,"aria-activedescendant":c>-1?s+"-"+c:null,"aria-expanded":i,style:{width:this.state.inputWidth}}),r.createElement("div",{ref:function(t){e.sizer=t},style:o},n||a))},t}(r.Component);e.exports=i},function(e,t,n){"use strict";function r(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}function o(e,t){var n=RegExp(r(t),"gi");return{__html:e.replace(n,"<mark>$&</mark>")}}function a(e,t,n){var o=new RegExp("(?:^|\\s)"+r(e),"i");return t.filter(function(e){return o.test(e.name)}).slice(0,n)}var i=n(0),s=function(e){function t(t){e.call(this,t),this.state={options:a(this.props.query,this.props.suggestions,this.props.maxSuggestionsLength)}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentWillReceiveProps=function(e){this.setState({options:a(e.query,e.suggestions,e.maxSuggestionsLength)})},t.prototype.handleMouseDown=function(e,t){t.preventDefault(),this.props.addTag(e)},t.prototype.render=function(){var e=this;if(!this.props.expandable||!this.state.options.length)return null;var t=this.state.options.map(function(t,n){var r=e.props.listboxId+"-"+n,a=[];return e.props.selectedIndex===n&&a.push(e.props.classNames.suggestionActive),t.disabled&&a.push(e.props.classNames.suggestionDisabled),i.createElement("li",{id:r,key:r,role:"option",className:a.join(" "),"aria-disabled":!0===t.disabled,onMouseDown:e.handleMouseDown.bind(e,t)},i.createElement("span",{dangerouslySetInnerHTML:o(t.name,e.props.query)}))});return i.createElement("div",{className:this.props.classNames.suggestions},i.createElement("ul",{role:"listbox",id:this.props.listboxId},t))},t}(i.Component);e.exports=s},function(e,t,n){"use strict";e.exports=[{id:0xe302336a3e7e,name:"Facebook Developer Circle: Delhi, NCR"},{id:0x4e58d36f89882,name:"Facebook Developer Circle: Nsukka"},{id:0x7e790631c0d81,name:"Facebook Developer Circle: Tunis"},{id:0x6d6458121e012,name:"Facebook Developer Circle: Bangkok"},{id:0x6d489dbac22fb,name:"Facebook Developer Circle: Santiago"},{id:0x6d2435cc93967,name:"Facebook Developer Circle: Malang"},{id:0x6c39a2135df28,name:"Facebook Developer Circle: Ado-Ekiti"},{id:0x68a742a6b98d7,name:"Facebook Developer Circle: Surabaya"},{id:0x66b1ca04c9b1e,name:"Facebook Developer Circle: Porto Alegre"},{id:0x652f768024e61,name:"Facebook Developer Circle: Chennai"},{id:0x630328d386ba6,name:"Facebook Developer Circle: Kathmandu"},{id:0x6201b934ebbba,name:"Facebook Developer Circle: Berlin"},{id:0x5b5add11f8a1d,name:"Facebook Developer Circle: Accra"},{id:0x54ef33d2d17a1,name:"Facebook Developer Circle: Islamabad"},{id:0x520c271a57b6c,name:"Facebook Developer Circle: Kampala"},{id:0x478779b3a4cc6,name:"Facebook Developer Circle: Cairo"},{id:0x418430422e712,name:"Facebook Developer Circle: Bengaluru"},{id:0x41486d3cdd972,name:"Facebook Developer Circle: Lagos"},{id:0x3d1b8ff9a9f17,name:"Facebook Developer Circle: Ciudad de Guatemala"},{id:0x3d193e3d0567b,name:"Facebook Developer Circle: Hyderabad"},{id:0x3ce1c2d9a9128,name:"Facebook Developer Circle: Lahore"},{id:0x3b2f89a3b62e5,name:"Facebook Developer Circle: Bogotá"},{id:893652180764182,name:"Facebook Developer Circle: Santa Rita do Sapucaí"},{id:886251554842166,name:"Facebook Developer Circle: São Paulo"},{id:885490321621308,name:"Facebook Developer Circle: Harare"},{id:854314664699156,name:"Facebook Developer Circle: Ho Chi Minh City"},{id:826341790867138,name:"Facebook Developer Circle: Guadalajara"},{id:813879575430133,name:"Facebook Developer Circle: Taipei"},{id:811281355669013,name:"Facebook Developer Circle: Dhaka"},{id:793016410839401,name:"Facebook Developer Circle: Karachi"},{id:786453984830109,name:"Facebook Developer Circle: Mumbai"},{id:638854212931776,name:"Facebook Developer Circle: Manila"},{id:485698195138488,name:"Facebook Developer Circle: Lille"},{id:476463749198108,name:"Facebook Developer Circle: Ciudad de México"},{id:428973767504677,name:"Facebook Developer Circle: Bali"},{id:402137910152010,name:"Facebook Developer Circle: Bandung"},{id:362906487478469,name:"Facebook Developer Circle: Geneva"},{id:348458995586076,name:"Facebook Developer Circle: Amman"},{id:332006040559709,name:"Facebook Developer Circle: Oldenburg"},{id:313087542449350,name:"Facebook Developer Circle: Jakarta"},{id:309450039518404,name:"Facebook Developer Circle: Vienna"},{id:304477986647756,name:"Facebook Developer Circle: Uyo"},{id:293458267749614,name:"Facebook Developer Circle: Yogyakarta"},{id:0xf1bcd4a66e3c,name:"Facebook Developer Circle: Casablanca"},{id:0xcae759862cea,name:"Facebook Developer Circle: Buea"},{id:0xb505e7ee2762,name:"Facebook Developer Circle: Paris"},{id:0xaa45dfda5bc9,name:"Facebook Developer Circle: Dakar"},{id:0xaa01d5ca5274,name:"Facebook Developer Circle: Kolkata"},{id:0x92602e7bc2e6,name:"Facebook Developer Circle: Gaza"},{id:0x8a5c0e210a2f,name:"Facebook Developer Circle: Cape Town"},{id:0x7894b896b62b,name:"Facebook Developer Circle: Buenos Aires"},{id:0x71fc316b07a0,name:"Facebook Developer Circle: Madrid"},{id:0x65bc01750f99,name:"Facebook Developer Circle: Campinas"}]},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),l=(n(5),n(16)),u=n(40),p=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tags:[],suggestions:u},chrome.storage.sync.get("keywords",function(e){var t=e.keywords||[];u=[].concat(r(u),r(t));var o=t.map(function(e){return u.find(function(t){return t.name===e.name})}),a=u.filter(function(e){return!t.includes(e.name)});n.setState({tags:o,suggestions:a})}),n}return i(t,e),s(t,[{key:"handleDelete",value:function(e){var t=this.state.tags.slice(0),n=t.splice(e,1),o=[].concat(r(this.state.suggestions),r(n));this.setState({tags:t,suggestions:o}),chrome.storage.sync.set({keywords:t})}},{key:"handleAddition",value:function(e){e.id||(e.id=-1*(this.state.tags.length+this.state.suggestions.length+1));var t=[].concat(this.state.tags,e);t=t.filter(Boolean);var n=this.state.suggestions.filter(function(t){return t.id!==e.id});this.setState({suggestions:n,tags:t}),chrome.storage.sync.set({keywords:t})}},{key:"render",value:function(){return c.createElement("div",null,c.createElement("h3",null,"My Interests"),c.createElement(l,{tags:this.state.tags,suggestions:this.state.suggestions,placeholder:"Add a keyword",handleDelete:this.handleDelete.bind(this),handleAddition:this.handleAddition.bind(this),allowNew:!0}))}}]),t}(c.Component);e.exports=p},function(e,t,n){"use strict";e.exports=[{id:1,name:"js"},{id:2,name:"angular"},{id:3,name:"react"},{id:4,name:"react-dom"},{id:5,name:"react-native"},{id:6,name:"javascript"}]},function(e,t,n){var r=n(42);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(18)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(17)(void 0),t.push([e.i,'/**\n * <div class="react-tags">\n *   <div class="react-tags__selected">\n *     <button class="react-tags__selected-tag">\n *       <span class="react-tags__selected-tag-name" />\n *     </button>\n *   </div>\n *   <div class="react-tags__search">\n *     <div class="react-tags__search-input">\n *       <input />\n *       <div />\n *     </div>\n *     <div class="react-tags__suggestions">\n *       <ul>\n *         <li class="is-active">\n *           <mark />\n *         </li>\n *         <li class="is-disabled">\n *           <mark />\n *         </li>\n *       </ul>\n *     </div>\n *   </div>\n */\n.react-tags {\n  position: relative;\n  padding: 6px 0 0 6px;\n  border: 1px solid #eee;\n  border-radius: 1px;\n\n  /* shared font styles */\n  font-size: 1em;\n  line-height: 1.2;\n\n  /* clicking anywhere will focus the input */\n  cursor: text;\n}\n\n.react-tags.is-focused {\n  border-color: #ddd;\n}\n\n.react-tags__selected {\n  display: inline;\n}\n\n.react-tags__selected-tag {\n  display: inline-block;\n  box-sizing: border-box;\n  margin: 0 6px 6px 0 !important;\n  padding: 6px 8px;\n  background: #ecf0f7;\n\n  /* match the font styles */\n  font-size: inherit;\n  line-height: inherit;\n  font-weight: normal !important;\n}\n\n.react-tags__selected-tag:after {\n  content: \'\\2715\';\n  color: #AAA;\n  margin-left: 8px;\n}\n\n.react-tags__search {\n  display: inline-block;\n\n  /* match tag layout */\n  padding: 7px 2px;\n  margin-bottom: 6px;\n\n  /* prevent autoresize overflowing the container */\n  max-width: 100%;\n}\n\n@media screen and (min-width: 30em) {\n\n  .react-tags__search {\n    /* this will become the offsetParent for suggestions */\n    position: relative;\n  }\n\n}\n\n.react-tags__search input {\n  /* prevent autoresize overflowing the container */\n  max-width: 100%;\n\n  /* remove styles and layout from this element */\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n\n  /* match the font styles */\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.react-tags__search input::-ms-clear {\n  display: none;\n}\n\n.react-tags__suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  z-index: 999999;\n}\n\n@media screen and (min-width: 30em) {\n\n  .react-tags__suggestions {\n    width: 240px;\n  }\n\n}\n\n.react-tags__suggestions ul {\n  margin: 4px -1px;\n  padding: 0;\n  list-style: none;\n  background: white;\n  border: 1px solid #ccc;\n  border-color: rgba(0, 0, 0, .15);\n  border-radius: 2px;\n  box-shadow: 0 4px 6px 2px rgba(0, 0, 0, .10);\n}\n\n.react-tags__suggestions li {\n  /*border-bottom: 1px solid #ddd;*/\n  padding: 6px 8px;\n}\n\n.react-tags__suggestions li mark {\n  /*text-decoration: underline;*/\n  background: none;\n  font-weight: 600;\n}\n\n.react-tags__suggestions li:hover {\n  cursor: pointer;\n  background: #eee;\n}\n\n.react-tags__suggestions li.is-active {\n  background: #ecf0f7;\n}\n\n.react-tags__suggestions li.is-disabled {\n  opacity: 0.5;\n  cursor: auto;\n}\n',""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(e,t,n){var r=n(45);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(18)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(17)(void 0),t.push([e.i,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: blue;\n}\n\nbody {\n  display: flex;\n  background: #e9ebee;\n  color: #1d2129;\n  padding: 1vh 2vw;\n  margin: 1em auto;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  min-height: 96vh;\n}\n\n#root {\n  background: #fff;\n  padding: 1em;\n  width: 100%;\n  box-shadow: 1px 1px 7px 0px #ddd;\n  flex: 1;\n}\n\n#root > div > form, #root > div > div {\n  padding: 1em 0;\n}\n\ninput {\n  max-width: 100%;\n  border: 0;\n  outline: none;\n  font-size: inherit;\n  line-height: inherit;\n}\n\na.hint {\n  background: #365899;\n  color: #fff;\n  padding: 0 4px;\n  border-radius: 4px;\n}\na.hint:hover {\n  background: #4267b2;\n}\n\nh3 {\n  color: #444;\n  margin: 3px 0;\n}\n\n.apikey_form .form-group {\n  display: flex;\n  width: 100%;\n  align-items: stretch;\n  justify-content: space-between;\n}\n\n.apikey_form input {\n  position: relative;\n  padding: 7px 2px;\n  flex: 1;\n  cursor: text;\n  font-size: 12px;\n  font-family: monospace;\n  border: 1px solid #eee;\n  border-radius: 2px;\n  color: #555;\n}\n.apikey_form input:focus {\n  border-color: #ddd;\n}\n\n.apikey_form button, .react-tags__selected-tag {\n  background-color: #f6f7f9;\n  color: #4b4f56;\n  border: none;\n  line-height: 26px;\n  padding: 0 10px;\n  transition: 200ms cubic-bezier(.08,.52,.52,1) background-color, 200ms cubic-bezier(.08,.52,.52,1) box-shadow, 200ms cubic-bezier(.08,.52,.52,1) transform;\n  border: 1px solid #ced0d4;\n  border-radius: 2px;\n  box-sizing: content-box;\n  font-size: 12px;\n  margin: 0 1px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: bold;\n  position: relative;\n}\n.apikey_form button:hover, .react-tags__selected-tag:hover{\n  background: #e9ebee;\n  cursor: pointer;\n}\n.apikey_form button:focus, .apikey_form button:active, .react-tags__selected-tag:focus, .react-tags__selected-tag:active{\n  box-shadow: 0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15);\n  outline: none;\n}\n\n.page-title {\n  font-size: 2em;\n  padding: 1em 0 0.3em;\n  margin-bottom: 1em;\n  border-bottom: 4px solid #4267b2;\n}\n",""])}],[19]);