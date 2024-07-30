const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingSupport-DBnZseWN.js","assets/index-Dgi-qfGm.js","assets/index-C3lbDvih.css","assets/infoFor3D-DsOdlPuA.js"])))=>i.map(i=>d[i]);
import{ae as r,af as s,ag as b,fu as _,ai as $,an as w,bz as O,e as f,bw as j,eU as J,aB as N,eB as I,ad as m,g0 as R,dH as P,g1 as q,g2 as T,cq as k,dE as D,cr as G,d1 as Z,d2 as z,d3 as C,d4 as Q,c9 as E,cv as L,g3 as g,f_ as B,b7 as v,au as V,g4 as M,bl as c,dM as U,et as A,dP as W,d5 as H,g5 as K,g6 as X,g7 as Y,d6 as ee,g8 as te,g9 as re,ao as se,ga as ie,gb as oe,gc as ne,gd as ae,d7 as le,ge as ue,cu as de}from"./index-Dgi-qfGm.js";import{l as pe}from"./clientSideDefaults-BhBboOq2.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";let u=class extends _{constructor(){super(...arguments),this.type="geojson",this.refresh=$(async e=>{await this.load();const{extent:t,timeExtent:o}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(o=>w.fromJSON(o))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(o=>({count:o.count,extent:O.fromJSON(o.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,o=[],n=[],l=[];if(e.addFeatures)for(const a of e.addFeatures)o.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)l.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:o,updates:l,deletes:n}).then(({extent:a,timeExtent:d,featureEditResults:h})=>(this.sourceJSON.extent=a,d&&(this.sourceJSON.timeInfo.timeExtent=[d.start,d.end]),this._createEditsResult(h)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,o=this._geometryForSerialization(e);return o?{geometry:o.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?j.fromExtent(t.extent):t}async _startWorker(e){this._connection=await J("GeoJSONSourceWorker",{strategy:N("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:o,hasZ:n,geometryType:l,objectIdField:a,url:d,timeInfo:h,customParameters:F}=this.layer,S=this.layer.originOf("spatialReference")==="defaults",x={url:d,customParameters:F,fields:t&&t.map(y=>y.toJSON()),geometryType:I.toJSON(l),hasZ:n,objectIdField:a,timeInfo:h?h.toJSON():null,spatialReference:S?null:o&&o.toJSON()},p=await this._connection.invoke("load",x,{signal:e});for(const y of p.warnings)m.getLogger(this.layer).warn("#load()",`$${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});p.featureErrors.length&&m.getLogger(this.layer).warn("#load()",`Encountered ${p.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:p.featureErrors}),this.sourceJSON=p.layerDefinition,this.capabilities=pe(this.sourceJSON.hasZ,!0)}};r([s()],u.prototype,"capabilities",void 0),r([s()],u.prototype,"type",void 0),r([s({constructOnly:!0})],u.prototype,"layer",void 0),r([s()],u.prototype,"sourceJSON",void 0),u=r([b("esri.layers.graphics.sources.GeoJSONSource")],u);const ce=ue();let i=class extends R(P(q(T(k(D(G(Z(z(C(Q(de))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new u({layer:this}),this.spatialReference=E.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(L).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),B(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?v(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=v(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:o}=await V(()=>import("./editingSupport-DBnZseWN.js"),__vite__mapDeps([0,1,2,3]));await this.load();const n=await o(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return M(this,e)}createQuery(){var l;const e=new c,t=(l=this.capabilities)==null?void 0:l.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:o,timeExtent:n}=this;return e.timeExtent=o!=null&&n!=null?n.offset(-o.value,o.unit):n||null,e}getFieldDomain(e,t){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),t)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([s({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"capabilities",null),r([s({type:String})],i.prototype,"copyright",void 0),r([s({readOnly:!0})],i.prototype,"createQueryVersion",null),r([s(U("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),r([s({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),r([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),r([s({type:String})],i.prototype,"displayField",void 0),r([s({type:Boolean})],i.prototype,"editingEnabled",void 0),r([s(A)],i.prototype,"elevationInfo",void 0),r([s({type:[W],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],i.prototype,"fields",void 0),r([s(ce.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([s({type:O,json:{name:"extent"}})],i.prototype,"fullExtent",void 0),r([s({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],i.prototype,"geometryType",void 0),r([s({type:Boolean})],i.prototype,"hasZ",void 0),r([s(H)],i.prototype,"id",void 0),r([s({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),r([s(K)],i.prototype,"labelsVisible",void 0),r([s({type:[X],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Y},write:!0}})],i.prototype,"labelingInfo",void 0),r([s(ee)],i.prototype,"legendEnabled",void 0),r([s({type:["show","hide"]})],i.prototype,"listMode",void 0),r([s({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],i.prototype,"objectIdField",void 0),r([s(te)],i.prototype,"opacity",void 0),r([s({type:["GeoJSON"]})],i.prototype,"operationalLayerType",void 0),r([s({readOnly:!0})],i.prototype,"parsedUrl",null),r([s(re)],i.prototype,"popupEnabled",void 0),r([s({type:se,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([s({types:ie,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:oe}}}})],i.prototype,"renderer",null),r([s(ne)],i.prototype,"screenSizePerspectiveEnabled",void 0),r([s({readOnly:!0})],i.prototype,"source",void 0),r([s({type:E})],i.prototype,"spatialReference",void 0),r([s({type:[ae]})],i.prototype,"templates",void 0),r([s()],i.prototype,"title",void 0),r([s({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),r([s(le)],i.prototype,"url",null),i=r([b("esri.layers.GeoJSONLayer")],i);const me=i;export{me as default};
