const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./streamLayerUtils-B48kgiiP.js","./utils-erQw4yUq.js","./index-BwifKPSf.js","./index-CiswRgqD.css","./originUtils-D69mHv66.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./jsonContext-DlOn-xW9.js","./saveAPIKeyUtils-M6hR6BBq.js","./createConnection-BVm2EIRH.js","./query-BZUZfaUy.js","./pbfQueryUtils-CYfq376F.js","./pbf-OBHzcRBV.js","./OptimizedGeometry-DLPswkPy.js","./OptimizedFeature-CXeSoBCN.js","./OptimizedFeatureSet-Blu9Ckm7.js"])))=>i.map(i=>d[i]);
import{ae as t,af as s,ag as I,cB as P,g1 as F,g2 as E,cq as O,dE as A,cr as D,d1 as k,dF as C,d2 as U,d3 as N,d4 as L,dH as V,cY as z,c9 as x,ai as G,e as p,cv as J,g3 as f,gp as M,ad as q,gq as W,au as g,eB as h,fW as B,g4 as Y,bl as H,gr as u,ax as Q,dP as Z,f_ as K,cz as X,cs as ee,bz as te,g5 as ie,g6 as se,g7 as re,d6 as oe,dO as v,gs as ne,gt as ae,g9 as le,ao as de,ga as pe,gb as ce,c_ as w,aC as ue,gc as me,d7 as he,ge as ye,cu as fe}from"./index-BwifKPSf.js";var y;let d=y=class extends P{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([s({type:Number,json:{write:!0}})],d.prototype,"age",void 0),t([s({type:Number,json:{write:!0}})],d.prototype,"ageReceived",void 0),t([s({type:Number,json:{write:!0}})],d.prototype,"displayCount",void 0),t([s({type:Number,json:{write:!0}})],d.prototype,"maxObservations",void 0),d=y=t([I("esri.layers.support.PurgeOptions")],d);const R=d,b=ye();function S(e,r){return new p("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}let i=class extends F(E(O(A(D(k(C(U(N(L(V(z(fe)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new R,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=x.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=G(async(r,o,a)=>{const{save:n,saveAs:l}=await g(()=>import("./streamLayerUtils-B48kgiiP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);switch(r){case u.SAVE:return n(this,o);case u.SAVE_AS:return l(this,a,o)}})}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(J).then(()=>this._fetchService(r))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,o){var n;r=r.layerDefinition||r;const a=(n=r.drawingInfo)==null?void 0:n.renderer;if(a){const l=M(a,r,o)||void 0;return l||q.getLogger(this).error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o}),l}return W(r,o)}async connect(e){const[{createConnection:r}]=await Promise.all([g(()=>import("./createConnection-BVm2EIRH.js"),__vite__mapDeps([8,2,3,9,10,11,12,13,14]),import.meta.url),this.load()]),o=this.geometryType?h.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:l=null,maxReconnectionAttempts:$=0,maxReconnectionInterval:j=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),c=r(this.parsedUrl,this.spatialReference,T,o,n,l,$,j,a??void 0),_=B([this.on("send-message-to-socket",m=>c.sendMessageToSocket(m)),this.on("send-message-to-client",m=>c.sendMessageToClient(m))]);return c.once("destroy",_.remove),c}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return Y(this,e)}createQuery(){const e=new H;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===e&&(o=a.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(u.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(u.SAVE_AS,r,e)}write(e,r){const o=r==null?void 0:r.messages;return this.webSocketUrl?(o==null||o.push(S(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,r):(o==null||o.push(S(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var r,o,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await Q(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((r=this.timeInfo)!=null&&r.trackIdField))throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(o=this.fields.find(l=>l.type==="oid"))==null?void 0:o.name;if(!n)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new Z({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),K(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),X(this,{origin:"service"})}};t([s({type:String})],i.prototype,"copyright",void 0),t([s({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([s({type:String})],i.prototype,"displayField",void 0),t([s({type:ee})],i.prototype,"elevationInfo",void 0),t([s({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([s(b.fields)],i.prototype,"fields",void 0),t([s(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([s({type:te,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([s({type:h.apiValues,json:{read:{reader:h.read}}})],i.prototype,"geometryType",void 0),t([s(ie)],i.prototype,"labelsVisible",void 0),t([s({type:[se],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:re},write:!0}})],i.prototype,"labelingInfo",void 0),t([s(oe)],i.prototype,"legendEnabled",void 0),t([s({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],i.prototype,"listMode",void 0),t([s({type:v})],i.prototype,"maxReconnectionAttempts",void 0),t([s({type:v})],i.prototype,"maxReconnectionInterval",void 0),t([s(ne)],i.prototype,"maxScale",void 0),t([s(ae)],i.prototype,"minScale",void 0),t([s({type:String})],i.prototype,"objectIdField",void 0),t([s({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],i.prototype,"outFields",void 0),t([s(le)],i.prototype,"popupEnabled",void 0),t([s({type:de,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([s({type:R})],i.prototype,"purgeOptions",void 0),t([s({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([s({types:pe,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:ce,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([w("service","renderer",["drawingInfo.renderer","defaultSymbol"]),w("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([s((()=>{const e=ue(me);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],i.prototype,"screenSizePerspectiveEnabled",void 0),t([s()],i.prototype,"sourceJSON",void 0),t([s({type:x,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([s({json:{read:!1}})],i.prototype,"type",void 0),t([s(he)],i.prototype,"url",void 0),t([s({type:Number})],i.prototype,"updateInterval",void 0),t([s({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([s({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const ve=i;export{ve as default};