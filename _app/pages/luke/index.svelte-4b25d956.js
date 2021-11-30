import{S as oe,i as ae,s as ne,e as g,k as B,c as k,a as y,n as F,d as b,b as n,O as Q,f as X,H as c,V as q,W as Y,X as le,Y as se,Z as re,L as ue,_ as $,$ as ie,t as de,T as ce,g as _e,a0 as fe,w as he,x as pe,u as me,a1 as ve,R as x,r as be,a2 as ge,I as ke}from"../../chunks/vendor-4d68294f.js";import{e as C}from"../../chunks/form-3181ac0d.js";function ee(j,e,t){const o=j.slice();return o[6]=e[t],o[7]=e,o[8]=t,o}function te(j,e){let t,o,p,O,f,_,E,i,a,h,d,m,N,M,I,s,r,l,T,D,R,P,H,U,L,A=ke,w,W,Z;function z(...v){return e[3](e[6],e[7],e[8],...v)}function G(){return e[4](e[6],e[7],e[8])}function J(){return e[5](e[6])}return{key:j,first:null,c(){t=g("div"),o=g("form"),p=g("input"),f=B(),_=g("button"),h=B(),d=g("form"),m=g("input"),M=B(),I=g("button"),r=B(),l=g("form"),T=g("button"),H=B(),this.h()},l(v){t=k(v,"DIV",{class:!0});var u=y(t);o=k(u,"FORM",{action:!0,method:!0});var S=y(o);p=k(S,"INPUT",{type:!0,name:!0,class:!0}),f=F(S),_=k(S,"BUTTON",{class:!0,"aria-label":!0}),y(_).forEach(b),S.forEach(b),h=F(u),d=k(u,"FORM",{class:!0,action:!0,method:!0});var V=y(d);m=k(V,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),M=F(V),I=k(V,"BUTTON",{class:!0,"aria-label":!0}),y(I).forEach(b),V.forEach(b),r=F(u),l=k(u,"FORM",{action:!0,method:!0});var K=y(l);T=k(K,"BUTTON",{class:!0,"aria-label":!0}),y(T).forEach(b),K.forEach(b),H=F(u),u.forEach(b),this.h()},h(){n(p,"type","hidden"),n(p,"name","done"),p.value=O=e[6].done?"":"true",n(p,"class","svelte-16tkvjn"),n(_,"class","toggle svelte-16tkvjn"),n(_,"aria-label",E="Mark todo as "+(e[6].done?"not done":"done")),n(o,"action",i="/todos/"+e[6].uid+".json?_method=patch"),n(o,"method","post"),n(m,"aria-label","Edit todo"),n(m,"type","text"),n(m,"name","text"),m.value=N=e[6].text,n(m,"class","svelte-16tkvjn"),n(I,"class","save svelte-16tkvjn"),n(I,"aria-label","Save todo"),n(d,"class","text svelte-16tkvjn"),n(d,"action",s="/todos/"+e[6].uid+".json?_method=patch"),n(d,"method","post"),n(T,"class","delete svelte-16tkvjn"),n(T,"aria-label","Delete todo"),T.disabled=D=e[6].pending_delete,n(l,"action",R="/todos/"+e[6].uid+".json?_method=delete"),n(l,"method","post"),n(t,"class","todo svelte-16tkvjn"),Q(t,"done",e[6].done),this.first=t},m(v,u){X(v,t,u),c(t,o),c(o,p),c(o,f),c(o,_),c(t,h),c(t,d),c(d,m),c(d,M),c(d,I),c(t,r),c(t,l),c(l,T),c(t,H),w=!0,W||(Z=[q(a=C.call(null,o,{pending:z,result:e[1]})),q(C.call(null,d,{result:e[1]})),q(P=C.call(null,l,{pending:G,result:J}))],W=!0)},p(v,u){e=v,(!w||u&1&&O!==(O=e[6].done?"":"true"))&&(p.value=O),(!w||u&1&&E!==(E="Mark todo as "+(e[6].done?"not done":"done")))&&n(_,"aria-label",E),(!w||u&1&&i!==(i="/todos/"+e[6].uid+".json?_method=patch"))&&n(o,"action",i),a&&Y(a.update)&&u&1&&a.update.call(null,{pending:z,result:e[1]}),(!w||u&1&&N!==(N=e[6].text)&&m.value!==N)&&(m.value=N),(!w||u&1&&s!==(s="/todos/"+e[6].uid+".json?_method=patch"))&&n(d,"action",s),(!w||u&1&&D!==(D=e[6].pending_delete))&&(T.disabled=D),(!w||u&1&&R!==(R="/todos/"+e[6].uid+".json?_method=delete"))&&n(l,"action",R),P&&Y(P.update)&&u&1&&P.update.call(null,{pending:G,result:J}),u&1&&Q(t,"done",e[6].done)},r(){L=t.getBoundingClientRect()},f(){le(t),A(),se(t,L)},a(){A(),A=re(t,L,ve,{duration:200})},i(v){w||(v&&ue(()=>{U||(U=$(t,x,{start:.7},!0)),U.run(1)}),w=!0)},o(v){v&&(U||(U=$(t,x,{start:.7},!1)),U.run(0)),w=!1},d(v){v&&b(t),v&&U&&U.end(),W=!1,ie(Z)}}}function je(j){let e,t,o,p,O,f,_,E,i,a=[],h=new Map,d,m,N,M=j[0];const I=s=>s[6].uid;for(let s=0;s<M.length;s+=1){let r=ee(j,M,s),l=I(r);h.set(l,a[s]=te(l,r))}return{c(){e=B(),t=g("div"),o=g("h1"),p=de("Todos"),O=B(),f=g("form"),_=g("input"),i=B();for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){ce('[data-svelte="svelte-181o7gf"]',document.head).forEach(b),e=F(s),t=k(s,"DIV",{class:!0});var l=y(t);o=k(l,"H1",{});var T=y(o);p=_e(T,"Todos"),T.forEach(b),O=F(l),f=k(l,"FORM",{class:!0,action:!0,method:!0});var D=y(f);_=k(D,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),D.forEach(b),i=F(l);for(let R=0;R<a.length;R+=1)a[R].l(l);l.forEach(b),this.h()},h(){document.title="Todos",n(_,"name","text"),n(_,"aria-label","Add todo"),n(_,"placeholder","+ tap to add a todo"),n(_,"class","svelte-16tkvjn"),n(f,"class","new svelte-16tkvjn"),n(f,"action","/todos.json"),n(f,"method","post"),n(t,"class","todos svelte-16tkvjn")},m(s,r){X(s,e,r),X(s,t,r),c(t,o),c(o,p),c(t,O),c(t,f),c(f,_),c(t,i);for(let l=0;l<a.length;l+=1)a[l].m(t,null);d=!0,m||(N=q(E=C.call(null,f,{result:j[2]})),m=!0)},p(s,[r]){if(E&&Y(E.update)&&r&1&&E.update.call(null,{result:s[2]}),r&3){M=s[0],be();for(let l=0;l<a.length;l+=1)a[l].r();a=fe(a,r,I,1,s,M,h,t,ge,te,null,ee);for(let l=0;l<a.length;l+=1)a[l].a();he()}},i(s){if(!d){for(let r=0;r<M.length;r+=1)pe(a[r]);d=!0}},o(s){for(let r=0;r<a.length;r+=1)me(a[r]);d=!1},d(s){s&&b(e),s&&b(t);for(let r=0;r<a.length;r+=1)a[r].d();m=!1,N()}}}const Oe=async({fetch:j})=>{const e=await j("/todos.json");if(e.ok)return{props:{todos:await e.json()}};const{message:t}=await e.json();return{error:new Error(t)}};function Ee(j,e,t){let{todos:o}=e;async function p(i){const a=await i.json();t(0,o=o.map(h=>h.uid===a.uid?a:h))}const O=async(i,a)=>{const h=await i.json();t(0,o=[...o,h]),a.reset()},f=(i,a,h,d)=>{t(0,a[h].done=!!d.get("done"),o)},_=(i,a,h)=>t(0,a[h].pending_delete=!0,o),E=i=>{t(0,o=o.filter(a=>a.uid!==i.uid))};return j.$$set=i=>{"todos"in i&&t(0,o=i.todos)},[o,p,O,f,_,E]}class ye extends oe{constructor(e){super();ae(this,e,Ee,je,ne,{todos:0})}}export{ye as default,Oe as load};
