const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/meshFeatureSet-DK4H757P.js","assets/index-Dgi-qfGm.js","assets/index-C3lbDvih.css","assets/Mesh-BCZ13mUO.js","assets/georeference-DPAEnbOD.js","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-CSKppSlJ.js","assets/computeTranslationToOriginAndRotation-BKyqyq9c.js","assets/DoubleArray-01bTxH85.js","assets/quat-CHDiDLcy.js","assets/quatf64-Bdb9ZJJK.js","assets/meshVertexSpaceUtils-DknkjqJy.js","assets/MeshLocalVertexSpace-CkCmLIz4.js","assets/vec3-BHTd8Tss.js","assets/BufferView-Bc2ca4ta.js","assets/imageUtils-30IbmwAd.js","assets/earcut-D0QSYZWJ.js","assets/Indices-Ub4xo3FC.js","assets/deduplicate-mZMPOnFp.js","assets/plane-D577xSNi.js","assets/triangle-DLpaBcVU.js","assets/Util-B5hc9sxD.js","assets/ObjectStack-DtNwNwt1.js","assets/lineSegment-Cb8rBzCl.js","assets/basicInterfaces-GbxEOYtk.js","assets/VertexAttribute-BlT9lbVY.js","assets/External-BeCuoErj.js","assets/infoFor3D-DsOdlPuA.js","assets/executeRelationshipQuery-9GnqQvSG.js","assets/query-BbwUDTKJ.js","assets/pbfQueryUtils-BffHeZV_.js","assets/pbf-CMl9ZUY6.js","assets/OptimizedGeometry-DLPswkPy.js","assets/OptimizedFeature-CXeSoBCN.js","assets/OptimizedFeatureSet-Blu9Ckm7.js","assets/queryAttachments-D5CtFuNX.js","assets/AttachmentInfo-BFT4YRK-.js","assets/executeTopFeaturesQuery-BA84V-Qu.js","assets/queryTopFeatures-DMIRMjdF.js","assets/executeForTopIds-CsGzELXR.js","assets/executeForTopExtents-CCh1gN_k.js","assets/executeForTopCount-DXqvTjTN.js"])))=>i.map(i=>d[i]);
import{bk as y,bl as _,bz as T,ae as n,af as l,fC as S,ag as A,aA as w,b7 as N,aB as Q,an as P,fD as d,au as u,e as j}from"./index-Dgi-qfGm.js";import{u as f,i as h}from"./infoFor3D-DsOdlPuA.js";import{n as q,s as L}from"./executeForIds-D9tNK0wY.js";import{x as z}from"./query-BbwUDTKJ.js";import{a as J}from"./executeQueryJSON-CJ90EH6x.js";import{n as C}from"./executeQueryPBF-DA8Cl6SX.js";async function $(e,t,r){const o=y(e),s=await z(o,_.from(t),{...r}),i=s.data.extent;return!i||isNaN(i.xmin)||isNaN(i.ymin)||isNaN(i.xmax)||isNaN(i.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:T.fromJSON(i)}}let a=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return N(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var c;const r=this._normalizeQuery(e),o=((c=e.outStatistics)==null?void 0:c[0])!=null,s=Q("featurelayer-pbf-statistics"),i=!o||s;let p;if(this.pbfSupported&&i)try{p=await C(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&i||(p=await J(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return P.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(u(()=>import("./meshFeatureSet-DK4H757P.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27])),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return q(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return $(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return L(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([u(()=>import("./index-Dgi-qfGm.js").then(s=>s.og),__vite__mapDeps([1,2])),u(()=>import("./executeRelationshipQuery-9GnqQvSG.js"),__vite__mapDeps([28,1,2,29,30,31,32,33,34]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([u(()=>import("./index-Dgi-qfGm.js").then(s=>s.og),__vite__mapDeps([1,2])),u(()=>import("./executeRelationshipQuery-9GnqQvSG.js"),__vite__mapDeps([28,1,2,29,30,31,32,33,34]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await d(u(()=>import("./queryAttachments-D5CtFuNX.js"),__vite__mapDeps([35,1,2,29,30,31,32,33,34,36])),t),i=y(this.url);return s(i,await(this.queryAttachmentsSupported?r(i,e,t):o(i,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(u(()=>import("./executeTopFeaturesQuery-BA84V-Qu.js"),__vite__mapDeps([37,1,2,38,29,30,31,32,33,34])),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(u(()=>import("./executeForTopIds-CsGzELXR.js"),__vite__mapDeps([39,1,2,38,29,30,31,32,33,34])),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(u(()=>import("./executeForTopExtents-CCh1gN_k.js"),__vite__mapDeps([40,1,2,38,29,30,31,32,33,34])),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(u(()=>import("./executeForTopCount-DXqvTjTN.js"),__vite__mapDeps([41,1,2,38,29,30,31,32,33,34])),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?S.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,i=f("model/gltf-binary",o)??h("glb",o),p=f("model/gltf+json",o)??h("gltf",o);for(const c of s){if(c===i){t.formatOf3DObjects=c;break}c!==p||t.formatOf3DObjects||(t.formatOf3DObjects=c)}if(!t.formatOf3DObjects)throw new j("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:c,originY:m,originZ:D,translationX:b,translationY:x,translationZ:F,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:I,rotationDeg:v}=r.transformFieldRoles;t.outFields.push(c,m,D,b,x,F,O,g,V,E,R,I,v)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};n([l({type:S})],a.prototype,"dynamicDataSource",void 0),n([l()],a.prototype,"fieldsIndex",void 0),n([l()],a.prototype,"gdbVersion",void 0),n([l()],a.prototype,"infoFor3D",void 0),n([l({readOnly:!0})],a.prototype,"parsedUrl",null),n([l()],a.prototype,"pbfSupported",void 0),n([l()],a.prototype,"queryAttachmentsSupported",void 0),n([l()],a.prototype,"sourceSpatialReference",void 0),n([l({type:String})],a.prototype,"url",void 0),a=n([A("esri.tasks.QueryTask")],a);const G=a;export{G as x};
