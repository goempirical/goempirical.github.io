"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{5585:function(n,e,t){var r=t(7294);function o(n,e){return Object.keys(n).length===Object.keys(e).length&&Object.keys(n).every((function(t){return!!Object.prototype.hasOwnProperty.call(e,t)&&n[t]===e[t]}))}function i(n){return n.concat().sort((function(n,e){return n.name>e.name?1:-1})).map((function(n){return n.options}))}function u(n,e){var t={start:function(){return 0},center:function(n){return r(n)/2},end:r};function r(n){return e-n}return{measure:function(r){return"number"===typeof n?e*Number(n):t[n](r)}}}function c(n){return Math.abs(n)}function a(n){return n?n/c(n):0}function s(n,e){return c(n-e)}function f(n,e){for(var t=[],r=0;r<n.length;r+=e)t.push(n.slice(r,r+e));return t}function d(n){return Object.keys(n).map(Number)}function l(n){return n[p(n)]}function p(n){return Math.max(0,n.length-1)}function v(n,e){var t=c(n-e);function r(e){return e<n}function o(n){return n>e}function i(n){return r(n)||o(n)}return{length:t,max:e,min:n,constrain:function(t){return i(t)?r(t)?n:e:t},reachedAny:i,reachedMax:o,reachedMin:r,removeOffset:function(n){return t?n-t*Math.ceil((n-e)/t):n}}}function m(n,e,t){var r=v(0,n),o=r.min,i=r.constrain,u=n+1,a=s(e);function s(n){return t?c((u+n)%u):i(n)}function f(){return a}function d(n){return a=s(n),l}var l={add:function(n){return d(f()+n)},clone:function(){return m(n,f(),t)},get:f,set:d,min:o,max:n};return l}function g(){var n=[];var e={add:function(t,r,o,i){return void 0===i&&(i=!1),t.addEventListener(r,o,i),n.push((function(){return t.removeEventListener(r,o,i)})),e},removeAll:function(){return n=n.filter((function(n){return n()})),e}};return e}function x(n){var e=n;function t(n){return e/=n,o}function r(n){return"number"===typeof n?n:n.get()}var o={add:function(n){return e+=r(n),o},divide:t,get:function(){return e},multiply:function(n){return e*=n,o},normalize:function(){return 0!==e&&t(e),o},set:function(n){return e=r(n),o},subtract:function(n){return e-=r(n),o}};return o}function h(n,e,t,r,o,i,u,f,d,l,p,v,m,h,y){var S=n.cross,b=["INPUT","SELECT","TEXTAREA"],w=x(0),E=g(),O=g(),A={mouse:300,touch:400},M={mouse:500,touch:600},P=o?5:16,T=0,k=0,B=!1,I=!1,z=!1,D=!1;function L(n){if(!(D="mousedown"===n.type)||0===n.button){var e=s(r.get(),u.get())>=2,o=D||!e,c=!function(n){var e=n.nodeName||"";return b.indexOf(e)>-1}(n.target),a=e||D&&c;B=!0,i.pointerDown(n),w.set(r),r.set(u),l.useBaseMass().useSpeed(80),function(){var n=D?document:t;O.add(n,"touchmove",N).add(n,"touchend",j).add(n,"mousemove",N).add(n,"mouseup",j)}(),T=i.readPoint(n),k=i.readPoint(n,S),m.emit("pointerDown"),o&&(z=!1),a&&n.preventDefault()}}function N(n){if(!I&&!D){if(!n.cancelable)return j(n);var t=i.readPoint(n),o=i.readPoint(n,S),u=s(t,T),c=s(o,k);if(!(I=u>c)&&!z)return j(n)}var a=i.pointerMove(n);!z&&a&&(z=!0),f.start(),r.add(e.apply(a)),n.preventDefault()}function j(n){var t=p.byDistance(0,!1).index!==v.get(),u=i.pointerUp(n)*(o?M:A)[D?"mouse":"touch"],f=function(n,e){var t=v.clone().add(-1*a(n)),r=t.get()===v.min||t.get()===v.max,i=p.byDistance(n,!o).distance;return o||c(n)<20?i:!h&&r?.4*i:y&&e?.5*i:p.byIndex(t.get(),0).distance}(e.apply(u),t),g=function(n,e){if(0===n||0===e)return 0;if(c(n)<=c(e))return 0;var t=s(c(n),c(e));return c(t/n)}(u,f),x=s(r.get(),w.get())>=.5,S=t&&g>.75,b=c(u)<20,E=S?10:P,T=S?1+2.5*g:1;x&&!D&&(z=!0),I=!1,B=!1,O.removeAll(),l.useSpeed(b?9:E).useMass(T),d.distance(f,!o),D=!1,m.emit("pointerUp")}function C(n){z&&n.preventDefault()}return{addActivationEvents:function(){var n=t;E.add(n,"touchmove",(function(){})).add(n,"touchend",(function(){})).add(n,"touchstart",L).add(n,"mousedown",L).add(n,"touchcancel",j).add(n,"contextmenu",j).add(n,"click",C)},clickAllowed:function(){return!z},pointerDown:function(){return B},removeAllEvents:function(){E.removeAll(),O.removeAll()}}}function y(n,e,t){var r=function(n){var e=Math.pow(10,n);return function(n){return Math.round(n*e)/e}}(2),o=x(0),i=x(0),u=x(0),c=0,s=e,f=t;function d(n){return s=n,p}function l(n){return f=n,p}var p={direction:function(){return c},seek:function(e){u.set(e).subtract(n);var t,r,d,l,v=(t=u.get(),(d=0)+(t-(r=0))/(100-r)*(s-d));return c=a(u.get()),u.normalize().multiply(v).subtract(o),(l=u).divide(f),i.add(l),p},settle:function(e){var t=e.get()-n.get(),o=!r(t);return o&&n.set(e),o},update:function(){o.add(i),n.add(o),i.multiply(0)},useBaseMass:function(){return l(t)},useBaseSpeed:function(){return d(e)},useMass:l,useSpeed:d};return p}function S(n,e,t,r){var o=!1;return{constrain:function(i){if(!o&&n.reachedAny(t.get())&&n.reachedAny(e.get())){var u=n.reachedMin(e.get())?"min":"max",a=c(n[u]-e.get()),s=t.get()-e.get(),f=Math.min(a/50,.85);t.subtract(s*f),!i&&c(s)<10&&(t.set(n.constrain(t.get())),r.useSpeed(10).useMass(3))}},toggleActive:function(n){o=!n}}}function b(n,e,t,r,o){var i=v(-e+n,t[0]),u=r.map(i.constrain);return{snapsContained:function(){if(e<=n)return[i.max];if("keepSnaps"===o)return u;var t=function(){var n=u[0],e=l(u),t=u.lastIndexOf(n),r=u.indexOf(e)+1;return v(t,r)}(),r=t.min,c=t.max;return u.slice(r,c)}()}}function w(n,e,t,r,o){var i=v(t.min+e.measure(.1),t.max+e.measure(.1)),u=i.reachedMin,c=i.reachedMax;return{loop:function(e){if(function(n){return 1===n?c(r.get()):-1===n&&u(r.get())}(e)){var t=n*(-1*e);o.forEach((function(n){return n.add(t)}))}}}}function E(n){var e=n.max,t=n.length;return{get:function(n){return(n-e)/-t}}}function O(n,e,t,r,o,i){var u=n.startEdge,a=n.endEdge,s=o.map((function(n){return r[u]-n[u]})).map(t.measure).map((function(n){return-c(n)})),d=function(){var n=f(s,i).map((function(n){return n[0]})),r=f(o,i).map((function(n){return l(n)[a]-n[0][u]})).map(t.measure).map(c).map(e.measure);return n.map((function(n,e){return n+r[e]}))}();return{snaps:s,snapsAligned:d}}function A(n,e,t,r,o){var i=r.reachedAny,u=r.removeOffset,a=r.constrain;function s(n,e){return c(n)<c(e)?n:e}function f(e,r){var o=e,i=e+t,u=e-t;return n?r?c(s(o,1===r?i:u))*r:s(s(o,i),u):o}return{byDistance:function(t,r){var s=o.get()+t,d=function(t){var r=n?u(t):a(t);return{index:e.map((function(n){return n-r})).map((function(n){return f(n,0)})).map((function(n,e){return{diff:n,index:e}})).sort((function(n,e){return c(n.diff)-c(e.diff)}))[0].index,distance:r}}(s),l=d.index,p=d.distance,v=!n&&i(s);return!r||v?{index:l,distance:t}:{index:l,distance:t+f(e[l]-p,0)}},byIndex:function(n,t){return{index:n,distance:f(e[n]-o.get(),t)}},shortcut:f}}function M(n,e,t,r,o,i,u,c){var a=d(r),s=d(r).reverse(),f=function(){var n=o[0]-1;return v(p(s,n),"end")}().concat(function(){var n=e-o[0]-1;return v(p(a,n),"start")}());function l(n,e){return n.reduce((function(n,e){return n-r[e]}),e)}function p(n,e){return n.reduce((function(n,t){return l(n,e)>0?n.concat([t]):n}),[])}function v(n,e){var r="start"===e,o=r?-t:t,c=i.findSlideBounds([o]);return n.map((function(n){var e=r?0:-t,o=r?t:0,i=c.filter((function(e){return e.index===n}))[0][r?"end":"start"];return{point:i,getTarget:function(){return u.get()>i?e:o},index:n,location:-1}}))}return{canLoop:function(){return f.every((function(n){var t=n.index;return l(a.filter((function(n){return n!==t})),e)<=0}))},clear:function(){f.forEach((function(e){var t=e.index;c[t].style[n.startEdge]=""}))},loop:function(){f.forEach((function(e){var t=e.getTarget,r=e.location,o=e.index,i=t();i!==r&&(c[o].style[n.startEdge]=i+"%",e.location=i)}))},loopPoints:f}}function P(n,e,t){var r="x"===n.scroll?function(n){return"translate3d("+n+"%,0px,0px)"}:function(n){return"translate3d(0px,"+n+"%,0px)"},o=t.style,i=!1;return{clear:function(){o.transform=""},to:function(n){i||(o.transform=r(e.apply(n.get())))},toggleActive:function(n){i=!n}}}function T(n,e,t,r,o){var i,a=r.align,s=r.axis,f=r.direction,T=r.startIndex,k=r.inViewThreshold,B=r.loop,I=r.speed,z=r.dragFree,D=r.slidesToScroll,L=r.skipSnaps,N=r.containScroll,j=e.getBoundingClientRect(),C=t.map((function(n){return n.getBoundingClientRect()})),R=function(n){var e="rtl"===n?-1:1;return{apply:function(n){return n*e}}}(f),V=function(n,e){var t="y"===n?"y":"x";return{scroll:t,cross:"y"===n?"x":"y",startEdge:"y"===t?"top":"rtl"===e?"right":"left",endEdge:"y"===t?"bottom":"rtl"===e?"left":"right",measureSize:function(n){var e=n.width,r=n.height;return"x"===t?e:r}}}(s,f),H=(i=V.measureSize(j),{measure:function(n){return 0===i?0:n/i*100},totalPercent:100}),F=H.totalPercent,U=u(a,F),_=function(n,e,t,r,o){var i=n.measureSize,u=n.startEdge,a=n.endEdge,s=r.map(i);return{slideSizes:s.map(e.measure),slideSizesWithGaps:r.map((function(n,e,r){var i=e===p(r),c=window.getComputedStyle(l(t)),f=parseFloat(c.getPropertyValue("margin-"+a));return i?s[e]+(o?f:0):r[e+1][u]-n[u]})).map(e.measure).map(c)}}(V,H,t,C,B),G=_.slideSizes,W=_.slideSizesWithGaps,X=O(V,U,H,j,C,D),q=X.snaps,J=X.snapsAligned,Y=-l(q)+l(W),Z=b(F,Y,q,J,N).snapsContained,K=!B&&""!==N?Z:J,Q=function(n,e,t){return{limit:function(){var r=e[0],o=l(e);return v(t?r-n:o,r)}()}}(Y,K,B).limit,$=m(p(K),T,B),nn=$.clone(),en=d(t),tn=function(n){var e=0;function t(n,t){return function(){n===!!e&&t()}}function r(){e=window.requestAnimationFrame(n)}return{proceed:t(!0,r),start:t(!1,r),stop:t(!0,(function(){window.cancelAnimationFrame(e),e=0}))}}((function(){B||ln.scrollBounds.constrain(ln.dragHandler.pointerDown()),ln.scrollBody.seek(un).update();var n=ln.scrollBody.settle(un);n&&!ln.dragHandler.pointerDown()&&(ln.animation.stop(),o.emit("settle")),n||o.emit("scroll"),B&&(ln.scrollLooper.loop(ln.scrollBody.direction()),ln.slideLooper.loop()),ln.translate.to(on),ln.animation.proceed()})),rn=K[$.get()],on=x(rn),un=x(rn),cn=y(on,I,1),an=A(B,K,Y,Q,un),sn=function(n,e,t,r,o,i){function u(r){var u=r.distance,c=r.index!==e.get();u&&(n.start(),o.add(u)),c&&(t.set(e.get()),e.set(r.index),i.emit("select"))}return{distance:function(n,e){u(r.byDistance(n,e))},index:function(n,t){var o=e.clone().set(n);u(r.byIndex(o.get(),t))}}}(tn,$,nn,an,un,o),fn=function(n,e,t,r,o,i,u){var c=o.removeOffset,a=o.constrain,s=Math.min(Math.max(u,.01),.99),f=i?[0,e,-e]:[0],d=l(f,s);function l(e,o){var i=e||f,u=o||0,c=t.map((function(n){return n*u}));return i.reduce((function(e,o){var i=r.map((function(e,r){return{start:e-t[r]+c[r]+o,end:e+n-c[r]+o,index:r}}));return e.concat(i)}),[])}return{check:function(n,e){var t=i?c(n):a(n);return(e||d).reduce((function(n,e){var r=e.index,o=e.start,i=e.end;return-1===n.indexOf(r)&&o<t&&i>t?n.concat([r]):n}),[])},findSlideBounds:l}}(F,Y,G,q,Q,B,k),dn=h(V,R,n,un,z,function(n,e){var t,r;function o(n){return"undefined"!==typeof TouchEvent&&n instanceof TouchEvent}function i(n){return n.timeStamp}function u(e,t){var r="client"+("x"===(t||n.scroll)?"X":"Y");return(o(e)?e.touches[0]:e)[r]}return{isTouchEvent:o,pointerDown:function(n){return t=n,r=n,e.measure(u(n))},pointerMove:function(n){var o=u(n)-u(r),c=i(n)-i(t)>170;return r=n,c&&(t=n),e.measure(o)},pointerUp:function(n){if(!t||!r)return 0;var o=u(r)-u(t),a=i(n)-i(t),s=i(n)-i(r)>170,f=o/a;return a&&!s&&c(f)>.1?e.measure(f):0},readPoint:u}}(V,H),on,tn,sn,cn,an,$,o,B,L),ln={containerRect:j,slideRects:C,animation:tn,axis:V,direction:R,dragHandler:dn,eventStore:g(),pxToPercent:H,index:$,indexPrevious:nn,limit:Q,location:on,options:r,scrollBody:cn,scrollBounds:S(Q,on,un,cn),scrollLooper:w(Y,H,Q,on,[on,un]),scrollProgress:E(Q),scrollSnaps:K,scrollTarget:an,scrollTo:sn,slideLooper:M(V,F,Y,W,K,fn,on,t),slidesInView:fn,slideIndexes:en,target:un,translate:P(V,R,e)};return ln}var k={align:"center",axis:"x",containScroll:"",direction:"ltr",dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,slidesToScroll:1,speed:10,startIndex:0};function B(n,e,t){var r,o,i,u,c,a,s=function(){var n={};function e(e){return n[e]||[]}var t={emit:function(n){return e(n).forEach((function(e){return e(n)})),t},off:function(r,o){return n[r]=e(r).filter((function(n){return n!==o})),t},on:function(r,o){return n[r]=e(r).concat([o]),t}};return t}(),f=function(n,e){var t=0;return function(){window.clearTimeout(t),t=window.setTimeout(n,e)||0}}((function(){if(!v)return;var n=r.axis.measureSize(u.getBoundingClientRect());x!==n&&S();s.emit("resize")}),500),d=S,l=s.on,p=s.off,v=!1,m=Object.assign({},k,B.globalOptions),g=Object.assign({},m),x=0;function h(){var e="container"in n&&n.container,t="slides"in n&&n.slides;u="root"in n?n.root:n,c=e||u.children[0],a=t||[].slice.call(c.children),o=function(n){var e=getComputedStyle(n,":before").content;return{get:function(){try{return JSON.parse(e.slice(1,-1).replace(/\\/g,""))}catch(n){}return{}}}}(u)}function y(n,e){if(h(),m=Object.assign({},m,n),g=Object.assign({},m,o.get()),i=Object.assign([],e),(r=T(u,c,a,g,s)).eventStore.add(window,"resize",f),r.translate.to(r.location),x=r.axis.measureSize(u.getBoundingClientRect()),i.forEach((function(n){return n.init(A)})),g.loop){if(!r.slideLooper.canLoop())return b(),y({loop:!1},e);r.slideLooper.loop()}g.draggable&&c.offsetParent&&a.length&&r.dragHandler.addActivationEvents(),v||(setTimeout((function(){return s.emit("init")}),0),v=!0)}function S(n,e){if(v){var t=O(),r=Object.assign({startIndex:t},n);b(),y(r,e||i),s.emit("reInit")}}function b(){r.dragHandler.removeAllEvents(),r.animation.stop(),r.eventStore.removeAll(),r.translate.clear(),r.slideLooper.clear(),i.forEach((function(n){return n.destroy()}))}function w(n){var e=r[n?"target":"location"].get(),t=g.loop?"removeOffset":"constrain";return r.slidesInView.check(r.limit[t](e))}function E(n,e,t){r.scrollBody.useBaseMass().useSpeed(e?100:g.speed),v&&r.scrollTo.index(n,t||0)}function O(){return r.index.get()}var A={canScrollNext:function(){return r.index.clone().add(1).get()!==O()},canScrollPrev:function(){return r.index.clone().add(-1).get()!==O()},clickAllowed:function(){return r.dragHandler.clickAllowed()},containerNode:function(){return c},internalEngine:function(){return r},destroy:function(){v&&(b(),v=!1,s.emit("destroy"))},off:p,on:l,previousScrollSnap:function(){return r.indexPrevious.get()},reInit:d,rootNode:function(){return u},scrollNext:function(n){E(r.index.clone().add(1).get(),!0===n,-1)},scrollPrev:function(n){E(r.index.clone().add(-1).get(),!0===n,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnaps.map(r.scrollProgress.get)},scrollTo:E,selectedScrollSnap:O,slideNodes:function(){return a},slidesInView:w,slidesNotInView:function(n){var e=w(n);return r.slideIndexes.filter((function(n){return-1===e.indexOf(n)}))}};return y(e,t),A}function I(n,e){void 0===n&&(n={}),void 0===e&&(e=[]);var t=(0,r.useState)(),u=t[0],c=t[1],a=(0,r.useState)(),s=a[0],f=a[1],d=(0,r.useRef)(n),l=(0,r.useRef)(e),p=(0,r.useMemo)((function(){return o(d.current,n)||(d.current=n),d.current}),[d,n]),v=(0,r.useMemo)((function(){return function(n,e){if(n.length!==e.length)return!1;var t=i(n),r=i(e);return t.every((function(n,e){return o(n,r[e])}))}(l.current,e)||(l.current=e),l.current}),[l,e]);return(0,r.useEffect)((function(){if("undefined"!==typeof window&&window.document&&window.document.createElement&&s){B.globalOptions=I.globalOptions;var n=B(s,p,v);return c(n),function(){return n.destroy()}}c(void 0)}),[s,p,v,c]),[f,u]}B.globalOptions=void 0,I.globalOptions=void 0,e.Z=I}}]);