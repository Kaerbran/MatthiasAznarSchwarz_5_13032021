(()=>{"use strict";var e={};function t(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(a,i){var o=e.apply(n,r);function c(e){t(o,a,i,c,s,"next",e)}function s(e){t(o,a,i,c,s,"throw",e)}c(void 0)}))}}e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),function(){var e=n(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("The URL value is :"+t),e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=13;break}return e.next=8,n.json();case 8:return r=e.sent,console.log(r),e.abrupt("return",r);case 13:console.error("Error code from server : ${error}");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}()("http://localhost:3000/api/teddies/").then((function(e){for(var t=document.getElementById("mainMain"),n=0;n<e.length;n++){var r=document.createElement("article");r.classList.add("mainCard"),r.id=e[n]._id,t.appendChild(r);var a=document.getElementById(e[n]._id),i=document.createElement("img");i.classList.add("mainCard__img"),i.src=e[n].imageUrl,i.alt="Un beau nounours!",a.appendChild(i);var o=document.createElement("div");o.classList.add("mainCard__txtdiv"),a.appendChild(o);var c=document.getElementsByClassName("mainCard__txtdiv")[n],s=document.createElement("h2");s.classList.add("mainCard__txtdiv__h2"),s.innerHTML=e[n].name,c.appendChild(s);var d=document.createElement("p");d.classList.add("mainCard__txtdiv__p"),d.innerHTML=e[n].description,c.appendChild(d);var l=document.createElement("button");l.classList.add("btn"),l.classList.add("btn--blue"),l.classList.add("mainCard__btt"),l.innerHTML="Fiche Article",a.appendChild(l)}})).then((function(){var e=document.getElementsByClassName("btn");console.log(e);for(var t=0;t<e.length;t++)e[t].addEventListener("click",a)}));var r=function(){var e=n(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="http://localhost:3000/api/teddies/"+t,console.log(n),sessionStorage.setItem("GetURLArticle",JSON.stringify(n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=n(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.parentNode.id,console.log(n),r(n),window.location.href="article.html";case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()})();