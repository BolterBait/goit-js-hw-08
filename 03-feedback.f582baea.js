function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,u=setTimeout(O,t),c?b(e):a}function E(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function O(){var e=v();if(E(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function T(e){return u=void 0,g&&i?b(e):(i=o=void 0,a)}function j(){var e=v(),n=E(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},j.flush=function(){return void 0===u?a:T(v())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),S=document.querySelector('[type="email"]'),E=document.querySelector('[name="message"]'),O=localStorage.getItem("STORAGE_KEY"),T=JSON.parse(O);T&&(S.value=T.email,E.value=T.message),b.addEventListener("input",e(t)((function(e){const{email:t,message:n}=e.target.form.elements,i={email:t.value,message:n.value};localStorage.setItem("STORAGE_KEY",JSON.stringify(i))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),""!==E.value&&""!==S.value&&(console.log({email:S.value,message:E.value}),localStorage.removeItem("STORAGE_KEY"),e.target.reset())}));
//# sourceMappingURL=03-feedback.f582baea.js.map
