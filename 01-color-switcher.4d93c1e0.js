const t={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]")};let e;function o(){document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.buttonStart.addEventListener("click",(function(){e=setInterval(o,1e3),t.buttonStart.setAttribute("disabled","disabled"),t.buttonStop.removeAttribute("disabled")})),t.buttonStop.addEventListener("click",(function(){clearInterval(e),t.buttonStart.removeAttribute("disabled"),t.buttonStop.setAttribute("disabled","disabled")})),t.buttonStop.setAttribute("disabled","disabled");
//# sourceMappingURL=01-color-switcher.4d93c1e0.js.map