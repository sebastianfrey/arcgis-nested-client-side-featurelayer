import{ae as a,ag as s}from"./index-BwifKPSf.js";import{E as i,a as h,R as o}from"./Container-BzshUTMu.js";import{i as n}from"./AGraphicContainer-D5kU75B2.js";let t=class extends n{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===i.HIGHLIGHT&&this.children.some(r=>r.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),h(e,!0,r=>{this._renderChildren(r,o.All)}))}};t=a([s("esri.views.2d.layers.support.HighlightGraphicContainer")],t);const m=t;export{m as h};