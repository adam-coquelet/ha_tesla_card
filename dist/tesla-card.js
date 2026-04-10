/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

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
const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$1=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o$1,r=`<${n}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$1+x):s+o$1+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$1)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$1),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$1,t+1));)d.push({type:7,index:l}),t+=o$1.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o=s.litElementPolyfillSupport;o?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

const CARD_VERSION = '1.0.0';
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
const DEFAULT_CONFIG = {
    vehicle_model: 'model_3',
    vehicle_variant: 'standard',
    paint_color: 'pearl_white',
    show_vehicle: true,
    default_view: 'main',
};

function buildEntityMap(prefix) {
    const p = prefix;
    return {
        climate: `climate.${p}_climate`,
        door_lock: `lock.${p}_door_lock`,
        charge_cable_lock: `lock.${p}_charge_cable_lock`,
        frunk: `cover.${p}_frunk`,
        trunk: `cover.${p}_trunk`,
        charger_door: `cover.${p}_charger_door`,
        windows: `cover.${p}_windows`,
        charging: `switch.${p}_charging`,
        sentry_mode: `switch.${p}_sentry_mode`,
        defrost: `switch.${p}_defrost`,
        battery_level: `sensor.${p}_battery_level`,
        battery_range: `sensor.${p}_battery_range`,
        inside_temperature: `sensor.${p}_inside_temperature`,
        outside_temperature: `sensor.${p}_outside_temperature`,
        odometer: `sensor.${p}_odometer`,
        charging_power: `sensor.${p}_charging_power`,
        charge_rate: `sensor.${p}_charge_rate`,
        charge_energy_added: `sensor.${p}_charge_energy_added`,
        charger_voltage: `sensor.${p}_charger_voltage`,
        charger_current: `sensor.${p}_charger_current`,
        time_to_full_charge: `sensor.${p}_time_to_full_charge`,
        is_charging: `binary_sensor.${p}_charging`,
        is_online: `binary_sensor.${p}_online`,
        user_present: `binary_sensor.${p}_user_present`,
        honk_horn: `button.${p}_honk_horn`,
        flash_lights: `button.${p}_flash_lights`,
        wake: `button.${p}_wake`,
        charge_limit: `number.${p}_charge_limit`,
        charge_current_number: `number.${p}_charging_amps`,
        location: `device_tracker.${p}_location`,
        seat_heater_front_left: `select.${p}_seat_heater_front_left`,
        seat_heater_front_right: `select.${p}_seat_heater_front_right`,
        seat_heater_rear_left: `select.${p}_seat_heater_rear_left`,
        seat_heater_rear_right: `select.${p}_seat_heater_rear_right`,
        steering_wheel_heater: `switch.${p}_steering_wheel_heater`,
        firmware: `update.${p}_firmware`,
    };
}
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
    getState(hass, entityMap.battery_level);
    const rangeEntity = getState(hass, entityMap.battery_range);
    const insideTempEntity = getState(hass, entityMap.inside_temperature);
    const odometerEntity = getState(hass, entityMap.odometer);
    const locationEntity = getState(hass, entityMap.location);
    const firmwareEntity = getState(hass, entityMap.firmware);
    return {
        battery_level: getNumericState(hass, entityMap.battery_level),
        battery_range: getNumericState(hass, entityMap.battery_range),
        range_unit: rangeEntity?.attributes?.unit_of_measurement || 'km',
        is_locked: getState(hass, entityMap.door_lock)?.state === 'locked',
        is_charging: getBoolState(hass, entityMap.is_charging) || getBoolState(hass, entityMap.charging),
        is_online: getBoolState(hass, entityMap.is_online),
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
        time_to_full_charge: getNumericState(hass, entityMap.time_to_full_charge),
        odometer: getNumericState(hass, entityMap.odometer),
        odometer_unit: odometerEntity?.attributes?.unit_of_measurement || 'km',
        sentry_mode: getBoolState(hass, entityMap.sentry_mode),
        defrost_on: getBoolState(hass, entityMap.defrost),
        frunk_open: getCoverOpen(hass, entityMap.frunk),
        trunk_open: getCoverOpen(hass, entityMap.trunk),
        charger_door_open: getCoverOpen(hass, entityMap.charger_door),
        windows_open: getCoverOpen(hass, entityMap.windows),
        firmware_version: firmwareEntity?.attributes?.installed_version ?? null,
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
`;

