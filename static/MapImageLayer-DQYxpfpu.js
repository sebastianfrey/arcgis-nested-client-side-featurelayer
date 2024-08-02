import{cq as I,dE as $,cr as T,dF as O,d2 as E,d3 as M,d4 as F,d1 as L,dG as R,dH as P,cv as j,di as v,b$ as f,dI as J,ax as b,bz as N,dJ as U,dK as q,dL as _,e as x,ab as A,ae as s,af as n,dM as S,c_ as k,dN as z,d7 as V,ag as G,cu as H,dO as K}from"./index-HVMkvd8u.js";import{i as Z}from"./scaleUtils-D3YqdHr4.js";import{m as B,f as C,Y as D}from"./SublayersOwner-BgFNwVb6.js";import{m as W}from"./ExportImageParameters-BepDcexx.js";import{t as Y}from"./imageBitmapUtils-D9jvOPUl.js";import{e as w}from"./sublayerUtils-yJyAlunA.js";import"./QueryTask-D7NsX7iF.js";import"./infoFor3D-DsOdlPuA.js";import"./executeForIds-CELFfL6M.js";import"./query-DTZ5DNyZ.js";import"./pbfQueryUtils-CD_VrDn_.js";import"./pbf-Cm--Ztw4.js";import"./OptimizedGeometry-DLPswkPy.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./executeQueryJSON-BBYGlU9L.js";import"./executeQueryPBF-GuI5uTHV.js";import"./featureConversionUtils-D8FbZ-gp.js";import"./floorFilterUtils-DZ5C6FQv.js";let r=class extends I($(T(B(C(O(E(M(F(L(R(P(H)))))))))))){constructor(...e){super(...e),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}load(e){const i=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(j).then(()=>this._fetchService(i))),Promise.resolve(this)}readImageFormat(e,i){const l=i.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,i,l,t){var h,d,y;if(!this.loaded||!e)return;const a=e.slice().reverse().flatten(({sublayers:o})=>o&&o.toArray().reverse()).toArray();let p=!1;if((h=this.capabilities)!=null&&h.operations.supportsExportMap&&((y=(d=this.capabilities)==null?void 0:d.exportMap)!=null&&y.supportsDynamicLayers)){const o=v(t.origin);if(o===f.PORTAL_ITEM){const g=this.createSublayersForOrigin("service").sublayers;p=w(a,g,f.SERVICE)}else if(o>f.PORTAL_ITEM){const g=this.createSublayersForOrigin("portal-item");p=w(a,g.sublayers,v(g.origin))}}const m=[],u={writeSublayerStructure:p,...t};let c=p;a.forEach(o=>{const g=o.write({},u);m.push(g),c=c||o.originOf("visible")==="user"}),m.some(o=>Object.keys(o).length>1)&&(i.layers=m),c&&(i.visibleLayers=a.filter(o=>o.visible).map(o=>o.id))}createExportImageParameters(e,i,l,t){const a=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const p=new W({layer:this,floors:t==null?void 0:t.floors,scale:Z({extent:e,width:i})*a}),m=p.toJSON();p.destroy();const u=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},c=e==null?void 0:e.spatialReference,h=J(c);m.dpi*=a;const d={};if(t!=null&&t.timeExtent){const{start:y,end:o}=t.timeExtent.toJSON();d.time=y&&o&&y===o?""+y:`${y??"null"},${o??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(d.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:i+","+l,...m,...u,...d}}async fetchImage(e,i,l,t){const{data:a}=await this._fetchImage("image",e,i,l,t);return a}async fetchImageBitmap(e,i,l,t){const{data:a,url:p}=await this._fetchImage("blob",e,i,l,t);return Y(a,p,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const i={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await b(this.url,i),{extent:t,fullExtent:a,timeExtent:p}=l,m=t||a;return{fullExtent:m&&N.fromJSON(m),timeExtent:p&&U.fromJSON({start:p[0],end:p[1]})}}loadAll(){return q(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return _(this,e)}async _fetchImage(e,i,l,t,a){var u,c,h;const p={responseType:e,signal:(a==null?void 0:a.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(i,l,t,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},m=this.parsedUrl.path+"/export";if(((u=p.query)==null?void 0:u.dynamicLayers)!=null&&!((h=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&h.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:d}=await b(m,p);return{data:d,url:m}}catch(d){throw A(d)?d:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${m}`,{error:d})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:i,ssl:l}=await b(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl})}};s([n(S("dateFieldsTimeReference"))],r.prototype,"dateFieldsTimeZone",void 0),s([n({type:Boolean})],r.prototype,"datesInUnknownTimezone",void 0),s([n()],r.prototype,"dpi",void 0),s([n()],r.prototype,"gdbVersion",void 0),s([n()],r.prototype,"imageFormat",void 0),s([k("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),s([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],r.prototype,"imageMaxHeight",void 0),s([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],r.prototype,"imageMaxWidth",void 0),s([n()],r.prototype,"imageTransparency",void 0),s([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],r.prototype,"isReference",void 0),s([n({json:{read:!1,write:!1}})],r.prototype,"labelsVisible",void 0),s([n({type:["ArcGISMapServiceLayer"]})],r.prototype,"operationalLayerType",void 0),s([n({json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),s([n(S("preferredTimeReference"))],r.prototype,"preferredTimeZone",void 0),s([n()],r.prototype,"sourceJSON",void 0),s([n({json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),s([z("sublayers",{layers:{type:[D]},visibleLayers:{type:[K]}})],r.prototype,"writeSublayers",null),s([n({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),s([n({json:{read:!1},readOnly:!0,value:"map-image"})],r.prototype,"type",void 0),s([n(V)],r.prototype,"url",void 0),r=s([G("esri.layers.MapImageLayer")],r);const fe=r;export{fe as default};