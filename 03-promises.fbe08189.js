!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("6JpON"),u={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),submit:document.querySelector('button[type="submit"]')};u.submit.addEventListener("click",(function(t){t.preventDefault();var n=u.delay.value,o=u.step.value,i=u.amount.value,a=0,l=+n;setTimeout((function(){var t=setInterval((function(){var n,u;(n=a+=1,u=l,new Promise((function(e,t){Math.random()>.3?e({position:n,delay:u}):t({position:n,delay:u})}))).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),l+=+o,a===+i&&clearInterval(t)}),o)}),n)}))}();
//# sourceMappingURL=03-promises.fbe08189.js.map