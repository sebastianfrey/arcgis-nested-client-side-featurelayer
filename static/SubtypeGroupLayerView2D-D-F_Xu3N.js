import{ae as s,ag as n,ak as d,am as u,aB as l}from"./index-HVMkvd8u.js";import{X as g}from"./FeatureLayerView2D-9ySbF1LC.js";import"./EffectView-SHAkCp2V.js";import"./highlightReasons-CxjZxExp.js";import"./LayerView-CTM_gKYl.js";import"./scaleUtils-D3YqdHr4.js";import"./Container-BafQq7ve.js";import"./definitions-ChNTV7Fi.js";import"./enums-CYMvjYBC.js";import"./Texture--6tbgY7-.js";import"./TechniqueInstance-Des6QCnp.js";import"./UpdateTracking2D-DY93E8Zt.js";import"./TurboLine-LYSyEc3E.js";import"./enums-BRqP_wXA.js";import"./earcut-r8-3NXkF.js";import"./GeometryUtils-BHXOVqq4.js";import"./OptimizedGeometry-DLPswkPy.js";import"./CIMSymbolHelper-MN7TYYzM.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-CKcT0XmG.js";import"./Rect-CUzevAry.js";import"./BoundingBox-CUCvmTdp.js";import"./LabelMetric-DQ6ifITg.js";import"./Program-BHPRCFTU.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-CM4kcrT2.js";import"./constants-D5zmR9t2.js";import"./TileContainer-DuCAlwn3.js";import"./WGLContainer-kcVrXu0i.js";import"./ProgramTemplate-DN-iNbEi.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-D8FbZ-gp.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./tileUtils-B7X19rIS.js";import"./featureReductionUtils-Caulfaw_.js";import"./SDFHelper-DZzgpVqZ.js";import"./floatRGBA-CBbuoTci.js";import"./FeatureCommandQueue-DxBhpmr3.js";import"./HighlightCounter-BnNBDT71.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-DxBEYsFC.js";import"./RefreshableLayerView-Bue97TyL.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(a=>a.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=s([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const mi=i;export{mi as default};
