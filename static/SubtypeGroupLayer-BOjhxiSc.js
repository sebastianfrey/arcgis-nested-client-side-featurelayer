const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/featureLayerUtils-Bx_RU4b5.js","static/index-DtvgboMu.js","static/index-ueSTxurB.css","static/originUtils-D69mHv66.js","static/multiOriginJSONSupportUtils-C0wm8_Yw.js","static/utils-DU3n5OQq.js","static/jsonContext-DscppOuo.js","static/saveAPIKeyUtils-C37pg3iO.js","static/fetchService-C25mEDmW.js","static/requestPresets-DLAOxYhd.js","static/FeatureLayerSource-UQigeIT-.js","static/meshVertexSpaceUtils-BevDQ-LR.js","static/MeshLocalVertexSpace-B2KaTD3y.js","static/vec3-C6br4HzL.js","static/External-DlUddwJ0.js","static/infoFor3D-DsOdlPuA.js","static/editingSupport-Dv9IGj2Z.js","static/clientSideDefaults-Crx2T4eS.js","static/QueryEngineCapabilities-CTDe3LlQ.js","static/QueryTask-D0hNjYn8.js","static/executeForIds-DnHjN8xQ.js","static/query-BulPY6V3.js","static/pbfQueryUtils-DwRkZ7t0.js","static/pbf-DsFaPwK1.js","static/OptimizedGeometry-DLPswkPy.js","static/OptimizedFeature-CXeSoBCN.js","static/OptimizedFeatureSet-Blu9Ckm7.js","static/executeQueryJSON-B2kospI4.js","static/executeQueryPBF--6YzAiI3.js","static/featureConversionUtils-V8UKYvtu.js"])))=>i.map(i=>d[i]);
import{gu as Y,d4 as R,cY as k,cZ as W,g3 as x,aC as F,dW as Z,ad as X,aq as C,e as g,g4 as ee,gv as N,al as L,bl as M,ae as i,af as s,dN as te,gw as re,g5 as ie,g6 as se,g7 as ne,d6 as ae,gt as oe,gs as le,g9 as ue,ao as de,c_ as $,gd as Q,ag as H,gx as pe,gy as ye,gz as ce,ge as U,gA as he,gB as ge,gC as be,fu as fe,gD as me,gE as ve,cq as we,dE as Fe,cr as Se,d1 as Ie,dF as $e,d2 as Oe,d3 as Ee,dH as je,dG as Te,ah as A,ai as _e,ak as Ae,fk as Ce,cv as Le,fv as xe,gF as Pe,b7 as Ge,bd as qe,gG as Ve,gH as De,gI as Re,gJ as ke,fD as Ne,au as P,gK as Me,gL as Qe,dK as He,gM as Ue,gN as Be,gO as Je,gP as ze,gQ as Ke,gR as Ye,gr as j,dL as We,f_ as Ze,gS as Xe,d5 as et,fY as tt,cu as rt}from"./index-DtvgboMu.js";const B={key:"type",base:pe,errorContext:"renderer",typeMap:{simple:C,"unique-value":ye,"class-breaks":ce}},G=U(),q=Y({types:B});let it=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function st(e){return new C({symbol:nt(e)})}function nt(e){switch(e){case"point":case"multipoint":return be.clone();case"polyline":return ge.clone();case"polygon":case"multipatch":return he.clone();default:return null}}function at(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function J(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(n=>n.code===e)}function ot(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},o=J(e,t);if(o!=null){const{defaultValues:l}=o;for(const u in l)n[u]=l[u]}return n[t.subtypeField]=e,new Q({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}const z="esri.layers.support.SubtypeSublayer";let a=class extends R(k(W(fe))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${it++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return x(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:n,parent:o}=this;let l;if(n){l=[];let u=0;n.forEach(({name:y,alias:c,editable:f,visible:m})=>{var O;if(!m)return;const p=(O=o==null?void 0:o.fields)==null?void 0:O.find(S=>S.name===y);if(!p)return;const b={name:y};let w=!1;c!==p.alias&&(b.alias=c,w=!0),f!==p.editable&&(b.editable=f,w=!0),l.push(b),w&&u++}),u===0&&l.length===n.length&&(l=null)}else l=F(e);l!=null&&l.length&&Z(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e==null?void 0:e.fields;if(!e||!(n!=null&&n.length))return null;const{subtypes:o,subtypeField:l}=e,u=o==null?void 0:o.find(m=>m.code===r),y=u==null?void 0:u.defaultValues,c=u==null?void 0:u.domains,f=[];for(const m of n){const p=m.clone(),{name:b}=p,w=t==null?void 0:t.find(E=>E.name===b);if(p.visible=!t||!!w,w){const{alias:E,editable:K}=w;E&&(p.alias=E),K===!1&&(p.editable=!1)}const O=(y==null?void 0:y[b])??null;p.defaultValue=b===l?r:O;const S=(c==null?void 0:c[b])??null;p.domain=b===l?null:S?S.type==="inherited"?p.domain:S.clone():null,f.push(p)}return f}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||X.getLogger(z).error(v("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){x(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?st(e.geometryType):null}readRendererFromService(e,t,r){var y,c,f;if(t.type==="Table")return null;const n=(y=t.drawingInfo)==null?void 0:y.renderer,o=q(n,t,r);let l;const{subtypeCode:u}=this;if(u!=null&&at(o,t.subtypeField)){const m=(c=o.uniqueValueInfos)==null?void 0:c.find(({value:p})=>(p=typeof p=="number"?String(p):p)===String(u));m&&(l=new C({symbol:m.symbol}))}else(o==null?void 0:o.type)!=="simple"||(f=o.visualVariables)!=null&&f.length||(l=o);return l}readRenderer(e,t,r){var l,u,y;const n=(u=(l=t==null?void 0:t.layerDefinition)==null?void 0:l.drawingInfo)==null?void 0:u.renderer;return n?((y=n.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:q(n,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}get subtypeField(){var e;return(e=this.parent)==null?void 0:e.subtypeField}readTemplatesFromService(e,t){return[ot(this.subtypeCode,t)]}readTitleFromService(e,t){const r=J(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw v("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:n}=this;if(!n)throw v("updateAttachment");if(e.getAttribute(n.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return n.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw v("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw v("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:o}=this;if(r){const{displayField:l,editFieldsInfo:u,objectIdField:y}=r;t={displayField:l,editFieldsInfo:u,fields:n,objectIdField:y,title:o}}return ee(t,e)}createQuery(){if(!this.parent)throw v("createQuery");const e=N(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=L(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw v("queryAttachments");const n=e.clone();return n.where=V(n.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw v("queryFeatures");const n=M.from(e)??r.createQuery();return e!=null&&(n.where=V(n.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),i([s({json:{write:{ignoreOrigin:!0}}})],a.prototype,"charts",void 0),i([s({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],a.prototype,"editingEnabled",void 0),i([s({type:Boolean,readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"elevationInfo",null),i([s({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],a.prototype,"fieldOverrides",void 0),i([te("fieldOverrides")],a.prototype,"writeFieldOverrides",null),i([s({...G.fields,readOnly:!0,json:{read:!1}})],a.prototype,"fields",null),i([s(G.fieldsIndex)],a.prototype,"fieldsIndex",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"floorInfo",null),i([s({type:re,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],a.prototype,"formTemplate",void 0),i([s({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"geometryType",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),i([s(I(F(ie)))],a.prototype,"labelsVisible",void 0),i([s({type:[se],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:ne},write:{ignoreOrigin:!0}}})],a.prototype,"labelingInfo",void 0),i([s({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"layerType",void 0),i([s(I(F(ae)))],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide"]})],a.prototype,"listMode",void 0),i([s((()=>{const e=F(oe);return e.json.origins.service.read=!1,I(e)})())],a.prototype,"minScale",void 0),i([s((()=>{const e=F(le);return e.json.origins.service.read=!1,I(e)})())],a.prototype,"maxScale",void 0),i([s({readOnly:!0})],a.prototype,"effectiveScaleRange",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"objectIdField",null),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],a.prototype,"opacity",void 0),i([s({clonable:!1})],a.prototype,"parent",void 0),i([s(I(F(ue)))],a.prototype,"popupEnabled",void 0),i([s({type:de,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],a.prototype,"popupTemplate",void 0),i([s({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),i([s({types:B,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],a.prototype,"renderer",null),i([$("service","renderer",["drawingInfo.renderer","subtypeField","type"])],a.prototype,"readRendererFromService",null),i([$("renderer",["layerDefinition.drawingInfo.renderer"])],a.prototype,"readRenderer",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"spatialReference",null),i([s({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"subtypeCode",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"subtypeField",null),i([s({type:[Q],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],a.prototype,"templates",void 0),i([$("service","templates",["geometryType","subtypeField","subtypes","type"])],a.prototype,"readTemplatesFromService",null),i([s({type:String,json:{write:{ignoreOrigin:!0}}})],a.prototype,"title",void 0),i([$("service","title",["subtypes"])],a.prototype,"readTitleFromService",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"url",null),i([s({readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",null),i([s({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],a.prototype,"visible",void 0),a=i([H(z)],a);const V=(e,t,r)=>{const n=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,l=e??"";return n.test(l)?l.replace(n,o):L(o,l)},v=e=>new g(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=a,h="SubtypeGroupLayer",lt="esri.layers.SubtypeGroupLayer";function D(e,t){return new g("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=U();let d=class extends me(ve(we(Fe(Se(Ie($e(Oe(Ee(R(je(Te(k(rt))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(A.ofType(T)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=_e(async(t,r,n)=>{const{save:o,saveAs:l}=await P(()=>import("./featureLayerUtils-Bx_RU4b5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));switch(t){case j.SAVE:return o(this,r);case j.SAVE_AS:return l(this,n,r)}}),this.addHandles(Ae(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),Ce))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(Le).then(async()=>{if(!this.url)throw new g("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new g("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>xe(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Pe(this)}get parsedUrl(){const e=Ge(this.url);return e!=null&&this.layerId!=null&&(e.path=qe(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Ve(this.url,t):t}async addAttachment(e,t){return De(this,e,t,h)}async updateAttachment(e,t,r){return Re(this,e,t,r,h)}async applyEdits(e,t){return ke(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Ne(P(()=>import("./FeatureLayerSource-UQigeIT-.js"),__vite__mapDeps([10,1,2,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=N(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=L(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Me(this,e,t,h)}async fetchRecomputedExtents(e){return Qe(this,e,h)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return He(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Ue(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),n=M.from(e)??r.createQuery(),o=n.outFields??[];o.includes(this.subtypeField)||(o.push(this.subtypeField),n.outFields=o);const l=await r.source.queryFeatures(n,t);if(l!=null&&l.features)for(const u of l.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return l}async queryObjectIds(e,t){return Be(this,e,t,h)}async queryFeatureCount(e,t){return Je(this,e,t,h)}async queryExtent(e,t){return ze(this,e,t,h)}async queryRelatedFeatures(e,t){return Ke(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return Ye(this,e,t,h)}async save(e){return this._debouncedSaveOperations(j.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(j.SAVE_AS,t,e)}write(e,t){var l;const{origin:r,layerContainerType:n,messages:o}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return o==null||o.push(D(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return o==null||o.push(D(this,"using a non-table source cannot be written to tables in web maps")),null;return(l=this.sublayers)!=null&&l.length?super.write(e,t):(o==null||o.push(new g("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&We(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new g("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new g("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),Ze(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Xe(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(n=>n.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)})],"sublayers-owner"))}};i([s({readOnly:!0})],d.prototype,"createQueryVersion",null),i([s({readOnly:!0})],d.prototype,"editingEnabled",null),i([s({readOnly:!0})],d.prototype,"effectiveEditingEnabled",null),i([s({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],d.prototype,"fields",void 0),i([s(_.fieldsIndex)],d.prototype,"fieldsIndex",void 0),i([s(et)],d.prototype,"id",void 0),i([s({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],d.prototype,"listMode",void 0),i([s({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],d.prototype,"operationalLayerType",void 0),i([s(_.outFields)],d.prototype,"outFields",void 0),i([s({readOnly:!0})],d.prototype,"parsedUrl",null),i([s({clonable:!1})],d.prototype,"source",null),i([s({type:A.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:o})=>{const l=new T({subtypeCode:o});return l.read(t,r),l});return new(A.ofType(T))(n)}}}},name:"layers",write:{ignoreOrigin:!0}}})],d.prototype,"sublayers",void 0),i([s({type:tt})],d.prototype,"timeInfo",void 0),i([s({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],d.prototype,"title",void 0),i([$("service","title",["name"])],d.prototype,"readTitleFromService",null),i([s({json:{read:!1}})],d.prototype,"type",void 0),d=i([H(lt)],d);const dt=d;export{dt as default};