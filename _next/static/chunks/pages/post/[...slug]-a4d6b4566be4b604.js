(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{6248:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[...slug]",function(){return r(4369)}])},7645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let r=s.default,l=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:r,pastDelay:n}=e;return null}};if(e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=n({},l,e)),(l=n({},l,t)).suspense&&(delete l.ssr,delete l.loading),l.loadableGenerated&&delete(l=n({},l,l.loadableGenerated)).loadableGenerated,"boolean"==typeof l.ssr&&!l.suspense){if(!l.ssr)return delete l.ssr,i(r,l);delete l.ssr}return r(l)},t.noSSR=i;var n=r(6495).Z,l=r(2648).Z,s=(l(r(7294)),l(r(4588)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(2648).Z)(r(7294));let l=n.default.createContext(null);t.LoadableContext=l},4588:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,l=(0,r(1598).Z)(r(7294)),s=r(3644);let i=[],o=[],a=!1;function d(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=l.default.lazy(r.loader));let i=null;function d(){if(!i){let t=new u(e,r);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!a){let c=r.webpack?r.webpack():r.modules;c&&o.push(e=>{for(let t of c)if(-1!==e.indexOf(t))return d()})}function p(){d();let e=l.default.useContext(s.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}let h=r.suspense?function(e,t){return p(),l.default.createElement(r.lazy,n({},e,{ref:t}))}:function(e,t){p();let n=l.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),l.default.useMemo(()=>{var t;return n.loading||n.error?l.default.createElement(r.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:i.retry}):n.loaded?l.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])};return h.preload=()=>d(),h.displayName="LoadableComponent",l.default.forwardRef(h)}(d,e)}function p(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return p(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{p(i).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let r=()=>(a=!0,t());p(o,e).then(r,r)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},4369:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h},default:function(){return f}});var n=r(5893),l=r(7294),s=r(9008),i=r.n(s),o=r(350),a=r(5152),d=r.n(a),u=r(3126),c=r(1827),p=r(1163),h=!0;function f(e){let{fileStructure:t,file:s}=e,a=(0,p.useRouter)(),h=s.cells,[f,x]=(0,l.useState)([]),y=d()(Promise.all([r.e(960),r.e(904)]).then(r.bind(r,6904)),{loadableGenerated:{webpack:()=>[6904]},ssr:!1}),_=async()=>{let e=[];await h.forEach((t,r)=>{t.outputs&&t.outputs[0]&&t.outputs[0].data&&t.outputs[0].data["application/vnd.plotly.v1+json"]?(e.push({type:"cell",data:m(t)}),e.push({type:"plotly",data:t})):e.push({type:"cell",data:t})}),x(e)},m=e=>{let t=JSON.parse(JSON.stringify(e));return t.outputs=[],t};return(0,l.useEffect)(()=>{_()},[a]),(0,n.jsxs)("div",{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Fairlabs Enlight"}),(0,n.jsx)("meta",{name:"description",content:"Fairlabs Enlight"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("main",{children:(0,n.jsx)(c.Z,{fileStructure:t,children:f.map((e,t)=>"cell"===e.type?(0,n.jsx)(o.IpynbRenderer,{ipynb:{cells:[e.data]},syntaxTheme:"ghcolors",language:"python",bgTransparent:!0},t):"plotly"===e.type?e.data.outputs.map((e,t)=>{var r,l;return(0,n.jsx)("div",{children:(0,n.jsx)(y,{data:null===(r=e.data["application/vnd.plotly.v1+json"])||void 0===r?void 0:r.data,layout:null===(l=e.data["application/vnd.plotly.v1+json"])||void 0===l?void 0:l.layout})},t)}):void 0)})}),(0,n.jsx)("footer",{children:(0,n.jsx)(u.Z,{children:"Footer"})})]})}},3126:function(e,t,r){"use strict";var n=r(5893);let l=e=>{let{children:t}=e;return(0,n.jsx)("div",{style:{width:"100%",border:"3px solid green"},children:t})};t.Z=l},1827:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(5893),l={src:"/test/_next/static/media/logo.c82793f7.svg",height:25,width:128},s=r(5675),i=r.n(s),o=r(9144),a=r(9630),d=r(1664),u=r.n(d);let c=e=>{let{children:t}=e;return(0,n.jsxs)(o.Z,{spacing:2,direction:"row",sx:{with:"100%",borderBottom:"1px solid rgb(214, 222, 230)",backgroundColor:"white",padding:"10px 20px",alignItems:"center",position:"sticky",top:"0px",zIndex:"999"},children:[(0,n.jsx)(i(),{src:l,width:120,alt:"logo",onClick:()=>window.location.href="https://www.fairlabs.io",style:{cursor:"pointer"}}),(0,n.jsx)(u(),{href:"/",children:(0,n.jsx)(a.Z,{variant:"h6",sx:{cursor:"pointer"},children:"Blog"})}),t]})};var p=r(7294),h=r(1163),f=r(5214),x=r(8261),y=r(9901),_=r(4548),m=r(4992),b=r(5512),j=r(4634),g=r(181),v=r(3508);let w=e=>{let{children:t,fileStructure:r}=e,l=(0,h.useRouter)(),[s,i]=(0,p.useState)(r),d=e=>{let t=c(s,e);i(t)},c=(e,t)=>{let r=JSON.parse(JSON.stringify(e));return r.forEach((e,n)=>{e.link===t.link?e.open=!e.open:e.dir&&e.dir.length>0&&(r[n].dir=c(e.dir,t))}),r},w=e=>{if(0!==e.length){if("file"===e.type){let t=e.name.split(".")[0],r=e.link.split("/").slice(2).join("/");return(0,n.jsx)(u(),{href:"/post/".concat(r),children:(0,n.jsxs)(x.Z,{sx:{mb:"10px"},children:[(0,n.jsx)(y.Z,{children:(0,n.jsx)(j.Z,{})}),(0,n.jsx)(_.Z,{secondary:t,sx:{".MuiTypography-root":{fontWeight:l.asPath==="/post/".concat(encodeURI(r))?"bold":"",color:l.asPath==="/post/".concat(encodeURI(r))?"black":""}}})]})})}if("folder"===e.type)return(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(x.Z,{onClick:()=>d(e),sx:{border:"1px solid #0077b6",borderRadius:"14px",mb:"10px"},children:[(0,n.jsx)(y.Z,{children:(0,n.jsx)(b.Z,{})}),(0,n.jsx)(_.Z,{primary:e.name}),e.open?(0,n.jsx)(g.Z,{}):(0,n.jsx)(v.Z,{})]}),(0,n.jsx)(o.Z,{sx:{ml:"20px"},children:(0,n.jsx)(m.Z,{in:e.open,timeout:"auto",unmountOnExit:!0,children:(0,n.jsx)(f.Z,{component:"div",disablePadding:!0,children:e.dir.map((e,t)=>(0,n.jsx)("div",{children:w(e)},t))})})})]})}};return(0,n.jsx)(o.Z,{sx:{padding:"20px",minWidth:"350px"},children:(0,n.jsxs)(o.Z,{position:"sticky",top:"80px",children:[(0,n.jsx)(a.Z,{sx:{fontSize:"20px",fontWeight:"700",my:"20px"},children:"Contents"}),(0,n.jsx)(f.Z,{sx:{maxWidth:360},children:s.map((e,t)=>(0,n.jsx)("div",{children:w(e)},t))})]})})},Z=e=>{let{children:t,fileStructure:r}=e;return(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c,{}),(0,n.jsxs)(o.Z,{direction:"row",justifyContent:"center",spacing:15,children:[(0,n.jsx)(w,{fileStructure:r}),(0,n.jsx)(o.Z,{width:"800px",children:t})]})]})};var k=Z},5152:function(e,t,r){e.exports=r(7645)}},function(e){e.O(0,[204,549,774,888,179],function(){return e(e.s=6248)}),_N_E=e.O()}]);