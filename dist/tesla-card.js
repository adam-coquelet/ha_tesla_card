/*! Tesla Card v1.0.1 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=r.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(i,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new s(r,e,i)},n=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:_,getPrototypeOf:d}=Object,p=globalThis,g=p.trustedTypes,u=g?g.emptyScript:"",m=p.reactiveElementPolyfillSupport,f=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},$=(e,t)=>!o(e,t),y={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const a=r?.call(this);s?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const e=d(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,t=[...h(e),..._(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(t)i.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of r){const r=document.createElement("style"),s=e.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=r;const a=s.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,i,r=!1,s){if(void 0!==e){const a=this.constructor;if(!1===r&&(s=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??$)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==s||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[f("elementProperties")]=new Map,b[f("finalized")]=new Map,m?.({ReactiveElement:b}),(p.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,x=e=>e,A=w.trustedTypes,P=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+C,M=`<${S}>`,E=document,L=()=>E.createComment(""),B=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,N="[ \t\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,Q=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,O=/"/g,z=/^(?:script|style|textarea|title)$/i,H=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),D=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Y=new WeakMap,j=E.createTreeWalker(E,129);function X(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(t):t}const V=(e,t)=>{const i=e.length-1,r=[];let s,a=2===t?"<svg>":3===t?"<math>":"",n=W;for(let t=0;t<i;t++){const i=e[t];let o,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===W?"!--"===l[1]?n=R:void 0!==l[1]?n=Q:void 0!==l[2]?(z.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=I):void 0!==l[3]&&(n=I):n===I?">"===l[0]?(n=s??W,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?I:'"'===l[3]?O:U):n===O||n===U?n=I:n===R||n===Q?n=W:(n=I,s=void 0);const _=n===I&&e[t+1].startsWith("/>")?" ":"";a+=n===W?i+M:c>=0?(r.push(o),i.slice(0,c)+k+i.slice(c)+C+_):i+C+(-2===c?t:_)}return[X(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class Z{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,a=0;const n=e.length-1,o=this.parts,[l,c]=V(e,t);if(this.el=Z.createElement(l,i),j.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=j.nextNode())&&o.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(k)){const t=c[a++],i=r.getAttribute(e).split(C),n=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?ee:"?"===n[1]?te:"@"===n[1]?ie:K}),r.removeAttribute(e)}else e.startsWith(C)&&(o.push({type:6,index:s}),r.removeAttribute(e));if(z.test(r.tagName)){const e=r.textContent.split(C),t=e.length-1;if(t>0){r.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],L()),j.nextNode(),o.push({type:2,index:++s});r.append(e[t],L())}}}else if(8===r.nodeType)if(r.data===S)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf(C,e+1));)o.push({type:7,index:s}),e+=C.length-1}s++}}static createElement(e,t){const i=E.createElement("template");return i.innerHTML=e,i}}function q(e,t,i=e,r){if(t===D)return t;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const a=B(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(e),s._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(t=q(e,s._$AS(e,t.values),s,r)),t}class G{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??E).importNode(t,!0);j.currentNode=r;let s=j.nextNode(),a=0,n=0,o=i[0];for(;void 0!==o;){if(a===o.index){let t;2===o.type?t=new J(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new re(s,this,e)),this._$AV.push(t),o=i[++n]}a!==o?.index&&(s=j.nextNode(),a++)}return j.currentNode=E,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),B(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==D&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new G(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new Z(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new J(this.O(L()),this.O(L()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=x(e).nextSibling;x(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,t=this,i,r){const s=this.strings;let a=!1;if(void 0===s)e=q(this,e,t,0),a=!B(e)||e!==this._$AH&&e!==D,a&&(this._$AH=e);else{const r=e;let n,o;for(e=s[0],n=0;n<s.length-1;n++)o=q(this,r[i+n],t,n),o===D&&(o=this._$AH[n]),a||=!B(o)||o!==this._$AH[n],o===F?e=F:e!==F&&(e+=(o??"")+s[n+1]),this._$AH[n]=o}a&&!r&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class te extends K{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ie extends K{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=q(this,e,t,0)??F)===D)return;const i=this._$AH,r=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==F&&(i===F||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const se=w.litHtmlPolyfillSupport;se?.(Z,J),(w.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;class ne extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let s=r._$litPart$;if(void 0===s){const e=i?.renderBefore??null;r._$litPart$=s=new J(t.insertBefore(L(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}}ne._$litElement$=!0,ne.finalized=!0,ae.litElementHydrateSupport?.({LitElement:ne});const oe=ae.litElementPolyfillSupport;oe?.({LitElement:ne}),(ae.litElementVersions??=[]).push("4.2.2");const le="1.0.1",ce={pearl_white:{name:"Pearl White Multi-Coat",hex:"#ECF0F1",metallic:!0},solid_black:{name:"Solid Black",hex:"#1A1A1A",metallic:!1},midnight_silver:{name:"Midnight Silver Metallic",hex:"#4A4D51",metallic:!0},deep_blue:{name:"Deep Blue Metallic",hex:"#1B2A49",metallic:!0},red_multi_coat:{name:"Red Multi-Coat",hex:"#A5171B",metallic:!0},ultra_red:{name:"Ultra Red",hex:"#C41E3A",metallic:!0},quicksilver:{name:"Quicksilver",hex:"#B8BAC0",metallic:!0},midnight_cherry:{name:"Midnight Cherry Red",hex:"#5C0A1A",metallic:!0},stealth_grey:{name:"Stealth Grey",hex:"#393C41",metallic:!1},ultra_white:{name:"Ultra White",hex:"#FAFAFA",metallic:!1},lunar_silver:{name:"Lunar Silver",hex:"#A8A9AD",metallic:!0},diamond_black:{name:"Diamond Black",hex:"#0D0D0D",metallic:!0}},he={model_3:"Model 3",model_y:"Model Y",cybertruck:"Cybertruck",cybercab:"Cybercab"},_e={standard:"Standard",long_range:"Long Range",performance:"Performance"},de={vehicle_model:"model_3",vehicle_variant:"standard",paint_color:"pearl_white",show_vehicle:!0,default_view:"main",show_lock:!0,show_charge_port:!0,show_frunk:!0,show_trunk:!0,show_vent:!0,show_climate:!0};function pe(e,t){return{climate:`climate.${e}_driver_temp`,door_lock:`lock.${e}_vehicle_state_locked`,charge_cable_lock:`lock.${e}_charge_state_charge_port_latch`,frunk:`cover.${e}_vehicle_state_ft`,trunk:`cover.${e}_vehicle_state_rt`,charger_door:`cover.${e}_charge_state_charge_port_door_open`,windows:`cover.${e}_windows`,charging:`switch.${e}_charge_state_charging_state`,sentry_mode:`switch.${e}_vehicle_state_sentry_mode`,defrost:`switch.${e}_climate_state_defrost_mode`,battery_level:`sensor.${e}_charge_state_battery_level`,battery_range:`sensor.${e}_charge_state_battery_range`,inside_temperature:`sensor.${e}_climate_state_inside_temp`,outside_temperature:`sensor.${e}_climate_state_outside_temp`,odometer:`sensor.${e}_vehicle_state_odometer`,charging_power:`sensor.${e}_charge_state_charger_power`,charge_rate:`sensor.${e}_charge_state_charge_rate`,charge_energy_added:`sensor.${e}_charge_state_charge_energy_added`,charger_voltage:`sensor.${e}_charge_state_charger_voltage`,charger_current:`sensor.${e}_charge_state_charger_actual_current`,time_to_full_charge:`sensor.${e}_charge_state_minutes_to_full_charge`,is_charging:`binary_sensor.${e}_charge_state_conn_charge_cable`,is_online:`binary_sensor.${e}_state`,user_present:`binary_sensor.${e}_vehicle_state_is_user_present`,honk_horn:`button.${e}_honk`,flash_lights:`button.${e}_flash_lights`,wake:`button.${e}_wake`,charge_limit:`number.${e}_charge_state_charge_limit_soc`,charge_current_number:`number.${e}_charge_state_charge_current_request`,location:`device_tracker.${e}_location`,seat_heater_front_left:`select.${e}_climate_state_seat_heater_left`,seat_heater_front_right:`select.${e}_climate_state_seat_heater_right`,seat_heater_rear_left:`select.${e}_climate_state_seat_heater_rear_left`,seat_heater_rear_right:`select.${e}_climate_state_seat_heater_rear_right`,steering_wheel_heater:`switch.${e}_climate_state_auto_steering_wheel_heat`,firmware:`update.${e}_vehicle_state_software_update_status`}}function ge(e,t){return e.states[t]}function ue(e,t){const i=ge(e,t);if(!i||"unavailable"===i.state||"unknown"===i.state)return null;const r=parseFloat(i.state);return isNaN(r)?null:r}function me(e,t,i=["on"]){const r=ge(e,t);return!!r&&i.includes(r.state)}function fe(e,t){const i=ge(e,t);return!!i&&"open"===i.state}const ve=a`
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
`,$e={model_3_PPSW_standard:{file:"MT369_PPSW_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PR01_standard:{file:"MT369_PR01_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PN00_standard:{file:"MT369_PN00_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PX02_standard:{file:"MT369_PX02_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PPSB_standard:{file:"MT369_PPSB_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PN01_standard:{file:"MT369_PN01_W38A_IPB3__m3.png",variant:"standard",wheels:"Photon"},model_3_PPSW_performance:{file:"MT371_PPSW_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_3_PR01_performance:{file:"MT371_PR01_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_3_PN00_performance:{file:"MT371_PN00_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_3_PX02_performance:{file:"MT371_PX02_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_3_PPSB_performance:{file:"MT371_PPSB_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_3_PN01_performance:{file:"MT371_PN01_W30A_IPB4__m3.png",variant:"performance",wheels:"Nova"},model_y_PX02_standard:{file:"MTY61_PX02_WY18P_IBB3__my.png",variant:"standard",wheels:'18"'},model_y_PN01_standard:{file:"MTY61_PN01_WY18P_IBB3__my.png",variant:"standard",wheels:'18"'},model_y_PPSW_standard:{file:"MTY61_PPSW_WY18P_IBB3__my.png",variant:"standard",wheels:'18"'},model_y_PPSW_long_range:{file:"MTY48_PPSW_WY19P_IPB8__my.png",variant:"long_range",wheels:'19"'},model_y_PR01_long_range:{file:"MTY48_PR01_WY19P_IPB8__my.png",variant:"long_range",wheels:'19"'},model_y_PN00_long_range:{file:"MTY48_PN00_WY19P_IPB8__my.png",variant:"long_range",wheels:'19"'},model_y_PX02_long_range:{file:"MTY48_PX02_WY19P_IPB8__my.png",variant:"long_range",wheels:'19"'},model_y_PPSB_long_range:{file:"MTY48_PPSB_WY19P_IPB8__my.png",variant:"long_range",wheels:'19"'},model_y_PN01_long_range:{file:"MTY48_PN01_WY19P_IPB8__my.png",variant:"long_range",wheels:'19"'},model_y_PPSW_performance:{file:"MTY70_PPSW_WY21A_IPB10__my.png",variant:"performance",wheels:'21"'},model_y_PR01_performance:{file:"MTY70_PR01_WY21A_IPB10__my.png",variant:"performance",wheels:'21"'},model_y_PN00_performance:{file:"MTY70_PN00_WY21A_IPB10__my.png",variant:"performance",wheels:'21"'},model_y_PX02_performance:{file:"MTY70_PX02_WY21A_IPB10__my.png",variant:"performance",wheels:'21"'},model_y_PPSB_performance:{file:"MTY70_PPSB_WY21A_IPB10__my.png",variant:"performance",wheels:'21"'},model_y_PN01_performance:{file:"MTY70_PN01_WY21A_IPB10__my.png",variant:"performance",wheels:'21"'},cybertruck_PPSW_standard:{file:"MTC04_WH0B_IW04_APBS_APF2_CPF2_CYBR_PRS01_SC05_TW01__ct.png",variant:"standard",wheels:"Standard"},cybercab_PPSW_standard:{file:"cybercab.png",variant:"standard",wheels:"Standard"}},ye={pearl_white:"PPSW",ultra_red:"PR01",quicksilver:"PN00",diamond_black:"PX02",deep_blue:"PPSB",stealth_grey:"PN01",solid_black:"PX02",midnight_silver:"PN01",red_multi_coat:"PR01",midnight_cherry:"PR01",ultra_white:"PPSW",lunar_silver:"PN00"};const be={};for(const[e,t]of Object.entries(ye))be[t]||(be[t]=e);customElements.define("tesla-vehicle-renderer",class extends ne{static get properties(){return{config:{type:Object},state:{type:Object}}}static get styles(){return a`
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
    `}render(){const e=this.config;if(!e)return H``;const t=function(e,t,i="standard"){const r=ye[t]||"PPSW",s=`${e}_${r}_${i}`;if($e[s])return $e[s].file;const a=`${e}_${r}_standard`;if($e[a])return $e[a].file;const n=`${e}_PPSW_${i}`;if($e[n])return $e[n].file;const o=`${e}_PPSW_standard`;return $e[o]?.file||null}(e.vehicle_model,e.paint_color,e.vehicle_variant||"standard");if(!t)return H`<div class="no-image">No vehicle image available</div>`;const i=`${e.image_path||"/local/community/ha-tesla-card/pictures"}/${t}`,r=this.state,s=r&&!r.is_online?"offline":"",a=ce[e.paint_color],n=a?function(e){const t=parseInt(e.replace("#",""),16);return`${t>>16&255},${t>>8&255},${255&t}`}(a.hex):"200,200,200";return H`
      <div class="scene">
        <div class="ambient" style="${`background: radial-gradient(ellipse 70% 50% at 50% 40%, rgba(${n},0.10) 0%, rgba(${n},0.03) 50%, transparent 75%);`}"></div>
        <div class="car-clip">
          <img class="${s}" src="${i}" alt="" draggable="false" />
        </div>
        <div class="car-reflect">
          <img src="${i}" alt="" draggable="false" />
        </div>
      </div>
    `}});const we={en:{lock:"Lock",charge:"Charge",frunk:"Frunk",trunk:"Trunk",vent:"Vent",climate:"Climate",hr:"hr",min:"min",remaining:"remaining",calculating:"Calculating...",charge_limit:"Charge Limit",int:"in",ext:"out"},fr:{lock:"Verrouiller",charge:"Recharge",frunk:"Frunk",trunk:"Coffre",vent:"Aérer",climate:"Ventiler",hr:"h",min:"min",remaining:"restantes",calculating:"Calcul...",charge_limit:"Limite de charge",int:"int",ext:"ext"}};customElements.define("tesla-view-main",class extends ne{constructor(){super(...arguments),this._prevCharging=!1,this._lastChargeState=null,this._prevClimate=!1}static get properties(){return{hass:{attribute:!1},config:{attribute:!1},vehicleState:{attribute:!1},entityMap:{attribute:!1},_prevCharging:{state:!0},_lastChargeState:{state:!0},_prevClimate:{state:!0}}}render(){const e=this.vehicleState;if(!e)return H``;const t=e.is_charging;t&&(this._lastChargeState=e);const i=t?"cp cp-in":this._prevCharging?"cp cp-out":"cp cp-hidden";t!==this._prevCharging&&(this._prevCharging=t);const r=t?e:this._lastChargeState;return H`
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

        ${this._renderClimatePanel(e)}

        <div class="actions-zone">
          <div class="actions">
          ${!1!==this.config.show_lock?this._act(e.is_locked?"grey":"white",e.is_locked?xe:Ae,this._t("lock"),()=>this._toggleLock()):""}
          ${!1!==this.config.show_charge_port?this._act(e.is_charging?"green":e.charger_door_open?"white":"grey",ke,this._t("charge"),()=>this._toggleChargePort()):""}
          ${!1!==this.config.show_frunk?this._act(e.frunk_open?"white":"grey",Ce,this._t("frunk"),()=>this._openFrunk()):""}
          ${!1!==this.config.show_trunk?this._act(e.trunk_open?"white":"grey",Se,this._t("trunk"),()=>this._toggleTrunk()):""}
          ${!1!==this.config.show_vent?this._act(e.windows_open?"white":"grey",Pe,this._t("vent"),()=>this._ventWindows()):""}
          ${!1!==this.config.show_climate?this._act(e.is_climate_on?"white":"grey",Me,this._t("climate"),()=>this._toggleClimate()):""}
          </div>
        </div>
      </div>
    `}_onCpAnimEnd(e){if("cp-slide-out"===e.animationName){const t=e.currentTarget;t.classList.add("cp-hidden"),t.classList.remove("cp-out")}}_renderChargeContent(e){const t=e.time_to_full_charge;let i="";if(null!==t&&t>0){const e=Math.floor(t),r=Math.round(60*(t-e)),s=this._t("hr"),a=this._t("min"),n=this._t("remaining");i=e>0&&r>0?`${e} ${s} ${r} ${a} ${n}`:e>0?`${e} ${s} ${n}`:`${r} ${a} ${n}`}else i=this._t("calculating");const r="mi"===e.range_unit?"mi/hr":"km/hr";return H`
      <div class="cp-bar"><div class="cp-bar-pulse"></div></div>
      <div class="cp-inner">
        <div class="cp-bolt">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#30D158">
            <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66l.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
          </svg>
        </div>
        <div class="cp-time">${i}</div>
        <div class="cp-limit">${this._t("charge_limit")}: ${e.charge_limit??80}%</div>
        <div class="cp-sep"></div>
        <div class="cp-stat">${e.charging_power??"--"} kW</div>
        <div class="cp-stat">${null!==e.charge_rate?Math.round(e.charge_rate):"--"} ${r}</div>
        <div class="cp-stat">+${e.charge_energy_added??"--"} kWh</div>
        <div class="cp-stat">${e.charge_current??"--"}/${e.charge_current??"--"} A</div>
        <div class="cp-stat">${e.charger_voltage??"--"} V</div>
      </div>
    `}_act(e,t,i,r){return H`
      <button class="act act-${e}" @click=${r}>
        ${t}
        <span class="act-label">${i}</span>
      </button>`}_renderClimatePanel(e){const t=e.is_climate_on,i=t?"cl cl-in":this._prevClimate?"cl cl-out":"cl cl-hidden";return t!==this._prevClimate&&(this._prevClimate=t),H`
      <div class="${i}" @animationend=${this._onClAnimEnd}>
        ${this._renderClimateContent(e)}
      </div>
    `}_onClAnimEnd(e){if("cl-slide-out"===e.animationName){const t=e.currentTarget;t.classList.add("cl-hidden"),t.classList.remove("cl-out")}}_renderClimateContent(e){const t=e.climate_target_temp??20,i=e.inside_temp,r=e.outside_temp;return H`
      <div class="cl-inner">
        <button class="cl-btn" @click=${this._tempUp}>
          <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0"/></svg>
        </button>
        <div class="cl-target">${t}°</div>
        <button class="cl-btn" @click=${this._tempDown}>
          <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"/></svg>
        </button>
        <div class="cl-temps">
          ${null!==i?H`<span>${i}° ${this._t("int")}</span>`:""}
          ${null!==r?H`<span>${r}° ${this._t("ext")}</span>`:""}
        </div>
      </div>
    `}_t(e){return function(e,t){const i=e?.startsWith("fr")?"fr":"en";return we[i]?.[t]??we.en[t]??t}(this.hass?.language||"en",e)}_toggleLock(){this.hass?.callService("lock",this.vehicleState.is_locked?"unlock":"lock",{entity_id:this.entityMap.door_lock})}_toggleClimate(){this.hass?.callService("climate",this.vehicleState.is_climate_on?"turn_off":"turn_on",{entity_id:this.entityMap.climate})}_ventWindows(){this.hass?.callService("cover",this.vehicleState.windows_open?"close_cover":"open_cover",{entity_id:this.entityMap.windows})}_toggleChargePort(){this.hass?.callService("cover",this.vehicleState.charger_door_open?"close_cover":"open_cover",{entity_id:this.entityMap.charger_door})}_openFrunk(){this.hass?.callService("cover","open_cover",{entity_id:this.entityMap.frunk})}_toggleTrunk(){this.hass?.callService("cover",this.vehicleState.trunk_open?"close_cover":"open_cover",{entity_id:this.entityMap.trunk})}_tempUp(){const e=this.vehicleState.climate_target_temp??20;this.hass?.callService("climate","set_temperature",{entity_id:this.entityMap.climate,temperature:Math.min(30,e+.5)})}_tempDown(){const e=this.vehicleState.climate_target_temp??20;this.hass?.callService("climate","set_temperature",{entity_id:this.entityMap.climate,temperature:Math.max(15,e-.5)})}static get styles(){return a`
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
    `}});const xe=H`<svg viewBox="24 13 55 67" fill="none"><path fill-rule="evenodd" d="M50.99 77.50Q57.83 77.51 64.65 77.48Q70.63 77.45 72.13 76.54Q75.34 74.60 75.50 69.97Q75.51 69.54 75.53 49.12Q75.53 44.58 74.78 42.99C73.19 39.67 71.02 39.64 67.91 38.89A0.67 0.67 0 0 1 67.40 38.23Q67.40 35.66 67.39 32.00C67.36 22.81 60.29 15.63 51.01 15.62C41.74 15.62 34.65 22.80 34.62 31.99Q34.61 35.65 34.60 38.22A0.67 0.67 0 0 1 34.09 38.88C30.98 39.63 28.81 39.65 27.22 42.97Q26.47 44.56 26.47 49.10Q26.47 69.52 26.48 69.95Q26.64 74.58 29.85 76.52Q31.35 77.44 37.32 77.47Q44.15 77.50 50.99 77.50ZM39.95 39.00L62.05 39.00A0.57 0.57 0 0 0 62.62 38.43L62.62 32.80A12.30 11.49 90 0 0 51.13 20.50L50.87 20.50A12.30 11.49-90 0 0 39.38 32.80L39.38 38.43A0.57 0.57 0 0 0 39.95 39.00Z" fill="currentColor"/></svg>`,Ae=H`<svg viewBox="9 8 70 72" fill="none"><path d="M40.40 38.59Q40.36 34.85 40.40 30.78C40.59 12.29 14.89 9.87 11.12 28.42Q10.72 30.40 11.06 39.05A2.32 2.32 0 0 0 13.48 41.28L13.62 41.27A2.49 2.47-0.7 0 0 16.00 38.84C16.11 32.12 14.37 23.96 22.61 21.05C29.36 18.67 35.69 23.94 35.58 31.01C35.55 33.00 35.62 35.47 35.64 38.32A0.61 0.61 0 0 1 35.06 38.93C28.68 39.34 27.42 43.04 27.45 49.16Q27.53 65.87 27.49 69.49Q27.43 74.12 30.42 76.22Q32.31 77.55 37.81 77.54Q67.64 77.47 69.25 77.49C75.03 77.57 76.72 72.91 76.54 67.41Q76.48 65.49 76.49 46.01C76.50 40.38 71.80 38.79 66.45 38.97Q65.09 39.02 40.79 38.98A0.39 0.39 0 0 1 40.40 38.59Z" fill="currentColor"/></svg>`,Pe=H`<svg viewBox="50 18 68 68" fill="none"><path fill-rule="evenodd" d="M111.27 78.92Q109.11 81.07 106.78 81.13Q95.78 81.41 65.02 81.23C59.91 81.20 56.97 80.63 54.89 76.43Q54.16 74.97 54.19 71.59Q54.24 66.54 54.30 49.50Q54.32 44.66 57.67 41.19Q61.57 37.15 63.93 34.86Q64.80 34.02 65.67 33.15Q66.55 32.28 67.39 31.41Q69.69 29.06 73.75 25.18Q77.23 21.84 82.07 21.84Q99.11 21.85 104.16 21.82Q107.54 21.80 109.00 22.54C113.19 24.63 113.75 27.58 113.76 32.69Q113.82 63.45 113.49 74.45Q113.43 76.78 111.27 78.92ZM83.75 27.99C81.05 28.02 79.19 28.89 76.51 31.54Q69.41 38.56 63.00 45.00Q61.41 46.60 60.75 47.69A0.52 0.51-74.3 0 0 61.18 48.47L67.86 48.47A2.12 2.10-67.3 0 0 69.35 47.85L80.69 36.52A5.50 5.45-67.4 0 1 84.57 34.90L106.11 34.90A1.35 1.34 0 0 0 107.46 33.56L107.46 29.95A1.95 1.95 0 0 0 105.53 28.00Q93.62 27.86 83.75 27.99ZM107.26 54.95L60.62 54.87A0.23 0.23 0 0 0 60.39 55.10L60.36 72.14A3.11 2.81 0.1 0 0 63.46 74.95L104.34 75.03A3.11 2.81 0.1 0 0 107.46 72.22L107.49 55.18A0.23 0.23 0 0 0 107.26 54.95Z" fill="currentColor"/></svg>`,ke=H`<svg viewBox="26 16 52 74" fill="none"><path d="M51.01 87.78A1.18 1.18 0 0 1 50.37 86.73L50.37 60.48A1.13 1.12 0 0 0 49.24 59.36L29.66 59.36A1.29 1.29 0 0 1 28.55 57.42Q45.62 28.22 50.98 19.00Q51.34 18.39 51.62 18.22A1.33 1.33 0 0 1 53.64 19.35Q53.64 40.75 53.65 45.40A1.25 1.25 0 0 0 54.90 46.65L74.31 46.65A1.33 1.32 15.1 0 1 75.46 48.64Q55.89 82.01 53.16 86.88Q52.29 88.43 51.01 87.78Z" fill="currentColor"/></svg>`,Ce=H`<svg viewBox="14 17 76 72" fill="none"><path fill-rule="evenodd" d="M57.79 39.34Q38.56 39.68 21.86 47.46C19.22 48.69 17.23 50.25 17.07 53.04Q16.93 55.37 17.03 68.26C17.07 73.04 20.96 75.04 25.71 75.29Q26.41 75.32 32.58 75.95A1.66 1.64 74.8 0 1 33.77 76.64C40.31 85.79 52.81 85.66 59.62 76.85A0.88 0.87 18.1 0 1 60.32 76.50L83.64 76.50A3.20 3.20 0 0 0 86.84 73.30L86.84 72.83A3.33 3.33 0 0 0 83.51 69.50L63.06 69.50A0.57 0.57 0 0 1 62.49 68.91Q62.68 60.78 56.96 55.79C53.25 52.55 47.23 51.07 42.75 52.52Q31.34 56.18 30.93 68.49A0.25 0.25 0 0 1 30.65 68.73L24.34 68.12A0.37 0.37 0 0 1 24.00 67.75L24.00 54.81A1.05 1.04-12.4 0 1 24.61 53.86Q44.11 44.94 64.71 46.71A5.57 5.52 34.1 0 0 67.63 46.16L85.07 37.63A3.41 3.41 0 0 0 86.67 33.15L86.62 33.04A3.44 3.43 64.9 0 0 81.97 31.35L68.32 38.05A0.92 0.91 53.8 0 1 67.27 37.88Q52.58 23.40 30.83 19.69A3.40 3.40 0 0 0 26.91 22.47L26.87 22.69A3.44 3.44 0 0 0 29.73 26.66Q45.63 29.14 57.95 38.87A0.26 0.26 0 0 1 57.79 39.34ZM55.47 67.75A8.72 8.72 0 0 0 46.75 59.03A8.72 8.72 0 0 0 38.03 67.75A8.72 8.72 0 0 0 46.75 76.47A8.72 8.72 0 0 0 55.47 67.75Z" fill="currentColor"/></svg>`,Se=H`<svg viewBox="0 0 24 24"><path d="M21.548 13.363l-.248-.473l.013-1.291c.005-.206.27-.022.339-.215l.255-.891c.34-.635-.577-1.621-.912-1.557l-3.267-.687a11.4 11.4 0 0 1-1.768-.525l-.267-.1L17.986 5.3a.816.816 0 0 1 1.322.135l.307.377a1.115 1.115 0 0 0 1.582.148a.87.87 0 0 0 .078-1.254l-1.424-1.343a1.574 1.574 0 0 0-2.41 0l-3.67 3.514l-5.249-2.034a5.9 5.9 0 0 0-2.139-.4H3.046a1.046 1.046 0 0 0 0 2.092H6.1a5.4 5.4 0 0 1 1.932.365l7.121 2.758a13.5 13.5 0 0 0 2.035.608l.652.14c.7.152 1.844.126 1.5.759l-.229.436l.017 1.651l.566.993A1.1 1.1 0 0 1 20 15v.585a1.08 1.08 0 0 1-1.08 1.08h-1.152c.013-.129.028-.256.032-.387c0-.045.007-.088.007-.132a5.062 5.062 0 1 0-10.124 0v.085c0 .147.017.29.032.434H3.046a1.047 1.047 0 0 0 0 2.093h5.383a5.027 5.027 0 0 0 8.633 0h2.3c1.509 0 2.613-.681 2.613-2.189L22 14.325a1.8 1.8 0 0 0-.452-.962M10.2 16.238c0-.032-.01-.063-.01-.1a2.551 2.551 0 1 1 5.1 0c0 .041-.01.079-.012.12a2.5 2.5 0 0 1-.053.4a2.55 2.55 0 0 1-1.386 1.773a2.46 2.46 0 0 1-2.24-.023a2.57 2.57 0 0 1-1.4-2.173z" fill="currentColor"/></svg>`,Me=H`<svg viewBox="16 13 76 76" fill="none"><path d="M52.27 46.50L52.23 18.72A2.65 2.65 0 0 0 49.57 16.08L49.36 16.08A16.43 16.36 89.9 0 0 33.03 32.54L33.03 32.76A16.43 16.36 89.9 0 0 49.42 49.16L49.63 49.16A2.65 2.65 0 0 0 52.27 46.50Z" fill="currentColor"/><path d="M58.37 49.25L86.39 49.25A2.53 2.53 0 0 0 88.92 46.72L88.92 46.39A16.42 16.36 0 0 0 72.50 30.03L72.26 30.03A16.42 16.36 0 0 0 55.84 46.39L55.84 46.72A2.53 2.53 0 0 0 58.37 49.25Z" fill="currentColor"/><path d="M49.55 52.72L21.69 52.76A2.62 2.62 0 0 0 19.08 55.39L19.08 55.62A16.44 16.37-0.1 0 0 35.55 71.96L35.77 71.96A16.44 16.37-0.1 0 0 52.18 55.56L52.18 55.33A2.62 2.62 0 0 0 49.55 52.72Z" fill="currentColor"/><path d="M55.72 55.36L55.76 83.38A2.53 2.53 0 0 0 58.30 85.90L58.62 85.90A16.44 16.37 89.9 0 0 74.96 69.43L74.96 69.23A16.44 16.37 89.9 0 0 58.56 52.82L58.24 52.82A2.53 2.53 0 0 0 55.72 55.36Z" fill="currentColor"/></svg>`;customElements.define("tesla-card-editor",class extends ne{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(e){this._config={...de,...e}}render(){return this._config?H`
      <div class="editor">
        <!-- ── Vehicle ── -->
        <div class="section-title">Vehicle</div>

        <div class="field">
          <label>Entity Prefix</label>
          <input type="text" .value=${this._config.entity_prefix||""}
            @input=${e=>this._set("entity_prefix",e.target.value)}
            placeholder="my_tesla" />
          <small>Prefix of your Tesla Fleet entities (sensor.<b>PREFIX</b>_battery_level)</small>
        </div>

        <div class="row">
          <div class="field flex">
            <label>Model</label>
            <select .value=${this._config.vehicle_model}
              @change=${e=>this._set("vehicle_model",e.target.value)}>
              ${Object.entries(he).map(([e,t])=>H`<option value=${e} ?selected=${e===this._config.vehicle_model}>${t}</option>`)}
            </select>
          </div>
          <div class="field flex">
            <label>Variant</label>
            <select .value=${this._config.vehicle_variant||"standard"}
              @change=${e=>this._set("vehicle_variant",e.target.value)}>
              ${Object.entries(_e).map(([e,t])=>H`<option value=${e} ?selected=${e===(this._config.vehicle_variant||"standard")}>${t}</option>`)}
            </select>
          </div>
        </div>

        <div class="field">
          <label>Paint Color</label>
          <div class="color-row">
            <select .value=${this._config.paint_color}
              @change=${e=>this._set("paint_color",e.target.value)}>
              ${this._getColors().map(([e,t])=>H`<option value=${e} ?selected=${e===this._config.paint_color}>${t.name}</option>`)}
            </select>
            <div class="color-dot" style="background:${ce[this._config.paint_color]?.hex||"#ccc"}"></div>
          </div>
        </div>

        <div class="field">
          <label>Image Path (optional)</label>
          <input type="text" .value=${this._config.image_path||""}
            @input=${e=>this._set("image_path",e.target.value)}
            placeholder="/local/community/ha-tesla-card/pictures" />
          <small>Override the path to vehicle images</small>
        </div>

        <!-- ── Buttons ── -->
        <div class="section-title">Action Buttons</div>

        <div class="toggles">
          ${this._toggle("show_lock","Lock / Unlock")}
          ${this._toggle("show_charge_port","Charge Port")}
          ${this._toggle("show_frunk","Frunk")}
          ${this._toggle("show_trunk","Trunk")}
          ${this._toggle("show_vent","Vent Windows")}
          ${this._toggle("show_climate","Climate")}
        </div>
      </div>
    `:H``}_getColors(){const e=function(e,t="standard"){const i=`${e}_`,r=`_${t}`,s=[];for(const e of Object.keys($e))if(e.startsWith(i)&&e.endsWith(r)){const t=e.slice(i.length,e.length-r.length),a=be[t];a&&!s.includes(a)&&s.push(a)}return s}(this._config.vehicle_model,this._config.vehicle_variant||"standard");return 0===e.length?Object.entries(ce).map(([e,t])=>[e,t]):e.filter(e=>ce[e]).map(e=>[e,ce[e]])}_toggle(e,t){const i=!1!==this._config[e];return H`
      <label class="toggle-row">
        <span>${t}</span>
        <input type="checkbox" .checked=${i}
          @change=${t=>this._set(e,t.target.checked)} />
        <span class="toggle-track"><span class="toggle-thumb"></span></span>
      </label>
    `}_set(e,t){this._config={...this._config,[e]:t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}static get styles(){return a`
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
    `}});class Ee extends ne{constructor(){super(...arguments),this._showRange=!1,this._entityMapResolved=!1}static get properties(){return{hass:{attribute:!1},_config:{state:!0},_vehicleState:{state:!0},_entityMap:{state:!0},_showRange:{state:!0}}}setConfig(e){if(!e.entity_prefix)throw new Error("Please define entity_prefix");this._config={...de,...e},this._entityMap=pe(this._config.entity_prefix),this._entityMapResolved=!1}set hass(e){const t=this.__hass;this.__hass=e,e&&this._config&&(this._entityMapResolved||(this._entityMap=pe(this._config.entity_prefix),this._entityMapResolved=!0),this._vehicleState=function(e,t){const i=ge(e,t.climate),r=ge(e,t.battery_range),s=ge(e,t.inside_temperature),a=ge(e,t.odometer),n=ge(e,t.location),o=ge(e,t.firmware),l=ge(e,t.charging),c="on"===l?.state,h=ue(e,t.time_to_full_charge),_=null!==h?h/60:null;return{battery_level:ue(e,t.battery_level),battery_range:ue(e,t.battery_range),range_unit:r?.attributes?.unit_of_measurement||"km",is_locked:"locked"===ge(e,t.door_lock)?.state,is_charging:c,is_online:"online"===ge(e,t.is_online)?.state,is_climate_on:"off"!==i?.state&&"unavailable"!==i?.state&&void 0!==i?.state,climate_target_temp:i?.attributes?.temperature??null,climate_current_temp:i?.attributes?.current_temperature??null,climate_hvac_mode:i?.state||"off",inside_temp:ue(e,t.inside_temperature),outside_temp:ue(e,t.outside_temperature),temp_unit:s?.attributes?.unit_of_measurement||"°C",charge_limit:ue(e,t.charge_limit),charge_current:ue(e,t.charge_current_number),charging_power:ue(e,t.charging_power),charge_rate:ue(e,t.charge_rate),charge_energy_added:ue(e,t.charge_energy_added),charger_voltage:ue(e,t.charger_voltage),time_to_full_charge:_,odometer:ue(e,t.odometer),odometer_unit:a?.attributes?.unit_of_measurement||"km",sentry_mode:me(e,t.sentry_mode),defrost_on:me(e,t.defrost),frunk_open:fe(e,t.frunk),trunk_open:fe(e,t.trunk),charger_door_open:fe(e,t.charger_door),windows_open:fe(e,t.windows),firmware_version:o?.attributes?.installed_version??o?.attributes?.latest_version??null,firmware_update_available:"on"===o?.state,seat_heater_front_left:ge(e,t.seat_heater_front_left)?.state||"off",seat_heater_front_right:ge(e,t.seat_heater_front_right)?.state||"off",seat_heater_rear_left:ge(e,t.seat_heater_rear_left)?.state||"off",seat_heater_rear_right:ge(e,t.seat_heater_rear_right)?.state||"off",steering_wheel_heater:me(e,t.steering_wheel_heater),user_present:me(e,t.user_present),latitude:n?.attributes?.latitude??null,longitude:n?.attributes?.longitude??null}}(e,this._entityMap)),this.requestUpdate("hass",t)}get hass(){return this.__hass}render(){if(!this._config||!this.hass)return H`<ha-card><div style="padding:16px">Loading...</div></ha-card>`;const e=this._vehicleState?.battery_level??0,t=this._vehicleState?.is_charging??!1,i=t||e>50?"#30D158":e>20?"#FF9F0A":"#FF3B30",r=this._showRange?`${null!==this._vehicleState?.battery_range?Math.round(this._vehicleState.battery_range):"--"} ${this._vehicleState?.range_unit||"km"}`:`${this._vehicleState?.battery_level??"--"}%`;return H`
      <ha-card>
        <div class="card-container">
          <div class="card-header">
            <svg class="sentry-icon ${this._vehicleState?.sentry_mode?"active":""}" viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18.187A8.187 8.187 0 1 1 20.187 12A8.2 8.2 0 0 1 12 20.187M18.638 12A6.64 6.64 0 0 1 12 18.638A6.64 6.64 0 0 1 5.362 12A6.64 6.64 0 0 1 12 5.362A6.64 6.64 0 0 1 18.638 12" fill="currentColor"/>
            </svg>
            <span class="battery-indicator" @click=${this._toggleBatteryDisplay}>
              <span class="battery-pct">${r}</span>
              <svg class="battery-svg" viewBox="0 0 28 13" width="28" height="13">
                <rect x="0" y="0" width="24" height="13" rx="2.5" ry="2.5"
                  fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.2"/>
                <rect x="24.5" y="3.5" width="2.5" height="6" rx="1" ry="1"
                  fill="rgba(255,255,255,0.35)"/>
                <rect x="1.5" y="1.5"
                  width="${Math.max(0,Math.min(21,e/100*21))}"
                  height="10" rx="1.5" ry="1.5" fill="${i}"/>
                ${t?H`
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
    `}_toggleBatteryDisplay(){this._showRange=!this._showRange}getCardSize(){return 6}static getConfigElement(){return document.createElement("tesla-card-editor")}static getStubConfig(){return{type:"custom:tesla-card",entity_prefix:"my_tesla",vehicle_model:"model_3",paint_color:"pearl_white"}}static get styles(){return[ve]}}customElements.define("tesla-card",Ee),window.customCards=window.customCards||[],window.customCards.push({type:"tesla-card",name:"Tesla Card",description:`Tesla app-style vehicle card (v${le})`,preview:!0}),console.info(`%c TESLA-CARD %c v${le} `,"color: white; background: #e53935; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;","color: white; background: #333; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;");export{Ee as TeslaCard};
