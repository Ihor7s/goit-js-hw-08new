function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,s=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(j,t),l?g(e):a}function x(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function j(){var e=p();if(x(e))return I(e);u=setTimeout(j,function(e){var n=t-(e-f);return d?s(n,i-(e-c)):n}(e))}function I(e){return u=void 0,v&&r?g(e):(r=o=void 0,a)}function h(){var e=p(),n=x(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(d)return u=setTimeout(j,t),g(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?m(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},h.flush=function(){return void 0===u?a:I(p())},h}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};let g={};document.querySelector(".feedback-form"),document.querySelector(".feedback-form input"),document.querySelector(".feedback-form textarea");const S={form:document.querySelector(".feedback-form"),emailInput:document.querySelector(".feedback-form input"),textareaInput:document.querySelector(".feedback-form textarea")};S.form.addEventListener("submit",(function(e){e.preventDefault();const t=S.emailInput.value,n=S.textareaInput.value;""!==t&&""!==n||alert("Ви незаповнили форму");e.target.reset(),localStorage.removeItem("feedbak-from-state")})),S.form.addEventListener("input",e(t)((function(e){g[e.target.name]=e.target.value;const t=JSON.stringify(g);localStorage.setItem("feedbak-from-state",t)}),500)),function(){const e=localStorage.getItem("feedbak-from-state");if(e){const t=JSON.parse(e);S.emailInput.value=t.email,S.textareaInput.value=t.message}}();
//# sourceMappingURL=03-feedback.759858fa.js.map
