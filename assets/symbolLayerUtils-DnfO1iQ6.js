const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/objectResourceUtils-Bpx1XoFq.js","assets/devEnvironmentUtils-Blrp8lZ5.js","assets/index-Dgi-qfGm.js","assets/index-C3lbDvih.css","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-CSKppSlJ.js","assets/BufferView-Bc2ca4ta.js","assets/vec3-BHTd8Tss.js","assets/DefaultMaterial_COLOR_GAMMA-UGUaS605.js","assets/enums-CYMvjYBC.js","assets/quat-CHDiDLcy.js","assets/quatf64-Bdb9ZJJK.js","assets/resourceUtils-DRnisJ7h.js","assets/basicInterfaces-GbxEOYtk.js","assets/Indices-Ub4xo3FC.js","assets/NestedMap-DgiGbX8E.js","assets/requestImageUtils-B3xIjd-u.js","assets/orientedBoundingBox-BPK3fdum.js","assets/computeTranslationToOriginAndRotation-BKyqyq9c.js","assets/plane-D577xSNi.js","assets/triangle-DLpaBcVU.js","assets/Util-B5hc9sxD.js","assets/ObjectStack-DtNwNwt1.js","assets/lineSegment-Cb8rBzCl.js","assets/VertexAttribute-BlT9lbVY.js","assets/Texture-BWlNGwKD.js","assets/InterleavedLayout-CZiWVlpn.js","assets/types-D0PSWh4d.js","assets/OrderIndependentTransparency-D0wfjx-a.js","assets/sphere-B6eInFkc.js","assets/BindType-BmZEZMMh.js","assets/symbolColorUtils-B6wa5MkG.js","assets/doublePrecisionUtils-B0owpBza.js","assets/RenderState-DaVlEYWY.js"])))=>i.map(i=>d[i]);
import{eY as d,e as n,ax as v,au as y,eZ as c,cd as p,e_ as w,cS as l}from"./index-Dgi-qfGm.js";let s=f();function f(){return new d(50)}function g(){s=f()}async function x(r,i){var o,t;if((o=r.resource)!=null&&o.href)return b(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return i!=null?[i,i]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function b(r){return v(r,{responseType:"image"}).then(i=>i.data)}async function T(r,i=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await y(()=>import("./objectResourceUtils-Bpx1XoFq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33])),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const o=p(w(r.resource.primitive));if(i!=null)for(let e=0;e<o.length;e++)o[e]*=i;return c(o,l())}export{g as clearBoundingBoxCache,x as computeIconLayerResourceSize,T as computeObjectLayerResourceSize};
