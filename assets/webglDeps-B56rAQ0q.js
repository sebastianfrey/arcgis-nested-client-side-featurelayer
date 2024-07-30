import{r as c}from"./Program-Rd5vkBaE.js";import{h as g,x as y,s as j}from"./Program-Rd5vkBaE.js";import{t as m}from"./NestedMap-DgiGbX8E.js";import{a as F,o as O,e as P}from"./ProgramTemplate-DVh3D2Qr.js";import{m as C}from"./Texture-BWlNGwKD.js";import{fl as G}from"./index-Dgi-qfGm.js";import"./enums-CYMvjYBC.js";let d=class{constructor(e){this._rctx=e,this._store=new m}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,r,n){const o=this._store.get(e,t);if(o!=null)return o.ref(),o;const s=new c(this._rctx,e,t,r,n);return s.ref(),this._store.set(e,t,s),s}get test(){let e=0;return this._store.forEach(t=>t.forEach(r=>e+=r.hasGLName?2:1)),{cachedWebGLProgramObjects:e}}};function p(f){const{options:e,value:t}=f;return typeof e[t]=="number"}function $(f){let e="";for(const t in f){const r=f[t];if(typeof r=="boolean")r&&(e+=`#define ${t}
`);else if(typeof r=="number")e+=`#define ${t} ${r.toFixed()}
`;else if(typeof r=="object")if(p(r)){const{value:n,options:o,namespace:s}=r,i=s?`${s}_`:"";for(const a in o)e+=`#define ${i}${a} ${o[a].toFixed()}
`;e+=`#define ${t} ${i}${n}
`}else{const n=r.options;let o=0;for(const s in n)e+=`#define ${n[s]} ${(o++).toFixed()}
`;e+=`#define ${t} ${n[r.value]}
`}}return e}export{g as BufferObject,y as FramebufferObject,c as Program,d as ProgramCache,j as Renderbuffer,F as ShaderCompiler,C as Texture,O as VertexArrayObject,G as createContext,P as createProgram,$ as glslifyDefineMap};
