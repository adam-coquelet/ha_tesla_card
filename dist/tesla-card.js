/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=r.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(r,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:_}=Object,p=globalThis,g=p.trustedTypes,u=g?g.emptyScript:"",m=p.reactiveElementPolyfillSupport,f=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!o(t,e),y={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&l(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(e)i.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of r){const r=document.createElement("style"),s=t.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=r;const n=s.fromAttribute(e,t.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,i,r=!1,s){if(void 0!==t){const n=this.constructor;if(!1===r&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??$)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[f("elementProperties")]=new Map,b[f("finalized")]=new Map,m?.({ReactiveElement:b}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=t=>t,x=A.trustedTypes,C=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+P,E=`<${k}>`,M=document,L=()=>M.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,B="[ \t\n\f\r]",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,U=/>/g,O=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,z=/"/g,W=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),j=new WeakMap,Z=M.createTreeWalker(M,129);function V(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,r=[];let s,n=2===e?"<svg>":3===e?"<math>":"",a=Q;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===Q?"!--"===l[1]?a=R:void 0!==l[1]?a=U:void 0!==l[2]?(W.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=O):void 0!==l[3]&&(a=O):a===O?">"===l[0]?(a=s??Q,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?O:'"'===l[3]?z:H):a===z||a===H?a=O:a===R||a===U?a=Q:(a=O,s=void 0);const d=a===O&&t[e+1].startsWith("/>")?" ":"";n+=a===Q?i+E:c>=0?(r.push(o),i.slice(0,c)+S+i.slice(c)+P+d):i+P+(-2===c?e:d)}return[V(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class q{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const a=t.length-1,o=this.parts,[l,c]=X(t,e);if(this.el=q.createElement(l,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Z.nextNode())&&o.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=c[n++],i=r.getAttribute(t).split(P),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:Y}),r.removeAttribute(t)}else t.startsWith(P)&&(o.push({type:6,index:s}),r.removeAttribute(t));if(W.test(r.tagName)){const t=r.textContent.split(P),e=t.length-1;if(e>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],L()),Z.nextNode(),o.push({type:2,index:++s});r.append(t[e],L())}}}else if(8===r.nodeType)if(r.data===k)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(P,t+1));)o.push({type:7,index:s}),t+=P.length-1}s++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,r){if(e===I)return e;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const n=N(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(e=G(t,s._$AS(t,e.values),s,r)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??M).importNode(e,!0);Z.currentNode=r;let s=Z.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new K(s,s.nextSibling,this,t):1===o.type?e=new o.ctor(s,o.name,o.strings,this,t):6===o.type&&(e=new rt(s,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(s=Z.nextNode(),n++)}return Z.currentNode=M,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),N(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new J(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new q(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new K(this.O(L()),this.O(L()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,r){const s=this.strings;let n=!1;if(void 0===s)t=G(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const r=t;let a,o;for(t=s[0],a=0;a<s.length-1;a++)o=G(this,r[i+a],e,a),o===I&&(o=this._$AH[a]),n||=!N(o)||o!==this._$AH[a],o===F?t=F:t!==F&&(t+=(o??"")+s[a+1]),this._$AH[a]=o}n&&!r&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class it extends Y{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??F)===I)return;const i=this._$AH,r=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==F&&(i===F||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const st=A.litHtmlPolyfillSupport;st?.(q,K),(A.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let s=r._$litPart$;if(void 0===s){const t=i?.renderBefore??null;r._$litPart$=s=new K(e.insertBefore(L(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ot=nt.litElementPolyfillSupport;ot?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const lt="1.0.0",ct={pearl_white:{name:"Pearl White Multi-Coat",hex:"#ECF0F1",metallic:!0},solid_black:{name:"Solid Black",hex:"#1A1A1A",metallic:!1},midnight_silver:{name:"Midnight Silver Metallic",hex:"#4A4D51",metallic:!0},deep_blue:{name:"Deep Blue Metallic",hex:"#1B2A49",metallic:!0},red_multi_coat:{name:"Red Multi-Coat",hex:"#A5171B",metallic:!0},ultra_red:{name:"Ultra Red",hex:"#C41E3A",metallic:!0},quicksilver:{name:"Quicksilver",hex:"#B8BAC0",metallic:!0},midnight_cherry:{name:"Midnight Cherry Red",hex:"#5C0A1A",metallic:!0},stealth_grey:{name:"Stealth Grey",hex:"#393C41",metallic:!1},ultra_white:{name:"Ultra White",hex:"#FAFAFA",metallic:!1},lunar_silver:{name:"Lunar Silver",hex:"#A8A9AD",metallic:!0},diamond_black:{name:"Diamond Black",hex:"#0D0D0D",metallic:!0}},ht={vehicle_model:"model_3",vehicle_variant:"standard",paint_color:"pearl_white",show_vehicle:!0,default_view:"main"};function dt(t,e){return t.states[e]}function _t(t,e){const i=dt(t,e);if(!i||"unavailable"===i.state||"unknown"===i.state)return null;const r=parseFloat(i.state);return isNaN(r)?null:r}function pt(t,e,i=["on"]){const r=dt(t,e);return!!r&&i.includes(r.state)}function gt(t,e){const i=dt(t,e);return!!i&&"open"===i.state}const ut=n`
  :host {
    --tesla-primary: #4dd0e1;
    --tesla-bg: var(--ha-card-background, var(--card-background-color, #111114));
    --tesla-text: var(--primary-text-color, #f0f0f0);
    --tesla-text-sec: var(--secondary-text-color, #8a8a8e);
    --tesla-surface: rgba(255,255,255,0.05);
    --tesla-border: rgba(255,255,255,0.06);
    --tesla-green: #30D158;
    --tesla-red: #FF3B30;
    --tesla-orange: #FF9F0A;
    --tesla-blue: #64D2FF;
    display: block;
    font-family: -apple-system,BlinkMacSystemFont,"Inter Variable",system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  ha-card {
    background: var(--tesla-bg);
    border-radius: 20px;
    overflow: hidden;
    color: var(--tesla-text);
    padding: 0;
    border: 1px solid var(--tesla-border);
  }

  .card-container {
    display: flex;
    flex-direction: column;
  }

  /* ── HEADER ─────────────────────────────────────────────── */
  .card-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 12px 16px 0;
  }

  .battery-indicator {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    padding: 4px 0;
  }

  .battery-pct {
    font-size: 14px;
    font-weight: 500;
    color: var(--tesla-text);
    letter-spacing: -0.3px;
  }

  .battery-svg {
    display: block;
  }

  /* ── VIEW CONTENT ───────────────────────────────────────── */
  .view-content {
    flex: 1;
    padding: 0 18px 16px;
  }
`,mt={model_3_PPSW_standard:{file:"MT369_PPSW_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PR01_standard:{file:"MT369_PR01_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PN00_standard:{file:"MT369_PN00_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PX02_standard:{file:"MT369_PX02_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PPSB_standard:{file:"MT369_PPSB_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PN01_standard:{file:"MT369_PN01_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PPSW_performance:{file:"MT371_PPSW_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_3_PR01_performance:{file:"MT371_PR01_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_3_PN00_performance:{file:"MT371_PN00_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_3_PX02_performance:{file:"MT371_PX02_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_3_PPSB_performance:{file:"MT371_PPSB_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_3_PN01_performance:{file:"MT371_PN01_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"}},ft={pearl_white:"PPSW",ultra_red:"PR01",quicksilver:"PN00",diamond_black:"PX02",deep_blue:"PPSB",stealth_grey:"PN01",solid_black:"PX02",midnight_silver:"PN01",red_multi_coat:"PR01",midnight_cherry:"PR01",ultra_white:"PPSW",lunar_silver:"PN00"};customElements.define("tesla-vehicle-renderer",class extends at{static get properties(){return{config:{type:Object},state:{type:Object}}}static get styles(){return n`
      :host { display: block; width: 100%; margin: 0 auto; }

      .scene {
        position: relative;
        width: 100%;
        aspect-ratio: 72 / 34;
        overflow: visible;
        margin-top: -2%;
        margin-bottom: -20%;
        transform: scale(1.15);
      }

      .ambient {
        position: absolute; inset: 0;
        z-index: 0; pointer-events: none;
      }

      .car-clip {
        width: 100%;
        aspect-ratio: 72 / 34;
        overflow: hidden;
        position: relative;
        z-index: 1;
      }
      .car-clip img {
        width: 100%;
        display: block;
        user-select: none;
        -webkit-user-drag: none;
      }
      .car-clip img.offline {
        filter: brightness(0.4) saturate(0.3);
      }

      /* Exact same as working test-reflect.html + margin-bottom to collapse space */
      .car-reflect {
        aspect-ratio: 72 / 29;
        overflow: hidden;
        transform: scaleY(-1);
        margin-top: -12%;
        position: relative;
        z-index: 0;
        mask-image: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 60%);
        -webkit-mask-image: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 60%);
        opacity: 0.4;
        filter: blur(1px);
        pointer-events: none;
      }
      .car-reflect img {
        width: 100%;
        display: block;
        user-select: none;
        -webkit-user-drag: none;
      }

      .no-image {
        padding: 40px 0; text-align: center;
        color: rgba(255,255,255,0.3); font-size: 14px;
      }
    `}render(){const t=this.config;if(!t)return D``;const e=function(t,e,i="standard"){const r=ft[e]||"PPSW",s=mt[`${t}_${r}_${i}`];if(s)return s.file;const n=mt[`${t}_${r}_standard`];if(n)return n.file;const a=`${t}_PPSW_standard`;return mt[a]?.file||null}(t.vehicle_model,t.paint_color,t.vehicle_variant||"standard");if(!e)return D`<div class="no-image">No vehicle image available</div>`;const i=`${t.image_path||"/local/community/ha-tesla-card/pictures"}/${e}`,r=this.state,s=r&&!r.is_online?"offline":"",n=ct[t.paint_color],a=n?function(t){const e=parseInt(t.replace("#",""),16);return`${e>>16&255},${e>>8&255},${255&e}`}(n.hex):"200,200,200";return D`
      <div class="scene">
        <div class="ambient" style="${`background: radial-gradient(ellipse 70% 50% at 50% 40%, rgba(${a},0.10) 0%, rgba(${a},0.03) 50%, transparent 75%);`}"></div>
        <div class="car-clip">
          <img class="${s}" src="${i}" alt="" draggable="false" />
        </div>
        <div class="car-reflect">
          <img src="${i}" alt="" draggable="false" />
        </div>
      </div>
    `}});const vt={en:{lock:"Lock",charge:"Charge",frunk:"Frunk",vent:"Vent",climate:"Climate",hr:"hr",min:"min",remaining:"remaining",calculating:"Calculating...",charge_limit:"Charge Limit",int:"in",ext:"out"},fr:{lock:"Verrouiller",charge:"Recharge",frunk:"Frunk",vent:"Aérer",climate:"Ventiler",hr:"h",min:"min",remaining:"restantes",calculating:"Calcul...",charge_limit:"Limite de charge",int:"int",ext:"ext"}};customElements.define("tesla-view-main",class extends at{constructor(){super(...arguments),this._prevCharging=!1,this._lastChargeState=null,this._prevClimate=!1}static get properties(){return{hass:{attribute:!1},config:{attribute:!1},vehicleState:{attribute:!1},entityMap:{attribute:!1},_prevCharging:{state:!0},_lastChargeState:{state:!0},_prevClimate:{state:!0}}}render(){const t=this.vehicleState;if(!t)return D``;const e=t.is_charging;e&&(this._lastChargeState=t);const i=e?"cp cp-in":this._prevCharging?"cp cp-out":"cp cp-hidden";e!==this._prevCharging&&(this._prevCharging=e);const r=e?t:this._lastChargeState;return D`
      <div class="root">
        <div class="${i}" @animationend=${this._onCpAnimEnd}>
          ${r?this._renderChargeContent(r):""}
        </div>

        <div class="car-wrap">
          <tesla-vehicle-renderer
            .config=${this.config}
            .state=${this.vehicleState}
          ></tesla-vehicle-renderer>
        </div>

        ${this._renderClimatePanel(t)}

        <div class="actions-zone">
          <div class="actions">
          ${this._act(t.is_locked,$t,yt,this._t("lock"),()=>this._toggleLock())}
          ${this._act(t.charger_door_open,At,At,this._t("charge"),()=>this._toggleChargePort())}
          ${this._act(t.frunk_open,wt,wt,this._t("frunk"),()=>this._openFrunk())}
          ${this._act(t.windows_open,bt,bt,this._t("vent"),()=>this._ventWindows())}
          ${this._act(t.is_climate_on,xt,xt,this._t("climate"),()=>this._toggleClimate())}
          </div>
        </div>
      </div>
    `}_onCpAnimEnd(t){if("cp-slide-out"===t.animationName){const e=t.currentTarget;e.classList.add("cp-hidden"),e.classList.remove("cp-out")}}_renderChargeContent(t){const e=t.time_to_full_charge;let i="";if(null!==e&&e>0){const t=Math.floor(e),r=Math.round(60*(e-t)),s=this._t("hr"),n=this._t("min"),a=this._t("remaining");i=t>0&&r>0?`${t} ${s} ${r} ${n} ${a}`:t>0?`${t} ${s} ${a}`:`${r} ${n} ${a}`}else i=this._t("calculating");const r="mi"===t.range_unit?"mi/hr":"km/hr";return D`
      <div class="cp-bar"><div class="cp-bar-pulse"></div></div>
      <div class="cp-inner">
        <div class="cp-bolt">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#30D158">
            <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66l.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
          </svg>
        </div>
        <div class="cp-time">${i}</div>
        <div class="cp-limit">${this._t("charge_limit")}: ${t.charge_limit??80}%</div>
        <div class="cp-sep"></div>
        <div class="cp-stat">${t.charging_power??"--"} kW</div>
        <div class="cp-stat">${null!==t.charge_rate?Math.round(t.charge_rate):"--"} ${r}</div>
        <div class="cp-stat">+${t.charge_energy_added??"--"} kWh</div>
        <div class="cp-stat">${t.charge_current??"--"}/${t.charge_current??"--"} A</div>
        <div class="cp-stat">${t.charger_voltage??"--"} V</div>
      </div>
    `}_act(t,e,i,r,s){return D`
      <button class="act ${t?"on":""}" @click=${s}>
        ${t?e:i}
        <span class="act-label">${r}</span>
      </button>`}_renderClimatePanel(t){const e=t.is_climate_on,i=e?"cl cl-in":this._prevClimate?"cl cl-out":"cl cl-hidden";return e!==this._prevClimate&&(this._prevClimate=e),D`
      <div class="${i}" @animationend=${this._onClAnimEnd}>
        ${this._renderClimateContent(t)}
      </div>
    `}_onClAnimEnd(t){if("cl-slide-out"===t.animationName){const e=t.currentTarget;e.classList.add("cl-hidden"),e.classList.remove("cl-out")}}_renderClimateContent(t){const e=t.climate_target_temp??20,i=t.inside_temp,r=t.outside_temp;return D`
      <div class="cl-inner">
        <button class="cl-btn" @click=${this._tempUp}>
          <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0"/></svg>
        </button>
        <div class="cl-target">${e}°</div>
        <button class="cl-btn" @click=${this._tempDown}>
          <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"/></svg>
        </button>
        <div class="cl-temps">
          ${null!==i?D`<span>${i}° ${this._t("int")}</span>`:""}
          ${null!==r?D`<span>${r}° ${this._t("ext")}</span>`:""}
        </div>
      </div>
    `}_t(t){return function(t,e){const i=t?.startsWith("fr")?"fr":"en";return vt[i]?.[e]??vt.en[e]??e}(this.hass?.language||"en",t)}_toggleLock(){this.hass?.callService("lock",this.vehicleState.is_locked?"unlock":"lock",{entity_id:this.entityMap.door_lock})}_toggleClimate(){this.hass?.callService("climate",this.vehicleState.is_climate_on?"turn_off":"turn_on",{entity_id:this.entityMap.climate})}_ventWindows(){this.hass?.callService("cover",this.vehicleState.windows_open?"close_cover":"open_cover",{entity_id:this.entityMap.windows})}_toggleChargePort(){this.hass?.callService("cover",this.vehicleState.charger_door_open?"close_cover":"open_cover",{entity_id:this.entityMap.charger_door})}_openFrunk(){this.hass?.callService("cover","open_cover",{entity_id:this.entityMap.frunk})}_tempUp(){const t=this.vehicleState.climate_target_temp??20;this.hass?.callService("climate","set_temperature",{entity_id:this.entityMap.climate,temperature:Math.min(30,t+.5)})}_tempDown(){const t=this.vehicleState.climate_target_temp??20;this.hass?.callService("climate","set_temperature",{entity_id:this.entityMap.climate,temperature:Math.max(15,t-.5)})}static get styles(){return n`
      :host {
        display: block;
        font-family: -apple-system,BlinkMacSystemFont,"Inter Variable",system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
      }
      .root { position: relative; }
      .car-wrap { padding: 0; margin: 0 -18px; }
      .car-wrap tesla-vehicle-renderer { display: block; margin: 0 auto; }

      /* ══════════════════════════════════════════
         CHARGE PANEL + slide animation
         ══════════════════════════════════════════ */
      .cp {
        position: absolute;
        top: -30px;
        left: -18px;
        bottom: 0;
        z-index: 5;
        display: flex;
        flex-direction: row;
        pointer-events: none;
        background: linear-gradient(90deg, #1c1c1e, #1c1c1ea0 59%, #1c1c1e00);
      }

      .cp-hidden { display: none; }

      .cp-in {
        animation: cp-slide-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      }

      .cp-out {
        animation: cp-slide-out 0.35s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
      }

      @keyframes cp-slide-in {
        from { transform: translateX(-100%); opacity: 0; }
        to   { transform: translateX(0); opacity: 1; }
      }

      @keyframes cp-slide-out {
        from { transform: translateX(0); opacity: 1; }
        to   { transform: translateX(-100%); opacity: 0; }
      }

      /* Green edge bar */
      .cp-bar {
        width: 4px;
        flex-shrink: 0;
        background-color: color-mix(in oklab, lab(27.036% 0 0) 50%, transparent);
        position: relative;
        overflow: hidden;
      }
      .cp-bar-pulse {
        position: absolute;
        left: 0;
        width: 4px;
        height: 48%;
        background: linear-gradient(to top, transparent, rgb(37, 203, 85) 50%, transparent);
        animation: bar-up 2s ease-in-out infinite;
      }
      .cp-bar::after {
        content: '';
        position: absolute;
        left: -4px;
        width: 10px;
        height: 12%;
        background: radial-gradient(ellipse, rgba(48,209,88,0.25), transparent 70%);
        filter: blur(2px);
        animation: bar-up 2s ease-in-out infinite;
        animation-delay: 0.06s;
      }
      @keyframes bar-up {
        0%   { bottom: -18%; }
        100% { bottom: 110%; }
      }

      .cp-inner {
        padding: 14px 0 14px 14px;
        display: flex;
        flex-direction: column;
      }

      .cp-bolt {
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;
      }

      .cp-time {
        font-size: 15px;
        font-weight: 700;
        color: #fff;
        line-height: 1.2;
        margin-bottom: 4px;
        letter-spacing: -0.2px;
      }

      .cp-limit {
        font-size: 13px;
        font-weight: 400;
        color: rgba(255,255,255,0.50);
        line-height: 1.3;
      }

      .cp-sep {
        height: 1px;
        background: rgba(255,255,255,0.08);
        margin: 10px 0;
        width: 85%;
      }

      .cp-stat {
        font-size: 12px;
        font-weight: 500;
        color: rgba(255,255,255,0.80);
        line-height: 1.8;
        letter-spacing: 0.1px;
      }

      /* ════════════════════════════════
         ACTIONS — icon only, no bg, green when active
         ════════════════════════════════ */
      .actions-zone {
        position: relative;
        z-index: 9;
      }

      .actions {
        display: flex;
        justify-content: space-around;
        padding: 4px 8px 8px;
        position: relative;
      }

      .act {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 6px 0;
        border: none;
        background: none;
        color: rgba(255,255,255,0.40);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: color 0.25s ease, transform 0.15s ease;
        min-width: 48px;
        font-family: inherit;
      }

      .act:active { transform: scale(0.88); }

      .act.on { color: #30D158; }

      .act svg {
        width: 24px;
        height: 24px;
        fill: currentColor;
      }

      .act-label {
        font-size: 9px;
        font-weight: 500;
        letter-spacing: 0.2px;
        color: inherit;
      }

      /* ════════════════════════════════
         CLIMATE PANEL — right side, mirrored from charge panel
         ════════════════════════════════ */
      .cl {
        position: absolute;
        right: -19px;
        top: 0;
        bottom: 50px;
        display: flex;
        align-items: center;
        z-index: 5;
        pointer-events: none;
        background: linear-gradient(270deg, #1c1c1e, #1c1c1ecc 56%, #1c1c1e00);
        padding-left: 58px;
      }

      .cl-hidden { display: none !important; }

      .cl-in {
        animation: cl-slide-in 0.35s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
      }

      .cl-out {
        animation: cl-slide-out 0.3s cubic-bezier(0.55,0.06,0.68,0.19) forwards;
      }

      @keyframes cl-slide-in {
        from { transform: translateX(100%); opacity: 0; }
        to   { transform: translateX(0); opacity: 1; }
      }

      @keyframes cl-slide-out {
        from { transform: translateX(0); opacity: 1; }
        to   { transform: translateX(100%); opacity: 0; }
      }

      .cl-inner {
        padding: 12px 16px 8px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        pointer-events: auto;
      }

      .cl-btn {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.10);
        background: none;
        color: rgba(255,255,255,0.55);
        font-size: 24px;
        line-height: 1;
        font-weight: 300;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
        -webkit-tap-highlight-color: transparent;
        pointer-events: auto;
        font-family: inherit;
      }
      .cl-btn:active { transform: scale(0.85); color: #4FC3F7; }

      .cl-target {
        font-size: 28px;
        font-weight: 500;
        color: #4FC3F7;
        letter-spacing: -1px;
        line-height: 1;
        margin: 10px 0;
        width: 56px;
        text-align: center;
      }

      .cl-temps {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6px;
        gap: 1px;
      }
      .cl-temps span {
        font-size: 10px;
        font-weight: 400;
        color: rgba(255,255,255,0.25);
        line-height: 1.5;
      }
    `}});const $t=D`<svg viewBox="24 13 55 67" fill="none"><path fill-rule="evenodd" d="M50.99 77.50Q57.83 77.51 64.65 77.48Q70.63 77.45 72.13 76.54Q75.34 74.60 75.50 69.97Q75.51 69.54 75.53 49.12Q75.53 44.58 74.78 42.99C73.19 39.67 71.02 39.64 67.91 38.89A0.67 0.67 0 0 1 67.40 38.23Q67.40 35.66 67.39 32.00C67.36 22.81 60.29 15.63 51.01 15.62C41.74 15.62 34.65 22.80 34.62 31.99Q34.61 35.65 34.60 38.22A0.67 0.67 0 0 1 34.09 38.88C30.98 39.63 28.81 39.65 27.22 42.97Q26.47 44.56 26.47 49.10Q26.47 69.52 26.48 69.95Q26.64 74.58 29.85 76.52Q31.35 77.44 37.32 77.47Q44.15 77.50 50.99 77.50ZM39.95 39.00L62.05 39.00A0.57 0.57 0 0 0 62.62 38.43L62.62 32.80A12.30 11.49 90 0 0 51.13 20.50L50.87 20.50A12.30 11.49-90 0 0 39.38 32.80L39.38 38.43A0.57 0.57 0 0 0 39.95 39.00Z" fill="currentColor"/></svg>`,yt=D`<svg viewBox="9 8 70 72" fill="none"><path d="M40.40 38.59Q40.36 34.85 40.40 30.78C40.59 12.29 14.89 9.87 11.12 28.42Q10.72 30.40 11.06 39.05A2.32 2.32 0 0 0 13.48 41.28L13.62 41.27A2.49 2.47-0.7 0 0 16.00 38.84C16.11 32.12 14.37 23.96 22.61 21.05C29.36 18.67 35.69 23.94 35.58 31.01C35.55 33.00 35.62 35.47 35.64 38.32A0.61 0.61 0 0 1 35.06 38.93C28.68 39.34 27.42 43.04 27.45 49.16Q27.53 65.87 27.49 69.49Q27.43 74.12 30.42 76.22Q32.31 77.55 37.81 77.54Q67.64 77.47 69.25 77.49C75.03 77.57 76.72 72.91 76.54 67.41Q76.48 65.49 76.49 46.01C76.50 40.38 71.80 38.79 66.45 38.97Q65.09 39.02 40.79 38.98A0.39 0.39 0 0 1 40.40 38.59Z" fill="currentColor"/></svg>`,bt=D`<svg viewBox="50 18 68 68" fill="none"><path fill-rule="evenodd" d="M111.27 78.92Q109.11 81.07 106.78 81.13Q95.78 81.41 65.02 81.23C59.91 81.20 56.97 80.63 54.89 76.43Q54.16 74.97 54.19 71.59Q54.24 66.54 54.30 49.50Q54.32 44.66 57.67 41.19Q61.57 37.15 63.93 34.86Q64.80 34.02 65.67 33.15Q66.55 32.28 67.39 31.41Q69.69 29.06 73.75 25.18Q77.23 21.84 82.07 21.84Q99.11 21.85 104.16 21.82Q107.54 21.80 109.00 22.54C113.19 24.63 113.75 27.58 113.76 32.69Q113.82 63.45 113.49 74.45Q113.43 76.78 111.27 78.92ZM83.75 27.99C81.05 28.02 79.19 28.89 76.51 31.54Q69.41 38.56 63.00 45.00Q61.41 46.60 60.75 47.69A0.52 0.51-74.3 0 0 61.18 48.47L67.86 48.47A2.12 2.10-67.3 0 0 69.35 47.85L80.69 36.52A5.50 5.45-67.4 0 1 84.57 34.90L106.11 34.90A1.35 1.34 0 0 0 107.46 33.56L107.46 29.95A1.95 1.95 0 0 0 105.53 28.00Q93.62 27.86 83.75 27.99ZM107.26 54.95L60.62 54.87A0.23 0.23 0 0 0 60.39 55.10L60.36 72.14A3.11 2.81 0.1 0 0 63.46 74.95L104.34 75.03A3.11 2.81 0.1 0 0 107.46 72.22L107.49 55.18A0.23 0.23 0 0 0 107.26 54.95Z" fill="currentColor"/></svg>`,At=D`<svg viewBox="26 16 52 74" fill="none"><path d="M51.01 87.78A1.18 1.18 0 0 1 50.37 86.73L50.37 60.48A1.13 1.12 0 0 0 49.24 59.36L29.66 59.36A1.29 1.29 0 0 1 28.55 57.42Q45.62 28.22 50.98 19.00Q51.34 18.39 51.62 18.22A1.33 1.33 0 0 1 53.64 19.35Q53.64 40.75 53.65 45.40A1.25 1.25 0 0 0 54.90 46.65L74.31 46.65A1.33 1.32 15.1 0 1 75.46 48.64Q55.89 82.01 53.16 86.88Q52.29 88.43 51.01 87.78Z" fill="currentColor"/></svg>`,wt=D`<svg viewBox="14 17 76 72" fill="none"><path fill-rule="evenodd" d="M57.79 39.34Q38.56 39.68 21.86 47.46C19.22 48.69 17.23 50.25 17.07 53.04Q16.93 55.37 17.03 68.26C17.07 73.04 20.96 75.04 25.71 75.29Q26.41 75.32 32.58 75.95A1.66 1.64 74.8 0 1 33.77 76.64C40.31 85.79 52.81 85.66 59.62 76.85A0.88 0.87 18.1 0 1 60.32 76.50L83.64 76.50A3.20 3.20 0 0 0 86.84 73.30L86.84 72.83A3.33 3.33 0 0 0 83.51 69.50L63.06 69.50A0.57 0.57 0 0 1 62.49 68.91Q62.68 60.78 56.96 55.79C53.25 52.55 47.23 51.07 42.75 52.52Q31.34 56.18 30.93 68.49A0.25 0.25 0 0 1 30.65 68.73L24.34 68.12A0.37 0.37 0 0 1 24.00 67.75L24.00 54.81A1.05 1.04-12.4 0 1 24.61 53.86Q44.11 44.94 64.71 46.71A5.57 5.52 34.1 0 0 67.63 46.16L85.07 37.63A3.41 3.41 0 0 0 86.67 33.15L86.62 33.04A3.44 3.43 64.9 0 0 81.97 31.35L68.32 38.05A0.92 0.91 53.8 0 1 67.27 37.88Q52.58 23.40 30.83 19.69A3.40 3.40 0 0 0 26.91 22.47L26.87 22.69A3.44 3.44 0 0 0 29.73 26.66Q45.63 29.14 57.95 38.87A0.26 0.26 0 0 1 57.79 39.34ZM55.47 67.75A8.72 8.72 0 0 0 46.75 59.03A8.72 8.72 0 0 0 38.03 67.75A8.72 8.72 0 0 0 46.75 76.47A8.72 8.72 0 0 0 55.47 67.75Z" fill="currentColor"/></svg>`,xt=D`<svg viewBox="16 13 76 76" fill="none"><path d="M52.27 46.50L52.23 18.72A2.65 2.65 0 0 0 49.57 16.08L49.36 16.08A16.43 16.36 89.9 0 0 33.03 32.54L33.03 32.76A16.43 16.36 89.9 0 0 49.42 49.16L49.63 49.16A2.65 2.65 0 0 0 52.27 46.50Z" fill="currentColor"/><path d="M58.37 49.25L86.39 49.25A2.53 2.53 0 0 0 88.92 46.72L88.92 46.39A16.42 16.36 0 0 0 72.50 30.03L72.26 30.03A16.42 16.36 0 0 0 55.84 46.39L55.84 46.72A2.53 2.53 0 0 0 58.37 49.25Z" fill="currentColor"/><path d="M49.55 52.72L21.69 52.76A2.62 2.62 0 0 0 19.08 55.39L19.08 55.62A16.44 16.37-0.1 0 0 35.55 71.96L35.77 71.96A16.44 16.37-0.1 0 0 52.18 55.56L52.18 55.33A2.62 2.62 0 0 0 49.55 52.72Z" fill="currentColor"/><path d="M55.72 55.36L55.76 83.38A2.53 2.53 0 0 0 58.30 85.90L58.62 85.90A16.44 16.37 89.9 0 0 74.96 69.43L74.96 69.23A16.44 16.37 89.9 0 0 58.56 52.82L58.24 52.82A2.53 2.53 0 0 0 55.72 55.36Z" fill="currentColor"/></svg>`;class Ct extends at{constructor(){super(...arguments),this._showRange=!1}static get properties(){return{hass:{attribute:!1},_config:{state:!0},_vehicleState:{state:!0},_entityMap:{state:!0},_showRange:{state:!0}}}setConfig(t){if(!t.entity_prefix)throw new Error("Please define entity_prefix");var e;this._config={...ht,...t},this._entityMap={climate:`climate.${e=this._config.entity_prefix}_climate`,door_lock:`lock.${e}_door_lock`,charge_cable_lock:`lock.${e}_charge_cable_lock`,frunk:`cover.${e}_frunk`,trunk:`cover.${e}_trunk`,charger_door:`cover.${e}_charger_door`,windows:`cover.${e}_windows`,charging:`switch.${e}_charging`,sentry_mode:`switch.${e}_sentry_mode`,defrost:`switch.${e}_defrost`,battery_level:`sensor.${e}_battery_level`,battery_range:`sensor.${e}_battery_range`,inside_temperature:`sensor.${e}_inside_temperature`,outside_temperature:`sensor.${e}_outside_temperature`,odometer:`sensor.${e}_odometer`,charging_power:`sensor.${e}_charging_power`,charge_rate:`sensor.${e}_charge_rate`,charge_energy_added:`sensor.${e}_charge_energy_added`,charger_voltage:`sensor.${e}_charger_voltage`,charger_current:`sensor.${e}_charger_current`,time_to_full_charge:`sensor.${e}_time_to_full_charge`,is_charging:`binary_sensor.${e}_charging`,is_online:`binary_sensor.${e}_online`,user_present:`binary_sensor.${e}_user_present`,honk_horn:`button.${e}_honk_horn`,flash_lights:`button.${e}_flash_lights`,wake:`button.${e}_wake`,charge_limit:`number.${e}_charge_limit`,charge_current_number:`number.${e}_charging_amps`,location:`device_tracker.${e}_location`,seat_heater_front_left:`select.${e}_seat_heater_front_left`,seat_heater_front_right:`select.${e}_seat_heater_front_right`,seat_heater_rear_left:`select.${e}_seat_heater_rear_left`,seat_heater_rear_right:`select.${e}_seat_heater_rear_right`,steering_wheel_heater:`switch.${e}_steering_wheel_heater`,firmware:`update.${e}_firmware`}}set hass(t){const e=this.__hass;this.__hass=t,t&&this._entityMap&&(this._vehicleState=function(t,e){const i=dt(t,e.climate);dt(t,e.battery_level);const r=dt(t,e.battery_range),s=dt(t,e.inside_temperature),n=dt(t,e.odometer),a=dt(t,e.location),o=dt(t,e.firmware);return{battery_level:_t(t,e.battery_level),battery_range:_t(t,e.battery_range),range_unit:r?.attributes?.unit_of_measurement||"km",is_locked:"locked"===dt(t,e.door_lock)?.state,is_charging:pt(t,e.is_charging)||pt(t,e.charging),is_online:pt(t,e.is_online),is_climate_on:"off"!==i?.state&&"unavailable"!==i?.state&&void 0!==i?.state,climate_target_temp:i?.attributes?.temperature??null,climate_current_temp:i?.attributes?.current_temperature??null,climate_hvac_mode:i?.state||"off",inside_temp:_t(t,e.inside_temperature),outside_temp:_t(t,e.outside_temperature),temp_unit:s?.attributes?.unit_of_measurement||"°C",charge_limit:_t(t,e.charge_limit),charge_current:_t(t,e.charge_current_number),charging_power:_t(t,e.charging_power),charge_rate:_t(t,e.charge_rate),charge_energy_added:_t(t,e.charge_energy_added),charger_voltage:_t(t,e.charger_voltage),time_to_full_charge:_t(t,e.time_to_full_charge),odometer:_t(t,e.odometer),odometer_unit:n?.attributes?.unit_of_measurement||"km",sentry_mode:pt(t,e.sentry_mode),defrost_on:pt(t,e.defrost),frunk_open:gt(t,e.frunk),trunk_open:gt(t,e.trunk),charger_door_open:gt(t,e.charger_door),windows_open:gt(t,e.windows),firmware_version:o?.attributes?.installed_version??null,firmware_update_available:"on"===o?.state,seat_heater_front_left:dt(t,e.seat_heater_front_left)?.state||"off",seat_heater_front_right:dt(t,e.seat_heater_front_right)?.state||"off",seat_heater_rear_left:dt(t,e.seat_heater_rear_left)?.state||"off",seat_heater_rear_right:dt(t,e.seat_heater_rear_right)?.state||"off",steering_wheel_heater:pt(t,e.steering_wheel_heater),user_present:pt(t,e.user_present),latitude:a?.attributes?.latitude??null,longitude:a?.attributes?.longitude??null}}(t,this._entityMap)),this.requestUpdate("hass",e)}get hass(){return this.__hass}render(){if(!this._config||!this.hass)return D`<ha-card><div style="padding:16px">Loading...</div></ha-card>`;const t=this._vehicleState?.battery_level??0,e=this._vehicleState?.is_charging??!1,i=e||t>50?"#30D158":t>20?"#FF9F0A":"#FF3B30",r=this._showRange?`${null!==this._vehicleState?.battery_range?Math.round(this._vehicleState.battery_range):"--"} ${this._vehicleState?.range_unit||"km"}`:`${this._vehicleState?.battery_level??"--"}%`;return D`
      <ha-card>
        <div class="card-container">
          <div class="card-header">
            <span class="battery-indicator" @click=${this._toggleBatteryDisplay}>
              <span class="battery-pct">${r}</span>
              <svg class="battery-svg" viewBox="0 0 28 13" width="28" height="13">
                <rect x="0" y="0" width="24" height="13" rx="2.5" ry="2.5"
                  fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.2"/>
                <rect x="24.5" y="3.5" width="2.5" height="6" rx="1" ry="1"
                  fill="rgba(255,255,255,0.35)"/>
                <rect x="1.5" y="1.5"
                  width="${Math.max(0,Math.min(21,t/100*21))}"
                  height="10" rx="1.5" ry="1.5" fill="${i}"/>
                ${e?D`
                  <path d="M10 1.5 L7.5 6.5 L10 6.5 L8 11.5 L13.5 5.5 L10.5 5.5 L12.5 1.5 Z"
                    fill="white" opacity="0.9"/>
                `:""}
              </svg>
            </span>
          </div>

          <div class="view-content">
            <tesla-view-main
              .hass=${this.hass}
              .config=${this._config}
              .vehicleState=${this._vehicleState}
              .entityMap=${this._entityMap}
            ></tesla-view-main>
          </div>
        </div>
      </ha-card>
    `}_toggleBatteryDisplay(){this._showRange=!this._showRange}getCardSize(){return 6}static getConfigElement(){return document.createElement("tesla-card-editor")}static getStubConfig(){return{type:"custom:tesla-card",entity_prefix:"my_tesla",vehicle_model:"model_3",paint_color:"pearl_white"}}static get styles(){return[ut]}}customElements.define("tesla-card",Ct),window.customCards=window.customCards||[],window.customCards.push({type:"tesla-card",name:"Tesla Card",description:`Tesla app-style vehicle card (v${lt})`,preview:!0}),console.info(`%c TESLA-CARD %c v${lt} `,"color: white; background: #e53935; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;","color: white; background: #333; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;");export{Ct as TeslaCard};
