/*! Tesla Card v1.0.0 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t=>t,s$1=t$1.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$1=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o$1,r=`<${n}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$1+x):s+o$1+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$1)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$1),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$1,t+1));)d.push({type:7,index:l}),t+=o$1.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o=s.litElementPolyfillSupport;o?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

const CARD_VERSION = '1.0.1';
const PAINT_COLORS = {
    pearl_white: { name: 'Pearl White Multi-Coat', hex: '#ECF0F1', metallic: true },
    solid_black: { name: 'Solid Black', hex: '#1A1A1A', metallic: false },
    midnight_silver: { name: 'Midnight Silver Metallic', hex: '#4A4D51', metallic: true },
    deep_blue: { name: 'Deep Blue Metallic', hex: '#1B2A49', metallic: true },
    red_multi_coat: { name: 'Red Multi-Coat', hex: '#A5171B', metallic: true },
    ultra_red: { name: 'Ultra Red', hex: '#C41E3A', metallic: true },
    quicksilver: { name: 'Quicksilver', hex: '#B8BAC0', metallic: true },
    midnight_cherry: { name: 'Midnight Cherry Red', hex: '#5C0A1A', metallic: true },
    stealth_grey: { name: 'Stealth Grey', hex: '#393C41', metallic: false },
    ultra_white: { name: 'Ultra White', hex: '#FAFAFA', metallic: false },
    lunar_silver: { name: 'Lunar Silver', hex: '#A8A9AD', metallic: true },
    diamond_black: { name: 'Diamond Black', hex: '#0D0D0D', metallic: true },
};
const VEHICLE_MODELS = {
    model_3: 'Model 3',
    model_y: 'Model Y',
    cybertruck: 'Cybertruck',
    cybercab: 'Cybercab',
};
const VEHICLE_VARIANTS = {
    standard: 'Standard',
    long_range: 'Long Range',
    performance: 'Performance',
};
const DEFAULT_CONFIG = {
    vehicle_model: 'model_3',
    vehicle_variant: 'standard',
    paint_color: 'pearl_white',
    show_vehicle: true,
    default_view: 'main',
    show_lock: true,
    show_charge_port: true,
    show_frunk: true,
    show_trunk: true,
    show_vent: true,
    show_climate: true,
};

/**
 * Entity key suffixes from the official Tesla Fleet HA integration.
 * Source: github.com/home-assistant/core/tree/dev/homeassistant/components/tesla_fleet
 */
