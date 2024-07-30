const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./knowledgeGraphService-CYyeV9ME.js","./index-BwifKPSf.js","./index-CiswRgqD.css","./GraphQueryStreaming-Bg3Vg9GL.js"])))=>i.map(i=>d[i]);
import{b5 as b,au as G,ay as J,c0 as Q,c1 as V,c2 as K,c9 as I,b4 as M,fe as P,fg as U,fh as j}from"./index-BwifKPSf.js";import{a as T,b as p,r as f,x as B,d as E,G as y,a9 as C,v as L,N as W,U as x,q as O,E as q,X as k,k as X,t as Y,aa as z,ab as A,ac as H}from"./arcadeUtils-UFZYkSIm.js";import{l as Z}from"./portalUtils-HohUaEIu.js";import{p as $,n as tt}from"./project-D1qMnRAC.js";import{a as nt,m as et,t as rt,p as at,c as it}from"./GraphQueryStreaming-Bg3Vg9GL.js";import"./TimeOnly-BhnwppLi.js";import"./ImmutableArray-BlMso3qf.js";import"./number-DVt8TMgu.js";import"./featureConversionUtils-CykNFg4A.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-DLPswkPy.js";let c=null;async function ot(t){const n=J.geometryServiceUrl??"";if(!n){Q()||await V();for(const e of t)e.container[e.indexer]=K(e.container[e.indexer],I.WGS84);return}const r=t.map(e=>e.container[e.indexer]),i=new $({geometries:r,outSpatialReference:I.WGS84}),s=await tt(n,i);for(let e=0;e<s.length;e++){const a=t[e];a.container[a.indexer]=s[e]}}async function D(t,n){const r=new M({portal:t,id:n});return await r.load(),c===null&&(c=await G(()=>import("./knowledgeGraphService-CYyeV9ME.js").then(i=>i.k),__vite__mapDeps([0,1,2,3]),import.meta.url)),await c.fetchKnowledgeGraph(r.url)}function v(t,n,r,i,s){if(t===null)return null;if(y(t)||q(t))return t;if(k(t)||k(t))return t.toJSDate();if(X(t))return t.toStorageFormat();if(Y(t))return t.toStorageString();if(z(t)){const e={};for(const a of t.keys())e[a]=v(t.field(a),n,r,i,s),e[a]instanceof P&&s.push({container:e,indexer:a});return e}if(x(t)){const e=t.map(a=>v(a,n,r,i,s));for(let a=0;a<e.length;a++)e[a]instanceof P&&s.push({container:e,indexer:a});return e}if(A(t))return t.spatialReference.isWGS84?t:t.spatialReference.isWebMercator&&n?U(t):t}function st(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return j(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new p(n,f.WrongSpatialReference,null)}function S(t,n){if(!t)return null;const r={};for(const i in t)r[i]=g(t[i],n);return r}function g(t,n){return t===null?null:x(t)?t.map(r=>g(r,n)):t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:S(t.properties,n)}:t instanceof rt?{graphType:"object",properties:S(t.properties,n)}:t instanceof at?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:S(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(r=>g(r,n)):null}:A(t)?st(t,n):y(t)||q(t)||H(t)?t:null}function St(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,r){return t.standardFunctionAsync(n,r,(i,s,e)=>{var m,d;if(T(e,2,2,n,r),e[0]===null)throw new p(n,f.PortalRequired,r);if(e[0]instanceof B){const u=E(e[1]);let h=null;return h=(m=n.services)!=null&&m.portal?n.services.portal:b.getDefault(),D(Z(e[0],h),u)}if(y(e[0])===!1)throw new p(n,f.InvalidParameter,r);const a=E(e[0]);return D(((d=n.services)==null?void 0:d.portal)??b.getDefault(),a)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,r){return t.standardFunctionAsync(n,r,async(i,s,e)=>{var _;T(e,2,4,n,r);const a=e[0];if(!C(a))throw new p(n,f.InvalidParameter,r);const m=e[1];if(!y(m))throw new p(n,f.InvalidParameter,r);c===null&&(c=await G(()=>import("./knowledgeGraphService-CYyeV9ME.js").then(o=>o.k),__vite__mapDeps([0,1,2,3]),import.meta.url));let d=null;const u=L(e[2],null);if(!(u instanceof W||u===null))throw new p(n,f.InvalidParameter,r);if(u){let o=[];d=v(u,!0,!1,n,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await ot(o)}const h=new nt({openCypherQuery:m,bindParameters:d});(((_=a==null?void 0:a.serviceDefinition)==null?void 0:_.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=n.spatialReference);const F=(await c.executeQueryStreaming(a,h)).resultRowsStream.getReader(),R=[];try{for(;;){const{done:o,value:l}=await F.read();if(o)break;if(x(l))for(const w of l)R.push(g(w,n));else{const w=[];for(const N of l)w.push(g(l[N],n));R.push(w)}}}catch(o){throw o}return W.convertJsonToArcade(R,O(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{St as registerFunctions};
