import{ae as s,ag as n,ak as d,am as u,aB as l}from"./index-BwifKPSf.js";import{X as g}from"./FeatureLayerView2D-DFBgCOLd.js";import"./EffectView-C_UGydUq.js";import"./highlightReasons-HHADhtSl.js";import"./LayerView-BLLlpSF3.js";import"./scaleUtils-C1x0Z1AI.js";import"./Container-BzshUTMu.js";import"./definitions-ChNTV7Fi.js";import"./enums-CYMvjYBC.js";import"./Texture-BH0M2glQ.js";import"./TechniqueInstance-CAkB_D_O.js";import"./UpdateTracking2D-CMQySiE9.js";import"./TurboLine-DARKBYCs.js";import"./enums-BRqP_wXA.js";import"./earcut-CNt1Uv2B.js";import"./GeometryUtils-B8oEbHty.js";import"./OptimizedGeometry-DLPswkPy.js";import"./CIMSymbolHelper-ByNr__Bi.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-C3WSzcrn.js";import"./Rect-CUzevAry.js";import"./BoundingBox-qQ-vlHL5.js";import"./LabelMetric-e1ivOX8j.js";import"./Program-CxkswxoC.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-CBognfUV.js";import"./constants-D5zmR9t2.js";import"./TileContainer-D3uBDCNx.js";import"./WGLContainer-OqhVnGGF.js";import"./ProgramTemplate-B-6CwLHq.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-CykNFg4A.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./tileUtils-B7X19rIS.js";import"./featureReductionUtils-Caulfaw_.js";import"./SDFHelper-BnRxoJJ9.js";import"./floatRGBA-BdPnumZ_.js";import"./FeatureCommandQueue-L6s7-PEO.js";import"./HighlightCounter-CrtpD4c2.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-uGUegrNa.js";import"./RefreshableLayerView-D8k0FBDe.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(a=>a.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=s([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const mi=i;export{mi as default};