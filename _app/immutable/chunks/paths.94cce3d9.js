import{n as c,s as p}from"./scheduler.7a274a43.js";const e=[];function d(n,l=c){let o;const i=new Set;function r(t){if(p(n,t)&&(n=t,o)){const b=!e.length;for(const s of i)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(o=l(r,f)||c),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var a;const h=((a=globalThis.__sveltekit_wnotn6)==null?void 0:a.base)??"/faria-portfolio";var u;const w=((u=globalThis.__sveltekit_wnotn6)==null?void 0:u.assets)??h;export{w as a,h as b,d as w};
