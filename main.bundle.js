!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){},function(e,t,o){"use strict";function n(){const e=document.querySelectorAll(".header .nav__item");let t;for(var o=0;o<e.length;o++)t=e[o],t.classList.remove("nav__item_current")}function r(e,t,o){const n=(c=document.body.scrollTop,l=document.documentElement.scrollTop,document.documentElement.scrollTop=document.body.scrollTop=0,document.body.scrollTop>0?(r=document.body,document.body.scrollTop=c):(r=document.documentElement,document.documentElement.scrollTop=l),r);var r,c,l,d=Date.now()+o;let a,u=e.getBoundingClientRect().top;u>0?(a=u-2*t,requestAnimationFrame(()=>{!function e(t){if(!(t<=0)){var o=(d-Date.now())/16.6666666667;if(o<=1)n.scrollTop=n.scrollTop+t;else{n.scrollTop=n.scrollTop+Math.floor(t/o);let r=t-Math.floor(t/o);requestAnimationFrame(()=>{e(r)})}}}(a)})):(a=Math.abs(u)+2*t,requestAnimationFrame(()=>{!function e(t){if(!(t<=0)){var o=(d-Date.now())/16.6666666667;if(o<=1)n.scrollTop=n.scrollTop-t;else{n.scrollTop=n.scrollTop-Math.floor(t/o);let r=t-Math.floor(t/o);requestAnimationFrame(()=>{e(r)})}}}(a)}))}var c;o.r(t),function(){window.addEventListener("scroll",(function(e){if(window.scrollY>50){const e=document.querySelector(".header");e.classList.remove("header_hidden"),e.classList.add("header_shown")}else{const e=document.querySelector(".header");e.classList.remove("header_shown"),e.classList.add("header_hidden")}}));let e=0;window.addEventListener("scroll",(function(t){document.body.getBoundingClientRect().top>e&&window.scrollY<50&&n(),e=document.body.getBoundingClientRect().top}))}(),window.addEventListener("scroll",(function(e){if(window.scrollY>50){const e=document.querySelector(".arrowDown");e.classList.remove("arrowDown_shown"),e.classList.add("arrowDown_hidden")}else{const e=document.querySelector(".arrowDown");e.classList.remove("arrowDown_hidden"),e.classList.add("arrowDown_shown")}})),function(){const e=document.querySelector(".header").offsetHeight;document.querySelector(".header .nav").addEventListener("click",(function(t){switch(t.target.closest("[data-action]").dataset.action){case"aboutMe":r(document.querySelector(".aboutMeSection"),e+10,300);break;case"resume":r(document.querySelector(".resumeSection"),e-30,300);break;case"keySkills":r(document.querySelector(".keySkillsSection"),e-30,300);break}})),document.querySelector(".arrowDown").addEventListener("click",(function(t){r(document.querySelector(".aboutMeSection"),e+10,300)}))}(),c=document.querySelector("input[name=toggleTheme]"),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.dataset.theme="dark",c.checked=!0):document.documentElement.dataset.theme="light",c.addEventListener("change",(function(){this.checked?document.documentElement.dataset.theme="dark":document.documentElement.dataset.theme="light"}));o(0),o.p,o.p}]);