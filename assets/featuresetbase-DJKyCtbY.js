import{m as Ie}from"./TimeOnly-qUj2N5HZ.js";import{a as E,t as De,k as X,B as A,N as v,b as m,r as y,G as P,d as x,l as Te,q as ue,X as de,v as L,S as M,U as N,H as G,x as be,Q as k,I as Ee,h as O,D as xe,y as Ne,A as B,K as Y,V as Ae,P as q}from"./arcadeUtils-BHP-Iym0.js";import{e as ce,j as Se,q as me,f as Le,c as K,a as Ce,b as ve,d as Pe,g as ee,k as Ze,F as $e,A as Re,B as U,h as Ue,i as _,L as C,I as ne}from"./featureSetUtils-ClgOOdqz.js";import{t as ke}from"./ImmutableArray-BlMso3qf.js";import{l as Me}from"./portalUtils-CoS8uMRq.js";import{u as Oe,D as ye}from"./SpatialFilter-59zFQDmI.js";import{b5 as pe,ff as ze,dR as te,dP as j}from"./index-Dgi-qfGm.js";import{x as T}from"./WhereClause-BjBzrd05.js";import"./number-DvBTghRp.js";import"./featureConversionUtils-WV8fztvE.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-DLPswkPy.js";import"./SubtypeGroupLayer-DZqYdxlO.js";import"./infoFor3D-DsOdlPuA.js";import"./executeQueryJSON-CJ90EH6x.js";import"./query-BbwUDTKJ.js";import"./pbfQueryUtils-BffHeZV_.js";import"./pbf-CMl9ZUY6.js";import"./executeQueryPBF-DA8Cl6SX.js";import"./AttachmentInfo-BFT4YRK-.js";import"./executeForIds-D9tNK0wY.js";import"./geometryEngineAsync-BobPxTq5.js";function He(s,n,i,c){if(c.length===1){if(N(c[0]))return q(s,c[0],-1);if(k(c[0]))return q(s,c[0].toArray(),-1)}return q(s,c,-1)}async function ae(s,n,i){const c=s.getVariables();if(c.length>0){const F=[];for(let t=0;t<c.length;t++){const r={name:c[t]};F.push(await n.evaluateIdentifier(i,r))}const e={};for(let t=0;t<c.length;t++)e[c[t]]=F[t];return s.parameters=e,s}return s}function d(s,n,i=null){for(const c in s)if(c.toLowerCase()===n.toLowerCase())return s[c];return i}function we(s){if(s===null)return null;const n={type:d(s,"type",""),name:d(s,"name","")};if(n.type==="range")n.range=d(s,"range",[]);else{n.codedValues=[];for(const i of d(s,"codedValues",[]))n.codedValues.push({name:d(i,"name",""),code:d(i,"code",null)})}return n}function ie(s){if(s===null)return null;const n={},i=d(s,"wkt",null);i!==null&&(n.wkt=i);const c=d(s,"wkid",null);return c!==null&&(n.wkid=c),n}function he(s){if(s===null)return null;const n={hasZ:d(s,"hasz",!1),hasM:d(s,"hasm",!1)},i=d(s,"spatialreference",null);i&&(n.spatialReference=ie(i));const c=d(s,"x",null);if(c!==null)return n.x=c,n.y=d(s,"y",null),n.hasZ&&(n.z=d(s,"z",null)),n.hasM&&(n.m=d(s,"m",null)),n;const F=d(s,"rings",null);if(F!==null)return n.rings=F,n;const e=d(s,"paths",null);if(e!==null)return n.paths=e,n;const t=d(s,"points",null);if(t!==null)return n.points=t,n;for(const r of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const u=d(s,r,null);u!==null&&(n[r]=u)}return n}function We(s,n){for(const i of n)if(i===s)return!0;return!1}function je(s){return!!s.layerDefinition&&!!s.featureSet&&We(s.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&N(s.layerDefinition.fields)!==!1&&N(s.featureSet.features)!==!1}function z(s){return(s==null?void 0:s.toLowerCase())==="utc"?"UTC":(s==null?void 0:s.toLowerCase())==="unknown"?"Unknown":s}function yn(s){s.mode==="async"&&(s.functions.timezone=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{var u,p;if(E(e,1,2,n,i),De(e[0])||X(e[0]))return"Unknown";if(A(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].datesInUnknownTimezone?z("unknown"):z(e[0].dateFieldsTimeZone);if(!(e[1]instanceof v)||e[1].hasField("type")===!1)throw new m(n,y.InvalidParameter,i);const o=e[1].field("type");if(P(o)===!1)throw new m(n,y.InvalidParameter,i);switch(x(o).toLowerCase()){case"preferredtimezone":return z(e[0].preferredTimeZone);case"editfieldsinfo":return z(((u=e[0].editFieldsInfo)==null?void 0:u.timeZone)??null);case"timeinfo":return z(((p=e[0].timeInfo)==null?void 0:p.timeZone)??null);case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return z(e[0].fieldTimeZone(x(e[1].field("fieldname"))))}throw new m(n,y.InvalidParameter,i)}const t=Te(e[0],ue(n));if(t===null)return null;const r=t.timeZone;return r==="system"?Ie.systemTimeZoneCanonicalName:r.toLowerCase()==="utc"?"UTC":r.toLowerCase()==="unknown"?"Unknown":r})},s.functions.sqltimestamp=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{E(e,1,3,n,i);const t=e[0];if(de(t)){if(e.length===1)return t.toSQLWithKeyword();if(e.length===2)return t.changeTimeZone(x(e[1])).toSQLWithKeyword();throw new m(n,y.InvalidParameter,i)}if(X(t))return t.toSQLWithKeyword();if(A(t)){if(e.length!==3)throw new m(n,y.InvalidParameter,i);await t.load();const r=x(e[1]);if(X(e[2]))return e[2].toSQLWithKeyword();if(de(e[2])===!1)throw new m(n,y.InvalidParameter,i);const u=t.fieldTimeZone(r);return u===null?e[2].toSQLWithKeyword():e[2].changeTimeZone(u).toSQLWithKeyword()}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"sqltimestamp",min:2,max:4}),s.functions.featuresetbyid=function(n,i){return s.standardFunctionAsync(n,i,(c,F,e)=>{if(E(e,2,4,n,i),e[0]instanceof ce){const t=x(e[1]);let r=L(e[2],null);const u=M(L(e[3],!0));if(r===null&&(r=["*"]),N(r)===!1)throw new m(n,y.InvalidParameter,i);return e[0].featureSetById(t,u,r)}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"featuresetbyid",min:2,max:4}),s.functions.getfeatureset=function(n,i){return s.standardFunctionAsync(n,i,(c,F,e)=>{if(E(e,1,2,n,i),G(e[0])){let t=L(e[1],"datasource");return t===null&&(t="datasource"),t=x(t).toLowerCase(),Se(e[0].fullSchema(),t,n.lrucache,n.interceptor,n.spatialReference)}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"getfeatureset",min:1,max:2}),s.functions.featuresetbyportalitem=function(n,i){return s.standardFunctionAsync(n,i,(c,F,e)=>{var o,a;if(E(e,2,5,n,i),e[0]===null)throw new m(n,y.PortalRequired,i);if(e[0]instanceof be){const l=x(e[1]),f=x(e[2]);let I=L(e[3],null);const D=M(L(e[4],!0));if(I===null&&(I=["*"]),N(I)===!1)throw new m(n,y.InvalidParameter,i);let w=null;return w=(o=n.services)!=null&&o.portal?n.services.portal:pe.getDefault(),w=Me(e[0],w),me(l,f,n.spatialReference,I,D,w,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new m(n,y.PortalRequired,i);const t=x(e[0]),r=x(e[1]);let u=L(e[2],null);const p=M(L(e[3],!0));if(u===null&&(u=["*"]),N(u)===!1)throw new m(n,y.InvalidParameter,i);return me(t,r,n.spatialReference,u,p,((a=n.services)==null?void 0:a.portal)??pe.getDefault(),n.lrucache,n.interceptor)})},s.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),s.functions.featuresetbyname=function(n,i){return s.standardFunctionAsync(n,i,(c,F,e)=>{if(E(e,2,4,n,i),e[0]instanceof ce){const t=x(e[1]);let r=L(e[2],null);const u=M(L(e[3],!0));if(r===null&&(r=["*"]),N(r)===!1)throw new m(n,y.InvalidParameter,i);return e[0].featureSetByName(t,u,r)}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"featuresetbyname",min:2,max:4}),s.functions.featureset=function(n,i){return s.standardFunction(n,i,(c,F,e)=>{E(e,1,1,n,i);let t=e[0];const r={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(t))t=JSON.parse(t),t.layerDefinition!==void 0?(r.layerDefinition=t.layerDefinition,r.featureSet=t.featureSet,t.layerDefinition.spatialReference&&(r.layerDefinition.spatialReference=t.layerDefinition.spatialReference)):(r.featureSet.features=t.features,r.featureSet.geometryType=t.geometryType,r.layerDefinition.geometryType=r.featureSet.geometryType,r.layerDefinition.objectIdField=t.objectIdFieldName??"",r.layerDefinition.typeIdField=t.typeIdFieldName,r.layerDefinition.globalIdField=t.globalIdFieldName,r.layerDefinition.fields=t.fields,t.spatialReference&&(r.layerDefinition.spatialReference=t.spatialReference));else{if(!(e[0]instanceof v))throw new m(n,y.InvalidParameter,i);{t=JSON.parse(e[0].castToText(!0));const u=d(t,"layerdefinition");if(u!==null){r.layerDefinition.geometryType=d(u,"geometrytype",""),r.featureSet.geometryType=r.layerDefinition.geometryType,r.layerDefinition.globalIdField=d(u,"globalidfield",""),r.layerDefinition.objectIdField=d(u,"objectidfield",""),r.layerDefinition.typeIdField=d(u,"typeidfield",""),r.layerDefinition.hasZ=d(u,"hasz",!1)===!0,r.layerDefinition.hasM=d(u,"hasm",!1)===!0;const p=d(u,"spatialreference",null);p&&(r.layerDefinition.spatialReference=ie(p));for(const a of d(u,"fields",[])){const l={name:d(a,"name",""),alias:d(a,"alias",""),type:d(a,"type",""),nullable:d(a,"nullable",!0),editable:d(a,"editable",!0),length:d(a,"length",null),domain:we(d(a,"domain"))};r.layerDefinition.fields.push(l)}const o=d(t,"featureset",null);if(o){const a={};for(const l of r.layerDefinition.fields)a[l.name.toLowerCase()]=l.name;for(const l of d(o,"features",[])){const f={},I=d(l,"attributes",{});for(const D in I)f[a[D.toLowerCase()]]=I[D];r.featureSet.features.push({attributes:f,geometry:he(d(l,"geometry",null))})}}}else{r.layerDefinition.hasZ=d(t,"hasz",!1)===!0,r.layerDefinition.hasM=d(t,"hasm",!1)===!0,r.layerDefinition.geometryType=d(t,"geometrytype",""),r.featureSet.geometryType=r.layerDefinition.geometryType,r.layerDefinition.objectIdField=d(t,"objectidfieldname",""),r.layerDefinition.typeIdField=d(t,"typeidfieldname","");const p=d(t,"spatialreference",null);p&&(r.layerDefinition.spatialReference=ie(p));let o=d(t,"fields",null);if(N(o))for(const f of o){const I={name:d(f,"name",""),alias:d(f,"alias",""),type:d(f,"type",""),nullable:d(f,"nullable",!0),editable:d(f,"editable",!0),length:d(f,"length",null),domain:we(d(f,"domain"))};r.layerDefinition.fields.push(I)}else o=null,r.layerDefinition.fields=o;const a={};for(const f of r.layerDefinition.fields)a[f.name.toLowerCase()]=f.name;let l=d(t,"features",null);if(N(l))for(const f of l){const I={},D=d(f,"attributes",{});for(const w in D)I[a[w.toLowerCase()]]=D[w];r.featureSet.features.push({attributes:I,geometry:he(d(f,"geometry",null))})}else l=null,r.featureSet.features=l}}}if(je(r)===!1)throw new m(n,y.InvalidParameter,i);return r.layerDefinition.geometryType||(r.layerDefinition.geometryType="esriGeometryNull"),Le.create(r,n.spatialReference)})},s.signatures.push({name:"featureset",min:1,max:1}),s.functions.filter=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{if(E(e,2,2,n,i),N(e[0])||k(e[0])){const t=[];let r=e[0];r instanceof ke&&(r=r.toArray());let u=null;if(!Ee(e[1]))throw new m(n,y.InvalidParameter,i);u=e[1].createFunction(n);for(const p of r){const o=u(p);ze(o)?await o===!0&&t.push(p):o===!0&&t.push(p)}return t}if(A(e[0])){const t=await e[0].load(),r=T.create(e[1],t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),u=r.getVariables();if(u.length>0){const p=[];for(let a=0;a<u.length;a++){const l={name:u[a]};p.push(await s.evaluateIdentifier(n,l))}const o={};for(let a=0;a<u.length;a++)o[u[a]]=p[a];return r.parameters=o,new K({parentfeatureset:e[0],whereclause:r})}return new K({parentfeatureset:e[0],whereclause:r})}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"filter",min:2,max:2}),s.functions.orderby=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{if(E(e,2,2,n,i),A(e[0])){const t=new Ce(e[1]);return new ve({parentfeatureset:e[0],orderbyclause:t})}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"orderby",min:2,max:2}),s.functions.top=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{if(E(e,2,2,n,i),A(e[0]))return new Pe({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return O(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,O(e[1]));if(k(e[0]))return O(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,O(e[1]));throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"top",min:2,max:2}),s.functions.first=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{if(E(e,1,1,n,i),A(e[0])){const t=await e[0].first(c.abortSignal);if(t!==null){const r=xe.createFromGraphicLikeObject(t.geometry,t.attributes,e[0],n.timeZone);return r._underlyingGraphic=t,r}return t}return N(e[0])?e[0].length===0?null:e[0][0]:k(e[0])?e[0].length()===0?null:e[0].get(0):null})},s.signatures.push({name:"first",min:1,max:1}),s.functions.attachments=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{E(e,1,2,n,i);const t={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof v){if(e[1].hasField("minsize")&&(t.minsize=O(e[1].field("minsize"))),e[1].hasField("metadata")&&(t.returnMetadata=M(e[1].field("metadata"))),e[1].hasField("maxsize")&&(t.maxsize=O(e[1].field("maxsize"))),e[1].hasField("types")){const r=Ne(e[1].field("types"),!1);r.length>0&&(t.types=r)}}else if(e[1]!==null)throw new m(n,y.InvalidParameter,i)}if(G(e[0])){let r=e[0]._layer;return r instanceof te&&(r=ee(r,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),r===null?[]:A(r)===!1?[]:(await r.load(),r.queryAttachments(e[0].field(r.objectIdField),t.minsize,t.maxsize,t.types,t.returnMetadata))}if(e[0]===null)return[];throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"attachments",min:1,max:2}),s.functions.featuresetbyrelationshipname=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{E(e,2,4,n,i);const t=e[0],r=x(e[1]);let u=L(e[2],null);const p=M(L(e[3],!0));if(u===null&&(u=["*"]),N(u)===!1)throw new m(n,y.InvalidParameter,i);if(e[0]===null)return null;if(!G(e[0]))throw new m(n,y.InvalidParameter,i);let o=t._layer;if(o instanceof te&&(o=ee(o,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),o===null||A(o)===!1)return null;o=await o.load();const a=o.relationshipMetaData().filter(w=>w.name===r);if(a.length===0)return null;if(a[0].relationshipTableId!==void 0&&a[0].relationshipTableId!==null&&a[0].relationshipTableId>-1)return Ze(o,a[0],t.field(o.objectIdField),o.spatialReference,u,p,n.lrucache,n.interceptor);let l=o.serviceUrl();if(!l)return null;l=l.charAt(l.length-1)==="/"?l+a[0].relatedTableId.toString():l+"/"+a[0].relatedTableId.toString();const f=await $e(l,o.spatialReference,u,p,n.lrucache,n.interceptor);await f.load();let I=f.relationshipMetaData();if(I=I.filter(w=>w.id===a[0].id),t.hasField(a[0].keyField)===!1||t.field(a[0].keyField)===null){const w=await o.getFeatureByObjectId(t.field(o.objectIdField),[a[0].keyField]);if(w){const b=T.create(I[0].keyField+"= @id",f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC);return b.parameters={id:w.attributes[a[0].keyField]},f.filter(b)}return new Oe({parentfeatureset:f})}const D=T.create(I[0].keyField+"= @id",f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC);return D.parameters={id:t.field(a[0].keyField)},f.filter(D)})},s.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),s.functions.featuresetbyassociation=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{E(e,2,3,n,i);const t=e[0],r=x(L(e[1],"")).toLowerCase(),u=P(e[2])?x(e[2]):null;if(e[0]===null)return null;if(!G(e[0]))throw new m(n,y.InvalidParameter,i);let p=t._layer;if(p instanceof te&&(p=ee(p,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),p===null||A(p)===!1)return null;await p.load();const o=p.serviceUrl(),a=await Re(o,n.spatialReference);let l=null,f=null,I=!1;if(u!==null&&u!==""&&u!==void 0){for(const g of a.terminals)g.terminalName===u&&(f=g.terminalId);f===null&&(I=!0)}const D=a.associations.getFieldsIndex(),w=D.get("TOGLOBALID").name,b=D.get("FROMGLOBALID").name,Q=D.get("TOTERMINALID").name,V=D.get("FROMTERMINALID").name,H=D.get("FROMNETWORKSOURCEID").name,W=D.get("TONETWORKSOURCEID").name,R=D.get("ASSOCIATIONTYPE").name,ge=D.get("ISCONTENTVISIBLE").name,Fe=D.get("OBJECTID").name;for(const g of p.fields)if(g.type==="global-id"){l=t.field(g.name);break}let Z=null,re=new U(new j({name:"percentalong",alias:"percentalong",type:"double"}),T.create("0",a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC)),se=new U(new j({name:"side",alias:"side",type:"string"}),T.create("''",a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));const S="globalid",le="globalId",oe={};for(const g in a.lkp)oe[g]=a.lkp[g].sourceId;const $=new Ue(new j({name:"classname",alias:"classname",type:"string"}),null,oe);let h="";switch(r){case"midspan":{h=`((${w}='${l}') OR ( ${b}='${l}')) AND (${R} IN (5))`,$.codefield=T.create(`CASE WHEN (${w}='${l}') THEN ${H} ELSE ${W} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC);const g=Y(C.findField(a.associations.fields,b));g.name=S,g.alias=S,Z=new U(g,T.create(`CASE WHEN (${b}='${l}') THEN ${w} ELSE ${b} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC)),re=a.unVersion>=4?new ne(C.findField(a.associations.fields,D.get("PERCENTALONG").name)):new U(new j({name:"percentalong",alias:"percentalong",type:"double"}),T.create("0",a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{h=`((${w}='${l}') OR ( ${b}='${l}')) AND (${R} IN (4,6))`,$.codefield=T.create(`CASE WHEN (${w}='${l}') THEN ${H} ELSE ${W} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC);const g=Y(C.findField(a.associations.fields,b));g.name=S,g.alias=S,Z=new U(g,T.create(`CASE WHEN (${b}='${l}') THEN ${w} ELSE ${b} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC)),se=new U(new j({name:"side",alias:"side",type:"string"}),T.create(`CASE WHEN (${R}=4) THEN 'from' ELSE 'to' END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let g=`${w}='@T'`,fe=`${b}='@T'`;f!==null&&(g+=` AND ${Q}=@A`,fe+=` AND ${V}=@A`),h="(("+g+") OR ("+fe+"))",h=B(h,"@T",l??""),g=B(g,"@T",l??""),f!==null&&(g=B(g,"@A",f.toString()),h=B(h,"@A",f.toString())),$.codefield=T.create("CASE WHEN "+g+` THEN ${H} ELSE ${W} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC);const J=Y(C.findField(a.associations.fields,b));J.name=S,J.alias=S,Z=new U(J,T.create("CASE WHEN "+g+` THEN ${b} ELSE ${w} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":h=`${w}='${l}' AND ${R} = 2`,f!==null&&(h+=` AND ${Q} = `+f.toString()),$.codefield=H,h="( "+h+" )",Z=new _(C.findField(a.associations.fields,b),S,S);break;case"content":h=`(${b}='${l}' AND ${R} = 2)`,f!==null&&(h+=` AND ${V} = `+f.toString()),$.codefield=W,h="( "+h+" )",Z=new _(C.findField(a.associations.fields,w),S,S);break;case"structure":h=`(${w}='${l}' AND ${R} = 3)`,f!==null&&(h+=` AND ${Q} = `+f.toString()),$.codefield=H,h="( "+h+" )",Z=new _(C.findField(a.associations.fields,b),S,le);break;case"attached":h=`(${b}='${l}' AND ${R} = 3)`,f!==null&&(h+=` AND ${V} = `+f.toString()),$.codefield=W,h="( "+h+" )",Z=new _(C.findField(a.associations.fields,w),S,le);break;default:throw new m(n,y.InvalidParameter,i)}return I&&(h="1 <> 1"),new C({parentfeatureset:a.associations,adaptedFields:[new ne(C.findField(a.associations.fields,Fe)),new ne(C.findField(a.associations.fields,ge)),Z,se,$,re],extraFilter:h?T.create(h,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC):null})})},s.signatures.push({name:"featuresetbyassociation",min:2,max:6}),s.functions.groupby=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{if(E(e,3,3,n,i),!A(e[0]))throw new m(n,y.InvalidParameter,i);const t=await e[0].load(),r=[],u=[];let p=!1,o=[];if(P(e[1]))o.push(e[1]);else if(e[1]instanceof v)o.push(e[1]);else if(N(e[1]))o=e[1];else{if(!k(e[1]))throw new m(n,y.InvalidParameter,i);o=e[1].toArray()}for(const a of o)if(P(a)){const l=T.create(x(a),t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),f=ye(l)===!0?x(a):"%%%%FIELDNAME";r.push({name:f,expression:l}),f==="%%%%FIELDNAME"&&(p=!0)}else{if(!(a instanceof v))throw new m(n,y.InvalidParameter,i);{const l=a.hasField("name")?a.field("name"):"%%%%FIELDNAME",f=a.hasField("expression")?a.field("expression"):"";if(l==="%%%%FIELDNAME"&&(p=!0),!l)throw new m(n,y.InvalidParameter,i);r.push({name:l,expression:T.create(f||l,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(o=[],P(e[2]))o.push(e[2]);else if(N(e[2]))o=e[2];else if(k(e[2]))o=e[2].toArray();else{if(!(e[2]instanceof v))throw new m(n,y.InvalidParameter,i);o.push(e[2])}for(const a of o){if(!(a instanceof v))throw new m(n,y.InvalidParameter,i);{const l=a.hasField("name")?a.field("name"):"",f=a.hasField("statistic")?a.field("statistic"):"",I=a.hasField("expression")?a.field("expression"):"";if(!l||!f||!I)throw new m(n,y.InvalidParameter,i);u.push({name:l,statistic:f.toLowerCase(),expression:T.create(I,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(p){const a={};for(const f of t.fields)a[f.name.toLowerCase()]=1;for(const f of r)f.name!=="%%%%FIELDNAME"&&(a[f.name.toLowerCase()]=1);for(const f of u)f.name!=="%%%%FIELDNAME"&&(a[f.name.toLowerCase()]=1);let l=0;for(const f of r)if(f.name==="%%%%FIELDNAME"){for(;a["field_"+l.toString()]===1;)l++;a["field_"+l.toString()]=1,f.name="FIELD_"+l.toString()}}for(const a of r)await ae(a.expression,s,n);for(const a of u)await ae(a.expression,s,n);return e[0].groupby(r,u)})},s.signatures.push({name:"groupby",min:3,max:3}),s.functions.distinct=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{if(A(e[0])){E(e,2,2,n,i);const t=await e[0].load(),r=[];let u=[];if(P(e[1]))u.push(e[1]);else if(e[1]instanceof v)u.push(e[1]);else if(N(e[1]))u=e[1];else{if(!k(e[1]))throw new m(n,y.InvalidParameter,i);u=e[1].toArray()}let p=!1;for(const o of u)if(P(o)){const a=T.create(x(o),t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),l=ye(a)===!0?x(o):"%%%%FIELDNAME";r.push({name:l,expression:a}),l==="%%%%FIELDNAME"&&(p=!0)}else{if(!(o instanceof v))throw new m(n,y.InvalidParameter,i);{const a=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",l=o.hasField("expression")?o.field("expression"):"";if(a==="%%%%FIELDNAME"&&(p=!0),!a)throw new m(n,y.InvalidParameter,i);r.push({name:a,expression:T.create(l||a,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(p){const o={};for(const l of t.fields)o[l.name.toLowerCase()]=1;for(const l of r)l.name!=="%%%%FIELDNAME"&&(o[l.name.toLowerCase()]=1);let a=0;for(const l of r)if(l.name==="%%%%FIELDNAME"){for(;o["field_"+a.toString()]===1;)a++;o["field_"+a.toString()]=1,l.name="FIELD_"+a.toString()}}for(const o of r)await ae(o.expression,s,n);return e[0].groupby(r,[])}return He("distinct",c,F,e)})}),s.functions.getfeaturesetinfo=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{if(E(e,1,1,n,i),!A(e[0]))return null;const t=await e[0].getFeatureSetInfo();return t?v.convertObjectToArcadeDictionary({layerId:t.layerId,layerName:t.layerName,itemId:t.itemId,serviceLayerUrl:t.serviceLayerUrl,webMapLayerId:t.webMapLayerId??null,webMapLayerTitle:t.webMapLayerTitle??null,className:null,objectClassId:null},ue(n),!1,!1):null})},s.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),s.functions.filterbysubtypecode=function(n,i){return s.standardFunctionAsync(n,i,async(c,F,e)=>{if(E(e,2,2,n,i),A(e[0])){const t=await e[0].load(),r=e[1];if(!Ae(r))throw new m(n,y.InvalidParameter,i);if(t.subtypeField){const p=T.create(`${t.subtypeField}= ${e[1]}`,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC);return new K({parentfeatureset:e[0],whereclause:p})}if(t.typeIdField===null||t.typeIdField==="")throw new m(n,y.FeatureSetDoesNotHaveSubtypes,i);const u=T.create(`${t.typeIdField}= ${e[1]}`,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC);return new K({parentfeatureset:e[0],whereclause:u})}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"filterbysubtypecode",min:2,max:2})}export{yn as registerFunctions};
