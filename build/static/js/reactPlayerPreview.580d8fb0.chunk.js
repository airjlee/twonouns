(self.webpackChunktwonouns_landing=self.webpackChunktwonouns_landing||[]).push([[664],{275:(e,t,r)=>{var n,a=Object.create,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,p=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let a of o(t))c.call(e,a)||a===r||l(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},u=(e,t,r)=>(((e,t,r)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>b}),e.exports=(n=d,p(l({},"__esModule",{value:!0}),n));var h=((e,t,r)=>(r=null!=e?a(s(e)):{},p(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)))(r(791));const m="64px",g={};class b extends h.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"state",{image:null}),u(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:r}=this.props;e.url===t&&e.light===r||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage(e){let{url:t,light:r,oEmbedUrl:n}=e;if(!h.default.isValidElement(r))if("string"!==typeof r){if(!g[t])return this.setState({image:null}),window.fetch(n.replace("{url}",t)).then((e=>e.json())).then((e=>{if(e.thumbnail_url&&this.mounted){const r=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),g[t]=r}}));this.setState({image:g[t]})}else this.setState({image:r})}render(){const{light:e,onClick:t,playIcon:r,previewTabIndex:n}=this.props,{image:a}=this.state,l=h.default.isValidElement(e),i={display:"flex",alignItems:"center",justifyContent:"center"},o={preview:{width:"100%",height:"100%",backgroundImage:a&&!l?"url(".concat(a,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...i},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:m,width:m,height:m,position:l?"absolute":void 0,...i},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},s=h.default.createElement("div",{style:o.shadow,className:"react-player__shadow"},h.default.createElement("div",{style:o.playIcon,className:"react-player__play-icon"}));return h.default.createElement("div",{style:o.preview,className:"react-player__preview",onClick:t,tabIndex:n,onKeyPress:this.handleKeyPress},l?e:null,r||s)}}}}]);
//# sourceMappingURL=reactPlayerPreview.580d8fb0.chunk.js.map