function buildEntityMap(prefix, _hass) {
    const p = prefix;
    return {
        // climate.py — key: "driver_temp"
        climate: `climate.${p}_driver_temp`,
        // lock.py — keys: "vehicle_state_locked", "charge_state_charge_port_latch"
        door_lock: `lock.${p}_vehicle_state_locked`,
        charge_cable_lock: `lock.${p}_charge_state_charge_port_latch`,
        // cover.py — keys: "vehicle_state_ft", "vehicle_state_rt", "charge_state_charge_port_door_open", "windows"
        frunk: `cover.${p}_vehicle_state_ft`,
        trunk: `cover.${p}_vehicle_state_rt`,
        charger_door: `cover.${p}_charge_state_charge_port_door_open`,
        windows: `cover.${p}_windows`,
        // switch.py — keys: "vehicle_state_sentry_mode", "climate_state_defrost_mode", "charge_state_charging_state"
        charging: `switch.${p}_charge_state_charging_state`,
        sentry_mode: `switch.${p}_vehicle_state_sentry_mode`,
        defrost: `switch.${p}_climate_state_defrost_mode`,
        // sensor.py — vehicle sensor keys
        battery_level: `sensor.${p}_charge_state_battery_level`,
        battery_range: `sensor.${p}_charge_state_battery_range`,
        inside_temperature: `sensor.${p}_climate_state_inside_temp`,
        outside_temperature: `sensor.${p}_climate_state_outside_temp`,
        odometer: `sensor.${p}_vehicle_state_odometer`,
        charging_power: `sensor.${p}_charge_state_charger_power`,
        charge_rate: `sensor.${p}_charge_state_charge_rate`,
        charge_energy_added: `sensor.${p}_charge_state_charge_energy_added`,
        charger_voltage: `sensor.${p}_charge_state_charger_voltage`,
        charger_current: `sensor.${p}_charge_state_charger_actual_current`,
        time_to_full_charge: `sensor.${p}_charge_state_minutes_to_full_charge`,
        // binary_sensor.py — keys: "state", "vehicle_state_is_user_present"
        is_charging: `binary_sensor.${p}_charge_state_conn_charge_cable`,
        is_online: `binary_sensor.${p}_state`,
        user_present: `binary_sensor.${p}_vehicle_state_is_user_present`,
        // button.py — keys: "honk", "flash_lights", "wake"
        honk_horn: `button.${p}_honk`,
        flash_lights: `button.${p}_flash_lights`,
        wake: `button.${p}_wake`,
        // number.py — keys: "charge_state_charge_limit_soc", "charge_state_charge_current_request"
        charge_limit: `number.${p}_charge_state_charge_limit_soc`,
        charge_current_number: `number.${p}_charge_state_charge_current_request`,
        // device_tracker.py — key: "location"
        location: `device_tracker.${p}_location`,
        // select.py — seat heater keys
        seat_heater_front_left: `select.${p}_climate_state_seat_heater_left`,
        seat_heater_front_right: `select.${p}_climate_state_seat_heater_right`,
        seat_heater_rear_left: `select.${p}_climate_state_seat_heater_rear_left`,
        seat_heater_rear_right: `select.${p}_climate_state_seat_heater_rear_right`,
        // switch.py — key: "climate_state_auto_steering_wheel_heat"
        steering_wheel_heater: `switch.${p}_climate_state_auto_steering_wheel_heat`,
        // update.py — key: "vehicle_state_software_update_status"
        firmware: `update.${p}_vehicle_state_software_update_status`,
    };
}
// ── State extraction ─────────────────────────────────────
function getState(hass, entityId) {
    return hass.states[entityId];
}
function getNumericState(hass, entityId) {
    const entity = getState(hass, entityId);
    if (!entity || entity.state === 'unavailable' || entity.state === 'unknown')
        return null;
    const val = parseFloat(entity.state);
    return isNaN(val) ? null : val;
}
function getBoolState(hass, entityId, trueValues = ['on']) {
    const entity = getState(hass, entityId);
    if (!entity)
        return false;
    return trueValues.includes(entity.state);
}
function getCoverOpen(hass, entityId) {
    const entity = getState(hass, entityId);
    if (!entity)
        return false;
    return entity.state === 'open';
}
function extractVehicleState(hass, entityMap) {
    const climate = getState(hass, entityMap.climate);
    const rangeEntity = getState(hass, entityMap.battery_range);
    const insideTempEntity = getState(hass, entityMap.inside_temperature);
    const odometerEntity = getState(hass, entityMap.odometer);
    const locationEntity = getState(hass, entityMap.location);
    const firmwareEntity = getState(hass, entityMap.firmware);
    const chargingSwitch = getState(hass, entityMap.charging);
    // Tesla Fleet uses "charge_state_charging_state" sensor for charging status
    // and "charge_state_conn_charge_cable" binary sensor for cable connected
    // The switch "charge_state_charging_state" state is 'on' when charging is enabled
    const isCharging = chargingSwitch?.state === 'on';
    // Time to full charge is in MINUTES in Tesla Fleet
    const minutesToFull = getNumericState(hass, entityMap.time_to_full_charge);
    const hoursToFull = minutesToFull !== null ? minutesToFull / 60 : null;
    return {
        battery_level: getNumericState(hass, entityMap.battery_level),
        battery_range: getNumericState(hass, entityMap.battery_range),
        range_unit: rangeEntity?.attributes?.unit_of_measurement || 'km',
        is_locked: getState(hass, entityMap.door_lock)?.state === 'locked',
        is_charging: isCharging,
        is_online: getState(hass, entityMap.is_online)?.state === 'online',
        is_climate_on: climate?.state !== 'off' && climate?.state !== 'unavailable' && climate?.state !== undefined,
        climate_target_temp: climate?.attributes?.temperature ?? null,
        climate_current_temp: climate?.attributes?.current_temperature ?? null,
        climate_hvac_mode: climate?.state || 'off',
        inside_temp: getNumericState(hass, entityMap.inside_temperature),
        outside_temp: getNumericState(hass, entityMap.outside_temperature),
        temp_unit: insideTempEntity?.attributes?.unit_of_measurement || '°C',
        charge_limit: getNumericState(hass, entityMap.charge_limit),
        charge_current: getNumericState(hass, entityMap.charge_current_number),
        charging_power: getNumericState(hass, entityMap.charging_power),
        charge_rate: getNumericState(hass, entityMap.charge_rate),
        charge_energy_added: getNumericState(hass, entityMap.charge_energy_added),
        charger_voltage: getNumericState(hass, entityMap.charger_voltage),
        time_to_full_charge: hoursToFull,
        odometer: getNumericState(hass, entityMap.odometer),
        odometer_unit: odometerEntity?.attributes?.unit_of_measurement || 'km',
        sentry_mode: getBoolState(hass, entityMap.sentry_mode),
        defrost_on: getBoolState(hass, entityMap.defrost),
        frunk_open: getCoverOpen(hass, entityMap.frunk),
        trunk_open: getCoverOpen(hass, entityMap.trunk),
        charger_door_open: getCoverOpen(hass, entityMap.charger_door),
        windows_open: getCoverOpen(hass, entityMap.windows),
        firmware_version: firmwareEntity?.attributes?.installed_version ?? firmwareEntity?.attributes?.latest_version ?? null,
        firmware_update_available: firmwareEntity?.state === 'on',
        seat_heater_front_left: getState(hass, entityMap.seat_heater_front_left)?.state || 'off',
        seat_heater_front_right: getState(hass, entityMap.seat_heater_front_right)?.state || 'off',
        seat_heater_rear_left: getState(hass, entityMap.seat_heater_rear_left)?.state || 'off',
        seat_heater_rear_right: getState(hass, entityMap.seat_heater_rear_right)?.state || 'off',
        steering_wheel_heater: getBoolState(hass, entityMap.steering_wheel_heater),
        user_present: getBoolState(hass, entityMap.user_present),
        latitude: locationEntity?.attributes?.latitude ?? null,
        longitude: locationEntity?.attributes?.longitude ?? null,
    };
}

const cardStyles = i$3 `
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

  .sentry-icon {
    color: rgba(255,255,255,0.25);
    margin-right: 8px;
    transition: color 0.3s ease;
  }

  .sentry-icon.active {
    color: #e31937;
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
    padding: 0 0 12px;
  }
`;

