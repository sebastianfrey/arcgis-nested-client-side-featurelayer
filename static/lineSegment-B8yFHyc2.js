import{ed as t,cS as c,ee as m,ef as s,cO as p,eg as h,eh as b,aQ as d,ei as j}from"./index-HVMkvd8u.js";import{s as w}from"./ObjectStack-CwCoSaDR.js";import{c as x}from"./plane-DIpVVOPH.js";function a(r){return r?{origin:t(r.origin),vector:t(r.vector)}:{origin:c(),vector:c()}}function S(r,n,o=a()){return m(o.origin,r),s(o.vector,n,r),o}function k(r,n,o){return A(r,n,0,1,o)}function A(r,n,o,u,i){const{vector:e,origin:f}=r,v=s(x.get(),n,f),g=p(e,v)/h(e);return b(i,e,d(g,o,u)),j(i,i,r.origin)}new w(()=>a());export{S as b,k as j,a as v};