// Maps (model, paint_code) to image filename.
// Images are in src/pictures/ and will be bundled as base64 or served from /local/.
//
// Naming convention from Tesla:
//   MT369 = Model 3 Standard     MT371 = Model 3 Performance
//   W38A  = Photon wheels         W30A  = Nova wheels (Performance)
//   IPB3/IPB4 = Black interior
//
// Paint codes:
//   PPSW = Pearl White Multi-Coat
//   PN01 = Stealth Grey
//   PN00 = Quicksilver
//   PX02 = Diamond Black
//   PPSB = Deep Blue Metallic
//   PR01 = Ultra Red
// Key format: `${model}_${paintCode}_${variant}`
// model: 'model_3'
// variant: 'standard' | 'performance'
const IMAGE_MAP = {
    // Model 3 Standard (MT369) - Photon wheels W38A
    'model_3_PPSW_standard': { file: 'MT369_PPSW_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    'model_3_PR01_standard': { file: 'MT369_PR01_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    'model_3_PN00_standard': { file: 'MT369_PN00_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    'model_3_PX02_standard': { file: 'MT369_PX02_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    'model_3_PPSB_standard': { file: 'MT369_PPSB_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    'model_3_PN01_standard': { file: 'MT369_PN01_W38A_IPB3__m3.png', variant: 'standard', wheels: 'Photon' },
    // Model 3 Performance (MT371) - Nova wheels W30A
    'model_3_PPSW_performance': { file: 'MT371_PPSW_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    'model_3_PR01_performance': { file: 'MT371_PR01_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    'model_3_PN00_performance': { file: 'MT371_PN00_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    'model_3_PX02_performance': { file: 'MT371_PX02_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    'model_3_PPSB_performance': { file: 'MT371_PPSB_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
    'model_3_PN01_performance': { file: 'MT371_PN01_W30A_IPB4__m3.png', variant: 'performance', wheels: 'Nova' },
};
// Map user-friendly color keys to Tesla paint codes
const COLOR_TO_PAINT_CODE = {
    pearl_white: 'PPSW',
    ultra_red: 'PR01',
    quicksilver: 'PN00',
    diamond_black: 'PX02',
    deep_blue: 'PPSB',
    stealth_grey: 'PN01',
    // Fallbacks for colors we don't have images for -> closest match
    solid_black: 'PX02',
    midnight_silver: 'PN01',
    red_multi_coat: 'PR01',
    midnight_cherry: 'PR01',
    ultra_white: 'PPSW',
    lunar_silver: 'PN00',
};
function getVehicleImageFile(model, colorKey, variant = 'standard') {
    const paintCode = COLOR_TO_PAINT_CODE[colorKey] || 'PPSW';
    const key = `${model}_${paintCode}_${variant}`;
    const entry = IMAGE_MAP[key];
    if (entry)
        return entry.file;
    // Fallback: try standard variant
    const fallbackKey = `${model}_${paintCode}_standard`;
    const fallback = IMAGE_MAP[fallbackKey];
    if (fallback)
        return fallback.file;
    // Final fallback: pearl white standard
    const defaultKey = `${model}_PPSW_standard`;
    return IMAGE_MAP[defaultKey]?.file || null;
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
        aspect-ratio: 72 / 25;
        overflow: visible;
        margin-bottom: -10%;
      }

      .ambient {
        position: absolute; inset: 0;
        z-index: 0; pointer-events: none;
      }

      .car-clip {
        width: 100%;
        aspect-ratio: 72 / 32;
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
    `;
    }
    render() {
        const cfg = this.config;
        if (!cfg)
            return b ``;
        const imageFile = getVehicleImageFile(cfg.vehicle_model, cfg.paint_color, cfg.vehicle_variant || 'standard');
        if (!imageFile)
            return b `<div class="no-image">No vehicle image available</div>`;
        const basePath = cfg.image_path || '/local/community/ha-tesla-card/pictures';
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

class TeslaViewMain extends i {
    static get properties() {
        return {
            hass: { attribute: false },
            config: { attribute: false },
            vehicleState: { attribute: false },
            entityMap: { attribute: false },
        };
    }
    render() {
        const s = this.vehicleState;
        if (!s)
            return b ``;
        return b `
      <div class="root">
        ${s.is_charging ? this._renderChargePanel(s) : ''}

        <div class="car-wrap">
          <tesla-vehicle-renderer
            .config=${this.config}
            .state=${this.vehicleState}
          ></tesla-vehicle-renderer>
        </div>

        <div class="actions">
          ${this._pill(s.is_locked, s.is_locked ? 'Lock' : 'Unlock', s.is_locked ? iconLock : iconUnlock, () => this._toggleLock())}
          ${this._pill(s.is_climate_on, 'Climate', iconClimate, () => this._toggleClimate())}
          ${this._pill(false, 'Flash', iconFlash, () => this._flashLights())}
          ${this._pill(s.sentry_mode, 'Sentry', iconSentry, () => this._toggleSentry())}
        </div>
      </div>
    `;
    }
    _renderChargePanel(s) {
        const t = s.time_to_full_charge;
        let timeStr = '';
        if (t !== null && t > 0) {
            const h = Math.floor(t);
            const m = Math.round((t - h) * 60);
            if (h > 0 && m > 0)
                timeStr = `${h} hr ${m} min remaining`;
            else if (h > 0)
                timeStr = `${h} hr remaining`;
            else
                timeStr = `${m} min remaining`;
        }
        else {
            timeStr = 'Calculating...';
        }
        const ru = s.range_unit === 'mi' ? 'mi/hr' : 'km/hr';
        return b `
      <div class="cp">
        <div class="cp-bar"><div class="cp-bar-pulse"></div></div>
        <div class="cp-inner">
          <div class="cp-bolt-badge">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#30D158">
              <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66l.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
            </svg>
          </div>
          <div class="cp-time">${timeStr}</div>
          <div class="cp-limit">Charge Limit: ${s.charge_limit ?? 80}%</div>
          <div class="cp-sep"></div>
          <div class="cp-stat">${s.charging_power ?? '--'} kW</div>
          <div class="cp-stat">${s.charge_rate !== null ? Math.round(s.charge_rate) : '--'} ${ru}</div>
          <div class="cp-stat">+${s.charge_energy_added ?? '--'} kWh</div>
          <div class="cp-stat">${s.charge_current ?? '--'}/${s.charge_current ?? '--'} A</div>
          <div class="cp-stat">${s.charger_voltage ?? '--'} V</div>
        </div>
      </div>
    `;
    }
    _pill(active, label, icon, fn) {
        return b `<button class="pill ${active ? 'on' : ''}" @click=${fn}><span class="pill-ic">${icon}</span><span class="pill-lb">${label}</span></button>`;
    }
    _toggleLock() { this.hass?.callService('lock', this.vehicleState.is_locked ? 'unlock' : 'lock', { entity_id: this.entityMap.door_lock }); }
    _toggleClimate() { this.hass?.callService('climate', this.vehicleState.is_climate_on ? 'turn_off' : 'turn_on', { entity_id: this.entityMap.climate }); }
    _flashLights() { this.hass?.callService('button', 'press', { entity_id: this.entityMap.flash_lights }); }
    _toggleSentry() { this.hass?.callService('switch', this.vehicleState.sentry_mode ? 'turn_off' : 'turn_on', { entity_id: this.entityMap.sentry_mode }); }
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
         CHARGE PANEL — pixel-perfect Tesla app
         ══════════════════════════════════════════ */
      .cp {
        position: absolute;
        top: -40px;
        left: -18px;
        bottom: 0;
        z-index: 5;
        display: flex;
        flex-direction: row;
        pointer-events: none;
        background: linear-gradient(90deg, #1c1c1e, #1c1c1e00);
      }

      /* Green edge bar: 2px, subtle sweep animation going UP */
      .cp-bar {
        width: 4px;
        flex-shrink: 0;
        background-color: color-mix(in oklab,lab(27.036% 0 0) 50%,transparent);
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
      /* Soft glow halo around the pulse */
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

      /* Panel content */
      .cp-inner {
        padding: 14px 0 14px 14px;
        display: flex;
        flex-direction: column;
      }

      /* ⚡ Bolt on dark badge */
      .cp-bolt-badge {
        border-radius: 8px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 10px;
      }

      /* "4 hr 20 min remaining" */
      .cp-time {
        font-size: 15px;
        font-weight: 700;
        color: #fff;
        line-height: 1.2;
        margin-bottom: 4px;
        letter-spacing: -0.2px;
      }

      /* "Charge Limit: 80%" */
      .cp-limit {
        font-size: 13px;
        font-weight: 400;
        color: rgba(255,255,255,0.50);
        line-height: 1.3;
      }

      /* Separator */
      .cp-sep {
        height: 1px;
        background: rgba(255,255,255,0.08);
        margin: 10px 0;
        width: 85%;
      }

      /* Stat lines */
      .cp-stat {
        font-size: 12px;
        font-weight: 500;
        color: rgba(255,255,255,0.80);
        line-height: 1.8;
        letter-spacing: 0.1px;
      }

      /* ════════════════════════════════
         ACTION PILLS
         ════════════════════════════════ */
      .actions { display: flex; justify-content: center; gap: 10px; padding: 4px 0 8px; position: relative; z-index: 9; }
      .pill {
        display: flex; flex-direction: column; align-items: center; gap: 6px;
        padding: 12px 14px; border: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.04); color: var(--tesla-text-sec,#8a8a8e);
        border-radius: 18px; cursor: pointer; min-width: 62px; font-size: 10px;
        font-weight: 500; font-family: inherit;
        transition: all .25s cubic-bezier(.4,0,.2,1);
        -webkit-tap-highlight-color: transparent;
      }
      .pill:active { transform: scale(.94); }
      .pill.on { background: rgba(77,208,225,.1); border-color: rgba(77,208,225,.25); color: #4dd0e1; }
      .pill-ic svg { width: 22px; height: 22px; fill: currentColor; }
      .pill-lb { letter-spacing: .2px; }
    `;
    }
}
customElements.define('tesla-view-main', TeslaViewMain);
const iconLock = b `<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/></svg>`;
const iconUnlock = b `<svg viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>`;
const iconClimate = b `<svg viewBox="0 0 24 24"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/></svg>`;
const iconFlash = b `<svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>`;
const iconSentry = b `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`;

class TeslaCard extends i {
    constructor() {
        super(...arguments);
        this._showRange = false;
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
    }
    set hass(hass) {
        const oldHass = this.__hass;
        this.__hass = hass;
        if (hass && this._entityMap) {
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
