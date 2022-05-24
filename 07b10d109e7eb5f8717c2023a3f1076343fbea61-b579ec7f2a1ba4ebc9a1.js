"use strict";(self.webpackChunkclowdr_site=self.webpackChunkclowdr_site||[]).push([[319],{9567:function(n,t,e){e.d(t,{n:function(){return x}});var i=e(9818),r=e(7294);function a(){return a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},a.apply(this,arguments)}function o(n){return n.sort((function(n,t){var e=n.compareDocumentPosition(t);if(e&Node.DOCUMENT_POSITION_FOLLOWING||e&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(e&Node.DOCUMENT_POSITION_PRECEDING||e&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function s(n,t,e){var i=n+1;return e&&i>=t&&(i=0),i}function u(n,t,e){var i=n-1;return e&&i<0&&(i=t),i}var d="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,l=function(){var n=this;this.descendants=new Map,this.register=function(t){var e;if(null!=t)return"object"==typeof(e=t)&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE?n.registerNode(t):function(e){n.registerNode(e,t)}},this.unregister=function(t){n.descendants.delete(t);var e=o(Array.from(n.descendants.keys()));n.assignIndex(e)},this.destroy=function(){n.descendants.clear()},this.assignIndex=function(t){n.descendants.forEach((function(n){var e=t.indexOf(n.node);n.index=e,n.node.dataset.index=n.index.toString()}))},this.count=function(){return n.descendants.size},this.enabledCount=function(){return n.enabledValues().length},this.values=function(){return Array.from(n.descendants.values()).sort((function(n,t){return n.index-t.index}))},this.enabledValues=function(){return n.values().filter((function(n){return!n.disabled}))},this.item=function(t){if(0!==n.count())return n.values()[t]},this.enabledItem=function(t){if(0!==n.enabledCount())return n.enabledValues()[t]},this.first=function(){return n.item(0)},this.firstEnabled=function(){return n.enabledItem(0)},this.last=function(){return n.item(n.descendants.size-1)},this.lastEnabled=function(){var t=n.enabledValues().length-1;return n.enabledItem(t)},this.indexOf=function(t){var e,i;return t&&null!=(e=null==(i=n.descendants.get(t))?void 0:i.index)?e:-1},this.enabledIndexOf=function(t){return null==t?-1:n.enabledValues().findIndex((function(n){return n.node.isSameNode(t)}))},this.next=function(t,e){void 0===e&&(e=!0);var i=s(t,n.count(),e);return n.item(i)},this.nextEnabled=function(t,e){void 0===e&&(e=!0);var i=n.item(t);if(i){var r=s(n.enabledIndexOf(i.node),n.enabledCount(),e);return n.enabledItem(r)}},this.prev=function(t,e){void 0===e&&(e=!0);var i=u(t,n.count()-1,e);return n.item(i)},this.prevEnabled=function(t,e){void 0===e&&(e=!0);var i=n.item(t);if(i){var r=u(n.enabledIndexOf(i.node),n.enabledCount()-1,e);return n.enabledItem(r)}},this.registerNode=function(t,e){if(t&&!n.descendants.has(t)){var i=o(Array.from(n.descendants.keys()).concat(t));null!=e&&e.disabled&&(e.disabled=!!e.disabled);var r=a({node:t,index:-1},e);n.descendants.set(t,r),n.assignIndex(i)}}};var c=(0,i.kr)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),f=c[0],v=c[1];function x(){return[f,function(){return v()},function(){return n=(0,r.useRef)(new l),d((function(){return function(){return n.current.destroy()}})),n.current;var n},function(n){return function(n){var t=v(),e=(0,r.useState)(-1),a=e[0],o=e[1],s=(0,r.useRef)(null);d((function(){return function(){s.current&&t.unregister(s.current)}}),[]),d((function(){if(s.current){var n=Number(s.current.dataset.index);a==n||Number.isNaN(n)||o(n)}}));var u=n?t.register(n):t.register;return{descendants:t,index:a,enabledIndex:t.enabledIndexOf(s.current),register:(0,i.lq)(u,s)}}(n)}]}},4202:function(n,t,e){e.d(t,{Mi:function(){return P},Qh:function(){return S},UO:function(){return b},Xc:function(){return H},uf:function(){return T}});var i=e(559),r=e(3971),a=e.n(r),o=e(6620),s=e(6373),u=e(7294);function d(n,t){if(null==n)return{};var e,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}function l(){return l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},l.apply(this,arguments)}var c={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},f={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},v={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},x={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},m={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function E(n){var t;switch(null!=(t=null==n?void 0:n.direction)?t:"right"){case"right":default:return v;case"left":return f;case"bottom":return m;case"top":return x}}var y={enter:{duration:.2,ease:c.easeOut},exit:{duration:.1,ease:c.easeIn}},h=function(n,t){return l({},n,{delay:(0,i.hj)(t)?t:null==t?void 0:t.enter})},p=function(n,t){return l({},n,{delay:(0,i.hj)(t)?t:null==t?void 0:t.exit})},O=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],N={exit:{height:{duration:.2,ease:c.ease},opacity:{duration:.3,ease:c.ease}},enter:{height:{duration:.3,ease:c.ease},opacity:{duration:.4,ease:c.ease}}},g={exit:function(n){var t,e,i=n.animateOpacity,r=n.startingHeight,a=n.transition,o=n.transitionEnd,s=n.delay;return l({},i&&{opacity:(e=r,null!=e&&parseInt(e.toString(),10)>0?1:0)},{height:r,transitionEnd:null==o?void 0:o.exit,transition:null!=(t=null==a?void 0:a.exit)?t:p(N.exit,s)})},enter:function(n){var t,e=n.animateOpacity,i=n.endingHeight,r=n.transition,a=n.transitionEnd,o=n.delay;return l({},e&&{opacity:1},{height:i,transitionEnd:null==a?void 0:a.enter,transition:null!=(t=null==r?void 0:r.enter)?t:h(N.enter,o)})}},b=u.forwardRef((function(n,t){var e=n.in,r=n.unmountOnExit,c=n.animateOpacity,f=void 0===c||c,v=n.startingHeight,x=void 0===v?0:v,m=n.endingHeight,E=void 0===m?"auto":m,y=n.style,h=n.className,p=n.transition,N=n.transitionEnd,b=d(n,O),I=u.useState(!1),T=I[0],w=I[1];u.useEffect((function(){var n=setTimeout((function(){w(!0)}));return function(){return clearTimeout(n)}}),[]),(0,i.ZK)({condition:Boolean(x>0&&r),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});var C=parseFloat(x.toString())>0,S={startingHeight:x,endingHeight:E,animateOpacity:f,transition:T?p:{enter:{duration:0}},transitionEnd:a()(N,{exit:r?void 0:{display:C?"block":"none"}})},M=!r||e,_=e||r?"enter":"exit";return u.createElement(o.M,{initial:!1,custom:S},M&&u.createElement(s.E.div,l({ref:t},b,{className:(0,i.cx)("chakra-collapse",h),style:l({overflow:"hidden",display:"block"},y),custom:S,variants:g,initial:!!r&&"exit",animate:_,exit:"exit"})))}));i.Ts&&(b.displayName="Collapse");var I=["unmountOnExit","in","className","transition","transitionEnd","delay"],T={initial:"exit",animate:"enter",exit:"exit",variants:{enter:function(n){var t,e=void 0===n?{}:n,i=e.transition,r=e.transitionEnd,a=e.delay;return{opacity:1,transition:null!=(t=null==i?void 0:i.enter)?t:h(y.enter,a),transitionEnd:null==r?void 0:r.enter}},exit:function(n){var t,e=void 0===n?{}:n,i=e.transition,r=e.transitionEnd,a=e.delay;return{opacity:0,transition:null!=(t=null==i?void 0:i.exit)?t:p(y.exit,a),transitionEnd:null==r?void 0:r.exit}}}},w=u.forwardRef((function(n,t){var e=n.unmountOnExit,r=n.in,a=n.className,c=n.transition,f=n.transitionEnd,v=n.delay,x=d(n,I),m=r||e?"enter":"exit",E=!e||r&&e,y={transition:c,transitionEnd:f,delay:v};return u.createElement(o.M,{custom:y},E&&u.createElement(s.E.div,l({ref:t,className:(0,i.cx)("chakra-fade",a),custom:y},T,{animate:m},x)))}));i.Ts&&(w.displayName="Fade");var C=["unmountOnExit","in","reverse","initialScale","className","transition","transitionEnd","delay"],S={initial:"exit",animate:"enter",exit:"exit",variants:{exit:function(n){var t,e=n.reverse,i=n.initialScale,r=n.transition,a=n.transitionEnd,o=n.delay;return l({opacity:0},e?{scale:i,transitionEnd:null==a?void 0:a.exit}:{transitionEnd:l({scale:i},null==a?void 0:a.exit)},{transition:null!=(t=null==r?void 0:r.exit)?t:p(y.exit,o)})},enter:function(n){var t,e=n.transitionEnd,i=n.transition,r=n.delay;return{opacity:1,scale:1,transition:null!=(t=null==i?void 0:i.enter)?t:h(y.enter,r),transitionEnd:null==e?void 0:e.enter}}}},M=u.forwardRef((function(n,t){var e=n.unmountOnExit,r=n.in,a=n.reverse,c=void 0===a||a,f=n.initialScale,v=void 0===f?.95:f,x=n.className,m=n.transition,E=n.transitionEnd,y=n.delay,h=d(n,C),p=!e||r&&e,O=r||e?"enter":"exit",N={initialScale:v,reverse:c,transition:m,transitionEnd:E,delay:y};return u.createElement(o.M,{custom:N},p&&u.createElement(s.E.div,l({ref:t,className:(0,i.cx)("chakra-offset-slide",x)},S,{animate:O,custom:N},h)))}));i.Ts&&(M.displayName="ScaleFade");var _=["direction","style","unmountOnExit","in","className","transition","transitionEnd","delay"],k={exit:{duration:.15,ease:c.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},D={exit:function(n){var t,e=n.direction,i=n.transition,r=n.transitionEnd,a=n.delay;return l({},E({direction:e}).exit,{transition:null!=(t=null==i?void 0:i.exit)?t:p(k.exit,a),transitionEnd:null==r?void 0:r.exit})},enter:function(n){var t,e=n.direction,i=n.transitionEnd,r=n.transition,a=n.delay;return l({},E({direction:e}).enter,{transition:null!=(t=null==r?void 0:r.enter)?t:h(k.enter,a),transitionEnd:null==i?void 0:i.enter})}},P=u.forwardRef((function(n,t){var e=n.direction,r=void 0===e?"right":e,a=n.style,c=n.unmountOnExit,f=n.in,v=n.className,x=n.transition,m=n.transitionEnd,y=n.delay,h=d(n,_),p=E({direction:r}),O=Object.assign({position:"fixed"},p.position,a),N=!c||f&&c,g=f||c?"enter":"exit",b={transitionEnd:m,transition:x,direction:r,delay:y};return u.createElement(o.M,{custom:b},N&&u.createElement(s.E.div,l({},h,{ref:t,initial:"exit",className:(0,i.cx)("chakra-slide",v),animate:g,exit:"exit",custom:b,variants:D,style:O})))}));i.Ts&&(P.displayName="Slide");var j=["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"],H={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(n){var t,e=n.offsetX,i=n.offsetY,r=n.transition,a=n.transitionEnd,o=n.delay;return{opacity:0,x:e,y:i,transition:null!=(t=null==r?void 0:r.exit)?t:p(y.exit,o),transitionEnd:null==a?void 0:a.exit}},enter:function(n){var t,e=n.transition,i=n.transitionEnd,r=n.delay;return{opacity:1,x:0,y:0,transition:null!=(t=null==e?void 0:e.enter)?t:h(y.enter,r),transitionEnd:null==i?void 0:i.enter}},exit:function(n){var t,e=n.offsetY,i=n.offsetX,r=n.transition,a=n.transitionEnd,o=n.reverse,s=n.delay,u={x:i,y:e};return l({opacity:0,transition:null!=(t=null==r?void 0:r.exit)?t:p(y.exit,s)},o?l({},u,{transitionEnd:null==a?void 0:a.exit}):{transitionEnd:l({},u,null==a?void 0:a.exit)})}}},R=u.forwardRef((function(n,t){var e=n.unmountOnExit,r=n.in,a=n.reverse,c=void 0===a||a,f=n.className,v=n.offsetX,x=void 0===v?0:v,m=n.offsetY,E=void 0===m?8:m,y=n.transition,h=n.transitionEnd,p=n.delay,O=d(n,j),N=!e||r&&e,g=r||e?"enter":"exit",b={offsetX:x,offsetY:E,reverse:c,transition:y,transitionEnd:h,delay:p};return u.createElement(o.M,{custom:b},N&&u.createElement(s.E.div,l({ref:t,className:(0,i.cx)("chakra-offset-slide",f),custom:b},H,{animate:g},O)))}));i.Ts&&(R.displayName="SlideFade")}}]);
//# sourceMappingURL=07b10d109e7eb5f8717c2023a3f1076343fbea61-b579ec7f2a1ba4ebc9a1.js.map