const IMAGE_MAP = {
    // ── Model 3 Standard (MT369) - Photon wheels ──
    'model_3_PPSW_standard': { file: 'MT369_PPSW_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    'model_3_PR01_standard': { file: 'MT369_PR01_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    'model_3_PN00_standard': { file: 'MT369_PN00_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    'model_3_PX02_standard': { file: 'MT369_PX02_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    'model_3_PPSB_standard': { file: 'MT369_PPSB_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    'model_3_PN01_standard': { file: 'MT369_PN01_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    // ── Model 3 Performance (MT371) - Nova wheels ──
    'model_3_PPSW_performance': { file: 'MT371_PPSW_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    'model_3_PR01_performance': { file: 'MT371_PR01_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    'model_3_PN00_performance': { file: 'MT371_PN00_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    'model_3_PX02_performance': { file: 'MT371_PX02_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    'model_3_PPSB_performance': { file: 'MT371_PPSB_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    'model_3_PN01_performance': { file: 'MT371_PN01_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    // ── Model Y Standard (MTY61) — 3 colors only ──
    'model_y_PX02_standard': { file: 'MTY61_PX02_WY18P_IBB3__my.png', variant: 'standard', wheels: '18"' },
    'model_y_PN01_standard': { file: 'MTY61_PN01_WY18P_IBB3__my.png', variant: 'standard', wheels: '18"' },
    'model_y_PPSW_standard': { file: 'MTY61_PPSW_WY18P_IBB3__my.png', variant: 'standard', wheels: '18"' },
    // ── Model Y Long Range (MTY48) ──
    'model_y_PPSW_long_range': { file: 'MTY48_PPSW_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
    'model_y_PR01_long_range': { file: 'MTY48_PR01_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
    'model_y_PN00_long_range': { file: 'MTY48_PN00_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
    'model_y_PX02_long_range': { file: 'MTY48_PX02_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
    'model_y_PPSB_long_range': { file: 'MTY48_PPSB_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
    'model_y_PN01_long_range': { file: 'MTY48_PN01_WY19P_IPB8__my.png', variant: 'long_range', wheels: '19"' },
    // ── Model Y Performance (MTY70) ──
    'model_y_PPSW_performance': { file: 'MTY70_PPSW_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
    'model_y_PR01_performance': { file: 'MTY70_PR01_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
    'model_y_PN00_performance': { file: 'MTY70_PN00_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
    'model_y_PX02_performance': { file: 'MTY70_PX02_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
    'model_y_PPSB_performance': { file: 'MTY70_PPSB_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
    'model_y_PN01_performance': { file: 'MTY70_PN01_WY21A_IPB10__my.png', variant: 'performance', wheels: '21"' },
    // ── Cybertruck ──
    'cybertruck_PPSW_standard': { file: 'MTC04_WH0B_IW04_APBS_APF2_CPF2_CYBR_PRS01_SC05_TW01__ct.png', variant: 'standard', wheels: 'Standard' },
    // ── Cybercab ──
    'cybercab_PPSW_standard': { file: 'cybercab.png', variant: 'standard', wheels: 'Standard' },
};
// Map user-friendly color keys to Tesla paint codes
const COLOR_TO_PAINT_CODE = {
    pearl_white: 'PPSW',
    ultra_red: 'PR01',
    quicksilver: 'PN00',
    diamond_black: 'PX02',
    deep_blue: 'PPSB',
    stealth_grey: 'PN01',
    solid_black: 'PX02',
    midnight_silver: 'PN01',
    red_multi_coat: 'PR01',
    midnight_cherry: 'PR01',
    ultra_white: 'PPSW',
    lunar_silver: 'PN00',
};
function getVehicleImageFile(model, colorKey, variant = 'standard') {
    const paintCode = COLOR_TO_PAINT_CODE[colorKey] || 'PPSW';
    // Try exact match
    const key = `${model}_${paintCode}_${variant}`;
    if (IMAGE_MAP[key])
        return IMAGE_MAP[key].file;
    // Fallback: try standard variant
    const stdKey = `${model}_${paintCode}_standard`;
    if (IMAGE_MAP[stdKey])
        return IMAGE_MAP[stdKey].file;
    // Fallback: try pearl white in requested variant
    const pwKey = `${model}_PPSW_${variant}`;
    if (IMAGE_MAP[pwKey])
        return IMAGE_MAP[pwKey].file;
    // Final fallback: pearl white standard
    const defaultKey = `${model}_PPSW_standard`;
    return IMAGE_MAP[defaultKey]?.file || null;
}
// Returns color keys that have a real image for this model+variant
const PAINT_CODE_TO_COLOR = {};
// Build reverse map
for (const [colorKey, paintCode] of Object.entries(COLOR_TO_PAINT_CODE)) {
    // Keep first match only (avoid overwriting with fallback aliases)
    if (!PAINT_CODE_TO_COLOR[paintCode]) {
        PAINT_CODE_TO_COLOR[paintCode] = colorKey;
    }
}
function getAvailableColors(model, variant = 'standard') {
    const prefix = `${model}_`;
    const suffix = `_${variant}`;
    const colors = [];
    for (const key of Object.keys(IMAGE_MAP)) {
        if (key.startsWith(prefix) && key.endsWith(suffix)) {
            const paintCode = key.slice(prefix.length, key.length - suffix.length);
            const colorKey = PAINT_CODE_TO_COLOR[paintCode];
            if (colorKey && !colors.includes(colorKey)) {
                colors.push(colorKey);
            }
        }
    }
    return colors;
}

function hexToRgb(hex) {
    const n = parseInt(hex.replace('#', ''), 16);
    return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}
class TeslaVehicleRenderer extends i {
    static get properties() {
        return {
            config: { type: Object },
            state: { type: Object },
        };
    }
    static get styles() {
        return i$3 `
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
        margin-top: -13.5%;
        position: relative;
        z-index: 0;
        mask-image: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.03) 60%);
        -webkit-mask-image: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.03) 60%);
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
    `;
    }
    render() {
        const cfg = this.config;
        if (!cfg)
            return b ``;
        const imageFile = getVehicleImageFile(cfg.vehicle_model, cfg.paint_color, cfg.vehicle_variant || 'standard');
        if (!imageFile)
            return b `<div class="no-image">No vehicle image available</div>`;
        const basePath = cfg.image_path || '/hacsfiles/ha_tesla_card/pictures';
        const imgUrl = `${basePath}/${imageFile}`;
        const s = this.state;
        const imgClass = (s && !s.is_online) ? 'offline' : '';
        const paint = PAINT_COLORS[cfg.paint_color];
        const rgb = paint ? hexToRgb(paint.hex) : '200,200,200';
        const ambientStyle = `background: radial-gradient(ellipse 70% 50% at 50% 40%, rgba(${rgb},0.10) 0%, rgba(${rgb},0.03) 50%, transparent 75%);`;
        return b `
      <div class="scene">
        <div class="ambient" style="${ambientStyle}"></div>
        <div class="car-clip">
          <img class="${imgClass}" src="${imgUrl}" alt="" draggable="false" />
        </div>
        <div class="car-reflect">
          <img src="${imgUrl}" alt="" draggable="false" />
        </div>
      </div>
    `;
    }
}
customElements.define('tesla-vehicle-renderer', TeslaVehicleRenderer);

const i18n = {
    en: {
        lock: 'Lock',
        charge: 'Charge',
        frunk: 'Frunk',
        trunk: 'Trunk',
        vent: 'Vent',
        climate: 'Climate',
        hr: 'hr',
        min: 'min',
        remaining: 'remaining',
        calculating: 'Calculating...',
        charge_limit: 'Charge Limit',
        int: 'in',
        ext: 'out',
    },
    fr: {
        lock: 'Verrouiller',
        charge: 'Recharge',
        frunk: 'Frunk',
        trunk: 'Coffre',
        vent: 'Aérer',
        climate: 'Ventiler',
        hr: 'h',
        min: 'min',
        remaining: 'restantes',
        calculating: 'Calcul...',
        charge_limit: 'Limite de charge',
        int: 'int',
        ext: 'ext',
    },
};
function t(lang, key) {
    const l = lang?.startsWith('fr') ? 'fr' : 'en';
    return i18n[l]?.[key] ?? i18n['en'][key] ?? key;
}
class TeslaViewMain extends i {
    constructor() {
        super(...arguments);
        this._prevCharging = false;
        this._lastChargeState = null;
        this._prevClimate = false;
    }
    static get properties() {
        return {
            hass: { attribute: false },
            config: { attribute: false },
            vehicleState: { attribute: false },
            entityMap: { attribute: false },
            _prevCharging: { state: true },
            _lastChargeState: { state: true },
            _prevClimate: { state: true },
        };
    }
    render() {
        const s = this.vehicleState;
        if (!s)
            return b ``;
        const charging = s.is_charging;
        if (charging) {
            this._lastChargeState = s;
        }
        const cpClass = charging ? 'cp cp-in' : (this._prevCharging ? 'cp cp-out' : 'cp cp-hidden');
        if (charging !== this._prevCharging) {
            this._prevCharging = charging;
        }
        // Use last known charge state for the exit animation content
        const cpState = charging ? s : this._lastChargeState;
        return b `
      <div class="root">
        <div class="${cpClass}" @animationend=${this._onCpAnimEnd}>
          ${cpState ? this._renderChargeContent(cpState) : ''}
        </div>

        <div class="car-wrap">
          <tesla-vehicle-renderer
            .config=${this.config}
            .state=${this.vehicleState}
          ></tesla-vehicle-renderer>
        </div>

        ${this._renderClimatePanel(s)}

        <div class="actions-zone">
          <div class="actions">
          ${this.config.show_lock !== false ? this._act(s.is_locked ? 'grey' : 'white', s.is_locked ? iconLock : iconUnlock, this._t('lock'), () => this._toggleLock()) : ''}
          ${this.config.show_charge_port !== false ? this._act(s.is_charging ? 'green' : s.charger_door_open ? 'white' : 'grey', iconChargePort, this._t('charge'), () => this._toggleChargePort()) : ''}
          ${this.config.show_frunk !== false ? this._act(s.frunk_open ? 'white' : 'grey', iconFrunk, this._t('frunk'), () => this._openFrunk()) : ''}
          ${this.config.show_trunk !== false ? this._act(s.trunk_open ? 'white' : 'grey', iconTrunk, this._t('trunk'), () => this._toggleTrunk()) : ''}
          ${this.config.show_vent !== false ? this._act(s.windows_open ? 'white' : 'grey', iconVent, this._t('vent'), () => this._ventWindows()) : ''}
          ${this.config.show_climate !== false ? this._act(s.is_climate_on ? 'white' : 'grey', iconClimate, this._t('climate'), () => this._toggleClimate()) : ''}
          </div>
        </div>
      </div>
    `;
    }
    _onCpAnimEnd(e) {
        if (e.animationName === 'cp-slide-out') {
            const el = e.currentTarget;
            el.classList.add('cp-hidden');
            el.classList.remove('cp-out');
        }
    }
    _renderChargeContent(s) {
        const t = s.time_to_full_charge;
        let timeStr = '';
        if (t !== null && t > 0) {
            const h = Math.floor(t);
            const m = Math.round((t - h) * 60);
            const hr = this._t('hr'), mn = this._t('min'), rem = this._t('remaining');
            if (h > 0 && m > 0)
                timeStr = `${h} ${hr} ${m} ${mn} ${rem}`;
            else if (h > 0)
                timeStr = `${h} ${hr} ${rem}`;
            else
                timeStr = `${m} ${mn} ${rem}`;
        }
        else {
            timeStr = this._t('calculating');
        }
        const ru = s.range_unit === 'mi' ? 'mi/hr' : 'km/hr';
        return b `
      <div class="cp-bar"><div class="cp-bar-pulse"></div></div>
      <div class="cp-inner">
        <div class="cp-bolt">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#30D158">
            <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66l.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
          </svg>
        </div>
        <div class="cp-time">${timeStr}</div>
        <div class="cp-limit">${this._t('charge_limit')}: ${s.charge_limit ?? 80}%</div>
        <div class="cp-sep"></div>
        <div class="cp-stat">${s.charging_power ?? '--'} kW</div>
        <div class="cp-stat">${s.charge_rate !== null ? Math.round(s.charge_rate) : '--'} ${ru}</div>
        <div class="cp-stat">+${s.charge_energy_added ?? '--'} kWh</div>
        <div class="cp-stat">${s.charge_current ?? '--'}/${s.charge_current ?? '--'} A</div>
        <div class="cp-stat">${s.charger_voltage ?? '--'} V</div>
      </div>
    `;
    }
    _act(state, icon, label, fn) {
        return b `
      <button class="act act-${state}" @click=${fn}>
        ${icon}
        <span class="act-label">${label}</span>
      </button>`;
    }
    _renderClimatePanel(s) {
        const climateOn = s.is_climate_on;
        const clClass = climateOn ? 'cl cl-in' : (this._prevClimate ? 'cl cl-out' : 'cl cl-hidden');
        if (climateOn !== this._prevClimate) {
            this._prevClimate = climateOn;
        }
        return b `
      <div class="${clClass}" @animationend=${this._onClAnimEnd}>
        ${this._renderClimateContent(s)}
      </div>
    `;
    }
    _onClAnimEnd(e) {
        if (e.animationName === 'cl-slide-out') {
            const el = e.currentTarget;
            el.classList.add('cl-hidden');
            el.classList.remove('cl-out');
        }
    }
    _renderClimateContent(s) {
        const target = s.climate_target_temp ?? 20;
        const inside = s.inside_temp;
        const outside = s.outside_temp;
        return b `
      <div class="cl-inner">
        <button class="cl-btn" @click=${this._tempUp}>
          <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0"/></svg>
        </button>
        <div class="cl-target">${target}°</div>
        <button class="cl-btn" @click=${this._tempDown}>
          <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"/></svg>
        </button>
        <div class="cl-temps">
          ${inside !== null ? b `<span>${inside}° ${this._t('int')}</span>` : ''}
          ${outside !== null ? b `<span>${outside}° ${this._t('ext')}</span>` : ''}
        </div>
      </div>
    `;
    }
    _t(key) { return t(this.hass?.language || 'en', key); }
    _toggleLock() { this.hass?.callService('lock', this.vehicleState.is_locked ? 'unlock' : 'lock', { entity_id: this.entityMap.door_lock }); }
    _toggleClimate() { this.hass?.callService('climate', this.vehicleState.is_climate_on ? 'turn_off' : 'turn_on', { entity_id: this.entityMap.climate }); }
    _ventWindows() { this.hass?.callService('cover', this.vehicleState.windows_open ? 'close_cover' : 'open_cover', { entity_id: this.entityMap.windows }); }
    _toggleChargePort() { this.hass?.callService('cover', this.vehicleState.charger_door_open ? 'close_cover' : 'open_cover', { entity_id: this.entityMap.charger_door }); }
    _openFrunk() { this.hass?.callService('cover', 'open_cover', { entity_id: this.entityMap.frunk }); }
    _toggleTrunk() { this.hass?.callService('cover', this.vehicleState.trunk_open ? 'close_cover' : 'open_cover', { entity_id: this.entityMap.trunk }); }
    _tempUp() { const t = this.vehicleState.climate_target_temp ?? 20; this.hass?.callService('climate', 'set_temperature', { entity_id: this.entityMap.climate, temperature: Math.min(30, t + 0.5) }); }
    _tempDown() { const t = this.vehicleState.climate_target_temp ?? 20; this.hass?.callService('climate', 'set_temperature', { entity_id: this.entityMap.climate, temperature: Math.max(15, t - 0.5) }); }
    static get styles() {
        return i$3 `
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
        left: 0;
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

      .act-grey { color: rgba(255,255,255,0.30); }
      .act-white { color: rgba(255,255,255,0.85); }
      .act-green { color: #30D158; }

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
        right: -2px;
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
    `;
    }
}
customElements.define('tesla-view-main', TeslaViewMain);
// Lock (Tesla official)
const iconLock = b `<svg viewBox="24 13 55 67" fill="none"><path fill-rule="evenodd" d="M50.99 77.50Q57.83 77.51 64.65 77.48Q70.63 77.45 72.13 76.54Q75.34 74.60 75.50 69.97Q75.51 69.54 75.53 49.12Q75.53 44.58 74.78 42.99C73.19 39.67 71.02 39.64 67.91 38.89A0.67 0.67 0 0 1 67.40 38.23Q67.40 35.66 67.39 32.00C67.36 22.81 60.29 15.63 51.01 15.62C41.74 15.62 34.65 22.80 34.62 31.99Q34.61 35.65 34.60 38.22A0.67 0.67 0 0 1 34.09 38.88C30.98 39.63 28.81 39.65 27.22 42.97Q26.47 44.56 26.47 49.10Q26.47 69.52 26.48 69.95Q26.64 74.58 29.85 76.52Q31.35 77.44 37.32 77.47Q44.15 77.50 50.99 77.50ZM39.95 39.00L62.05 39.00A0.57 0.57 0 0 0 62.62 38.43L62.62 32.80A12.30 11.49 90 0 0 51.13 20.50L50.87 20.50A12.30 11.49-90 0 0 39.38 32.80L39.38 38.43A0.57 0.57 0 0 0 39.95 39.00Z" fill="currentColor"/></svg>`;
// Unlock (Tesla official)
const iconUnlock = b `<svg viewBox="9 8 70 72" fill="none"><path d="M40.40 38.59Q40.36 34.85 40.40 30.78C40.59 12.29 14.89 9.87 11.12 28.42Q10.72 30.40 11.06 39.05A2.32 2.32 0 0 0 13.48 41.28L13.62 41.27A2.49 2.47-0.7 0 0 16.00 38.84C16.11 32.12 14.37 23.96 22.61 21.05C29.36 18.67 35.69 23.94 35.58 31.01C35.55 33.00 35.62 35.47 35.64 38.32A0.61 0.61 0 0 1 35.06 38.93C28.68 39.34 27.42 43.04 27.45 49.16Q27.53 65.87 27.49 69.49Q27.43 74.12 30.42 76.22Q32.31 77.55 37.81 77.54Q67.64 77.47 69.25 77.49C75.03 77.57 76.72 72.91 76.54 67.41Q76.48 65.49 76.49 46.01C76.50 40.38 71.80 38.79 66.45 38.97Q65.09 39.02 40.79 38.98A0.39 0.39 0 0 1 40.40 38.59Z" fill="currentColor"/></svg>`;
// Vent / window (Tesla official)
const iconVent = b `<svg viewBox="50 18 68 68" fill="none"><path fill-rule="evenodd" d="M111.27 78.92Q109.11 81.07 106.78 81.13Q95.78 81.41 65.02 81.23C59.91 81.20 56.97 80.63 54.89 76.43Q54.16 74.97 54.19 71.59Q54.24 66.54 54.30 49.50Q54.32 44.66 57.67 41.19Q61.57 37.15 63.93 34.86Q64.80 34.02 65.67 33.15Q66.55 32.28 67.39 31.41Q69.69 29.06 73.75 25.18Q77.23 21.84 82.07 21.84Q99.11 21.85 104.16 21.82Q107.54 21.80 109.00 22.54C113.19 24.63 113.75 27.58 113.76 32.69Q113.82 63.45 113.49 74.45Q113.43 76.78 111.27 78.92ZM83.75 27.99C81.05 28.02 79.19 28.89 76.51 31.54Q69.41 38.56 63.00 45.00Q61.41 46.60 60.75 47.69A0.52 0.51-74.3 0 0 61.18 48.47L67.86 48.47A2.12 2.10-67.3 0 0 69.35 47.85L80.69 36.52A5.50 5.45-67.4 0 1 84.57 34.90L106.11 34.90A1.35 1.34 0 0 0 107.46 33.56L107.46 29.95A1.95 1.95 0 0 0 105.53 28.00Q93.62 27.86 83.75 27.99ZM107.26 54.95L60.62 54.87A0.23 0.23 0 0 0 60.39 55.10L60.36 72.14A3.11 2.81 0.1 0 0 63.46 74.95L104.34 75.03A3.11 2.81 0.1 0 0 107.46 72.22L107.49 55.18A0.23 0.23 0 0 0 107.26 54.95Z" fill="currentColor"/></svg>`;
// Charge port (Tesla official)
const iconChargePort = b `<svg viewBox="26 16 52 74" fill="none"><path d="M51.01 87.78A1.18 1.18 0 0 1 50.37 86.73L50.37 60.48A1.13 1.12 0 0 0 49.24 59.36L29.66 59.36A1.29 1.29 0 0 1 28.55 57.42Q45.62 28.22 50.98 19.00Q51.34 18.39 51.62 18.22A1.33 1.33 0 0 1 53.64 19.35Q53.64 40.75 53.65 45.40A1.25 1.25 0 0 0 54.90 46.65L74.31 46.65A1.33 1.32 15.1 0 1 75.46 48.64Q55.89 82.01 53.16 86.88Q52.29 88.43 51.01 87.78Z" fill="currentColor"/></svg>`;
// Frunk (Tesla official)
// Frunk (Tesla official)
const iconFrunk = b `<svg viewBox="14 17 76 72" fill="none"><path fill-rule="evenodd" d="M57.79 39.34Q38.56 39.68 21.86 47.46C19.22 48.69 17.23 50.25 17.07 53.04Q16.93 55.37 17.03 68.26C17.07 73.04 20.96 75.04 25.71 75.29Q26.41 75.32 32.58 75.95A1.66 1.64 74.8 0 1 33.77 76.64C40.31 85.79 52.81 85.66 59.62 76.85A0.88 0.87 18.1 0 1 60.32 76.50L83.64 76.50A3.20 3.20 0 0 0 86.84 73.30L86.84 72.83A3.33 3.33 0 0 0 83.51 69.50L63.06 69.50A0.57 0.57 0 0 1 62.49 68.91Q62.68 60.78 56.96 55.79C53.25 52.55 47.23 51.07 42.75 52.52Q31.34 56.18 30.93 68.49A0.25 0.25 0 0 1 30.65 68.73L24.34 68.12A0.37 0.37 0 0 1 24.00 67.75L24.00 54.81A1.05 1.04-12.4 0 1 24.61 53.86Q44.11 44.94 64.71 46.71A5.57 5.52 34.1 0 0 67.63 46.16L85.07 37.63A3.41 3.41 0 0 0 86.67 33.15L86.62 33.04A3.44 3.43 64.9 0 0 81.97 31.35L68.32 38.05A0.92 0.91 53.8 0 1 67.27 37.88Q52.58 23.40 30.83 19.69A3.40 3.40 0 0 0 26.91 22.47L26.87 22.69A3.44 3.44 0 0 0 29.73 26.66Q45.63 29.14 57.95 38.87A0.26 0.26 0 0 1 57.79 39.34ZM55.47 67.75A8.72 8.72 0 0 0 46.75 59.03A8.72 8.72 0 0 0 38.03 67.75A8.72 8.72 0 0 0 46.75 76.47A8.72 8.72 0 0 0 55.47 67.75Z" fill="currentColor"/></svg>`;
// Trunk
const iconTrunk = b `<svg viewBox="0 0 24 24"><path d="M21.548 13.363l-.248-.473l.013-1.291c.005-.206.27-.022.339-.215l.255-.891c.34-.635-.577-1.621-.912-1.557l-3.267-.687a11.4 11.4 0 0 1-1.768-.525l-.267-.1L17.986 5.3a.816.816 0 0 1 1.322.135l.307.377a1.115 1.115 0 0 0 1.582.148a.87.87 0 0 0 .078-1.254l-1.424-1.343a1.574 1.574 0 0 0-2.41 0l-3.67 3.514l-5.249-2.034a5.9 5.9 0 0 0-2.139-.4H3.046a1.046 1.046 0 0 0 0 2.092H6.1a5.4 5.4 0 0 1 1.932.365l7.121 2.758a13.5 13.5 0 0 0 2.035.608l.652.14c.7.152 1.844.126 1.5.759l-.229.436l.017 1.651l.566.993A1.1 1.1 0 0 1 20 15v.585a1.08 1.08 0 0 1-1.08 1.08h-1.152c.013-.129.028-.256.032-.387c0-.045.007-.088.007-.132a5.062 5.062 0 1 0-10.124 0v.085c0 .147.017.29.032.434H3.046a1.047 1.047 0 0 0 0 2.093h5.383a5.027 5.027 0 0 0 8.633 0h2.3c1.509 0 2.613-.681 2.613-2.189L22 14.325a1.8 1.8 0 0 0-.452-.962M10.2 16.238c0-.032-.01-.063-.01-.1a2.551 2.551 0 1 1 5.1 0c0 .041-.01.079-.012.12a2.5 2.5 0 0 1-.053.4a2.55 2.55 0 0 1-1.386 1.773a2.46 2.46 0 0 1-2.24-.023a2.57 2.57 0 0 1-1.4-2.173z" fill="currentColor"/></svg>`;
// Climate / fan (Tesla official — 4 blades only)
const iconClimate = b `<svg viewBox="16 13 76 76" fill="none"><path d="M52.27 46.50L52.23 18.72A2.65 2.65 0 0 0 49.57 16.08L49.36 16.08A16.43 16.36 89.9 0 0 33.03 32.54L33.03 32.76A16.43 16.36 89.9 0 0 49.42 49.16L49.63 49.16A2.65 2.65 0 0 0 52.27 46.50Z" fill="currentColor"/><path d="M58.37 49.25L86.39 49.25A2.53 2.53 0 0 0 88.92 46.72L88.92 46.39A16.42 16.36 0 0 0 72.50 30.03L72.26 30.03A16.42 16.36 0 0 0 55.84 46.39L55.84 46.72A2.53 2.53 0 0 0 58.37 49.25Z" fill="currentColor"/><path d="M49.55 52.72L21.69 52.76A2.62 2.62 0 0 0 19.08 55.39L19.08 55.62A16.44 16.37-0.1 0 0 35.55 71.96L35.77 71.96A16.44 16.37-0.1 0 0 52.18 55.56L52.18 55.33A2.62 2.62 0 0 0 49.55 52.72Z" fill="currentColor"/><path d="M55.72 55.36L55.76 83.38A2.53 2.53 0 0 0 58.30 85.90L58.62 85.90A16.44 16.37 89.9 0 0 74.96 69.43L74.96 69.23A16.44 16.37 89.9 0 0 58.56 52.82L58.24 52.82A2.53 2.53 0 0 0 55.72 55.36Z" fill="currentColor"/></svg>`;

class TeslaCardEditor extends i {
    static get properties() {
        return {
            hass: { attribute: false },
            _config: { state: true },
        };
    }
    setConfig(config) {
        this._config = { ...DEFAULT_CONFIG, ...config };
    }
    render() {
        if (!this._config)
            return b ``;
        return b `
      <div class="editor">
        <!-- ── Vehicle ── -->
        <div class="section-title">Vehicle</div>

        <div class="field">
          <label>Entity Prefix</label>
          <input type="text" .value=${this._config.entity_prefix || ''}
            @input=${(e) => this._set('entity_prefix', e.target.value)}
            placeholder="my_tesla" />
          <small>Prefix of your Tesla Fleet entities (sensor.<b>PREFIX</b>_battery_level)</small>
        </div>

        <div class="row">
          <div class="field flex">
            <label>Model</label>
            <select .value=${this._config.vehicle_model}
              @change=${(e) => this._set('vehicle_model', e.target.value)}>
              ${Object.entries(VEHICLE_MODELS).map(([k, v]) => b `<option value=${k} ?selected=${k === this._config.vehicle_model}>${v}</option>`)}
            </select>
          </div>
          <div class="field flex">
            <label>Variant</label>
            <select .value=${this._config.vehicle_variant || 'standard'}
              @change=${(e) => this._set('vehicle_variant', e.target.value)}>
              ${Object.entries(VEHICLE_VARIANTS).map(([k, v]) => b `<option value=${k} ?selected=${k === (this._config.vehicle_variant || 'standard')}>${v}</option>`)}
            </select>
          </div>
        </div>

        <div class="field">
          <label>Paint Color</label>
          <div class="color-row">
            <select .value=${this._config.paint_color}
              @change=${(e) => this._set('paint_color', e.target.value)}>
              ${this._getColors().map(([k, c]) => b `<option value=${k} ?selected=${k === this._config.paint_color}>${c.name}</option>`)}
            </select>
            <div class="color-dot" style="background:${PAINT_COLORS[this._config.paint_color]?.hex || '#ccc'}"></div>
          </div>
        </div>

        <div class="field">
          <label>Image Path (optional)</label>
          <input type="text" .value=${this._config.image_path || ''}
            @input=${(e) => this._set('image_path', e.target.value)}
            placeholder="/local/community/ha-tesla-card/pictures" />
          <small>Override the path to vehicle images</small>
        </div>

        <!-- ── Buttons ── -->
        <div class="section-title">Action Buttons</div>

        <div class="toggles">
          ${this._toggle('show_lock', 'Lock / Unlock')}
          ${this._toggle('show_charge_port', 'Charge Port')}
          ${this._toggle('show_frunk', 'Frunk')}
          ${this._toggle('show_trunk', 'Trunk')}
          ${this._toggle('show_vent', 'Vent Windows')}
          ${this._toggle('show_climate', 'Climate')}
        </div>
      </div>
    `;
    }
    _getColors() {
        const available = getAvailableColors(this._config.vehicle_model, this._config.vehicle_variant || 'standard');
        if (available.length === 0) {
            return Object.entries(PAINT_COLORS).map(([k, c]) => [k, c]);
        }
        return available
            .filter(k => PAINT_COLORS[k])
            .map(k => [k, PAINT_COLORS[k]]);
    }
    _toggle(key, label) {
        const checked = this._config[key] !== false;
        return b `
      <label class="toggle-row">
        <span>${label}</span>
        <input type="checkbox" .checked=${checked}
          @change=${(e) => this._set(key, e.target.checked)} />
        <span class="toggle-track"><span class="toggle-thumb"></span></span>
      </label>
    `;
    }
    _set(key, value) {
        this._config = { ...this._config, [key]: value };
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: { config: this._config },
            bubbles: true,
            composed: true,
        }));
    }
    static get styles() {
        return i$3 `
      :host { display: block; }
      .editor { display: flex; flex-direction: column; gap: 12px; padding: 8px 0; }

      .section-title {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        color: var(--primary-color, #03a9f4);
        margin-top: 8px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .field { display: flex; flex-direction: column; gap: 4px; }
      .field.flex { flex: 1; }
      .field label { font-size: 13px; font-weight: 500; color: var(--primary-text-color, #333); }
      .field small { font-size: 11px; color: var(--secondary-text-color, #777); }
      .field small b { font-weight: 600; }

      .row { display: flex; gap: 12px; }

      .field input, .field select {
        padding: 8px 12px;
        border: 1px solid var(--divider-color, #ddd);
        border-radius: 8px;
        font-size: 14px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #333);
        font-family: inherit;
        width: 100%;
        box-sizing: border-box;
      }
      .field input:focus, .field select:focus {
        outline: none;
        border-color: var(--primary-color, #03a9f4);
      }

      .color-row { display: flex; align-items: center; gap: 8px; }
      .color-row select { flex: 1; }
      .color-dot {
        width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0;
        border: 2px solid var(--divider-color, #ddd);
      }

      /* Toggle switches */
      .toggles { display: flex; flex-direction: column; gap: 4px; }

      .toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e8e8e8);
        cursor: pointer;
        font-size: 14px;
        color: var(--primary-text-color, #333);
        -webkit-tap-highlight-color: transparent;
      }

      .toggle-row input { display: none; }

      .toggle-track {
        position: relative;
        width: 40px;
        height: 22px;
        background: var(--divider-color, #ccc);
        border-radius: 11px;
        transition: background 0.2s;
        flex-shrink: 0;
      }

      .toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 18px;
        height: 18px;
        background: white;
        border-radius: 50%;
        transition: transform 0.2s;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      }

      .toggle-row input:checked ~ .toggle-track {
        background: var(--primary-color, #03a9f4);
      }

      .toggle-row input:checked ~ .toggle-track .toggle-thumb {
        transform: translateX(18px);
      }
    `;
    }
}
customElements.define('tesla-card-editor', TeslaCardEditor);

class TeslaCard extends i {
    constructor() {
        super(...arguments);
        this._showRange = false;
        this._entityMapResolved = false;
    }
    static get properties() {
        return {
            hass: { attribute: false },
            _config: { state: true },
            _vehicleState: { state: true },
            _entityMap: { state: true },
            _showRange: { state: true },
        };
    }
    setConfig(config) {
        if (!config.entity_prefix) {
            throw new Error('Please define entity_prefix');
        }
        this._config = { ...DEFAULT_CONFIG, ...config };
        this._entityMap = buildEntityMap(this._config.entity_prefix);
        this._entityMapResolved = false;
    }
    set hass(hass) {
        const oldHass = this.__hass;
        this.__hass = hass;
        if (hass && this._config) {
            // Auto-detect entity IDs on first hass update
            if (!this._entityMapResolved) {
                this._entityMap = buildEntityMap(this._config.entity_prefix);
                this._entityMapResolved = true;
            }
            this._vehicleState = extractVehicleState(hass, this._entityMap);
        }
        this.requestUpdate('hass', oldHass);
    }
    get hass() {
        return this.__hass;
    }
    render() {
        if (!this._config || !this.hass) {
            return b `<ha-card><div style="padding:16px">Loading...</div></ha-card>`;
        }
        const battLevel = this._vehicleState?.battery_level ?? 0;
        const battCharging = this._vehicleState?.is_charging ?? false;
        const battColor = battCharging ? '#30D158' : battLevel > 50 ? '#30D158' : battLevel > 20 ? '#FF9F0A' : '#FF3B30';
        const battText = this._showRange
            ? `${this._vehicleState?.battery_range !== null ? Math.round(this._vehicleState.battery_range) : '--'} ${this._vehicleState?.range_unit || 'km'}`
            : `${this._vehicleState?.battery_level ?? '--'}%`;
        return b `
      <ha-card>
        <div class="card-container">
          <div class="card-header">
            <svg class="sentry-icon ${this._vehicleState?.sentry_mode ? 'active' : ''}" viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18.187A8.187 8.187 0 1 1 20.187 12A8.2 8.2 0 0 1 12 20.187M18.638 12A6.64 6.64 0 0 1 12 18.638A6.64 6.64 0 0 1 5.362 12A6.64 6.64 0 0 1 12 5.362A6.64 6.64 0 0 1 18.638 12" fill="currentColor"/>
            </svg>
            <span class="battery-indicator" @click=${this._toggleBatteryDisplay}>
              <span class="battery-pct">${battText}</span>
              <svg class="battery-svg" viewBox="0 0 28 13" width="28" height="13">
                <rect x="0" y="0" width="24" height="13" rx="2.5" ry="2.5"
                  fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.2"/>
                <rect x="24.5" y="3.5" width="2.5" height="6" rx="1" ry="1"
                  fill="rgba(255,255,255,0.35)"/>
                <rect x="1.5" y="1.5"
                  width="${Math.max(0, Math.min(21, battLevel / 100 * 21))}"
                  height="10" rx="1.5" ry="1.5" fill="${battColor}"/>
                ${battCharging ? b `
                  <path d="M10 1.5 L7.5 6.5 L10 6.5 L8 11.5 L13.5 5.5 L10.5 5.5 L12.5 1.5 Z"
                    fill="white" opacity="0.9"/>
                ` : ''}
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
    `;
    }
    _toggleBatteryDisplay() {
        this._showRange = !this._showRange;
    }
    getCardSize() {
        return 6;
    }
    static getConfigElement() {
        return document.createElement('tesla-card-editor');
    }
    static getStubConfig() {
        return {
            type: 'custom:tesla-card',
            entity_prefix: 'my_tesla',
            vehicle_model: 'model_3',
            paint_color: 'pearl_white',
        };
    }
    static get styles() {
        return [cardStyles];
    }
}
customElements.define('tesla-card', TeslaCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: 'tesla-card',
    name: 'Tesla Card',
    description: `Tesla app-style vehicle card (v${CARD_VERSION})`,
    preview: true,
});
console.info(`%c TESLA-CARD %c v${CARD_VERSION} `, 'color: white; background: #e53935; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;', 'color: white; background: #333; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;');

export { TeslaCard };
