var Wf=Object.defineProperty;var $f=(n,t,e)=>t in n?Wf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var H=(n,t,e)=>$f(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const z0="170",Xf=0,Md=1,qf=2,ru=1,Yf=2,Zi=3,rs=0,pn=1,Fn=2,ts=0,Js=1,No=2,_d=3,yd=4,Zf=5,qs=100,Kf=101,jf=102,Jf=103,Qf=104,tp=200,ep=201,np=202,ip=203,Tc=204,Ac=205,sp=206,rp=207,op=208,ap=209,lp=210,cp=211,dp=212,hp=213,up=214,Cc=0,Rc=1,Pc=2,Yr=3,Lc=4,Ic=5,kc=6,zc=7,ou=0,fp=1,pp=2,Ts=0,au=1,lu=2,cu=3,du=4,mp=5,hu=6,uu=7,fu=300,Zr=301,Kr=302,Dc=303,Uc=304,dl=306,Nc=1e3,Ks=1001,Fc=1002,Kn=1003,gp=1004,ia=1005,zi=1006,Sl=1007,js=1008,os=1009,pu=1010,mu=1011,Fo=1012,D0=1013,or=1014,Di=1015,Ui=1016,U0=1017,N0=1018,jr=1020,gu=35902,vu=1021,xu=1022,_i=1023,Mu=1024,_u=1025,Hr=1026,Jr=1027,F0=1028,O0=1029,yu=1030,B0=1031,H0=1033,Va=33776,Ga=33777,Wa=33778,$a=33779,Oc=35840,Bc=35841,Hc=35842,Vc=35843,Gc=36196,Wc=37492,$c=37496,Xc=37808,qc=37809,Yc=37810,Zc=37811,Kc=37812,jc=37813,Jc=37814,Qc=37815,t0=37816,e0=37817,n0=37818,i0=37819,s0=37820,r0=37821,Xa=36492,o0=36494,a0=36495,bu=36283,l0=36284,c0=36285,d0=36286,vp=3200,xp=3201,Mp=0,_p=1,Ss="",ni="srgb",io="srgb-linear",hl="linear",Be="srgb",pr=7680,bd=519,yp=512,bp=513,Sp=514,Su=515,wp=516,Ep=517,Tp=518,Ap=519,Sd=35044,Cp=35048,wd="300 es",Qi=2e3,el=2001;class so{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ed=1234567;const Po=Math.PI/180,Oo=180/Math.PI;function hr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function fn(n,t,e){return Math.max(t,Math.min(e,n))}function V0(n,t){return(n%t+t)%t}function Rp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Pp(n,t,e){return n!==t?(e-n)/(t-n):0}function Lo(n,t,e){return(1-e)*n+e*t}function Lp(n,t,e,i){return Lo(n,t,1-Math.exp(-e*i))}function Ip(n,t=1){return t-Math.abs(V0(n,t*2)-t)}function kp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function zp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Dp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Up(n,t){return n+Math.random()*(t-n)}function Np(n){return n*(.5-Math.random())}function Fp(n){n!==void 0&&(Ed=n);let t=Ed+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Op(n){return n*Po}function Bp(n){return n*Oo}function Hp(n){return(n&n-1)===0&&n!==0}function Vp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wp(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),d=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),u=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*d,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*d,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*d,a*l);break;case"XZX":n.set(a*d,c*m,c*u,a*l);break;case"YXY":n.set(c*u,a*d,c*m,a*l);break;case"ZYZ":n.set(c*m,c*u,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ir(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nn={DEG2RAD:Po,RAD2DEG:Oo,generateUUID:hr,clamp:fn,euclideanModulo:V0,mapLinear:Rp,inverseLerp:Pp,lerp:Lo,damp:Lp,pingpong:Ip,smoothstep:kp,smootherstep:zp,randInt:Dp,randFloat:Up,randFloatSpread:Np,seededRandom:Fp,degToRad:Op,radToDeg:Bp,isPowerOfTwo:Hp,ceilPowerOfTwo:Vp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Wp,normalize:Pn,denormalize:Ir};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,i,s,r,o,a,c,l){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],h=i[7],f=i[2],u=i[5],m=i[8],v=s[0],p=s[3],g=s[6],M=s[1],_=s[4],x=s[7],A=s[2],w=s[5],C=s[8];return r[0]=o*v+a*M+c*A,r[3]=o*p+a*_+c*w,r[6]=o*g+a*x+c*C,r[1]=l*v+d*M+h*A,r[4]=l*p+d*_+h*w,r[7]=l*g+d*x+h*C,r[2]=f*v+u*M+m*A,r[5]=f*p+u*_+m*w,r[8]=f*g+u*x+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-i*r*d+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],h=d*o-a*l,f=a*c-d*r,u=l*r-o*c,m=e*h+i*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=h*v,t[1]=(s*l-d*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(d*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=u*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wl.makeScale(t,e)),this}rotate(t){return this.premultiply(wl.makeRotation(-t)),this}translate(t,e){return this.premultiply(wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new he;function wu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function nl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $p(){const n=nl("canvas");return n.style.display="block",n}const Td={};function wo(n){n in Td||(Td[n]=!0,console.warn(n))}function Xp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function qp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Te={enabled:!0,workingColorSpace:io,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Be&&(n.r=es(n.r),n.g=es(n.g),n.b=es(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Be&&(n.r=Vr(n.r),n.g=Vr(n.g),n.b=Vr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ss?hl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ad=[.64,.33,.3,.6,.15,.06],Cd=[.2126,.7152,.0722],Rd=[.3127,.329],Pd=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ld=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[io]:{primaries:Ad,whitePoint:Rd,transfer:hl,toXYZ:Pd,fromXYZ:Ld,luminanceCoefficients:Cd,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:Ad,whitePoint:Rd,transfer:Be,toXYZ:Pd,fromXYZ:Ld,luminanceCoefficients:Cd,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}});let mr;class Zp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mr===void 0&&(mr=nl("canvas")),mr.width=t.width,mr.height=t.height;const i=mr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=mr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=nl("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(es(e[i]/255)*255):e[i]=es(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kp=0;class Eu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=hr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(El(s[o].image)):r.push(El(s[o]))}else r=El(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function El(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jp=0;class kn extends so{constructor(t=kn.DEFAULT_IMAGE,e=kn.DEFAULT_MAPPING,i=Ks,s=Ks,r=zi,o=js,a=_i,c=os,l=kn.DEFAULT_ANISOTROPY,d=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=hr(),this.name="",this.source=new Eu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nc:t.x=t.x-Math.floor(t.x);break;case Ks:t.x=t.x<0?0:1;break;case Fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nc:t.y=t.y-Math.floor(t.y);break;case Ks:t.y=t.y<0?0:1;break;case Fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=fu;kn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,e=0,i=0,s=1){Je.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],d=c[4],h=c[8],f=c[1],u=c[5],m=c[9],v=c[2],p=c[6],g=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+p)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,x=(u+1)/2,A=(g+1)/2,w=(d+f)/4,C=(h+v)/4,P=(m+p)/4;return _>x&&_>A?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=w/i,r=C/i):x>A?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=P/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=P/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(h-v)/M,this.z=(f-d)/M,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jp extends so{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new kn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Eu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Jp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Tu extends kn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qp extends kn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],d=i[s+2],h=i[s+3];const f=r[o+0],u=r[o+1],m=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=u,t[e+2]=m,t[e+3]=v;return}if(h!==v||c!==f||l!==u||d!==m){let p=1-a;const g=c*f+l*u+d*m+h*v,M=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const A=Math.sqrt(_),w=Math.atan2(A,g*M);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const x=a*M;if(c=c*p+f*x,l=l*p+u*x,d=d*p+m*x,h=h*p+v*x,p===1-a){const A=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=A,l*=A,d*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],d=i[s+3],h=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+d*h+c*u-l*f,t[e+1]=c*m+d*f+l*h-a*u,t[e+2]=l*m+d*u+a*f-c*h,t[e+3]=d*m-a*h-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(s/2),h=a(r/2),f=c(i/2),u=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*d*h+l*u*m,this._y=l*u*h-f*d*m,this._z=l*d*m+f*u*h,this._w=l*d*h-f*u*m;break;case"YXZ":this._x=f*d*h+l*u*m,this._y=l*u*h-f*d*m,this._z=l*d*m-f*u*h,this._w=l*d*h+f*u*m;break;case"ZXY":this._x=f*d*h-l*u*m,this._y=l*u*h+f*d*m,this._z=l*d*m+f*u*h,this._w=l*d*h-f*u*m;break;case"ZYX":this._x=f*d*h-l*u*m,this._y=l*u*h+f*d*m,this._z=l*d*m-f*u*h,this._w=l*d*h+f*u*m;break;case"YZX":this._x=f*d*h+l*u*m,this._y=l*u*h+f*d*m,this._z=l*d*m-f*u*h,this._w=l*d*h-f*u*m;break;case"XZY":this._x=f*d*h-l*u*m,this._y=l*u*h-f*d*m,this._z=l*d*m+f*u*h,this._w=l*d*h+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],h=e[10],f=i+a+h;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(d-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(i>a&&i>h){const u=2*Math.sqrt(1+i-a-h);this._w=(d-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-i-h);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+h-i-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=i*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-i*l,this._z=r*d+o*l+i*c-s*a,this._w=o*d-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*i+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),h=Math.sin((1-e)*d)/l,f=Math.sin(e*d)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Id.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Id.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),d=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*d,this.y=i+c*d+a*l-r*h,this.z=s+c*h+r*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Tl.copy(this).projectOnVector(t),this.sub(Tl)}reflect(t){return this.sub(Tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new U,Id=new Is;class ks{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sa.copy(i.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fo),ra.subVectors(this.max,fo),gr.subVectors(t.a,fo),vr.subVectors(t.b,fo),xr.subVectors(t.c,fo),ps.subVectors(vr,gr),ms.subVectors(xr,vr),Us.subVectors(gr,xr);let e=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Us.z,Us.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Us.z,0,-Us.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Us.y,Us.x,0];return!Al(e,gr,vr,xr,ra)||(e=[1,0,0,0,1,0,0,0,1],!Al(e,gr,vr,xr,ra))?!1:(oa.crossVectors(ps,ms),e=[oa.x,oa.y,oa.z],Al(e,gr,vr,xr,ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gi=[new U,new U,new U,new U,new U,new U,new U,new U],ci=new U,sa=new ks,gr=new U,vr=new U,xr=new U,ps=new U,ms=new U,Us=new U,fo=new U,ra=new U,oa=new U,Ns=new U;function Al(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ns.fromArray(n,r);const a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=t.dot(Ns),l=e.dot(Ns),d=i.dot(Ns);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const t1=new ks,po=new U,Cl=new U;class qo{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):t1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;po.subVectors(t,this.center);const e=po.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(po,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(po.copy(t.center).add(Cl)),this.expandByPoint(po.copy(t.center).sub(Cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new U,Rl=new U,aa=new U,gs=new U,Pl=new U,la=new U,Ll=new U;class Au{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Rl.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),gs.copy(this.origin).sub(Rl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(aa),a=gs.dot(this.direction),c=-gs.dot(aa),l=gs.lengthSq(),d=Math.abs(1-o*o);let h,f,u,m;if(d>0)if(h=o*c-a,f=o*a-c,m=r*d,h>=0)if(f>=-m)if(f<=m){const v=1/d;h*=v,f*=v,u=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),u=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),u=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Rl).addScaledVector(aa,f),u}intersectSphere(t,e){Wi.subVectors(t.center,this.origin);const i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,s,r){Pl.subVectors(e,t),la.subVectors(i,t),Ll.crossVectors(Pl,la);let o=this.direction.dot(Ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gs.subVectors(this.origin,t);const c=a*this.direction.dot(la.crossVectors(gs,la));if(c<0)return null;const l=a*this.direction.dot(Pl.cross(gs));if(l<0||c+l>o)return null;const d=-a*gs.dot(Ll);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,e,i,s,r,o,a,c,l,d,h,f,u,m,v,p){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,d,h,f,u,m,v,p)}set(t,e,i,s,r,o,a,c,l,d,h,f,u,m,v,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=d,g[10]=h,g[14]=f,g[3]=u,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Mr.setFromMatrixColumn(t,0).length(),r=1/Mr.setFromMatrixColumn(t,1).length(),o=1/Mr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*d,u=o*h,m=a*d,v=a*h;e[0]=c*d,e[4]=-c*h,e[8]=l,e[1]=u+m*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=m+u*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*d,u=c*h,m=l*d,v=l*h;e[0]=f+v*a,e[4]=m*a-u,e[8]=o*l,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=u*a-m,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*d,u=c*h,m=l*d,v=l*h;e[0]=f-v*a,e[4]=-o*h,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*d,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*d,u=o*h,m=a*d,v=a*h;e[0]=c*d,e[4]=m*l-u,e[8]=f*l+v,e[1]=c*h,e[5]=v*l+f,e[9]=u*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,u=o*l,m=a*c,v=a*l;e[0]=c*d,e[4]=v-f*h,e[8]=m*h+u,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=u*h+m,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*c,u=o*l,m=a*c,v=a*l;e[0]=c*d,e[4]=-h,e[8]=l*d,e[1]=f*h+v,e[5]=o*d,e[9]=u*h-m,e[2]=m*h-u,e[6]=a*d,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(e1,t,n1)}lookAt(t,e,i){const s=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),vs.crossVectors(i,Gn),vs.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),vs.crossVectors(i,Gn)),vs.normalize(),ca.crossVectors(Gn,vs),s[0]=vs.x,s[4]=ca.x,s[8]=Gn.x,s[1]=vs.y,s[5]=ca.y,s[9]=Gn.y,s[2]=vs.z,s[6]=ca.z,s[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],h=i[5],f=i[9],u=i[13],m=i[2],v=i[6],p=i[10],g=i[14],M=i[3],_=i[7],x=i[11],A=i[15],w=s[0],C=s[4],P=s[8],S=s[12],b=s[1],k=s[5],B=s[9],V=s[13],Y=s[2],j=s[6],W=s[10],et=s[14],Z=s[3],xt=s[7],Lt=s[11],Ft=s[15];return r[0]=o*w+a*b+c*Y+l*Z,r[4]=o*C+a*k+c*j+l*xt,r[8]=o*P+a*B+c*W+l*Lt,r[12]=o*S+a*V+c*et+l*Ft,r[1]=d*w+h*b+f*Y+u*Z,r[5]=d*C+h*k+f*j+u*xt,r[9]=d*P+h*B+f*W+u*Lt,r[13]=d*S+h*V+f*et+u*Ft,r[2]=m*w+v*b+p*Y+g*Z,r[6]=m*C+v*k+p*j+g*xt,r[10]=m*P+v*B+p*W+g*Lt,r[14]=m*S+v*V+p*et+g*Ft,r[3]=M*w+_*b+x*Y+A*Z,r[7]=M*C+_*k+x*j+A*xt,r[11]=M*P+_*B+x*W+A*Lt,r[15]=M*S+_*V+x*et+A*Ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],h=t[6],f=t[10],u=t[14],m=t[3],v=t[7],p=t[11],g=t[15];return m*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*u-i*c*u)+v*(+e*c*u-e*l*f+r*o*f-s*o*u+s*l*d-r*c*d)+p*(+e*l*h-e*a*u-r*o*h+i*o*u+r*a*d-i*l*d)+g*(-s*a*d-e*c*h+e*a*f+s*o*h-i*o*f+i*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],h=t[9],f=t[10],u=t[11],m=t[12],v=t[13],p=t[14],g=t[15],M=h*p*l-v*f*l+v*c*u-a*p*u-h*c*g+a*f*g,_=m*f*l-d*p*l-m*c*u+o*p*u+d*c*g-o*f*g,x=d*v*l-m*h*l+m*a*u-o*v*u-d*a*g+o*h*g,A=m*h*c-d*v*c-m*a*f+o*v*f+d*a*p-o*h*p,w=e*M+i*_+s*x+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=M*C,t[1]=(v*f*r-h*p*r-v*s*u+i*p*u+h*s*g-i*f*g)*C,t[2]=(a*p*r-v*c*r+v*s*l-i*p*l-a*s*g+i*c*g)*C,t[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*u-i*c*u)*C,t[4]=_*C,t[5]=(d*p*r-m*f*r+m*s*u-e*p*u-d*s*g+e*f*g)*C,t[6]=(m*c*r-o*p*r-m*s*l+e*p*l+o*s*g-e*c*g)*C,t[7]=(o*f*r-d*c*r+d*s*l-e*f*l-o*s*u+e*c*u)*C,t[8]=x*C,t[9]=(m*h*r-d*v*r-m*i*u+e*v*u+d*i*g-e*h*g)*C,t[10]=(o*v*r-m*a*r+m*i*l-e*v*l-o*i*g+e*a*g)*C,t[11]=(d*a*r-o*h*r-d*i*l+e*h*l+o*i*u-e*a*u)*C,t[12]=A*C,t[13]=(d*v*s-m*h*s+m*i*f-e*v*f-d*i*p+e*h*p)*C,t[14]=(m*a*s-o*v*s-m*i*c+e*v*c+o*i*p-e*a*p)*C,t[15]=(o*h*s-d*a*s+d*i*c-e*h*c-o*i*f+e*a*f)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,d=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+i,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,d=o+o,h=a+a,f=r*l,u=r*d,m=r*h,v=o*d,p=o*h,g=a*h,M=c*l,_=c*d,x=c*h,A=i.x,w=i.y,C=i.z;return s[0]=(1-(v+g))*A,s[1]=(u+x)*A,s[2]=(m-_)*A,s[3]=0,s[4]=(u-x)*w,s[5]=(1-(f+g))*w,s[6]=(p+M)*w,s[7]=0,s[8]=(m+_)*C,s[9]=(p-M)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Mr.set(s[0],s[1],s[2]).length();const o=Mr.set(s[4],s[5],s[6]).length(),a=Mr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],di.copy(this);const l=1/r,d=1/o,h=1/a;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=d,di.elements[5]*=d,di.elements[6]*=d,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,e.setFromRotationMatrix(di),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Qi){const c=this.elements,l=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let u,m;if(a===Qi)u=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===el)u=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Qi){const c=this.elements,l=1/(e-t),d=1/(i-s),h=1/(o-r),f=(e+t)*l,u=(i+s)*d;let m,v;if(a===Qi)m=(o+r)*h,v=-2*h;else if(a===el)m=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Mr=new U,di=new Ie,e1=new U(0,0,0),n1=new U(1,1,1),vs=new U,ca=new U,Gn=new U,kd=new Ie,zd=new Is;class ri{constructor(t=0,e=0,i=0,s=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],h=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zd.setFromEuler(this),this.setFromQuaternion(zd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class G0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let i1=0;const Dd=new U,_r=new Is,$i=new Ie,da=new U,mo=new U,s1=new U,r1=new Is,Ud=new U(1,0,0),Nd=new U(0,1,0),Fd=new U(0,0,1),Od={type:"added"},o1={type:"removed"},yr={type:"childadded",child:null},Il={type:"childremoved",child:null};class On extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new U,e=new ri,i=new Is,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new he}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _r.setFromAxisAngle(t,e),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,e){return _r.setFromAxisAngle(t,e),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(Ud,t)}rotateY(t){return this.rotateOnAxis(Nd,t)}rotateZ(t){return this.rotateOnAxis(Fd,t)}translateOnAxis(t,e){return Dd.copy(t).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ud,t)}translateY(t){return this.translateOnAxis(Nd,t)}translateZ(t){return this.translateOnAxis(Fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?da.copy(t):da.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(mo,da,this.up):$i.lookAt(da,mo,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),_r.setFromRotationMatrix($i),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Od),yr.child=t,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(o1),Il.child=t,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Od),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,t,s1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,r1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),h=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}On.DEFAULT_UP=new U(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new U,Xi=new U,kl=new U,qi=new U,br=new U,Sr=new U,Bd=new U,zl=new U,Dl=new U,Ul=new U,Nl=new Je,Fl=new Je,Ol=new Je;class Mi{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hi.subVectors(t,e),s.cross(hi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){hi.subVectors(s,e),Xi.subVectors(i,e),kl.subVectors(t,e);const o=hi.dot(hi),a=hi.dot(Xi),c=hi.dot(kl),l=Xi.dot(Xi),d=Xi.dot(kl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,u=(l*c-a*d)*f,m=(o*d-a*c)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qi.x),c.addScaledVector(o,qi.y),c.addScaledVector(a,qi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Nl.setScalar(0),Fl.setScalar(0),Ol.setScalar(0),Nl.fromBufferAttribute(t,e),Fl.fromBufferAttribute(t,i),Ol.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Nl,r.x),o.addScaledVector(Fl,r.y),o.addScaledVector(Ol,r.z),o}static isFrontFacing(t,e,i,s){return hi.subVectors(i,e),Xi.subVectors(t,e),hi.cross(Xi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),hi.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Mi.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;br.subVectors(s,i),Sr.subVectors(r,i),zl.subVectors(t,i);const c=br.dot(zl),l=Sr.dot(zl);if(c<=0&&l<=0)return e.copy(i);Dl.subVectors(t,s);const d=br.dot(Dl),h=Sr.dot(Dl);if(d>=0&&h<=d)return e.copy(s);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(i).addScaledVector(br,o);Ul.subVectors(t,r);const u=br.dot(Ul),m=Sr.dot(Ul);if(m>=0&&u<=m)return e.copy(r);const v=u*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(Sr,a);const p=d*m-u*h;if(p<=0&&h-d>=0&&u-m>=0)return Bd.subVectors(r,s),a=(h-d)/(h-d+(u-m)),e.copy(s).addScaledVector(Bd,a);const g=1/(p+v+f);return o=v*g,a=f*g,e.copy(i).addScaledVector(br,o).addScaledVector(Sr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Bl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Te.workingColorSpace){if(t=V0(t,1),e=fn(e,0,1),i=fn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Bl(o,r,t+1/3),this.g=Bl(o,r,t),this.b=Bl(o,r,t-1/3)}return Te.toWorkingColorSpace(this,s),this}setStyle(t,e=ni){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ni){const i=Cu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return Te.fromWorkingColorSpace(Tn.copy(this),t),Math.round(fn(Tn.r*255,0,255))*65536+Math.round(fn(Tn.g*255,0,255))*256+Math.round(fn(Tn.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(Tn.copy(this),e);const i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=d<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=ni){Te.fromWorkingColorSpace(Tn.copy(this),t);const e=Tn.r,i=Tn.g,s=Tn.b;return t!==ni?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+e,xs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xs),t.getHSL(ha);const i=Lo(xs.h,ha.h,e),s=Lo(xs.s,ha.s,e),r=Lo(xs.l,ha.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new qt;qt.NAMES=Cu;let a1=0;class ul extends so{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=hr(),this.name="",this.blending=Js,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ac,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ac&&(i.blendDst=this.blendDst),this.blendEquation!==qs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class W0 extends ul{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new U,ua=new ct;class Bn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sd,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),i=Pn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),i=Pn(i,this.array),s=Pn(s,this.array),r=Pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sd&&(t.usage=this.usage),t}}class Ru extends Bn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Pu extends Bn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Se extends Bn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let l1=0;const Qn=new Ie,Hl=new On,wr=new U,Wn=new ks,go=new ks,dn=new U;class on extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?Pu:Ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new he().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,i){return Qn.makeTranslation(t,e,i),this.applyMatrix4(Qn),this}scale(t,e,i){return Qn.makeScale(t,e,i),this.applyMatrix4(Qn),this}lookAt(t){return Hl.lookAt(t),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Wn.min,go.min),Wn.expandByPoint(dn),dn.addVectors(Wn.max,go.max),Wn.expandByPoint(dn)):(Wn.expandByPoint(go.min),Wn.expandByPoint(go.max))}Wn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)dn.fromBufferAttribute(a,l),c&&(wr.fromBufferAttribute(t,l),dn.add(wr)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new U,c[P]=new U;const l=new U,d=new U,h=new U,f=new ct,u=new ct,m=new ct,v=new U,p=new U;function g(P,S,b){l.fromBufferAttribute(i,P),d.fromBufferAttribute(i,S),h.fromBufferAttribute(i,b),f.fromBufferAttribute(r,P),u.fromBufferAttribute(r,S),m.fromBufferAttribute(r,b),d.sub(l),h.sub(l),u.sub(f),m.sub(f);const k=1/(u.x*m.y-m.x*u.y);isFinite(k)&&(v.copy(d).multiplyScalar(m.y).addScaledVector(h,-u.y).multiplyScalar(k),p.copy(h).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(k),a[P].add(v),a[S].add(v),a[b].add(v),c[P].add(p),c[S].add(p),c[b].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,S=M.length;P<S;++P){const b=M[P],k=b.start,B=b.count;for(let V=k,Y=k+B;V<Y;V+=3)g(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const _=new U,x=new U,A=new U,w=new U;function C(P){A.fromBufferAttribute(s,P),w.copy(A);const S=a[P];_.copy(S),_.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(w,S);const k=x.dot(c[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,k)}for(let P=0,S=M.length;P<S;++P){const b=M[P],k=b.start,B=b.count;for(let V=k,Y=k+B;V<Y;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,d=new U,h=new U;if(t)for(let f=0,u=t.count;f<u;f+=3){const m=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(d),c.add(d),l.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,h=a.normalized,f=new l.constructor(c.length*d);let u=0,m=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?u=c[v]*a.data.stride+a.offset:u=c[v]*d;for(let g=0;g<d;g++)f[m++]=l[u++]}return new Bn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let d=0,h=l.length;d<h;d++){const f=l[d],u=t(f,i);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const u=l[h];d.push(u.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],h=r[l];for(let f=0,u=h.length;f<u;f++)d.push(h[f].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new Ie,Fs=new Au,fa=new qo,Vd=new U,pa=new U,ma=new U,ga=new U,Vl=new U,va=new U,Gd=new U,xa=new U;class ue extends On{constructor(t=new on,e=new W0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=a[c],h=r[c];d!==0&&(Vl.fromBufferAttribute(h,t),o?va.addScaledVector(Vl,d):va.addScaledVector(Vl.sub(e),d))}e.add(va)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),Fs.copy(t.ray).recast(t.near),!(fa.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(fa,Vd)===null||Fs.origin.distanceToSquared(Vd)>(t.far-t.near)**2))&&(Hd.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(Hd),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const p=f[m],g=o[p.materialIndex],M=Math.max(p.start,u.start),_=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let x=M,A=_;x<A;x+=3){const w=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=Ma(this,g,t,i,l,d,h,w,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let p=m,g=v;p<g;p+=3){const M=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);s=Ma(this,o,t,i,l,d,h,M,_,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const p=f[m],g=o[p.materialIndex],M=Math.max(p.start,u.start),_=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let x=M,A=_;x<A;x+=3){const w=x,C=x+1,P=x+2;s=Ma(this,g,t,i,l,d,h,w,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let p=m,g=v;p<g;p+=3){const M=p,_=p+1,x=p+2;s=Ma(this,o,t,i,l,d,h,M,_,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function c1(n,t,e,i,s,r,o,a){let c;if(t.side===pn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===rs,a),c===null)return null;xa.copy(a),xa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(xa);return l<e.near||l>e.far?null:{distance:l,point:xa.clone(),object:n}}function Ma(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,pa),n.getVertexPosition(c,ma),n.getVertexPosition(l,ga);const d=c1(n,t,e,i,pa,ma,ga,Gd);if(d){const h=new U;Mi.getBarycoord(Gd,pa,ma,ga,h),s&&(d.uv=Mi.getInterpolatedAttribute(s,a,c,l,h,new ct)),r&&(d.uv1=Mi.getInterpolatedAttribute(r,a,c,l,h,new ct)),o&&(d.normal=Mi.getInterpolatedAttribute(o,a,c,l,h,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new U,materialIndex:0};Mi.getNormal(pa,ma,ga,f.normal),d.face=f,d.barycoord=h}return d}class ro extends on{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],d=[],h=[];let f=0,u=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(h,2));function m(v,p,g,M,_,x,A,w,C,P,S){const b=x/C,k=A/P,B=x/2,V=A/2,Y=w/2,j=C+1,W=P+1;let et=0,Z=0;const xt=new U;for(let Lt=0;Lt<W;Lt++){const Ft=Lt*k-V;for(let oe=0;oe<j;oe++){const ke=oe*b-B;xt[v]=ke*M,xt[p]=Ft*_,xt[g]=Y,l.push(xt.x,xt.y,xt.z),xt[v]=0,xt[p]=0,xt[g]=w>0?1:-1,d.push(xt.x,xt.y,xt.z),h.push(oe/C),h.push(1-Lt/P),et+=1}}for(let Lt=0;Lt<P;Lt++)for(let Ft=0;Ft<C;Ft++){const oe=f+Ft+j*Lt,ke=f+Ft+j*(Lt+1),tt=f+(Ft+1)+j*(Lt+1),ft=f+(Ft+1)+j*Lt;c.push(oe,ke,ft),c.push(ke,tt,ft),Z+=6}a.addGroup(u,Z,S),u+=Z,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ln(n){const t={};for(let e=0;e<n.length;e++){const i=Qr(n[e]);for(const s in i)t[s]=i[s]}return t}function d1(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Lu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const Bo={clone:Qr,merge:Ln};var h1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends ul{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h1,this.fragmentShader=u1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=d1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Iu extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ms=new U,Wd=new ct,$d=new ct;class Xn extends Iu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ms.x,Ms.y).multiplyScalar(-t/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-t/Ms.z)}getViewSize(t,e){return this.getViewBounds(t,Wd,$d),e.subVectors($d,Wd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Po*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Er=-90,Tr=1;class f1 extends On{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xn(Er,Tr,t,e);s.layers=this.layers,this.add(s);const r=new Xn(Er,Tr,t,e);r.layers=this.layers,this.add(r);const o=new Xn(Er,Tr,t,e);o.layers=this.layers,this.add(o);const a=new Xn(Er,Tr,t,e);a.layers=this.layers,this.add(a);const c=new Xn(Er,Tr,t,e);c.layers=this.layers,this.add(c);const l=new Xn(Er,Tr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===el)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(h,f,u),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class ku extends kn{constructor(t,e,i,s,r,o,a,c,l,d){t=t!==void 0?t:[],e=e!==void 0?e:Zr,super(t,e,i,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class p1 extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ku(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ro(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:ts});r.uniforms.tEquirect.value=e;const o=new ue(s,r),a=e.minFilter;return e.minFilter===js&&(e.minFilter=zi),new f1(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Gl=new U,m1=new U,g1=new he;class bs{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Gl.subVectors(i,e).cross(m1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||g1.getNormalMatrix(t),s=this.coplanarPoint(Gl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new qo,_a=new U;class zu{constructor(t=new bs,e=new bs,i=new bs,s=new bs,r=new bs,o=new bs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],d=s[5],h=s[6],f=s[7],u=s[8],m=s[9],v=s[10],p=s[11],g=s[12],M=s[13],_=s[14],x=s[15];if(i[0].setComponents(c-r,f-l,p-u,x-g).normalize(),i[1].setComponents(c+r,f+l,p+u,x+g).normalize(),i[2].setComponents(c+o,f+d,p+m,x+M).normalize(),i[3].setComponents(c-o,f-d,p-m,x-M).normalize(),i[4].setComponents(c-a,f-h,p-v,x-_).normalize(),e===Qi)i[5].setComponents(c+a,f+h,p+v,x+_).normalize();else if(e===el)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(_a.x=s.normal.x>0?t.max.x:t.min.x,_a.y=s.normal.y>0?t.max.y:t.min.y,_a.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_a)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function v1(n){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,d),a.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const d=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,d);else{h.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<h.length;u++){const m=h[f],v=h[u];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let u=0,m=h.length;u<m;u++){const v=h[u];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class zs extends on{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,d=c+1,h=t/a,f=e/c,u=[],m=[],v=[],p=[];for(let g=0;g<d;g++){const M=g*f-o;for(let _=0;_<l;_++){const x=_*h-r;m.push(x,-M,0),v.push(0,0,1),p.push(_/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<a;M++){const _=M+l*g,x=M+l*(g+1),A=M+1+l*(g+1),w=M+1+l*g;u.push(_,x,w),u.push(x,A,w)}this.setIndex(u),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.widthSegments,t.heightSegments)}}var x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,A1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,H1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_m=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Am=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,t2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,g2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,A2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,I2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,U2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:x1,alphahash_pars_fragment:M1,alphamap_fragment:_1,alphamap_pars_fragment:y1,alphatest_fragment:b1,alphatest_pars_fragment:S1,aomap_fragment:w1,aomap_pars_fragment:E1,batching_pars_vertex:T1,batching_vertex:A1,begin_vertex:C1,beginnormal_vertex:R1,bsdfs:P1,iridescence_fragment:L1,bumpmap_pars_fragment:I1,clipping_planes_fragment:k1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:D1,clipping_planes_vertex:U1,color_fragment:N1,color_pars_fragment:F1,color_pars_vertex:O1,color_vertex:B1,common:H1,cube_uv_reflection_fragment:V1,defaultnormal_vertex:G1,displacementmap_pars_vertex:W1,displacementmap_vertex:$1,emissivemap_fragment:X1,emissivemap_pars_fragment:q1,colorspace_fragment:Y1,colorspace_pars_fragment:Z1,envmap_fragment:K1,envmap_common_pars_fragment:j1,envmap_pars_fragment:J1,envmap_pars_vertex:Q1,envmap_physical_pars_fragment:dm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:om,lights_lambert_fragment:am,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:hm,lights_toon_pars_fragment:um,lights_phong_fragment:fm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:vm,lights_fragment_maps:xm,lights_fragment_end:Mm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Sm,map_fragment:wm,map_pars_fragment:Em,map_particle_fragment:Tm,map_particle_pars_fragment:Am,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Im,morphtarget_pars_vertex:km,morphtarget_vertex:zm,normal_fragment_begin:Dm,normal_fragment_maps:Um,normal_pars_fragment:Nm,normal_pars_vertex:Fm,normal_vertex:Om,normalmap_pars_fragment:Bm,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:$m,packing:Xm,premultiplied_alpha_fragment:qm,project_vertex:Ym,dithering_fragment:Zm,dithering_pars_fragment:Km,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:t2,shadowmap_vertex:e2,shadowmask_pars_fragment:n2,skinbase_vertex:i2,skinning_pars_vertex:s2,skinning_vertex:r2,skinnormal_vertex:o2,specularmap_fragment:a2,specularmap_pars_fragment:l2,tonemapping_fragment:c2,tonemapping_pars_fragment:d2,transmission_fragment:h2,transmission_pars_fragment:u2,uv_pars_fragment:f2,uv_pars_vertex:p2,uv_vertex:m2,worldpos_vertex:g2,background_vert:v2,background_frag:x2,backgroundCube_vert:M2,backgroundCube_frag:_2,cube_vert:y2,cube_frag:b2,depth_vert:S2,depth_frag:w2,distanceRGBA_vert:E2,distanceRGBA_frag:T2,equirect_vert:A2,equirect_frag:C2,linedashed_vert:R2,linedashed_frag:P2,meshbasic_vert:L2,meshbasic_frag:I2,meshlambert_vert:k2,meshlambert_frag:z2,meshmatcap_vert:D2,meshmatcap_frag:U2,meshnormal_vert:N2,meshnormal_frag:F2,meshphong_vert:O2,meshphong_frag:B2,meshphysical_vert:H2,meshphysical_frag:V2,meshtoon_vert:G2,meshtoon_frag:W2,points_vert:$2,points_frag:X2,shadow_vert:q2,shadow_frag:Y2,sprite_vert:Z2,sprite_frag:K2},_t={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ii={basic:{uniforms:Ln([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Ln([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new qt(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Ln([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Ln([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Ln([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new qt(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Ln([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Ln([_t.points,_t.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Ln([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Ln([_t.common,_t.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Ln([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Ln([_t.sprite,_t.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Ln([_t.common,_t.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Ln([_t.lights,_t.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Ii.physical={uniforms:Ln([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const ya={r:0,b:0,g:0},Bs=new ri,j2=new Ie;function J2(n,t,e,i,s,r,o){const a=new qt(0);let c=r===!0?0:1,l,d,h=null,f=0,u=null;function m(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function v(M){let _=!1;const x=m(M);x===null?g(a,c):x&&x.isColor&&(g(x,1),_=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,_){const x=m(_);x&&(x.isCubeTexture||x.mapping===dl)?(d===void 0&&(d=new ue(new ro(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Qr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Bs.copy(_.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(j2.makeRotationFromEuler(Bs)),d.material.toneMapped=Te.getTransfer(x.colorSpace)!==Be,(h!==x||f!==x.version||u!==n.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,u=n.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ue(new zs(2,2),new sn({name:"BackgroundMaterial",uniforms:Qr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Te.getTransfer(x.colorSpace)!==Be,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,_){M.getRGB(ya,Lu(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,g(a,c)},render:v,addToRenderList:p}}function Q2(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(b,k,B,V,Y){let j=!1;const W=h(V,B,k);r!==W&&(r=W,l(r.object)),j=u(b,V,B,Y),j&&m(b,V,B,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(b,k,B,V),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function d(b){return n.deleteVertexArray(b)}function h(b,k,B){const V=B.wireframe===!0;let Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let j=Y[k.id];j===void 0&&(j={},Y[k.id]=j);let W=j[V];return W===void 0&&(W=f(c()),j[V]=W),W}function f(b){const k=[],B=[],V=[];for(let Y=0;Y<e;Y++)k[Y]=0,B[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:B,attributeDivisors:V,object:b,attributes:{},index:null}}function u(b,k,B,V){const Y=r.attributes,j=k.attributes;let W=0;const et=B.getAttributes();for(const Z in et)if(et[Z].location>=0){const Lt=Y[Z];let Ft=j[Z];if(Ft===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(Ft=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(Ft=b.instanceColor)),Lt===void 0||Lt.attribute!==Ft||Ft&&Lt.data!==Ft.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function m(b,k,B,V){const Y={},j=k.attributes;let W=0;const et=B.getAttributes();for(const Z in et)if(et[Z].location>=0){let Lt=j[Z];Lt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(Lt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(Lt=b.instanceColor));const Ft={};Ft.attribute=Lt,Lt&&Lt.data&&(Ft.data=Lt.data),Y[Z]=Ft,W++}r.attributes=Y,r.attributesNum=W,r.index=V}function v(){const b=r.newAttributes;for(let k=0,B=b.length;k<B;k++)b[k]=0}function p(b){g(b,0)}function g(b,k){const B=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;B[b]=1,V[b]===0&&(n.enableVertexAttribArray(b),V[b]=1),Y[b]!==k&&(n.vertexAttribDivisor(b,k),Y[b]=k)}function M(){const b=r.newAttributes,k=r.enabledAttributes;for(let B=0,V=k.length;B<V;B++)k[B]!==b[B]&&(n.disableVertexAttribArray(B),k[B]=0)}function _(b,k,B,V,Y,j,W){W===!0?n.vertexAttribIPointer(b,k,B,Y,j):n.vertexAttribPointer(b,k,B,V,Y,j)}function x(b,k,B,V){v();const Y=V.attributes,j=B.getAttributes(),W=k.defaultAttributeValues;for(const et in j){const Z=j[et];if(Z.location>=0){let xt=Y[et];if(xt===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor)),xt!==void 0){const Lt=xt.normalized,Ft=xt.itemSize,oe=t.get(xt);if(oe===void 0)continue;const ke=oe.buffer,tt=oe.type,ft=oe.bytesPerElement,Ot=tt===n.INT||tt===n.UNSIGNED_INT||xt.gpuType===D0;if(xt.isInterleavedBufferAttribute){const mt=xt.data,Xt=mt.stride,ee=xt.offset;if(mt.isInstancedInterleavedBuffer){for(let jt=0;jt<Z.locationSize;jt++)g(Z.location+jt,mt.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let jt=0;jt<Z.locationSize;jt++)p(Z.location+jt);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let jt=0;jt<Z.locationSize;jt++)_(Z.location+jt,Ft/Z.locationSize,tt,Lt,Xt*ft,(ee+Ft/Z.locationSize*jt)*ft,Ot)}else{if(xt.isInstancedBufferAttribute){for(let mt=0;mt<Z.locationSize;mt++)g(Z.location+mt,xt.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let mt=0;mt<Z.locationSize;mt++)p(Z.location+mt);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let mt=0;mt<Z.locationSize;mt++)_(Z.location+mt,Ft/Z.locationSize,tt,Lt,Ft*ft,Ft/Z.locationSize*mt*ft,Ot)}}else if(W!==void 0){const Lt=W[et];if(Lt!==void 0)switch(Lt.length){case 2:n.vertexAttrib2fv(Z.location,Lt);break;case 3:n.vertexAttrib3fv(Z.location,Lt);break;case 4:n.vertexAttrib4fv(Z.location,Lt);break;default:n.vertexAttrib1fv(Z.location,Lt)}}}}M()}function A(){P();for(const b in i){const k=i[b];for(const B in k){const V=k[B];for(const Y in V)d(V[Y].object),delete V[Y];delete k[B]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;const k=i[b.id];for(const B in k){const V=k[B];for(const Y in V)d(V[Y].object),delete V[Y];delete k[B]}delete i[b.id]}function C(b){for(const k in i){const B=i[k];if(B[b.id]===void 0)continue;const V=B[b.id];for(const Y in V)d(V[Y].object),delete V[Y];delete B[b.id]}}function P(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function tg(n,t,e){let i;function s(l){i=l}function r(l,d){n.drawArrays(i,l,d),e.update(d,i,1)}function o(l,d,h){h!==0&&(n.drawArraysInstanced(i,l,d,h),e.update(d,i,h))}function a(l,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,h);let u=0;for(let m=0;m<h;m++)u+=d[m];e.update(u,i,1)}function c(l,d,h,f){if(h===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<l.length;m++)o(l[m],d[m],f[m]);else{u.multiDrawArraysInstancedWEBGL(i,l,0,d,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=d[v]*f[v];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function eg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==_i&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==os&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Di&&!P)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function ng(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new bs,a=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const u=h.length!==0||f||i!==0||s;return s=f,i=h.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,u){const m=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,g=n.get(h);if(!s||m===null||m.length===0||r&&!p)r?d(null):l();else{const M=r?0:i,_=M*4;let x=g.clippingState||null;c.value=x,x=d(m,f,_,u);for(let A=0;A!==_;++A)x[A]=e[A];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,f,u,m){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=c.value,m!==!0||p===null){const g=u+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,x=u;_!==v;++_,x+=4)o.copy(h[_]).applyMatrix4(M,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function ig(n){let t=new WeakMap;function e(o,a){return a===Dc?o.mapping=Zr:a===Uc&&(o.mapping=Kr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dc||a===Uc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new p1(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Uu extends Iu{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Dr=4,Xd=[.125,.215,.35,.446,.526,.582],Ys=20,Wl=new Uu,qd=new qt;let $l=null,Xl=0,ql=0,Yl=!1;const Gs=(1+Math.sqrt(5))/2,Ar=1/Gs,Yd=[new U(-Gs,Ar,0),new U(Gs,Ar,0),new U(-Ar,0,Gs),new U(Ar,0,Gs),new U(0,Gs,-Ar),new U(0,Gs,Ar),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Zd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){$l=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($l,Xl,ql),this._renderer.xr.enabled=Yl,t.scissorTest=!1,ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zr||t.mapping===Kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$l=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:Ui,format:_i,colorSpace:io,depthBuffer:!1},s=Kd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kd(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,t,e)}return s}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Wl)}_sceneToCubeUV(t,e,i,s){const a=new Xn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(qd),d.toneMapping=Ts,d.autoClear=!1;const u=new W0({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new ue(new ro,u);let v=!1;const p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,v=!0):(u.color.copy(qd),v=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):M===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const _=this._cubeSize;ba(s,M*_,g>2?_:0,_,_),d.setRenderTarget(s),v&&d.render(m,a),d.render(t,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Zr||t.mapping===Kr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ba(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Wl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yd[(s-r-1)%Yd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ue(this._lodPlanes[s],l),f=l.uniforms,u=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ys-1),v=r/m,p=isFinite(r)?1+Math.floor(d*v):Ys;p>Ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ys}`);const g=[];let M=0;for(let C=0;C<Ys;++C){const P=C/v,S=Math.exp(-P*P/2);g.push(S),C===0?M+=S:C<p&&(M+=2*S)}for(let C=0;C<g.length;C++)g[C]=g[C]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-i;const x=this._sizeLods[s],A=3*x*(s>_-Dr?s-_+Dr:0),w=4*(this._cubeSize-x);ba(e,A,w,3*x,2*x),c.setRenderTarget(e),c.render(h,Wl)}}function sg(n){const t=[],e=[],i=[];let s=n;const r=n-Dr+1+Xd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Dr?c=Xd[o-n+Dr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],u=6,m=6,v=3,p=2,g=1,M=new Float32Array(v*m*u),_=new Float32Array(p*m*u),x=new Float32Array(g*m*u);for(let w=0;w<u;w++){const C=w%3*2/3-1,P=w>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(S,v*m*w),_.set(f,p*m*w);const b=[w,w,w,w,w,w];x.set(b,g*m*w)}const A=new on;A.setAttribute("position",new Bn(M,v)),A.setAttribute("uv",new Bn(_,p)),A.setAttribute("faceIndex",new Bn(x,g)),t.push(A),s>Dr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Kd(n,t,e){const i=new si(n,t,e);return i.texture.mapping=dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ba(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function rg(n,t,e){const i=new Float32Array(Ys),s=new U(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function jd(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Jd(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function $0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function og(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Dc||c===Uc,d=c===Zr||c===Kr;if(l||d){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Zd(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const u=a.image;return l&&u&&u.height>0||d&&u&&s(u)?(e===null&&(e=new Zd(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ag(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&wo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lg(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let p=0,g=v.length;p<g;p++)t.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)t.update(f[m],n.ARRAY_BUFFER);const u=h.morphAttributes;for(const m in u){const v=u[m];for(let p=0,g=v.length;p<g;p++)t.update(v[p],n.ARRAY_BUFFER)}}function l(h){const f=[],u=h.index,m=h.attributes.position;let v=0;if(u!==null){const M=u.array;v=u.version;for(let _=0,x=M.length;_<x;_+=3){const A=M[_+0],w=M[_+1],C=M[_+2];f.push(A,w,w,C,C,A)}}else if(m!==void 0){const M=m.array;v=m.version;for(let _=0,x=M.length/3-1;_<x;_+=3){const A=_+0,w=_+1,C=_+2;f.push(A,w,w,C,C,A)}}else return;const p=new(wu(f)?Pu:Ru)(f,1);p.version=v;const g=r.get(h);g&&t.remove(g),r.set(h,p)}function d(h){const f=r.get(h);if(f){const u=h.index;u!==null&&f.version<u.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function cg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*o),e.update(u,i,1)}function l(f,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,f*o,m),e.update(u,i,m))}function d(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,m);let p=0;for(let g=0;g<m;g++)p+=u[g];e.update(p,i,1)}function h(f,u,m,v){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)l(f[g]/o,u[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(i,u,0,r,f,0,v,0,m);let g=0;for(let M=0;M<m;M++)g+=u[M]*v[M];e.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function dg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function hg(n,t,e){const i=new WeakMap,s=new Je;function r(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let b=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var u=b;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let A=a.attributes.position.count*x,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*w*4*h),P=new Tu(C,A,w,h);P.type=Di,P.needsUpdate=!0;const S=x*4;for(let k=0;k<h;k++){const B=g[k],V=M[k],Y=_[k],j=A*w*4*k;for(let W=0;W<B.count;W++){const et=W*S;m===!0&&(s.fromBufferAttribute(B,W),C[j+et+0]=s.x,C[j+et+1]=s.y,C[j+et+2]=s.z,C[j+et+3]=0),v===!0&&(s.fromBufferAttribute(V,W),C[j+et+4]=s.x,C[j+et+5]=s.y,C[j+et+6]=s.z,C[j+et+7]=0),p===!0&&(s.fromBufferAttribute(Y,W),C[j+et+8]=s.x,C[j+et+9]=s.y,C[j+et+10]=s.z,C[j+et+11]=Y.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new ct(A,w)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<l.length;p++)m+=l[p];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function ug(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,d=c.geometry,h=t.get(c,d);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Nu extends kn{constructor(t,e,i,s,r,o,a,c,l,d=Hr){if(d!==Hr&&d!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Hr&&(i=or),i===void 0&&d===Jr&&(i=jr),super(null,s,r,o,a,c,d,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Kn,this.minFilter=c!==void 0?c:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fu=new kn,Qd=new Nu(1,1),Ou=new Tu,Bu=new Qp,Hu=new ku,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function oo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ln(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function cn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function fl(n,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2fv(this.addr,t),cn(e,t)}}function mg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;n.uniform3fv(this.addr,t),cn(e,t)}}function gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4fv(this.addr,t),cn(e,t)}}function vg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;sh.set(i),n.uniformMatrix2fv(this.addr,!1,sh),cn(e,i)}}function xg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;ih.set(i),n.uniformMatrix3fv(this.addr,!1,ih),cn(e,i)}}function Mg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;nh.set(i),n.uniformMatrix4fv(this.addr,!1,nh),cn(e,i)}}function _g(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2iv(this.addr,t),cn(e,t)}}function bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3iv(this.addr,t),cn(e,t)}}function Sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4iv(this.addr,t),cn(e,t)}}function wg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Eg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2uiv(this.addr,t),cn(e,t)}}function Tg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3uiv(this.addr,t),cn(e,t)}}function Ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4uiv(this.addr,t),cn(e,t)}}function Cg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Qd.compareFunction=Su,r=Qd):r=Fu,e.setTexture2D(t||r,s)}function Rg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Bu,s)}function Pg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hu,s)}function Lg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ou,s)}function Ig(n){switch(n){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return vg;case 35675:return xg;case 35676:return Mg;case 5124:case 35670:return _g;case 35667:case 35671:return yg;case 35668:case 35672:return bg;case 35669:case 35673:return Sg;case 5125:return wg;case 36294:return Eg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}function kg(n,t){n.uniform1fv(this.addr,t)}function zg(n,t){const e=oo(t,this.size,2);n.uniform2fv(this.addr,e)}function Dg(n,t){const e=oo(t,this.size,3);n.uniform3fv(this.addr,e)}function Ug(n,t){const e=oo(t,this.size,4);n.uniform4fv(this.addr,e)}function Ng(n,t){const e=oo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Fg(n,t){const e=oo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Og(n,t){const e=oo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Bg(n,t){n.uniform1iv(this.addr,t)}function Hg(n,t){n.uniform2iv(this.addr,t)}function Vg(n,t){n.uniform3iv(this.addr,t)}function Gg(n,t){n.uniform4iv(this.addr,t)}function Wg(n,t){n.uniform1uiv(this.addr,t)}function $g(n,t){n.uniform2uiv(this.addr,t)}function Xg(n,t){n.uniform3uiv(this.addr,t)}function qg(n,t){n.uniform4uiv(this.addr,t)}function Yg(n,t,e){const i=this.cache,s=t.length,r=fl(e,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fu,r[o])}function Zg(n,t,e){const i=this.cache,s=t.length,r=fl(e,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bu,r[o])}function Kg(n,t,e){const i=this.cache,s=t.length,r=fl(e,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hu,r[o])}function jg(n,t,e){const i=this.cache,s=t.length,r=fl(e,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ou,r[o])}function Jg(n){switch(n){case 5126:return kg;case 35664:return zg;case 35665:return Dg;case 35666:return Ug;case 35674:return Ng;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return $g;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return jg}}class Qg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}}class tv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}}class ev{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function rh(n,t){n.seq.push(t),n.map[t.id]=t}function nv(n,t,e){const i=n.name,s=i.length;for(Zl.lastIndex=0;;){const r=Zl.exec(i),o=Zl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rh(e,l===void 0?new Qg(a,n,t):new tv(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new ev(a),rh(e,h)),e=h}}}class qa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);nv(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function oh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const iv=37297;let sv=0;function rv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const ah=new he;function ov(n){Te._getMatrix(ah,Te.workingColorSpace,n);const t=`mat3( ${ah.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case hl:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function lh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+rv(n.getShaderSource(t),o)}else return s}function av(n,t){const e=ov(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lv(n,t){let e;switch(t){case au:e="Linear";break;case lu:e="Reinhard";break;case cu:e="Cineon";break;case du:e="ACESFilmic";break;case hu:e="AgX";break;case uu:e="Neutral";break;case mp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sa=new U;function cv(){Te.getLuminanceCoefficients(Sa);const n=Sa.x.toFixed(4),t=Sa.y.toFixed(4),e=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function hv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function uv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Eo(n){return n!==""}function ch(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function h0(n){return n.replace(fv,mv)}const pv=new Map;function mv(n,t){let e=xe[t];if(e===void 0){const i=pv.get(t);if(i!==void 0)e=xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return h0(e)}const gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(n){return n.replace(gv,vv)}function vv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zi&&(t="SHADOWMAP_TYPE_VSM"),t}function Mv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case Kr:t="ENVMAP_TYPE_CUBE";break;case dl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _v(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Kr:t="ENVMAP_MODE_REFRACTION";break}return t}function yv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case fp:t="ENVMAP_BLENDING_MIX";break;case pp:t="ENVMAP_BLENDING_ADD";break}return t}function bv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Sv(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=xv(e),l=Mv(e),d=_v(e),h=yv(e),f=bv(e),u=dv(e),m=hv(r),v=s.createProgram();let p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Eo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Eo).join(`
`),g.length>0&&(g+=`
`)):(p=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),g=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ts?"#define TONE_MAPPING":"",e.toneMapping!==Ts?xe.tonemapping_pars_fragment:"",e.toneMapping!==Ts?lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,av("linearToOutputTexel",e.outputColorSpace),cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),o=h0(o),o=ch(o,e),o=dh(o,e),a=h0(a),a=ch(a,e),a=dh(a,e),o=hh(o),a=hh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=M+p+o,x=M+g+a,A=oh(s,s.VERTEX_SHADER,_),w=oh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,A),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(k){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(A).trim(),Y=s.getShaderInfoLog(w).trim();let j=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,w);else{const et=lh(s,A,"vertex"),Z=lh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+B+`
`+et+`
`+Z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||Y==="")&&(W=!1);W&&(k.diagnostics={runnable:j,programLog:B,vertexShader:{log:V,prefix:p},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(A),s.deleteShader(w),P=new qa(s,v),S=uv(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,iv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let wv=0;class Ev{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Tv(t),e.set(t,i)),i}}class Tv{constructor(t){this.id=wv++,this.code=t,this.usedTimes=0}}function Av(n,t,e,i,s,r,o){const a=new G0,c=new Ev,l=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,b,k,B,V){const Y=B.fog,j=V.geometry,W=S.isMeshStandardMaterial?B.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),Z=et&&et.mapping===dl?et.image.height:null,xt=m[S.type];S.precision!==null&&(u=s.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const Lt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ft=Lt!==void 0?Lt.length:0;let oe=0;j.morphAttributes.position!==void 0&&(oe=1),j.morphAttributes.normal!==void 0&&(oe=2),j.morphAttributes.color!==void 0&&(oe=3);let ke,tt,ft,Ot;if(xt){const Fe=Ii[xt];ke=Fe.vertexShader,tt=Fe.fragmentShader}else ke=S.vertexShader,tt=S.fragmentShader,c.update(S),ft=c.getVertexShaderID(S),Ot=c.getFragmentShaderID(S);const mt=n.getRenderTarget(),Xt=n.state.buffers.depth.getReversed(),ee=V.isInstancedMesh===!0,jt=V.isBatchedMesh===!0,Ce=!!S.map,st=!!S.matcap,ut=!!et,D=!!S.aoMap,Wt=!!S.lightMap,dt=!!S.bumpMap,Dt=!!S.normalMap,vt=!!S.displacementMap,Zt=!!S.emissiveMap,It=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,G=S.clearcoat>0,J=S.dispersion>0,ot=S.iridescence>0,Q=S.sheen>0,Bt=S.transmission>0,St=E&&!!S.anisotropyMap,kt=G&&!!S.clearcoatMap,ye=G&&!!S.clearcoatNormalMap,ht=G&&!!S.clearcoatRoughnessMap,Ut=ot&&!!S.iridescenceMap,Kt=ot&&!!S.iridescenceThicknessMap,Qt=Q&&!!S.sheenColorMap,Nt=Q&&!!S.sheenRoughnessMap,we=!!S.specularMap,pe=!!S.specularColorMap,Ve=!!S.specularIntensityMap,N=Bt&&!!S.transmissionMap,wt=Bt&&!!S.thicknessMap,K=!!S.gradientMap,nt=!!S.alphaMap,At=S.alphaTest>0,Et=!!S.alphaHash,ce=!!S.extensions;let je=Ts;S.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(je=n.toneMapping);const wn={shaderID:xt,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:tt,defines:S.defines,customVertexShaderID:ft,customFragmentShaderID:Ot,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:jt,batchingColor:jt&&V._colorsTexture!==null,instancing:ee,instancingColor:ee&&V.instanceColor!==null,instancingMorph:ee&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:io,alphaToCoverage:!!S.alphaToCoverage,map:Ce,matcap:st,envMap:ut,envMapMode:ut&&et.mapping,envMapCubeUVHeight:Z,aoMap:D,lightMap:Wt,bumpMap:dt,normalMap:Dt,displacementMap:f&&vt,emissiveMap:Zt,normalMapObjectSpace:Dt&&S.normalMapType===_p,normalMapTangentSpace:Dt&&S.normalMapType===Mp,metalnessMap:It,roughnessMap:R,anisotropy:E,anisotropyMap:St,clearcoat:G,clearcoatMap:kt,clearcoatNormalMap:ye,clearcoatRoughnessMap:ht,dispersion:J,iridescence:ot,iridescenceMap:Ut,iridescenceThicknessMap:Kt,sheen:Q,sheenColorMap:Qt,sheenRoughnessMap:Nt,specularMap:we,specularColorMap:pe,specularIntensityMap:Ve,transmission:Bt,transmissionMap:N,thicknessMap:wt,gradientMap:K,opaque:S.transparent===!1&&S.blending===Js&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:At,alphaHash:Et,combine:S.combine,mapUv:Ce&&v(S.map.channel),aoMapUv:D&&v(S.aoMap.channel),lightMapUv:Wt&&v(S.lightMap.channel),bumpMapUv:dt&&v(S.bumpMap.channel),normalMapUv:Dt&&v(S.normalMap.channel),displacementMapUv:vt&&v(S.displacementMap.channel),emissiveMapUv:Zt&&v(S.emissiveMap.channel),metalnessMapUv:It&&v(S.metalnessMap.channel),roughnessMapUv:R&&v(S.roughnessMap.channel),anisotropyMapUv:St&&v(S.anisotropyMap.channel),clearcoatMapUv:kt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(S.sheenRoughnessMap.channel),specularMapUv:we&&v(S.specularMap.channel),specularColorMapUv:pe&&v(S.specularColorMap.channel),specularIntensityMapUv:Ve&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:wt&&v(S.thicknessMap.channel),alphaMapUv:nt&&v(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Dt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Ce||nt),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Xt,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&Te.getTransfer(S.map.colorSpace)===Be,decodeVideoTextureEmissive:Zt&&S.emissiveMap.isVideoTexture===!0&&Te.getTransfer(S.emissiveMap.colorSpace)===Be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fn,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ce&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&S.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return wn.vertexUv1s=l.has(1),wn.vertexUv2s=l.has(2),wn.vertexUv3s=l.has(3),l.clear(),wn}function g(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)b.push(k),b.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(M(b,S),_(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const b=m[S.type];let k;if(b){const B=Ii[b];k=Bo.clone(B.uniforms)}else k=S.uniforms;return k}function A(S,b){let k;for(let B=0,V=d.length;B<V;B++){const Y=d[B];if(Y.cacheKey===b){k=Y,++k.usedTimes;break}}return k===void 0&&(k=new Sv(n,b,S,r),d.push(k)),k}function w(S){if(--S.usedTimes===0){const b=d.indexOf(S);d[b]=d[d.length-1],d.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:d,dispose:P}}function Cv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Rv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ph(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,u,m,v,p){let g=n[t];return g===void 0?(g={id:h.id,object:h,geometry:f,material:u,groupOrder:m,renderOrder:h.renderOrder,z:v,group:p},n[t]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=u,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=v,g.group=p),t++,g}function a(h,f,u,m,v,p){const g=o(h,f,u,m,v,p);u.transmission>0?i.push(g):u.transparent===!0?s.push(g):e.push(g)}function c(h,f,u,m,v,p){const g=o(h,f,u,m,v,p);u.transmission>0?i.unshift(g):u.transparent===!0?s.unshift(g):e.unshift(g)}function l(h,f){e.length>1&&e.sort(h||Rv),i.length>1&&i.sort(f||fh),s.length>1&&s.sort(f||fh)}function d(){for(let h=t,f=n.length;h<f;h++){const u=n[h];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:d,sort:l}}function Pv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new ph,n.set(i,[o])):s>=r.length?(o=new ph,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Lv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new qt};break;case"SpotLight":e={position:new U,direction:new U,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function Iv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let kv=0;function zv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Dv(n){const t=new Lv,e=Iv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const s=new U,r=new Ie,o=new Ie;function a(l){let d=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let u=0,m=0,v=0,p=0,g=0,M=0,_=0,x=0,A=0,w=0,C=0;l.sort(zv);for(let S=0,b=l.length;S<b;S++){const k=l[S],B=k.color,V=k.intensity,Y=k.distance,j=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=B.r*V,h+=B.g*V,f+=B.b*V;else if(k.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(k.sh.coefficients[W],V);C++}else if(k.isDirectionalLight){const W=t.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const et=k.shadow,Z=e.get(k);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,i.directionalShadow[u]=Z,i.directionalShadowMap[u]=j,i.directionalShadowMatrix[u]=k.shadow.matrix,M++}i.directional[u]=W,u++}else if(k.isSpotLight){const W=t.get(k);W.position.setFromMatrixPosition(k.matrixWorld),W.color.copy(B).multiplyScalar(V),W.distance=Y,W.coneCos=Math.cos(k.angle),W.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),W.decay=k.decay,i.spot[v]=W;const et=k.shadow;if(k.map&&(i.spotLightMap[A]=k.map,A++,et.updateMatrices(k),k.castShadow&&w++),i.spotLightMatrix[v]=et.matrix,k.castShadow){const Z=e.get(k);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=j,x++}v++}else if(k.isRectAreaLight){const W=t.get(k);W.color.copy(B).multiplyScalar(V),W.halfWidth.set(k.width*.5,0,0),W.halfHeight.set(0,k.height*.5,0),i.rectArea[p]=W,p++}else if(k.isPointLight){const W=t.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity),W.distance=k.distance,W.decay=k.decay,k.castShadow){const et=k.shadow,Z=e.get(k);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,Z.shadowCameraNear=et.camera.near,Z.shadowCameraFar=et.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=k.shadow.matrix,_++}i.point[m]=W,m++}else if(k.isHemisphereLight){const W=t.get(k);W.skyColor.copy(k.color).multiplyScalar(V),W.groundColor.copy(k.groundColor).multiplyScalar(V),i.hemi[g]=W,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==u||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==g||P.numDirectionalShadows!==M||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==A||P.numLightProbes!==C)&&(i.directional.length=u,i.spot.length=v,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,P.directionalLength=u,P.pointLength=m,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=g,P.numDirectionalShadows=M,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=A,P.numLightProbes=C,i.version=kv++)}function c(l,d){let h=0,f=0,u=0,m=0,v=0;const p=d.matrixWorldInverse;for(let g=0,M=l.length;g<M;g++){const _=l[g];if(_.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),h++}else if(_.isSpotLight){const x=i.spot[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(_.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:i}}function mh(n){const t=new Dv(n),e=[],i=[];function s(d){l.camera=d,e.length=0,i.length=0}function r(d){e.push(d)}function o(d){i.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Uv(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new mh(n),t.set(s,[a])):r>=o.length?(a=new mh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Nv extends ul{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fv extends ul{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hv(n,t,e){let i=new zu;const s=new ct,r=new ct,o=new Je,a=new Nv({depthPacking:xp}),c=new Fv,l={},d=e.maxTextureSize,h={[rs]:pn,[pn]:rs,[Fn]:Fn},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Ov,fragmentShader:Bv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const m=new on;m.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ue(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let g=this.type;this.render=function(w,C,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),b=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ts),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=g!==Zi&&this.type===Zi,Y=g===Zi&&this.type!==Zi;for(let j=0,W=w.length;j<W;j++){const et=w[j],Z=et.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const xt=Z.getFrameExtents();if(s.multiply(xt),r.copy(Z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/xt.x),s.x=r.x*xt.x,Z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/xt.y),s.y=r.y*xt.y,Z.mapSize.y=r.y)),Z.map===null||V===!0||Y===!0){const Ft=this.type!==Zi?{minFilter:Kn,magFilter:Kn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new si(s.x,s.y,Ft),Z.map.texture.name=et.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const Lt=Z.getViewportCount();for(let Ft=0;Ft<Lt;Ft++){const oe=Z.getViewport(Ft);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),B.viewport(o),Z.updateMatrices(et,Ft),i=Z.getFrustum(),x(C,P,Z.camera,et,this.type)}Z.isPointLightShadow!==!0&&this.type===Zi&&M(Z,P),Z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(S,b,k)};function M(w,C){const P=t.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new si(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,P,f,v,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,P,u,v,null)}function _(w,C,P,S){let b=null;const k=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)b=k;else if(b=P.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=b.uuid,V=C.uuid;let Y=l[B];Y===void 0&&(Y={},l[B]=Y);let j=Y[V];j===void 0&&(j=b.clone(),Y[V]=j,C.addEventListener("dispose",A)),b=j}if(b.visible=C.visible,b.wireframe=C.wireframe,S===Zi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=n.properties.get(b);B.light=P}return b}function x(w,C,P,S,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Zi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const V=t.update(w),Y=w.material;if(Array.isArray(Y)){const j=V.groups;for(let W=0,et=j.length;W<et;W++){const Z=j[W],xt=Y[Z.materialIndex];if(xt&&xt.visible){const Lt=_(w,xt,S,b);w.onBeforeShadow(n,w,C,P,V,Lt,Z),n.renderBufferDirect(P,null,V,Lt,w,Z),w.onAfterShadow(n,w,C,P,V,Lt,Z)}}}else if(Y.visible){const j=_(w,Y,S,b);w.onBeforeShadow(n,w,C,P,V,j,null),n.renderBufferDirect(P,null,V,j,w,null),w.onAfterShadow(n,w,C,P,V,j,null)}}const B=w.children;for(let V=0,Y=B.length;V<Y;V++)x(B[V],C,P,S,b)}function A(w){w.target.removeEventListener("dispose",A);for(const P in l){const S=l[P],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const Vv={[Cc]:Rc,[Pc]:kc,[Lc]:zc,[Yr]:Ic,[Rc]:Cc,[kc]:Pc,[zc]:Lc,[Ic]:Yr};function Gv(n,t){function e(){let N=!1;const wt=new Je;let K=null;const nt=new Je(0,0,0,0);return{setMask:function(At){K!==At&&!N&&(n.colorMask(At,At,At,At),K=At)},setLocked:function(At){N=At},setClear:function(At,Et,ce,je,wn){wn===!0&&(At*=je,Et*=je,ce*=je),wt.set(At,Et,ce,je),nt.equals(wt)===!1&&(n.clearColor(At,Et,ce,je),nt.copy(wt))},reset:function(){N=!1,K=null,nt.set(-1,0,0,0)}}}function i(){let N=!1,wt=!1,K=null,nt=null,At=null;return{setReversed:function(Et){if(wt!==Et){const ce=t.get("EXT_clip_control");wt?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT);const je=At;At=null,this.setClear(je)}wt=Et},getReversed:function(){return wt},setTest:function(Et){Et?mt(n.DEPTH_TEST):Xt(n.DEPTH_TEST)},setMask:function(Et){K!==Et&&!N&&(n.depthMask(Et),K=Et)},setFunc:function(Et){if(wt&&(Et=Vv[Et]),nt!==Et){switch(Et){case Cc:n.depthFunc(n.NEVER);break;case Rc:n.depthFunc(n.ALWAYS);break;case Pc:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case Lc:n.depthFunc(n.EQUAL);break;case Ic:n.depthFunc(n.GEQUAL);break;case kc:n.depthFunc(n.GREATER);break;case zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=Et}},setLocked:function(Et){N=Et},setClear:function(Et){At!==Et&&(wt&&(Et=1-Et),n.clearDepth(Et),At=Et)},reset:function(){N=!1,K=null,nt=null,At=null,wt=!1}}}function s(){let N=!1,wt=null,K=null,nt=null,At=null,Et=null,ce=null,je=null,wn=null;return{setTest:function(Fe){N||(Fe?mt(n.STENCIL_TEST):Xt(n.STENCIL_TEST))},setMask:function(Fe){wt!==Fe&&!N&&(n.stencilMask(Fe),wt=Fe)},setFunc:function(Fe,ai,Hi){(K!==Fe||nt!==ai||At!==Hi)&&(n.stencilFunc(Fe,ai,Hi),K=Fe,nt=ai,At=Hi)},setOp:function(Fe,ai,Hi){(Et!==Fe||ce!==ai||je!==Hi)&&(n.stencilOp(Fe,ai,Hi),Et=Fe,ce=ai,je=Hi)},setLocked:function(Fe){N=Fe},setClear:function(Fe){wn!==Fe&&(n.clearStencil(Fe),wn=Fe)},reset:function(){N=!1,wt=null,K=null,nt=null,At=null,Et=null,ce=null,je=null,wn=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let d={},h={},f=new WeakMap,u=[],m=null,v=!1,p=null,g=null,M=null,_=null,x=null,A=null,w=null,C=new qt(0,0,0),P=0,S=!1,b=null,k=null,B=null,V=null,Y=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,et=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=et>=1):Z.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=et>=2);let xt=null,Lt={};const Ft=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),ke=new Je().fromArray(Ft),tt=new Je().fromArray(oe);function ft(N,wt,K,nt){const At=new Uint8Array(4),Et=n.createTexture();n.bindTexture(N,Et),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ce=0;ce<K;ce++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(wt+ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return Et}const Ot={};Ot[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),Ot[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ot[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(n.DEPTH_TEST),o.setFunc(Yr),dt(!1),Dt(Md),mt(n.CULL_FACE),D(ts);function mt(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Xt(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function ee(N,wt){return h[N]!==wt?(n.bindFramebuffer(N,wt),h[N]=wt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=wt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function jt(N,wt){let K=u,nt=!1;if(N){K=f.get(wt),K===void 0&&(K=[],f.set(wt,K));const At=N.textures;if(K.length!==At.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,ce=At.length;Et<ce;Et++)K[Et]=n.COLOR_ATTACHMENT0+Et;K.length=At.length,nt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,nt=!0);nt&&n.drawBuffers(K)}function Ce(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const st={[qs]:n.FUNC_ADD,[Kf]:n.FUNC_SUBTRACT,[jf]:n.FUNC_REVERSE_SUBTRACT};st[Jf]=n.MIN,st[Qf]=n.MAX;const ut={[tp]:n.ZERO,[ep]:n.ONE,[np]:n.SRC_COLOR,[Tc]:n.SRC_ALPHA,[lp]:n.SRC_ALPHA_SATURATE,[op]:n.DST_COLOR,[sp]:n.DST_ALPHA,[ip]:n.ONE_MINUS_SRC_COLOR,[Ac]:n.ONE_MINUS_SRC_ALPHA,[ap]:n.ONE_MINUS_DST_COLOR,[rp]:n.ONE_MINUS_DST_ALPHA,[cp]:n.CONSTANT_COLOR,[dp]:n.ONE_MINUS_CONSTANT_COLOR,[hp]:n.CONSTANT_ALPHA,[up]:n.ONE_MINUS_CONSTANT_ALPHA};function D(N,wt,K,nt,At,Et,ce,je,wn,Fe){if(N===ts){v===!0&&(Xt(n.BLEND),v=!1);return}if(v===!1&&(mt(n.BLEND),v=!0),N!==Zf){if(N!==p||Fe!==S){if((g!==qs||x!==qs)&&(n.blendEquation(n.FUNC_ADD),g=qs,x=qs),Fe)switch(N){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case No:n.blendFunc(n.ONE,n.ONE);break;case _d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case No:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,_=null,A=null,w=null,C.set(0,0,0),P=0,p=N,S=Fe}return}At=At||wt,Et=Et||K,ce=ce||nt,(wt!==g||At!==x)&&(n.blendEquationSeparate(st[wt],st[At]),g=wt,x=At),(K!==M||nt!==_||Et!==A||ce!==w)&&(n.blendFuncSeparate(ut[K],ut[nt],ut[Et],ut[ce]),M=K,_=nt,A=Et,w=ce),(je.equals(C)===!1||wn!==P)&&(n.blendColor(je.r,je.g,je.b,wn),C.copy(je),P=wn),p=N,S=!1}function Wt(N,wt){N.side===Fn?Xt(n.CULL_FACE):mt(n.CULL_FACE);let K=N.side===pn;wt&&(K=!K),dt(K),N.blending===Js&&N.transparent===!1?D(ts):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const nt=N.stencilWrite;a.setTest(nt),nt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Zt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):Xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function Dt(N){N!==Xf?(mt(n.CULL_FACE),N!==k&&(N===Md?n.cullFace(n.BACK):N===qf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xt(n.CULL_FACE),k=N}function vt(N){N!==B&&(W&&n.lineWidth(N),B=N)}function Zt(N,wt,K){N?(mt(n.POLYGON_OFFSET_FILL),(V!==wt||Y!==K)&&(n.polygonOffset(wt,K),V=wt,Y=K)):Xt(n.POLYGON_OFFSET_FILL)}function It(N){N?mt(n.SCISSOR_TEST):Xt(n.SCISSOR_TEST)}function R(N){N===void 0&&(N=n.TEXTURE0+j-1),xt!==N&&(n.activeTexture(N),xt=N)}function E(N,wt,K){K===void 0&&(xt===null?K=n.TEXTURE0+j-1:K=xt);let nt=Lt[K];nt===void 0&&(nt={type:void 0,texture:void 0},Lt[K]=nt),(nt.type!==N||nt.texture!==wt)&&(xt!==K&&(n.activeTexture(K),xt=K),n.bindTexture(N,wt||Ot[N]),nt.type=N,nt.texture=wt)}function G(){const N=Lt[xt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qt(N){ke.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ke.copy(N))}function Nt(N){tt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),tt.copy(N))}function we(N,wt){let K=l.get(wt);K===void 0&&(K=new WeakMap,l.set(wt,K));let nt=K.get(N);nt===void 0&&(nt=n.getUniformBlockIndex(wt,N.name),K.set(N,nt))}function pe(N,wt){const nt=l.get(wt).get(N);c.get(wt)!==nt&&(n.uniformBlockBinding(wt,nt,N.__bindingPointIndex),c.set(wt,nt))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},xt=null,Lt={},h={},f=new WeakMap,u=[],m=null,v=!1,p=null,g=null,M=null,_=null,x=null,A=null,w=null,C=new qt(0,0,0),P=0,S=!1,b=null,k=null,B=null,V=null,Y=null,ke.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Xt,bindFramebuffer:ee,drawBuffers:jt,useProgram:Ce,setBlending:D,setMaterial:Wt,setFlipSided:dt,setCullFace:Dt,setLineWidth:vt,setPolygonOffset:Zt,setScissorTest:It,activeTexture:R,bindTexture:E,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:ot,texImage2D:Ut,texImage3D:Kt,updateUBOMapping:we,uniformBlockBinding:pe,texStorage2D:ye,texStorage3D:ht,texSubImage2D:Q,texSubImage3D:Bt,compressedTexSubImage2D:St,compressedTexSubImage3D:kt,scissor:Qt,viewport:Nt,reset:Ve}}function gh(n,t,e,i){const s=Wv(i);switch(e){case vu:return n*t;case Mu:return n*t;case _u:return n*t*2;case F0:return n*t/s.components*s.byteLength;case O0:return n*t/s.components*s.byteLength;case yu:return n*t*2/s.components*s.byteLength;case B0:return n*t*2/s.components*s.byteLength;case xu:return n*t*3/s.components*s.byteLength;case _i:return n*t*4/s.components*s.byteLength;case H0:return n*t*4/s.components*s.byteLength;case Va:case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wa:case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bc:case Vc:return Math.max(n,16)*Math.max(t,8)/4;case Oc:case Hc:return Math.max(n,8)*Math.max(t,8)/2;case Gc:case Wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case t0:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case e0:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case n0:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case i0:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case s0:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case r0:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xa:case o0:case a0:return Math.ceil(n/4)*Math.ceil(t/4)*16;case bu:case l0:return Math.ceil(n/4)*Math.ceil(t/4)*8;case c0:case d0:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wv(n){switch(n){case os:case pu:return{byteLength:1,components:1};case Fo:case mu:case Ui:return{byteLength:2,components:1};case U0:case N0:return{byteLength:2,components:4};case or:case D0:case Di:return{byteLength:4,components:1};case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function $v(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,d=new WeakMap;let h;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return u?new OffscreenCanvas(R,E):nl("canvas")}function v(R,E,G){let J=1;const ot=It(R);if((ot.width>G||ot.height>G)&&(J=G/Math.max(ot.width,ot.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*ot.width),Bt=Math.floor(J*ot.height);h===void 0&&(h=m(Q,Bt));const St=E?m(Q,Bt):h;return St.width=Q,St.height=Bt,St.getContext("2d").drawImage(R,0,0,Q,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Q+"x"+Bt+")."),St}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,E,G,J,ot=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=E;if(E===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),E===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),G===n.UNSIGNED_INT&&(Q=n.RGB32UI),G===n.BYTE&&(Q=n.RGB8I),G===n.SHORT&&(Q=n.RGB16I),G===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),G===n.UNSIGNED_INT&&(Q=n.RGBA32UI),G===n.BYTE&&(Q=n.RGBA8I),G===n.SHORT&&(Q=n.RGBA16I),G===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),E===n.RGBA){const Bt=ot?hl:Te.getTransfer(J);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=Bt===Be?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(R,E){let G;return R?E===null||E===or||E===jr?G=n.DEPTH24_STENCIL8:E===Di?G=n.DEPTH32F_STENCIL8:E===Fo&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===or||E===jr?G=n.DEPTH_COMPONENT24:E===Di?G=n.DEPTH_COMPONENT32F:E===Fo&&(G=n.DEPTH_COMPONENT16),G}function A(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kn&&R.minFilter!==zi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){const E=R.target;E.removeEventListener("dispose",w),P(E),E.isVideoTexture&&d.delete(E)}function C(R){const E=R.target;E.removeEventListener("dispose",C),b(E)}function P(R){const E=i.get(R);if(E.__webglInit===void 0)return;const G=R.source,J=f.get(G);if(J){const ot=J[E.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(R),Object.keys(J).length===0&&f.delete(G)}i.remove(R)}function S(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const G=R.source,J=f.get(G);delete J[E.__cacheKey],o.memory.textures--}function b(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ot=0;ot<E.__webglFramebuffer[J].length;ot++)n.deleteFramebuffer(E.__webglFramebuffer[J][ot]);else n.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)n.deleteFramebuffer(E.__webglFramebuffer[J]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=R.textures;for(let J=0,ot=G.length;J<ot;J++){const Q=i.get(G[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(G[J])}i.remove(R)}let k=0;function B(){k=0}function V(){const R=k;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function Y(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function j(R,E){const G=i.get(R);if(R.isVideoTexture&&vt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(G,R,E);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function W(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){tt(G,R,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function et(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){tt(G,R,E);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function Z(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ft(G,R,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const xt={[Nc]:n.REPEAT,[Ks]:n.CLAMP_TO_EDGE,[Fc]:n.MIRRORED_REPEAT},Lt={[Kn]:n.NEAREST,[gp]:n.NEAREST_MIPMAP_NEAREST,[ia]:n.NEAREST_MIPMAP_LINEAR,[zi]:n.LINEAR,[Sl]:n.LINEAR_MIPMAP_NEAREST,[js]:n.LINEAR_MIPMAP_LINEAR},Ft={[yp]:n.NEVER,[Ap]:n.ALWAYS,[bp]:n.LESS,[Su]:n.LEQUAL,[Sp]:n.EQUAL,[Tp]:n.GEQUAL,[wp]:n.GREATER,[Ep]:n.NOTEQUAL};function oe(R,E){if(E.type===Di&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===zi||E.magFilter===Sl||E.magFilter===ia||E.magFilter===js||E.minFilter===zi||E.minFilter===Sl||E.minFilter===ia||E.minFilter===js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,xt[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,xt[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,xt[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Lt[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Lt[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ft[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kn||E.minFilter!==ia&&E.minFilter!==js||E.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ke(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const J=E.source;let ot=f.get(J);ot===void 0&&(ot={},f.set(J,ot));const Q=Y(E);if(Q!==R.__cacheKey){ot[Q]===void 0&&(ot[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ot[Q].usedTimes++;const Bt=ot[R.__cacheKey];Bt!==void 0&&(ot[R.__cacheKey].usedTimes--,Bt.usedTimes===0&&S(E)),R.__cacheKey=Q,R.__webglTexture=ot[Q].texture}return G}function tt(R,E,G){let J=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=n.TEXTURE_3D);const ot=ke(R,E),Q=E.source;e.bindTexture(J,R.__webglTexture,n.TEXTURE0+G);const Bt=i.get(Q);if(Q.version!==Bt.__version||ot===!0){e.activeTexture(n.TEXTURE0+G);const St=Te.getPrimaries(Te.workingColorSpace),kt=E.colorSpace===Ss?null:Te.getPrimaries(E.colorSpace),ye=E.colorSpace===Ss||St===kt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ht=v(E.image,!1,s.maxTextureSize);ht=Zt(E,ht);const Ut=r.convert(E.format,E.colorSpace),Kt=r.convert(E.type);let Qt=_(E.internalFormat,Ut,Kt,E.colorSpace,E.isVideoTexture);oe(J,E);let Nt;const we=E.mipmaps,pe=E.isVideoTexture!==!0,Ve=Bt.__version===void 0||ot===!0,N=Q.dataReady,wt=A(E,ht);if(E.isDepthTexture)Qt=x(E.format===Jr,E.type),Ve&&(pe?e.texStorage2D(n.TEXTURE_2D,1,Qt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Qt,ht.width,ht.height,0,Ut,Kt,null));else if(E.isDataTexture)if(we.length>0){pe&&Ve&&e.texStorage2D(n.TEXTURE_2D,wt,Qt,we[0].width,we[0].height);for(let K=0,nt=we.length;K<nt;K++)Nt=we[K],pe?N&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Nt.width,Nt.height,Ut,Kt,Nt.data):e.texImage2D(n.TEXTURE_2D,K,Qt,Nt.width,Nt.height,0,Ut,Kt,Nt.data);E.generateMipmaps=!1}else pe?(Ve&&e.texStorage2D(n.TEXTURE_2D,wt,Qt,ht.width,ht.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,Ut,Kt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Qt,ht.width,ht.height,0,Ut,Kt,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pe&&Ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Qt,we[0].width,we[0].height,ht.depth);for(let K=0,nt=we.length;K<nt;K++)if(Nt=we[K],E.format!==_i)if(Ut!==null)if(pe){if(N)if(E.layerUpdates.size>0){const At=gh(Nt.width,Nt.height,E.format,E.type);for(const Et of E.layerUpdates){const ce=Nt.data.subarray(Et*At/Nt.data.BYTES_PER_ELEMENT,(Et+1)*At/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Et,Nt.width,Nt.height,1,Ut,ce)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Nt.width,Nt.height,ht.depth,Ut,Nt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Qt,Nt.width,Nt.height,ht.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Nt.width,Nt.height,ht.depth,Ut,Kt,Nt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,Qt,Nt.width,Nt.height,ht.depth,0,Ut,Kt,Nt.data)}else{pe&&Ve&&e.texStorage2D(n.TEXTURE_2D,wt,Qt,we[0].width,we[0].height);for(let K=0,nt=we.length;K<nt;K++)Nt=we[K],E.format!==_i?Ut!==null?pe?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Nt.width,Nt.height,Ut,Nt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,Qt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?N&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Nt.width,Nt.height,Ut,Kt,Nt.data):e.texImage2D(n.TEXTURE_2D,K,Qt,Nt.width,Nt.height,0,Ut,Kt,Nt.data)}else if(E.isDataArrayTexture)if(pe){if(Ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Qt,ht.width,ht.height,ht.depth),N)if(E.layerUpdates.size>0){const K=gh(ht.width,ht.height,E.format,E.type);for(const nt of E.layerUpdates){const At=ht.data.subarray(nt*K/ht.data.BYTES_PER_ELEMENT,(nt+1)*K/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,ht.width,ht.height,1,Ut,Kt,At)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Ut,Kt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Qt,ht.width,ht.height,ht.depth,0,Ut,Kt,ht.data);else if(E.isData3DTexture)pe?(Ve&&e.texStorage3D(n.TEXTURE_3D,wt,Qt,ht.width,ht.height,ht.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Ut,Kt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Qt,ht.width,ht.height,ht.depth,0,Ut,Kt,ht.data);else if(E.isFramebufferTexture){if(Ve)if(pe)e.texStorage2D(n.TEXTURE_2D,wt,Qt,ht.width,ht.height);else{let K=ht.width,nt=ht.height;for(let At=0;At<wt;At++)e.texImage2D(n.TEXTURE_2D,At,Qt,K,nt,0,Ut,Kt,null),K>>=1,nt>>=1}}else if(we.length>0){if(pe&&Ve){const K=It(we[0]);e.texStorage2D(n.TEXTURE_2D,wt,Qt,K.width,K.height)}for(let K=0,nt=we.length;K<nt;K++)Nt=we[K],pe?N&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Ut,Kt,Nt):e.texImage2D(n.TEXTURE_2D,K,Qt,Ut,Kt,Nt);E.generateMipmaps=!1}else if(pe){if(Ve){const K=It(ht);e.texStorage2D(n.TEXTURE_2D,wt,Qt,K.width,K.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ut,Kt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Qt,Ut,Kt,ht);p(E)&&g(J),Bt.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ft(R,E,G){if(E.image.length!==6)return;const J=ke(R,E),ot=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);const Q=i.get(ot);if(ot.version!==Q.__version||J===!0){e.activeTexture(n.TEXTURE0+G);const Bt=Te.getPrimaries(Te.workingColorSpace),St=E.colorSpace===Ss?null:Te.getPrimaries(E.colorSpace),kt=E.colorSpace===Ss||Bt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const ye=E.isCompressedTexture||E.image[0].isCompressedTexture,ht=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let nt=0;nt<6;nt++)!ye&&!ht?Ut[nt]=v(E.image[nt],!0,s.maxCubemapSize):Ut[nt]=ht?E.image[nt].image:E.image[nt],Ut[nt]=Zt(E,Ut[nt]);const Kt=Ut[0],Qt=r.convert(E.format,E.colorSpace),Nt=r.convert(E.type),we=_(E.internalFormat,Qt,Nt,E.colorSpace),pe=E.isVideoTexture!==!0,Ve=Q.__version===void 0||J===!0,N=ot.dataReady;let wt=A(E,Kt);oe(n.TEXTURE_CUBE_MAP,E);let K;if(ye){pe&&Ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,we,Kt.width,Kt.height);for(let nt=0;nt<6;nt++){K=Ut[nt].mipmaps;for(let At=0;At<K.length;At++){const Et=K[At];E.format!==_i?Qt!==null?pe?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,Et.width,Et.height,Qt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,we,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,Et.width,Et.height,Qt,Nt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,we,Et.width,Et.height,0,Qt,Nt,Et.data)}}}else{if(K=E.mipmaps,pe&&Ve){K.length>0&&wt++;const nt=It(Ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,we,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ht){pe?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ut[nt].width,Ut[nt].height,Qt,Nt,Ut[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,we,Ut[nt].width,Ut[nt].height,0,Qt,Nt,Ut[nt].data);for(let At=0;At<K.length;At++){const ce=K[At].image[nt].image;pe?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,ce.width,ce.height,Qt,Nt,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,we,ce.width,ce.height,0,Qt,Nt,ce.data)}}else{pe?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Qt,Nt,Ut[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,we,Qt,Nt,Ut[nt]);for(let At=0;At<K.length;At++){const Et=K[At];pe?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,Qt,Nt,Et.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,we,Qt,Nt,Et.image[nt])}}}p(E)&&g(n.TEXTURE_CUBE_MAP),Q.__version=ot.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ot(R,E,G,J,ot,Q){const Bt=r.convert(G.format,G.colorSpace),St=r.convert(G.type),kt=_(G.internalFormat,Bt,St,G.colorSpace),ye=i.get(E),ht=i.get(G);if(ht.__renderTarget=E,!ye.__hasExternalTextures){const Ut=Math.max(1,E.width>>Q),Kt=Math.max(1,E.height>>Q);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,Q,kt,Ut,Kt,E.depth,0,Bt,St,null):e.texImage2D(ot,Q,kt,Ut,Kt,0,Bt,St,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Dt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ot,ht.__webglTexture,0,dt(E)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ot,ht.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(R,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer){const J=E.depthTexture,ot=J&&J.isDepthTexture?J.type:null,Q=x(E.stencilBuffer,ot),Bt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=dt(E);Dt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,Q,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Bt,n.RENDERBUFFER,R)}else{const J=E.textures;for(let ot=0;ot<J.length;ot++){const Q=J[ot],Bt=r.convert(Q.format,Q.colorSpace),St=r.convert(Q.type),kt=_(Q.internalFormat,Bt,St,Q.colorSpace),ye=dt(E);G&&Dt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,kt,E.width,E.height):Dt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,kt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,kt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const ot=J.__webglTexture,Q=dt(E);if(E.depthTexture.format===Hr)Dt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(E.depthTexture.format===Jr)Dt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function ee(R){const E=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ot=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ot)};J.addEventListener("dispose",ot),E.__depthDisposeCallback=ot}E.__boundDepthTexture=J}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Xt(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=n.createRenderbuffer(),mt(E.__webglDepthbuffer[J],R,!1);else{const ot=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),mt(E.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(R,E,G){const J=i.get(R);E!==void 0&&Ot(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ee(R)}function Ce(R){const E=R.texture,G=i.get(R),J=i.get(E);R.addEventListener("dispose",C);const ot=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Bt=ot.length>1;if(Bt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=E.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let St=0;St<6;St++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[St]=[];for(let kt=0;kt<E.mipmaps.length;kt++)G.__webglFramebuffer[St][kt]=n.createFramebuffer()}else G.__webglFramebuffer[St]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let St=0;St<E.mipmaps.length;St++)G.__webglFramebuffer[St]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Bt)for(let St=0,kt=ot.length;St<kt;St++){const ye=i.get(ot[St]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Dt(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let St=0;St<ot.length;St++){const kt=ot[St];G.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[St]);const ye=r.convert(kt.format,kt.colorSpace),ht=r.convert(kt.type),Ut=_(kt.internalFormat,ye,ht,kt.colorSpace,R.isXRRenderTarget===!0),Kt=dt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,Ut,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,G.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),oe(n.TEXTURE_CUBE_MAP,E);for(let St=0;St<6;St++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Ot(G.__webglFramebuffer[St][kt],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,kt);else Ot(G.__webglFramebuffer[St],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);p(E)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let St=0,kt=ot.length;St<kt;St++){const ye=ot[St],ht=i.get(ye);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),oe(n.TEXTURE_2D,ye),Ot(G.__webglFramebuffer,R,ye,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),p(ye)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let St=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,J.__webglTexture),oe(St,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Ot(G.__webglFramebuffer[kt],R,E,n.COLOR_ATTACHMENT0,St,kt);else Ot(G.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,St,0);p(E)&&g(St),e.unbindTexture()}R.depthBuffer&&ee(R)}function st(R){const E=R.textures;for(let G=0,J=E.length;G<J;G++){const ot=E[G];if(p(ot)){const Q=M(R),Bt=i.get(ot).__webglTexture;e.bindTexture(Q,Bt),g(Q),e.unbindTexture()}}}const ut=[],D=[];function Wt(R){if(R.samples>0){if(Dt(R)===!1){const E=R.textures,G=R.width,J=R.height;let ot=n.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Bt=i.get(R),St=E.length>1;if(St)for(let kt=0;kt<E.length;kt++)e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let kt=0;kt<E.length;kt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),St){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[kt]);const ye=i.get(E[kt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,G,J,0,0,G,J,ot,n.NEAREST),c===!0&&(ut.length=0,D.length=0,ut.push(n.COLOR_ATTACHMENT0+kt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ut.push(Q),D.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let kt=0;kt<E.length;kt++){e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[kt]);const ye=i.get(E[kt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.TEXTURE_2D,ye,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function dt(R){return Math.min(s.maxSamples,R.samples)}function Dt(R){const E=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(R){const E=o.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function Zt(R,E){const G=R.colorSpace,J=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==io&&G!==Ss&&(Te.getTransfer(G)===Be?(J!==_i||ot!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function It(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=et,this.setTextureCube=Z,this.rebindTextures=jt,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Dt}function Xv(n,t){function e(i,s=Ss){let r;const o=Te.getTransfer(s);if(i===os)return n.UNSIGNED_BYTE;if(i===U0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===N0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pu)return n.BYTE;if(i===mu)return n.SHORT;if(i===Fo)return n.UNSIGNED_SHORT;if(i===D0)return n.INT;if(i===or)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===vu)return n.ALPHA;if(i===xu)return n.RGB;if(i===_i)return n.RGBA;if(i===Mu)return n.LUMINANCE;if(i===_u)return n.LUMINANCE_ALPHA;if(i===Hr)return n.DEPTH_COMPONENT;if(i===Jr)return n.DEPTH_STENCIL;if(i===F0)return n.RED;if(i===O0)return n.RED_INTEGER;if(i===yu)return n.RG;if(i===B0)return n.RG_INTEGER;if(i===H0)return n.RGBA_INTEGER;if(i===Va||i===Ga||i===Wa||i===$a)if(o===Be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oc||i===Bc||i===Hc||i===Vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gc||i===Wc||i===$c)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gc||i===Wc)return o===Be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$c)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xc||i===qc||i===Yc||i===Zc||i===Kc||i===jc||i===Jc||i===Qc||i===t0||i===e0||i===n0||i===i0||i===s0||i===r0)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===t0)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===e0)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===n0)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===i0)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===s0)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===r0)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xa||i===o0||i===a0)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Xa)return o===Be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===o0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===a0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bu||i===l0||i===c0||i===d0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===l0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===c0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===d0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class qv extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class be extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yv={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),g=this._getHandJoint(l,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),u=.02,m=.005;l.inputState.pinching&&f>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new be;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new kn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new sn({vertexShader:Zv,fragmentShader:Kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jv extends so{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,h=null,f=null,u=null,m=null;const v=new jv,p=e.getContextAttributes();let g=null,M=null;const _=[],x=[],A=new ct;let w=null;const C=new Xn;C.viewport=new Je;const P=new Xn;P.viewport=new Je;const S=[C,P],b=new qv;let k=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ft=_[tt];return ft===void 0&&(ft=new Kl,_[tt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(tt){let ft=_[tt];return ft===void 0&&(ft=new Kl,_[tt]=ft),ft.getGripSpace()},this.getHand=function(tt){let ft=_[tt];return ft===void 0&&(ft=new Kl,_[tt]=ft),ft.getHandSpace()};function V(tt){const ft=x.indexOf(tt.inputSource);if(ft===-1)return;const Ot=_[ft];Ot!==void 0&&(Ot.update(tt.inputSource,tt.frame,l||o),Ot.dispatchEvent({type:tt.type,data:tt.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",j);for(let tt=0;tt<_.length;tt++){const ft=x[tt];ft!==null&&(x[tt]=null,_[tt].disconnect(ft))}k=null,B=null,v.reset(),t.setRenderTarget(g),u=null,f=null,h=null,s=null,M=null,ke.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const ft={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new si(u.framebufferWidth,u.framebufferHeight,{format:_i,type:os,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ft=null,Ot=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=p.stencil?Jr:Hr,Ot=p.stencil?jr:or);const Xt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new si(f.textureWidth,f.textureHeight,{format:_i,type:os,depthTexture:new Nu(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(tt){for(let ft=0;ft<tt.removed.length;ft++){const Ot=tt.removed[ft],mt=x.indexOf(Ot);mt>=0&&(x[mt]=null,_[mt].disconnect(Ot))}for(let ft=0;ft<tt.added.length;ft++){const Ot=tt.added[ft];let mt=x.indexOf(Ot);if(mt===-1){for(let ee=0;ee<_.length;ee++)if(ee>=x.length){x.push(Ot),mt=ee;break}else if(x[ee]===null){x[ee]=Ot,mt=ee;break}if(mt===-1)break}const Xt=_[mt];Xt&&Xt.connect(Ot)}}const W=new U,et=new U;function Z(tt,ft,Ot){W.setFromMatrixPosition(ft.matrixWorld),et.setFromMatrixPosition(Ot.matrixWorld);const mt=W.distanceTo(et),Xt=ft.projectionMatrix.elements,ee=Ot.projectionMatrix.elements,jt=Xt[14]/(Xt[10]-1),Ce=Xt[14]/(Xt[10]+1),st=(Xt[9]+1)/Xt[5],ut=(Xt[9]-1)/Xt[5],D=(Xt[8]-1)/Xt[0],Wt=(ee[8]+1)/ee[0],dt=jt*D,Dt=jt*Wt,vt=mt/(-D+Wt),Zt=vt*-D;if(ft.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Zt),tt.translateZ(vt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Xt[10]===-1)tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const It=jt+vt,R=Ce+vt,E=dt-Zt,G=Dt+(mt-Zt),J=st*Ce/R*It,ot=ut*Ce/R*It;tt.projectionMatrix.makePerspective(E,G,J,ot,It,R),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function xt(tt,ft){ft===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ft.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ft=tt.near,Ot=tt.far;v.texture!==null&&(v.depthNear>0&&(ft=v.depthNear),v.depthFar>0&&(Ot=v.depthFar)),b.near=P.near=C.near=ft,b.far=P.far=C.far=Ot,(k!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,B=b.far),C.layers.mask=tt.layers.mask|2,P.layers.mask=tt.layers.mask|4,b.layers.mask=C.layers.mask|P.layers.mask;const mt=tt.parent,Xt=b.cameras;xt(b,mt);for(let ee=0;ee<Xt.length;ee++)xt(Xt[ee],mt);Xt.length===2?Z(b,C,P):b.projectionMatrix.copy(C.projectionMatrix),Lt(tt,b,mt)};function Lt(tt,ft,Ot){Ot===null?tt.matrix.copy(ft.matrixWorld):(tt.matrix.copy(Ot.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ft.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Oo*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(tt){c=tt,f!==null&&(f.fixedFoveation=tt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=tt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Ft=null;function oe(tt,ft){if(d=ft.getViewerPose(l||o),m=ft,d!==null){const Ot=d.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let mt=!1;Ot.length!==b.cameras.length&&(b.cameras.length=0,mt=!0);for(let ee=0;ee<Ot.length;ee++){const jt=Ot[ee];let Ce=null;if(u!==null)Ce=u.getViewport(jt);else{const ut=h.getViewSubImage(f,jt);Ce=ut.viewport,ee===0&&(t.setRenderTargetTextures(M,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(M))}let st=S[ee];st===void 0&&(st=new Xn,st.layers.enable(ee),st.viewport=new Je,S[ee]=st),st.matrix.fromArray(jt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(jt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ee===0&&(b.matrix.copy(st.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),mt===!0&&b.cameras.push(st)}const Xt=s.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")){const ee=h.getDepthInformation(Ot[0]);ee&&ee.isValid&&ee.texture&&v.init(t,ee,s.renderState)}}for(let Ot=0;Ot<_.length;Ot++){const mt=x[Ot],Xt=_[Ot];mt!==null&&Xt!==void 0&&Xt.update(mt,ft,l||o)}Ft&&Ft(tt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),m=null}const ke=new Du;ke.setAnimationLoop(oe),this.setAnimationLoop=function(tt){Ft=tt},this.dispose=function(){}}}const Hs=new ri,Qv=new Ie;function tx(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Lu(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,_,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),d(p,g)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,M,_):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===pn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===pn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=t.get(g),_=M.envMap,x=M.envMapRotation;_&&(p.envMap.value=_,Hs.copy(x),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),p.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(Hs)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,M,_){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=_*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ex(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){const x=_.program;i.uniformBlockBinding(M,x)}function l(M,_){let x=s[M.id];x===void 0&&(m(M),x=d(M),s[M.id]=x,M.addEventListener("dispose",p));const A=_.program;i.updateUBOMapping(M,A);const w=t.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function d(M){const _=h();M.__bindingPointIndex=_;const x=n.createBuffer(),A=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=s[M.id],x=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,C=x.length;w<C;w++){const P=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,b=P.length;S<b;S++){const k=P[S];if(u(k,w,S,A)===!0){const B=k.__offset,V=Array.isArray(k.value)?k.value:[k.value];let Y=0;for(let j=0;j<V.length;j++){const W=V[j],et=v(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,B+Y,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,Y),Y+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(M,_,x,A){const w=M.value,C=_+"_"+x;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const P=A[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(M){const _=M.uniforms;let x=0;const A=16;for(let C=0,P=_.length;C<P;C++){const S=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,k=S.length;b<k;b++){const B=S[b],V=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,j=V.length;Y<j;Y++){const W=V[Y],et=v(W),Z=x%A,xt=Z%et.boundary,Lt=Z+xt;x+=xt,Lt!==0&&A-Lt<et.storage&&(x+=A-Lt),B.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=et.storage}}}const w=x%A;return w>0&&(x+=A-w),M.__size=x,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){const _=M.target;_.removeEventListener("dispose",p);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}class Vu{constructor(t={}){const{canvas:e=$p(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const m=new Uint32Array(4),v=new Int32Array(4);let p=null,g=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Ts,this.toneMappingExposure=1;const x=this;let A=!1,w=0,C=0,P=null,S=-1,b=null;const k=new Je,B=new Je;let V=null;const Y=new qt(0);let j=0,W=e.width,et=e.height,Z=1,xt=null,Lt=null;const Ft=new Je(0,0,W,et),oe=new Je(0,0,W,et);let ke=!1;const tt=new zu;let ft=!1,Ot=!1;const mt=new Ie,Xt=new Ie,ee=new U,jt=new Je,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function ut(){return P===null?Z:1}let D=i;function Wt(T,F){return e.getContext(T,F)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${z0}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Et,!1),D===null){const F="webgl2";if(D=Wt(F,T),D===null)throw Wt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let dt,Dt,vt,Zt,It,R,E,G,J,ot,Q,Bt,St,kt,ye,ht,Ut,Kt,Qt,Nt,we,pe,Ve,N;function wt(){dt=new ag(D),dt.init(),pe=new Xv(D,dt),Dt=new eg(D,dt,t,pe),vt=new Gv(D,dt),Dt.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),Zt=new dg(D),It=new Cv,R=new $v(D,dt,vt,It,Dt,pe,Zt),E=new ig(x),G=new og(x),J=new v1(D),Ve=new Q2(D,J),ot=new lg(D,J,Zt,Ve),Q=new ug(D,ot,J,Zt),Qt=new hg(D,Dt,R),ht=new ng(It),Bt=new Av(x,E,G,dt,Dt,Ve,ht),St=new tx(x,It),kt=new Pv,ye=new Uv(dt),Kt=new J2(x,E,G,vt,Q,u,c),Ut=new Hv(x,Q,Dt),N=new ex(D,Zt,Dt,vt),Nt=new tg(D,dt,Zt),we=new cg(D,dt,Zt),Zt.programs=Bt.programs,x.capabilities=Dt,x.extensions=dt,x.properties=It,x.renderLists=kt,x.shadowMap=Ut,x.state=vt,x.info=Zt}wt();const K=new Jv(x,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(W,et,!1))},this.getSize=function(T){return T.set(W,et)},this.setSize=function(T,F,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,et=F,e.width=Math.floor(T*Z),e.height=Math.floor(F*Z),$===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(W*Z,et*Z).floor()},this.setDrawingBufferSize=function(T,F,$){W=T,et=F,Z=$,e.width=Math.floor(T*$),e.height=Math.floor(F*$),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(Ft)},this.setViewport=function(T,F,$,X){T.isVector4?Ft.set(T.x,T.y,T.z,T.w):Ft.set(T,F,$,X),vt.viewport(k.copy(Ft).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,F,$,X){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,F,$,X),vt.scissor(B.copy(oe).multiplyScalar(Z).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(T){vt.setScissorTest(ke=T)},this.setOpaqueSort=function(T){xt=T},this.setTransparentSort=function(T){Lt=T},this.getClearColor=function(T){return T.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(T=!0,F=!0,$=!0){let X=0;if(T){let O=!1;if(P!==null){const pt=P.texture.format;O=pt===H0||pt===B0||pt===O0}if(O){const pt=P.texture.type,Tt=pt===os||pt===or||pt===Fo||pt===jr||pt===U0||pt===N0,Ht=Kt.getClearColor(),Vt=Kt.getClearAlpha(),ne=Ht.r,de=Ht.g,Gt=Ht.b;Tt?(m[0]=ne,m[1]=de,m[2]=Gt,m[3]=Vt,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=ne,v[1]=de,v[2]=Gt,v[3]=Vt,D.clearBufferiv(D.COLOR,0,v))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT),$&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),kt.dispose(),ye.dispose(),It.dispose(),E.dispose(),G.dispose(),Q.dispose(),Ve.dispose(),N.dispose(),Bt.dispose(),K.dispose(),K.removeEventListener("sessionstart",hd),K.removeEventListener("sessionend",ud),Ds.stop()};function nt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Zt.autoReset,F=Ut.enabled,$=Ut.autoUpdate,X=Ut.needsUpdate,O=Ut.type;wt(),Zt.autoReset=T,Ut.enabled=F,Ut.autoUpdate=$,Ut.needsUpdate=X,Ut.type=O}function Et(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const F=T.target;F.removeEventListener("dispose",ce),je(F)}function je(T){wn(T),It.remove(T)}function wn(T){const F=It.get(T).programs;F!==void 0&&(F.forEach(function($){Bt.releaseProgram($)}),T.isShaderMaterial&&Bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,$,X,O,pt){F===null&&(F=Ce);const Tt=O.isMesh&&O.matrixWorld.determinant()<0,Ht=Hf(T,F,$,X,O);vt.setMaterial(X,Tt);let Vt=$.index,ne=1;if(X.wireframe===!0){if(Vt=ot.getWireframeAttribute($),Vt===void 0)return;ne=2}const de=$.drawRange,Gt=$.attributes.position;let Re=de.start*ne,Ge=(de.start+de.count)*ne;pt!==null&&(Re=Math.max(Re,pt.start*ne),Ge=Math.min(Ge,(pt.start+pt.count)*ne)),Vt!==null?(Re=Math.max(Re,0),Ge=Math.min(Ge,Vt.count)):Gt!=null&&(Re=Math.max(Re,0),Ge=Math.min(Ge,Gt.count));const We=Ge-Re;if(We<0||We===1/0)return;Ve.setup(O,X,Ht,$,Vt);let Dn,ze=Nt;if(Vt!==null&&(Dn=J.get(Vt),ze=we,ze.setIndex(Dn)),O.isMesh)X.wireframe===!0?(vt.setLineWidth(X.wireframeLinewidth*ut()),ze.setMode(D.LINES)):ze.setMode(D.TRIANGLES);else if(O.isLine){let $t=X.linewidth;$t===void 0&&($t=1),vt.setLineWidth($t*ut()),O.isLineSegments?ze.setMode(D.LINES):O.isLineLoop?ze.setMode(D.LINE_LOOP):ze.setMode(D.LINE_STRIP)}else O.isPoints?ze.setMode(D.POINTS):O.isSprite&&ze.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const $t=O._multiDrawStarts,Vi=O._multiDrawCounts,De=O._multiDrawCount,li=Vt?J.get(Vt).bytesPerElement:1,fr=It.get(X).currentProgram.getUniforms();for(let Vn=0;Vn<De;Vn++)fr.setValue(D,"_gl_DrawID",Vn),ze.render($t[Vn]/li,Vi[Vn])}else if(O.isInstancedMesh)ze.renderInstances(Re,We,O.count);else if($.isInstancedBufferGeometry){const $t=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Vi=Math.min($.instanceCount,$t);ze.renderInstances(Re,We,Vi)}else ze.render(Re,We)};function Fe(T,F,$){T.transparent===!0&&T.side===Fn&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,na(T,F,$),T.side=rs,T.needsUpdate=!0,na(T,F,$),T.side=Fn):na(T,F,$)}this.compile=function(T,F,$=null){$===null&&($=T),g=ye.get($),g.init(F),_.push(g),$.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),T!==$&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const X=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const pt=O.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){const Ht=pt[Tt];Fe(Ht,$,O),X.add(Ht)}else Fe(pt,$,O),X.add(pt)}),_.pop(),g=null,X},this.compileAsync=function(T,F,$=null){const X=this.compile(T,F,$);return new Promise(O=>{function pt(){if(X.forEach(function(Tt){It.get(Tt).currentProgram.isReady()&&X.delete(Tt)}),X.size===0){O(T);return}setTimeout(pt,10)}dt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ai=null;function Hi(T){ai&&ai(T)}function hd(){Ds.stop()}function ud(){Ds.start()}const Ds=new Du;Ds.setAnimationLoop(Hi),typeof self<"u"&&Ds.setContext(self),this.setAnimationLoop=function(T){ai=T,K.setAnimationLoop(T),T===null?Ds.stop():Ds.start()},K.addEventListener("sessionstart",hd),K.addEventListener("sessionend",ud),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,F,P),g=ye.get(T,_.length),g.init(F),_.push(g),Xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),tt.setFromProjectionMatrix(Xt),Ot=this.localClippingEnabled,ft=ht.init(this.clippingPlanes,Ot),p=kt.get(T,M.length),p.init(),M.push(p),K.enabled===!0&&K.isPresenting===!0){const pt=x.xr.getDepthSensingMesh();pt!==null&&bl(pt,F,-1/0,x.sortObjects)}bl(T,F,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(xt,Lt),st=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,st&&Kt.addToRenderList(p,T),this.info.render.frame++,ft===!0&&ht.beginShadows();const $=g.state.shadowsArray;Ut.render($,T,F),ft===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,O=p.transmissive;if(g.setupLights(),F.isArrayCamera){const pt=F.cameras;if(O.length>0)for(let Tt=0,Ht=pt.length;Tt<Ht;Tt++){const Vt=pt[Tt];pd(X,O,T,Vt)}st&&Kt.render(T);for(let Tt=0,Ht=pt.length;Tt<Ht;Tt++){const Vt=pt[Tt];fd(p,T,Vt,Vt.viewport)}}else O.length>0&&pd(X,O,T,F),st&&Kt.render(T),fd(p,T,F);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,F),Ve.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(g=_[_.length-1],ft===!0&&ht.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function bl(T,F,$,X){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||tt.intersectsSprite(T)){X&&jt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Xt);const Tt=Q.update(T),Ht=T.material;Ht.visible&&p.push(T,Tt,Ht,$,jt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||tt.intersectsObject(T))){const Tt=Q.update(T),Ht=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),jt.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),jt.copy(Tt.boundingSphere.center)),jt.applyMatrix4(T.matrixWorld).applyMatrix4(Xt)),Array.isArray(Ht)){const Vt=Tt.groups;for(let ne=0,de=Vt.length;ne<de;ne++){const Gt=Vt[ne],Re=Ht[Gt.materialIndex];Re&&Re.visible&&p.push(T,Tt,Re,$,jt.z,Gt)}}else Ht.visible&&p.push(T,Tt,Ht,$,jt.z,null)}}const pt=T.children;for(let Tt=0,Ht=pt.length;Tt<Ht;Tt++)bl(pt[Tt],F,$,X)}function fd(T,F,$,X){const O=T.opaque,pt=T.transmissive,Tt=T.transparent;g.setupLightsView($),ft===!0&&ht.setGlobalState(x.clippingPlanes,$),X&&vt.viewport(k.copy(X)),O.length>0&&ea(O,F,$),pt.length>0&&ea(pt,F,$),Tt.length>0&&ea(Tt,F,$),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function pd(T,F,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new si(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Ui:os,minFilter:js,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const pt=g.state.transmissionRenderTarget[X.id],Tt=X.viewport||k;pt.setSize(Tt.z,Tt.w);const Ht=x.getRenderTarget();x.setRenderTarget(pt),x.getClearColor(Y),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),st&&Kt.render($);const Vt=x.toneMapping;x.toneMapping=Ts;const ne=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),ft===!0&&ht.setGlobalState(x.clippingPlanes,X),ea(T,$,X),R.updateMultisampleRenderTarget(pt),R.updateRenderTargetMipmap(pt),dt.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Gt=0,Re=F.length;Gt<Re;Gt++){const Ge=F[Gt],We=Ge.object,Dn=Ge.geometry,ze=Ge.material,$t=Ge.group;if(ze.side===Fn&&We.layers.test(X.layers)){const Vi=ze.side;ze.side=pn,ze.needsUpdate=!0,md(We,$,X,Dn,ze,$t),ze.side=Vi,ze.needsUpdate=!0,de=!0}}de===!0&&(R.updateMultisampleRenderTarget(pt),R.updateRenderTargetMipmap(pt))}x.setRenderTarget(Ht),x.setClearColor(Y,j),ne!==void 0&&(X.viewport=ne),x.toneMapping=Vt}function ea(T,F,$){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,pt=T.length;O<pt;O++){const Tt=T[O],Ht=Tt.object,Vt=Tt.geometry,ne=X===null?Tt.material:X,de=Tt.group;Ht.layers.test($.layers)&&md(Ht,F,$,Vt,ne,de)}}function md(T,F,$,X,O,pt){T.onBeforeRender(x,F,$,X,O,pt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(x,F,$,X,T,pt),O.transparent===!0&&O.side===Fn&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,x.renderBufferDirect($,F,X,O,T,pt),O.side=rs,O.needsUpdate=!0,x.renderBufferDirect($,F,X,O,T,pt),O.side=Fn):x.renderBufferDirect($,F,X,O,T,pt),T.onAfterRender(x,F,$,X,O,pt)}function na(T,F,$){F.isScene!==!0&&(F=Ce);const X=It.get(T),O=g.state.lights,pt=g.state.shadowsArray,Tt=O.state.version,Ht=Bt.getParameters(T,O.state,pt,F,$),Vt=Bt.getProgramCacheKey(Ht);let ne=X.programs;X.environment=T.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,ne===void 0&&(T.addEventListener("dispose",ce),ne=new Map,X.programs=ne);let de=ne.get(Vt);if(de!==void 0){if(X.currentProgram===de&&X.lightsStateVersion===Tt)return vd(T,Ht),de}else Ht.uniforms=Bt.getUniforms(T),T.onBeforeCompile(Ht,x),de=Bt.acquireProgram(Ht,Vt),ne.set(Vt,de),X.uniforms=Ht.uniforms;const Gt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=ht.uniform),vd(T,Ht),X.needsLights=Gf(T),X.lightsStateVersion=Tt,X.needsLights&&(Gt.ambientLightColor.value=O.state.ambient,Gt.lightProbe.value=O.state.probe,Gt.directionalLights.value=O.state.directional,Gt.directionalLightShadows.value=O.state.directionalShadow,Gt.spotLights.value=O.state.spot,Gt.spotLightShadows.value=O.state.spotShadow,Gt.rectAreaLights.value=O.state.rectArea,Gt.ltc_1.value=O.state.rectAreaLTC1,Gt.ltc_2.value=O.state.rectAreaLTC2,Gt.pointLights.value=O.state.point,Gt.pointLightShadows.value=O.state.pointShadow,Gt.hemisphereLights.value=O.state.hemi,Gt.directionalShadowMap.value=O.state.directionalShadowMap,Gt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Gt.spotShadowMap.value=O.state.spotShadowMap,Gt.spotLightMatrix.value=O.state.spotLightMatrix,Gt.spotLightMap.value=O.state.spotLightMap,Gt.pointShadowMap.value=O.state.pointShadowMap,Gt.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=de,X.uniformsList=null,de}function gd(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=qa.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function vd(T,F){const $=It.get(T);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Hf(T,F,$,X,O){F.isScene!==!0&&(F=Ce),R.resetTextureUnits();const pt=F.fog,Tt=X.isMeshStandardMaterial?F.environment:null,Ht=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:io,Vt=(X.isMeshStandardMaterial?G:E).get(X.envMap||Tt),ne=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,de=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Gt=!!$.morphAttributes.position,Re=!!$.morphAttributes.normal,Ge=!!$.morphAttributes.color;let We=Ts;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(We=x.toneMapping);const Dn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ze=Dn!==void 0?Dn.length:0,$t=It.get(X),Vi=g.state.lights;if(ft===!0&&(Ot===!0||T!==b)){const Jn=T===b&&X.id===S;ht.setState(X,T,Jn)}let De=!1;X.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Vi.state.version||$t.outputColorSpace!==Ht||O.isBatchedMesh&&$t.batching===!1||!O.isBatchedMesh&&$t.batching===!0||O.isBatchedMesh&&$t.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&$t.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&$t.instancing===!1||!O.isInstancedMesh&&$t.instancing===!0||O.isSkinnedMesh&&$t.skinning===!1||!O.isSkinnedMesh&&$t.skinning===!0||O.isInstancedMesh&&$t.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&$t.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&$t.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&$t.instancingMorph===!1&&O.morphTexture!==null||$t.envMap!==Vt||X.fog===!0&&$t.fog!==pt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==ht.numPlanes||$t.numIntersection!==ht.numIntersection)||$t.vertexAlphas!==ne||$t.vertexTangents!==de||$t.morphTargets!==Gt||$t.morphNormals!==Re||$t.morphColors!==Ge||$t.toneMapping!==We||$t.morphTargetsCount!==ze)&&(De=!0):(De=!0,$t.__version=X.version);let li=$t.currentProgram;De===!0&&(li=na(X,F,O));let fr=!1,Vn=!1,ho=!1;const $e=li.getUniforms(),Ei=$t.uniforms;if(vt.useProgram(li.program)&&(fr=!0,Vn=!0,ho=!0),X.id!==S&&(S=X.id,Vn=!0),fr||b!==T){vt.buffers.depth.getReversed()?(mt.copy(T.projectionMatrix),qp(mt),Yp(mt),$e.setValue(D,"projectionMatrix",mt)):$e.setValue(D,"projectionMatrix",T.projectionMatrix),$e.setValue(D,"viewMatrix",T.matrixWorldInverse);const us=$e.map.cameraPosition;us!==void 0&&us.setValue(D,ee.setFromMatrixPosition(T.matrixWorld)),Dt.logarithmicDepthBuffer&&$e.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&$e.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Vn=!0,ho=!0)}if(O.isSkinnedMesh){$e.setOptional(D,O,"bindMatrix"),$e.setOptional(D,O,"bindMatrixInverse");const Jn=O.skeleton;Jn&&(Jn.boneTexture===null&&Jn.computeBoneTexture(),$e.setValue(D,"boneTexture",Jn.boneTexture,R))}O.isBatchedMesh&&($e.setOptional(D,O,"batchingTexture"),$e.setValue(D,"batchingTexture",O._matricesTexture,R),$e.setOptional(D,O,"batchingIdTexture"),$e.setValue(D,"batchingIdTexture",O._indirectTexture,R),$e.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&$e.setValue(D,"batchingColorTexture",O._colorsTexture,R));const uo=$.morphAttributes;if((uo.position!==void 0||uo.normal!==void 0||uo.color!==void 0)&&Qt.update(O,$,li),(Vn||$t.receiveShadow!==O.receiveShadow)&&($t.receiveShadow=O.receiveShadow,$e.setValue(D,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ei.envMap.value=Vt,Ei.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Ei.envMapIntensity.value=F.environmentIntensity),Vn&&($e.setValue(D,"toneMappingExposure",x.toneMappingExposure),$t.needsLights&&Vf(Ei,ho),pt&&X.fog===!0&&St.refreshFogUniforms(Ei,pt),St.refreshMaterialUniforms(Ei,X,Z,et,g.state.transmissionRenderTarget[T.id]),qa.upload(D,gd($t),Ei,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qa.upload(D,gd($t),Ei,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&$e.setValue(D,"center",O.center),$e.setValue(D,"modelViewMatrix",O.modelViewMatrix),$e.setValue(D,"normalMatrix",O.normalMatrix),$e.setValue(D,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Jn=X.uniformsGroups;for(let us=0,fs=Jn.length;us<fs;us++){const xd=Jn[us];N.update(xd,li),N.bind(xd,li)}}return li}function Vf(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Gf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,F,$){It.get(T.texture).__webglTexture=F,It.get(T.depthTexture).__webglTexture=$;const X=It.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=$===void 0,X.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const $=It.get(T);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,$=0){P=T,w=F,C=$;let X=!0,O=null,pt=!1,Tt=!1;if(T){const Vt=It.get(T);if(Vt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Vt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Vt.__hasExternalTextures)R.rebindTextures(T,It.get(T.texture).__webglTexture,It.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Gt=T.depthTexture;if(Vt.__boundDepthTexture!==Gt){if(Gt!==null&&It.has(Gt)&&(T.width!==Gt.image.width||T.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const ne=T.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Tt=!0);const de=It.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(de[F])?O=de[F][$]:O=de[F],pt=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?O=It.get(T).__webglMultisampledFramebuffer:Array.isArray(de)?O=de[$]:O=de,k.copy(T.viewport),B.copy(T.scissor),V=T.scissorTest}else k.copy(Ft).multiplyScalar(Z).floor(),B.copy(oe).multiplyScalar(Z).floor(),V=ke;if(vt.bindFramebuffer(D.FRAMEBUFFER,O)&&X&&vt.drawBuffers(T,O),vt.viewport(k),vt.scissor(B),vt.setScissorTest(V),pt){const Vt=It.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Vt.__webglTexture,$)}else if(Tt){const Vt=It.get(T.texture),ne=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vt.__webglTexture,$||0,ne)}S=-1},this.readRenderTargetPixels=function(T,F,$,X,O,pt,Tt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ht=Ht[Tt]),Ht){vt.bindFramebuffer(D.FRAMEBUFFER,Ht);try{const Vt=T.texture,ne=Vt.format,de=Vt.type;if(!Dt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-X&&$>=0&&$<=T.height-O&&D.readPixels(F,$,X,O,pe.convert(ne),pe.convert(de),pt)}finally{const Vt=P!==null?It.get(P).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(T,F,$,X,O,pt,Tt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ht=Ht[Tt]),Ht){const Vt=T.texture,ne=Vt.format,de=Vt.type;if(!Dt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-X&&$>=0&&$<=T.height-O){vt.bindFramebuffer(D.FRAMEBUFFER,Ht);const Gt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Gt),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),D.readPixels(F,$,X,O,pe.convert(ne),pe.convert(de),0);const Re=P!==null?It.get(P).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,Re);const Ge=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Xp(D,Ge,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Gt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(Gt),D.deleteSync(Ge),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,$=0){T.isTexture!==!0&&(wo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-$),O=Math.floor(T.image.width*X),pt=Math.floor(T.image.height*X),Tt=F!==null?F.x:0,Ht=F!==null?F.y:0;R.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Tt,Ht,O,pt),vt.unbindTexture()},this.copyTextureToTexture=function(T,F,$=null,X=null,O=0){T.isTexture!==!0&&(wo("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,$=null);let pt,Tt,Ht,Vt,ne,de,Gt,Re,Ge;const We=T.isCompressedTexture?T.mipmaps[O]:T.image;$!==null?(pt=$.max.x-$.min.x,Tt=$.max.y-$.min.y,Ht=$.isBox3?$.max.z-$.min.z:1,Vt=$.min.x,ne=$.min.y,de=$.isBox3?$.min.z:0):(pt=We.width,Tt=We.height,Ht=We.depth||1,Vt=0,ne=0,de=0),X!==null?(Gt=X.x,Re=X.y,Ge=X.z):(Gt=0,Re=0,Ge=0);const Dn=pe.convert(F.format),ze=pe.convert(F.type);let $t;F.isData3DTexture?(R.setTexture3D(F,0),$t=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),$t=D.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),$t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Vi=D.getParameter(D.UNPACK_ROW_LENGTH),De=D.getParameter(D.UNPACK_IMAGE_HEIGHT),li=D.getParameter(D.UNPACK_SKIP_PIXELS),fr=D.getParameter(D.UNPACK_SKIP_ROWS),Vn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,We.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,We.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,de);const ho=T.isDataArrayTexture||T.isData3DTexture,$e=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Ei=It.get(T),uo=It.get(F),Jn=It.get(Ei.__renderTarget),us=It.get(uo.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,Jn.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,us.__webglFramebuffer);for(let fs=0;fs<Ht;fs++)ho&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.get(T).__webglTexture,O,de+fs),T.isDepthTexture?($e&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.get(F).__webglTexture,O,Ge+fs),D.blitFramebuffer(Vt,ne,pt,Tt,Gt,Re,pt,Tt,D.DEPTH_BUFFER_BIT,D.NEAREST)):$e?D.copyTexSubImage3D($t,O,Gt,Re,Ge+fs,Vt,ne,pt,Tt):D.copyTexSubImage2D($t,O,Gt,Re,Ge+fs,Vt,ne,pt,Tt);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $e?T.isDataTexture||T.isData3DTexture?D.texSubImage3D($t,O,Gt,Re,Ge,pt,Tt,Ht,Dn,ze,We.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D($t,O,Gt,Re,Ge,pt,Tt,Ht,Dn,We.data):D.texSubImage3D($t,O,Gt,Re,Ge,pt,Tt,Ht,Dn,ze,We):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Gt,Re,pt,Tt,Dn,ze,We.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Gt,Re,We.width,We.height,Dn,We.data):D.texSubImage2D(D.TEXTURE_2D,O,Gt,Re,pt,Tt,Dn,ze,We);D.pixelStorei(D.UNPACK_ROW_LENGTH,Vi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,De),D.pixelStorei(D.UNPACK_SKIP_PIXELS,li),D.pixelStorei(D.UNPACK_SKIP_ROWS,fr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vn),O===0&&F.generateMipmaps&&D.generateMipmap($t),vt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,$=null,X=null,O=0){return T.isTexture!==!0&&(wo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,X=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0),wo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,$,X,O)},this.initRenderTarget=function(T){It.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),vt.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,vt.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}class Gu extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nx extends kn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Kn,d=Kn,h,f){super(null,o,a,c,l,d,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class u0 extends Bn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cr=new Ie,vh=new Ie,wa=[],xh=new ks,ix=new Ie,vo=new ue,xo=new qo;class f0 extends ue{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new u0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ix)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ks),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cr),xh.copy(t.boundingBox).applyMatrix4(Cr),this.boundingBox.union(xh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cr),xo.copy(t.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(xo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(i),t.ray.intersectsSphere(xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cr),vh.multiplyMatrices(i,Cr),vo.matrixWorld=vh,vo.raycast(t,wa);for(let o=0,a=wa.length;o<a;o++){const c=wa[o];c.instanceId=r,c.object=this,e.push(c)}wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new u0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new nx(new Float32Array(s*this.count),s,this.count,F0,Di));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const d=i[s],f=i[s+1]-d,u=(o-d)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ct:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,s=[],r=[],o=[],a=new U,c=new Ie;for(let u=0;u<=t;u++){const m=u/t;s[u]=this.getTangentAt(m,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=l&&(l=d,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(fn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,m))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(fn(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],u*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class X0 extends Bi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ct){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*d-u*h+this.aX,l=f*h+u*d+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sx extends X0{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function q0(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,h){let f=(o-r)/l-(a-r)/(l+d)+(a-o)/d,u=(a-o)/d-(c-o)/(d+h)+(c-a)/h;f*=d,u*=d,s(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ea=new U,jl=new q0,Jl=new q0,Ql=new q0;class rx extends Bi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=s[(a-1)%r]:(Ea.subVectors(s[0],s[1]).add(s[0]),l=Ea);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),u),v=Math.pow(h.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(d),u);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),jl.initNonuniformCatmullRom(l.x,h.x,f.x,d.x,m,v,p),Jl.initNonuniformCatmullRom(l.y,h.y,f.y,d.y,m,v,p),Ql.initNonuniformCatmullRom(l.z,h.z,f.z,d.z,m,v,p)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(l.x,h.x,f.x,d.x,this.tension),Jl.initCatmullRom(l.y,h.y,f.y,d.y,this.tension),Ql.initCatmullRom(l.z,h.z,f.z,d.z,this.tension));return i.set(jl.calc(c),Jl.calc(c),Ql.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function ox(n,t){const e=1-n;return e*e*t}function ax(n,t){return 2*(1-n)*n*t}function lx(n,t){return n*n*t}function Io(n,t,e,i){return ox(n,t)+ax(n,e)+lx(n,i)}function cx(n,t){const e=1-n;return e*e*e*t}function dx(n,t){const e=1-n;return 3*e*e*n*t}function hx(n,t){return 3*(1-n)*n*n*t}function ux(n,t){return n*n*n*t}function ko(n,t,e,i,s){return cx(n,t)+dx(n,e)+hx(n,i)+ux(n,s)}class Wu extends Bi{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ko(t,s.x,r.x,o.x,a.x),ko(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fx extends Bi{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ko(t,s.x,r.x,o.x,a.x),ko(t,s.y,r.y,o.y,a.y),ko(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $u extends Bi{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class px extends Bi{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends Bi{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Io(t,s.x,r.x,o.x),Io(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mx extends Bi{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Io(t,s.x,r.x,o.x),Io(t,s.y,r.y,o.y),Io(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qu extends Bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Mh(a,c.x,l.x,d.x,h.x),Mh(a,c.y,l.y,d.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var p0=Object.freeze({__proto__:null,ArcCurve:sx,CatmullRomCurve3:rx,CubicBezierCurve:Wu,CubicBezierCurve3:fx,EllipseCurve:X0,LineCurve:$u,LineCurve3:px,QuadraticBezierCurve:Xu,QuadraticBezierCurve3:mx,SplineCurve:qu});class gx extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new p0[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const d=c[l];i&&i.equals(d)||(e.push(d),i=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new p0[s.type]().fromJSON(s))}return this}}class _h extends gx{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new $u(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Xu(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Wu(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new qu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+l,e+d,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new X0(t,e,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Y0 extends on{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=fn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],d=1/e,h=new U,f=new ct,u=new U,m=new U,v=new U;let p=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,u.x=g*1,u.y=-p,u.z=g*0,v.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,u.x=g*1,u.y=-p,u.z=g*0,m.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),c.push(u.x,u.y,u.z),v.copy(m)}for(let M=0;M<=e;M++){const _=i+M*d*s,x=Math.sin(_),A=Math.cos(_);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*x,h.y=t[w].y,h.z=t[w].x*A,o.push(h.x,h.y,h.z),f.x=M/e,f.y=w/(t.length-1),a.push(f.x,f.y);const C=c[3*w+0]*x,P=c[3*w+1],S=c[3*w+0]*A;l.push(C,P,S)}}for(let M=0;M<e;M++)for(let _=0;_<t.length-1;_++){const x=_+M*t.length,A=x,w=x+t.length,C=x+t.length+1,P=x+1;r.push(A,w,P),r.push(C,P,w)}this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("uv",new Se(a,2)),this.setAttribute("normal",new Se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Y0(t.points,t.segments,t.phiStart,t.phiLength)}}class yi extends on{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new U,d=new ct;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const u=i+h/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[f]/t+1)/2,d.y=(o[f+1]/t+1)/2,c.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(a,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yo extends on{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],f=[],u=[];let m=0;const v=[],p=i/2;let g=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new Se(h,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(u,2));function M(){const x=new U,A=new U;let w=0;const C=(e-t)/i;for(let P=0;P<=r;P++){const S=[],b=P/r,k=b*(e-t)+t;for(let B=0;B<=s;B++){const V=B/s,Y=V*c+a,j=Math.sin(Y),W=Math.cos(Y);A.x=k*j,A.y=-b*i+p,A.z=k*W,h.push(A.x,A.y,A.z),x.set(j,C,W).normalize(),f.push(x.x,x.y,x.z),u.push(V,1-b),S.push(m++)}v.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const b=v[S][P],k=v[S+1][P],B=v[S+1][P+1],V=v[S][P+1];(t>0||S!==0)&&(d.push(b,k,V),w+=3),(e>0||S!==r-1)&&(d.push(k,B,V),w+=3)}l.addGroup(g,w,0),g+=w}function _(x){const A=m,w=new ct,C=new U;let P=0;const S=x===!0?t:e,b=x===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,p*b,0),f.push(0,b,0),u.push(.5,.5),m++;const k=m;for(let B=0;B<=s;B++){const Y=B/s*c+a,j=Math.cos(Y),W=Math.sin(Y);C.x=S*W,C.y=p*b,C.z=S*j,h.push(C.x,C.y,C.z),f.push(0,b,0),w.x=j*.5+.5,w.y=W*.5*b+.5,u.push(w.x,w.y),m++}for(let B=0;B<s;B++){const V=A+B,Y=k+B;x===!0?d.push(Y,Y+1,V):d.push(Y+1,Y,V),P+=3}l.addGroup(g,P,x===!0?1:2),g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pl extends Yo{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new pl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ml extends on{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),d(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const _=new U,x=new U,A=new U;for(let w=0;w<e.length;w+=3)u(e[w+0],_),u(e[w+1],x),u(e[w+2],A),c(_,x,A,M)}function c(M,_,x,A){const w=A+1,C=[];for(let P=0;P<=w;P++){C[P]=[];const S=M.clone().lerp(x,P/w),b=_.clone().lerp(x,P/w),k=w-P;for(let B=0;B<=k;B++)B===0&&P===w?C[P][B]=S:C[P][B]=S.clone().lerp(b,B/k)}for(let P=0;P<w;P++)for(let S=0;S<2*(w-P)-1;S++){const b=Math.floor(S/2);S%2===0?(f(C[P][b+1]),f(C[P+1][b]),f(C[P][b])):(f(C[P][b+1]),f(C[P+1][b+1]),f(C[P+1][b]))}}function l(M){const _=new U;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(M),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function d(){const M=new U;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const x=p(M)/2/Math.PI+.5,A=g(M)/Math.PI+.5;o.push(x,1-A)}m(),h()}function h(){for(let M=0;M<o.length;M+=6){const _=o[M+0],x=o[M+2],A=o[M+4],w=Math.max(_,x,A),C=Math.min(_,x,A);w>.9&&C<.1&&(_<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,_){const x=M*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function m(){const M=new U,_=new U,x=new U,A=new U,w=new ct,C=new ct,P=new ct;for(let S=0,b=0;S<r.length;S+=9,b+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),w.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),A.copy(M).add(_).add(x).divideScalar(3);const k=p(A);v(w,b+0,M,k),v(C,b+2,_,k),v(P,b+4,x,k)}}function v(M,_,x,A){A<0&&M.x===1&&(o[_]=M.x-1),x.x===0&&x.z===0&&(o[_]=A/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.vertices,t.indices,t.radius,t.details)}}class Zo extends _h{constructor(t){super(t),this.uuid=hr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new _h().fromJSON(s))}return this}}const vx={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Yu(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,d,h,f,u;if(i&&(r=bx(n,t,r,e)),n.length>80*e){a=l=n[0],c=d=n[1];for(let m=e;m<s;m+=e)h=n[m],f=n[m+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>d&&(d=f);u=Math.max(l-a,d-c),u=u!==0?32767/u:0}return Ho(r,o,e,a,c,u,0),o}};function Yu(n,t,e,i,s){let r,o;if(s===kx(n,t,e,i)>0)for(r=t;r<e;r+=i)o=yh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=yh(r,n[r],n[r+1],o);return o&&gl(o,o.next)&&(Go(o),o=o.next),o}function ar(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(gl(e,e.next)||Ke(e.prev,e,e.next)===0)){if(Go(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ho(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Ax(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Mx(n,i,s,r):xx(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Go(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=_x(ar(n),t,e),Ho(n,t,e,i,s,r,2)):o===2&&yx(n,t,e,i,s,r):Ho(ar(n),t,e,i,s,r,1);break}}}function xx(n){const t=n.prev,e=n,i=n.next;if(Ke(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,d=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,u=a>c?a>l?a:l:c>l?c:l;let m=i.next;for(;m!==t;){if(m.x>=d&&m.x<=f&&m.y>=h&&m.y<=u&&Ur(s,a,r,c,o,l,m.x,m.y)&&Ke(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Mx(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Ke(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,d=s.y,h=r.y,f=o.y,u=a<c?a<l?a:l:c<l?c:l,m=d<h?d<f?d:f:h<f?h:f,v=a>c?a>l?a:l:c>l?c:l,p=d>h?d>f?d:f:h>f?h:f,g=m0(u,m,t,e,i),M=m0(v,p,t,e,i);let _=n.prevZ,x=n.nextZ;for(;_&&_.z>=g&&x&&x.z<=M;){if(_.x>=u&&_.x<=v&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&Ur(a,d,c,h,l,f,_.x,_.y)&&Ke(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=u&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Ur(a,d,c,h,l,f,x.x,x.y)&&Ke(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=g;){if(_.x>=u&&_.x<=v&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&Ur(a,d,c,h,l,f,_.x,_.y)&&Ke(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=M;){if(x.x>=u&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Ur(a,d,c,h,l,f,x.x,x.y)&&Ke(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function _x(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!gl(s,r)&&Zu(s,i,i.next,r)&&Vo(s,r)&&Vo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Go(i),Go(i.next),i=n=r),i=i.next}while(i!==n);return ar(i)}function yx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Px(o,a)){let c=Ku(o,a);o=ar(o,o.next),c=ar(c,c.next),Ho(o,t,e,i,s,r,0),Ho(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function bx(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Yu(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Rx(l));for(s.sort(Sx),r=0;r<s.length;r++)e=wx(s[r],e);return e}function Sx(n,t){return n.x-t.x}function wx(n,t){const e=Ex(n,t);if(!e)return t;const i=Ku(e,n);return ar(i,i.next),ar(e,e.next)}function Ex(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let d=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ur(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Vo(e,n)&&(h<d||h===d&&(e.x>s.x||e.x===s.x&&Tx(s,e)))&&(s=e,d=h)),e=e.next;while(e!==a);return s}function Tx(n,t){return Ke(n.prev,n,t.prev)<0&&Ke(t.next,n,n.next)<0}function Ax(n,t,e,i){let s=n;do s.z===0&&(s.z=m0(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Cx(s)}function Cx(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function m0(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Rx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ur(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Px(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Lx(n,t)&&(Vo(n,t)&&Vo(t,n)&&Ix(n,t)&&(Ke(n.prev,n,t.prev)||Ke(n,t.prev,t))||gl(n,t)&&Ke(n.prev,n,n.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function gl(n,t){return n.x===t.x&&n.y===t.y}function Zu(n,t,e,i){const s=Aa(Ke(n,t,e)),r=Aa(Ke(n,t,i)),o=Aa(Ke(e,i,n)),a=Aa(Ke(e,i,t));return!!(s!==r&&o!==a||s===0&&Ta(n,e,t)||r===0&&Ta(n,i,t)||o===0&&Ta(e,n,i)||a===0&&Ta(e,t,i))}function Ta(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Aa(n){return n>0?1:n<0?-1:0}function Lx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Zu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Vo(n,t){return Ke(n.prev,n,n.next)<0?Ke(n,t,n.next)>=0&&Ke(n,n.prev,t)>=0:Ke(n,t,n.prev)<0||Ke(n,n.next,t)<0}function Ix(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ku(n,t){const e=new g0(n.i,n.x,n.y),i=new g0(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function yh(n,t,e,i){const s=new g0(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Go(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function g0(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class As{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return As.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];bh(t),Sh(i,t);let o=t.length;e.forEach(bh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Sh(i,e[c]);const a=vx.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function bh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Sh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Z0 extends on{constructor(t=new Zo([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:u-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:zx;let _,x=!1,A,w,C,P;g&&(_=g.getSpacedPoints(d),x=!0,f=!1,A=g.computeFrenetFrames(d,!1),w=new U,C=new U,P=new U),f||(p=0,u=0,m=0,v=0);const S=a.extractPoints(l);let b=S.shape;const k=S.holes;if(!As.isClockWise(b)){b=b.reverse();for(let st=0,ut=k.length;st<ut;st++){const D=k[st];As.isClockWise(D)&&(k[st]=D.reverse())}}const V=As.triangulateShape(b,k),Y=b;for(let st=0,ut=k.length;st<ut;st++){const D=k[st];b=b.concat(D)}function j(st,ut,D){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ut,D)}const W=b.length,et=V.length;function Z(st,ut,D){let Wt,dt,Dt;const vt=st.x-ut.x,Zt=st.y-ut.y,It=D.x-st.x,R=D.y-st.y,E=vt*vt+Zt*Zt,G=vt*R-Zt*It;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(E),ot=Math.sqrt(It*It+R*R),Q=ut.x-Zt/J,Bt=ut.y+vt/J,St=D.x-R/ot,kt=D.y+It/ot,ye=((St-Q)*R-(kt-Bt)*It)/(vt*R-Zt*It);Wt=Q+vt*ye-st.x,dt=Bt+Zt*ye-st.y;const ht=Wt*Wt+dt*dt;if(ht<=2)return new ct(Wt,dt);Dt=Math.sqrt(ht/2)}else{let J=!1;vt>Number.EPSILON?It>Number.EPSILON&&(J=!0):vt<-Number.EPSILON?It<-Number.EPSILON&&(J=!0):Math.sign(Zt)===Math.sign(R)&&(J=!0),J?(Wt=-Zt,dt=vt,Dt=Math.sqrt(E)):(Wt=vt,dt=Zt,Dt=Math.sqrt(E/2))}return new ct(Wt/Dt,dt/Dt)}const xt=[];for(let st=0,ut=Y.length,D=ut-1,Wt=st+1;st<ut;st++,D++,Wt++)D===ut&&(D=0),Wt===ut&&(Wt=0),xt[st]=Z(Y[st],Y[D],Y[Wt]);const Lt=[];let Ft,oe=xt.concat();for(let st=0,ut=k.length;st<ut;st++){const D=k[st];Ft=[];for(let Wt=0,dt=D.length,Dt=dt-1,vt=Wt+1;Wt<dt;Wt++,Dt++,vt++)Dt===dt&&(Dt=0),vt===dt&&(vt=0),Ft[Wt]=Z(D[Wt],D[Dt],D[vt]);Lt.push(Ft),oe=oe.concat(Ft)}for(let st=0;st<p;st++){const ut=st/p,D=u*Math.cos(ut*Math.PI/2),Wt=m*Math.sin(ut*Math.PI/2)+v;for(let dt=0,Dt=Y.length;dt<Dt;dt++){const vt=j(Y[dt],xt[dt],Wt);mt(vt.x,vt.y,-D)}for(let dt=0,Dt=k.length;dt<Dt;dt++){const vt=k[dt];Ft=Lt[dt];for(let Zt=0,It=vt.length;Zt<It;Zt++){const R=j(vt[Zt],Ft[Zt],Wt);mt(R.x,R.y,-D)}}}const ke=m+v;for(let st=0;st<W;st++){const ut=f?j(b[st],oe[st],ke):b[st];x?(C.copy(A.normals[0]).multiplyScalar(ut.x),w.copy(A.binormals[0]).multiplyScalar(ut.y),P.copy(_[0]).add(C).add(w),mt(P.x,P.y,P.z)):mt(ut.x,ut.y,0)}for(let st=1;st<=d;st++)for(let ut=0;ut<W;ut++){const D=f?j(b[ut],oe[ut],ke):b[ut];x?(C.copy(A.normals[st]).multiplyScalar(D.x),w.copy(A.binormals[st]).multiplyScalar(D.y),P.copy(_[st]).add(C).add(w),mt(P.x,P.y,P.z)):mt(D.x,D.y,h/d*st)}for(let st=p-1;st>=0;st--){const ut=st/p,D=u*Math.cos(ut*Math.PI/2),Wt=m*Math.sin(ut*Math.PI/2)+v;for(let dt=0,Dt=Y.length;dt<Dt;dt++){const vt=j(Y[dt],xt[dt],Wt);mt(vt.x,vt.y,h+D)}for(let dt=0,Dt=k.length;dt<Dt;dt++){const vt=k[dt];Ft=Lt[dt];for(let Zt=0,It=vt.length;Zt<It;Zt++){const R=j(vt[Zt],Ft[Zt],Wt);x?mt(R.x,R.y+_[d-1].y,_[d-1].x+D):mt(R.x,R.y,h+D)}}}tt(),ft();function tt(){const st=s.length/3;if(f){let ut=0,D=W*ut;for(let Wt=0;Wt<et;Wt++){const dt=V[Wt];Xt(dt[2]+D,dt[1]+D,dt[0]+D)}ut=d+p*2,D=W*ut;for(let Wt=0;Wt<et;Wt++){const dt=V[Wt];Xt(dt[0]+D,dt[1]+D,dt[2]+D)}}else{for(let ut=0;ut<et;ut++){const D=V[ut];Xt(D[2],D[1],D[0])}for(let ut=0;ut<et;ut++){const D=V[ut];Xt(D[0]+W*d,D[1]+W*d,D[2]+W*d)}}i.addGroup(st,s.length/3-st,0)}function ft(){const st=s.length/3;let ut=0;Ot(Y,ut),ut+=Y.length;for(let D=0,Wt=k.length;D<Wt;D++){const dt=k[D];Ot(dt,ut),ut+=dt.length}i.addGroup(st,s.length/3-st,1)}function Ot(st,ut){let D=st.length;for(;--D>=0;){const Wt=D;let dt=D-1;dt<0&&(dt=st.length-1);for(let Dt=0,vt=d+p*2;Dt<vt;Dt++){const Zt=W*Dt,It=W*(Dt+1),R=ut+Wt+Zt,E=ut+dt+Zt,G=ut+dt+It,J=ut+Wt+It;ee(R,E,G,J)}}}function mt(st,ut,D){c.push(st),c.push(ut),c.push(D)}function Xt(st,ut,D){jt(st),jt(ut),jt(D);const Wt=s.length/3,dt=M.generateTopUV(i,s,Wt-3,Wt-2,Wt-1);Ce(dt[0]),Ce(dt[1]),Ce(dt[2])}function ee(st,ut,D,Wt){jt(st),jt(ut),jt(Wt),jt(ut),jt(D),jt(Wt);const dt=s.length/3,Dt=M.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);Ce(Dt[0]),Ce(Dt[1]),Ce(Dt[3]),Ce(Dt[1]),Ce(Dt[2]),Ce(Dt[3])}function jt(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function Ce(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Dx(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new p0[s.type]().fromJSON(s)),new Z0(i,t.options)}}const zx={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],d=t[s*3+1];return[new ct(r,o),new ct(a,c),new ct(l,d)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],d=t[i*3+1],h=t[i*3+2],f=t[s*3],u=t[s*3+1],m=t[s*3+2],v=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-d)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-h),new ct(f,1-m),new ct(v,1-g)]:[new ct(a,1-c),new ct(d,1-h),new ct(u,1-m),new ct(p,1-g)]}};function Dx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class K0 extends ml{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new K0(t.radius,t.detail)}}class j0 extends ml{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new j0(t.radius,t.detail)}}class Qs extends on{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],d=[];let h=t;const f=(e-t)/s,u=new U,m=new ct;for(let v=0;v<=s;v++){for(let p=0;p<=i;p++){const g=r+p/i*o;u.x=h*Math.cos(g),u.y=h*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,d.push(m.x,m.y)}h+=f}for(let v=0;v<s;v++){const p=v*(i+1);for(let g=0;g<i;g++){const M=g+p,_=M,x=M+i+1,A=M+i+2,w=M+1;a.push(_,x,w),a.push(x,A,w)}}this.setIndex(a),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vl extends on{constructor(t=new Zo([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let d=0;d<t.length;d++)l(t[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(r,3)),this.setAttribute("uv",new Se(o,2));function l(d){const h=s.length/3,f=d.extractPoints(e);let u=f.shape;const m=f.holes;As.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,g=m.length;p<g;p++){const M=m[p];As.isClockWise(M)===!0&&(m[p]=M.reverse())}const v=As.triangulateShape(u,m);for(let p=0,g=m.length;p<g;p++){const M=m[p];u=u.concat(M)}for(let p=0,g=u.length;p<g;p++){const M=u[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,g=v.length;p<g;p++){const M=v[p],_=M[0]+h,x=M[1]+h,A=M[2]+h;i.push(_,x,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Ux(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new vl(i,t.curveSegments)}}function Ux(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class lr extends on{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const d=[],h=new U,f=new U,u=[],m=[],v=[],p=[];for(let g=0;g<=i;g++){const M=[],_=g/i;let x=0;g===0&&o===0?x=.5/e:g===i&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const w=A/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+_*a),h.y=t*Math.cos(o+_*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(w+x,1-_),M.push(l++)}d.push(M)}for(let g=0;g<i;g++)for(let M=0;M<e;M++){const _=d[g][M+1],x=d[g][M],A=d[g+1][M],w=d[g+1][M+1];(g!==0||o>0)&&u.push(_,x,w),(g!==i-1||c<Math.PI)&&u.push(x,A,w)}this.setIndex(u),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xl extends on{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],d=new U,h=new U,f=new U;for(let u=0;u<=i;u++)for(let m=0;m<=s;m++){const v=m/s*r,p=u/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(v),h.y=(t+e*Math.cos(p))*Math.sin(v),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(u/i)}for(let u=1;u<=i;u++)for(let m=1;m<=s;m++){const v=(s+1)*u+m-1,p=(s+1)*(u-1)+m-1,g=(s+1)*(u-1)+m,M=(s+1)*u+m;o.push(v,p,M),o.push(p,g,M)}this.setIndex(o),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nx extends sn{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Fx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=wh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wh(){return performance.now()}const Eh=new Ie;class ju{constructor(t,e,i=0,s=1/0){this.ray=new Au(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new G0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Eh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(t,e=!0,i=[]){return v0(t,this,i,e),i.sort(Th),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)v0(t[s],this,i,e);return i.sort(Th),i}}function Th(n,t){return n.distance-t.distance}function v0(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)v0(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:z0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=z0);function x0(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new on;let l=0;for(let d=0;d<n.length;++d){const h=n[d];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in h.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(h.attributes[u]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in h.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(h.morphAttributes[u])}if(t){let u;if(e)u=h.index.count;else if(h.attributes.position!==void 0)u=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,d),l+=u}}if(e){let d=0;const h=[];for(let f=0;f<n.length;++f){const u=n[f].index;for(let m=0;m<u.count;++m)h.push(u.getX(m)+d);d+=n[f].attributes.position.count}c.setIndex(h)}for(const d in r){const h=Ah(r[d]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,h)}for(const d in o){const h=o[d][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let f=0;f<h;++f){const u=[];for(let v=0;v<o[d].length;++v)u.push(o[d][v][f]);const m=Ah(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(m)}}return c}function Ah(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const d=n[l];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}const o=new t(r),a=new Bn(o,e,i);let c=0;for(let l=0;l<n.length;++l){const d=n[l];if(d.isInterleavedBufferAttribute){const h=c/e;for(let f=0,u=d.count;f<u;f++)for(let m=0;m<e;m++){const v=d.getComponent(f,m);a.setComponent(f+h,m,v)}}else o.set(d.array,c);c+=d.count*e}return s!==void 0&&(a.gpuType=s),a}const Ox=new U(-.45,1,.35).normalize(),Ml={uDot:{value:5}},Bx=`
  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec3 vColor;
  varying float vEmit;
  uniform vec3 uColor;
  #ifdef USE_EMIT
    attribute float aEmit;
  #endif
  void main() {
    vec4 p = vec4(position, 1.0);
    vec3 n = normal;
    #ifdef USE_INSTANCING
      p = instanceMatrix * p;
      n = mat3(instanceMatrix) * n;
    #endif
    vColor = uColor;
    #ifdef USE_COLOR
      vColor *= color;
    #endif
    #ifdef USE_INSTANCING_COLOR
      vColor *= instanceColor;
    #endif
    vEmit = 0.0;
    #ifdef USE_EMIT
      vEmit = aEmit;
    #endif
    vec4 wp = modelMatrix * p;
    vNormal = normalize(mat3(modelMatrix) * n);
    vViewDir = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Hx=`
  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec3 vColor;
  varying float vEmit;
  uniform vec3 uLightDir;
  uniform vec3 uEmissive;
  uniform float uFlash;
  uniform float uHatch;
  uniform float uGloss;
  uniform float uDot;
  void main() {
    vec3 n = normalize(vNormal);
    if (!gl_FrontFacing) n = -n;
    vec3 v = normalize(vViewDir);
    float ndl = dot(n, uLightDir);
    float band = ndl > 0.5 ? 1.0 : (ndl > -0.05 ? 0.74 : 0.48);
    vec3 col = vColor * band;
    // 美漫网点：屏幕空间 45° 网格，越暗网点越大
    if (uHatch > 0.0 && band < 0.9) {
      vec2 q = gl_FragCoord.xy / uDot;
      q = vec2(q.x + q.y, q.x - q.y) * 0.7071;
      float d = length(fract(q) - 0.5);
      float r = band < 0.6 ? 0.36 : 0.2;
      if (d < r) col *= 0.62;
    }
    // 硬边高光（漫画里的白色反光块）
    vec3 h = normalize(uLightDir + v);
    float spec = pow(max(dot(n, h), 0.0), 48.0);
    if (uGloss > 0.0 && spec > 0.55) col = mix(col, vec3(1.0), 0.55 * uGloss);
    // 边缘光
    float rim = 1.0 - max(dot(n, v), 0.0);
    if (rim > 0.7 && ndl > 0.0) col += vColor * 0.22;
    col = min(col, vec3(0.96));
    // 发光部位：输出 HDR 让泛光吃到
    col = mix(col, vColor * 2.0, vEmit);
    col += uEmissive;
    col = mix(col, vec3(1.0), uFlash);
    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
  }
`;function tr(n,t={}){const e=new sn({uniforms:{uColor:{value:new qt(n)},uLightDir:{value:Ox},uEmissive:{value:new qt(t.emissive??0)},uFlash:{value:0},uHatch:{value:t.hatch===!1?0:1},uGloss:{value:t.gloss??0},uDot:Ml.uDot},vertexShader:Bx,fragmentShader:Hx,vertexColors:!!t.vertexColors});return t.emitAttr&&(e.defines={USE_EMIT:""}),e}const Vx=`
  varying vec3 vColor;
  uniform vec3 uColor;
  void main() {
    vec4 p = vec4(position, 1.0);
    #ifdef USE_INSTANCING
      p = instanceMatrix * p;
    #endif
    vColor = uColor;
    #ifdef USE_INSTANCING_COLOR
      vColor *= instanceColor;
    #endif
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * p;
  }
`,Gx=`
  varying vec3 vColor;
  uniform float uOpacity;
  uniform float uIntensity;
  void main() {
    gl_FragColor = vec4(vColor * uIntensity, uOpacity);
    #include <colorspace_fragment>
  }
`;function Le(n,t={}){const e=t.opacity??1;return new sn({uniforms:{uColor:{value:new qt(n)},uOpacity:{value:e},uIntensity:{value:t.intensity??1}},vertexShader:Vx,fragmentShader:Gx,side:t.side??rs,transparent:e<1||!!t.additive,depthWrite:e>=1&&!t.additive,blending:t.additive?No:Js})}const J0=Le(920594,{side:pn}),Q0=.07;function Wx(n,t=Q0){const e=n.geometry;e.boundingBox||e.computeBoundingBox();const i=new U;e.boundingBox.getSize(i);const s=new U;e.boundingBox.getCenter(s);const r=new ue(e,J0),o=(i.x+t*2)/Math.max(i.x,.001),a=(i.y+t*2)/Math.max(i.y,.001),c=(i.z+t*2)/Math.max(i.z,.001);return r.scale.set(o,a,c),r.position.set(s.x*(1-o),s.y*(1-a),s.z*(1-c)),r.userData.outline=!0,n.add(r),r}function $x(n,t,e,i=[0,0,0],s=[0,0,0],r=Q0){const o=e instanceof sn?e:tr(e),a=new ue(t,o);return a.position.set(...i),a.rotation.set(...s),r>0&&Wx(a,r),n.add(a),a}const tc=new Ie,Ch=new Is,Rh=new ri,Ca=new qt;class Yt{constructor(){H(this,"geos",[]);H(this,"hulls",[])}add(t,e,i=[0,0,0],s=[0,0,0],r=1,o={}){const a=typeof r=="number"?new U(r,r,r):new U(...r);Rh.set(s[0],s[1],s[2]),Ch.setFromEuler(Rh),tc.compose(new U(...i),Ch,a);const c=t.index?t.toNonIndexed():t.clone(),l=new on;l.setAttribute("position",c.getAttribute("position").clone()),l.setAttribute("normal",c.getAttribute("normal").clone()),l.applyMatrix4(tc);const d=l.getAttribute("position").count;Ca.set(e);const h=new Float32Array(d*3);for(let u=0;u<d;u++)h.set([Ca.r,Ca.g,Ca.b],u*3);l.setAttribute("color",new Bn(h,3)),l.setAttribute("aEmit",new Bn(new Float32Array(d).fill(o.emit??0),1)),this.geos.push(l);const f=o.outline??(o.emit?.04:Q0);if(f>0){c.boundingBox||c.computeBoundingBox();const u=c.boundingBox,m=u.getSize(new U),v=u.getCenter(new U),p=new U((m.x*a.x+2*f)/Math.max(m.x*a.x,.001),(m.y*a.y+2*f)/Math.max(m.y*a.y,.001),(m.z*a.z+2*f)/Math.max(m.z*a.z,.001)),g=new Ie().copy(tc).multiply(new Ie().makeTranslation(v.x,v.y,v.z)).multiply(new Ie().makeScale(p.x,p.y,p.z)).multiply(new Ie().makeTranslation(-v.x,-v.y,-v.z)),M=new on;M.setAttribute("position",c.getAttribute("position").clone()),M.applyMatrix4(g),this.hulls.push(M)}return c.dispose(),this}addMirror(t,e,i,s=[0,0,0],r=1,o={}){return this.add(t,e,i,s,r,o),this.add(t,e,[-i[0],i[1],i[2]],[s[0],-s[1],-s[2]],r,o),this}bake(){const t=x0(this.geos),e=this.hulls.length?x0(this.hulls):null;return t.computeBoundingSphere(),e==null||e.computeBoundingSphere(),this.geos.forEach(i=>i.dispose()),this.hulls.forEach(i=>i.dispose()),{geo:t,hull:e}}}const Ph=new Map;function le(n,t,e={}){let i=Ph.get(n);i||(i=t().bake(),Ph.set(n,i));const s=new be,r=new ue(i.geo,tr(16777215,{vertexColors:!0,emitAttr:!0,gloss:e.gloss??0,hatch:e.hatch}));if(s.add(r),i.hull){const o=new ue(i.hull,J0);o.userData.outline=!0,s.add(o)}return s}function ec(n){const t=[];return n.traverse(e=>{const i=e.material;i&&i.uniforms&&i.uniforms.uFlash&&!t.includes(i)&&t.push(i)}),t}const Lh=new Map;function Hn(n,t){let e=Lh.get(n);return e||(e=t(),e.computeBoundingBox(),Lh.set(n,e)),e}const y=(n,t,e)=>Hn(`b${n},${t},${e}`,()=>new ro(n,t,e)),z=(n,t=14,e=10)=>Hn(`s${n},${t},${e}`,()=>new lr(n,t,e)),q=(n,t,e,i=12)=>Hn(`c${n},${t},${e},${i}`,()=>new Yo(n,t,e,i)),yt=(n,t,e,i=12)=>Hn(`zc${n},${t},${e},${i}`,()=>new Yo(n,t,e,i).rotateX(Math.PI/2)),bi=(n,t,e=12)=>Hn(`zk${n},${t},${e}`,()=>new pl(n,t,e).rotateX(-Math.PI/2)),bt=(n,t,e=10)=>Hn(`k${n},${t},${e}`,()=>new pl(n,t,e)),_e=(n,t)=>Hn(`t${n},${t}`,()=>new xl(n,t,8,24)),Mn=(n,t=0)=>Hn(`i${n},${t}`,()=>new K0(n,t));function xi(n,t,e=14){return Hn(`zl${n}`,()=>{const i=t.map(([r,o])=>new ct(Math.max(r,.001),-o)).sort((r,o)=>r.y-o.y),s=new Y0(i,e);return s.rotateX(-Math.PI/2),s.computeVertexNormals(),s})}function Jt(n,t,e){return Hn(`w${n}`,()=>{const i=new Zo;i.moveTo(t[0][0],t[0][1]);for(let r=1;r<t.length;r++)i.lineTo(t[r][0],t[r][1]);i.closePath();const s=new Z0(i,{depth:e,bevelEnabled:!1});return s.rotateX(Math.PI/2),s.translate(0,e/2,0),s.computeVertexNormals(),s})}const ii=n=>n.map(([t,e])=>[-t,e]).reverse();function Xx(n,t=.45){const e=[];for(let i=0;i<10;i++){const s=i/10*Math.PI*2-Math.PI/2,r=i%2?n*t:n;e.push([Math.cos(s)*r,Math.sin(s)*r])}return e}const er=(n,t=.04)=>Jt(`star${n},${t}`,Xx(n),t);function Ra(n,t,e){return Hn(`bd${n}`,()=>Jt(`bdsrc${n}`,t,e).clone().rotateX(-Math.PI/2))}function Rr(n,t,e,i,s=16751135){const r=new be,o=new ue(bi(e,i,8),Le(s,{intensity:2.2}));o.rotation.y=Math.PI,o.position.z=i/2;const a=new ue(bi(e*.55,i*.6,8),Le(16774848,{intensity:3}));return a.rotation.y=Math.PI,a.position.z=i*.3,r.add(o,a),r.position.set(...t),r.userData.flame=!0,n.add(r),r}const qx={falcon:[[0,1.9]],rhino:[[.75,1.75],[-.75,1.75]],hummingbird:[[0,1.35]],thunder:[[.32,1.45],[-.32,1.45]]},nc={falcon:{span:2.35,len:2.3,nose:2.25},rhino:{span:2.95,len:3.25,nose:3.2},hummingbird:{span:1.65,len:2.3,nose:1.8},thunder:{span:2.3,len:1.75,nose:1.7}};function M0(n){let t;switch(n){case"falcon":{t=le("v-falcon",()=>{const o=new Yt;o.add(xi("falcon",[[.3,1.7],[.4,1],[.44,0],[.36,-.9],[.2,-1.7],[.02,-2.3]]),16102171,[0,0,0],[0,0,0],[1.15,.75,1]),o.add(yt(.3,.32,.14),14829868,[0,0,-1.25],[0,0,0],[1.15,.75,1]),o.add(z(.3,16,12),4708095,[0,.27,-.65],[0,0,0],[.75,.7,2],{emit:.25}),o.add(y(.05,.05,.9),2830138,[0,.47,-.6],[0,0,0],1,{outline:.03}),o.addMirror(y(.32,.36,.9),2830138,[.48,-.03,-.1]);const a=[[.3,-.55],[2.25,.55],[2.25,.88],[.35,1]];o.add(Jt("fw-r",a,.1),16102171,[0,-.05,0]),o.add(Jt("fw-l",ii(a),.1),16102171,[0,-.05,0]);const c=[[.4,-.45],[2.2,.56],[2.2,.68],[.4,-.28]];o.add(Jt("fe-r",c,.03),14829868,[0,.03,0],[0,0,0],1,{outline:.02}),o.add(Jt("fe-l",ii(c),.03),14829868,[0,.03,0],[0,0,0],1,{outline:.02}),o.addMirror(er(.24),15921126,[1.45,.03,.62],[0,0,0],1,{outline:.02});const l=[[.35,-1.3],[.95,-.55],[.35,-.45]];return o.add(Jt("fc-r",l,.06),16102171,[0,0,0]),o.add(Jt("fc-l",ii(l),.06),16102171,[0,0,0]),o.addMirror(y(.07,.9,.75),2830138,[.48,.42,1.15],[-.25,0,-.38]),o.addMirror(y(.07,.25,.5),14829868,[.6,.75,1.3],[-.25,0,-.38],1,{outline:.03}),o.addMirror(y(1,.07,.6),16102171,[.75,0,1.45],[0,-.2,0]),o.addMirror(yt(.08,.08,1,8),15921126,[2.25,0,.5]),o.addMirror(bi(.08,.28,8),14829868,[2.25,0,-.14]),o.addMirror(yt(.11,.11,.9,8),15921126,[1.2,-.17,.25]),o.addMirror(bi(.11,.3,8),14829868,[1.2,-.17,-.35]),o.addMirror(y(.36,.03,.12),2830138,[1.2,-.17,.5],[0,0,0],1,{outline:.02}),o.add(z(.07,8,6),16726832,[2.25,.08,.95],[0,0,0],1,{emit:1}),o.add(z(.07,8,6),3866474,[-2.25,.08,.95],[0,0,0],1,{emit:1}),o.add(yt(.3,.26,.4),2830138,[0,0,1.75]),o.add(yt(.22,.22,.05),16751135,[0,0,1.96],[0,0,0],1,{emit:1,outline:0}),o},{gloss:1}),Rr(t,[0,0,1.95],.24,1);break}case"rhino":{t=le("v-rhino",()=>{const c=new Yt;c.add(y(1.05,.72,2.8),7309882,[0,0,.2]),c.add(y(.9,.1,2.4),14272928,[0,-.38,.2],[0,0,0],1,{outline:.03}),c.add(yt(.42,.52,.9,8),7309882,[0,0,-1.6]),c.add(bi(.42,.5,8),7309882,[0,0,-2.25]),c.add(Jt("rh-mouth",[[-.42,-2],[.42,-2],[.3,-1.5],[-.3,-1.5]],.03),12597547,[0,.38,0],[0,0,0],1,{outline:.02});for(let l=0;l<5;l++)c.add(bt(.06,.18,4),15921126,[-.28+l*.14,.42,-1.58],[Math.PI/2,0,0],1,{outline:.015});c.addMirror(z(.09,8,6),15921126,[.3,.4,-1.3],[0,0,0],1,{outline:.02}),c.addMirror(z(.05,6,4),2895653,[.3,.46,-1.3],[0,0,0],1,{outline:0}),c.add(yt(.2,.2,.4,10),2895653,[0,-.12,-2.4]);for(let l=0;l<5;l++){const d=l/5*Math.PI*2;c.add(yt(.045,.045,.8,6),5922662,[Math.cos(d)*.12,-.12+Math.sin(d)*.12,-2.85],[0,0,0],1,{outline:.02})}c.add(y(.6,.38,.75),4708095,[0,.5,-.85],[0,0,0],1,{emit:.25}),c.add(y(.66,.06,.06),2895653,[0,.7,-.6],[0,0,0],1,{outline:.02}),c.add(y(4.6,.16,1.1),7309882,[0,-.05,.15]),c.add(y(4.6,.04,.2),16102171,[0,.05,-.32],[0,0,0],1,{outline:.02}),c.addMirror(y(.6,.12,1.05),7309882,[2.5,-.15,.15],[0,0,-.35]);for(const l of[.9,1.5,1.95])c.addMirror(yt(.13,.13,.7,8),2895653,[l,-.3,.1]),c.addMirror(yt(.135,.135,.1,8),16102171,[l,-.3,-.05],[0,0,0],1,{outline:.02});c.addMirror(yt(.38,.38,1.4,12),2895653,[.75,.55,1]),c.addMirror(yt(.4,.4,.12,12),14272928,[.75,.55,.32]),c.addMirror(yt(.22,.22,.05,10),16751135,[.75,.55,1.72],[0,0,0],1,{emit:1,outline:0}),c.add(y(2.6,.12,.6),7309882,[0,.1,1.8]),c.addMirror(y(.1,.9,.65),7309882,[1.3,.5,1.8]),c.addMirror(y(.11,.3,.3),12597547,[1.3,.85,1.9],[0,0,0],1,{outline:.03});for(let l=0;l<6;l++)c.addMirror(z(.045,6,4),2895653,[.45,.37,-.8+l*.4],[0,0,0],1,{outline:0});return c},{gloss:.6}),Rr(t,[.75,.55,1.75],.22,.8),Rr(t,[-.75,.55,1.75],.22,.8);break}case"hummingbird":{t=le("v-humming",()=>{const o=new Yt;o.add(xi("humming",[[.2,1.2],[.27,.6],[.28,-.2],[.18,-1.1],[.05,-1.9],[.01,-2.3]]),2082992,[0,0,0],[0,0,0],[1,.85,1]),o.add(y(.1,.02,2.6),15921126,[0,.24,-.3],[0,0,0],1,{outline:.015}),o.add(z(.2,14,10),16769354,[0,.2,-.45],[0,0,0],[.8,.75,2.2],{emit:.35});const a=[[.22,.2],[1.45,-.55],[1.55,-.32],[.24,.65]];o.add(Jt("hw-r",a,.07),15921126,[0,0,0]),o.add(Jt("hw-l",ii(a),.07),15921126,[0,0,0]),o.addMirror(y(.9,.03,.08),16732043,[.85,.05,-.05],[0,.48,0],1,{outline:.02}),o.addMirror(yt(.1,.1,.55,8),1911594,[1.5,0,-.42]),o.addMirror(z(.1,8,6),16732043,[1.5,0,-.72],[0,0,0],1,{emit:1});const c=[[.15,-1.25],[.6,-1],[.15,-.9]];return o.add(Jt("hc-r",c,.05),2082992,[0,0,0]),o.add(Jt("hc-l",ii(c),.05),2082992,[0,0,0]),o.addMirror(y(.05,.45,.45),16732043,[.18,.28,.95],[-.3,0,-.3]),o.add(_e(.36,.06),5111039,[0,0,1],[0,0,0],1,{emit:.8,outline:.03}),o.add(yt(.18,.16,.3,10),1911594,[0,0,1.2]),o},{gloss:1}),Rr(t,[0,0,1.35],.16,1,5111039);break}case"thunder":{t=le("v-thunder",()=>{const o=new Yt;o.add(xi("thunder",[[.34,1.4],[.45,.6],[.42,-.3],[.28,-1],[.02,-1.7]]),9321433,[0,0,0],[0,0,0],[1.1,.8,1]),o.add(z(.25,14,10),10289003,[0,.27,-.45],[0,0,0],[.85,.7,1.8],{emit:.4});const a=[[.3,-.9],[2.2,1],[1.9,1.25],[.3,1.2]];o.add(Jt("tw-r",a,.13),9321433,[0,-.05,0]),o.add(Jt("tw-l",ii(a),.13),9321433,[0,-.05,0]);const c=[[.6,-.3],[1.2,.35],[.95,.4],[1.55,.95],[.85,.5],[1.1,.45]];return o.add(Jt("tb-r",c,.03),16765498,[0,.03,0],[0,0,0],1,{outline:.02}),o.add(Jt("tb-l",ii(c),.03),16765498,[0,.03,0],[0,0,0],1,{outline:.02}),o.add(Jt("t-spine",[[0,-.6],[.06,.9],[-.06,.9]],.4),13077759,[0,.25,0]),o.addMirror(q(.08,.1,.65,8),2366003,[1.9,.3,.95]),o.addMirror(z(.2,12,8),16765498,[1.9,.72,.95],[0,0,0],1,{emit:.9}),o.addMirror(yt(.24,.2,.4,10),2366003,[.32,0,1.3]),o.addMirror(yt(.16,.16,.05,10),13073919,[.32,0,1.51],[0,0,0],1,{emit:1,outline:0}),o.addMirror(y(.06,.55,.55),13077759,[.75,.3,1.15],[0,0,-.5]),o},{gloss:1});for(const o of[1,-1]){const a=new ue(_e(.3,.035),Le(16765498,{intensity:2.2}));a.position.set(o*1.9,.55,.95),a.rotation.x=Math.PI/2,a.userData.coil=o,t.add(a)}Rr(t,[.32,0,1.5],.18,.9,13073919),Rr(t,[-.32,0,1.5],.18,.9,13073919);break}}return t}function Ih(n,t,e={}){const i=t.skin,s=new qt(i).multiplyScalar(.82).getHex();n.add(z(.55,18,14),i,[0,.12,-.04],[0,0,0],[.92,1.05,1]),n.add(y(.82,.48,.8),i,[0,-.3,0]),n.add(y(.44,.22,.32),i,[0,-.52,.28]),n.add(y(.06,.12,.05),s,[0,-.55,.45],[0,0,0],1,{outline:0}),n.addMirror(z(.16,8,6),i,[.3,-.05,.36],[0,0,0],[1,.8,.7],{outline:.03}),n.add(y(.12,.3,.16),i,[0,-.02,.5],[-.25,0,0],1,{outline:.03}),n.add(z(.08,8,6),i,[0,-.15,.57],[0,0,0],1,{outline:.03}),n.add(y(.82,.12,.18),i,[0,.19,.44],[.2,0,0],1,{outline:.03}),e.eyes!==!1&&(n.addMirror(z(.09,10,8),16777215,[.19,.07,.48],[0,0,0],[1.4,.7,.5],{outline:.025}),n.addMirror(z(.045,8,6),1709088,[.17,.07,.52],[0,0,0],1,{outline:0})),e.brows!==!1&&n.addMirror(y(.28,.07,.08),t.brow,[.2,.22,.54],[0,0,.32],1,{outline:.02}),n.add(y(.3,.045,.05),e.mouth??8006176,[0,-.36,.44],[0,0,0],1,{outline:0}),n.addMirror(z(.13,8,6),i,[.47,0,0],[0,0,0],[.45,1,.75],{outline:.03})}const To={top:.56,chin:.58,w:.47,front:.45,back:.5,jut:.08};function Ju(n){const t=To;if(n>=0){const i=Math.sqrt(Math.max(0,1-(n/t.top)**2));return{a:t.w*i,f:t.front*i,k:t.back*i,z0:0}}const e=Math.min(1,-n/t.chin);return{a:t.w*(1-e**1.6)**(1/1.6),f:t.front*(1-e**2.8)**(1/2.8),k:t.back*Math.sqrt(1-e*e),z0:t.jut*e**1.5}}const td=(n=1,t=-.58,e=!1)=>Hn(`girlHead${n}_${t}_${e}`,()=>{const i=Math.acos(Math.max(-1,Math.min(1,t/(t>=0?To.top:To.chin)))),s=e?new lr(1,32,24,0,Math.PI*2,i,Math.PI-i):new lr(1,32,24,0,Math.PI*2,0,i),r=s.getAttribute("position");for(let o=0;o<r.count;o++){const a=r.getX(o),c=r.getY(o),l=r.getZ(o),d=c>=0?c*To.top:c*To.chin,h=Ju(d),f=Math.hypot(a,l),u=f>1e-6?a/f:0,m=f>1e-6?l/f:0;r.setXYZ(o,u*h.a*n,d,h.z0+m*(m>0?h.f:h.k)*n)}return s.computeVertexNormals(),s});function Yx(n,t){const e=Ju(t),i=Math.min(.98,Math.abs(n)/e.a),s=e.f*Math.sqrt(1-i*i);return{z:e.z0+s,yaw:Math.atan2(n/(e.a*e.a),s/(e.f*e.f))}}function Qu(n,t,e){return n.add(td(),t,[0,e,0]),{on:(r,o,a,c=0,l=0)=>{const d=Yx(r,o);return[[r,o+e,d.z+a],[c,d.yaw,l]]},put:(r,o,a,c,l={},d=!0)=>d?n.addMirror(r,o,a[0],a[1],c,l):n.add(r,o,a[0],a[1],c,l)}}function Zx(n,t){const{on:e,put:i}=n,s=new qt(t).multiplyScalar(.55).getHex();i(z(.04,10,6),t,e(.03,-.32,0,0,-.15),[1.25,.5,.45],{outline:.01}),i(z(.05,10,6),t,e(0,-.355,-.002),[1.3,.6,.5],{outline:.01},!1),i(y(.13,.012,.02),s,e(0,-.336,.012),1,{outline:0},!1),i(z(.011,4,3),16777215,e(.018,-.345,.024),[1.6,.6,.5],{emit:.3,outline:0},!1)}function Kx(n,t,e){const s=Qu(n,t.skin,e),{on:r,put:o}=s,a=1.05,c=-.25,l=.022;n.add(td(a,c),t.mask,[0,e,0],[0,0,0],1,{outline:.03});const d=-.02;o(y(.045,.12,.05),t.mask,r(0,-.14,l+.01,-.3),1,{outline:.014},!1),o(z(.032,6,4),t.mask,r(0,-.2,l+.016),1,{outline:.012},!1),o(z(.075,12,8),t.lens,r(.18,d,l+.004,0,.14),[1.55,.66,.35],{emit:.9,outline:.02}),o(y(.26,.035,.035),1314842,r(.18,d+.05,l+.01,0,.14),1,{outline:0}),o(y(.13,.06,.04),t.mask,r(.35,d+.08,l-.004,0,.62),1,{outline:.02}),Zx(s,t.lips)}function jx(n,t,e){const r=Qu(n,t.skin,e),{on:o,put:a}=r,c=-.02,l=new qt(t.skin).multiplyScalar(.72).getHex();a(z(.085,8,6),l,o(.19,c+.06,-.012,0,.12),[1.6,.55,.3],{outline:0},!1),a(z(.075,12,8),16777215,o(.18,c,-.006,0,.12),[1.5,.68,.4],{outline:.016},!1),a(z(.045,10,8),t.iris,o(.176,c-.006,.01),[1,1.1,.5],{emit:.5,outline:0},!1),a(z(.02,8,6),1314842,o(.176,c-.006,.023),[1,1.1,.5],{outline:0},!1),a(z(.011,6,4),16777215,o(.19,c+.012,.031),1,{emit:.5,outline:0},!1),a(y(.25,.032,.035),1314842,o(.18,c+.042,.018,0,.12),1,{outline:0},!1),a(y(.09,.024,.03),1314842,o(.32,c+.065,.008,0,.55),1,{outline:0},!1),a(_e(.078,.022),12107976,o(-.18,c,.01),[1.15,.95,1],{outline:.014},!1),a(z(.06,12,8),t.glow,o(-.18,c,.004),[1.1,.9,.5],{emit:1,outline:0},!1),a(z(.022,6,4),16777215,o(-.18,c,.03),1,{emit:1,outline:0},!1),a(y(.1,.03,.03),12107976,o(-.33,c+.04,0,0,-.3),1,{outline:.01},!1),a(y(.08,.03,.03),12107976,o(-.34,c-.03,0,0,.2),1,{outline:.01},!1),a(y(.18,.026,.03),1711394,o(.18,c+.15,.004,0,.16),1,{outline:.008});const d=1.06,h=-.1,f=.026;n.add(td(d,h,!0),t.mask,[0,e,0],[0,0,0],1,{outline:.03}),a(y(.05,.16,.05),t.mask,o(0,-.18,f+.008,-.25),1,{outline:.014},!1);for(let u=0;u<3;u++)a(y(.08,.018,.02),t.glow,o(.15,-.24-u*.045,f,0,.12),1,{emit:.9,outline:0});a(y(.24,.022,.02),t.glow,o(0,h-.012,f-.004),1,{emit:.6,outline:0},!1)}function kh(n,t){const e=new qt(t.skin).multiplyScalar(.82).getHex();n.add(q(.16,.19,.4,12),e,[0,-.72,-.05]),n.add(q(.21,.24,.22,14),t.accent,[0,-.84,-.05]),n.add(z(.5,18,10),t.suit,[0,-1.04,-.06],[0,0,0],[1.72,.52,.62]),n.add(q(.8,.48,.92,18),t.suit,[0,-1.47,-.06],[0,0,0],[1,1,.6]),n.add(q(.48,.74,.56,18),t.suit,[0,-2.2,-.06],[0,0,0],[1,1,.6]),n.addMirror(z(.25,12,10),t.accent,[.8,-1.08,-.06],[0,0,0],[1,.85,1]),n.addMirror(z(.33,14,10),t.suit,[.28,-1.36,.29],[0,0,0],[1,.95,1]),n.add(q(.5,.5,.09,18),t.accent,[0,-1.93,-.06],[0,0,0],[1,1,.62],{outline:.025}),n.add(z(.045,8,6),t.buckle,[0,-1.93,.27],[0,0,0],[1.4,1,.6],{outline:.015,emit:t.buckleEmit}),n.addMirror(y(.05,.42,.04),t.accent,[.6,-1.3,.26],[0,0,-.12],1,{outline:.015}),n.addMirror(y(.04,.42,.04),t.accent,[.36,-2.2,.22],[0,0,.32],1,{outline:.015})}function ic(n,t,e,i,s,r){const o=new U(...t),a=new U(...e),c=a.clone().sub(o),l=c.length(),d=new ri().setFromQuaternion(new Is().setFromUnitVectors(new U(0,1,0),c.normalize()));n.add(q(s,i,l,10),r,o.add(a).multiplyScalar(.5).toArray(),[d.x,d.y,d.z])}function _s(n,t){const{shoulder:e,elbow:i,hand:s,r,sleeve:o,glove:a}=t;ic(n,e,i,r,r*.85,o),n.add(z(r*.86,10,8),o,i);const c=[0,1,2].map(m=>i[m]+(s[m]-i[m])*.6);ic(n,i,c,r*.85,r*.8,o),ic(n,c,s,r*.88,r*.72,a);const l=r*.85,[d,h,f]=s,u=Math.sign(d)||1;switch(t.pose){case"fist":n.add(z(l,10,8),a,s,[0,0,0],[1.1,1,1.05]),n.add(y(l*1.5,l*.5,l*.5),a,[d,h+l*.2,f+l*.75],[0,0,0],1,{outline:.02}),n.add(y(l*.9,l*.32,l*.4),a,[d-u*l*.2,h-l*.3,f+l*.85],[0,0,u*.15],1,{outline:.015});break;case"thumb":n.add(z(l,10,8),a,s,[0,0,0],[1.05,1.1,1]),n.add(y(l*1.4,l*.5,l*.5),a,[d,h-l*.1,f+l*.75],[0,0,0],1,{outline:.02}),n.add(q(l*.32,l*.38,l*1,8),a,[d+u*l*.35,h+l*1.15,f+l*.1],[0,0,u*-.15]);break;case"palmUp":n.add(y(l*1.7,l*.5,l*1.5),a,[d,h,f]),n.add(y(l*1.6,l*.4,l*.7),a,[d,h+l*.3,f+l*.95],[-.6,0,0],1,{outline:.02}),n.add(z(l*.35,8,6),a,[d-u*l*.95,h+l*.25,f+l*.2]);break;case"open":n.add(y(l*1.3,l*1.4,l*.55),a,[d,h,f],[0,u*.4,0]);for(let m=0;m<4;m++)n.add(y(l*.3,l*.9,l*.38),a,[d+(m-1.5)*l*.36,h-l*1.05,f+l*.1],[.2,u*.4,(m-1.5)*.12],1,{outline:.015});break}}function zh(n,t){const e=t.bulk;n.add(q(.3*e,.36*e,.5),t.skin,[0,-.72,-.05]),n.add(q(1.08*e,.72*e,1.5,14),t.suit,[0,-1.72,-.08],[0,0,0],[1,1,.62]),n.addMirror(z(.46*e,12,10),t.suit,[.42*e,-1.25,.28],[0,0,0],[1.1,.75,.55]),n.addMirror(y(.62*e,.32,.55),t.suit,[.48*e,-.86,-.08],[0,0,-.5]),n.addMirror(z(.44*e,12,10),t.shoulder,[1.02*e,-1.05,-.02]),n.add(y(1.1*e,.12,.45),t.suit2,[0,-2.42,.12],[0,0,0],1,{outline:.04}),n.addMirror(y(.08,.9,.06),t.suit2,[.25*e,-1.85,.36],[0,0,.12],1,{outline:.02})}function tf(n){return le(`p-${n}`,()=>{const t=new Yt;switch(n){case"max":{const e={skin:15247228,suit:14039594,suit2:2830138,shoulder:16102171,brow:3810324,bulk:1};zh(t,e),Ih(t,e),t.add(y(.84,.2,.78),12159594,[0,-.44,.02],[0,0,0],1,{outline:0}),t.add(y(.46,.12,.34),12159594,[0,-.6,.28],[0,0,0],1,{outline:0}),t.add(y(.95,.32,.9),3810324,[0,.62,-.05]),t.add(y(.7,.25,.4),3810324,[.05,.62,.38],[.3,0,.1]),t.add(y(1.05,.1,.9),2830138,[0,.42,0],[0,0,0],1,{outline:.03}),t.addMirror(_e(.16,.05),11581120,[.22,.48,.42],[.25,0,0]),t.addMirror(q(.13,.13,.05,12),4708095,[.22,.48,.43],[Math.PI/2+.25,0,0],1,{emit:.5,outline:0}),t.add(q(.035,.035,.42,6),8014372,[.3,-.42,.55],[0,0,1.35]),t.add(z(.045,6,4),16734751,[.5,-.38,.57],[0,0,0],1,{emit:1,outline:0}),t.add(_e(.45,.14),15918792,[0,-.9,0],[Math.PI/2,0,0],[1,1,.6]),t.add(y(.5,.22,.9),16777215,[-.75,-.95,-.3],[0,.5,.25]),t.add(y(.4,.18,.8),16777215,[-1.35,-.75,-.65],[0,.8,.45]),t.add(Ra("disc",Array.from({length:16},(i,s)=>[Math.cos(s/16*6.283)*.32,Math.sin(s/16*6.283)*.32]),.06),16102171,[0,-1.35,.6]),t.add(Ra("rocket",[[0,.24],[.08,.08],[.08,-.12],[.16,-.22],[-.16,-.22],[-.08,-.12],[-.08,.08]],.05),14039594,[0,-1.35,.64],[0,0,-.5],1,{outline:.02}),_s(t,{shoulder:[1.1,-1.15,-.02],elbow:[1.45,-1.78,-.15],hand:[.98,-2.25,.14],r:.22,sleeve:14039594,glove:3810324,pose:"fist"}),_s(t,{shoulder:[-1.1,-1.15,-.02],elbow:[-1.42,-1.82,.12],hand:[-.85,-1.5,.76],r:.22,sleeve:14039594,glove:3810324,pose:"thumb"});break}case"lia":{kh(t,{skin:16174512,suit:2761552,accent:9321433,buckle:16765498});const l=-.03;Kx(t,{skin:16174512,mask:3937904,lens:14861567,lips:13641788},l),t.add(z(.6,16,12),8073168,[0,l+.2,-.16],[0,0,0],[.98,.95,1]),t.add(z(.5,14,10),6169256,[0,l-.04,-.32],[0,0,0],[1.08,1.05,.8]),t.add(z(.3,14,10),8073168,[.1,l+.36,.3],[.2,0,-.35],[1.45,.5,.5]),t.add(z(.22,10,8),10178544,[-.22,l+.5,.26],[0,0,.2],[1.25,.55,.75],{outline:.03}),t.addMirror(z(.2,12,8),8073168,[.44,l-.1,.04],[0,0,.1],[.5,1.6,.75]);let d=.35,h=l+.18,f=-.75,u=.3;t.add(_e(.13,.04),16765498,[.3,l+.22,-.66],[0,.6,.4],1,{outline:.015});for(let x=0;x<5;x++)t.add(z(u,10,8),x%2?8073168:9321433,[d,h,f]),d+=.26,h-=.2,f-=.1,u*=.82;_s(t,{shoulder:[.82,-1.12,-.02],elbow:[.7,-1.62,.5],hand:[-.3,-1.5,.82],r:.14,sleeve:2761552,glove:9321433,pose:"fist"}),_s(t,{shoulder:[-.82,-1.12,-.02],elbow:[-.32,-1.38,.95],hand:[.32,-.58,.92],r:.14,sleeve:2761552,glove:9321433,pose:"fist"});const m=14132991,v=1.32,p=-.15,g=.3,M=.66;for(const[x,A]of[[.25,.035],[.5,.045],[.72,.035]])t.add(z(A,6,4),m,[.42+(v-M-.42)*x+.05,-.5+.2*x,.85-.45*x],[0,0,0],1,{emit:1,outline:0});const _={emit:1,outline:.012};t.add(_e(M,.035),m,[v,p,g],[0,0,0],1,_),t.add(_e(M*.8,.012),m,[v,p,g],[0,0,0],1,{emit:1,outline:0});for(let x=0;x<12;x++){const A=x/12*Math.PI*2,w=x%3?.05:.1,C=M*.9-w/2;t.add(y(.025,w,.025),m,[v+Math.sin(A)*C,p+Math.cos(A)*C,g],[0,0,-A],1,{emit:1,outline:0})}for(const[x,A,w]of[[-Math.PI/3,M*.45,.04],[0,M*.7,.028]])t.add(y(w,A,.03),m,[v+Math.sin(x)*A/2,p+Math.cos(x)*A/2,g+.01],[0,0,-x],1,_);t.add(z(.04,8,6),16777215,[v,p,g+.02],[0,0,0],1,_);break}case"anvil":{const e={skin:12157532,suit:5922662,suit2:3947580,shoulder:14252587,brow:2759184,bulk:1.35};zh(t,e),Ih(t,e,{eyes:!1,brows:!1}),t.add(y(.9,.42,.5),4860442,[0,-.5,.25]),t.add(bt(.3,.45,6),4860442,[0,-.85,.32],[Math.PI,0,0]),t.add(z(.62,16,12),8225935,[0,.2,-.04],[0,0,0],[1.02,.95,1.05]),t.add(y(1.1,.34,.25),8225935,[0,.1,.48]),t.add(y(.85,.09,.08),16726832,[0,.1,.62],[0,0,0],1,{emit:1,outline:.02}),t.add(y(.12,.5,.2),5922662,[0,.62,.32],[.3,0,0],1,{outline:.03}),t.addMirror(bt(.13,.7,8),15919824,[.72,.62,0],[0,0,-.9]),t.addMirror(bt(.06,.3,6),15919824,[1.05,.95,0],[0,0,-.2]),t.add(y(1.6,.9,.3),8225935,[0,-1.4,.45],[.1,0,0]),t.add(Ra("anvil",[[-.32,.12],[.36,.12],[.2,0],[.1,0],[.1,-.12],[.24,-.2],[-.24,-.2],[-.1,-.12],[-.1,0],[-.22,.02]],.06),2830138,[0,-1.35,.62],[.1,0,0],1.3,{outline:.02});for(let i=0;i<4;i++)t.addMirror(z(.06,6,4),2830138,[.95+Math.cos(i*.9)*.45,-.75+Math.sin(i*.9)*.1,.25],[0,0,0],1,{outline:0});t.addMirror(y(.8,.2,.8),12082975,[1.38,-.8,-.02],[0,0,-.35]),_s(t,{shoulder:[1.45,-1.25,0],elbow:[1.6,-1.95,.5],hand:[-.75,-1.85,1.1],r:.3,sleeve:5922662,glove:8225935,pose:"fist"}),_s(t,{shoulder:[-1.45,-1.25,0],elbow:[-1.6,-1.98,.5],hand:[.75,-2,1],r:.3,sleeve:5922662,glove:8225935,pose:"fist"});break}case"vex":{kh(t,{skin:15521992,suit:1911594,accent:2062954,buckle:10289003,buckleEmit:.8});const c=-.03;jx(t,{skin:15521992,iris:5234826,glow:10289003,mask:1318943},c);const l=3099216;t.add(z(.6,16,12),1845806,[0,c+.2,-.16],[0,0,0],[.97,.95,1]),t.add(z(.3,14,10),1845806,[.1,c+.36,.3],[.2,0,-.35],[1.45,.5,.5]),t.add(z(.24,12,8),1845806,[-.24,c+.4,.27],[.15,0,.3],[1.1,.45,.5]),t.add(z(.18,10,8),l,[-.2,c+.5,.27],[0,0,.2],[1.2,.5,.7],{outline:.02}),t.addMirror(z(.2,12,8),1845806,[.44,c-.14,.06],[0,0,.1],[.5,1.9,.75]),t.addMirror(z(.16,12,8),1845806,[.36,c-.62,.24],[0,0,.12],[.55,1.6,.6]),t.add(Hn("vexHood2",()=>new lr(.66,20,14,Math.PI/2+.95,Math.PI*2-1.9)),2062954,[0,c+.12,-.08],[0,0,0],[1,1.06,1.05]),t.add(bt(.36,.8,10),2062954,[0,c+.66,-.5],[-.9,0,0]),t.add(_e(.56,.06),1464653,[0,c+.04,.27],[0,0,0],[1,1.2,1]),t.addMirror(y(.03,.45,.03),10289003,[.55,c+.3,.14],[0,0,.3],1,{emit:.5,outline:0}),t.addMirror(bt(.6,1.3,10),1464653,[.78,-1.4,-.3],[0,0,.35]),t.add(z(.09,8,6),10289003,[0,-.86,.22],[0,0,0],1,{emit:1}),t.add(Ra("vexgem2",[[0,.22],[.14,0],[0,-.22],[-.14,0]],.05),10289003,[0,-1.08,.48],[0,0,0],1,{emit:.5}),t.add(z(.14,10,8),10289003,[1.2,.35,.2],[0,0,0],1,{emit:.9}),t.add(z(.1,10,8),10289003,[-1.2,.05,.1],[0,0,0],1,{emit:.9}),_s(t,{shoulder:[.82,-1.12,-.02],elbow:[1.12,-1.62,.16],hand:[.92,-1,.62],r:.14,sleeve:1911594,glove:1464653,pose:"palmUp"}),t.add(z(.13,10,8),10289003,[.92,-.8,.66],[0,0,0],1,{emit:.9}),_s(t,{shoulder:[-.82,-1.12,-.02],elbow:[-1.08,-1.65,.05],hand:[-.98,-2.12,.28],r:.14,sleeve:1911594,glove:1464653,pose:"open"});for(const[d,h,f]of[[-.06,-.26,.045],[.05,-.33,.032],[-.1,-.37,.028]])t.add(z(f,6,4),10289003,[-.98+d,-2.12+h,.34],[0,0,0],1,{emit:1,outline:0});break}}return t},{gloss:.5})}const il=[[12597547,2830138,16764735],[3050327,2830138,16742973],[3829721,1909555,16769354],[9425919,1911616,16738954],[14239772,2759188,16765498],[16726992,1708080,3860735],[5926794,1909555,16769354],[14263866,3811866,3860672],[6975352,2830138,16747039],[8045114,2767380,16732043],[15262416,9051935,3108784],[11754751,2364474,8387839],[10134445,1909555,16738847],[16102171,2830138,14829868],[2082992,924196,16726992],[10479816,1915443,14155627],[4864729,1314346,16769354],[12094010,3810324,4708095],[9080729,2830138,14829868],[9051935,1312778,16756768]];function Pa(n,t){if(n==="asteroid")return[9075306,5918276];if(n==="carrier"||n==="supply")return[15262416,16765498];const e=il[t%il.length];return[e[0],e[2]]}const Jx={drone:1,swooper:1.4,gunship:1.8,bomber:2.6,turret:1.1,sniper:1,kamikaze:.8,shieldbearer:1.3,splitter:1.1,ace:1.3,chaser:.9,blinker:1,phaser:1.3,prism:1,minelayer:1.4,shard:.9},La=n=>Hn(`oc${n}`,()=>new j0(n));function Dh(n,t,e,i,s){n.add(z(.7*t,12,10),e,[0,0,-.35*t],[0,0,0],[1,.7,1.3]),n.add(z(.45*t,10,8),i,[0,.05,.6*t]),n.addMirror(z(.14*t,8,6),s,[.2*t,.25*t,.85*t],[0,0,0],1,{emit:1,outline:.02});for(let r=0;r<3;r++)n.addMirror(y(1.1*t,.08,.1),i,[.65*t,-.1,(.3-r*.35)*t],[0,(r-1)*.4,-.3],1,{outline:.02});n.addMirror(y(.06,.06,.5*t),i,[.15*t,.1,1.05*t],[0,.4,0],1,{outline:.02});for(let r=0;r<3;r++)n.add(y(1.1*t,.05,.08),s,[0,.42*t,(-.1-r*.35)*t],[0,0,0],[.8-r*.15,1,1],{outline:0})}function Uh(n,t=0,e=1){const i=t%il.length,[s,r,o]=il[i],a=Jx[n],c=a?e:1;return le(`e-${n}-${i}-${c}`,()=>{const l=new Yt;switch(n){case"drone":{l.add(xi("drone",[[.12,-.6],[.3,-.3],[.3,.4],[.02,1]],8),s);const d=[[.2,.35],[1.05,-.55],[1.05,-.25],[.2,-.45]];l.add(Jt("drR",d,.1),r),l.add(Jt("drL",ii(d),.1),r),l.addMirror(y(.06,.04,.5),o,[.7,.07,-.15],[0,.7,0],1,{outline:.02}),l.add(z(.15,10,8),o,[0,.2,.25],[0,0,0],[1,.8,1.4],{emit:.7}),l.addMirror(y(.06,.35,.3),r,[.15,.22,-.5],[0,0,.3]),l.add(yt(.12,.12,.05,8),16738847,[0,0,-.62],[0,0,0],1,{emit:1,outline:0});break}case"swooper":{l.add(z(.45,12,10),s,[0,0,0],[0,0,0],[1,.8,1.2]);const d=[[.3,-.3],[1.5,-.8],[1.15,0],[1.5,.45],[.3,.3]];l.add(Jt("swR",d,.1),r),l.add(Jt("swL",ii(d),.1),r),l.addMirror(bt(.08,.35,6),o,[1.5,.05,-.85],[-Math.PI/2,0,0]),l.add(z(.17,10,8),o,[0,.18,.38],[0,0,0],1,{emit:.8}),l.addMirror(z(.08,6,4),16726832,[.18,.28,.25],[0,0,0],1,{emit:1,outline:0});break}case"gunship":{l.add(y(1.6,.7,2.4),s),l.add(y(1,.45,1),r,[0,.5,-.3]),l.add(y(.8,.25,.5),4708095,[0,.35,.95],[0,0,0],1,{emit:.3}),l.add(y(3.6,.2,.8),r,[0,0,-.2]),l.add(y(1.7,.08,.3),o,[0,.36,-.8],[0,0,0],1,{outline:.03});for(const d of[1.6,-1.6])l.add(q(.48,.48,.25,14),o,[d,.2,-.2]),l.add(q(.3,.3,.3,12),r,[d,.38,-.2]),l.add(yt(.1,.1,1,8),r,[d-.12,.38,.5]),l.add(yt(.1,.1,1,8),r,[d+.12,.38,.5]);for(let d=0;d<4;d++)l.addMirror(z(.05,6,4),r,[.7,.37,-.9+d*.55],[0,0,0],1,{outline:0});l.add(y(.4,.25,.4),o,[0,.15,1.25],[0,0,0],1,{emit:.6});break}case"carrier":case"supply":{const d=n==="supply"?2830138:15262416,h=n==="supply"?16765498:16102171;l.add(z(.9,14,10),d,[0,0,0],[0,0,0],[1,.8,1.5]),l.add(y(1,.75,1),h,[0,-.72,0]),l.add(y(1.05,.12,.2),r,[0,-.72,0],[0,0,0],1,{outline:.02}),l.add(y(.2,.6,.6),s,[0,.6,-1]),l.add(y(1.4,.1,.4),s,[0,0,-1.25]),n==="supply"&&l.add(er(.4,.05),16765498,[0,.72,.1],[0,0,0],1,{emit:.8});break}case"bomber":{l.add(xi("bomber",[[.4,-2.2],[.62,-1.4],[.62,1.4],[.3,2.4],[.02,2.9]],12),s),l.add(y(6.6,.22,1.3),r,[0,0,-.2]),l.add(y(6.6,.05,.2),o,[0,.13,.35],[0,0,0],1,{outline:.02});for(const d of[1.4,2.6,-1.4,-2.6])l.add(yt(.25,.25,1.1,10),o,[d,-.15,.1]),l.add(yt(.16,.16,.05,8),16738847,[d,-.15,-.47],[0,0,0],1,{emit:1,outline:0});l.add(y(2.4,.15,.7),r,[0,.1,-1.9]),l.add(y(.15,.8,.7),s,[0,.45,-1.9]),l.add(z(.3,10,8),4708095,[0,.38,1.6],[0,0,0],[1,.7,1.6],{emit:.3}),l.add(q(.3,.3,.2,10),r,[0,.6,.3]),l.add(yt(.08,.08,.8,6),r,[0,.72,.65]);break}case"turret":{l.add(q(1,1.2,.5,8),r),l.add(q(1.05,1.05,.08,8),o,[0,.2,0],[0,0,0],1,{outline:.03}),l.add(z(.6,12,10),s,[0,.35,0]),l.addMirror(yt(.13,.13,1.3,8),r,[.2,.45,.75]),l.add(z(.18,8,6),16726832,[0,.75,.3],[0,0,0],1,{emit:1});break}case"shard":{l.add(La(.6),s,[0,0,0],[0,0,0],[1,.8,1.2],{emit:.25});for(let d=0;d<4;d++){const h=d/4*Math.PI*2+Math.PI/4;l.add(bt(.14,.9,5),o,[Math.cos(h)*.75,0,Math.sin(h)*.75],[Math.PI/2,0,-h+Math.PI/2],1,{outline:.03})}l.add(_e(.62,.07),r,[0,0,0],[Math.PI/2,0,0]),l.add(z(.16,8,6),16777215,[0,.35,.2],[0,0,0],1,{emit:1,outline:.02});break}case"sniper":{l.add(y(.8,.5,1.3),s,[0,0,-.3]),l.add(yt(.1,.12,2.4,8),r,[0,.1,1.2]),l.add(yt(.16,.16,.3,8),o,[0,.1,2.35],[0,0,0],1,{outline:.03}),l.add(yt(.15,.15,.6,10),r,[0,.42,.1]),l.add(z(.12,8,6),16722506,[0,.42,.42],[0,0,0],1,{emit:1,outline:.02});const d=[[.35,-.6],[1.3,-.95],[1.3,-.7],[.35,.1]];l.add(Jt("snR",d,.08),r),l.add(Jt("snL",ii(d),.08),r),l.addMirror(y(.06,.3,.4),o,[1.3,.12,-.8],[0,0,0],1,{outline:.02});break}case"kamikaze":{l.add(xi("kami",[[.05,-.9],[.3,-.7],[.36,.2],[.25,.7],[.02,1.15]],10),s),l.add(yt(.37,.37,.15,10),o,[0,0,.35],[0,0,0],1,{outline:.03}),l.add(bi(.26,.45,10),16765498,[0,0,1.2],[0,Math.PI,0],1,{emit:.7});for(let d=0;d<4;d++){const h=d/4*Math.PI*2;l.add(y(.05,.4,.45),r,[Math.cos(h)*.38,Math.sin(h)*.38,-.7],[0,0,h],1,{outline:.02})}l.add(yt(.2,.2,.05,8),16738847,[0,0,-.92],[0,0,0],1,{emit:1,outline:0});break}case"minelayer":{l.add(y(1.4,.6,1.8),s),l.add(y(2.8,.18,.8),r,[0,0,.2]),l.add(y(1,.5,.8),o,[0,.3,-.8]),l.add(y(.9,.1,.6),r,[0,.58,-.8],[0,0,0],1,{outline:.02}),l.addMirror(yt(.22,.22,1,8),r,[1.35,-.1,.1]),l.add(y(.7,.3,.5),4708095,[0,.3,.75],[0,0,0],1,{emit:.3});break}case"mine":{l.add(z(.5,12,10),r);for(let d=0;d<6;d++){const h=d/6*Math.PI*2;l.add(bt(.12,.4,5),s,[Math.cos(h)*.55,0,Math.sin(h)*.55],[Math.PI/2,0,-h+Math.PI/2],1,{outline:.02})}l.add(bt(.12,.4,5),s,[0,.55,0],[0,0,0],1,{outline:.02}),l.add(z(.14,8,6),16722506,[0,.45,.2],[0,0,0],1,{emit:1,outline:.02});break}case"shieldbearer":{l.add(y(1.2,.6,1.4),s,[0,0,-.4]),l.add(y(.7,.4,.7),r,[0,.45,-.6]);for(let d=-2;d<=2;d++)l.add(y(.56,.7,.16),o,[d*.52,.1,.75-Math.abs(d)*.12],[0,-d*.22,0],1,{outline:.03});l.add(y(2.7,.08,.12),8387839,[0,.47,.72],[0,0,0],1,{emit:1,outline:0}),l.addMirror(yt(.12,.12,.7,8),r,[.45,-.1,-1.1]);break}case"traincar":{l.add(y(1.9,.9,3),r),l.add(y(1.7,.15,2.8),s,[0,.52,0]);for(const d of[-1,1])l.addMirror(q(.32,.32,.2,10),1710624,[1,-.3,d],[0,0,Math.PI/2]);l.add(q(.6,.7,.4,10),s,[0,.8,0]),l.add(z(.45,10,8),o,[0,1.05,0],[0,0,0],[1,.7,1]),l.addMirror(yt(.09,.09,1.1,6),r,[.15,1.1,.65]),l.add(y(1.95,.12,.15),o,[0,.2,1.45],[0,0,0],1,{outline:.02}),l.add(y(1.95,.12,.15),o,[0,.2,-1.45],[0,0,0],1,{outline:.02});break}case"splitter":Dh(l,1,s,r,o);break;case"bug":Dh(l,.6,s,r,o);break;case"pod":{l.add(z(.8,14,10),15259808,[0,0,0],[0,0,0],[.9,.9,1.15]);for(let d=0;d<5;d++)l.add(z(.12,6,4),s,[Math.cos(d*1.3)*.55,.45,Math.sin(d*1.3)*.7],[0,0,0],1,{outline:.02});l.add(z(.35,10,8),o,[0,.5,0],[0,0,0],[1,.5,1],{emit:.6,outline:.02});break}case"ace":{l.add(xi("ace",[[.08,-1.1],[.3,-.8],[.34,.2],[.2,.9],[.02,1.45]],10),s);const d=[[.25,-.5],[1.6,.2],[1.55,.45],[.25,.4]];l.add(Jt("acR",d,.08),s),l.add(Jt("acL",ii(d),.08),s),l.addMirror(y(1.2,.04,.12),r,[.9,.05,.1],[0,.45,0],1,{outline:.02}),l.addMirror(y(.06,.45,.4),r,[.25,.25,-.85],[0,0,.3]),l.add(z(.18,10,8),o,[0,.25,.35],[0,0,0],[.8,.7,1.8],{emit:.4}),l.add(y(.1,.03,1.8),r,[0,.34,-.1],[0,0,0],1,{outline:.015});break}case"prism":{l.add(La(.8),s,[0,.1,0],[0,0,0],[1,1.2,1],{emit:.35}),l.add(_e(1,.08),r,[0,0,0],[Math.PI/2,0,0]);for(let d=0;d<3;d++){const h=d/3*Math.PI*2;l.add(La(.2),o,[Math.cos(h)*1,0,Math.sin(h)*1],[0,0,0],1,{emit:.8,outline:.02})}break}case"asteroid":{l.add(Mn(1,1),9075306,[0,0,0],[.3,.5,0],[1,.8,.95]);for(let d=0;d<4;d++)l.add(z(.22,6,4),5918276,[Math.cos(d*1.7)*.6,.55,Math.sin(d*1.7)*.55],[0,0,0],[1,.4,1],{outline:0});l.add(Mn(.35,0),6970964,[.7,.2,-.4]);break}case"chaser":{l.add(xi("chaser",[[.1,-.9],[.32,-.6],[.3,.4],[.02,1]],8),s),l.add(yt(.3,.34,.5,10),r,[0,0,-.9]),l.add(yt(.22,.22,.05,10),16738847,[0,0,-1.16],[0,0,0],1,{emit:1,outline:0}),l.addMirror(y(.7,.08,.35),r,[.5,0,-.2],[0,.4,0]),l.addMirror(bt(.08,.35,5),o,[.85,0,.05],[Math.PI/2,0,0],1,{outline:.02}),l.add(z(.14,8,6),o,[0,.25,.2],[0,0,0],[1,.8,1.6],{emit:.7});break}case"node":{l.add(q(.55,.7,.4,8),r),l.add(q(.3,.4,.5,8),s,[0,.4,0]),l.add(z(.32,10,8),o,[0,.8,0],[0,0,0],1,{emit:1}),l.addMirror(y(.25,.15,.15),o,[.6,.25,0],[0,0,0],1,{emit:.6,outline:.02});break}case"phaser":{l.add(xi("ghost",[[.1,-1.3],[.55,-1],[.6,.6],[.3,1.3],[.02,1.6]],10),s,[0,0,0],[0,0,0],[1,.6,1]),l.add(y(.06,1.2,.06),r,[0,.7,.2],[0,0,0],1,{outline:.02}),l.add(y(1.4,.9,.05),15921126,[0,.8,.2],[.15,0,0],1,{outline:.03}),l.add(y(1,.6,.05),15921126,[0,.6,-.7],[.15,0,0],1,{outline:.03}),l.addMirror(z(.12,8,6),o,[.5,.25,.9],[0,0,0],1,{emit:1,outline:.02}),l.add(z(.12,8,6),o,[0,.3,-1.2],[0,0,0],1,{emit:1,outline:.02});break}case"blinker":{l.add(_e(.75,.16),r,[0,0,0],[Math.PI/2,0,0]),l.add(z(.45,12,10),s,[0,.05,0]),l.add(z(.2,8,6),o,[0,.2,.3],[0,0,0],1,{emit:1,outline:.02});for(let d=0;d<3;d++){const h=d/3*Math.PI*2+Math.PI/2;l.add(y(.15,.1,.7),o,[Math.cos(h)*1,0,Math.sin(h)*1],[0,-h,0],1,{emit:.5,outline:.02})}break}case"healer":{l.add(z(.6,12,10),15921126,[0,0,0],[0,0,0],[1,.75,1]),l.add(y(.7,.1,.22),3854442,[0,.45,0],[0,0,0],1,{emit:.9,outline:.02}),l.add(y(.22,.1,.7),3854442,[0,.45,0],[0,0,0],1,{emit:.9,outline:.02}),l.add(_e(.95,.07),s,[0,0,0],[Math.PI/2,0,0]),l.addMirror(y(.35,.08,.08),r,[.78,0,0]);break}case"mothership":{l.add(y(4.2,.9,4.6),s),l.add(y(2.4,.7,2.6),r,[0,.7,-.6]),l.add(y(1.6,.3,.6),4708095,[0,.95,.75],[0,0,0],1,{emit:.35}),l.add(y(6,.25,1.6),r,[0,0,-.4]);for(const d of[1.3,-1.3])l.add(y(1,.1,1.6),1312778,[d,.46,1.3],[0,0,0],1,{outline:.02}),l.add(y(1.05,.06,.1),o,[d,.5,2.1],[0,0,0],1,{emit:.8,outline:0});for(const d of[2.6,-2.6])l.add(q(.45,.5,.35,10),o,[d,.3,-.4]),l.add(yt(.1,.1,1,6),r,[d,.45,.3]);for(let d=0;d<5;d++)l.addMirror(z(.07,6,4),r,[1.9,.47,-2+d*.9],[0,0,0],1,{outline:0});break}case"pylon":{l.add(y(1.7,.4,1.7),r),l.add(y(1.1,1.6,1.1),s,[0,1,0],[0,Math.PI/4,0]),l.add(bt(.75,1.3,4),s,[0,2.45,0],[0,Math.PI/4,0]),l.add(La(.45),o,[0,3.3,0],[0,0,0],1,{emit:1});for(let d=0;d<4;d++)l.add(y(.12,1.2,.05),o,[Math.cos(d*1.571)*.56,1,Math.sin(d*1.571)*.56],[0,-d*1.571,0],1,{emit:.6,outline:0});break}case"msFlak":{l.add(q(1,1.15,.4,10),r),l.add(q(1.05,1.05,.08,10),o,[0,.22,0],[0,0,0],1,{outline:.03}),l.add(z(.6,12,10),s,[0,.4,0],[0,0,0],[1,.7,1]),l.addMirror(yt(.1,.1,1.4,8),r,[.22,.5,.75]),l.addMirror(yt(.14,.14,.2,8),o,[.22,.5,1.45],[0,0,0],1,{outline:.02}),l.add(z(.14,8,6),16726832,[0,.82,.25],[0,0,0],1,{emit:1});break}case"msMissile":{l.add(y(1.9,.5,1.7),r),l.add(y(1.5,.75,1.2),s,[0,.6,.05],[-.3,0,0]);for(let d=0;d<6;d++){const h=(d%3-1)*.42,f=Math.floor(d/3)*.42-.1;l.add(z(.15,8,6),1314842,[h,1.02-f*.3,f+.2],[0,0,0],[1,.4,1],{outline:0}),l.add(z(.07,6,4),16738847,[h,1.06-f*.3,f+.2],[0,0,0],1,{emit:1,outline:0})}l.addMirror(y(.1,.5,1),o,[.78,.6,.05],[-.3,0,0],1,{outline:.02});break}case"msCannon":{l.add(q(1.4,1.6,.5,12),r),l.add(y(1.9,.95,2.1),s,[0,.6,0]),l.add(y(2,.15,.4),o,[0,1.1,-.6],[0,0,0],1,{outline:.03}),l.add(yt(.26,.32,3,10),r,[0,.7,2.3]),l.add(y(.75,.55,.45),o,[0,.7,3.85]),l.add(z(.16,8,6),16726832,[0,1.15,.6],[0,0,0],1,{emit:1});break}case"msLaser":{l.add(q(1.2,1.35,.45,6),r);for(let d=0;d<3;d++){const h=d/3*Math.PI*2;l.add(bt(.22,1.3,5),o,[Math.cos(h)*.85,.85,Math.sin(h)*.85])}l.add(_e(.62,.08),s,[0,.55,0],[Math.PI/2,0,0]),l.add(z(.48,14,10),3860735,[0,.75,0],[0,0,0],1,{emit:.9});break}case"msBridge":{l.add(y(5.2,1.4,3.4),s),l.add(y(5.4,.18,3.6),o,[0,.75,0],[0,0,0],1,{outline:.03}),l.add(y(3.8,1.3,2.4),r,[0,1.5,-.2]),l.add(y(3.9,.38,.12),3860735,[0,1.7,1.02],[0,0,0],1,{emit:.9,outline:.02}),l.add(y(4.6,.3,.12),3860735,[0,.3,1.72],[0,0,0],1,{emit:.7,outline:.02}),l.addMirror(y(1,.9,2.6),r,[3,.4,0]),l.add(q(.08,.08,1.8,6),r,[1.2,3,-.6]),l.add(z(.6,12,8),o,[-.9,2.4,-.6],[.5,0,0],[1,.3,1]),l.addMirror(z(.13,8,6),16726832,[2.5,.95,1.6],[0,0,0],1,{emit:1}),l.add(z(.12,8,6),16726832,[1.2,3.9,-.6],[0,0,0],1,{emit:1});break}}return a&&c>=2&&l.addMirror(y(.16,.22,.7*a),o,[a*.5,.28,-.1],[0,0,.25],1,{outline:.03}),a&&c>=3&&l.addMirror(bt(.1*a+.04,.55*a,6),15921126,[a*.38,.05,.75*a],[Math.PI/2,0,0],1,{outline:.03}),a&&c>=4&&(l.add(z(.16*a+.06,8,6),16722506,[0,.55,-.2*a],[0,0,0],1,{emit:1,outline:.03}),l.addMirror(bt(.08*a+.04,.5*a,6),r,[a*.3,.55,-.35*a],[-.5,0,-.5],1,{outline:.03})),l},{gloss:.5})}function Qx(n){if(n===0){const l=le("boss0",()=>{const h=new Yt;h.add(y(5,1.4,4),11884075),h.add(y(3,1,2),14266986,[0,.9,-.6]),h.add(y(2,.3,.3),16765498,[0,1.45,.4],[0,0,0],1,{outline:.03}),h.add(y(9,.4,2),2830138,[0,0,-.5]);for(const f of[3.6,-3.6])h.add(q(.9,1.1,.6,12),14266986,[f,.4,-.5]),h.add(yt(.2,.2,1.6,8),2830138,[f-.25,.6,.6]),h.add(yt(.2,.2,1.6,8),2830138,[f+.25,.6,.6]),h.add(yt(.6,.6,1.6,12),2830138,[f,-.4,-1.6]),h.add(yt(.4,.4,.05,10),16738847,[f,-.4,-2.42],[0,0,0],1,{emit:1,outline:0});h.add(yt(.35,.35,2,10),2830138,[0,.2,2.6]),h.add(y(1.4,.6,.8),16764735,[0,.5,1.6],[0,0,0],1,{emit:.6}),h.add(y(.3,1.2,.3),2830138,[1,1.6,-1.2]),h.add(y(.3,1.6,.3),2830138,[-1,1.7,-1.2]),h.add(z(.55,12,10),15919824,[0,.72,1],[0,0,0],[1,.4,1],{outline:.03}),h.addMirror(z(.14,8,6),1709088,[.2,.92,1.1],[0,0,0],1,{outline:0});for(let f=0;f<6;f++)h.addMirror(z(.07,6,4),2830138,[2.3,.72,-1.6+f*.6],[0,0,0],1,{outline:0});return h},{gloss:.4}),d=new be;return $x(d,y(2,.1,.4),14829868,[0,0,0]),d.position.set(0,1.6,-.8),d.userData.spin=2,l.add(d),l}if(n===1)return le("boss1",()=>{const l=new Yt;l.add(z(2.4,20,14),3108784,[0,0,0],[0,0,0],[1.3,.8,2]),l.add(z(2,18,12),15262416,[0,-.6,.6],[0,0,0],[1.2,.5,1.7]);const d=[[.5,-1],[4.5,.4],[4.2,1.4],[.5,1.2]];l.add(Jt("whFR",d,.3),1909555,[2.2,-.2,0]),l.add(Jt("whFL",ii(d),.3),1909555,[-2.2,-.2,0]),l.addMirror(yt(.5,.5,1.8,12),16742973,[4.8,0,.8]),l.addMirror(yt(.3,.3,.1,10),16769354,[4.8,0,1.75],[0,0,0],1,{emit:1,outline:0}),l.add(y(2,1,1.5),1909555,[0,1.8,-1]),l.add(y(1.6,.3,.4),4708095,[0,2,-.3],[0,0,0],1,{emit:.5}),l.add(y(.3,1.8,2),3108784,[0,1.2,-3.8]),l.addMirror(z(.38,10,8),16769354,[1,.3,4.4],[0,0,0],1,{emit:.9}),l.add(y(1.8,.25,.8),1909555,[0,-.3,4.6]);for(let h=0;h<7;h++)l.add(bt(.12,.35,4),16777215,[-.75+h*.25,-.15,4.95],[Math.PI,0,0],1,{outline:.015});for(let h=0;h<5;h++)l.addMirror(y(.08,.04,.9),1723008,[1.5+h*.2,1-h*.12,1],[0,0,0],1,{outline:0});return l},{gloss:.8});const t=9080729,e=14829868,i=2366003,s=le("boss2",()=>{const o=new Yt;o.add(z(1.6,18,14),16726992,[0,0,0],[0,0,0],1,{emit:.35}),o.add(_e(3.2,.45),t,[0,0,0],[Math.PI/2,0,0]);for(let a=0;a<8;a++){const c=a/8*Math.PI*2;o.add(y(.5,.6,.5),i,[Math.cos(c)*3.2,.3,Math.sin(c)*3.2],[0,-c,0])}return o.add(y(2,1.4,1.6),i,[0,1.3,-.4]),o.addMirror(z(.3,10,8),10289003,[.6,1.6,.45],[0,0,0],1,{emit:1}),o.add(y(1.2,.12,.1),e,[0,1.25,.42],[0,0,0],1,{emit:.6,outline:.02}),o},{gloss:.6}),r=new be;for(let o=0;o<4;o++){const a=le("boss2arm",()=>{const c=new Yt;return c.add(y(.8,.8,2.6),e,[0,0,4.2]),c.add(y(.85,.2,.3),16765498,[0,.42,3.6],[0,0,0],1,{outline:.03}),c.add(q(.5,.5,.9,12),i,[0,.4,5.4]),c.add(z(.25,8,6),16726992,[0,.4,5.9],[0,0,0],1,{emit:1}),c},{gloss:.6});a.rotation.y=o/4*Math.PI*2,r.add(a)}return r.userData.spin=.8,s.add(r),s}function tM(n){const t={P:14829868,M:3116e3,B:16102171,medal:16769354,life:3854442,perk:16747039};return le(`pk-${n}`,()=>{const e=new Yt;if(n==="medal")e.add(q(.45,.45,.14,14),t.medal,[0,0,0],[Math.PI/2,0,0],1,{emit:.35}),e.add(er(.28,.05),14829868,[0,0,.08],[Math.PI/2,0,0],1,{outline:.02});else if(n==="perk")e.add(er(.7,.3),t.perk,[0,0,0],[Math.PI/2,0,0],1,{emit:.5}),e.add(er(.38,.32),16774048,[0,0,.02],[Math.PI/2,0,0],1,{emit:1,outline:.02});else{e.add(y(.85,.85,.85),t[n],[0,0,0],[0,0,0],1,{emit:.25});const i=.1,s=(r,o,a,c)=>e.add(y(a,c,.06),16777215,[r,o,.45],[0,0,0],1,{outline:0,emit:.4});n==="P"&&(s(-.12,0,i,.55),s(.04,.22,.3,i),s(.04,.02,.3,i),s(.17,.12,i,.25)),n==="M"&&(s(-.2,0,i,.55),s(.2,0,i,.55),s(-.08,.12,i,.3),s(.08,.12,i,.3)),n==="B"&&(s(-.15,0,i,.55),s(.02,.23,.3,i),s(.02,0,.3,i),s(.02,-.23,.3,i),s(.17,.11,i,.2),s(.17,-.11,i,.2)),n==="life"&&(s(0,0,i,.5),s(0,0,.5,i))}return e})}const sc=-26,qn=150,Ji=34,Ia=360,eM=3,lt=Math.random,zt=(n,t)=>n+lt()*(t-n),Xe=n=>n[Math.floor(lt()*n.length)],nM=.14;function I(n,t,e,i,s=1,r=[0,0,0],o=0,a=nM){n.add(t,e,i,r,s,{emit:o,outline:a})}function Ya(n,t,e,i,s,r,o=.09){for(let a=0;a<e;a++){const c=zt(i,s);I(n,z(1,10,8),t,[a*r-e*r*.5,lt()*c*.3,(lt()-.5)*r*1.2],c,[0,0,0],0,o)}}function Un(n,t,e,i,s=0,r=0){return Array.from({length:n},()=>({x:(lt()-.5)*Ji*2,z:(lt()-.5)*qn,sx:zt(...e),sz:zt(...i),ry:(lt()-.5)*s,y:r,color:Array.isArray(t)?Xe(t):t}))}function ui(n,t,e,i,s,r=0,o=.05){const a=Math.round(qn/s),c=qn/a;return Array.from({length:a},(l,d)=>({x:n,z:-qn/2+d*c,sx:t,sz:i,y:r,sy:o,color:e}))}function ka(n,t,e,i,s=0,r=0){const o=Math.round(qn/n),a=qn/o;return Array.from({length:o},(c,l)=>({x:s,z:-qn/2+l*a,sx:t,sz:e,y:r,color:i}))}const iM={desert:{ground:14921830,sky:15909498,stripes:()=>Un(14,13209162,[1.6,1.6],[40,70],.6),count:24,decos:[{key:"mesa",w:.45,make:n=>{const t=zt(2,6),e=zt(2,5);I(n,q(1,1.15,1,7),12938036,[0,t/2,0],[e,t,e],[0,0,0],0,.18),I(n,q(.98,1,.4,7),15245914,[0,t+.2,0],[e,1,e],[0,0,0],0,.12)}},{key:"rocks",w:.3,make:n=>{for(let t=0;t<3;t++)I(n,z(1,6,5),10120010,[lt()*3,.3,lt()*3],zt(.8,1.8),[0,0,0],0,.15)}},{key:"wreck",w:.15,make:n=>{I(n,y(3,1.2,1.8),7309882,[0,.6,0],1,[0,0,.2],0,.15),I(n,y(1.4,.8,1.6),4872746,[.6,1.4,0],1,[0,0,.2],0,.15)}},{key:"bones",w:.1,make:n=>{for(let t=0;t<5;t++)I(n,y(.4,.4,3.5),15919824,[t*1.2-2.4,.6,0],1,[0,0,0],0,.12);I(n,y(6,.5,.5),15919824,[0,.5,0],1,[0,0,0],0,.12)}}],mid:{kind:"cloud",n:7}},ocean:{ground:2793430,sky:8377328,stripes:()=>Un(14,8378613,[3,8],[.4,.4]),count:16,decos:[{key:"island",w:.7,make:n=>{const t=zt(3,7);I(n,z(1,12,8),15783050,[0,-t*.6,0],[t,t*.5,t],[0,0,0],0,.18),I(n,z(1,10,8),3842122,[0,-t*.2,0],[t*.7,t*.42,t*.7],[0,0,0],0,.15);for(let e=0;e<3;e++){const i=(lt()-.5)*t,s=(lt()-.5)*t;I(n,q(.15,.2,2,5),9067050,[i,1,s],1,[0,0,0],0,.08),I(n,z(.9,6,4),3050298,[i,2.1,s],[1,.4,1],[0,0,0],0,.1)}}},{key:"ship",w:.3,make:n=>{I(n,y(2.2,1,7),11884075,[0,.3,0],1,[0,0,0],0,.15),I(n,y(1.6,1.4,1.6),15262416,[0,1.4,2],1,[0,0,0],0,.12),I(n,q(.3,.3,1.5,8),2830138,[0,2.3,1.4],1,[0,0,0],0,.1)}}],mid:{kind:"cloud",n:7}},factory:{ground:5920096,sky:9075343,stripes:()=>Un(14,3946562,[5,5],[2,2]),count:24,decos:[{key:"block",w:.5,make:n=>{const t=zt(2,8);I(n,y(1,1,1),Xe([14252587,9080729,11884075,6258586]),[0,t/2,0],[zt(3,6),t,zt(3,6)],[0,0,0],0,.15),I(n,y(1.4,.6,1.4),3946562,[.5,t+.3,.3],1,[0,0,0],0,.1)}},{key:"chimney",w:.25,make:n=>{const t=zt(6,11);I(n,q(.7,1,1,10),11029034,[0,t/2,0],[1,t,1],[0,0,0],0,.14),I(n,q(.75,.75,.5,10),15919824,[0,t*.8,0],1,[0,0,0],0,.1);for(let e=0;e<3;e++)I(n,z(.9+e*.3,7,5),10132128,[e*.6,t+.8+e*1.1,-e*.8],1,[0,0,0],0,.1)}},{key:"acid",w:.25,make:n=>{I(n,q(3,3,.2,14),10288954,[0,.1,0],1,[0,0,0],.25,.18),I(n,q(3.4,3.4,.4,14),3946562,[0,0,0],1,[0,0,0],0,0)}}],mid:{kind:"cloud",n:7}},snow:{ground:15266554,sky:12575735,stripes:()=>Un(18,[9091288,11128294],[.25,.45],[4,12],3),count:24,decos:[{key:"pines",w:.4,make:n=>{const t=2+Math.floor(lt()*2);for(let e=0;e<t;e++){const i=e*2.4-t,s=(lt()-.5)*2.5,r=zt(.8,1.3);I(n,q(.25,.3,1.2,6),6965802,[i,.6*r,s],r),I(n,bt(1.6,2.2,7),3107402,[i,2*r,s],r),I(n,bt(1.2,1.8,7),3832405,[i,3.2*r,s],r),I(n,bt(.8,1.4,7),3107402,[i,4.2*r,s],r),I(n,bt(.5,.7,7),16777215,[i,4.75*r,s],r,[0,0,0],0,.08),I(n,bt(1.62,.5,7),16777215,[i,2.95*r,s],r,[0,0,0],0,.06)}}},{key:"icerocks",w:.25,make:n=>{for(let t=0;t<3;t++)I(n,Mn(1,0),Xe([11065584,13167866,9225446]),[t*1.8-1.8,.4,(lt()-.5)*2],[zt(.9,1.6),zt(1,2.2),zt(.9,1.6)],[lt(),lt(),lt()],.12)}},{key:"lake",w:.15,make:n=>{const t=zt(3,5);I(n,q(1,1,.2,16),10475253,[0,.1,0],[t,1,t*.8],[0,0,0],.15,.16);for(let e=0;e<3;e++)I(n,y(.12,.05,t*.9),16777215,[(lt()-.5)*t,.22,0],1,[0,lt()*3,0],0,0)}},{key:"frozentank",w:.1,make:n=>{I(n,y(3.2,1.2,2),5925450,[0,.6,0],1,[0,0,.15]),I(n,y(1.6,.8,1.4),4872762,[.3,1.45,0],1,[0,0,.15]),I(n,y(2.2,.25,.25),3820074,[-1.4,1.5,0],1,[0,0,.25]),I(n,y(3.4,.35,2.2),16777215,[0,1.3,0],1,[0,0,.15],0,.08)}},{key:"spires",w:.1,make:n=>{for(let t=0;t<4;t++)I(n,bt(.7,1,6),10478847,[(lt()-.5)*3,0,(lt()-.5)*3],[1,zt(3,7),1],[(lt()-.5)*.4,0,(lt()-.5)*.4],.3)}}],mid:{kind:"cloud",n:7}},volcano:{ground:3811882,sky:5906456,glow:1.8,stripes:()=>Un(18,[16734751,16747039],[.4,.8],[6,16],3),count:22,decos:[{key:"cone",w:.25,make:n=>{const t=zt(5,9),e=zt(4,6);I(n,bt(1,1,9),4860452,[0,t/2,0],[e,t,e],[0,0,0],0,.18),I(n,q(1,1,.3,9),16738847,[0,t*.86,0],[e*.22,1,e*.22],[0,0,0],1,.06);for(let i=0;i<3;i++){const s=lt()*Math.PI*2;I(n,y(.35,.1,t*.6),16742943,[Math.cos(s)*e*.35,t*.5,Math.sin(s)*e*.35],1,[.9,-s+Math.PI/2,0],.9,.04)}}},{key:"basalt",w:.3,make:n=>{for(let t=0;t<5;t++){const e=zt(1.5,5),i=(lt()-.5)*3,s=(lt()-.5)*3;I(n,q(.6,.6,1,6),3814456,[i,e/2,s],[1,e,1]),I(n,q(.62,.62,.1,6),6969944,[i,e,s],1,[0,0,0],0,.04)}}},{key:"pool",w:.25,make:n=>{const t=zt(2.2,3.6);I(n,q(1,1,.4,12),2365978,[0,0,0],[t*1.15,1,t*1.15],[0,0,0],0,0),I(n,q(1,1,.2,12),16742943,[0,.15,0],[t,1,t],[0,0,0],.9,.12),I(n,z(.4,8,6),16765498,[t*.3,.3,0],1,[0,0,0],1,0)}},{key:"deadtrees",w:.2,make:n=>{for(let t=0;t<3;t++){const e=t*2-2,i=zt(2.5,4);I(n,q(.15,.3,i,5),2760218,[e,i/2,0],1,[0,0,(lt()-.5)*.3]),I(n,y(1.4,.15,.15),2760218,[e+.4,i*.7,0],1,[0,0,.6]),I(n,z(.12,6,4),16747039,[e,i*.3,.3],1,[0,0,0],1,0)}}}],mid:{kind:"cloud",n:6,color:4864570}},neon:{ground:1317427,sky:724772,glow:2.2,stripes:()=>[...[-32,-24,-16,-8,0,8,16,24,32].flatMap((n,t)=>ui(n,.25,t%2?16726992:3860735,30.2,30)),...ka(15,Ji*2.2,.25,10116351)],count:26,decos:[{key:"tower",w:.45,make:n=>{const t=zt(4,11),e=zt(2.5,4),i=zt(2.5,4);I(n,y(1,1,1),Xe([2304586,2761284,1845818]),[0,t/2,0],[e,t,i]);const s=[16769354,3860735,16732120];for(let r=1;r<t-.6;r+=1.2)for(let o=-1;o<=1;o++)lt()<.7&&I(n,y(e*.2,.4,.06),Xe(s),[o*e*.28,r,i/2+.04],1,[0,0,0],.8,0);I(n,y(e+.1,.15,i+.1),Xe([16726992,3860735]),[0,t,0],1,[0,0,0],.9,.05),lt()<.5&&I(n,q(.06,.06,2,4),10134445,[e*.25,t+1,0],1,[0,0,0],0,.04)}},{key:"sign",w:.2,make:n=>{const t=Xe([16726992,3860735,16769354,10289003]);I(n,y(.3,4,.3),2830138,[0,2,0]),I(n,y(3.2,1.6,.3),1710634,[0,4.3,0]),I(n,y(2.8,.25,.1),t,[0,4.6,.2],1,[0,0,0],1,0),I(n,y(2,.25,.1),t,[-.3,4.1,.2],1,[0,0,0],1,0)}},{key:"roof",w:.15,make:n=>{I(n,y(5,2,5),2501704,[0,1,0]),I(n,q(1.3,1.3,.1,16),3860735,[0,2.06,0],1,[0,0,0],.7,.04),I(n,y(.3,.05,1.6),3860735,[0,2.12,0],1,[0,0,0],.9,0),I(n,q(.08,.08,3,4),10134445,[1.8,3.5,1.8],1,[0,0,0],0,.04),I(n,z(.2,6,4),16722474,[1.8,5.1,1.8],1,[0,0,0],1,0)}},{key:"plaza",w:.2,make:n=>{I(n,q(3,3,.2,18),1843520,[0,.1,0],1,[0,0,0],0,.1),I(n,_e(2.4,.12),16726992,[0,.25,0],1,[Math.PI/2,0,0],.9,0),I(n,y(1.2,1.2,1.2),2761284,[0,.7,0]),I(n,y(1.3,.2,1.3),10289003,[0,1.35,0],1,[0,0,0],.8,.04)}}],mid:{kind:"none",n:0}},storm:{ground:2050654,sky:4016728,stripes:()=>Un(22,[13164776,10470608],[3,8],[.4,.6],.3),count:16,decos:[{key:"searocks",w:.4,make:n=>{for(let t=0;t<3;t++)I(n,bt(1,1,5),Xe([4870232,3817544]),[t*1.7-1.7,.8,(lt()-.5)*2],[zt(1,1.6),zt(2,4),zt(1,1.6)],[(lt()-.5)*.4,lt()*3,(lt()-.5)*.4]);I(n,z(1,8,6),13164776,[0,0,0],[3.2,.2,2.2],[0,0,0],0,.06)}},{key:"lighthouse",w:.2,make:n=>{I(n,z(1,8,6),4870232,[0,0,0],[2.6,1.2,2.6]);for(let t=0;t<4;t++)I(n,q(.75-t*.07,.8-t*.07,1.4,10),t%2?14829868:15921126,[0,1.6+t*1.4,0],1,[0,0,0],0,.1);I(n,q(.6,.6,.9,10),2830138,[0,7.4,0]),I(n,z(.45,10,8),16769354,[0,7.4,0],1,[0,0,0],1,.05),I(n,bt(.8,.8,10),14829868,[0,8.25,0])}},{key:"rig",w:.2,make:n=>{for(const[t,e]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])I(n,q(.25,.3,4,6),5922662,[t,1.5,e]);I(n,y(4.5,.5,4.5),14252587,[0,3.6,0]),I(n,y(1.6,1.4,1.6),15262416,[-.9,4.5,-.9]),I(n,y(.3,3.5,.3),16102171,[1.3,5.5,1.3]),I(n,y(3,.25,.25),16102171,[.2,7.1,1.3],1,[0,0,-.2]),I(n,bt(.35,1,6),16747039,[1.8,4.5,-1.6],1,[0,0,0],1,.04)}},{key:"buoy",w:.2,make:n=>{I(n,q(.7,.9,1,10),14829868,[0,.4,0],1,[.25,0,.1]),I(n,q(.45,.6,1,10),15921126,[.1,1.3,.1],1,[.25,0,.1]),I(n,z(.25,8,6),10289003,[.25,2,.25],1,[0,0,0],1,.04)}}],mid:{kind:"cloud",n:9,color:5923696}},ruins:{ground:15188602,sky:16177568,stripes:()=>[...ui(0,5,13213792,4,5),...Un(8,13936736,[1.2,2],[20,40],.8)],count:22,avoid:4,decos:[{key:"columns",w:.35,make:n=>{const t=3+Math.floor(lt()*3);for(let e=0;e<t;e++){const i=e*1.8-t*.9;if(lt()<.3){I(n,q(.5,.5,4,10),14731408,[i,.5,(lt()-.5)*2],1,[0,lt(),Math.PI/2]);continue}const s=zt(1.5,5);I(n,q(.5,.55,1,10),14731408,[i,s/2,0],[1,s,1]),I(n,y(1.3,.35,1.3),13610608,[i,s+.17,0])}}},{key:"pyramid",w:.2,make:n=>{const t=zt(5,8),e=t*.85;I(n,bt(1,1,4),14266986,[0,e/2,0],[t,e,t],[0,Math.PI/4,0],0,.18),I(n,bt(1,1,4),16765498,[0,e*.93,0],[t*.15,e*.15,t*.15],[0,Math.PI/4,0],.5,.06),I(n,y(1.2,1.4,.2),3811866,[0,.7,t*.55],1,[-.4,0,0],0,.05)}},{key:"obelisk",w:.2,make:n=>{const t=zt(6,9);I(n,y(1.4,.6,1.4),12096858,[0,.3,0]),I(n,y(.9,t,.9),13610608,[0,t/2+.6,0],[1,1,1]),I(n,bt(.65,1,4),16765498,[0,t+1.1,0],1,[0,Math.PI/4,0],.6,.05);for(let e=0;e<4;e++)I(n,y(.5,.12,.05),9071162,[0,2+e*1.2,.47],1,[0,0,0],0,0)}},{key:"sphinx",w:.15,make:n=>{I(n,y(2.2,1.6,4.2),14266986,[0,.8,0]),I(n,y(1.6,1.8,1.6),14729354,[0,2.2,1.8]),I(n,y(2.2,.5,1.8),3108784,[0,3.2,1.7]),I(n,y(2.25,.18,1.85),16765498,[0,2.9,1.7],1,[0,0,0],.3,.04),I(n,y(1.6,.5,1.6),14729354,[0,.25,3.2])}},{key:"oasis",w:.1,make:n=>{I(n,q(2.4,2.4,.15,14),3842256,[0,.08,0],[1,1,.7]);for(let t=0;t<3;t++){const e=t*2.1,i=Math.cos(e)*2.8,s=Math.sin(e)*2;I(n,q(.15,.2,2.6,5),9067050,[i,1.3,s],1,[0,0,.15],0,.08),I(n,z(1,6,4),3050298,[i+.2,2.7,s],[1,.35,1],[0,0,0],0,.1)}}}],mid:{kind:"cloud",n:5}},rail:{ground:10119748,sky:15247464,stripes:()=>[-9.7,0,9.7].flatMap(n=>[...ui(n,3.2,6969930,30.2,30,0),...ka(1.5,2.4,.35,5913124,n,.05),...ui(n-.75,.18,12106948,30.2,30,.12,.12),...ui(n+.75,.18,12106948,30.2,30,.12,.12)]),count:22,avoid:13,decos:[{key:"redmesa",w:.35,make:n=>{const t=zt(3,8),e=zt(2.5,5);I(n,q(1,1.2,1,7),11882538,[0,t/2,0],[e,t,e],[0,0,0],0,.18),I(n,q(.95,1,.5,7),14251834,[0,t+.25,0],[e,1,e],[0,0,0],0,.12),I(n,q(1,1,.4,7),9058846,[0,t*.45,0],[e*1.12,1,e*1.12],[0,0,0],0,.06)}},{key:"watertower",w:.2,make:n=>{for(const[t,e]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]])I(n,y(.2,4,.2),5913124,[t,2,e]);I(n,q(1.5,1.5,2.2,12),9067066,[0,5.1,0]),I(n,q(1.55,1.55,.15,12),3811866,[0,4.6,0],1,[0,0,0],0,.04),I(n,bt(1.7,1.2,12),6961700,[0,6.8,0])}},{key:"signal",w:.15,make:n=>{I(n,y(.25,5,.25),2830138,[0,2.5,0]),I(n,y(.9,1.6,.5),1710626,[0,5,0]),I(n,z(.22,8,6),16722474,[0,5.4,.28],1,[0,0,0],1,.03),I(n,z(.22,8,6),3866474,[0,4.7,.28],1,[0,0,0],.4,.03)}},{key:"crates",w:.15,make:n=>{for(let t=0;t<4;t++)I(n,y(1.4,1.4,1.4),Xe([11895354,10119722,7309882]),[t%2*1.5,.7+Math.floor(t/3)*1.4,Math.floor(t/2)*1.5],1,[0,lt()*.4,0])}},{key:"cactus",w:.15,make:n=>{const t=zt(2.5,4);I(n,q(.4,.45,t,8),3836474,[0,t/2,0]),I(n,q(.25,.25,1.2,8),3836474,[.6,t*.55,0],1,[0,0,1.2]),I(n,q(.25,.25,1.2,8),3836474,[1,t*.75,0])}}],mid:{kind:"cloud",n:5}},jungle:{ground:3107370,sky:10473632,stripes:()=>Un(14,[3836592,3111584],[3,6],[10,20],1),count:24,decos:[{key:"tree",w:.4,make:n=>{const t=zt(3,6);I(n,q(.35,.55,t,7),6965802,[0,t/2,0]);for(let e=0;e<4;e++){const i=e/4*Math.PI*2+lt();I(n,z(1,8,6),Xe([3050298,4892730,2062906]),[Math.cos(i)*1.2,t+zt(-.3,.6),Math.sin(i)*1.2],[zt(1.4,2),zt(.9,1.3),zt(1.4,2)])}I(n,q(.06,.06,t*.8,4),3828266,[.8,t*.6,.6],1,[0,0,0],0,.03)}},{key:"hive",w:.25,make:n=>{I(n,z(1,10,8),11893306,[0,1.6,0],[2.4,2,2.4]),I(n,z(1,10,8),9063050,[1.4,3.2,.3],[1.4,1.4,1.4]),I(n,z(1,10,8),11893306,[-.8,3.6,-.4],[1.1,1.3,1.1]);for(let t=0;t<5;t++){const e=lt()*Math.PI*2;I(n,z(.3,6,4),Xe([16751135,10288954]),[Math.cos(e)*2.2,zt(.8,2.6),Math.sin(e)*2.2+.3],1,[0,0,0],1,0)}}},{key:"shrooms",w:.2,make:n=>{for(let t=0;t<3;t++){const e=t*1.8-1.8,i=zt(1,3),s=zt(.8,1.6);I(n,q(.2,.3,i,6),15919824,[e,i/2,0]),I(n,z(1,10,6),14039594,[e,i,0],[s,s*.55,s]),I(n,z(.15,5,4),16777215,[e+s*.4,i+s*.4,0],1,[0,0,0],0,0),I(n,z(.15,5,4),16777215,[e-s*.3,i+s*.45,s*.3],1,[0,0,0],0,0)}}},{key:"ferns",w:.15,make:n=>{for(let t=0;t<6;t++)I(n,bt(.6,1.8,5),Xe([3836474,3045934]),[(lt()-.5)*3,.6,(lt()-.5)*3],1,[(lt()-.5)*.8,0,(lt()-.5)*.8])}}],mid:{kind:"cloud",n:6,color:14676188}},clouds:{ground:14412279,sky:9423088,stripes:()=>[],count:20,decos:[{key:"bank",w:.7,hatch:!1,make:n=>Ya(n,Xe([16777215,15923455,15266556]),7,2,3.6,2.6,.12)},{key:"tower",w:.3,hatch:!1,make:n=>{Ya(n,16777215,4,2.4,3.2,2.4,.12),I(n,z(1,10,8),16777215,[0,4,0],2.8,[0,0,0],0,.12),I(n,z(1,10,8),15923455,[.8,6.5,.3],2,[0,0,0],0,.12)}}],mid:{kind:"cloud",n:10}},crystal:{ground:2760516,sky:2892104,glow:1.8,stripes:()=>Un(20,[3860735,16732120,11754751],[.2,.4],[4,10],3),count:24,decos:[{key:"cluster",w:.4,make:n=>{const t=Xe([3860735,16732120,11754751]);for(let e=0;e<6;e++){const i=zt(1.5,4.5);I(n,bt(.45,1,6),e%3===0?15923455:t,[(lt()-.5)*2.4,i/2-.2,(lt()-.5)*2.4],[1,i,1],[(lt()-.5)*.9,lt(),(lt()-.5)*.9],.45,.08)}}},{key:"stalag",w:.3,make:n=>{for(let t=0;t<4;t++){const e=zt(2,6);I(n,bt(1,1,7),Xe([5917304,4864614]),[(lt()-.5)*3,e/2,(lt()-.5)*3],[zt(.6,1.1),e,zt(.6,1.1)])}}},{key:"geode",w:.15,make:n=>{I(n,z(1,12,8),3813448,[0,.4,0],[2.4,1.4,2.4]);for(let t=0;t<7;t++){const e=t/7*Math.PI*2;I(n,bt(.3,1.2,5),16732120,[Math.cos(e)*1.1,1.4,Math.sin(e)*1.1],1,[Math.sin(e)*.5,0,-Math.cos(e)*.5],.7,.04)}}},{key:"glowshroom",w:.15,make:n=>{for(let t=0;t<4;t++){const e=(lt()-.5)*3,i=(lt()-.5)*3,s=zt(.6,1.6);I(n,q(.1,.15,s,5),14209264,[e,s/2,i],1,[0,0,0],0,.05),I(n,z(.5,8,5),3866568,[e,s,i],[1,.5,1],[0,0,0],.8,.05)}}}],mid:{kind:"shards",n:6}},orbit:{ground:989754,sky:660016,glow:2.2,stripes:()=>Un(80,[16777215,12572927,16771488],[.12,.22],[.12,.22]),count:18,decos:[{key:"asteroid",w:.45,make:n=>{const t=zt(1.5,3.5);I(n,Mn(1,1),Xe([6970964,5919308,8022618]),[0,0,0],[t,t*.8,t*1.1],[lt(),lt(),lt()]);for(let e=0;e<3;e++)I(n,z(.35,6,4),3814446,[(lt()-.5)*t,t*.7,(lt()-.5)*t],[t*.4,.2,t*.4],[0,0,0],0,0)}},{key:"satellite",w:.25,make:n=>{I(n,y(1.4,1.2,1.8),14264378,[0,1,0],1,[.3,0,.2]),I(n,y(3.6,.08,1.4),3104688,[2.6,1.1,0],1,[.3,0,.5],.15),I(n,y(3.6,.08,1.4),3104688,[-2.4,.9,0],1,[.3,0,-.1],.15),I(n,bt(.8,.5,10),15262416,[0,2,.6],1,[-.6,0,0]),I(n,z(.15,6,4),16722474,[0,1.8,-.9],1,[0,0,0],1,0)}},{key:"station",w:.15,make:n=>{I(n,_e(3,.5),14212324,[0,1,0],1,[Math.PI/2+.3,0,0]),I(n,q(.7,.7,3.6,10),12106948,[0,1,0],1,[0,0,Math.PI/2]),I(n,y(1.4,1.4,1.4),10134445,[0,1,0]),I(n,z(.2,6,4),16722474,[3,1.6,0],1,[0,0,0],1,0),I(n,y(2,.2,.6),3816004,[2.2,.2,1.2],1,[.5,.4,.6])}},{key:"comet",w:.15,make:n=>{I(n,Mn(1.4,0),13167866,[0,.5,0],1,[lt(),lt(),lt()],.3);for(let t=0;t<3;t++)I(n,y(.25,.1,3+t),9427199,[(t-1)*.4,.5,2.2+t*.5],1,[0,0,0],.6,0)}}],mid:{kind:"debris",n:6}},highway:{ground:14264416,sky:15975034,stripes:()=>[...ui(0,18,3816002,30.2,30,.02),...ui(-8.6,.3,16765498,30.2,30,.08),...ui(8.6,.3,16765498,30.2,30,.08),...[-4.3,0,4.3].flatMap(n=>ui(n,.3,15921126,3,7.5,.08))],count:22,avoid:11,decos:[{key:"billboard",w:.25,make:n=>{I(n,y(.25,4,.25),5922662,[-1.6,2,0]),I(n,y(.25,4,.25),5922662,[1.6,2,0]),I(n,y(4.6,2.4,.3),15921126,[0,4.8,0]),I(n,y(4.2,2,.1),Xe([14829868,3116e3,16102171]),[0,4.8,.2],1,[0,0,0],0,.03),I(n,y(2.6,.35,.05),16777215,[-.4,5.2,.27],1,[0,0,0],0,0),I(n,y(1.8,.35,.05),2830138,[.2,4.5,.27],1,[0,0,0],0,0)}},{key:"car",w:.25,make:n=>{const t=Xe([11884075,7309882,3829721]);I(n,y(2,.9,4),t,[0,.7,0],1,[0,0,.12]),I(n,y(1.7,.8,1.8),2830138,[0,1.5,-.2],1,[0,0,.12]);for(const[e,i]of[[-1,-1.3],[1,-1.3],[-1,1.3],[1,1.3]])I(n,q(.45,.45,.4,10),1710622,[e,.4,i],1,[0,0,Math.PI/2])}},{key:"cactus",w:.2,make:n=>{for(let t=0;t<2;t++){const e=zt(2.5,4),i=t*2.5;I(n,q(.4,.45,e,8),3836474,[i,e/2,0]),I(n,q(.25,.25,1.2,8),3836474,[i+.6,e*.55,0],1,[0,0,1.2])}}},{key:"tires",w:.15,make:n=>{for(let t=0;t<4;t++)I(n,_e(.7,.3),1710622,[t%2*1.2,.3+Math.floor(t/2)*.6,0],1,[Math.PI/2,0,0]);I(n,y(.2,5,.2),5922662,[-2,2.5,0]),I(n,y(1.8,1.4,.25),14829868,[-2,5,0],1,[0,0,0],.2)}},{key:"rock",w:.15,make:n=>{for(let t=0;t<3;t++)I(n,z(1,6,5),11038778,[t*1.4,.4,lt()],zt(.8,1.8))}}],mid:{kind:"cloud",n:5}},grid:{ground:791584,sky:396052,glow:2.4,stripes:()=>[...[-30,-24,-18,-12,-6,0,6,12,18,24,30].flatMap(n=>ui(n,.12,n%12?3860735:16726992,30.2,30)),...ka(6,Ji*2.2,.12,3860735)],count:22,decos:[{key:"pylon",w:.3,make:n=>{I(n,q(1.2,1.4,.6,6),1713203,[0,.3,0]),I(n,q(.3,.4,5,8),2767438,[0,3,0]),I(n,_e(.7,.1),3860735,[0,4.6,0],1,[Math.PI/2,0,0],.9,0),I(n,z(.45,10,8),3860735,[0,5.7,0],1,[0,0,0],1,.04)}},{key:"server",w:.3,make:n=>{const t=zt(3,6);I(n,y(2.4,t,2.4),1713203,[0,t/2,0]);for(let e=0;e<3;e++)I(n,y(.12,t*.8,.06),Xe([3860735,10289003]),[(e-1)*.6,t/2,1.23],1,[0,0,0],.9,0);I(n,y(2.5,.2,2.5),3860735,[0,t,0],1,[0,0,0],.5,.04)}},{key:"radar",w:.2,make:n=>{I(n,y(1.6,1.2,1.6),2767438,[0,.6,0]),I(n,q(.15,.15,1.6,6),5925498,[0,2,0]),I(n,bt(1.8,.7,14),10134445,[0,3,.2],1,[Math.PI-.6,0,0]),I(n,z(.2,6,4),16726992,[0,3.2,.9],1,[0,0,0],1,0)}},{key:"bunker",w:.2,make:n=>{I(n,q(2.2,2.6,.8,6),1976890,[0,.4,0]),I(n,z(1.3,10,8),2767438,[0,.9,0],[1,.7,1]),I(n,y(.25,.25,2),1120289,[-.3,1.4,1.2]),I(n,y(.25,.25,2),1120289,[.3,1.4,1.2]),I(n,_e(2.25,.08),3860735,[0,.82,0],1,[Math.PI/2,0,0],.9,0)}}],mid:{kind:"none",n:0}},ghost:{ground:5597535,sky:9083538,stripes:()=>Un(20,[10466216,9085076],[3,7],[.4,.5],.2),count:16,decos:[{key:"wreck",w:.35,make:n=>{I(n,y(2.6,1.4,8),4864554,[0,.2,0],1,[.08,0,.35]),I(n,y(2.4,.2,7.6),6969920,[.25,.9,0],1,[.08,0,.35],0,.06),I(n,q(.15,.2,5,6),3811866,[.6,3,-1],1,[.2,0,.5]),I(n,y(2.6,2,.08),12106928,[1.4,3.8,-1],1,[.2,.2,.5],0,.05),I(n,q(.12,.15,3,6),3811866,[0,2,2.2],1,[-.3,0,-.9])}},{key:"lantern",w:.2,make:n=>{I(n,q(.12,.15,4,6),3815988,[0,2,0],1,[.1,0,.1]),I(n,y(.6,.8,.6),2763300,[.2,4.2,.2]),I(n,z(.35,8,6),10289050,[.2,4.2,.2],1,[0,0,0],1,.03)}},{key:"fogrocks",w:.25,make:n=>{for(let t=0;t<3;t++)I(n,bt(1,1,5),4870734,[t*1.6-1.6,1,(lt()-.5)*2],[zt(1,1.5),zt(2,3.5),zt(1,1.5)],[(lt()-.5)*.5,lt()*3,0]);I(n,z(1,8,6),13161676,[0,.6,0],[3.6,.6,2.6],[0,0,0],0,.06)}},{key:"stern",w:.2,make:n=>{I(n,y(4,3.6,2.2),3812900,[0,1.4,0],1,[.25,0,0]);for(let t=0;t<3;t++)I(n,y(.6,.6,.08),10289050,[(t-1)*1.1,2.2,1.15],1,[.25,0,0],.6,.03);I(n,y(4.4,.3,2.4),6969920,[0,3.3,-.4],1,[.25,0,0],0,.06)}}],mid:{kind:"cloud",n:10,color:12110014}},space:{ground:460303,sky:328716,glow:2.5,stripes:()=>Un(110,[16777215,12572927,16771488,16757734],[.1,.25],[.1,.25]),count:12,decos:[{key:"planet",w:.3,make:n=>{const t=zt(4,7),e=Xe([14252587,3121312,9321433,12597547]);I(n,z(1,20,14),e,[0,0,0],t),I(n,z(1,20,14),new qt(e).multiplyScalar(.7).getHex(),[0,t*.25,0],[t*1.01,t*.18,t*1.01],[0,0,0],0,0),I(n,_e(1,.08),15259824,[0,0,0],[t*1.7,t*1.7,t*.6],[Math.PI/2+.35,0,.2],.2,.06)}},{key:"moon",w:.3,make:n=>{const t=zt(1.5,3);I(n,z(1,14,10),10134445,[0,0,0],t);for(let e=0;e<4;e++)I(n,z(.3,6,4),6976381,[(lt()-.5)*t,t*.8,(lt()-.5)*t],[t*.5,.3,t*.5],[0,0,0],0,0)}},{key:"nebula",w:.2,make:n=>{const t=Xe([9321433,16732120,3829721]);for(let e=0;e<6;e++)I(n,z(1,10,8),t,[(lt()-.5)*8,0,(lt()-.5)*6],zt(1.5,3.5),[0,0,0],.35,0)}},{key:"cluster",w:.2,make:n=>{for(let t=0;t<10;t++)I(n,z(.25,6,4),Xe([16777215,16771488,12572927]),[(lt()-.5)*6,lt(),(lt()-.5)*6],zt(.6,1.4),[0,0,0],1,0)}}],mid:{kind:"none",n:0}},clock:{ground:5914148,sky:3022868,stripes:()=>[...[-30,-20,-10,0,10,20,30].flatMap(n=>ui(n,.4,13213760,30.2,30)),...ka(15,Ji*2.2,.4,11043386)],count:18,decos:[{key:"gear",w:.45,spin:.5,make:n=>{const t=zt(2.5,4.5),e=12+Math.floor(lt()*6),i=Xe([13213760,12088115,11053232]);I(n,q(1,1,.6,24),i,[0,.3,0],[t,1,t]);for(let s=0;s<e;s++){const r=s/e*Math.PI*2;I(n,y(.7,.6,.8),i,[Math.cos(r)*(t+.3),.3,Math.sin(r)*(t+.3)],1,[0,-r,0],0,.06)}I(n,q(1,1,.65,16),3811866,[0,.3,0],[t*.25,1,t*.25],[0,0,0],0,.06);for(let s=0;s<4;s++){const r=s/4*Math.PI*2+.4;I(n,q(1,1,.66,10),4863008,[Math.cos(r)*t*.6,.3,Math.sin(r)*t*.6],[t*.18,1,t*.18],[0,0,0],0,0)}}},{key:"face",w:.2,make:n=>{I(n,q(3.4,3.4,.5,24),13213760,[0,.25,0]),I(n,q(3,3,.55,24),15919824,[0,.3,0],1,[0,0,0],0,.04);for(let t=0;t<12;t++){const e=t/12*Math.PI*2;I(n,y(.15,.1,.5),2830138,[Math.cos(e)*2.5,.6,Math.sin(e)*2.5],1,[0,-e+Math.PI/2,0],0,0)}I(n,y(.25,.1,2.2),2830138,[.5,.65,-.5],1,[0,.8,0],0,.03),I(n,y(.25,.1,1.5),14829868,[-.3,.7,.3],1,[0,-.6,0],0,.03)}},{key:"pendulum",w:.2,make:n=>{I(n,y(.6,6,.6),12088115,[-2,3,0]),I(n,y(.6,6,.6),12088115,[2,3,0]),I(n,y(4.8,.6,.8),13213760,[0,6.2,0]),I(n,y(.15,4,.15),3811866,[.4,4,0],1,[0,0,.2]),I(n,q(.7,.7,.25,16),16765498,[.8,2,0],1,[Math.PI/2,0,0],.3)}},{key:"springs",w:.15,make:n=>{for(let t=0;t<5;t++)I(n,_e(.8,.15),12088115,[0,.3+t*.4,0],1,[Math.PI/2,0,0],0,.05);I(n,q(.25,.25,4,8),9080729,[2,.3,0],1,[0,0,Math.PI/2]),I(n,q(.25,.25,3,8),9080729,[3.9,1.6,0])}}],mid:{kind:"none",n:0}},fortress:{ground:11058642,sky:6987984,stripes:()=>Un(8,15922938,[.3,.4],[20,30],.2),count:18,decos:[{key:"platform",w:.35,make:n=>{const t=zt(5,7);I(n,y(t,.8,t*.8),6976384,[0,3,0]),I(n,bt(1,1,6),5918792,[0,1.2,0],[t*.45,3.2,t*.4],[Math.PI,0,0]),I(n,y(t+.1,.15,.4),16102171,[0,3.45,t*.38],1,[0,0,0],0,.04),I(n,q(.9,1.1,.6,10),4870750,[t*.2,3.7,0]),I(n,y(.25,.25,1.8),2830138,[t*.2,4.1,.9]),I(n,y(1.6,1.6,1.6),9081502,[-t*.25,4.2,-.4])}},{key:"flak",w:.25,make:n=>{I(n,y(2.2,7,2.2),5923438,[0,3.5,0]),I(n,y(2.8,.6,2.8),3818062,[0,7.2,0]);for(const[t,e]of[[-.6,.5],[.6,.5],[-.6,-.5],[.6,-.5]])I(n,y(.2,.2,1.8),1975082,[t,7.7,e+.6],1,[-.5,0,0]);I(n,z(.25,6,4),16722474,[0,7.7,-1.2],1,[0,0,0],1,0)}},{key:"hangar",w:.2,make:n=>{I(n,y(6,.6,5),6976384,[0,2.5,0]),I(n,q(2.2,2.2,5,12),9081502,[0,2.8,0],[1,1,.8],[Math.PI/2,0,0]),I(n,y(2.6,1.8,.1),16102171,[0,3.6,2.05],1,[0,0,0],0,.04),I(n,bt(1,1,6),5918792,[0,.8,0],[2.5,2.6,2.2],[Math.PI,0,0])}},{key:"bank",w:.2,hatch:!1,make:n=>Ya(n,16777215,6,1.8,3,2.4,.12)}],mid:{kind:"cloud",n:8}},throne:{ground:2757652,sky:3017226,glow:2,stripes:()=>Un(16,[16730655,16742943],[.5,1.2],[8,18],3),count:22,decos:[{key:"spiketower",w:.3,make:n=>{const t=zt(5,9);I(n,q(1,1.4,t,6),2761256,[0,t/2,0]);for(let e=0;e<6;e++){const i=e/6*Math.PI*2,s=zt(1.5,t-.5);I(n,bt(.25,1.4,5),15260864,[Math.cos(i)*1.4,s,Math.sin(i)*1.4],1,[Math.sin(i)*1.3,0,-Math.cos(i)*1.3])}I(n,bt(1.3,2.2,6),1709080,[0,t+1.1,0]),I(n,y(.5,.8,.1),16730655,[0,t*.7,1.2],1,[0,0,0],1,.03)}},{key:"banner",w:.25,make:n=>{I(n,y(2,.6,2),2761256,[0,.3,0]),I(n,y(.25,7,.25),1709080,[0,3.5,0]),I(n,y(2.4,.2,.2),1709080,[0,6.8,0]),I(n,y(2.2,3.6,.1),11018266,[0,4.9,.15]),I(n,z(.6,10,8),15260864,[0,5.2,.3],[1,1.1,.6]),I(n,z(.15,6,4),1709080,[.22,5.3,.62],1,[0,0,0],0,0),I(n,z(.15,6,4),1709080,[-.22,5.3,.62],1,[0,0,0],0,0),I(n,y(.5,.15,.1),1709080,[0,4.8,.55],1,[0,0,0],0,0)}},{key:"wall",w:.2,make:n=>{I(n,y(9,3,1.6),3812912,[0,1.5,0]);for(let t=0;t<5;t++)I(n,y(1,.9,1.7),3812912,[t*2-4,3.4,0]);for(const t of[-4.4,4.4])I(n,q(.6,.4,.6,8),1709080,[t,4.2,0]),I(n,bt(.45,1.2,6),16747039,[t,4.9,0],1,[0,0,0],1,.03)}},{key:"brazier",w:.15,make:n=>{I(n,q(.3,.5,2.4,6),2761256,[0,1.2,0]),I(n,q(1.2,.6,.8,10),1709080,[0,2.7,0]),I(n,bt(.8,1.8,7),16738847,[0,3.8,0],1,[0,0,0],1,.03),I(n,bt(.45,1.2,7),16765498,[.1,3.7,.1],1,[0,0,0],1,0)}},{key:"lavapool",w:.1,make:n=>{I(n,q(1,1,.4,12),1707534,[0,0,0],[3.4,1,3]),I(n,q(1,1,.2,12),16734751,[0,.15,0],[3,1,2.6],[0,0,0],1,.1)}}],mid:{kind:"cloud",n:5,color:4857888}}};function sM(n,t){const e=Math.floor(lt()*4);return n==="cloud"?le(`w-cloud-${t}-${e}`,()=>{const i=new Yt;return Ya(i,t,4+Math.floor(lt()*3),.8,1.8,1.1),i},{hatch:!1}):n==="debris"?le(`w-debris-${e}`,()=>{const i=new Yt;for(let s=0;s<3;s++)I(i,Mn(1,0),Xe([6970964,5919308]),[(lt()-.5)*3,0,(lt()-.5)*3],zt(.3,.8),[lt(),lt(),lt()],0,.08);return I(i,y(1.2,.06,.6),3104688,[.5,.2,1],1,[lt(),lt(),lt()],.1,.05),i}):le(`w-shard-${e}`,()=>{const i=new Yt,s=Xe([3860735,16732120,11754751]);for(let r=0;r<3;r++)I(i,bt(.3,1.4,5),s,[(lt()-.5)*2,0,(lt()-.5)*2],1,[lt()*3,lt()*3,lt()*3],.6,.05);return i})}const Mo=new On,Nh=new qt;class rM{constructor(t){H(this,"group",new be);H(this,"decos",[]);H(this,"ground");H(this,"stripes");H(this,"stripeMat");H(this,"stripeZ",new Float32Array(Ia));H(this,"theme","desert");H(this,"avoid",0);this.scene=t,t.add(this.group),this.ground=new ue(new zs(Ji*3,qn*1.5).rotateX(-Math.PI/2),tr(16777215,{hatch:!1})),this.ground.position.y=sc,this.group.add(this.ground),this.stripeMat=Le(16777215),this.stripes=new f0(y(1,1,1),this.stripeMat,Ia),this.stripes.frustumCulled=!1,this.stripes.instanceMatrix.setUsage(Cp);for(let e=0;e<Ia;e++)this.stripes.setColorAt(e,Nh.set(16777215));this.stripes.count=0,this.group.add(this.stripes)}setTheme(t){this.theme=t;for(const r of this.decos)this.group.remove(r.obj),r.obj.traverse(o=>{const a=o;a.isMesh&&!a.userData.outline&&a.material.dispose()});this.decos=[];const e=iM[t];this.ground.material.uniforms.uColor.value.set(e.ground),this.scene.background=new qt(e.sky),this.avoid=e.avoid??0;const i=e.stripes().slice(0,Ia);this.stripeMat.uniforms.uIntensity.value=e.glow??1,i.forEach((r,o)=>{Mo.position.set(r.x,sc+.05+(r.y??0),r.z),Mo.rotation.set(0,r.ry??0,0),Mo.scale.set(r.sx,r.sy??.05,r.sz),Mo.updateMatrix(),this.stripes.setMatrixAt(o,Mo.matrix),this.stripes.setColorAt(o,Nh.set(r.color)),this.stripeZ[o]=r.z}),this.stripes.count=i.length,this.stripes.instanceMatrix.needsUpdate=!0,this.stripes.instanceColor&&(this.stripes.instanceColor.needsUpdate=!0);const s=e.decos.reduce((r,o)=>r+o.w,0);for(let r=0;r<e.count;r++){let o=lt()*s;const a=e.decos.find(d=>(o-=d.w)<=0)??e.decos[0],c=Math.floor(lt()*eM),l=le(`w-${t}-${a.key}-${c}`,()=>{const d=new Yt;return a.make(d),d},{hatch:a.hatch});l.position.set(this.pickX(),sc,(r/e.count-.5)*qn+lt()*4),l.rotation.y=lt()*Math.PI*2,this.group.add(l),this.decos.push({obj:l,speedMul:1,spin:a.spin?a.spin*(lt()<.5?-1:1)*zt(.6,1.2):0})}if(e.mid.kind!=="none")for(let r=0;r<e.mid.n;r++){const o=sM(e.mid.kind,e.mid.color??16777215);o.scale.setScalar(zt(.8,1.6)),o.position.set((lt()-.5)*Ji*1.6,-12-lt()*5,(lt()-.5)*qn),this.group.add(o),this.decos.push({obj:o,speedMul:1.6,spin:e.mid.kind==="cloud"?0:zt(-.4,.4)})}}pickX(){const t=this.avoid;return t<=0?(lt()-.5)*Ji*2:(lt()<.5?-1:1)*(t+lt()*(Ji-t))}update(t,e){const i=qn/2;for(const r of this.decos)r.obj.position.z+=e*r.speedMul*t,r.spin&&(r.obj.rotation.y+=r.spin*t),r.obj.position.z>i&&(r.obj.position.z-=qn,r.speedMul===1?r.obj.position.x=this.pickX():r.obj.position.x=(lt()-.5)*Ji*1.6);const s=this.stripes.count;if(s){const r=this.stripes.instanceMatrix.array,o=this.stripeZ;for(let a=0;a<s;a++){let c=o[a]+e*t;c>i&&(c-=qn),o[a]=c,r[a*16+14]=c}this.stripes.instanceMatrix.needsUpdate=!0}}}const za=new Ie,rc=new Is,Fh=new ri,oc=new U,Da=new U,sl=new qt;class Yn{constructor(t,e,i,s,r=0,o=!1){H(this,"core");H(this,"outline",null);H(this,"n",0);if(this.cap=s,this.outlineW=r,e.boundingBox||e.computeBoundingBox(),this.core=new f0(e,i,s),this.core.instanceColor=new u0(new Float32Array(s*3).fill(1),3),this.core.frustumCulled=!1,this.core.count=0,r>0){const a=Le(920594,{side:pn});this.outline=new f0(e,a,s),this.outline.frustumCulled=!1,this.outline.count=0,o&&(a.depthTest=!1,this.outline.renderOrder=10),t.add(this.outline)}o&&(i.depthTest=!1,this.core.renderOrder=11),t.add(this.core)}begin(){this.n=0}push(t,e,i,s,r,o,a,c,l=0){if(!(this.n>=this.cap)){if(Fh.set(0,a,l),rc.setFromEuler(Fh),oc.set(t,e,i),Da.set(s,r,o),za.compose(oc,rc,Da),this.core.setMatrixAt(this.n,za),sl.set(c),this.core.setColorAt(this.n,sl),this.outline){const d=this.core.geometry.boundingBox,h=this.outlineW;Da.set(s+2*h/Math.max(d.max.x-d.min.x,.001),r+2*h/Math.max(d.max.y-d.min.y,.001),o+2*h/Math.max(d.max.z-d.min.z,.001)),za.compose(oc,rc,Da),this.outline.setMatrixAt(this.n,za)}this.n++}}end(){this.core.count=this.n,this.core.instanceMatrix.needsUpdate=!0,this.core.instanceColor&&(this.core.instanceColor.needsUpdate=!0),this.outline&&(this.outline.count=this.n,this.outline.instanceMatrix.needsUpdate=!0)}}const Oh=[16765498,16747039,16774048],ac=[16774048,16765498,16747039,14829868,10787988];class oM{constructor(t){H(this,"parts",[]);H(this,"puffs");H(this,"debris");H(this,"rings");H(this,"sparks");H(this,"flares");H(this,"wedges");this.puffs=new Yn(t,Mn(1,1),tr(16777215,{hatch:!1}),500,.12),this.debris=new Yn(t,y(1,1,1),tr(16777215),300,.04);const e=new xl(1,.08,6,28).rotateX(Math.PI/2);e.computeBoundingBox(),this.rings=new Yn(t,e,Le(16777215,{intensity:2}),60,0),this.sparks=new Yn(t,z(1,6,4),Le(16777215,{intensity:1.8}),600,.05,!0),this.flares=new Yn(t,z(1,12,8),Le(16777215,{intensity:1,additive:!0}),120,0),this.flares.core.renderOrder=13,this.flares.core.material.depthTest=!1;const i=bt(1,1,3).clone().rotateX(Math.PI/2);i.computeBoundingBox(),this.wedges=new Yn(t,i,tr(16777215),200,.04)}add(t){this.parts.length>2400||(t.life=0,this.parts.push(t))}explode(t,e,i=1,s=9080729,r=s){this.fireball(t,e,i),this.shards(t,e,i,s,r),this.embers(t,e,i)}fireball(t,e,i=1){this.add({kind:"flare",x:t,y:1,z:e,vx:0,vy:0,vz:0,max:.18+.05*i,size:1.6*i,color:16771488,spin:0});const s=Math.round(6+6*i);for(let r=0;r<s;r++){const o=Math.random()*Math.PI*2,a=(1+Math.random()*3)*i;this.add({kind:"puff",x:t+Math.cos(o)*.3*i,y:Math.random(),z:e+Math.sin(o)*.3*i,vx:Math.cos(o)*a,vy:Math.random()*2,vz:Math.sin(o)*a,max:.45+Math.random()*.4*i,size:(.35+Math.random()*.5)*i,color:0,spin:0})}this.sparksAt(t,e,16765498,Math.round(5*i),9*Math.sqrt(i))}shards(t,e,i=1,s=9080729,r=s){const o=Math.sqrt(i),a=Math.round(5+5*i);for(let c=0;c<a;c++){const l=Math.random()*Math.PI*2,d=i>=1.8&&c<2,h=(d?2.5:3+Math.random()*4)*o;this.add({kind:"debris",x:t,y:.5,z:e,vx:Math.cos(l)*h,vy:3+Math.random()*4,vz:Math.sin(l)*h,max:(d?.6:.35)+Math.random()*.3,size:(d?.55+Math.random()*.2:.1+Math.random()*.3)*o,color:c%3===1?r:s,spin:Math.random()*10,shape:d?0:c%3})}}embers(t,e,i=1){const s=Math.sqrt(i),r=Math.round(5+6*i);for(let o=0;o<r;o++){const a=Math.random()*Math.PI*2,c=(1+Math.random()*3)*s;this.add({kind:"ember",x:t+Math.cos(a)*.4*i,y:1.2,z:e+Math.sin(a)*.4*i,vx:Math.cos(a)*c,vy:0,vz:Math.sin(a)*c-3,max:.7+Math.random()*.7,size:.06+Math.random()*.06,color:Oh[o%Oh.length],spin:Math.random()*6})}}sparksAt(t,e,i=16774048,s=3,r=6){for(let o=0;o<s;o++){const a=Math.random()*Math.PI*2,c=r*(.4+Math.random()*.8);this.add({kind:"spark",x:t,y:.6,z:e,vx:Math.cos(a)*c,vy:0,vz:Math.sin(a)*c-2,max:.15+Math.random()*.2,size:.12,color:i,spin:0})}}flash(t,e,i,s=16771488,r=.06){this.add({kind:"flare",x:t,y:1,z:e,vx:0,vy:0,vz:0,max:r,size:i,color:s,spin:0})}trail(t,e,i,s=.18,r=.25){this.add({kind:"trail",x:t,y:0,z:e,vx:(Math.random()-.5)*.6,vy:0,vz:6,max:r,size:s,color:i,spin:0})}streak(t,e,i,s,r=16777215,o=.08,a=.5){this.add({kind:"streak",x:t,y:2,z:e,vx:i,vy:0,vz:s,max:a,size:o,color:r,spin:0})}ring(t,e,i,s=16777215,r=.4){this.add({kind:"ring",x:t,y:.3,z:e,vx:0,vy:0,vz:0,max:r,size:i,color:s,spin:0})}update(t,e){const i=this.parts;let s=0;for(let r=0;r<i.length;r++){const o=i[r];o.life+=t,!(o.life>=o.max)&&(o.x+=o.vx*t,o.y+=o.vy*t,o.z+=(o.vz+e)*t,o.kind==="puff"?(o.vx*=.9,o.vz*=.9):o.kind==="debris"?(o.vy-=18*t,o.spin+=t*12):o.kind==="ember"&&(o.vx*=.94,o.vz*=.94),i[s++]=o)}i.length=s,this.puffs.begin(),this.debris.begin(),this.rings.begin(),this.sparks.begin(),this.flares.begin(),this.wedges.begin();for(const r of i){const o=r.life/r.max;if(r.kind==="puff"){const a=r.size*(o<.25?.5+o*2:1-(o-.25)*.9),c=Math.min(ac.length-1,Math.floor(o*ac.length));this.puffs.push(r.x,r.y,r.z,a,a,a,r.spin,ac[c])}else if(r.kind==="debris"){const a=r.size*(1-o*.6);r.shape===1?this.debris.push(r.x,r.y,r.z,a*.2,a*.2,a*1.5,r.spin,r.color,r.spin*.7):r.shape===2?this.wedges.push(r.x,r.y,r.z,a*.8,a*.8,a*.3,r.spin,r.color,r.spin*.5):this.debris.push(r.x,r.y,r.z,a,a*.25,a*.7,r.spin,r.color,r.spin*.7)}else if(r.kind==="ember"){const a=r.size*(1-o)*(.6+.4*Math.sin(r.life*30+r.spin));this.sparks.push(r.x,r.y,r.z,a,a,a,0,r.color)}else if(r.kind==="ring"){const a=r.size*(.3+o);this.rings.push(r.x,r.y,r.z,a,1+(1-o)*2,a,0,r.color)}else if(r.kind==="flare"){const a=r.size*(1-o*.6);sl.set(r.color).multiplyScalar(1-o),this.flares.push(r.x,r.y,r.z,a,a,a,0,sl)}else if(r.kind==="streak"){const a=r.size*(o<.2?o*5:1);this.sparks.push(r.x,r.y,r.z,a,a,a*18,Math.atan2(r.vx,r.vz),r.color)}else if(r.kind==="trail"){const a=r.size*(1-o);this.sparks.push(r.x,r.y,r.z,a,a,a*1.6,0,r.color)}else{const a=r.size*(1-o);this.sparks.push(r.x,r.y,r.z,a,a,a*3,Math.atan2(r.vx,r.vz),r.color)}}this.puffs.end(),this.debris.end(),this.rings.end(),this.sparks.end(),this.flares.end(),this.wedges.end()}clear(){this.parts.length=0}}const nr=920594,aM=Fn;function Ye(n,t,e,i,s=1){const r=new ue(t,Le(e,{side:aM,intensity:s}));return r.position.z=i,n.add(r),r}function _l(n){const t=new Zo;return n.forEach(([e,i],s)=>s?t.lineTo(e,i):t.moveTo(e,i)),t.closePath(),new vl(t)}function lc(n,t,e,i){const s=[];for(let r=0;r<n*2;r++){const o=r/(n*2)*Math.PI*2,a=1+.22*Math.sin(r*2.7+i)*Math.cos(r*1.3+i*3),c=r%2?e:t*a;s.push([Math.cos(o)*c,Math.sin(o)*c])}return _l(s)}const cc=(n,t,e=0)=>_l(Array.from({length:n},(i,s)=>{const r=e+s/n*Math.PI*2;return[Math.cos(r)*t,Math.sin(r)*t]}));function Nr(n,t,e,i,s,r,o,a,c=1){const l=Math.hypot(i-t,s-e),d=Ye(n,new zs(l,r),o,a,c);return d.position.set((t+i)/2,(e+s)/2,a),d.rotation.z=Math.atan2(s-e,i-t),d}function dc(n,t,e,i,s,r,o,a=1){return Nr(n,Math.cos(t)*e,Math.sin(t)*e,Math.cos(t)*i,Math.sin(t)*i,s,r,o,a)}function lM(){const n=new be,t=new be;n.add(t),Ye(t,lc(15,4.9,3.4,1.7),nr,0),Ye(t,lc(15,4.55,3.15,1.7),16738847,.01),Ye(t,lc(11,3.3,2.4,4.2),16765498,.02,1.15),Ye(t,new yi(1.7,24),16774064,.03,1.3);const e=new be;n.add(e);for(let s=0;s<9;s++){const r=s/9*Math.PI*2+.3,o=5.2+s%3*.35,a=Ye(e,_l([[0,.32],[.26,-.2],[-.3,-.12]]),s%2?3810324:nr,.02);a.position.set(Math.cos(r)*o,Math.sin(r)*o,.02),a.rotation.z=r*3}let i=0;return{group:n,tick(s){i+=s,t.scale.setScalar(1+.035*Math.sin(i*3.2)),e.rotation.z=i*.12,e.children.forEach((r,o)=>r.rotation.z+=s*(o%2?1.2:-.9))}}}function cM(){const n=new be,t=14132991,e=16765498;Ye(n,new yi(4.15,48),nr,0),Ye(n,new yi(3.95,48),9321433,.005),Ye(n,new yi(3.65,48),2824008,.01),Ye(n,new Qs(3.25,3.32,48),t,.015,1.2);for(let a=0;a<12;a++){const c=a/12*Math.PI*2,l=a%3===0;dc(n,c,l?2.75:2.95,3.2,l?.16:.08,l?e:t,.02,1.2)}const i=new be,s=new be;n.add(i,s),dc(i,Math.PI/2,0,2.1,.22,t,.025,1.1),dc(s,Math.PI/2,0,3,.13,e,.03,1.2);const r=new be;n.add(r),Ye(r,new Qs(4.55,4.6,64),t,0,1.1);for(let a=0;a<3;a++){const c=a/3*Math.PI*2;Ye(r,new yi(.16,16),t,.01,1.6).position.set(Math.cos(c)*4.575,Math.sin(c)*4.575,.01)}let o=0;return{group:n,tick(a){o+=a,s.rotation.z=-o*.9,i.rotation.z=-o*.075-1.1,r.rotation.z=o*.25}}}function dM(){const n=new be,t=new be;n.add(t);const e=14,i=[];for(let o=0;o<e;o++)for(const[a,c]of[[0,4.1],[.12,4.75],[.38,4.75],[.5,4.1]]){const l=(o+a)/e*Math.PI*2;i.push([Math.cos(l)*c,Math.sin(l)*c])}const s=_l(i);Ye(t,s,nr,0).scale.setScalar(1.04),Ye(t,s,14252587,.005),Ye(t,new yi(3.95,40),12082975,.008),Ye(n,cc(6,3.75,Math.PI/6),nr,.01),Ye(n,cc(6,3.55,Math.PI/6),9081244,.015),Ye(n,cc(6,3.05,Math.PI/6),5922662,.02);for(let o=0;o<6;o++){const a=Math.PI/6+o/6*Math.PI*2;Ye(n,new yi(.16,12),14278115,.025).position.set(Math.cos(a)*3.3,Math.sin(a)*3.3,.025)}for(let o=-3;o<=3;o++)Nr(n,o*.55-.25,-2.35,o*.55+.25,-2.85,.24,o%2?nr:16765498,.03);let r=0;return{group:n,tick(o){r+=o,t.rotation.z=r*.18}}}function hM(){const n=new be,t=10289003;Ye(n,new yi(4.15,48),nr,0),Ye(n,new yi(3.95,48),994088,.005),Ye(n,new Qs(3.75,3.92,64),t,.01,1.4),Ye(n,new Qs(2.9,2.98,64),t,.01,1.3);const e=new be;n.add(e);for(const a of[Math.PI/2,-Math.PI/2])for(let c=0;c<3;c++){const l=a+c/3*Math.PI*2,d=a+(c+1)/3*Math.PI*2;Nr(e,Math.cos(l)*2.9,Math.sin(l)*2.9,Math.cos(d)*2.9,Math.sin(d)*2.9,.07,t,.015,1.3)}const i=new be,s=new be;n.add(i,s);const r=(a,c,l,d)=>{const h=new be;h.position.set(Math.cos(c)*l,Math.sin(c)*l,.02),h.rotation.z=c-Math.PI/2,a.add(h),Nr(h,-.13,-.16,-.13,.16,.05,t,0,1.4),Nr(h,-.13,.16,.13,d%3*.1-.1,.05,t,0,1.4),d%2&&Nr(h,-.13,-.02,.12,-.16,.05,t,0,1.4)};for(let a=0;a<16;a++)r(i,a/16*Math.PI*2,3.38,a);for(let a=0;a<22;a++)r(s,a/22*Math.PI*2,4.45,a+5);Ye(s,new Qs(4.75,4.8,64),t,0,1.2);let o=0;return{group:n,tick(a){o+=a,i.rotation.z=o*.22,s.rotation.z=-o*.12,e.rotation.z=-o*.08}}}function uM(n){switch(n){case"max":return lM();case"lia":return cM();case"anvil":return dM();case"vex":return hM()}}const Gr=n=>({text:`通关第 ${n+1} 关`,level:n,progress:t=>[t.cleared.includes(n)?1:0,1]}),Rn=[{id:"max",name:"麦克斯",title:"火箭狂人",ult:"地毯轰炸",ultDesc:"呼叫一整排轰炸，清空全屏子弹并对所有敌机造成巨额伤害。",passive:"被动：开局多 1 次大招",color:"#e2492c",unlock:null},{id:"lia",name:"莉娅",title:"时间窃贼",ult:"时停领域",ultDesc:"6 秒内敌人和弹幕降到 25% 速度，自身射速 +50%。",passive:"被动：大招充能速度 +30%",color:"#8e3bd9",unlock:Gr(1)},{id:"anvil",name:"铁砧",title:"重甲莽夫",ult:"护盾冲撞",ultDesc:"展开 5 秒能量护盾，移速翻倍，撞到的敌人和子弹统统粉碎。",passive:"被动：每条命额外 1 层护甲",color:"#d97a2b",unlock:Gr(5)},{id:"vex",name:"薇克丝",title:"机械巫女",ult:"蜂群召唤",ultDesc:"放出 30 枚追踪飞弹，并召唤 2 架僚机协同作战 8 秒。",passive:"被动：拾取道具时额外得分 +100%",color:"#1f7a6a",unlock:Gr(9)}],yn=[{id:"falcon",name:"游隼",role:"均衡型",desc:"散射火神炮随火力扩散，副武器追踪导弹自动索敌。",main:"vulcan",mainName:"散射火神炮",sub:"homing",subName:"追踪导弹",speed:13,hitRadius:.3,armor:0,stats:{fire:3,speed:3,size:3,armor:2},color:"#f5b31b",unlock:null},{id:"rhino",name:"犀牛",role:"重装型",desc:"慢速大块头，重炮单发伤害高且能穿透；投掷集束炸弹；自带 1 层护甲。",main:"cannon",mainName:"穿甲重炮",sub:"cluster",subName:"集束炸弹",speed:9.5,hitRadius:.48,armor:1,stats:{fire:4,speed:1,size:5,armor:5},color:"#6f8a3a",unlock:Gr(3)},{id:"hummingbird",name:"蜂鸟",role:"高机动型",desc:"极小判定、极快速度；持续激光贯穿一切，但火力偏弱；两侧僚机辅助射击。",main:"laser",mainName:"贯穿激光",sub:"wingmen",subName:"僚机",speed:17,hitRadius:.2,armor:0,stats:{fire:2,speed:5,size:1,armor:1},color:"#1fc8b0",unlock:Gr(7)},{id:"thunder",name:"雷鸟",role:"压制型",desc:"蓄力射出折射激光，命中后折射到附近多个敌人，越打群越强；副武器闪电链自动跳跃攻击。",main:"prism",mainName:"折射激光",sub:"chain",subName:"闪电链",speed:12,hitRadius:.34,armor:0,stats:{fire:5,speed:3,size:3,armor:2},color:"#8e3bd9",unlock:Gr(11)}],Ue=[{name:"第一关 · 锈蚀荒原",subtitle:"掠夺者的地盘，别指望有人救你",theme:"desert",bossName:"沙暴掠夺者",bossHp:1700,mech:"none"},{name:"第二关 · 酸海群岛",subtitle:"海面之下，有东西在看着你",theme:"ocean",bossName:"深海巨鲸",bossHp:2600,mech:"none"},{name:"第三关 · 疯狂工厂",subtitle:"机械神的心脏，就在烟囱尽头",theme:"factory",bossName:"疯狂机械神",bossHp:3600,mech:"none"},{name:"第四关 · 冰封峡谷",subtitle:"暴风雪会把你吹离航线",theme:"snow",bossName:"冰霜巨鳐",bossHp:4100,mech:"wind",tip:"横风：看箭头提示，顶风走位",fire:[1,.5]},{name:"第五关 · 熔岩炼狱",subtitle:"脚下的岩浆随时会喷上天",theme:"volcano",bossName:"熔岩炎龙",bossHp:4600,mech:"lava",tip:"熔岩柱：地面发红的位置马上会喷发"},{name:"第六关 · 午夜霓虹城",subtitle:"灯全灭了，只剩你的探照灯",theme:"neon",bossName:"霓虹教父号",bossHp:5100,mech:"dark",tip:"夜幕：视野受限，留意发光的弹幕"},{name:"第七关 · 雷暴之海",subtitle:"雷不长眼——但你可以借它的手",theme:"storm",bossName:"雷霆海妖",bossHp:5600,mech:"lightning",tip:"落雷：会劈中敌人，把它们引到雷区"},{name:"第八关 · 沙海遗迹",subtitle:"方尖碑在给它们加护盾，先拆塔！",theme:"ruins",bossName:"黄金圣甲虫",bossHp:6100,mech:"pylon",tip:"护盾塔：被连线的敌人无敌，先打塔",fire:[1,.6]},{name:"第九关 · 装甲列车",subtitle:"一整列火车的炮口都对着你",theme:"rail",bossName:"钢铁巨兽号",bossHp:6600,mech:"train",tip:"装甲列车：车厢逐节开火，打掉炮塔车厢",fire:[.5,1]},{name:"第十关 · 虫巢丛林",subtitle:"打碎的虫子会变成更多虫子",theme:"jungle",bossName:"虫巢女王",bossHp:7100,mech:"hive",tip:"虫巢：虫卵会孵化，分裂虫越打越多",fire:[1,.65]},{name:"第十一关 · 王牌空域",subtitle:"云层里藏着会躲子弹的王牌",theme:"clouds",bossName:"赤色男爵",bossHp:7600,mech:"clouds",tip:"云海：云层会遮住视线，王牌会闪避"},{name:"第十二关 · 水晶洞窟",subtitle:"弹幕会在晶壁上反弹",theme:"crystal",bossName:"棱镜之心",bossHp:8100,mech:"bounce",tip:"晶壁：敌弹碰到两侧会反弹一次",fire:[.45,.55]},{name:"第十三关 · 引力废墟",subtitle:"黑洞会把一切都拽过去，包括子弹",theme:"orbit",bossName:"奇点引擎",bossHp:8600,mech:"gravity",tip:"引力井：会拉扯你和弹幕，别靠太近"},{name:"第十四关 · 极速追击",subtitle:"它们从你身后杀过来了！",theme:"highway",bossName:"公路霸王",bossHp:9100,mech:"chase",tip:"追击：敌人会从屏幕下方冲上来"},{name:"第十五关 · 激光防线",subtitle:"找准缺口，穿过激光栅栏",theme:"grid",bossName:"防火墙主机",bossHp:9600,mech:"grid",tip:"激光栅栏：从缺口穿过，打掉节点可断开",fire:[.8,1]},{name:"第十六关 · 幽灵舰队",subtitle:"时隐时现的舰队，只在现形时打得中",theme:"ghost",bossName:"幽灵旗舰",bossHp:10100,mech:"phase",tip:"相位：半透明的敌人打不中，等它现形",fire:[.7,1]},{name:"第十七关 · 深空裂隙",subtitle:"飞出左边，就会从右边回来",theme:"space",bossName:"虚空之眼",bossHp:10600,mech:"wrap",tip:"空间环绕：你和弹幕都能穿过左右边缘",fire:[.6,1]},{name:"第十八关 · 时间回廊",subtitle:"时间会突然停下——然后加倍奉还",theme:"clock",bossName:"时钟领主",bossHp:11100,mech:"timefreeze",tip:"时停：钟响时弹幕冻结，解冻后会重新瞄准",fire:[.65,1]},{name:"第十九关 · 天穹要塞",subtitle:"要塞主炮正在覆盖整片空域",theme:"fortress",bossName:"天穹堡垒",bossHp:11600,mech:"artillery",tip:"炮击：红圈落点会炸出一圈弹幕",fire:[.5,.7]},{name:"第二十关 · 天空母舰",subtitle:"掠夺者之王的旗舰就在云层之上，从头拆到尾",theme:"throne",bossName:"究极战机 · 掠夺者之王",bossHp:12e3,mech:"mothership",tip:"天空母舰：镜头会在母舰各区之间移动，摧毁全部炮台和舰桥",fire:[1.15,1.15]}];function Za(n){const t=Math.min(n,2),e=Math.max(0,n-2);return{hp:1+t*.25+e*.16,bspd:1+t*.08+e*.014,rate:1+e*.02,mk:n<3?1:n<8?2:n<14?3:4,k:e}}function Wr(n){return!!n.unlockAll||Ue.every((t,e)=>n.cleared.includes(e))}function fM(n){const t=Za(Math.min(19,1+n)),e=Math.max(0,n-18);return t.hp*=1+e*.08,t.rate=Math.min(2.2,t.rate+e*.02),t.k+=e*.5,t}function to(n,t){if(!n||t.unlockAll)return!0;const[e,i]=n.progress(t);return e>=i}const Ae=Math.PI/2,rt={pink:16726992,red:16722506,orange:16747039,purple:11754751,cyan:3860735},an=(n,t)=>t.z>n.bounds.top+.5&&t.z<n.bounds.bottom-1;function ef(n,t,e,i=5,s=rt.orange){n.state!=="playing"||!an(n,t)||(t.x-n.px)**2+(t.z-n.pz)**2<20||n.aimed(t.x,t.z,i,e,.22,s,.26)}function _0(n,t){n.ghost=t,n.model.visible=!t||Math.floor(n.t*18)%3===0}const fe=n=>n.bounds.top,Bh=(n,t,e=1.5)=>Math.max(n.bounds.left+e,Math.min(n.bounds.right-e,t));function oi(n,t,e,i,s,r=1,o=n.level){const a=n.mk;let c=.6+Math.random()*1.4,l=r+(a>=3?1:0);return n.addEnemy({kind:"drone",tint:o,x:t,z:fe(n)-1.5-e,hp:4,hw:.9,hd:.7,score:100,onDeath:a>=3?d=>ef(n,d,1):void 0,update(d,h){d.x+=i*h,d.z+=s*h,d.yaw=Math.atan2(i,s),c-=h,c<=0&&l>0&&an(n,d)&&(l--,c=n.cd(1.2),a>=4?n.aimed(d.x,d.z,8,3,.2,rt.pink):(n.aimed(d.x,d.z,8,1,0,rt.pink),a>=2&&n.later(.15,()=>!d.dead&&n.aimed(d.x,d.z,8,1,0,rt.pink))))}})}function $r(n,t,e,i=n.level){const s=n.mk;let r=0,o=0,a=8;const c=fe(n)+4+Math.random()*4;return n.addEnemy({kind:"drone",tint:i,x:t,z:fe(n)-1.5-e,hp:4,hw:.9,hd:.7,score:150,update(l,d){if(l.t2+=d,r===0&&l.z>=c&&(r=1,l.t2=0),r===1){a*=Math.pow(.02,d);const h=n.angleToPlayer(l.x,l.z);if(l.yaw=Math.atan2(Math.cos(h),Math.sin(h)),l.t2>.7){r=2;const f=s>=3?18:15;o=Math.cos(h)*f,a=Math.sin(h)*f,n.aimed(l.x,l.z,9,3,.25,rt.red),s>=2&&n.ring(l.x,l.z,6+s,3.5,Math.random(),rt.orange)}}l.x+=o*d,l.z+=a*d}})}function cr(n,t,e,i=9,s=n.level){const r=n.mk,o=t<0?n.bounds.left-1.5:n.bounds.right+1.5,a=fe(n)-1;let c=!1,l=.6,d=r>=3?3:0;return n.addEnemy({kind:"swooper",tint:s,x:o,z:a,hp:6,hw:1.2,hd:.7,score:150,delay:e,update(h,f){const u=h.t,m=i/2.1;h.x=o-t*u*6.5,h.z=a+u*m*2-u*u*(m/2.1)*2*.5;const v=m*2-u*(m/2.1)*2;h.yaw=Math.atan2(-t*6.5,v),!c&&u>1.4&&(c=!0,an(n,h)&&n.aimed(h.x,h.z,9,r>=2?3:1,.2,rt.pink)),l-=f,d>0&&l<=0&&an(n,h)&&(d--,l=.4,n.shootEx(h.x,h.z,Ae,6,{wait:.9,reaim:!0,color:rt.purple}))}})}function pM(n,t,e,i,s=n.level){const r=n.mk;let o=1+Math.random(),a=0;return n.addEnemy({kind:"swooper",tint:s,x:t,z:fe(n)-1.5-e,hp:5,hw:1.2,hd:.7,score:120,update(c,l){c.x=t+Math.sin(c.t*2.4)*i,c.z+=5.5*l,c.yaw=Math.cos(c.t*2.4)*.6,o-=l,o<=0&&an(n,c)&&(o=n.cd(2.2),a++,r>=3&&a%2===0?n.ring(c.x,c.z,6,5,c.t,rt.orange):n.aimed(c.x,c.z,8,1,0,rt.orange))}})}function tn(n,t,e,i=5,s=n.level){const r=n.mk;let o=.8,a=0,c=r<3;return n.addEnemy({kind:"gunship",tint:s,x:t,z:fe(n)-3,hp:45,hw:1.9,hd:1.4,score:800,medal:!0,onDeath:r>=4?l=>ef(n,l,5,5,rt.purple):void 0,update(l,d){const h=fe(n)+e;l.t<i+1.5?l.z+=(h-l.z)*Math.min(1,d*1.6):l.z-=7*d,l.x+=Math.sin(l.t*1.3)*d*1.2,o-=d,o<=0&&l.t>1&&l.t<i+1.5&&(o=n.cd(1.15-Math.min(n.level,2)*.15),a++,a%2?n.ring(l.x,l.z,10+Math.min(n.level,2)*4+Math.min(8,n.d.k>>1),6.5,a*.3,rt.purple):(n.aimed(l.x-1.5,l.z+.5,8.5,3,.18,rt.pink),n.aimed(l.x+1.5,l.z+.5,8.5,3,.18,rt.pink))),!c&&l.t>i*.5+1&&(c=!0,n.laser(l,0,1.2,n.angleToPlayer(l.x,l.z+1.2),{warn:1,dur:.5,w:.8,color:rt.red}))}})}function hn(n,t,e){return n.addEnemy({kind:"carrier",tint:0,x:t,z:fe(n)-2,hp:18,hw:1,hd:1.4,score:300,drop:e,update(i,s){i.z+=3.2*s,i.x=t+Math.sin(i.t*1.2)*1.5}})}function hc(n,t){return n.addEnemy({kind:"supply",tint:0,x:t,z:fe(n)-2,hp:30,hw:1.1,hd:1.4,score:1e3,drop:"perk",update(e,i){e.z+=2.6*i,e.x=t+Math.sin(e.t*1.6)*3,e.yaw=Math.cos(e.t*1.6)*.3}})}function ei(n,t,e=n.level){const i=n.mk;let s=1.5,r=0,o=2;return n.addEnemy({kind:"bomber",tint:e,x:t,z:fe(n)-4,hp:110,hw:3.2,hd:2.2,score:2e3,medal:!0,drop:Math.random()<.3?"P":"B",update(a,c){a.z+=(a.z<fe(n)+7?3:1.2)*c,s-=c,s<=0&&an(n,a)&&(s=n.cd(1.5-Math.min(n.level,2)*.2),r++,r%2?n.aimed(a.x,a.z+2,8,5,.2,rt.red):(n.ring(a.x-2.6,a.z,8,6,r,rt.purple),n.ring(a.x+2.6,a.z,8,6,-r,rt.purple))),o-=c,i>=3&&o<=0&&an(n,a)&&(o=n.cd(3),sf(n,a.x+(Math.random()-.5)*3,a.z+1))}})}function en(n,t,e,i=n.level){const s=n.mk;let r=1.2,o=0;return n.addEnemy({kind:"turret",tint:i,x:t,z:fe(n)-2-e,hp:22,hw:1.2,hd:1.2,score:500,medal:!0,update(a,c){a.z+=4*c;const l=n.angleToPlayer(a.x,a.z);if(a.yaw=Math.atan2(Math.cos(l),Math.sin(l)),r-=c,r<=0&&an(n,a))if(r=n.cd(1.3),o++,s>=3&&o%3===0)n.ring(a.x,a.z,10,5.5,o*.4,rt.orange);else{const d=s>=2?4:3;for(let h=0;h<d;h++)n.later(h*.12,()=>!a.dead&&n.aimed(a.x,a.z,10,1,0,rt.orange))}}})}function nf(n,t,e,i=0,s=6,r=n.level){let o=.8+Math.random();return n.addEnemy({kind:"shard",tint:r,x:t,z:fe(n)-1.5-e,hp:6,hw:.9,hd:.9,score:160,onDeath(a){if(n.state!=="playing"||!an(n,a))return;const c=5+Math.min(3,n.d.k>>2),l=Math.random();for(let d=0;d<c;d++)n.shootEx(a.x,a.z,l+d/c*Math.PI*2,2,{acc:3,maxSpd:7,color:rt.cyan,r:.2})},update(a,c){a.x+=i*c,a.z+=s*c,a.yaw+=c*2,o-=c,o<=0&&an(n,a)&&(o=n.cd(1.8),n.aimed(a.x,a.z,7,1,0,rt.cyan))}})}function mM(n,t,e,i=n.level){let s=1.4,r=3;return n.addEnemy({kind:"sniper",tint:i,x:t,z:fe(n)-2,hp:14,hw:1.2,hd:1.2,score:450,medal:!0,update(o,a){r>0?o.z+=(fe(n)+e-o.z)*Math.min(1,a*2):o.z-=6*a;const c=n.angleToPlayer(o.x,o.z);o.yaw=Math.atan2(Math.cos(c),Math.sin(c)),s-=a,s<=0&&r>0&&o.t>1&&(r--,s=n.cd(2.4),n.laser(o,Math.cos(c)*2.2,Math.sin(c)*2.2,c,{warn:1,dur:.2,w:.45,color:rt.red}))}})}function gM(n,t,e,i=n.level){let s=0,r=0,o=7;const a=fe(n)+3+Math.random()*4;return n.addEnemy({kind:"kamikaze",tint:i,x:t,z:fe(n)-1.5-e,hp:5,hw:.6,hd:.9,score:220,onDeath(c){n.mk>=3&&n.state==="playing"&&(c.x-n.px)**2+(c.z-n.pz)**2>20&&n.ring(c.x,c.z,8,3.5,Math.random(),rt.red)},update(c,l){if(s===0)c.z+=o*l,c.z>a&&(s=1,c.t2=0);else if(s===1){c.t2+=l;const d=n.angleToPlayer(c.x,c.z);c.yaw=Math.atan2(Math.cos(d),Math.sin(d)),Math.floor(c.t2*10)%2===0&&(c.flash=.05),c.t2>.8&&(s=2,r=Math.cos(d)*17,o=Math.sin(d)*17)}else c.x+=r*l,c.z+=o*l,Math.random()<l*30&&n.fx.trail(c.x-r*.05,c.z-o*.05,16747039,.25,.3)}})}function sf(n,t,e,i=n.level){let s=-1;const r=o=>{n.state==="playing"&&n.ring(o.x,o.z,8+Math.min(4,n.d.k>>2),3.6,Math.random(),rt.red)};return n.addEnemy({kind:"mine",tint:i,x:t,z:e,hp:3,hw:.6,hd:.6,score:60,onDeath:r,update(o,a){o.z+=2.2*a,o.yaw+=a*1.5,s<0&&(o.x-n.px)**2+(o.z-n.pz)**2<2.8*2.8&&(s=.6),s>=0&&(s-=a,Math.floor(s*14)%2===0&&(o.flash=.05),s<0&&(o.dead=!0,n.fx.explode(o.x,o.z,.9,16722506,9080729),r(o)))}})}function vM(n,t,e,i=n.level){const s=t<0?n.bounds.left-2:n.bounds.right+2;let r=.6;return n.addEnemy({kind:"minelayer",tint:i,x:s,z:fe(n)+2.5+e,hp:22,hw:1.4,hd:.9,score:500,medal:!0,update(o,a){o.x-=t*4.2*a,o.yaw=Math.atan2(-t,0),r-=a,r<=0&&o.x>n.bounds.left+.5&&o.x<n.bounds.right-.5&&(r=n.cd(.9),sf(n,o.x,o.z+.6))}})}function xM(n,t,e,i=n.level){let s=1.2,r=30*n.d.hp;return n.addEnemy({kind:"shieldbearer",tint:i,x:t,z:fe(n)-2-e,hp:16,hw:1.4,hd:1,score:600,medal:!0,frontShield:!0,onBlock(o,a){if(r-=a,r<=0&&o.frontShield){o.frontShield=!1,n.fx.sparksAt(o.x,o.z+1,8387839,12,9),n.events.popup("护盾破碎！",o.x,o.z,"warn");for(const c of o.mats)c.uniforms.uEmissive.value.setRGB(.25,.05,.05)}},update(o,a){o.z+=(o.z<fe(n)+5?3:1.1)*a,o.x+=Math.sin(o.t*.8)*a*1.5,s-=a,s<=0&&an(n,o)&&(s=n.cd(1.6),n.aimed(o.x,o.z+1,7.5,n.mk>=3?5:3,.2,rt.purple))}})}function rf(n,t,e=6,i=3.2,s=n.level){n.laser(null,t,fe(n)-1,Ae,{warn:1.6,dur:0,w:2.4,color:rt.orange}),n.events.callout("列车接近！","warn"),n.later(1.6,()=>{for(let r=0;r<e;r++)MM(n,t,r*3.2,i,r%2===0,s)})}function MM(n,t,e,i,s,r){let o=.8+Math.random()*.8;return n.addEnemy({kind:"traincar",tint:r,x:t,z:fe(n)-2-e,hp:s?30:18,hw:1,hd:1.5,score:s?500:250,ground:!0,medal:s,update(a,c){a.z+=i*c,s&&(o-=c,o<=0&&an(n,a)&&(o=n.cd(1.5),n.mk>=3&&Math.random()<.4?n.ring(a.x,a.z,10,5,Math.random(),rt.orange):n.aimed(a.x,a.z,8,3,.15,rt.orange)))}})}function ed(n,t,e,i=2,s=0,r,o=n.level){const a=i>=2;let c=1+Math.random(),l=s;const d=Math.random()*6;return n.addEnemy({kind:a?"splitter":"bug",tint:o,x:t,z:r??fe(n)-1.5-e,hp:a?12:4,hw:a?1:.6,hd:a?1:.6,score:a?200:80,onDeath(h){if(a&&n.state==="playing")for(const f of[-1,1])ed(n,h.x+f*.5,0,1,f*4.5,h.z,o)},update(h,f){h.z+=(a?3.5:5)*f,h.x+=l*f+Math.sin(h.t*3+d)*f*(a?1.5:3),l*=Math.pow(.4,f),h.yaw=Math.sin(h.t*3+d)*.4,c-=f,c<=0&&an(n,h)&&(c=n.cd(a?1.6:2.4),n.aimed(h.x,h.z,a?7:6.5,1,0,10288954))}})}function of(n,t,e,i=n.level){return n.addEnemy({kind:"pod",tint:i,x:t,z:fe(n)-1.5-e,hp:10,hw:.8,hd:.9,score:150,ground:!0,update(s,r){s.z+=2.5*r,an(n,s)&&(s.t2+=r);const o=1+(s.t2>2.8?Math.sin(s.t2*18)*.08:0);if(s.model.scale.setScalar(o),s.t2>2.8&&Math.floor(s.t2*8)%2===0&&(s.flash=.05),s.t2>3.8){s.dead=!0,n.fx.explode(s.x,s.z,.8,8045114);for(let a=0;a<3;a++)ed(n,s.x,0,1,(a-1)*4,s.z,i)}}})}function _M(n,t,e,i=n.level){const s=t<0?n.bounds.left-2:n.bounds.right+2;let r=-t*3,o=0,a=0,c=1;return n.addEnemy({kind:"ace",tint:i,x:s,z:fe(n)+2+e,hp:16,hw:1.3,hd:1,score:700,medal:!0,update(l,d){if(l.t>11){l.z-=9*d,l.yaw=Math.PI;return}a-=d,a<=0&&Math.abs(n.px-l.x)<1.7&&n.pz>l.z?(a=1,r=Bh(n,l.x+(n.px>l.x?-1:1)*(3+Math.random()*2)),n.fx.sparksAt(l.x,l.z,16777215,3,6)):a<-1.6&&(a=0,r=Bh(n,n.px+(Math.random()<.5?-1:1)*(3+Math.random()*2))),o+=((r-l.x)*6-o)*Math.min(1,d*5),l.x+=o*d,l.z+=(fe(n)+4+e*.5+Math.sin(l.t*1.3)*1.5-l.z)*Math.min(1,d*2),l.yaw=Math.max(-.6,Math.min(.6,o*.04)),c-=d,c<=0&&an(n,l)&&(c=n.cd(1.3),n.aimed(l.x,l.z+1,9.5,1,0,rt.red),n.later(.12,()=>!l.dead&&n.aimed(l.x,l.z+1,9.5,1,0,rt.red)))}})}function yM(n,t,e,i=n.level){let s=1;return n.addEnemy({kind:"prism",tint:i,x:t,z:fe(n)-2,hp:18,hw:1.1,hd:1.1,score:500,medal:!0,update(r,o){if(r.t<9?r.z+=(fe(n)+e-r.z)*Math.min(1,o*2):r.z-=6*o,r.yaw+=o*1.5,s-=o,s<=0&&r.t<9&&an(n,r)){s=n.cd(2.1);const a=n.angleToPlayer(r.x,r.z);for(let c=-1;c<=1;c++)n.shootEx(r.x,r.z,a+c*.5,4.5,{life:1.1,split:5,splitSpd:5,color:rt.purple,r:.3})}}})}function af(n,t,e,i=3,s=(Math.random()-.5)*2,r){const o=[0,.55,.9,1.35][i];let a=s;const c=n.addEnemy({kind:"asteroid",tint:0,x:t,z:r??fe(n)-2-e,hp:i*7,hw:o*.9,hd:o*.9,score:60*i,onDeath(l){if(i>1&&n.state==="playing")for(const d of[-1,1])af(n,l.x+d*.4,0,i-1,d*(2+Math.random()*2),l.z)},update(l,d){l.x+=a*d,(l.x<n.bounds.left+o&&a<0||l.x>n.bounds.right-o&&a>0)&&(a=-a),l.z+=(3+(3-i)*.8)*d,l.yaw+=d*(.6+(3-i)*.5)}});return c.model.scale.setScalar(o),c}function lf(n,t,e=n.level){n.laser(null,t,n.bounds.bottom+1,-Ae,{warn:1,dur:0,w:1.6,color:rt.red}),n.later(1,()=>{let i=-14,s=2,r=0;n.addEnemy({kind:"chaser",tint:e,x:t,z:n.bounds.bottom+2,hp:7,hw:.8,hd:1,score:260,update(o,a){i=Math.min(i+8*a,-2.5),o.z+=i*a,o.yaw=Math.PI,Math.random()<a*30&&n.fx.trail(o.x,o.z+1.2,16738847,.22,.25),r-=a,s>0&&r<=0&&o.z<n.pz-4&&an(n,o)&&(s--,r=.5,n.aimed(o.x,o.z,8,n.mk>=4?3:1,.2,rt.orange))}})})}function cf(n,t,e=7,i=2.6,s=n.level){const r=n.bounds.left+.6,a=(n.bounds.right-.6-r)/(e-1),c=[];for(let l=0;l<e;l++)c.push(n.addEnemy({kind:"node",tint:s,x:r+l*a,z:fe(n)-1,hp:10,hw:.7,hd:.7,score:150,ground:!0,update(d,h){d.z+=i*h}}));for(let l=0;l<e-1;l++)l!==t&&n.laser(c[l],0,0,0,{warn:.8,dur:40,w:.45,len:a,color:3860735})}function bM(n,t,e,i=n.level){let s=.8;const r=Math.random()*3.6;return n.addEnemy({kind:"phaser",tint:i,x:t,z:fe(n)-2-e,hp:14,hw:1.1,hd:1.4,score:400,update(o,a){if(o.z+=(o.z<fe(n)+4?3:1.2)*a,o.x+=Math.sin(o.t*.9+r)*a*2,_0(o,(o.t+r)%3.6>2.3),s-=a,s<=0&&!o.ghost&&an(n,o)){s=n.cd(1.4);const c=n.angleToPlayer(o.x,o.z);n.shootEx(o.x,o.z,c-.5,5,{turn:.5,color:14155627}),n.shootEx(o.x,o.z,c+.5,5,{turn:-.5,color:14155627})}}})}function SM(n,t,e,i=n.level){let s=1.8,r=n.mk>=4?5:4;return n.addEnemy({kind:"blinker",tint:i,x:t,z:fe(n)-2,hp:14,hw:1,hd:1,score:450,update(o,a){if(o.yaw+=a*3,r<=0){o.z-=8*a;return}if(o.t<1.5&&(o.z+=(fe(n)+e-o.z)*Math.min(1,a*2.5)),s-=a,s<.35&&(o.flash=.05),s<=0){r--,s=n.cd(1.9),n.fx.flash(o.x,o.z,1.4,11754751,.12);let c=0;for(let l=0;l<6&&(c=n.bounds.left+2+Math.random()*(n.bounds.right-n.bounds.left-4),!(Math.abs(c-n.px)>3));l++);o.x=c,o.z=fe(n)+3+Math.random()*7,n.fx.flash(o.x,o.z,1.4,11754751,.12),n.ring(o.x,o.z,8+Math.min(4,n.d.k>>2),5,Math.random(),rt.purple)}}})}function wM(n,t,e,i=n.level){let s=1.5;return n.addEnemy({kind:"healer",tint:i,x:t,z:fe(n)-2-e,hp:14,hw:.9,hd:.9,score:550,medal:!0,update(r,o){if(r.t<14?r.z+=(fe(n)+4+e*.3-r.z)*Math.min(1,o*1.5):r.z-=6*o,r.x+=Math.sin(r.t*.7)*o*2,r.yaw+=o*2,s-=o,s<=0&&an(n,r)){s=n.cd(2.2);for(const a of n.enemies)a===r||a.dead||a.boss||a.kind==="healer"||a.hp>=a.maxHp||(a.x-r.x)**2+(a.z-r.z)**2>49||(a.hp=Math.min(a.maxHp,a.hp+a.maxHp*.3),n.bolts.push({pts:[[r.x,r.z],[a.x,a.z]],life:.25,color:3854442}),n.fx.sparksAt(a.x,a.z,3854442,4,5))}}})}function EM(n,t,e=n.level){let i=2,s=1.5;return n.addEnemy({kind:"mothership",tint:e,x:t,z:fe(n)-4,hp:150,hw:3,hd:2.3,score:3e3,medal:!0,drop:"B",update(r,o){if(r.t<15?r.z+=(fe(n)+5-r.z)*Math.min(1,o*.8):r.z-=4*o,r.x=t+Math.sin(r.t*.4)*2,i-=o,s-=o,!(r.t>15||!an(n,r))&&(i<=0&&(i=n.cd(2.6),n.ring(r.x,r.z+1,16+Math.min(8,n.d.k>>1),5,r.t,rt.purple)),s<=0)){s=n.cd(3.5);for(const a of[-1.3,1.3])oi(n,r.x+a,-(r.z+2.3-fe(n)+1.5),a*1.5,6,1,e)}}})}function TM(n,t,e=0,i=n.level){return n.addEnemy({kind:"pylon",tint:i,x:t,z:fe(n)-2-e,hp:35,hw:1,hd:1,score:800,medal:!0,ground:!0,drop:Math.random()<.3?"P":void 0,update(s,r){s.z+=2.2*r}})}function rn(n,t,e,i,s,r=6.5){const o=n.bounds.top+r;return n.addEnemy({kind:"boss",tint:n.level,x:0,z:n.bounds.top-8,hp:t,hw:e,hd:i,score:2e4+n.level*15e3,boss:!0,update(a,c){if(a.data.mt===void 0){if(a.z+=(o-a.z)*Math.min(1,c*1.2)+c*.5,a.invuln=!0,a.z<o-.05&&a.t<4)return;a.z=o,a.data.mt=0}a.data.mt+=c;const l=a.data.mt;a.invuln=!1;const d=a.hp/a.maxHp,h=d>.6?0:d>.25?1:2;h!==a.data.phase&&(a.data.phase!==void 0&&n.bossPhase(a,h),a.data.phase=h),s(a,c,h,l)}})}function AM(n,t,e){if(t===0){let l=1,d=2,h=0,f=4,u=3,m=0;return rn(n,e,4.6,2.2,(v,p,g,M)=>{if(v.x=Math.sin(M*.45)*4,v.z=n.bounds.top+6.5+Math.sin(M*.9)*.6,l-=p,d-=p,h-=p,f-=p,l<=0&&(l=g===0?1.4:1.8,n.aimed(v.x-3.6,v.z+1.2,9,g===2?7:5,.16,rt.pink),n.aimed(v.x+3.6,v.z+1.2,9,g===2?7:5,.16,rt.pink)),g===0&&d<=0&&(d=2.4,n.ring(v.x,v.z+1.5,18,6.5,Math.random(),rt.purple)),g>=1&&h<=0){h=g===1?.1:.075,m+=g===1?.33:.27;const _=g===1?2:3;for(let x=0;x<_;x++)n.shoot(v.x,v.z+1.5,m+x*Math.PI*2/_,6.5,rt.orange)}if(u-=p,g>=1&&u<=0){u=g===1?6:4.5;for(const _ of[-3.6,3.6])n.laser(v,_,1.2,n.angleToPlayer(v.x+_,v.z+1.2),{warn:.9,dur:.8,w:1})}g===2&&f<=0&&(f=5,oi(n,-5,0,1,6,1),oi(n,5,0,-1,6,1),n.ring(v.x,v.z+1.5,24,5,0,rt.red,.4))})}if(t===1){let l=0,d=2,h=1,f=6,u=4,m=0,v=0;return rn(n,e,5,3.6,(p,g,M,_)=>{if(p.x=Math.sin(_*.35)*3.5,p.z=n.bounds.top+6.5+Math.sin(_*.7)*.8,l-=g,d-=g,h-=g,f-=g,M===0&&l<=0){l=.11;const x=Math.sin(_*1.6)*1;n.shoot(p.x,p.z+4.4,Ae+x,8,rt.pink),n.shoot(p.x,p.z+4.4,Ae-x,8,rt.pink)}if(d<=0&&(d=M===2?1.4:2,n.aimed(p.x-4.8,p.z+1.8,6,1,0,rt.red,.5),n.aimed(p.x+4.8,p.z+1.8,6,1,0,rt.red,.5)),M===1&&l<=0){l=.1,m+=.22;for(let x=0;x<3;x++)n.shoot(p.x,p.z+2,m+x*Math.PI*2/3,6,rt.purple),n.shoot(p.x,p.z+2,-m+x*Math.PI*2/3+.5,6,rt.pink)}if(M===2&&h<=0&&(h=1.1,v^=1,n.ring(p.x,p.z+2,22,6,v*.14,rt.purple),n.aimed(p.x,p.z+4.4,11,5,.12,rt.red)),M>=1&&f<=0){f=7;for(let x=0;x<4;x++)cr(n,x%2?1:-1,x*.3,8,1)}if(u-=g,M>=1&&u<=0){u=M===1?7:5;const x=Math.random()<.5?1:-1;n.laser(p,0,4.4,Ae-x*.9,{warn:1,dur:1.8,w:1.4,sweep:x*1,color:3860735})}})}let i=0,s=1.5,r=6,o=3,a=0,c=0;return rn(n,e,4.6,4.6,(l,d,h,f)=>{l.x=Math.sin(f*.3)*3,l.z=n.bounds.top+7+Math.sin(f*.6)*.8;const u=h===0?.8:h===1?1.3:-1.7;a+=u*d;const m=l.model.children.find(v=>v.userData.spin!==void 0);if(m&&(m.userData.spin=0,m.rotation.y=a),i-=d,s-=d,r-=d,i<=0){i=h===0?.32:h===1?.28:.4;for(let v=0;v<4;v++){const p=a+v*Math.PI/2,g=l.x+Math.sin(p)*5.4,M=l.z+Math.cos(p)*5.4,_=Math.atan2(Math.cos(p),Math.sin(p));if(h===0)n.shoot(g,M,_,6.5,rt.pink);else if(h===1)for(let x=-1;x<=1;x++)n.shoot(g,M,_+x*.25,6.5,rt.pink);else n.aimed(g,M,7.5,1,0,rt.orange)}}if(s<=0&&(h===0?(s=1.5,n.aimed(l.x,l.z,9,3,.2,rt.red)):h===1?(s=1.8,n.ring(l.x,l.z,16,6,Math.random(),rt.purple),n.aimed(l.x,l.z,10,3,.15,rt.red)):(s=.75,c^=1,n.ring(l.x,l.z,28,5.5,c*.11,rt.purple))),h>=1&&r<=0&&(r=h===1?8:6,en(n,-6,0,2),en(n,6,0,2)),o-=d,h>=1&&o<=0){o=h===1?7:6;const v=h===1?2:4;for(let p=0;p<v;p++){const g=a+p*Math.PI*2/v;n.laser(l,0,0,Math.atan2(Math.cos(g),Math.sin(g)),{warn:1.1,dur:2.2,w:1.1,sweep:-u,color:16726992})}}},7)}const me=(n,t,e=7,i=1)=>s=>{for(let r=0;r<t;r++)oi(s,n,r*1.8,0,e,i)},Oe=(n,t,e=6)=>i=>{for(let s=0;s<t;s++){const r=s-(t-1)/2;oi(i,n+r*1.6,Math.abs(r)*1.4,0,e,1)}},Ct=(n,t,e=9)=>i=>{for(let s=0;s<t;s++)cr(i,n,s*.32,e)},se=(n,t,e=3)=>i=>{for(let s=0;s<t;s++)pM(i,n,s*2.2,e)},Ee=n=>t=>n.forEach((e,i)=>$r(t,e,i*1.2)),ge=(n,t)=>e=>{for(let i=0;i<t;i++){const s=n?e.bounds.left-1-i*1.3:e.bounds.right+1+i*1.3;oi(e,s,i*1.3,n?4:-4,6.5,1)}},L=(...n)=>t=>n.forEach(e=>e(t)),at=(n,t,e=5)=>i=>tn(i,n,t,e),te=n=>t=>ei(t,n),Ua=(n,t=0)=>e=>en(e,n,t),Ti=(n,t=0)=>e=>n.forEach((i,s)=>en(e,i,t+s*2)),Rt=(n,t)=>e=>hn(e,n,t),Ai=(n,t=6)=>e=>n.forEach((i,s)=>nf(e,i,s*1.2,0,t)),fi=(n,t)=>e=>{for(let i=0;i<t;i++){const s=n?e.bounds.left-1-i*1.2:e.bounds.right+1+i*1.2;nf(e,s,i*1.2,n?3.5:-3.5,6)}},He=(n,t=5)=>e=>n.forEach(i=>mM(e,i,t)),Me=n=>t=>n.forEach((e,i)=>gM(t,e,i*1.4)),mn=(n,t=0)=>e=>vM(e,n,t),gn=(n,t=0)=>e=>n.forEach((i,s)=>xM(e,i,t+s*.6)),pi=(n,t=6,e=3.2)=>i=>rf(i,n,t,e),Ci=n=>t=>n.forEach((e,i)=>ed(t,e,i*1.4)),_o=n=>t=>n.forEach((e,i)=>of(t,e,i*1.2)),An=(n,t=0)=>e=>{for(let i=0;i<n;i++)_M(e,i%2?1:-1,t+i*1.4)},ti=(n,t=5)=>e=>n.forEach(i=>yM(e,i,t)),Nn=(n,t=3)=>e=>n.forEach((i,s)=>af(e,i,s*2.2,t)),ys=n=>t=>n.forEach((e,i)=>t.later(i*.45,()=>lf(t,e))),uc=n=>t=>cf(t,n),Yi=n=>t=>n.forEach((e,i)=>bM(t,e,i*1.5)),Vs=(n,t=5)=>e=>n.forEach((i,s)=>e.later(s*.5,()=>SM(e,i,t+s%2*3))),Ri=(n,t=0)=>e=>wM(e,n,t),yo=n=>t=>EM(t,n),mi=(n,t=0)=>e=>TM(e,n,t),fc=[74,82,88,90,92,92,94,94,96,96,98,98,100,100,100,102,102,104,104,1/0],CM=[["drone","swooper","gunship","carrier","bomber","supply"],["drone","swooper","gunship","carrier","bomber","supply"],["drone","swooper","gunship","carrier","bomber","turret","supply"],["drone","swooper","gunship","carrier","bomber","supply","shard"],["drone","swooper","gunship","carrier","bomber","turret","supply","shard","sniper"],["drone","swooper","gunship","carrier","bomber","supply","sniper","kamikaze"],["drone","swooper","gunship","carrier","bomber","supply","kamikaze","minelayer","mine","shard"],["drone","swooper","gunship","carrier","turret","supply","pylon","shieldbearer","sniper"],["drone","swooper","gunship","carrier","bomber","turret","supply","traincar","shieldbearer","mine"],["drone","swooper","gunship","carrier","bomber","supply","splitter","bug","pod","kamikaze","mine"],["drone","swooper","gunship","carrier","bomber","supply","ace","sniper","kamikaze","mine"],["drone","swooper","gunship","carrier","bomber","turret","supply","prism","shard","shieldbearer","mine"],["drone","swooper","gunship","carrier","bomber","supply","asteroid","minelayer","mine","sniper"],["drone","swooper","gunship","carrier","bomber","supply","chaser","kamikaze","ace","mine"],["drone","swooper","gunship","carrier","bomber","turret","supply","node","sniper","shieldbearer","prism","mine"],["drone","swooper","gunship","carrier","bomber","supply","phaser","splitter","bug","kamikaze","mine"],["drone","swooper","gunship","carrier","bomber","supply","blinker","asteroid","prism","ace","mine"],["drone","swooper","gunship","carrier","bomber","turret","supply","healer","shieldbearer","sniper","shard","mine"],["drone","swooper","gunship","carrier","bomber","turret","supply","mothership","minelayer","mine","pylon","kamikaze"],["drone","swooper","carrier","supply","kamikaze","ace","msFlak","msMissile","msCannon","msLaser","msBridge"]],pc=[14,38,60],mc=[[[2,me(-4,5)],[4,me(4,5)],[7.5,Ct(-1,6)],[10.5,Ct(1,6)],[13,n=>hn(n,0,"P")],[15,Oe(0,7)],[19,n=>tn(n,-4,6)],[20,n=>tn(n,4,8)],[26,se(-3,4)],[27,se(3,4)],[31,n=>hn(n,-3,"M")],[32,L(me(-6,4),me(6,4))],[36,n=>ei(n,0)],[40,L(Ct(-1,5,7),Ct(1,5,11))],[44,n=>hn(n,3,"P")],[45,L(n=>tn(n,-5,5,4),n=>tn(n,0,8,4),n=>tn(n,5,5,4))],[52,n=>hn(n,0,"B")],[53,Ee([-5,-2,1,4])],[57,Oe(-3,5)],[58,Oe(3,5)],[61,L(n=>ei(n,-4),n=>ei(n,4))],[66,L(ge(!0,6),n=>hn(n,0,"P"))]],[[2,Ct(-1,7)],[4,Ct(1,7)],[6,n=>hn(n,0,"P")],[8,L(se(-4,4,2.5),se(4,4,2.5))],[12,n=>tn(n,0,7,6)],[13,Ee([-6,6,-3,3])],[18,L(ge(!0,6),ge(!1,6))],[21,n=>hn(n,-4,"M")],[23,L(n=>ei(n,-3.5),Ct(1,6,12))],[29,L(me(-5,5,8,2),me(0,5,8,2),me(5,5,8,2))],[33,L(n=>tn(n,-5,5,5),n=>tn(n,5,5,5))],[36,n=>hn(n,0,"B")],[38,Ee([-6,-3,0,3,6])],[42,L(Ct(-1,6,7),Ct(1,6,13))],[46,n=>ei(n,3)],[47,n=>hn(n,-4,"P")],[50,Oe(0,9,7)],[53,L(se(-5,5,2),se(5,5,2))],[58,L(n=>tn(n,-5,9,5),n=>tn(n,0,5,5),n=>tn(n,5,9,5))],[62,n=>hn(n,4,"M")],[66,L(n=>ei(n,-4),n=>ei(n,4))],[70,L(ge(!0,7),ge(!1,7))],[74,n=>hn(n,0,"P")],[75,Ee([-5,-2,2,5])]],[[2,L(n=>en(n,-5,0),n=>en(n,5,0))],[3,n=>hn(n,0,"P")],[5,L(Ct(-1,7,8),Ct(1,7,12))],[9,L(n=>en(n,-3,0),n=>en(n,3,4),n=>en(n,0,8))],[12,Ee([-6,-3,0,3,6])],[16,L(n=>tn(n,-4,6,5),n=>tn(n,4,6,5))],[20,n=>hn(n,-3,"M")],[22,L(me(-6,6,8,2),me(6,6,8,2),se(0,4,4))],[27,n=>ei(n,0)],[30,L(n=>en(n,-6,0),n=>en(n,6,0),n=>en(n,-6,6),n=>en(n,6,6))],[33,n=>hn(n,3,"B")],[35,L(ge(!0,8),ge(!1,8))],[40,L(n=>tn(n,-5,5,5),n=>tn(n,0,9,5),n=>tn(n,5,5,5))],[44,n=>hn(n,0,"P")],[46,L(Ct(-1,8,7),Ct(1,8,13))],[50,L(n=>ei(n,-4),n=>ei(n,4))],[55,Ee([-6,-4,-2,0,2,4,6])],[58,n=>hn(n,-4,"M")],[60,L(Oe(-3,7,7),Oe(3,7,7))],[64,L(n=>en(n,-5,0),n=>en(n,5,0),n=>en(n,0,4),n=>tn(n,0,9,6))],[70,L(se(-4,5,3),se(4,5,3))],[74,n=>ei(n,0)],[76,n=>hn(n,0,"P")],[79,L(Ct(-1,8,9),Ct(1,8,9))],[82,Ee([-5,-2,2,5])]],[[2,Ai([-4,-2,0,2,4])],[5,me(-5,5)],[6,me(5,5)],[9,Ct(-1,7)],[11,Ct(1,7)],[13,Rt(0,"P")],[16,fi(!0,6)],[19,at(-4,6)],[20,at(4,8)],[25,L(Ai([-6,-3,0,3,6],7),se(0,4))],[29,Ee([-5,-2,2,5])],[32,Rt(-3,"M")],[34,L(Oe(-3,6),Oe(3,6))],[38,te(0)],[42,L(fi(!1,6),Ct(-1,6,8))],[47,L(at(-5,5),at(0,9),at(5,5))],[53,Rt(0,"B")],[54,L(me(-6,6,8,2),me(6,6,8,2))],[58,Ai([-6,-4,-2,0,2,4,6],6)],[62,L(te(-4),te(4))],[67,L(ge(!0,7),ge(!1,7))],[71,Rt(3,"P")],[73,L(se(-4,5,3),se(4,5,3),Ai([0],5))],[78,L(at(-4,6,6),at(4,6,6))],[82,L(fi(!0,5),fi(!1,5))],[85,Ee([-6,-3,0,3,6])]],[[2,L(Ct(-1,7,8),Ct(1,7,12))],[5,He([0],5)],[8,me(-5,6,8,2)],[9,me(5,6,8,2)],[12,Rt(0,"P")],[14,L(He([-5,5],4),Ee([-2,2]))],[19,at(0,7,6)],[21,Ai([-6,-3,3,6])],[25,L(Ua(-5),Ua(5),se(0,4,3))],[30,Rt(-4,"M")],[32,L(He([-6,0,6],5),Oe(0,7))],[37,te(-3)],[40,L(Ct(-1,7,9),Ct(1,7,9))],[44,L(at(-5,6),at(5,6))],[49,L(He([-3,3],3),fi(!0,6))],[54,Rt(0,"B")],[56,L(Ti([-6,6],0),Ee([-4,-1,2,5]))],[61,L(te(-4),te(4))],[66,L(He([-6,-2,2,6],5),me(0,6,8,2))],[71,Rt(4,"P")],[73,L(se(-5,5,2),se(5,5,2),Ai([-1,1]))],[78,L(at(-5,5,6),at(0,9,6),at(5,5,6))],[83,L(He([-4,4],4),ge(!0,7),ge(!1,7))],[87,Ee([-6,-3,0,3,6])]],[[2,me(0,6)],[5,Me([-3,3])],[8,L(Ct(-1,7),Ct(1,7,12))],[12,Rt(0,"P")],[14,Me([-6,-2,2,6])],[18,L(at(-4,6),He([4],5))],[23,L(se(-4,5,2.5),se(4,5,2.5))],[27,L(Me([-5,0,5]),Ee([-3,3]))],[31,Rt(-4,"M")],[33,te(0)],[37,L(Oe(-3,7,7),Oe(3,7,7))],[41,Me([-6,-4,-2,0,2,4,6])],[46,L(at(-5,5),at(5,5),He([0],7))],[52,Rt(0,"B")],[54,L(ge(!0,7),ge(!1,7),Me([0]))],[59,L(te(-4),te(4))],[64,L(Ct(-1,8,8),Ct(1,8,12),Me([-5,5]))],[69,Rt(3,"P")],[71,L(He([-6,6],4),me(-3,6,8,2),me(3,6,8,2))],[76,Me([-6,-3,0,3,6,-1.5,1.5])],[80,L(at(-4,6,6),at(4,6,6))],[85,L(Ee([-6,-2,2,6]),Me([-4,4]))],[88,L(se(0,6,4))]],[[2,L(Ct(-1,7),Ct(1,7,12))],[5,mn(-1,0)],[10,L(me(-5,6,8,2),me(5,6,8,2))],[12,Rt(0,"P")],[14,mn(1,3)],[18,L(at(-4,7),Me([4,0]))],[23,L(se(-4,5,3),se(4,5,3))],[26,L(mn(-1,1),mn(1,5))],[31,Rt(-4,"M")],[33,L(te(0),Ai([-6,6]))],[38,L(Ee([-6,-3,0,3,6]),Me([-2,2]))],[43,L(at(-5,5),at(5,5))],[48,L(mn(1,0),ge(!0,7))],[53,Rt(0,"B")],[55,L(Oe(-3,7,7),Oe(3,7,7))],[59,L(te(-4),te(4))],[64,L(mn(-1,0),mn(1,4),He([0],6))],[69,Rt(3,"P")],[71,L(Me([-6,-3,3,6]),Ct(-1,8,9))],[76,L(at(-5,5,6),at(0,9,6),at(5,5,6))],[81,L(mn(-1,2),Ee([-5,-2,2,5]))],[86,L(ge(!0,8),ge(!1,8))],[90,L(se(-5,5,2),se(5,5,2))]],[[2,me(0,6)],[4,gn([0])],[8,L(Ct(-1,7),Ct(1,7,12))],[11,L(mi(-4),me(-4,5,5,1))],[13,Rt(0,"P")],[16,L(gn([-4,4]),Ee([-1,1]))],[21,L(mi(5),at(4,7),He([-5],5))],[27,L(se(-4,5,3),se(4,5,3))],[31,Rt(-4,"M")],[33,L(mi(0),gn([-5,5]),Ua(-2,2),Ua(2,2))],[40,L(Me([-6,6]),Oe(0,7))],[44,L(at(-5,5),at(5,5))],[49,L(mi(-5),mi(5),gn([-5,0,5]))],[54,Rt(0,"B")],[56,L(Ee([-6,-3,3,6]),He([0],4))],[61,L(ge(!0,7),ge(!1,7))],[65,L(mi(0,2),gn([-3,3]),at(0,9,6))],[71,Rt(3,"P")],[73,L(Ti([-6,6]),Ct(-1,8,8),Ct(1,8,12))],[78,L(mi(-4),mi(4),gn([-6,-2,2,6]))],[85,L(He([-5,5],4),me(0,7,8,2))],[89,L(Me([-5,-2,2,5]))]],[[2,L(Ct(-1,7),Ct(1,7,12))],[4,pi(-5,5)],[9,L(me(2,6,8,2),me(6,6,8,2))],[12,Rt(0,"P")],[14,L(pi(5,6),gn([-3]))],[20,L(Ti([-6,-2],0),at(4,7))],[25,L(pi(0,7,3.6),se(-6,4,1.5),se(6,4,1.5))],[31,Rt(-4,"M")],[33,L(te(-3),mn(1,2))],[38,L(pi(-5,6),pi(5,6,2.8))],[44,L(Ee([-2,0,2]),Me([-6,6]))],[48,L(at(-5,5),at(5,5),gn([0]))],[53,Rt(0,"B")],[55,L(pi(0,8,3.8),Ct(-1,7,9),Ct(1,7,9))],[61,L(te(-4),te(4))],[66,L(pi(-5,6),Ti([2,6],0),He([0],4))],[71,Rt(3,"P")],[73,L(pi(5,7,3.4),Oe(-3,7,7))],[78,L(at(-5,5,6),at(0,9,6),at(5,5,6))],[83,L(pi(-5,6,3.6),pi(0,6,3),pi(5,6,3.6))],[90,L(ge(!0,8),ge(!1,8))]],[[2,Ci([-3,3])],[5,L(Ct(-1,7),Ct(1,7,12))],[8,_o([-4,0,4])],[12,Rt(0,"P")],[14,L(Ci([-6,-2,2,6]),me(0,5,7,2))],[19,L(at(-4,7),at(4,7))],[24,L(_o([-6,-2,2,6]),se(0,5,4))],[29,L(Ci([-5,0,5]),Me([-2,2]))],[32,Rt(-4,"M")],[34,te(0)],[39,L(Ci([-6,-4,-2,0,2,4,6]))],[44,L(at(-5,5),at(5,5),_o([0]))],[49,L(Ee([-6,-3,0,3,6]),Ci([-1,1]))],[53,Rt(0,"B")],[55,L(Oe(-3,7,7),Oe(3,7,7),_o([-6,6]))],[60,L(te(-4),te(4))],[65,L(Ci([-5,-2,2,5]),Ct(-1,8,9),Ct(1,8,9))],[70,Rt(3,"P")],[72,L(_o([-5,-2.5,0,2.5,5]),Me([-6,6]))],[77,L(at(-5,5,6),at(0,9,6),at(5,5,6))],[83,L(Ci([-6,-3,0,3,6]),mn(-1,2))],[88,L(ge(!0,8),ge(!1,8),Ci([0]))]],[[2,L(Ct(-1,7),Ct(1,7,12))],[5,An(1)],[10,L(me(-5,6,8,2),me(5,6,8,2))],[12,Rt(0,"P")],[14,An(2)],[20,L(at(0,7),se(-5,5,2),se(5,5,2))],[25,L(An(2,2),Me([0]))],[31,Rt(-4,"M")],[33,L(te(-3),He([4],5))],[38,L(Ee([-6,-3,0,3,6]),An(1))],[43,L(at(-5,5),at(5,5))],[48,An(4)],[53,Rt(0,"B")],[55,L(Oe(-3,7,7),Oe(3,7,7))],[59,L(te(-4),te(4),An(2,3))],[66,L(Me([-6,-3,3,6]),Ct(-1,8,9),Ct(1,8,9))],[70,Rt(3,"P")],[72,L(An(3),He([0],6))],[78,L(at(-5,5,6),at(0,9,6),at(5,5,6))],[84,L(An(4,1),ge(!0,7))],[91,L(Ee([-5,-2,2,5]),ge(!1,7))]],[[2,L(Ai([-4,0,4]),Ct(-1,6))],[5,ti([0],5)],[9,L(me(-5,6,8,2),me(5,6,8,2))],[12,Rt(0,"P")],[14,ti([-5,5],4)],[19,L(at(0,8),fi(!0,6))],[24,L(gn([-4,4]),se(0,5,4))],[29,L(ti([-6,0,6],5),Ee([-3,3]))],[33,Rt(-4,"M")],[35,L(te(0),fi(!1,6))],[40,L(Ti([-6,6],0),Me([-2,2]))],[44,L(at(-5,5),at(5,5),ti([0],8))],[50,L(Ai([-6,-4,-2,0,2,4,6],6),Ct(1,8,12))],[54,Rt(0,"B")],[56,L(ti([-4,4],4),gn([0]))],[61,L(te(-4),te(4))],[66,L(Oe(-3,7,7),Oe(3,7,7),ti([0],6))],[71,Rt(3,"P")],[73,L(at(-5,5,6),at(0,9,6),at(5,5,6))],[79,L(ti([-6,-2,2,6],5),Ee([-5,5]))],[86,L(fi(!0,7),fi(!1,7))],[92,L(se(-4,5,3),se(4,5,3),Me([0]))]],[[2,Nn([-3,3])],[6,L(Ct(-1,7),Ct(1,7,12))],[10,L(Nn([-6,0,6]),me(-3,5,7,2))],[12,Rt(0,"P")],[15,L(at(-4,7),mn(1,3))],[20,L(Nn([-5,-1,3],2),Nn([5,1],3),se(0,4,3))],[26,L(He([-5,5],4),Ee([-2,2]))],[31,Rt(-4,"M")],[33,L(te(0),Nn([-6,6]))],[38,L(Me([-5,-2,2,5]),Nn([0],3))],[43,L(at(-5,5),at(5,5))],[48,L(Nn([-6,-3,0,3,6],2),mn(-1,1))],[53,Rt(0,"B")],[55,L(Oe(-3,7,7),Oe(3,7,7))],[59,L(te(-4),te(4),Nn([0]))],[65,L(Nn([-6,-2,2,6]),He([0],6),Ct(-1,8,9))],[70,Rt(3,"P")],[72,L(at(-5,5,6),at(0,9,6),at(5,5,6))],[78,L(Nn([-5,0,5],3),Ee([-6,-3,3,6]))],[85,L(mn(-1,0),mn(1,4),Nn([-2,2],2))],[92,L(ge(!0,8),ge(!1,8))]],[[2,me(0,6,9)],[5,ys([-4,4])],[9,L(Ct(-1,7,8),Ct(1,7,12))],[12,Rt(0,"P")],[14,L(Me([-5,0,5]),ys([-2,2]))],[19,L(at(-4,6),at(4,8))],[24,L(An(2),me(-6,5,9,2),me(6,5,9,2))],[30,Rt(-4,"M")],[32,L(ys([-6,-3,0,3,6]))],[36,L(te(0),Me([-6,6]))],[41,L(Ee([-6,-3,0,3,6]),ys([0]))],[45,L(at(-5,5),at(5,5),An(1))],[51,L(ge(!0,7),ge(!1,7),ys([-5,5]))],[54,Rt(0,"B")],[56,L(Me([-6,-4,-2,0,2,4,6]))],[61,L(te(-4),te(4))],[66,L(ys([-6,-2,2,6]),Ct(-1,8,9),Ct(1,8,9))],[71,Rt(3,"P")],[73,L(An(3),Me([-3,3]))],[79,L(at(-5,5,6),at(0,9,6),at(5,5,6),ys([0]))],[85,L(ys([-6,-3,0,3,6]),me(0,7,9,2))],[92,L(se(-4,5,3),se(4,5,3))]],[[2,L(Ct(-1,7),Ct(1,7,12))],[6,L(He([-5,5],5))],[9,L(me(0,6,8,2))],[12,Rt(0,"P")],[15,L(gn([-3,3]),Ti([-6,6],0))],[21,L(uc(1),ti([4],5))],[25,L(at(-4,7),He([4],4))],[30,L(se(-4,5,3),se(4,5,3),Me([0]))],[33,Rt(-4,"M")],[35,L(te(0),gn([-5,5]))],[41,L(He([-6,-2,2,6],5),Ee([-4,4]))],[46,L(at(-5,5),at(5,5),uc(4))],[52,L(Ti([-6,-2,2,6],0))],[55,Rt(0,"B")],[57,L(Oe(-3,7,7),Oe(3,7,7),ti([0],7))],[62,L(te(-4),te(4))],[67,L(gn([-6,-2,2,6]),He([0],4))],[72,Rt(3,"P")],[74,L(at(-5,5,6),at(0,9,6),at(5,5,6))],[80,L(uc(0),Me([-4,4]),ti([-5,5],6))],[86,L(He([-6,-3,3,6],5),Ti([0],0))],[92,L(ge(!0,8),ge(!1,8))]],[[2,Yi([-3,3])],[6,L(Ct(-1,7),Ct(1,7,12))],[10,L(me(-5,6,8,2),me(5,6,8,2))],[12,Rt(0,"P")],[14,L(Yi([-6,0,6]),Me([-3,3]))],[19,L(at(-4,7),at(4,7))],[24,L(Ci([-5,0,5]),se(0,4,4))],[29,L(Yi([-5,-2,2,5]),Ee([0]))],[33,Rt(-4,"M")],[35,L(te(0),Yi([-6,6]))],[40,L(Oe(-3,7,7),Oe(3,7,7))],[44,L(at(-5,5),at(5,5),Yi([0]))],[50,L(Me([-6,-4,-2,0,2,4,6]))],[54,Rt(0,"B")],[56,L(Yi([-6,-3,0,3,6]),Ci([-1,1]))],[61,L(te(-4),te(4))],[66,L(Ee([-6,-3,0,3,6]),Yi([-4,4]))],[71,Rt(3,"P")],[73,L(at(-5,5,6),at(0,9,6),at(5,5,6))],[79,L(Yi([-6,-2,2,6]),Ct(-1,8,9),Ct(1,8,9))],[86,L(ge(!0,8),ge(!1,8),Me([-5,5]))],[93,L(Yi([-4,0,4]))]],[[2,L(Ct(-1,7),Ct(1,7,12))],[5,Vs([0],5)],[9,L(Nn([-5,5],2),me(0,6,8,2))],[12,Rt(0,"P")],[14,Vs([-5,5],4)],[19,L(at(-4,7),An(1))],[24,L(ge(!0,7),ge(!1,7))],[28,L(Vs([-6,0,6],5),ti([0],8))],[33,Rt(-4,"M")],[35,L(te(0),Nn([-6,6],3))],[40,L(Me([-5,-2,2,5]),Vs([0],6))],[45,L(at(-5,5),at(5,5))],[50,L(Vs([-6,-2,2,6],4),se(0,5,4))],[54,Rt(0,"B")],[56,L(An(2),ti([-5,5],5))],[61,L(te(-4),te(4))],[66,L(Vs([-5,0,5],5),Ee([-6,6]))],[71,Rt(3,"P")],[73,L(at(-5,5,6),at(0,9,6),at(5,5,6))],[79,L(Vs([-6,-3,3,6],4),Nn([0],3))],[86,L(An(3),Me([-4,4]))],[93,L(ge(!0,8),ge(!1,8))]],[[2,L(Ct(-1,7),Ct(1,7,12))],[5,L(Ri(0),at(-4,7),at(4,7))],[12,Rt(0,"P")],[14,L(Ai([-6,-3,3,6]),He([0],5))],[19,L(Ri(-5),gn([-2,2]))],[25,L(se(-4,5,3),se(4,5,3),Me([0]))],[30,L(Ri(5,2),te(-2))],[33,Rt(-4,"M")],[36,L(Ti([-6,6],0),Ee([-3,0,3]))],[41,L(Ri(0),at(-5,5),at(5,5))],[47,L(He([-6,-2,2,6],5),Oe(0,7))],[52,L(Ri(-4),Ri(4,2),gn([0]))],[55,Rt(0,"B")],[58,L(te(-4),te(4))],[63,L(fi(!0,7),fi(!1,7))],[68,L(Ri(0),at(0,9,6),Me([-5,5]))],[72,Rt(3,"P")],[74,L(at(-5,5,6),at(5,5,6),Ri(-6,1))],[80,L(gn([-6,-2,2,6]),He([0],4))],[87,L(Ri(-3),Ri(3),Ee([-6,0,6]))],[94,L(ge(!0,8),ge(!1,8))]],[[2,L(Ct(-1,7),Ct(1,7,12))],[5,yo(0)],[12,Rt(-4,"P")],[14,L(mn(1,2),Me([-5,5]))],[20,L(at(-4,7),at(4,7),mi(0))],[26,L(se(-4,5,3),se(4,5,3))],[30,L(yo(-4),He([5],5))],[34,Rt(4,"M")],[38,L(te(4),Ti([-6,-2],0))],[43,L(Me([-6,-3,0,3,6]),mn(-1,3))],[48,L(at(-5,5),at(5,5),at(0,9))],[53,Rt(0,"B")],[55,L(yo(3),Oe(-4,6,7))],[61,L(te(-4),te(4))],[66,L(mi(-4),mi(4),gn([-4,4]))],[71,Rt(3,"P")],[73,L(yo(-3),yo(3))],[80,L(at(-5,5,6),at(0,9,6),at(5,5,6),Me([-6,6]))],[87,L(Ee([-6,-3,0,3,6]),mn(1,1))],[94,L(ge(!0,8),ge(!1,8))]],[[3,Ct(-1,6,8)],[8,Rt(0,"P")],[16,Me([-6,6])],[24,Ct(1,6,10)],[30,Rt(-4,"M")],[38,An(2)],[46,Rt(3,"P")],[54,Me([-6,-3,3,6])],[62,Ct(-1,6,8)],[70,Rt(0,"B")],[80,An(2)],[92,Rt(-3,"P")]]],Rs=n=>n.map(([t,e])=>[-t,e]).reverse(),as=(n,t)=>n.model.children.find(e=>e.userData.role===t)??null;let Hh=null,Vh=null;function RM(n){switch(n){case 3:return LM();case 4:return kM();case 5:return DM();case 6:return NM();case 7:return OM();case 8:return HM();case 9:return GM();default:return $M()}}function PM(n,t,e){switch(t){case 3:return IM(n,e);case 4:return zM(n,e);case 5:return UM(n,e);case 6:return FM(n,e);case 7:return BM(n,e);case 8:return VM(n,e);case 9:return WM(n,e);default:return XM(n,e)}}function LM(){const s=le("boss3",()=>{const a=new Yt;a.add(z(1,18,12),7321824,[0,0,0],[0,0,0],[1.9,.6,2.5]),a.add(z(1,16,10),2379898,[0,.16,-.5],[0,0,0],[1.3,.5,1.8]),a.addMirror(bt(.32,1.4,8),7321824,[.85,0,2.6],[Math.PI/2,0,0],[1,1,.6]),a.addMirror(bt(.16,.6,6),15268095,[.85,.12,3.1],[Math.PI/2,0,0],[1,1,.6],{outline:.02}),a.addMirror(z(.24,10,8),10482687,[.95,.36,1.9],[0,0,0],[1.3,.8,1],{emit:1}),a.addMirror(z(.09,6,4),1056810,[.98,.5,2],[0,0,0],1,{outline:0}),a.addMirror(y(.6,.12,.22),2379898,[.95,.5,1.7],[0,.3,.3],1,{outline:.02}),a.add(y(1.4,.12,.2),1056810,[0,.02,2.45],[0,0,0],1,{outline:.02});for(let l=0;l<5;l++)a.add(Mn(.34-l*.04,0),15268095,[0,.58,1-l*.7],[l,l*.5,0],1,{emit:.35});const c=[[.75,.4],[1.2,-.5],[.55,-1.2],[1.35,.6],[.9,-1.8]];for(const[l,d]of c)a.addMirror(z(.17,8,6),15268095,[l,.5,d],[0,0,0],[1,.35,1],{outline:0});return a.add(yt(.06,.24,5,8),2379898,[0,0,-4.6]),a.add(bt(.14,.9,6),15268095,[0,.15,-3],[-Math.PI/2,0,0],1,{emit:.3}),a.add(bt(.12,.7,6),15268095,[0,.12,-4.4],[-Math.PI/2,0,0],1,{emit:.3}),a},{gloss:.9}),r=[[0,-1.4],[3.7,.3],[3.4,.95],[0,1.6]],o=[[0,-1.4],[3.7,.3],[3.55,.55],[0,-1.05]];for(const a of[1,-1]){const c=le(a>0?"boss3wR":"boss3wL",()=>{const l=new Yt;l.add(Jt(`b3w${a}`,a>0?r:Rs(r),.22),7321824),l.add(Jt(`b3e${a}`,a>0?o:Rs(o),.05),15268095,[0,.13,0],[0,0,0],1,{outline:.02});for(let d=0;d<3;d++)l.add(Mn(.22,0),10482687,[a*(.9+d*.85),.2,.15+d*.15],[d,d,0],1,{emit:.6});return l.add(Mn(.36,0),15268095,[a*3.5,.1,.6],[.3,.6,0],1,{emit:.5}),l},{gloss:.9});c.position.set(a*1.5,0,0),c.userData.role=a>0?"wingR":"wingL",s.add(c)}return s}function IM(n,t){const e=n.d.k;let i=1.2,s=2.2,r=1.5,o=3,a=0,c=0,l=null,d=null;return rn(n,t,4.6,2.4,(h,f,u,m)=>{h.x=Math.sin(m*.4)*3.5,h.z=n.bounds.top+6.5+Math.sin(m*.8)*.6,l??(l=as(h,"wingR")),d??(d=as(h,"wingL"));const v=Math.sin(h.t*(u===2?3.4:2.4))*.28;l&&(l.rotation.z=v),d&&(d.rotation.z=-v),i-=f,s-=f,r-=f,o-=f,a-=f;const p=h.x,g=h.z+2.5;if(i<=0){i=n.cd(u===0?1.7:2.4);const M=u===0?5:3,_=n.angleToPlayer(p,g);for(let x=0;x<M;x++)n.shootEx(p,g,_+(x-(M-1)/2)*.32,7,{color:rt.cyan,r:.34,life:.85+Math.random()*.3,split:6,splitSpd:4.2})}if(s<=0){s=n.cd(u===0?2.6:3.4);for(const M of[1,-1])n.ring(h.x+M*5,h.z+.6,10+Math.min(e,4),5.5,Math.random(),rt.purple)}if(u>=1&&r<=0){r=n.cd(u===1?3.4:2.8);const M=11+Math.min(e,5);for(let _=0;_<M;_++){const x=Math.PI*_/(M-1),A=h.x+Math.cos(x)*4.2,w=h.z+1+Math.sin(x)*3.2;n.shootEx(A,w,x,8,{color:14219007,r:.3,wait:.7+_*.08,reaim:!0}),_%3===0&&n.fx.sparksAt(A,w,14219007,2,4)}}if(u>=1&&o<=0){o=n.cd(u===1?6:4.8);for(const M of[5,-5])n.laser(h,M,.6,n.angleToPlayer(h.x+M,h.z+.6),{warn:1,dur:.7,w:.9,color:10482687})}if(u===2&&a<=0){a=.11,c+=.29;for(let M=0;M<2;M++)n.shoot(p,g-1,c+M*Math.PI,6,12578815)}})}function kM(){return le("boss4",()=>{const s=new Yt;for(let o=0;o<4;o++){const a=1.15-o*.12,c=-1.9-o*1.25;s.add(z(a,14,10),9053208,[0,-.1-o*.05,c],[0,0,0],[1,.8,.9]),s.add(bt(.28,.9,6),3806224,[0,a*.75,c],[-.5,0,0]),s.add(y(a*1.2,.06,.22),16742943,[0,a*.74,c+.5],[0,0,0],1,{emit:.9,outline:0})}s.add(z(1.4,18,12),9053208,[0,.1,-.3],[0,0,0],[1.25,.8,1.2]),s.add(y(1.7,.75,2),9053208,[0,0,1.2]),s.add(y(1.5,.35,1.9),3806224,[0,-.5,1.25]),s.add(y(1.3,.22,.3),16742943,[0,-.25,2.2],[0,0,0],1,{emit:1});for(const o of[.15,.4,.65])s.addMirror(bt(.08,.32,4),15918792,[o,-.3,2.12],[Math.PI,0,0],1,{outline:.015});s.addMirror(z(.12,8,6),16742943,[.45,.42,2],[0,0,0],1,{emit:1,outline:.02}),s.addMirror(z(.22,10,8),16765498,[.8,.55,.6],[0,0,0],[1.3,.7,1],{emit:1}),s.addMirror(z(.08,6,4),1709088,[.82,.68,.66],[0,0,0],[.5,1,1.4],{outline:0}),s.addMirror(y(.75,.2,.35),3806224,[.75,.78,.5],[0,.3,.3]),s.addMirror(bt(.3,2.4,8),15918792,[.9,.7,-1.2],[-1.2,0,-.5]),s.addMirror(bt(.18,1.2,6),15918792,[1.4,.2,-.6],[-1.3,0,-1]);const r=[[0,-.6],[1.4,-1.2],[1.6,-.3],[1.3,.4],[0,.3]];return s.add(Jt("b4frR",r,.12),3806224,[1.3,-.05,-.3]),s.add(Jt("b4frL",Rs(r),.12),3806224,[-1.3,-.05,-.3]),s.add(Jt("b4feR",[[.2,-.75],[1.4,-1.2],[1.5,-.95],[.3,-.55]],.03),16742943,[1.3,.05,-.3],[0,0,0],1,{emit:.8,outline:0}),s.add(Jt("b4feL",Rs([[.2,-.75],[1.4,-1.2],[1.5,-.95],[.3,-.55]]),.03),16742943,[-1.3,.05,-.3],[0,0,0],1,{emit:.8,outline:0}),s.add(y(.08,.05,1.4),16742943,[.2,1.2,-.4],[0,.4,0],1,{emit:1,outline:0}),s.add(y(.08,.05,1),16742943,[-.3,1.18,-.2],[0,-.6,0],1,{emit:1,outline:0}),s.add(y(.07,.05,.9),16742943,[0,.4,1.4],[0,.2,0],1,{emit:1,outline:0}),s},{gloss:.5})}function zM(n,t){const e=n.d.k;let i=.5,s=1.2,r=3.2,o=1.4,a=1.5,c=0,l=0;return rn(n,t,2.3,2.3,(d,h,f,u)=>{d.x=Math.sin(u*.5)*4,d.z=n.bounds.top+7+Math.sin(u*.9)*.9;const m=nn.clamp(Math.atan2(n.px-d.x,n.pz-d.z),-.55,.55);d.yaw+=(m-d.yaw)*Math.min(1,h*2);const v=Math.sin(d.yaw)*2.4,p=Math.cos(d.yaw)*2.4,g=d.x+v,M=d.z+p;if(i-=h,s-=h,r-=h,o-=h,a-=h,c-=h,i<=0){i=n.cd(f===0?.5:.36);const _=n.bounds.left+1+Math.random()*(n.bounds.right-n.bounds.left-2);n.shootEx(_,n.bounds.top-.5,Ae+(Math.random()-.5)*.3,1.5,{color:rt.orange,r:.2,acc:7,maxSpd:10})}if(f===0&&s<=0&&(s=n.cd(1.3),n.aimed(g,M,8,3+(e>=3?2:0),.2,rt.red,.32)),r<=0){r=n.cd(f===0?5.5:4.6);const _=Math.random()<.5?1:-1;n.laser(d,v,p,Ae-_*.75,{warn:1,dur:1.4,w:1.5,sweep:_*.9,color:16738847})}if(f>=1&&o<=0){o=n.cd(f===1?1.5:2);for(const _ of[1,-1])for(let x=0;x<6;x++)n.shootEx(g,M,Ae+_*(.5+x*.12),6.5,{color:rt.orange,r:.26,turn:-_*.55})}if(f===2&&a<=0&&(a=n.cd(1.7),n.shootEx(g,M,n.angleToPlayer(g,M),6,{color:16730655,r:.55,life:1.1,split:10,splitSpd:4.5})),f===2&&c<=0){c=.15,l+=.37;for(let _=0;_<3;_++)n.shoot(g,M,l+_*Math.PI*2/3,5.5,16756768)}},7)}function DM(){const r=le("boss5",()=>{const o=new Yt;o.add(xi("b5env",[[.5,4.2],[1.7,3],[2.3,1],[2.3,-1],[1.8,-3],[.6,-4.2]],18),3810128,[0,0,0],[0,0,0],[1.15,.75,1]);for(const c of[-1,.9])o.add(_e(2.32,.07),16726992,[0,0,c],[0,0,0],[1.15,.75,1],{emit:1,outline:.02});for(const c of[2.6,-2.6])o.add(_e(2,.07),3860735,[0,0,c],[0,0,0],[1.15,.75,1],{emit:1,outline:.02});o.addMirror(y(.1,.2,5.5),16765498,[2.62,0,0],[0,0,0],1,{emit:.2,outline:.02}),o.add(y(2,.15,2.4),1907236,[0,1.75,0]);for(const c of[.7,0,-.7])o.add(y(1,.08,.14),16765498,[0,1.86,c],[0,0,0],1,{emit:1,outline:0});o.add(y(.14,.08,.7),16765498,[-.45,1.86,.35],[0,0,0],1,{emit:1,outline:0}),o.add(y(.14,.08,.7),16765498,[.45,1.86,-.35],[0,0,0],1,{emit:1,outline:0}),o.add(y(.1,.09,2),16765498,[0,1.88,0],[0,0,0],1,{emit:1,outline:0}),o.add(yt(.28,.28,1.4,10),8014372,[0,-.2,4.6]),o.add(yt(.29,.29,.25,10),16765498,[0,-.2,4.2],[0,0,0],1,{outline:.02}),o.add(z(.26,8,6),16734751,[0,-.2,5.3],[0,0,0],1,{emit:1,outline:.02});const a=[[.4,-3],[2.2,-4.4],[2.2,-5],[.4,-4.2]];o.add(Jt("b5finR",a,.15),1907236),o.add(Jt("b5finL",Rs(a),.15),1907236),o.add(y(.15,1.6,1.6),1907236,[0,1.2,-4]),o.add(y(.17,.4,1.2),16726992,[0,1.6,-4],[0,0,0],1,{emit:.8,outline:.02});for(const c of[1,-1])o.add(q(.4,.45,.35,10),1907236,[c*2.75,.2,.8]),o.add(q(.32,.32,.22,14),16765498,[c*2.75,.5,.55]),o.add(yt(.1,.1,1.4,8),1907236,[c*2.75,.3,1.6]),o.add(yt(.14,.14,.1,8),16765498,[c*2.75,.3,2.3],[0,0,0],1,{outline:.02});return o.addMirror(yt(.3,.36,.5,10),1907236,[1.6,.9,3]),o.addMirror(z(.27,10,8),16774048,[1.6,.9,3.25],[0,0,0],[1,1,.4],{emit:1,outline:.02}),o},{gloss:.7});Hh??(Hh=Le(16774048,{opacity:.16,additive:!0,intensity:1.3}));for(const o of[1,-1]){const a=new be,c=new ue(bt(1.5,9,14),Hh);c.rotation.x=-Math.PI/2,c.position.z=4.5,a.add(c),a.position.set(o*1.6,.9,3.3),a.userData.role=o>0?"spotR":"spotL",r.add(a)}return r}function UM(n,t){const e=n.d.k;let i=1,s=1,r=2.4,o=1.5,a=3.5,c=0,l=4,d=0,h=0,f=null,u=null;const m=16769354,v=10289003;return rn(n,t,2.8,3.8,(p,g,M,_)=>{if(h+=g*(M===2?.55:.32),p.x=Math.sin(h)*4.2,p.z=n.bounds.top+6.5+Math.sin(_*.7)*.5,f??(f=as(p,"spotR")),u??(u=as(p,"spotL")),f&&(f.rotation.y=Math.sin(_*.8)*.55+.25),u&&(u.rotation.y=-Math.sin(_*.8+1.3)*.55-.25),i-=g,r-=g,o-=g,a-=g,c-=g,l-=g,i<=0){i=n.cd(M===0?1.3:1.05),s=-s;const x=s,A=6+(M>0?2:0);for(let w=0;w<A;w++)n.later(w*.09,()=>!p.dead&&n.aimed(p.x+x*2.75,p.z+2.3,7.5,1,0,m,.26))}if(M!==1&&r<=0&&(r=n.cd(2.8),n.ring(p.x,p.z,14+Math.min(e,4),4.5,Math.random(),rt.cyan,.3)),M>=1&&o<=0){o=n.cd(M===1?1.9:2.3);const x=n.angleToPlayer(p.x,p.z+2);for(const A of[-1,1])n.shootEx(p.x+A*1.2,p.z+2,x+A*.35,6,{color:v,r:.5,acc:-4,life:1.3,split:10,splitSpd:4.2})}if(M>=1&&a<=0){a=n.cd(M===1?6.5:5);for(const x of[1.6,-1.6])n.laser(p,x,3.3,n.angleToPlayer(p.x+x,p.z+3.3),{warn:1,dur:.8,w:1,color:16774048})}M===2&&c<=0&&(c=n.cd(.13),d+=.21,n.shoot(p.x+2.75,p.z+2.3,Ae+Math.sin(d)*.9,6,m,.24),n.shoot(p.x-2.75,p.z+2.3,Ae-Math.sin(d)*.9,6,m,.24)),M===2&&l<=0&&(l=n.cd(8),oi(n,-5,0,1.5,6,1),oi(n,5,0,-1.5,6,1))})}const Fr=5.3,kr=.54;function NM(){const r=le("boss6",()=>{const a=new Yt;a.add(z(1.9,18,12),8006226,[0,0,-1.6],[0,0,0],[1.25,.85,1.7]);const c=[[.6,-3.6],[2.4,-4.6],[2.2,-3.2],[.9,-2.4]];a.add(Jt("b6finR",c,.12),3806256),a.add(Jt("b6finL",Rs(c),.12),3806256);for(const[d,h]of[[.7,-1],[-.9,-2],[.4,-2.8],[-.4,-.4],[1.3,-2.2]])a.add(z(.22,8,6),15245512,[d,1.4,h],[0,0,0],[1,.35,1],{outline:0});const l=[[.1,-3.4,.5],[-.15,-2.6,-.6],[.12,-1.8,.5],[-.1,-1,-.5]];for(const[d,h,f]of l)a.add(y(.1,.06,.95),10482687,[d,1.5,h],[0,f,0],1,{emit:1,outline:0});for(const d of[-.8,0,.8])a.add(bt(.12,.8,6),10482687,[d,1.55,-2+Math.abs(d)*.6],[0,0,d*.3],1,{emit:.6});return a.add(z(1.4,16,12),8006226,[0,0,.8],[0,0,0],[1.4,.8,1]),a.addMirror(z(.5,12,10),16769354,[.95,.5,1.2],[0,0,0],[1,.8,1],{emit:.9}),a.addMirror(y(.12,.1,.55),1709088,[.95,.92,1.25],[0,0,0],1,{outline:0}),a.addMirror(y(.9,.2,.3),3806256,[.95,.88,.8],[0,.3,.25]),a.add(bt(.35,.9,6),3806256,[0,-.1,2],[Math.PI/2,0,0]),a},{gloss:.8}),o=le("boss6arms",()=>{const a=new Yt;for(let c=0;c<6;c++){const l=c/6*Math.PI*2;for(let h=0;h<6;h++){const f=1.6+h*.62,u=l+h*.09;a.add(z(.48-h*.06,10,8),8006226,[Math.sin(u)*f,-.25,Math.cos(u)*f],[0,0,0],[1,.7,1]),h%2===1&&a.add(z(.12,6,4),15245512,[Math.sin(u)*f,.05,Math.cos(u)*f],[0,0,0],[1,.4,1],{outline:0})}const d=l+kr;a.add(z(.22,8,6),10482687,[Math.sin(d)*Fr,-.2,Math.cos(d)*Fr],[0,0,0],1,{emit:1})}return a},{gloss:.8});return o.userData.role="arms",r.add(o),r}function FM(n,t){const e=n.d.k;let i=0,s=.5,r=0,o=2,a=2.5,c=.6,l=2,d=5,h=null;const f=(m,v)=>m.x+Math.sin(i+v*Math.PI/3+kr)*Fr,u=(m,v)=>m.z+Math.cos(i+v*Math.PI/3+kr)*Fr;return rn(n,t,2.6,2.8,(m,v,p,g)=>{if(m.x=Math.sin(g*.38)*3,m.z=n.bounds.top+7+Math.sin(g*.75)*.7,i+=(p===0?.6:p===1?-.85:1.1)*v,h??(h=as(m,"arms")),h&&(h.rotation.y=i),s-=v,o-=v,a-=v,c-=v,l-=v,d-=v,p<2&&s<=0){s=n.cd(p===0?.5:.55),r^=1;for(let _=0;_<6;_++){const x=i+_*Math.PI/3+kr,A=Math.atan2(Math.cos(x),Math.sin(x));if(p===0)n.shoot(f(m,_),u(m,_),A,5.5,12549631);else if(_%2===r)for(let w=-1;w<=1;w++)n.shoot(f(m,_),u(m,_),A+w*.22,5.5,12549631)}}if(o<=0&&(o=n.cd(p===2?2.6:2),n.aimed(m.x,m.z+2.2,6,1+(e>=4?2:0),.3,9067775,.5)),p>=1&&a<=0){a=n.cd(p===1?4.8:3.9);const _=p===1?2:3,x=Math.floor(Math.random()*6);for(let A=0;A<_;A++){const w=(x+A*2)%6,C=i+w*Math.PI/3+kr,P=Math.sin(C)*Fr,S=Math.cos(C)*Fr;n.laser(m,P,S,n.angleToPlayer(m.x+P,m.z+S),{warn:1,dur:.45,w:.75,color:13626111})}}if(p===2&&c<=0){c=n.cd(.55);for(let _=0;_<6;_++){const x=i+_*Math.PI/3+kr;n.shootEx(f(m,_),u(m,_),Math.atan2(Math.cos(x),Math.sin(x))-.6,5,{color:12549631,turn:.6})}}p===2&&l<=0&&(l=n.cd(2.4),n.ring(m.x,m.z+1.5,20,5.5,Math.random(),rt.cyan)),p===2&&d<=0&&(d=n.cd(8),$r(n,-4,0),$r(n,4,.6))},7)}function OM(){const r=le("boss7",()=>{const c=new Yt;c.add(z(2.2,20,14),14263584,[0,0,-.6],[0,0,0],[1.25,.62,1.35]),c.add(y(.12,.1,5.4),3811856,[0,1.36,-.6],[0,0,0],1,{outline:0}),c.addMirror(y(.28,.08,4),2052e3,[1,1.25,-.6],[0,0,0],1,{outline:.02}),c.addMirror(y(.12,.06,3),16107594,[1.7,1,-.6],[0,0,0],1,{outline:0});for(const d of[-2.2,-.6,1])c.addMirror(Mn(.22,0),2076832,[1.65,1.05,d],[.4,.4,0],1,{emit:.6});c.add(z(1.3,16,12),16107594,[0,0,2.3],[0,0,0],[1.45,.65,.9]),c.add(y(1.4,.6,.8),14263584,[0,0,3.5]),c.add(bt(.25,1.4,6),16107594,[0,.6,3.6],[1,0,0]),c.addMirror(z(.18,8,6),3860735,[.55,.3,3.75],[0,0,0],1,{emit:1}),c.addMirror(y(.22,.2,1),3811856,[.45,-.05,4.2],[0,-.4,0]),c.addMirror(bt(.1,.35,4),16107594,[.25,-.05,4.75],[Math.PI/2,0,.4],1,{outline:.02});const l=[[1.6,-.5],[0,0],[-1.6,.5]];for(const[d,h]of l)c.addMirror(y(2,.22,.25),3811856,[2.6,-.3,d],[0,h,-.2]),c.addMirror(bt(.12,.5,5),16107594,[3.6,-.5,d-h*.9],[0,0,-1.3],1,{outline:.02});return c},{gloss:1}),o=le("boss7sun",()=>{const c=new Yt;return c.add(_e(1.1,.16),16107594,[0,0,0],[Math.PI/2,0,0]),c.add(q(.95,.95,.12,20),16747039,[0,0,0],[0,0,0],1,{emit:.7}),c.add(er(1.75,.08),16765498,[0,-.05,0],[0,0,0],1,{emit:.4,outline:.02}),c},{gloss:1});o.position.set(0,1.9,-.6),o.userData.spin=1.2,r.add(o),Vh??(Vh=Le(16765498,{opacity:.3,intensity:1.4}));const a=new ue(z(1,20,14),Vh);return a.scale.set(3.6,2,4.4),a.position.z=.4,a.visible=!1,a.userData.role="shield",r.add(a),r}function BM(n,t){const e=n.d.k;let i=1.2,s=0,r=0,o=4,a=0,c=!1,l=3,d=6,h=0,f=null;return rn(n,t,3,3.4,(u,m,v,p)=>{if(u.x=Math.sin(p*.35)*3.2,u.z=n.bounds.top+7+Math.sin(p*.7)*.5,f??(f=as(u,"shield")),h+=m*(v===0?.5:.8),i-=m,r-=m,l-=m,d-=m,v>=1&&(o-=m,o<=0&&a<=0&&(a=v===1?2.2:1.8,o=n.cd(v===1?9:7),n.events.callout("圣甲虫展开了金色护盾！","warn"),n.ring(u.x,u.z+.5,26,5,0,16765498,.3),n.later(a*.55,()=>!u.dead&&n.ring(u.x,u.z+.5,26,5,Math.PI/26,16765498,.3)))),a>0){if(a-=m,u.invuln=!0,f){f.visible=!0;const M=1+Math.sin(u.t*14)*.04;f.scale.set(3.6*M,2*M,4.4*M)}const g=.35+.25*Math.sin(u.t*10);for(const M of u.mats)M.uniforms.uEmissive.value.setRGB(g,g*.7,g*.1);c=!0}else if(c){c=!1,f&&(f.visible=!1);for(const g of u.mats)g.uniforms.uEmissive.value.setRGB(0,0,0)}if(i<=0){i=n.cd(v===0?1.6:2.1),s^=1;const g=18+Math.min(e,6);n.ring(u.x,u.z-.6,g,6,s*Math.PI/g+h,16756768,.26)}if(r<=0){r=n.cd(a>0?.14:.2);const g=Math.sin(p*1.3)*.35;n.shootEx(u.x+.5,u.z+4.4,Ae-.9+g,6,{color:15254138,r:.2,turn:.8}),n.shootEx(u.x-.5,u.z+4.4,Ae+.9-g,6,{color:15254138,r:.2,turn:-.8})}if(v>=1&&l<=0){l=n.cd(v===1?6.5:5.5);const g=v===1?2:3,M=Math.random()*Math.PI*2;for(let _=0;_<g;_++)n.laser(u,0,-.6,M+_*Math.PI*2/g,{warn:1.1,dur:2,w:1,sweep:.45,color:16765498})}v===2&&d<=0&&(d=n.cd(10),en(n,-6,0),en(n,6,0))},7)}const df=[-3.8,-1.4,1];function HM(){const o=le("boss8",()=>{const a=new Yt,c=[0,0,Math.PI/2];a.add(q(1.05,1.05,6.6,16),3948358,[.8,.55,0],c);for(const l of[-1.6,0,1.6,3.2])a.add(q(1.1,1.1,.18,16),11020318,[l,.55,0],c,1,{outline:.03});a.add(q(.9,1.05,.4,16),1908002,[4.25,.55,0],c),a.add(q(.4,.4,.3,12),14263626,[4.55,1.1,0],c),a.add(z(.3,10,8),16774048,[4.68,1.1,0],[0,0,0],[.5,1,1],{emit:1}),a.add(q(.45,.6,1.4,12),1908002,[3,1.9,0]),a.add(q(.62,.62,.15,12),14263626,[3,2.6,0],[0,0,0],1,{outline:.03}),a.add(q(.42,.42,.05,12),16747039,[3,2.68,0],[0,0,0],1,{emit:1,outline:0}),a.add(z(.5,12,8),14263626,[2.1,1.55,0],[0,0,0],[1,.8,1]),a.add(y(2.4,2.2,2.8),11020318,[-3.8,.9,0]),a.add(y(2.8,.25,3.2),1908002,[-3.8,2.1,0]),a.add(z(.5,10,8),15919824,[-3.8,2.3,.9],[0,0,0],[1,.35,1],{outline:.03}),a.add(z(.12,6,4),1908002,[-3.95,2.42,1],[0,0,0],1,{outline:0}),a.add(z(.12,6,4),1908002,[-3.65,2.42,1],[0,0,0],1,{outline:0});for(const l of[1.41,-1.41])a.add(y(1.4,.6,.06),16769354,[-3.8,1.2,l],[0,0,0],1,{emit:.6,outline:.02});a.add(y(9.8,.5,2.6),1908002,[0,-.6,0]);for(const l of[1.35,-1.35]){a.add(y(9.6,.7,.15),9062954,[0,-.3,l]);for(let d=0;d<10;d++)a.add(z(.06,6,4),1908002,[-4.4+d*.95,-.05,l*1.06],[0,0,0],1,{outline:0})}for(const l of[-3.8,-2.4,-.6,1,2.6,3.8])for(const d of[1.5,-1.5])a.add(q(.6,.6,.25,14),11020318,[l,-.7,d],[Math.PI/2,0,0]),a.add(q(.2,.2,.3,8),14263626,[l,-.7,d],[Math.PI/2,0,0],1,{outline:.02});for(const l of[1.66,-1.66])a.add(y(6.5,.12,.1),3948358,[0,-.7,l],[0,0,0],1,{outline:.02});a.add(Jt("b8cow",[[4.3,-1.3],[5.4,0],[4.3,1.3]],.7),11020318,[0,-.5,0]);for(const l of[-.6,0,.6])a.add(y(1,.08,.08),1908002,[4.85-Math.abs(l)*.8,-.1,l],[0,0,0],1,{outline:0});return a},{gloss:.6});for(let a=0;a<3;a++){const c=le("boss8tur",()=>{const l=new Yt;return l.add(q(.62,.72,.4,10),3948358),l.add(q(.66,.66,.08,10),14263626,[0,.2,0],[0,0,0],1,{outline:.02}),l.add(z(.5,12,8),11020318,[0,.35,0],[0,0,0],[1,.7,1]),l.addMirror(yt(.1,.1,1.2,8),1908002,[.17,.4,.75]),l.addMirror(yt(.12,.12,.08,8),16747039,[.17,.4,1.36],[0,0,0],1,{emit:1,outline:0}),l},{gloss:.6});c.position.set(df[a],a===0?2.3:1.6,0),c.userData.role="tur",o.add(c)}return o}function VM(n,t){const e=n.d.k;let i=.8,s=0,r=1.8,o=2.2,a=3.5,c=2,l=4;const d=[];return rn(n,t,5,1.7,(h,f,u,m)=>{if(h.x=Math.sin(m*.35)*3.4,h.z=n.bounds.top+6+Math.sin(m*.6)*.4,!d.length)for(const v of h.model.children)v.userData.role==="tur"&&d.push(v);for(const v of d)v.rotation.y=Math.atan2(n.px-(h.x+v.position.x),n.pz-h.z);if(i-=f,r-=f,o-=f,a-=f,c-=f,l-=f,i<=0){i=n.cd(u===0?.8:.65),s=(s+1)%3;const v=h.x+df[s],p=n.angleToPlayer(v,h.z);n.aimed(v+Math.cos(p)*1.3,h.z+Math.sin(p)*1.3,8,3,.18,rt.orange)}if(r<=0){r=n.cd(u===2?2:2.4);const v=h.x+3;n.shootEx(v,h.z,n.angleToPlayer(v,h.z),7,{color:16752704,r:.45,acc:-5,life:1.2,split:8+Math.min(e,4),splitSpd:4.5})}if(u>=1&&o<=0){o=n.cd(u===1?2.6:2.1);const v=2+Math.floor(Math.random()*6);for(let p=0;p<11;p++)p!==v&&p!==v+1&&n.shoot(h.x-5+p,h.z+1.8,Ae,5,rt.pink,.26)}u>=1&&a<=0&&(a=n.cd(u===1?6:4.8),n.laser(h,5,.5,Ae,{warn:1,dur:1.4,w:1.2,sweep:-.9,color:16738847}),n.laser(h,-5,.5,Ae,{warn:1,dur:1.4,w:1.2,sweep:.9,color:16738847})),u===2&&c<=0&&(c=n.cd(2.2),n.ring(h.x+3,h.z,22,5,Math.random(),15263984,.3)),u===2&&l<=0&&(l=n.cd(7),oi(n,h.x-4,0,2,6,1),oi(n,h.x+4,0,-2,6,1))})}function GM(){const o=le("boss9",()=>{const l=new Yt;l.add(z(2,18,12),14729258,[0,0,-1.1],[0,0,0],[1.15,.8,1.55]);for(let d=0;d<4;d++){const h=.4-d*1.1,u=2.3*Math.sqrt(Math.max(.05,1-((h+1.1)/3.1)**2))+.04;l.add(q(u,u,.35,18),1713174,[0,0,h],[Math.PI/2,0,0],[1,1,.7])}l.add(z(.6,12,8),10288954,[0,0,-4.1],[0,0,0],1,{emit:.6}),l.add(z(1.1,14,10),3037738,[0,0,2.1],[0,0,0],[1.2,.8,1]),l.add(z(.85,14,10),3037738,[0,0,3.6],[0,0,0],[1.2,.8,1]);for(let d=0;d<5;d++)l.add(bt(.12,.6,5),14729258,[(d-2)*.3,.75,3.3],[-.4,0,(d-2)*-.2],1,{emit:.2});l.addMirror(z(.38,10,8),16726832,[.65,.35,3.8],[0,0,0],1,{emit:.8}),l.addMirror(bt(.12,.8,6),1713174,[.35,-.1,4.5],[Math.PI/2,0,.3]),l.add(z(.18,8,6),10288954,[0,-.15,4.4],[0,0,0],1,{emit:1,outline:.02});for(const[d,h]of[[2.6,-.6],[2,0],[1.4,.6]])l.addMirror(y(2.2,.18,.2),1713174,[1.7,-.3,d],[0,h,-.3]);return l},{gloss:.9}),a=[[0,-.3],[3.2,-2.4],[3.6,-1.6],[.3,.4]],c=[[0,.2],[2.6,-.2],[2.4,.6],[.2,.7]];for(const l of[1,-1]){const d=le(l>0?"boss9wR":"boss9wL",()=>{const h=new Yt;return h.add(Jt(`b9wb${l}`,l>0?a:Rs(a),.06),14217983,[0,0,0],[0,0,0],1,{outline:.03}),h.add(Jt(`b9ws${l}`,l>0?c:Rs(c),.06),14217983,[0,.08,.2],[0,0,0],1,{outline:.03}),h.add(y(.05,.04,3.2),1713174,[l*1.6,.06,-1],[0,l*.95,0],1,{outline:0}),h},{gloss:1,hatch:!1});d.position.set(l*.9,.9,1.9),d.userData.role=l>0?"wingR":"wingL",o.add(d)}return o}function WM(n,t){const e=n.d.k;let i=1,s=2.5,r=3,o=0,a=1.4,c=0,l=0,d=null,h=null;const f=10288954;return rn(n,t,2.5,4,(u,m,v,p)=>{u.x=Math.sin(p*.42)*3.6,u.z=n.bounds.top+7.5+Math.sin(p*.85)*.7,d??(d=as(u,"wingR")),h??(h=as(u,"wingL"));const g=Math.sin(u.t*18)*.35;d&&(d.rotation.z=g),h&&(h.rotation.z=-g);const M=u.x,_=u.z+4.7;if(i-=m,s-=m,r-=m,a-=m,c-=m,v!==1&&i<=0&&(i=n.cd(v===0?1.3:1.8),n.shootEx(M,_,n.angleToPlayer(M,_),7,{color:f,r:.42,life:.85,split:7,splitSpd:4.5})),s<=0){s=n.cd(v===0?3.2:2.7);const x=5+(e>=6?1:0);for(let A=0;A<x;A++)n.shootEx(u.x,u.z-1,Ae+(A-(x-1)/2)*.4,6,{color:15918752,r:.45,acc:-7,life:2,split:8,splitSpd:4})}if(v>=1&&r<=0&&(r=n.cd(v===1?6:5),o++,o%2?(cr(n,-1,0,9),cr(n,1,.3,9)):($r(n,-4,0),$r(n,4,.6),v===2&&$r(n,0,1.2))),v===1&&a<=0&&(a=n.cd(1.6),n.aimed(M,_,6.5,9,.16,f,.22)),v===2&&c<=0){c=.13,l+=.33;for(let x=0;x<2;x++)n.shoot(M,_,l+x*Math.PI,5.5,f,.22)}},7.5)}function $M(){const r=le("boss10",()=>{const a=new Yt;a.add(xi("b10fus",[[.25,1.9],[.55,.8],[.6,-.4],[.5,-1.3],[.45,-1.6]],12),14035498,[0,0,0],[0,Math.PI,0]),a.add(yt(.5,.5,.35,14),2830138,[0,0,1.55]),a.addMirror(yt(.06,.06,.9,6),2830138,[.22,.55,1.2]),a.add(y(5.4,.12,1.15),14035498,[0,.95,.35]),a.add(y(4.8,.12,1),14035498,[0,-.25,.45]);for(const c of[1.8,-1.8])for(const l of[.7,.05])a.add(y(.07,1.15,.07),9067050,[c,.35,l],[0,0,0],1,{outline:.02});a.addMirror(y(.06,.7,.06),9067050,[.35,.6,.4],[0,0,.3],1,{outline:.02});for(const c of[1.85,-1.85])a.add(q(.42,.42,.04,16),15921126,[c,1.02,.35],[0,0,0],1,{outline:.02}),a.add(q(.3,.3,.05,16),1709088,[c,1.03,.35],[0,0,0],1,{outline:0}),a.add(z(.18,8,6),15921126,[c,1.06,.33],[0,0,0],[1,.3,1.1],{outline:0});return a.add(y(2,.08,.6),14035498,[0,.1,-1.75]),a.add(y(.08,.7,.7),14035498,[0,.45,-1.75]),a.add(y(.1,.2,.72),15921126,[0,.55,-1.75],[0,0,0],1,{outline:0}),a.add(_e(.32,.07),2830138,[0,.52,-.2],[Math.PI/2,0,0]),a.add(z(.22,10,8),15247228,[0,.7,-.2]),a.add(z(.24,10,8),9067050,[0,.8,-.24],[0,0,0],[1,.6,1],{outline:.02}),a.addMirror(z(.07,6,4),4708095,[.09,.75,-.02],[0,0,0],1,{emit:.8,outline:.015}),a.add(y(.15,.05,.9),15921126,[.15,.66,-.75],[0,.3,0],1,{outline:.02}),a.addMirror(q(.25,.25,.12,10),2830138,[.6,-.85,.9],[0,0,Math.PI/2]),a},{gloss:.7}),o=le("boss10prop",()=>{const a=new Yt;return a.add(z(.15,8,6),2830138),a.add(y(.16,1.7,.06),9067050,[0,0,0],[0,0,0],1,{outline:.02}),a});return o.position.z=1.8,o.userData.role="prop",r.add(o),r}function XM(n,t){let e=0,i=0,s=0,r=1,o=0,a=0,c=6,l=0,d=1,h=!1,f=0,u=1.5,m=3,v=2,p=null;const g=2.4;return rn(n,t,2.6,1.6,(M,_,x,A)=>{const w=n.bounds,C=w.top+6;p??(p=as(M,"prop")),p&&(p.rotation.z+=_*30),e+=_*(x===0?.8:x===1?1:1.2);const P=Math.sin(e)*6;r-=_,s<=0&&r<=0&&a<=0&&Math.abs(n.px-M.x)<1.5&&n.pz>M.z&&(s=.35,i=(M.x>=n.px?1:-1)*15,(M.x+i*.35>w.right-2.8||M.x+i*.35<w.left+2.8)&&(i=-i),r=x===2?1.1:1.6);let S;if(s>0)s-=_,M.x+=i*_,S=-Math.sign(i)*.9;else{const k=M.x;M.x+=(P-M.x)*Math.min(1,_*3),S=nn.clamp(-(M.x-k)/Math.max(_,1e-4)/12,-.7,.7)}M.x=nn.clamp(M.x,w.left+2.8,w.right-2.8);let b=0;if(x>=1&&a<=0&&(c-=_,c<=0&&(a=g,c=n.cd(x===1?9:7))),a>0){a-=_;const k=1-Math.max(0,a)/g;b=Math.sin(k*Math.PI)*7,o=k*Math.PI*2,l-=_,l<=0&&(l=.08,n.shoot(M.x,M.z+1.8,Ae,9,rt.orange,.2))}else o+=(S-o)*Math.min(1,_*8);if(M.model.rotation.z=o,M.z=C+b+Math.sin(A*1.3)*.5,u-=_,m-=_,v-=_,d-=_,d<=0&&(h=!h,d=h?1.1:n.cd(x===2?.8:1.2)),h&&a<=0&&(f-=_,f<=0&&(f=.09,n.aimed(M.x+.22,M.z+1.8,10,1,0,16769354,.18),n.aimed(M.x-.22,M.z+1.8,10,1,0,16769354,.18))),x>=1&&u<=0){u=n.cd(x===1?1.8:1.4);for(const k of[1,-1])for(let B=0;B<2;B++)n.later(B*.25,()=>!M.dead&&n.shootEx(M.x+k*1.8,M.z+.5,Ae-k*1.25,5,{turn:k*.95,acc:3,maxSpd:11,r:.3,color:rt.red}))}x>=1&&m<=0&&a<=0&&(m=n.cd(x===1?5:4),n.laser(M,0,1.8,Ae,{warn:.9,dur:.9,w:.8,color:16722506})),x===2&&v<=0&&(v=n.cd(7.5),cr(n,-1,0,8),cr(n,1,.2,8))})}const Ze=Math.PI*2,_n=Math.PI/2,Or=[16726843,16751135,16769354,6094699,3860735,6978559,13073919];function Oi(n,t,e,i,s=[0,0,0],r=.6){const o=le(t,i,{gloss:r});return o.userData.part=e,o.position.set(...s),n.add(o),o}const Ni=(n,t)=>n.model.children.find(e=>e.userData.part===t),ir=n=>Math.atan2(Math.cos(n),Math.sin(n)),y0=n=>[0,-n,-_n],b0=(n,t,e=2)=>nn.clamp(t,n.bounds.left+e,n.bounds.right-e);function S0(n,t,e,i){for(const s of n.mats)s.uniforms.uEmissive.value.setRGB(t,e,i)}function zo(n,t,e,i,s,r,o=3){const a=Math.floor(Math.random()*t),c=Math.random()*Ze;for(let l=0;l<t;l++){if((l-a+t)%t<o)continue;const d=c+l/t*Ze;n.shootEx(n.px+Math.cos(d)*e,n.pz+Math.sin(d)*e,d+Math.PI,s,{color:r,r:.26,wait:i,reaim:!0})}}function qM(n){switch(n){case 11:return ZM();case 12:return jM();case 13:return QM();case 14:return e_();case 15:return i_();case 16:return r_();case 17:return a_();case 18:return d_();default:return f_()}}function YM(n,t,e){switch(t){case 11:return KM(n,e);case 12:return JM(n,e);case 13:return t_(n,e);case 14:return n_(n,e);case 15:return s_(n,e);case 16:return o_(n,e);case 17:return l_(n,e);case 18:return h_(n,e);default:return p_(n,e)}}function ZM(){const n=le("lb11",()=>{const t=new Yt;t.add(Mn(1.7,0),3860735,[0,.8,0],[0,.4,0],[1,1.5,1],{emit:.45}),t.add(Mn(1.05,0),16743136,[0,1.7,.5],[.5,.2,0],[1,1.3,1],{emit:.65}),t.addMirror(Mn(.7,0),6978559,[1.5,.4,.3],[.3,.6,0],[1,1.6,1],{emit:.35}),t.add(bt(1,2.4,5),6978559,[0,-1.2,0],[Math.PI,0,0],1,{emit:.25}),t.add(_e(2.4,.24),16765498,[0,0,0],[_n,0,0]),t.add(_e(2.85,.1),11569706,[0,-.15,0],[_n,0,0],1,{outline:.03});for(let e=0;e<8;e++){const i=e/8*Ze;t.add(bt(.28,1.2,4),Or[e%7],[Math.cos(i)*3,0,Math.sin(i)*3],y0(i),1,{emit:.4})}return t.add(z(.38,12,10),16777215,[0,1.1,1.6],[0,0,0],[1.3,.55,.5],{emit:1}),t.add(z(.16,8,6),1709088,[0,1.13,1.78],[0,0,0],[1,1,.5],{outline:0}),t},{gloss:1});return Oi(n,"lb11-shards","shards",()=>{const t=new Yt;for(let e=0;e<6;e++){const i=e/6*Ze,s=Math.sin(i)*4.4,r=Math.cos(i)*4.4;t.add(Mn(.6,0),Or[e],[s,.3,r],[.3,i,0],[.75,1.7,.75],{emit:.55}),t.add(Mn(.3,0),16777215,[s,1.25,r],[0,i,.4],1,{emit:.8,outline:.03})}return t},[0,0,0],1),n}function gc(n,t,e,i){n.laser(null,t,e,i,{warn:1,dur:.9,w:1.1,color:16743136});const s=Math.cos(i);if(Math.abs(s)<.05)return;const r=s<0?n.bounds.left:n.bounds.right,o=e+(r-t)/s*Math.sin(i);o<n.bounds.bottom&&n.laser(null,r,o,Math.PI-i,{warn:1,dur:.9,w:1.1,color:3860735})}function KM(n,t){let e,i=0,s=0,r=0,o=1.2,a=2.2,c=.5,l=3.5,d=0;const h=rn(n,t,3.3,2.9,(f,u,m,v)=>{f.x=Math.sin(v*.5)*3.5,f.z=n.bounds.top+6.5+Math.sin(v*1.1)*.5,i+=(m===0?.6:m===1?1:-1.3)*u,e&&(e.rotation.y=i),o-=u,a-=u,c-=u,l-=u,d-=u;const p=f.x,g=f.z+1.6;if(o<=0){o=n.cd(m===2?2.4:1.8);const M=n.angleToPlayer(p,g);for(let _=-2;_<=2;_++)n.shootEx(p,g,M+_*.24,8,{color:Or[(r+_+7)%7],r:.34,life:.75,split:m===0?5:6,splitSpd:4.8});r++}if(m<2&&a<=0){a=n.cd(m===0?2.6:3.2);const M=Math.random()*Ze;for(let _=0;_<14;_++)n.shootEx(p,f.z,M+_/14*Ze,5,{color:Or[_%7],bounce:1})}if(m>=1&&c<=0){c=n.cd(m===1?.55:.75);for(let M=0;M<6;M++){const _=i+M/6*Ze;n.shootEx(f.x+Math.sin(_)*4.4,f.z+Math.cos(_)*4.4,ir(_),6,{color:Or[M],bounce:1,r:.24})}}if(m>=1&&l<=0){l=n.cd(m===1?6:5);const M=m===1?.95:.7;gc(n,p,g,n.angleToPlayer(p,g)),gc(n,p,g,Ae+M),gc(n,p,g,Ae-M)}if(m===2&&d<=0){d=n.cd(.12),s+=.27;for(let M=0;M<3;M++)n.shootEx(p,f.z,s+M*Ze/3,5.5,{color:Or[r++%7],bounce:M===0?1:0})}});return e=Ni(h,"shards"),h}function jM(){const n=le("lb12",()=>{const e=new Yt;e.add(z(1.55,20,16),722964,[0,.5,0]),e.add(_e(1.8,.16),13073919,[0,.5,0],[_n,0,0],1,{emit:1,outline:.02}),e.add(_e(4,.55),5922662,[0,0,0],[_n,0,0]),e.add(_e(4,.22),16765498,[0,.5,0],[_n,0,0],1,{outline:.03});for(let i=0;i<6;i++){const s=i/6*Ze+Math.PI/6,r=Math.sin(s),o=Math.cos(s);e.add(y(.35,.3,2),2830138,[r*2.8,.1,o*2.8],[0,s,0]),e.add(y(1,1.1,1),8225935,[r*4,.4,o*4],[0,s,0]),e.add(y(1.05,.15,1.05),16765498,[r*4,.95,o*4],[0,s,0],1,{outline:.02}),e.add(z(.3,8,6),13073919,[r*4,1.25,o*4],[0,0,0],1,{emit:1})}return e.addMirror(yt(.45,.55,1.6,10),2830138,[1.6,0,-4.4]),e.addMirror(yt(.32,.32,.05,10),13073919,[1.6,0,-5.22],[0,0,0],1,{emit:1,outline:0}),e},{gloss:.7}),t=Oi(n,"lb12-disk","disk",()=>{const e=new Yt;e.add(_e(2.5,.1),16743136,[0,.45,0],[_n,0,0],1,{emit:.9,outline:0}),e.add(_e(3.1,.07),13073919,[0,.4,0],[_n,0,0],1,{emit:.8,outline:0});for(let i=0;i<9;i++){const s=i*2.39,r=2.2+i%3*.45;e.add(Mn(.18+i%2*.1,0),i%2?16769354:10134445,[Math.sin(s)*r,.5,Math.cos(s)*r],[s,s,0],1,{emit:i%2?.6:0,outline:.03})}return e});return t.userData.spin=1.4,n}function JM(n,t){let e=0,i=.4,s=2.5,r=4,o=3,a=2;return rn(n,t,4.3,3.8,(c,l,d,h)=>{if(c.x=Math.sin(h*.32)*2.5,c.z=n.bounds.top+7+Math.sin(h*.7)*.5,i-=l,s-=l,r-=l,o-=l,a-=l,i<=0){i=n.cd(d===0?.16:.14),e+=.33;const f=d===0?2:d===1?3:4;for(let u=0;u<f;u++){const m=e+u*Ze/f;n.shootEx(c.x+Math.cos(m)*4.3,c.z+Math.sin(m)*4.3,m+.55,5.2,{color:u%2?rt.purple:rt.pink,turn:-.42})}}if(s<=0){s=n.cd(d===2?2.6:3.2);const f=Math.random()*Ze;for(let u=0;u<16;u++){const m=f+u/16*Ze;n.shootEx(c.x+Math.cos(m)*5.2,c.z+Math.sin(m)*5.2,m,7,{color:rt.cyan,r:.28,wait:1,reaim:!0})}}if(d>=1&&r<=0){r=n.cd(d===1?7.5:6.5);const f=d===1?2:4,u=n.angleToPlayer(c.x,c.z)+Math.PI/f,m=(Math.random()<.5?-1:1)*(d===1?.5:.38);for(let v=0;v<f;v++)n.laser(c,0,.5,u+v*Ze/f,{warn:1.1,dur:3,w:1,sweep:m,color:13073919})}if(d>=1&&o<=0&&(o=n.cd(d===1?4.5:3.5),zo(n,12,7,1.1,6.5,rt.purple)),d===2&&a<=0){a=n.cd(1.6);const f=n.angleToPlayer(c.x,c.z+1.5);for(let u=-3;u<=3;u++)n.shootEx(c.x,c.z+1.5,f+u*.2,2,{color:rt.cyan,acc:5,maxSpd:11})}},7)}function QM(){const r=le("lb13",()=>{const o=new Yt;o.add(y(4.2,1.8,5.4),5922662,[0,.7,-2.3]),o.add(y(4.3,.25,5.5),16102171,[0,1.62,-2.3],[0,0,0],1,{outline:.03});for(let a=0;a<4;a++)o.add(y(4.35,.3,.25),2039074,[0,.9,-4.4+a*1.4]);for(let a=0;a<4;a++)o.addMirror(bt(.22,.9,5),15919824,[2.45,.8,-4.3+a*1.3],[0,0,-_n]);o.add(q(.5,.5,1,10),14039594,[-1.1,2.2,-3.8]),o.add(q(.5,.5,1,10),14039594,[1.1,2.2,-3.8]),o.add(q(.52,.52,.12,10),16102171,[1.1,2.4,-3.8],[0,0,0],1,{outline:.02}),o.add(y(3.8,2.2,2.4),9062954,[0,1,1.4]),o.add(y(3,.7,.2),4708095,[0,1.6,2.62],[0,0,0],1,{emit:.3}),o.add(y(3.4,1.4,2.2),9062954,[0,.5,3.6]),o.add(y(3.5,.15,2.25),2039074,[0,1.25,3.6]),o.add(z(.6,12,10),15919824,[0,1.35,3.7],[0,0,0],[1,.35,1.1],{outline:.03}),o.addMirror(z(.15,8,6),2039074,[.22,1.5,3.85],[0,0,0],1,{outline:0}),o.add(y(4.4,1,.5),2039074,[0,.3,4.95],[-.3,0,0]);for(let a=0;a<6;a++)o.add(bt(.18,.9,5),15919824,[-1.75+a*.7,.35,5.5],[_n,0,0]);o.addMirror(yt(.28,.35,1.2,10),2039074,[1.9,.8,4.6]),o.addMirror(yt(.2,.2,.05,8),16738847,[1.9,.8,5.22],[0,0,0],1,{emit:1,outline:0}),o.addMirror(q(.22,.22,2.4,8),5922662,[1.6,2.3,.2]),o.addMirror(z(.28,8,6),16747039,[1.6,3.55,.2],[0,0,0],1,{emit:.9});for(const a of[3.6,1.2,-1.2,-3.6])o.addMirror(q(.85,.85,.7,14),2039074,[2.35,.1,a],[0,0,_n]),o.addMirror(q(.35,.35,.75,8),16102171,[2.4,.1,a],[0,0,_n],1,{outline:.02});return o},{gloss:.5});return Oi(r,"lb13-gun","gun",()=>{const o=new Yt;return o.add(q(.9,1,.5,10),2830138),o.add(y(1.2,.6,1.2),9062954,[0,.5,0]),o.addMirror(yt(.13,.13,1.8,8),2039074,[.28,.55,1.3]),o.add(z(.18,8,6),16726832,[0,.9,.3],[0,0,0],1,{emit:1}),o},[0,2.1,1]),r}function t_(n,t){let e,i=0,s=0,r=0,o=0,a=0,c=4,l=0,d=2,h=1.2;const f=rn(n,t,2.6,4.8,(u,m,v,p)=>{const g=n.bounds.top+7;if(s+=m,i===0||i===3){const A=Math.sin(p*.7)*(v===0?3.2:4.2)+Math.sin(p*1.9)*.8;u.x+=(A-u.x)*Math.min(1,m*2.5)}if(i===0){if(u.z+=(g+Math.sin(p*1.3)*.4-u.z)*Math.min(1,m*3),v>=1&&(c-=m),c<=0){i=1,s=0,r=u.x;for(const A of[-2.7,0,2.7])n.laser(null,r+A,u.z,Ae,{warn:1.3,dur:0,w:.5,color:rt.red});n.events.callout("公路霸王要冲过来了！","warn")}}else if(i===1)u.z-=1.2*m,u.x=r+(Math.random()-.5)*.15,s>1.3&&(i=2,s=0,n.shake=Math.max(n.shake,.5));else if(i===2){if(u.x=r,u.z+=24*m,Math.random()<m*30)for(const A of[-2.35,2.35])n.fx.trail(u.x+A,u.z-4.6,10134445,.5,.4);u.z>=n.bounds.bottom-4.5&&(i=3,s=0,n.shake=Math.max(n.shake,.7),v===2&&n.ring(u.x,u.z,20,5.5,Math.random(),rt.orange))}else u.z-=10*m,u.z<=g&&(u.z=g,i=0,c=n.cd(v===1?8:5.5));const M=u.x,_=u.z+1,x=Math.atan2(n.px-M,n.pz-_);if(e&&(e.rotation.y=x),i===0){if(l-=m,d-=m,h-=m,o=(o+m)%4,o<2.5&&l<=0){l=n.cd(.07);const A=Math.sin(p*2.2)*.55;for(const w of[-1,1])n.shootEx(u.x+w*1.9,u.z+5.3,Ae+A+w*.12,10,{color:a++&1?rt.orange:16765498,r:.32,life:.75})}if(d<=0){d=n.cd(v===0?2.6:v===1?2.2:1.8);const A=3+v;for(let w=0;w<A;w++){const C=Ae+(w-(A-1)/2)*.35+(Math.random()-.5)*.1;n.shootEx(u.x,u.z+5,C,8,{color:rt.red,r:.38,acc:-7,maxSpd:9,life:2.3,split:6,splitSpd:4.5})}}h<=0&&(h=n.cd(1.3),n.aimed(M+Math.sin(x)*2.2,_+Math.cos(x)*2.2,9.5,3,.12,rt.red))}},7);return e=Ni(f,"gun"),f}function e_(){const i=le("lb14",()=>{const s=new Yt;s.add(y(5.2,.5,5.2),2830138,[0,-.6,0]);for(const r of[2.2,-2.2])s.addMirror(y(1,.55,1),16102171,[2.2,-.58,r]);s.add(y(3.2,2.6,3.2),1909555,[0,.9,0]);for(let r=-1;r<=1;r++)s.add(y(3.25,.06,.08),3860735,[0,2.22,r*.9],[0,0,0],1,{emit:.9,outline:0}),s.add(y(.08,.06,3.25),3860735,[r*.9,2.22,0],[0,0,0],1,{emit:.9,outline:0});s.add(y(1,1,1),10289003,[0,2.75,0],[.6,.6,0],1,{emit:.8}),s.add(y(2.6,.9,.2),920594,[0,1.4,1.62]),s.add(y(2.2,.35,.1),16722506,[0,1.4,1.75],[0,0,0],1,{emit:1,outline:.02});for(let r=0;r<5;r++)s.addMirror(y(.35,1.8,.12),5922662,[1.75,.9,-1.2+r*.6]);return s.addMirror(q(.08,.08,2,6),10134445,[1.2,3.2,-1.2]),s.addMirror(z(.18,8,6),16722506,[1.2,4.25,-1.2],[0,0,0],1,{emit:1}),s},{gloss:.8});return Oi(i,"lb14-panels","panels",()=>{const s=new Yt;for(let r=0;r<4;r++){const o=r/4*Ze,a=Math.sin(o),c=Math.cos(o);s.add(y(2.6,.3,1.6),3817290,[a*3.8,.5,c*3.8],[0,o,0]),s.add(y(2,.06,.12),3860735,[a*3.6,.68,c*3.6],[0,o,0],1,{emit:.9,outline:0}),s.add(y(2,.06,.12),10289003,[a*4,.68,c*4],[0,o,0],1,{emit:.9,outline:0}),s.add(y(.6,.5,.6),16722506,[a*4.75,.5,c*4.75],[0,o,0],1,{emit:.8})}return s}),i}function Gh(n,t,e,i){const s=n.bounds,r=s.top-1,o=-Math.tan(e),a=s.bottom-r+1,c=t-o*(n.pz-r),l=s.left+.6-Math.max(0,o)*a,d=s.right-.6-Math.min(0,o)*a;for(let h=l;h<=d;h+=1.9)Math.abs(h-c)<1.9||n.laser(null,h,r,Ae+e,{warn:i,dur:1.1,w:1.1,color:3860735})}function n_(n,t){let e,i=0,s=0,r=1,o=2.5,a=1,c=1.6,l=0;const d=rn(n,t,3.4,3.4,(h,f,u,m)=>{if(h.x=Math.sin(m*.4)*2.5,h.z=n.bounds.top+6.5+Math.sin(m*.9)*.4,i+=(u===0?.5:u===1?.9:-1.2)*f,e&&(e.rotation.y=i),o-=f,a-=f,c-=f,l-=f,o<=0){o=n.cd(u===0?5.5:u===1?5.2:4.4);const v=b0(n,n.px+(Math.random()-.5)*8);r=-r;const p=u===0?0:r*.3;if(Gh(n,v,p,u===0?1.3:1.1),u>=1){const g=b0(n,v+(Math.random()<.5?-1:1)*(3+Math.random()*2)),M=u===2?-p:0;n.later(2,()=>!h.dead&&n.state==="playing"&&Gh(n,g,M,1.1))}}if(a<=0){a=n.cd(u===2?1.2:1);const v=n.angleToPlayer(h.x,h.z+1.8),p=u===0?3:5;for(let g=0;g<p;g++)n.shootEx(h.x,h.z+1.8,v+(g-(p-1)/2)*.22,2.2,{color:10289003,acc:6,maxSpd:12,r:.24})}if(c<=0){c=n.cd(u===0?1.6:1.2);for(let v=0;v<4;v++){const p=i+v/4*Ze,g=ir(p);for(let M=-1;M<=1;M++)n.shoot(h.x+Math.sin(p)*4.75,h.z+Math.cos(p)*4.75,g+M*.2,5.5,rt.cyan)}}if(u===2&&l<=0){l=n.cd(.16),s+=.31;for(let v=0;v<2;v++)n.shootEx(h.x,h.z,s+v*Math.PI,2,{color:v?rt.cyan:10289003,acc:4.5,maxSpd:10})}});return e=Ni(d,"panels"),d}const hf=[-2.6,-1,.6,2.2];function i_(){return le("lb15",()=>{const o=new Yt;o.add(y(3.6,1.5,7.6),3095354,[0,0,-.6]),o.add(bi(1.8,2.8,10),3095354,[0,0,4.6],[0,Math.PI,0],[1,.45,1]),o.add(y(3.2,.2,7.4),4872786,[0,.78,-.6]),o.addMirror(y(.15,.3,7.6),7329472,[1.82,.88,-.6],[0,0,0],1,{emit:.4,outline:.03}),o.add(y(3.6,1.4,2),3095354,[0,1.3,-3.6]),o.add(y(3.7,.15,2.1),7329472,[0,2.05,-3.6],[0,0,0],1,{emit:.3,outline:.02}),o.addMirror(z(.3,8,6),10289112,[1.4,2.4,-4.2],[0,0,0],1,{emit:1});for(const a of[2.4,.2,-2])o.add(q(.14,.18,4.6,8),1317916,[0,3,a]),o.add(y(3.4,2.2,.12),14217448,[0,3,a-.4],[-1.1,0,0],1,{emit:.15}),o.add(y(1.6,.9,.1),14217448,[.6,4.6,a-.2],[-1,0,.15],1,{emit:.15,outline:.04}),o.add(z(.18,8,6),10289112,[0,5.35,a],[0,0,0],1,{emit:1});o.add(y(1.1,.06,.7),1317916,[.6,5.2,.2]),o.add(z(.22,8,6),15919824,[.6,5.28,.2],[0,0,0],[1,.4,1],{outline:.02});for(const a of hf)o.addMirror(q(.22,.26,1.1,8),1317916,[2.1,.35,a],[0,0,_n]);o.add(z(.45,10,8),15919824,[0,.6,5.9]),o.addMirror(z(.12,6,4),10289112,[.16,.7,6.25],[0,0,0],1,{emit:1,outline:0});for(let a=0;a<5;a++)o.addMirror(bt(.15,.6,5),7329472,[1.85,1.3,-3.6+a*1.8],[0,0,0],1,{emit:.9,outline:0});return o},{gloss:.5})}function Wh(n,t,e,i,s){for(let r=-1;r<=1;r+=2){const o=r>0?.15:Math.PI-.15;for(const a of hf)n.shootEx(t.x+r*2.4,t.z+a,o,e,{color:10289112,r:.3,turn:r*i}),s&&n.shootEx(t.x+r*2.4,t.z+a,o,e*.7,{color:7329472,r:.26,turn:r*i*1.4})}}function s_(n,t){const e=[];let i=0,s=0,r=0,o=1,a=7,c=1.8,l=.6,d=2.5;const h=rn(n,t,2.2,4.6,(f,u,m,v)=>{const p=i+Math.sin(v*.5)*2;if(f.x+=(p-f.x)*Math.min(1,u*(s>0?2.2:1.2)),f.z=n.bounds.top+7+Math.sin(v*.9)*.5,s>0){s-=u,f.ghost=!0,f.invuln=!0;const g=.5+.5*Math.sin(v*20);if(S0(f,.1,.35+.2*g,.32+.2*g),f.model.visible=Math.floor(v*12)%3!==0,r-=u,r<=0&&(r=.35,n.fx.ring(i,f.z,3,7329472,.3)),s<=0){f.ghost=!1,f.model.visible=!0,S0(f,0,0,0);for(const M of e)M.visible=!0;n.fx.flash(f.x,f.z,3,10289112,.15),Wh(n,f,6.5,1,m>=1),m===2&&n.ring(f.x,f.z,24,5,Math.random(),10289112)}return}if(a-=u,a<=0){a=n.cd(m===0?8:m===1?6.5:5),s=1.8;const g=n.bounds.right-5;let M=(Math.random()-.5)*2*g;Math.abs(M-f.x)<3&&(M=f.x>0?-g*.7:g*.7),i=M;for(const _ of e)_.visible=!1;n.fx.ring(f.x,f.z,4,7329472,.4);return}c-=u,l-=u,d-=u,c<=0&&(c=n.cd(m===0?2.2:m===1?1.8:1.5),Wh(n,f,6.5,m===2?1.25:1,m>=1)),l<=0&&(l=n.cd(m===0?.5:.4),o=-o,n.shootEx(f.x,f.z+5.8,Ae+(Math.random()-.5)*1.2,3.8,{color:10289112,r:.26,turn:o*.7,life:6,wait:m===2?.5:0,reaim:m===2})),m>=1&&d<=0&&(d=n.cd(2.4),n.aimed(f.x,f.z+5.8,8.5,5,.15,rt.red))},7);return h.model.traverse(f=>{f.userData.outline&&e.push(f)}),h}function r_(){const i=le("lb16",()=>{const s=new Yt;s.add(z(2.6,24,18),15919824,[0,0,0]),s.add(_e(2.75,.55),5906282,[0,-.2,0],[_n,0,0]);for(let r=0;r<10;r++){const o=r/10*Ze;s.add(bt(.3,1.4,6),2756659,[Math.cos(o)*3.5,-.2,Math.sin(o)*3.5],y0(o))}for(let r=0;r<4;r++){const o=-1.8+r*1.2;s.add(yt(.12,.38,3.2,8),5906282,[o,-.6,-4-r%2*.6],[0,(r-1.5)*.15,0]),s.add(z(.16,6,4),16732043,[o-(r-1.5)*.25,-.6,-5.7-r%2*.6],[0,0,0],1,{emit:.8,outline:.02})}return s},{gloss:1});return Oi(i,"lb16-pupil","pupil",()=>{const s=new Yt;return s.add(z(1.25,18,12),9321433,[0,.55*2.45,.835*2.45],[-.582,0,0],[1,1,.3],{emit:.5,outline:.03}),s.add(z(1.25,18,12),1709088,[0,.55*2.62,.835*2.62],[-.582,0,0],[.3,.85,.3],{outline:0}),s.add(z(.22,8,6),16777215,[.45,1.8,2.1],[0,0,0],1,{emit:1,outline:0}),s},[0,0,0],1),Oi(i,"lb16-lids","lids",()=>{const s=new Yt;for(let r=0;r<8;r++){const o=r/8*Ze,a=Math.sin(o),c=Math.cos(o);s.add(y(1.5,.35,.9),2756659,[a*4.6,.2,c*4.6],[0,o,0]),s.add(y(1,.1,.5),16732043,[a*4.62,.42,c*4.62],[0,o,0],1,{emit:.7,outline:.02}),s.add(bt(.22,.8,5),15919824,[a*5.4,.2,c*5.4],y0(ir(o)))}return s}),i}function o_(n,t){let e,i,s=0,r=0,o=0,a=2.5,c=1.5,l=3,d=0,h=1;const f=rn(n,t,3,2.8,(u,m,v,p)=>{u.x=Math.sin(p*.45)*3.2,u.z=n.bounds.top+6.5+Math.sin(p*.8)*.6;const g=nn.clamp(Math.atan2(n.px-u.x,n.pz-u.z),-1.1,1.1);let M=0;e&&(e.rotation.y+=(g-e.rotation.y)*Math.min(1,m*4),M=e.rotation.y);const _=Math.sin(M)*2.4,x=Math.cos(M)*2.4;if(s+=(v===2?-.9:.5)*m,i&&(i.rotation.y=s),a-=m,c-=m,l-=m,h-=m,a<=0){a=n.cd(v===0?6:v===1?4.8:4.4);const A=n.angleToPlayer(u.x+_,u.z+x),w=-nn.clamp(n.pvx*.025,-.3,.3);n.laser(u,_,x,A,{warn:1,dur:2.2,w:1.3,sweep:w,color:13073919}),v===2&&(n.laser(u,_,x,A+.6,{warn:1,dur:2.2,w:1,sweep:w,color:16732043}),n.laser(u,_,x,A-.6,{warn:1,dur:2.2,w:1,sweep:w,color:16732043}))}if(c<=0){c=n.cd(v===0?2:v===1?1.7:2.3);const A=v===0?24:v===1?28:18,w=o++%2*(Math.PI/A);for(let C=0;C<A;C++)n.shootEx(u.x+_,u.z+x,w+C/A*Ze,v===2?4.5:6,{color:rt.purple,life:v===2?1.1:99,split:v===2?3:0,splitSpd:5})}if(l<=0&&(l=n.cd(v===0?4.5:3.6),r=1.4),r>0&&(r-=m,d-=m,d<=0)){d=.2;for(let A=-1;A<=1;A+=2)n.shootEx(u.x+A*3.2,u.z,A>0?.14:Math.PI-.14,7.5,{color:16732043,r:.25}),v>=1&&n.shootEx(u.x+A*3.2,u.z,A>0?.34:Math.PI-.34,6.5,{color:16732043,r:.25})}if(v>=1&&h<=0){h=n.cd(v===1?1.3:1.15);for(let A=0;A<8;A++){const w=s+A/8*Ze,C=u.x+Math.sin(w)*5.4,P=u.z+Math.cos(w)*5.4;v===1?n.aimed(C,P,7.5,1,0,rt.pink):n.shootEx(C,P,ir(w),5,{color:rt.pink,turn:A%2?.7:-.7})}}});return e=Ni(f,"pupil"),i=Ni(f,"lids"),f}function a_(){const s=le("lb17",()=>{const o=new Yt;o.add(q(4.3,4.3,.35,28),11565610,[0,-.35,0]);for(let a=0;a<18;a++){const c=a/18*Ze;o.add(y(.6,.35,.7),11565610,[Math.sin(c)*4.5,-.35,Math.cos(c)*4.5],[0,c,0])}o.add(q(3.6,3.6,.4,32),15919824,[0,.1,0]),o.add(_e(3.6,.3),16765498,[0,.3,0],[_n,0,0]);for(let a=0;a<12;a++){const c=a/12*Ze,l=a%3===0;o.add(y(l?.35:.2,.1,l?.8:.5),l?14039594:2830138,[Math.sin(c)*2.95,.33,Math.cos(c)*2.95],[0,c,0],1,{outline:.02})}return o.addMirror(z(.4,10,8),16722506,[.95,.35,-1.5],[0,0,0],[1.2,.4,.6],{emit:1}),o.addMirror(y(.9,.12,.2),2830138,[.95,.42,-1.95],[0,.35,0],1,{outline:.02}),o.add(q(.5,.5,.6,12),16765498,[0,.45,0],[0,0,0],1,{emit:.3}),o.add(z(1,14,10),16765498,[0,.4,-4.9],[0,0,0],[1,.7,1]),o.add(bt(.25,.6,8),16765498,[0,1,-4.9]),o.addMirror(z(.6,10,8),16765498,[2.6,.2,-3.9],[0,0,0],[1,.6,1]),o.addMirror(q(1.2,1.2,.3,10),11565610,[4.3,.2,2.6]),o.addMirror(q(.4,.4,.4,8),16765498,[4.3,.35,2.6],[0,0,0],1,{outline:.03}),o},{gloss:.8}),r=(o,a,c,l)=>Oi(s,o,a,()=>{const d=new Yt;return d.add(y(l,.14,c),2830138,[0,.65,c/2]),d.add(bt(l*.9,.8,4),2830138,[0,.65,c+.35],[_n,0,0]),d.add(z(l*.6,8,6),16722506,[0,.75,c*.7],[0,0,0],1,{emit:1,outline:.02}),d});return r("lb17-hour","hour",2,.55),r("lb17-min","minute",3.1,.32),Oi(s,"lb17-pend","pend",()=>{const o=new Yt;return o.add(y(.15,.15,2.4),16765498,[0,-.2,4.7]),o.add(q(.75,.75,.25,16),16765498,[0,-.2,5.9]),o.add(q(.4,.4,.28,12),16747039,[0,-.18,5.9],[0,0,0],1,{emit:.6,outline:0}),o}),s}function l_(n,t){let e,i,s,r=Math.PI,o=Math.PI*.6,a=0,c=.5,l=3,d=2,h=3,f=0;const u=rn(n,t,3.8,3.8,(m,v,p,g)=>{m.x=Math.sin(g*.35)*2.8,m.z=n.bounds.top+7+Math.sin(g*.7)*.4;const M=p===0?.5:p===1?.6:-.6,_=p===0?.16:p===1?.26:-.36;if(r+=M*v,o+=_*v,i&&(i.rotation.y=r),e&&(e.rotation.y=o),s&&(s.rotation.y=Math.sin(g*2.2)*.32),c-=v,l-=v,d-=v,h-=v,f-=v,c<=0){c=n.cd(p===0?.2:.17);const x=ir(o),A=m.x+Math.sin(o)*2.6,w=m.z+Math.cos(o)*2.6;n.shoot(A,w,x,6.5,16747039),p>=1&&(n.shoot(A,w,x+.14,6,16747039),n.shoot(A,w,x-.14,6,16747039))}if(l<=0&&(l=n.cd(p===0?7:p===1?6.5:5.5),n.laser(m,0,0,ir(r),{warn:1,dur:p===0?2.6:2.2,w:1,sweep:-M,color:16765498}),p>=1&&n.laser(m,0,0,ir(o),{warn:1,dur:2.6,w:1,sweep:-_,color:16747039})),d<=0&&(d=n.cd(p===0?3.2:p===1?2.6:3),p<2?zo(n,12,6.5,1.2,6,16769354):(zo(n,12,5,1.1,6,16769354),zo(n,16,8.5,1.6,6,16765498,4))),p>=1&&h<=0){h=n.cd(4.2);for(let x=0;x<12;x++)n.shootEx(m.x,m.z,r+x/12*Ze,6,{color:16765498,r:.3,wait:.15+x*.09})}if(p===2&&f<=0){f=n.cd(.16),a-=.3;for(let x=0;x<2;x++){const A=a+x*Math.PI;n.shoot(m.x+Math.cos(A)*3.6,m.z+Math.sin(A)*3.6,A,4.5,rt.orange)}}},7);return e=Ni(u,"hour"),i=Ni(u,"minute"),s=Ni(u,"pend"),u}const c_=[-3.4,0,3.4];function d_(){const r=le("lb18",()=>{const o=new Yt;o.add(y(10,1.6,4.2),5922662,[0,0,0]),o.add(y(10.2,.3,.35),16102171,[0,.6,2.1],[0,0,0],1,{outline:.03}),o.add(y(7.5,1,3),8225935,[0,1.2,-.3]),o.add(y(2.4,2.6,1.8),2830138,[0,2.6,-1]),o.add(y(2,.35,.1),4708095,[0,3.3,-.08],[0,0,0],1,{emit:.6,outline:.02}),o.add(q(.08,.08,2,6),8225935,[.6,4.6,-1.2]),o.add(y(1.2,.08,.5),12597547,[.6,5.5,-1.2],[0,.4,0],1,{outline:.03});for(let a=0;a<7;a++)o.add(yt(.15,.15,.9,8),2830138,[-4.5+a*1.5,-.2,2.4]);o.addMirror(y(2.2,1,3.4),12597547,[5.6,.1,.2]),o.addMirror(yt(.4,.45,1.6,10),2830138,[5.6,.5,2.3]),o.addMirror(yt(.3,.3,.05,10),16747039,[5.6,.5,3.12],[0,0,0],1,{emit:1,outline:0}),o.addMirror(bt(.6,1.4,4),12597547,[6.3,.2,-1.2],[0,0,-_n]);for(const a of[-3.4,-1.2,1.2,3.4])o.add(yt(.6,.7,1.4,12),2830138,[a,-.3,-2.7]),o.add(yt(.45,.45,.05,10),16747039,[a,-.3,-3.42],[0,0,0],1,{emit:1,outline:0});return o.addMirror(er(.4,.05),16102171,[1.8,.83,1.65],[0,0,0],1,{outline:.03}),o.addMirror(z(.12,6,4),16726832,[4.9,.85,1.9],[0,0,0],1,{emit:1,outline:0}),o},{gloss:.5});return c_.forEach((o,a)=>Oi(r,"lb18-tur",`tur${a}`,()=>{const c=new Yt;return c.add(q(.9,1,.5,10),2830138),c.add(y(1.3,.7,1.3),12597547,[0,.5,0]),c.addMirror(yt(.12,.12,1.6,8),2830138,[.3,.55,1.1]),c.add(y(.5,.1,.3),16102171,[0,.9,.4],[0,0,0],1,{outline:.02}),c},[o,1.8,.6])),r}function $h(n,t,e,i){for(let s=-4.5;s<=4.5;s+=.75){const r=t.x+s;Math.abs(r-e)<1.3||n.shoot(r,t.z+2.6,Ae+s*.025,i,rt.purple)}}function h_(n,t){const e=[];let i=0,s=1,r=2.5,o=2,a=6,c=4,l=6;const d=rn(n,t,6.2,2.4,(h,f,u,m)=>{h.x=Math.sin(m*.25)*1.2,h.z=n.bounds.top+6+Math.sin(m*.6)*.4;for(const v of e)v.rotation.y=Math.atan2(n.px-(h.x+v.position.x),n.pz-(h.z+v.position.z));if(s-=f,r-=f,o-=f,a-=f,c-=f,l-=f,s<=0&&e.length){s=n.cd(u===0?.55:.42);const v=e[i++%e.length],p=v.rotation.y;n.aimed(h.x+v.position.x+Math.sin(p)*1.9,h.z+v.position.z+Math.cos(p)*1.9,8.5,u===0?3:5,.16,rt.red)}if(r<=0){r=n.cd(u===2?2.6:3.2);const v=nn.clamp(n.px+(Math.random()-.5)*6,h.x-4,h.x+4);$h(n,h,v,5),n.later(.3,()=>!h.dead&&$h(n,h,v,4.2))}if(o<=0){o=n.cd(u===0?2.8:2.2);const v=u===2?3:2;for(let p=0;p<v;p++){const g=h.x+(p%2?5.6:-5.6),M=n.angleToPlayer(g,h.z+3.1)+(p-(v-1)/2)*.25;n.shootEx(g,h.z+3.1,M,8,{color:rt.orange,r:.45,acc:-3,life:1.3,split:10,splitSpd:4.5})}}u>=1&&a<=0&&(a=u===1?13:11,tn(n,-5,10,5),u===2&&tn(n,5,10,5)),u===2&&l<=0&&(l=11,en(n,-6,0),en(n,6,0)),u===2&&c<=0&&(c=n.cd(6),n.laser(h,0,2.6,n.angleToPlayer(h.x,h.z+2.6),{warn:1.3,dur:1,w:2.4,color:16722506}))},6);for(let h=0;h<3;h++){const f=Ni(d,`tur${h}`);f&&e.push(f)}return d}const Xh=2.3;let w0=null;function u_(n,t){w0={x:n,z:t}}const qh=n=>n.map(([t,e])=>[-t,e]).reverse();function f_(){const r=le("lb19f",()=>{const o=new Yt;o.add(yt(1,1.25,7,14),1776932,[0,0,-.5]),o.add(bi(1,3.2,14),1776932,[0,0,4.6],[0,Math.PI,0]),o.add(yt(1.04,1.04,.5,14),9054751,[0,0,1.5],[0,0,0],1,{outline:.03}),o.add(z(.85,14,10),3860735,[0,.75,1.8],[0,0,0],[.75,.55,1.7],{emit:.35,outline:.03}),o.add(z(.3,10,8),15247228,[0,.95,1.4],[0,0,0],1,{outline:.02}),o.add(q(.3,.27,.16,10),16765498,[0,1.27,1.4],[0,0,0],1,{outline:.02});for(let l=0;l<5;l++){const d=l/5*Ze;o.add(bt(.06,.22,4),16765498,[Math.sin(d)*.26,1.45,1.4+Math.cos(d)*.26],[0,0,0],1,{outline:0})}const a=[[.9,2.2],[6.4,-2.6],[6.4,-3.8],[.9,-3.4]];o.add(Jt("lb19f-wr",a,.28),9054751,[0,-.1,0]),o.add(Jt("lb19f-wl",qh(a),.28),9054751,[0,-.1,0]),o.addMirror(y(7.3,.14,.3),16765498,[3.65,.06,-.2],[0,Math.atan2(4.8,5.5),0],1,{outline:.02});const c=[[.8,3.8],[2.5,2.7],[2.5,2.3],[.8,2.7]];o.add(Jt("lb19f-cr",c,.16),1776932,[0,.05,0]),o.add(Jt("lb19f-cl",qh(c),.16),1776932,[0,.05,0]),o.addMirror(yt(.34,.34,2.4,10),2830138,[6.4,0,-2.6]),o.addMirror(bi(.34,.6,10),16765498,[6.4,0,-1.1],[0,Math.PI,0]),o.addMirror(yt(.16,.16,2.2,8),16765498,[3.6,.05,.9]),o.addMirror(z(.12,8,6),16726832,[3.6,.05,2.05],[0,0,0],1,{emit:1,outline:0}),o.addMirror(y(.18,1.6,2.2),9054751,[1.3,1,-3.4],[0,0,-.35]),o.addMirror(y(.2,.3,1.6),16765498,[1.55,1.7,-3.6],[0,0,-.35],1,{outline:.02}),o.addMirror(yt(.7,.8,2.4,12),2830138,[1.2,-.1,-3.9]),o.addMirror(yt(.55,.55,.1,12),16738847,[1.2,-.1,-5.15],[0,0,0],1,{emit:1,outline:0});for(let l=0;l<4;l++)o.add(bt(.16,.6,5),15919824,[0,1,-.6-l*.8],[-.4,0,0]);return o},{gloss:.7});return Oi(r,"lb19f-burner","burner",()=>{const o=new Yt;return o.addMirror(bi(.55,2.2,10),16756768,[1.2,-.1,-6.3],[0,0,0],1,{emit:1,outline:0}),o.addMirror(bi(.3,1.4,8),16777215,[1.2,-.1,-5.9],[0,0,0],1,{emit:1,outline:0}),o}),r}function p_(n,t){const e=w0;w0=null;let i,s=0,r=0,o=0,a=0,c=1,l=0,d=0,h=1,f=1.6,u=1.4,m=0,v=3,p=4.5,g=5.5,M=2.2,_=8,x=0,A=3,w=4,C=0;const P=rn(n,t,6,3.4,(S,b,k,B)=>{k!==l&&(l=k,n.events.callout(k===1?"究极战机：推力全开！":"掠夺者之王：同归于尽吧！","warn"));const V=n.bounds;o-=b,o<=0&&(k===0?(o=2.6,r=(r>0?-1:1)*(V.right-4.5)):(o=3,r=b0(n,n.px+(Math.random()-.5)*6,4.5)));let Y=k===2?3.2:2.4;if(a>0&&(a-=b,r=c*(V.right-4),Y=6),s+=((r-S.x)*Y*Y-s*2*Y)*b,S.x+=s*b,S.z=V.top+6.5+Math.sin(B*.9)*.7,S.model.rotation.z=nn.clamp(-s*.05,-.5,.5),i&&i.scale.set(1,1,1+.25*Math.sin(B*30)+(a>0?.9:0)+(k===2?.5:0)),u-=b,m-=b,v-=b,p-=b,g-=b,M-=b,_-=b,x-=b,A-=b,w-=b,C-=b,u<=0&&(u=n.cd(k===0?1.6:2.2),n.aimed(S.x,S.z+6,9,3,.14,rt.red)),k>=1&&p<=0&&a<=0&&(p=k===2?3.6:4.8,a=.75,c=S.x>0?-1:1),a>0&&C<=0){C=.16;for(let W=-1;W<=1;W++)n.shoot(S.x,S.z+2,Ae+W*.3,7,rt.orange)}if(k===0){if(f-=b,f<-1.4&&(f=1.8),f>0&&m<=0){m=.15;for(const W of[-1,1])n.shoot(S.x+W*3.6,S.z+2,Ae,9,rt.orange)}if(v<=0){v=n.cd(4.8);const W=n.angleToPlayer(S.x,S.z);for(let et=0;et<4;et++){const Z=et%2?1:-1;n.shootEx(S.x+Z*6.4,S.z-2.6+Math.floor(et/2)*.8,W,8.5,{color:rt.red,r:.3,wait:.4+et*.06,reaim:!0})}}return}if(k===1){if(g<=0){g=n.cd(6.5);const W=Math.random()<.5?1:-1;n.laser(S,0,6,Ae-W*.85,{warn:1,dur:1.6,w:1.3,sweep:W*1,color:16726832})}if(M<=0){M=n.cd(3);const W=n.angleToPlayer(S.x,S.z);for(let et=0;et<18;et++){const Z=et/18*Ze+d,xt=Math.atan2(Math.sin(Z-W),Math.cos(Z-W));Math.abs(xt)>.32&&n.shoot(S.x,S.z+1,Z,5.5,rt.purple)}d+=.13}if(_<=0){_=11;for(let W=0;W<2;W++)cr(n,W%2?1:-1,W*.3,9)}return}const j=.5+.5*Math.sin(B*9);if(S0(S,.35*j,.04*j,0),x<=0){x=n.cd(.2),d+=.37,h=-h;for(let W=0;W<2;W++)n.shootEx(S.x,S.z+1,d+W*Math.PI,5,{color:W?rt.red:16765498,turn:h*.35})}A<=0&&(A=n.cd(4.6),zo(n,10,6.5,1.1,6,16765498,3)),w<=0&&(w=n.cd(5.5),n.laser(S,0,6,n.angleToPlayer(S.x,S.z+6),{warn:1,dur:.6,w:1,color:16726832}))});if(i=Ni(P,"burner"),e){const S=P.update,b=n.bounds.top+6.5;let k=0;P.x=e.x,P.z=e.z,P.yaw=Math.PI,P.model.scale.setScalar(.45),P.update=(B,V)=>{if(k<Xh){k+=V;const Y=Math.min(1,k/Xh),j=Y*Y*(3-2*Y);B.invuln=!0,B.x=nn.lerp(e.x,0,j),B.z=nn.lerp(e.z,b,j);const W=.45+.55*j;B.model.scale.setScalar(W),B.yaw=Y<.65?Math.PI:Math.PI*(1-(Y-.65)/.35),i&&i.scale.set(1,1,1.8),Math.random()<V*30&&n.fx.sparksAt(B.x,B.z-Math.cos(B.yaw)*5*W,16747039,2,6),Y>=1&&(B.yaw=0,B.model.scale.setScalar(1));return}S(B,V)}}return P}function E0(n){return n<3?Qx(n):n<11?RM(n):qM(n)}function vc(n,t,e){return t<3?AM(n,t,e):t<11?PM(n,t,e):YM(n,t,e)}let un=null,ns=null,rl=null,uf=!1;const Yh=new Map;function m_(){if(un){un.state==="suspended"&&un.resume();return}try{un=new AudioContext}catch{return}ns=un.createGain(),ns.gain.value=uf?0:.35,ns.connect(un.destination),rl=un.createBuffer(1,un.sampleRate*.6,un.sampleRate);const n=rl.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=Math.random()*2-1}function ff(n){uf=n,ns&&(ns.gain.value=n?0:.35)}function bo(n,t){const e=performance.now();return e-(Yh.get(n)??0)<t?!1:(Yh.set(n,e),!0)}function Pi(n,t,e,i,s,r=0){if(!un||!ns)return;const o=un.currentTime+r,a=un.createOscillator(),c=un.createGain();a.type=n,a.frequency.setValueAtTime(t,o),a.frequency.exponentialRampToValueAtTime(Math.max(e,1),o+i),c.gain.setValueAtTime(s,o),c.gain.exponentialRampToValueAtTime(.001,o+i),a.connect(c).connect(ns),a.start(o),a.stop(o+i+.02)}function Na(n,t,e){if(!un||!ns||!rl)return;const i=un.currentTime,s=un.createBufferSource();s.buffer=rl;const r=un.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(e,i),r.frequency.exponentialRampToValueAtTime(80,i+n);const o=un.createGain();o.gain.setValueAtTime(t,i),o.gain.exponentialRampToValueAtTime(.001,i+n),s.connect(r).connect(o).connect(ns),s.start(i),s.stop(i+n)}const Pe={shoot:()=>bo("shoot",70)&&Pi("square",880,440,.05,.04),hit:()=>bo("hit",70)&&Pi("triangle",300,120,.04,.05),boom:()=>bo("boom",50)&&Na(.35,.5,1800),bigBoom:()=>{Na(1,.9,2500),Pi("sawtooth",120,30,.8,.25)},pickup:()=>{Pi("square",660,660,.06,.08),Pi("square",990,990,.08,.08,.06)},ult:()=>{Pi("sawtooth",200,1200,.5,.15),Na(.6,.4,4e3)},hurt:()=>{Pi("sawtooth",400,60,.5,.25),Na(.5,.6,1200)},warn:()=>{for(let n=0;n<3;n++)Pi("square",520,520,.25,.12,n*.45)},graze:()=>bo("graze",60)&&Pi("sine",1800,2400,.04,.03),zap:()=>bo("zap",90)&&Pi("sawtooth",1600,200,.08,.05)},Ws=[{name:"舰首防空阵地",view:[0,-31],targets:[{kind:"msFlak",at:[-5,-35]},{kind:"msFlak",at:[5,-35]},{kind:"msFlak",at:[-3.5,-27]},{kind:"msFlak",at:[3.5,-27]},{kind:"msMissile",at:[-7.5,-31]},{kind:"msMissile",at:[7.5,-31]}]},{name:"左舷主炮群",view:[-16,-8],targets:[{kind:"msCannon",at:[-20,-11]},{kind:"msCannon",at:[-13.5,-8]},{kind:"msCannon",at:[-18,-2]},{kind:"msFlak",at:[-11,-14]}]},{name:"右舷激光阵列",view:[16,-8],targets:[{kind:"msLaser",at:[16,-12]},{kind:"msLaser",at:[19.5,-3]},{kind:"msFlak",at:[12,-6]},{kind:"msFlak",at:[21,-11]}]},{name:"舰桥",view:[0,12],targets:[{kind:"msBridge",at:[0,10]},{kind:"msFlak",at:[-6,14]},{kind:"msFlak",at:[6,14]},{kind:"msMissile",at:[0,17]}]}],$n=[0,28],g_=30,v_=2.2,x_={msFlak:{hp:27,hw:1.1,hd:1.1,score:1500},msMissile:{hp:33,hw:1,hd:.9,score:2e3},msCannon:{hp:54,hw:1.3,hd:1.6,score:3e3},msLaser:{hp:45,hw:1.2,hd:1.2,score:3e3},msBridge:{hp:190,hw:2.7,hd:1.8,score:12e3}};function M_(){const o=le("mothership-hull",()=>{const h=new Yt,f=[[0,-48],[7,-40],[10,-28],[12,-20],[25,-13],[26,-7],[25,3],[13,7],[13,30],[9,38],[-9,38],[-13,30],[-13,7],[-25,3],[-26,-7],[-25,-13],[-12,-20],[-10,-28],[-7,-40]];h.add(Jt("ms-deck",f,2.4),3817290,[0,-1.4,0]),h.add(Jt("ms-spine",[[0,-42],[5,-36],[6,31],[-6,31],[-5,-36]],.4),5067617,[0,-.15,0]),h.addMirror(y(.22,.06,64),16765498,[4.6,.08,-4],[0,0,0],1,{emit:.25,outline:0});for(let u=-36;u<24;u+=4)h.add(y(.28,.06,1.8),15921126,[0,.08,u],[0,0,0],1,{outline:0});h.addMirror(y(11,.35,13),4541272,[19,-.15,-5]);for(let u=-10;u<=0;u+=5)h.addMirror(y(11.2,.05,.12),1314842,[19,.04,u],[0,0,0],1,{outline:0});for(let u=-30;u<=30;u+=6)h.addMirror(y(5.5,.05,.12),1314842,[9,-.12,u],[0,0,0],1,{outline:0});for(let u=-26;u<=30;u+=7)h.addMirror(z(.22,8,6),16726832,[12.7,0,u],[0,0,0],1,{emit:1,outline:0});for(let u=14;u<=24;u+=5)h.addMirror(z(.22,8,6),16726832,[u,0,-13.5+(u-14)*.05],[0,0,0],1,{emit:1,outline:0});h.add(z(1.6,14,10),15919824,[0,0,-41],[0,0,0],[1,.25,1.1]),h.addMirror(z(.38,8,6),1314842,[.6,.25,-41.3],[0,0,0],[1,.4,1],{outline:0}),h.add(y(1.6,.1,.3),9054751,[0,.2,-40],[0,0,0],1,{outline:.02});for(const u of Ws)for(const m of u.targets){const v=m.kind==="msBridge";h.add(q(v?3.4:1.55,v?3.6:1.7,.18,14),2830138,[m.at[0],-.05,m.at[1]]),v||h.add(_e(1.6,.07),16765498,[m.at[0],.05,m.at[1]],[Math.PI/2,0,0],1,{outline:0})}h.addMirror(yt(2.4,2.7,11,14),2830138,[13.5,-.9,26]),h.addMirror(yt(2,2,.1,14),16738847,[13.5,-.9,31.6],[0,0,0],1,{emit:1,outline:0}),h.add(y(8.6,.3,7.4),1053207,[$n[0],-.1,$n[1]]);for(let u=0;u<9;u++){const m=u%2?1314842:16765498;h.add(y(1,.08,.5),m,[-4+u,.1,$n[1]-3.95],[0,0,0],1,{outline:0}),h.add(y(1,.08,.5),m,[-4+u,.1,$n[1]+3.95],[0,0,0],1,{outline:0})}for(const[u,m]of[[-9,-18],[9,2],[-10,22],[22,-12],[-22,-2]])h.add(q(.12,.18,2.6,6),1314842,[u,1.1,m]),h.add(z(.2,8,6),16726832,[u,2.5,m],[0,0,0],1,{emit:1,outline:0});return h},{gloss:.3}),a=h=>{const f=le("mothership-door",()=>{const u=new Yt;u.add(y(4.2,.35,7.2),8225935);for(let m=0;m<3;m++)u.add(y(3.8,.06,.3),16765498,[0,.2,-2.4+m*2.4],[0,0,0],1,{outline:0});return u});return f.position.set($n[0]+h*2.1,.12,$n[1]),o.add(f),f},c=[a(-1),a(1)],l=Le(16747039,{intensity:1.6,opacity:0}),d=new ue(new zs(7.8,6.6).rotateX(-Math.PI/2),l);return d.position.set($n[0],.08,$n[1]),o.add(d),{group:o,doors:c,glowMat:l}}function __(n,t,e,i){const s=le(i?"ms-crater-big":"ms-crater",()=>{const r=new Yt,o=i?3:1.3;r.add(q(o,o*1.1,.16,12),1579037,[0,0,0],[0,0,0],1,{outline:0});for(let a=0;a<6;a++){const c=a/6*Math.PI*2+.4;r.add(y(o*.5,.25,o*.22),2830138,[Math.cos(c)*o*.7,.1,Math.sin(c)*o*.7],[.3,c,.2],1,{outline:.02})}return r});s.position.set(t,0,e),n.add(s)}function y_(n,t,e,i){const s=n.angleToPlayer(t.x,t.z);switch(i.n++,e){case"msFlak":if(i.cd=n.cd(2.4),i.n%4===0)n.ring(t.x,t.z,8,5,Math.random(),rt.orange);else for(let r=0;r<2;r++)n.later(r*.15,()=>!t.dead&&n.aimed(t.x,t.z+.8,8.5,1,0,rt.orange));break;case"msMissile":i.cd=n.cd(5);for(let r=0;r<4;r++){const o=-Math.PI/2+(r-1.5)*.55;n.shootEx(t.x+Math.cos(o)*1.2,t.z+Math.sin(o)*1.2,s,8,{color:rt.red,r:.3,wait:.45+r*.07,reaim:!0})}break;case"msCannon":i.cd=n.cd(5),n.shootEx(t.x,t.z+2,s,5.5,{color:rt.pink,r:.5,life:1,split:7,splitSpd:4.2}),i.n%2===0&&n.aimed(t.x,t.z+2,7.5,3,.22,rt.pink);break;case"msLaser":i.cd=n.cd(3.8),i.n%2?n.laser(t,0,0,s,{warn:1.3,dur:.9,w:1,color:3860735}):n.ring(t.x,t.z,9,4.5,Math.random(),rt.cyan);break;case"msBridge":if(i.cd=n.cd(2),i.n%2===0?n.ring(t.x,t.z+1.5,12,5,Math.random(),rt.purple):n.aimed(t.x,t.z+1.8,7.5,3,.2,rt.pink),i.n%10===0)for(const r of[-1,1])oi(n,r*5,0,-r*1.5,6,1);break}}function b_(){let n=!0,t=null;const e=new U;let i=null;const s=[];let r=0,o=0,a=6,c="assault",l=0,d=0,h=!1,f=!1,u=!1;const m=(x,A)=>new U(-A[0],0,x.bounds.top+9.5-A[1]),v=x=>s.filter(A=>A.sec===x&&!A.e.dead).length,p=(x,A)=>{const w=x.bounds;return!i&&A.x>w.left-.5&&A.x<w.right+.5&&A.z>w.top+.5&&A.z<w.bottom-4},g=(x,A,w=!1)=>{const C=m(x,A);w?e.copy(C):i={from:e.clone(),to:C,t:0}},M=(x,A,w=!1)=>{r=A,o=0,g(x,Ws[A].view,w),x.events.callout(`目标区域：${Ws[A].name}（${v(A)} 个目标）`,"warn")},_=x=>{Ws.forEach((A,w)=>{for(const C of A.targets){const P=x_[C.kind],S={n:0,cd:1+Math.random()*1.5},b=C.kind==="msBridge",k={e:null,sec:w,lx:C.at[0],lz:C.at[1],wrecked:!1};k.e=x.addEnemy({kind:C.kind,tint:x.level,x:e.x+C.at[0],z:e.z+C.at[1],hp:P.hp,hw:P.hw,hd:P.hd,score:P.score,ground:!0,persist:!0,medal:!0,drop:b?"B":void 0,onDeath:B=>x.fx.explode(B.x,B.z,b?3.2:1.8),update(B,V){if(B.x=e.x+k.lx,B.z=e.z+k.lz,C.kind!=="msMissile"&&C.kind!=="msBridge"){const Y=x.angleToPlayer(B.x,B.z);B.yaw=Math.atan2(Math.cos(Y),Math.sin(Y))}c!=="assault"||!p(x,B)||x.state!=="playing"||(S.cd-=V,S.cd<=0&&y_(x,B,C.kind,S))}}),s.push(k)}})};return{start(x){x.mode!=="endless"&&(n=!1,t=M_(),x.root.add(t.group),_(x),M(x,0,!0))},update(x,A){var w,C;if(!(n||!t)){if(i){i.t+=A/v_;const P=i.t>=1?1:i.t*i.t*(3-2*i.t);e.lerpVectors(i.from,i.to,P),i.t>=1&&(i=null)}t.group.position.copy(e);for(const P of s)if(P.e.dead&&!P.wrecked){P.wrecked=!0,__(t.group,P.lx,P.lz,P.e.kind==="msBridge");const S=s.filter(b=>!b.e.dead).length;S>0&&x.events.popup(`母舰目标剩 ${S}`,e.x+P.lx,e.z+P.lz-1.5,"warn")}if(c==="assault"){if(o+=A,!i&&(v(r)===0||o>g_)){v(r)===0&&x.events.callout(`${Ws[r].name} 已摧毁！`,"milestone");let P=-1;for(let S=1;S<=Ws.length;S++){const b=(r+S)%Ws.length;if(v(b)>0){P=b;break}}if(P<0){c="finale",l=0,x.clearBullets(!0),x.holdScript=!0,x.invuln=Math.max(x.invuln,9);for(const S of x.enemies)!S.persist&&!S.boss&&!S.dead&&(S.dead=!0,x.fx.explode(S.x,S.z,1.2));x.events.callout("母舰防御系统瘫痪！","milestone")}else P!==r?M(x,P):o=0}if(a-=A,a<=0&&x.state==="playing"){a=14;for(let P=0;P<2;P++)oi(x,(P-.5)*6+(Math.random()-.5)*2,P*.8,0,5.5,1)}return}if(c==="finale"){if(l+=A,l<1.6&&(d-=A,d<=0)){d=.14;const P=x.bounds;x.fx.explode(P.left+Math.random()*(P.right-P.left),P.top+2+Math.random()*14,1.4+Math.random()),x.shake=Math.max(x.shake,.4)}if(l>=1.6&&l-A<1.6&&g(x,$n),l>=3.9){u||(u=!0,x.events.banner("WARNING!","究极战机 正在出仓","warning"),x.events.flashScreen("red"),Pe.warn());const P=Math.min(1,(l-3.9)/1.4);t.doors[0].position.x=$n[0]-2.1-P*4.4,t.doors[1].position.x=$n[0]+2.1+P*4.4,t.glowMat.uniforms.uOpacity.value=P*(.75+.25*Math.sin(l*20))}if(l>=5.4&&!f&&(f=!0,u_(e.x+$n[0],e.z+$n[1]),x.spawnBossNow()),l>=6){const P=Math.min(1,(l-6)/4);t.group.position.set(e.x,-P*P*14,e.z+P*P*30),t.group.scale.setScalar(1-P*.35),Math.random()<A*6&&x.fx.explode(e.x+(Math.random()-.5)*20,Math.min(x.bounds.bottom,e.z+P*P*30+(Math.random()-.5)*20),1.6),P>=1&&!h&&(h=!0,x.root.remove(t.group))}l>=7.7&&l-A<7.7&&((C=(w=x.events).bossEnter)==null||C.call(w,x.level)),l>=10.5&&(c="gone")}}},stop(x){t&&(x.root.remove(t.group),t.group.traverse(A=>{A instanceof ue&&A.material.dispose()})),t=null,n=!0},skip(){for(const x of s)x.e.dead=!0}}}const Ne=(n,t)=>n+Math.random()*(t-n),ls=(n,t=1.5)=>Ne(n.bounds.left+t,n.bounds.right-t),zn=n=>n.state==="playing",cs=n=>n.boss&&!n.boss.dead?1.5:1,Zs=(n,t,e)=>n.events.ultVisual(t,e);function S_(){let n=5,t="calm",e=1,i=0;return{update(s,r){zn(s)||(t="calm"),n-=r;const o=s.d.k;t==="calm"&&n<=0&&zn(s)?(t="warn",n=1.3,e=Math.random()<.5?-1:1,s.events.callout(e<0?"⟵ 横风来袭":"横风来袭 ⟶","warn")):t==="warn"&&n<=0?(t="gust",n=Ne(3.2,4.5)):t==="gust"&&n<=0&&(t="calm",n=(Math.max(3,6.5-o*.2)+Ne(0,2))*cs(s));const a=t==="gust"?e*(5+o*.25):0;if(i+=(a-i)*Math.min(1,r*3),s.pushX=i,Math.abs(i)>.3)for(const l of s.ebul)l.vx+=i*.25*r;const c=t==="gust"?40:t==="warn"?8:0;if(Math.random()<r*c){const l=e>0?s.bounds.left-1:s.bounds.right+1;s.fx.streak(l,Ne(s.bounds.top,s.bounds.bottom),e*30,0,16777215,.05,.8)}},stop(s){s.pushX=0}}}function w_(){let n=3;const t=[];return{update(e,i){if(n-=i,n<=0&&zn(e)){n=(Math.max(2.2,4-e.d.k*.12)+Ne(0,1))*cs(e);const s=Math.random()<.5?2:1;for(let r=0;r<s;r++){const o=r===0?nn.clamp(e.px+Ne(-1,1),e.bounds.left+1,e.bounds.right-1):ls(e);e.laser(null,o,e.bounds.bottom+1,-Ae,{warn:1.2,dur:.9,w:1.8,color:16738847}),t.push({x:o,t:1.2,fired:!1})}}for(let s=t.length-1;s>=0;s--){const r=t[s];if(r.t-=i,r.t>0){Math.random()<i*25&&e.fx.sparksAt(r.x+Ne(-.8,.8),e.bounds.bottom-1,16747039,1,5);continue}if(!r.fired){r.fired=!0,e.fx.explode(r.x,e.bounds.bottom-1,1.2,16738847,16765498),e.shake=Math.max(e.shake,.3),Pe.boom();const o=3+Math.min(3,e.d.k>>2);for(let a=0;a<o;a++)e.shootEx(r.x+Ne(-1,1),e.bounds.top+.5,Ae+Ne(-.5,.5),2.5,{acc:4,maxSpd:8,color:rt.orange,r:.26})}for(const o of e.enemies)!o.dead&&!o.boss&&!o.ghost&&Math.abs(o.x-r.x)<.9+o.hw*.6&&e.damage(o,40*i);r.t<-.9&&t.splice(s,1)}}}}function E_(){let n=7,t=0;return{start(e){Zs(e,"dark",!0)},update(e,i){n-=i,n<=0&&(n=Ne(7,10),t=2,Zs(e,"lit",!0),e.events.callout("照明弹！","perk")),t>0&&(t-=i,t<=0&&Zs(e,"lit",!1))},stop(e){Zs(e,"dark",!1),Zs(e,"lit",!1)}}}function T_(){let n=3;const t=[];return{update(e,i){if(n-=i,n<=0&&zn(e)){n=(Math.max(1.6,3.2-e.d.k*.08)+Ne(0,1.2))*cs(e);let s=e.px+Ne(-1.5,1.5);if(Math.random()>.6){const r=e.enemies.filter(o=>!o.dead&&!o.boss&&o.z>e.bounds.top);s=r.length?r[Math.floor(Math.random()*r.length)].x:ls(e)}s=nn.clamp(s,e.bounds.left+.5,e.bounds.right-.5),e.laser(null,s,e.bounds.top-1,Ae,{warn:1,dur:.3,w:1.5,color:16774048}),t.push({x:s,t:1})}for(let s=t.length-1;s>=0;s--){const r=t[s];if(r.t-=i,r.t>0)continue;t.splice(s,1),Pe.zap(),Pe.boom(),e.shake=Math.max(e.shake,.35);const o=[];for(let a=0;a<=6;a++)o.push([r.x+(a>0&&a<6?Ne(-.8,.8):0),e.bounds.top-1+a/6*(e.bounds.bottom-e.bounds.top+2)]);e.bolts.push({pts:o,life:.3,color:16774048});for(const a of e.enemies)a.dead||a.ghost||Math.abs(a.x-r.x)>1.3+a.hw*.6||(e.damage(a,a.boss?40:60),e.fx.sparksAt(a.x,a.z,16774048,6,8))}}}}function A_(){let n=0;return{update(t,e){n-=e;const i=n<=0;i&&(n=.12);for(const s of t.enemies){if(s.dead||s.boss||s.kind==="pylon"||s.kind==="supply"||s.kind==="carrier")continue;let r=null;for(const o of t.enemies)if(!(o.kind!=="pylon"||o.dead||o.z<t.bounds.top-1)&&(o.x-s.x)**2+(o.z-s.z)**2<49){r=o;break}s.invuln=!!r,r&&i&&t.bolts.push({pts:[[r.x,r.z],[s.x,s.z]],life:.1,color:3860672})}},stop(t){for(const e of t.enemies)e.boss||(e.invuln=!1)}}}function C_(){let n=7;const t=[-5.5,0,5.5];return{update(e,i){if(!(!zn(e)||e.boss&&!e.boss.dead)&&(n-=i,n<=0)){n=Ne(12,15)-Math.min(4,e.d.k*.2);const s=nn.clamp(t[Math.floor(Math.random()*3)],e.bounds.left+1.2,e.bounds.right-1.2);rf(e,s,5,3.4)}}}}function R_(){let n=4;return{update(t,e){zn(t)&&(n-=e,n<=0&&(n=Ne(4.5,6)*cs(t)*(t.boss&&!t.boss.dead?1.4:1),of(t,ls(t,2),0)))}}}function P_(){const n=new be,t=Le(16777215,{opacity:.8}),e=[],i=[],s=(r,o,a)=>{o.position.set(ls(r,0),7,a?Ne(r.bounds.top-30,r.bounds.top):r.bounds.top-Ne(8,20)),o.scale.setScalar(Ne(.8,1.3))};return{start(r){for(let o=0;o<4;o++){const a=[];for(let d=0;d<6;d++){const h=new lr(Ne(1.2,2.2),12,8);h.translate(d*1.5-4,Ne(0,.6),Ne(-1,1)),a.push(h)}const c=x0(a);a.forEach(d=>d.dispose()),e.push(c);const l=new ue(c,t);l.renderOrder=15,s(r,l,!0),n.add(l),i.push(l)}r.root.add(n)},update(r,o){for(const a of i)a.position.z+=r.scroll*1.5*o,a.position.z>r.bounds.bottom+8&&s(r,a,!1)},stop(r){r.root.remove(n),e.forEach(o=>o.dispose()),t.dispose()}}}function pf(n,t){const e=new be,i=Le(t,{intensity:1.6}),s=n.bounds.bottom-n.bounds.top+6;for(const r of[n.bounds.left,n.bounds.right]){const o=new ue(y(1,1,1),i);o.scale.set(.25,.2,s),o.position.set(r,.2,(n.bounds.top+n.bounds.bottom)/2),e.add(o)}return n.root.add(e),{group:e,mat:i}}function L_(){let n=null;return{start(t){t.defaultBounce=1,n=pf(t,11754751)},update(t,e){n&&(n.mat.uniforms.uIntensity.value=1.4+Math.sin(t.levelTime*3)*.4)},stop(t){t.defaultBounce=0,n&&(t.root.remove(n.group),n.mat.dispose())}}}function I_(){let n=null;return{start(t){t.wrapX=!0,n=pf(t,9329919)},update(t){n&&(n.mat.uniforms.uIntensity.value=1.5+Math.sin(t.levelTime*5)*.6)},stop(t){t.wrapX=!1,n&&(t.root.remove(n.group),n.mat.dispose())}}}function k_(){const n=new be,t=tr(656914,{hatch:!1}),e=Le(11754751,{intensity:2.2}),i=Le(16747039,{intensity:1.6}),s=[];let r=3,o=!1;return{start(a){a.root.add(n)},update(a,c){r-=c;const l=a.d.k>=12?2:1;if(r<=0&&zn(a)&&s.length<l){r=Ne(5,7)*cs(a);let f=ls(a,2.5);for(let p=0;p<5&&Math.abs(f-a.px)<4;p++)f=ls(a,2.5);const u=new be;u.add(new ue(z(.8,16,12),t));const m=new ue(_e(1.4,.12),e);m.rotation.x=Math.PI/2;const v=new ue(_e(2.1,.06),i);v.rotation.x=Math.PI/2,u.add(m,v),n.add(u),s.push({x:f,z:Ne(a.bounds.top+4,a.bounds.top+11),t:0,life:9,mesh:u}),o||(o=!0,a.events.callout("引力井出现！","warn"))}a.pushX=a.pushZ=0;for(let f=s.length-1;f>=0;f--){const u=s[f];u.t+=c,u.z+=.8*c;const m=Math.min(1,u.t/.8)*(u.t>u.life-.8?Math.max(0,(u.life-u.t)/.8):1),v=u.x-a.px,p=u.z-a.pz,g=v*v+p*p,M=Math.sqrt(g)||.001,_=m*40/(g+6);a.pushX+=v/M*_,a.pushZ+=p/M*_,M<.9*m&&zn(a)&&a.hurt();for(const x of a.ebul){const A=u.x-x.x,w=u.z-x.z,C=A*A+w*w;if(C>110)continue;const P=Math.sqrt(C)||.001,S=m*30/(C+3)*c;x.vx+=A/P*S,x.vz+=w/P*S}if(u.mesh.position.set(u.x,0,u.z),u.mesh.scale.setScalar(.2+m*.8),u.mesh.children[1].rotation.z+=c*4,u.mesh.children[2].rotation.z-=c*2,Math.random()<c*20*m){const x=Math.random()*Math.PI*2;a.fx.streak(u.x+Math.cos(x)*3.5,u.z+Math.sin(x)*3.5,-Math.cos(x)*6,-Math.sin(x)*6-a.scroll*.3,11754751,.05,.5)}u.t>u.life&&(n.remove(u.mesh),s.splice(f,1))}const d=7,h=Math.hypot(a.pushX,a.pushZ);h>d&&(a.pushX*=d/h,a.pushZ*=d/h)},stop(a){a.pushX=a.pushZ=0,a.root.remove(n),t.dispose(),e.dispose(),i.dispose()}}}function z_(){let n=2.5;return{start(t){t.scroll=16},update(t,e){if(Math.random()<e*14&&t.fx.streak(ls(t,0),t.bounds.top-2,0,34,16777215,.04,.9),!!zn(t)&&(n-=e,n<=0)){n=(Math.max(2.2,4.2-t.d.k*.08)+Ne(0,1.5))*cs(t);const i=Math.random()<.4?2:1;for(let s=0;s<i;s++)lf(t,ls(t,1.5))}},stop(t){t.scroll=6}}}function D_(){let n=4,t=3;return{update(e,i){zn(e)&&(n-=i,n<=0&&(n=Math.max(5,8-e.d.k*.12)*cs(e),t=nn.clamp(t+Math.floor(Ne(-2,3)),0,5),cf(e,t,7,2.6+e.d.k*.03)))}}}function U_(){return{update(n){for(const t of n.enemies)t.dead||t.boss||t.kind==="supply"||t.kind==="carrier"||t.kind==="phaser"||t.delay>0||(t.data.ps===void 0&&(t.data.ps=Math.random()*3.6),_0(t,(t.t+t.data.ps)%3.6>2.5))},stop(n){for(const t of n.enemies)t.boss||_0(t,!1)}}}function N_(){let n=6,t=0,e=!1;const i=s=>{t=0,s.bulletTs=1,Zs(s,"freeze",!1)};return{update(s,r){if(t>0){if(t-=r,!zn(s))i(s);else if(t<=0){i(s);let o=0;for(const a of s.ebul){if(o++%3!==0)continue;const c=Math.max(4,Math.hypot(a.vx,a.vz)),l=s.angleToPlayer(a.x,a.z);a.vx=Math.cos(l)*c,a.vz=Math.sin(l)*c,a.color=4708095}Pe.zap(),s.events.flashScreen("white")}return}zn(s)&&(n-=r,n<1.2&&!e&&(e=!0,s.events.callout("⏰ 时钟即将停摆…","warn")),n<=0&&(n=(Math.max(5,8-s.d.k*.1)+Ne(0,2))*cs(s),t=1.5,e=!1,s.bulletTs=0,Zs(s,"freeze",!0),Pe.warn()))},stop(s){i(s)}}}function F_(){const n=[];let t=3;return{update(e,i){if(t-=i,t<=0&&zn(e)){t=(Math.max(1.8,3.4-e.d.k*.07)+Ne(0,1))*cs(e);const s=Math.random()<.5?2:1;for(let r=0;r<s;r++){const o=r===0?e.px+Ne(-1,1):ls(e),a=r===0?e.pz+Ne(-1.5,1.5):Ne(e.bounds.top+6,e.bounds.bottom-2);n.push({x:o,z:a,t:1.4,pulse:0})}}for(let s=n.length-1;s>=0;s--){const r=n[s];if(r.t-=i,r.pulse-=i,r.z+=e.scroll*.3*i,r.pulse<=0&&r.t>0&&(r.pulse=.22,e.fx.ring(r.x,r.z,1.8,16722506,.25)),!(r.t>0)){n.splice(s,1),e.fx.explode(r.x,r.z,1.4),Pe.boom(),e.shake=Math.max(e.shake,.35),zn(e)&&((e.px-r.x)**2+(e.pz-r.z)**2<1.7*1.7&&e.hurt(),e.ring(r.x,r.z,10+Math.min(6,e.d.k>>1),4,Math.random(),rt.red));for(const o of e.enemies)!o.dead&&!o.boss&&(o.x-r.x)**2+(o.z-r.z)**2<4&&e.damage(o,60)}}}}}const Zh={wind:"横风",lightning:"落雷",gravity:"引力井",artillery:"炮击",lava:"熔岩柱",timefreeze:"时停",bounce:"晶壁反弹",dark:"夜幕"};function O_(){const n=Object.keys(Zh).sort(()=>Math.random()-.5);let t=null,e=-1,i=4;return{update(s,r){var o,a;i-=r,i<=0&&zn(s)&&((o=t==null?void 0:t.stop)==null||o.call(t,s),e=(e+1)%n.length,t=mf(n[e]),(a=t==null?void 0:t.start)==null||a.call(t,s),i=15,s.events.callout(`混沌：${Zh[n[e]]}`,"warn")),t==null||t.update(s,r)},stop(s){var r;(r=t==null?void 0:t.stop)==null||r.call(t,s),t=null}}}function mf(n){switch(n){case"wind":return S_();case"lava":return w_();case"dark":return E_();case"lightning":return T_();case"pylon":return A_();case"train":return C_();case"hive":return R_();case"clouds":return P_();case"bounce":return L_();case"gravity":return k_();case"chase":return z_();case"grid":return D_();case"phase":return U_();case"wrap":return I_();case"timefreeze":return N_();case"artillery":return F_();case"chaos":return O_();case"mothership":return b_();default:return null}}const T0=()=>({dmg:1,rate:1,pierce:0,crit:.05,speed:1,magnet:1,chainBoom:0,shieldGen:0,graze:1,subRate:1,homing:0,drones:0,ultCharge:1,frenzy:0,spread:0,rear:0,miner:0,lastStand:0,nova:0,execute:0,bossDmg:0,comboTime:0,ultPower:1,shock:0,bulletTime:0,extraSupply:0,eliteBonus:0,doubleBomb:0,timeSand:0,ironWall:0,hive:0,salvo:0,heShell:0,squadron:0,coil:0}),gf={common:"普通",rare:"稀有",epic:"史诗",legendary:"传奇"},B_={common:50,rare:28,epic:15,legendary:7},bn=[{id:"dmg",name:"火力超载",desc:"全部伤害 +20%",rarity:"common",max:5,apply:n=>n.dmg+=.2},{id:"rate",name:"狂热扳机",desc:"主武器射速 +15%；折射激光蓄力时间缩短",rarity:"common",max:5,apply:n=>n.rate+=.15},{id:"speed",name:"引擎超频",desc:"移动速度 +12%（含触屏拖动的跟随速度）",rarity:"common",max:3,apply:n=>n.speed+=.12},{id:"magnet",name:"磁暴吸附",desc:"道具与勋章的吸附范围 ×2",rarity:"common",max:2,apply:n=>n.magnet+=1},{id:"graze",name:"擦弹大师",desc:"擦弹得分与大招充能 ×2",rarity:"common",max:2,apply:n=>n.graze*=2},{id:"sub",name:"副武器超频",desc:"副武器冷却时间 -25%",rarity:"common",max:3,apply:n=>n.subRate+=.33},{id:"rear",name:"尾炮",desc:"自动向后方射击，拦截从后方来袭的敌机",rarity:"common",max:2,apply:n=>n.rear+=1,unlock:3},{id:"miner",name:"淘金者",desc:"勋章价值 +50%；普通敌机有 30% 几率掉落勋章",rarity:"common",max:2,apply:n=>n.miner+=1,unlock:3},{id:"combo",name:"连击续航",desc:"连击判定时间 +1 秒",rarity:"common",max:2,apply:n=>n.comboTime+=1,unlock:3},{id:"pierce",name:"穿甲弹头",desc:"主武器子弹穿透数 +1",rarity:"rare",max:2,apply:n=>n.pierce+=1},{id:"crit",name:"暴击芯片",desc:"暴击率 +12%（暴击造成 2.5 倍伤害）",rarity:"rare",max:4,apply:n=>n.crit+=.12},{id:"shield",name:"护盾发生器",desc:"立即获得 1 层护甲；护甲损失后每 18 秒恢复 1 层",rarity:"rare",max:2,apply:n=>n.shieldGen+=1,instant:"armor"},{id:"ult",name:"能量虹吸",desc:"大招充能速度 +40%",rarity:"rare",max:2,apply:n=>n.ultCharge+=.4},{id:"spread",name:"扩散弹道",desc:"主武器增加一组弹道（贯穿激光加宽，折射激光折射数 +1）",rarity:"rare",max:2,apply:n=>n.spread+=1,unlock:3},{id:"laststand",name:"背水一战",desc:"无护甲时伤害 +30%、射速 +20%",rarity:"rare",max:1,apply:n=>n.lastStand=1,unlock:8},{id:"boss",name:"首领克星",desc:"对 Boss 与精英敌机的伤害 +30%",rarity:"rare",max:2,apply:n=>n.bossDmg+=.3,unlock:8},{id:"ultpow",name:"战术升级",desc:"大招持续时间与威力 +30%",rarity:"rare",max:2,apply:n=>n.ultPower+=.3,unlock:8},{id:"elite",name:"精英猎手",desc:"精英敌机出现率 +15%（精英必定掉落强化星）",rarity:"rare",max:2,apply:n=>n.eliteBonus+=.15,unlock:8},{id:"chain",name:"连锁殉爆",desc:"敌机被击毁时发生爆炸，对周围敌机造成伤害",rarity:"epic",max:2,apply:n=>n.chainBoom+=1},{id:"homing",name:"智能弹头",desc:"主武器子弹追踪敌机",rarity:"epic",max:2,apply:n=>n.homing+=1},{id:"drone",name:"浮游炮",desc:"增加 1 台环绕自机的浮游炮",rarity:"epic",max:2,apply:n=>n.drones+=1},{id:"nova",name:"脉冲力场",desc:"每 8.5 秒释放一次脉冲，清除周围敌弹（Lv2 间隔缩短为 6 秒）",rarity:"epic",max:2,apply:n=>n.nova+=1,unlock:12},{id:"shock",name:"电弧弹头",desc:"主武器命中时有 12% 几率释放电弧，攻击附近的另一架敌机",rarity:"epic",max:2,apply:n=>n.shock+=.12,unlock:12},{id:"execute",name:"处决协议",desc:"非 Boss 敌机生命值低于 15% 时立即击毁",rarity:"epic",max:1,apply:n=>n.execute=1,unlock:12},{id:"bullettime",name:"极限闪避",desc:"擦弹时触发 0.5 秒子弹时间（冷却 4 秒）",rarity:"epic",max:1,apply:n=>n.bulletTime=1,unlock:12},{id:"supply",name:"补给加急",desc:"此后每关额外出现 1 架补给机",rarity:"epic",max:1,apply:n=>n.extraSupply=1,unlock:16},{id:"frenzy",name:"嗜血狂潮",desc:"连击数 ≥10 时伤害 +40%；连击倍率上限 ×2",rarity:"legendary",max:1,apply:n=>n.frenzy=1},{id:"life",name:"紧急维修",desc:"生命 +1",rarity:"legendary",max:3,apply:()=>{},instant:"life"},{id:"x-max",name:"二次轰炸",desc:"地毯轰炸结束后追加一轮轰炸（60% 威力）",rarity:"epic",max:1,apply:n=>n.doubleBomb=1,only:{pilot:"max"},unlock:0},{id:"x-lia",name:"时之沙",desc:"时停领域持续时间 +3 秒；领域内擦弹充能 ×3",rarity:"epic",max:1,apply:n=>n.timeSand=1,only:{pilot:"lia"},unlock:2},{id:"x-anvil",name:"铁壁",desc:"护甲上限 +1；护盾碎裂时的震波范围 ×1.8",rarity:"epic",max:1,apply:n=>n.ironWall=1,instant:"armor",only:{pilot:"anvil"},unlock:6},{id:"x-vex",name:"蜂群母巢",desc:"蜂群召唤的飞弹数 30 → 50；僚机持续时间 +4 秒",rarity:"epic",max:1,apply:n=>n.hive=1,only:{pilot:"vex"},unlock:10},{id:"v-falcon",name:"导弹齐射",desc:"追踪导弹每轮 +2 枚，伤害 +1",rarity:"epic",max:1,apply:n=>n.salvo=1,only:{vehicle:"falcon"},unlock:0},{id:"v-rhino",name:"高爆弹头",desc:"重炮命中时产生小范围爆炸",rarity:"epic",max:1,apply:n=>n.heShell=1,only:{vehicle:"rhino"},unlock:4},{id:"v-hummingbird",name:"僚机扩编",desc:"僚机 +2 架，组成三层编队",rarity:"epic",max:1,apply:n=>n.squadron=1,only:{vehicle:"hummingbird"},unlock:8},{id:"v-thunder",name:"超导线圈",desc:"闪电链跳跃次数 +2，伤害 +50%",rarity:"epic",max:1,apply:n=>n.coil=1,only:{vehicle:"thunder"},unlock:12}],Cs=[{id:"lethal",name:"致命一击",desc:"暴击伤害倍率 ×2.5 → ×3.5",a:"crit",b:"dmg"},{id:"breach",name:"贯穿爆破",desc:"殉爆伤害 ×2，爆炸范围扩大",a:"chain",b:"pierce"},{id:"swarmnet",name:"蜂巢网络",desc:"浮游炮定时发射追踪导弹",a:"homing",b:"drone"},{id:"grazeshield",name:"擦弹充能",desc:"每次擦弹使护盾恢复时间缩短 0.6 秒",a:"graze",b:"shield"},{id:"bloodbelt",name:"狂暴弹链",desc:"射速随连击数提升（最高 +40%）",a:"frenzy",b:"rate"},{id:"pulse",name:"脉冲大师",desc:"脉冲力场对敌机造成伤害，并为大招充能",a:"nova",b:"ult"},{id:"thunder",name:"雷霆万钧",desc:"电弧触发几率 ×2，且额外跳跃 1 次",a:"shock",b:"sub"},{id:"jackpot",name:"聚宝盆",desc:"勋章全屏吸附，勋章价值 ×2",a:"magnet",b:"miner"}],H_=(n,t)=>{const e=Cs.find(i=>i.id===t);return!!e&&!!n[e.a]&&!!n[e.b]},ol=n=>Cs.filter(t=>n[t.a]&&n[t.b]),vf=(n,t)=>Cs.filter(e=>e.a===t&&n[e.b]&&!n[e.a]||e.b===t&&n[e.a]&&!n[e.b]),V_=n=>Cs.filter(t=>t.a===n||t.b===n),Wo=(n,t)=>!!t.all||n.unlock===void 0||t.cleared.includes(n.unlock);function xf(n,t,e=3){const i=bn.filter(o=>(n[o.id]??0)<o.max&&Wo(o,t)&&(!o.only||o.only.pilot===t.pilot||o.only.vehicle===t.vehicle)),s=[],r=o=>B_[o.rarity]*(o.only?1.6:1);for(;s.length<e&&i.length;){const o=i.reduce((l,d)=>l+r(d),0);let a=Math.random()*o,c=0;for(;c<i.length&&(a-=r(i[c]),!(a<=0));c++);s.push(i.splice(Math.min(c,i.length-1),1)[0])}return s}const Pr=8382719,al=8,Mf=.45,G_=`
  varying vec2 vP;
  void main() {
    vP = uv * 2.0 - 1.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,W_=`
  uniform vec3 uColor;
  uniform float uTime;
  uniform float uIdle;
  uniform vec3 uImp[${al}];
  uniform float uSweep;
  uniform float uBreak;
  varying vec2 vP;

  // 六边形网格：返回到所在格子边缘的距离（0 = 正好在边上）
  float hexEdge(vec2 p) {
    const vec2 s = vec2(1.0, 1.7320508);
    vec4 hc = floor(vec4(p, p - vec2(0.5, 1.0)) / s.xyxy) + 0.5;
    vec4 h = vec4(p - hc.xy * s, p - (hc.zw + 0.5) * s);
    vec2 g = dot(h.xy, h.xy) < dot(h.zw, h.zw) ? h.xy : h.zw;
    vec2 a = abs(g);
    return 0.5 - max(dot(a, s * 0.5), a.x);
  }

  /** 圆片上一点对应的球面法线（俯视一个半球形护盾，z 朝向镜头） */
  vec3 domeN(vec2 p) {
    return vec3(p, sqrt(max(0.0, 1.0 - dot(p, p))));
  }

  void main() {
    float r = length(vP);
    if (r > 1.0) discard;
    vec3 n = domeN(vP);
    // 六边形网格贴在球面上：按球面上的弧长展开，越靠边格子被压得越扁越密，看起来是个鼓起来的罩子
    float theta = asin(min(r, 0.999));
    vec2 q = r > 1e-4 ? vP / r * theta : vec2(0.0);
    float line = 1.0 - smoothstep(0.0, 0.06, hexEdge(q * 4.6));
    // 立体感：边缘菲涅尔发亮、中间几乎透明，左上方一团柔和的反光
    float fres = pow(1.0 - n.z, 1.6);
    float spec = pow(max(0.0, dot(n, normalize(vec3(-0.45, 0.55, 0.7)))), 24.0);
    float shimmer = 0.65 + 0.35 * sin(uTime * 2.2 + q.y * 3.0 + q.x * 1.4);
    float a = uIdle * (fres * (0.28 + 0.9 * line) + 0.04 * line) * shimmer;
    a += uIdle * (0.55 * smoothstep(0.95, 0.99, r) + 0.3 * spec);
    // 命中点：沿球面扩散——中心一团亮光 + 一圈向外推开的波纹，把经过的六边形格子点亮
    float hit = 0.0, core = 0.0;
    for (int i = 0; i < ${al}; i++) {
      float t = uImp[i].z;
      if (t < 0.0) continue;
      float k = 1.0 - t / ${Mf.toFixed(2)};
      float d = acos(clamp(dot(n, domeN(uImp[i].xy)), -1.0, 1.0));
      float ring = exp(-pow((d - t * 3.2) / 0.12, 2.0)) * k;
      float c = exp(-d * d / 0.05) * max(0.0, 1.0 - t / 0.22);
      hit += ring * 0.8 + c * 0.7;
      core += c;
    }
    // 恢复：一道亮带从下往上扫过整个护盾；破碎：整片网格闪一下
    float sweep = uSweep > 0.0 ? exp(-pow((vP.y - (uSweep * 2.4 - 1.2)) / 0.18, 2.0)) : 0.0;
    float lit = hit + sweep * 0.8 + uBreak;
    // 被点亮的格子：格线最亮，格子内部也透出一层光
    a += lit * (0.2 + 0.95 * line) * (0.55 + 0.45 * fres + 0.3);
    vec3 col = mix(uColor, vec3(1.0), clamp(core * 0.8 + uBreak * 0.3 + spec * 0.5, 0.0, 1.0)) * (1.0 + lit * 1.4);
    gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
    #include <colorspace_fragment>
  }
`,$_=`
  uniform vec3 uColor;
  uniform float uProgress;
  uniform float uBlink;
  varying vec2 vP;
  const float TAU = 6.2831853;
  void main() {
    float r = length(vP);
    if (r > 1.0 || r < 0.93) discard;
    float t = fract(0.25 - atan(vP.y, vP.x) / TAU);
    float a = t < uProgress ? 0.55 + 0.45 * uBlink : 0.07;
    gl_FragColor = vec4(uColor * (1.0 + uBlink), a);
    #include <colorspace_fragment>
  }
`,Kh=()=>new zs(2,2).rotateX(-Math.PI/2);class X_{constructor(t){H(this,"group",new be);H(this,"radii",{a:1,b:1});H(this,"shellMat");H(this,"chargeMat");H(this,"shell");H(this,"charge");H(this,"impacts",[]);H(this,"nextImpact",0);H(this,"sweepT",0);H(this,"breakT",0);H(this,"t",0);this.fx=t;for(let i=0;i<al;i++)this.impacts.push(new U(0,0,-1));const e=(i,s)=>new sn({uniforms:s,vertexShader:G_,fragmentShader:i,transparent:!0,depthWrite:!1,side:Fn,blending:No});this.shellMat=e(W_,{uColor:{value:new qt(Pr)},uTime:{value:0},uIdle:{value:1},uImp:{value:this.impacts},uSweep:{value:0},uBreak:{value:0}}),this.chargeMat=e($_,{uColor:{value:new qt(Pr)},uProgress:{value:0},uBlink:{value:0}}),this.shell=new ue(Kh(),this.shellMat),this.shell.position.y=.9,this.shell.renderOrder=9,this.charge=new ue(Kh(),this.chargeMat),this.charge.position.y=.85,this.charge.renderOrder=8,this.group.add(this.shell,this.charge),this.group.visible=!1}setHull(t){this.radii={a:t.span+.25,b:t.len+.25},this.group.scale.set(this.radii.a,1,this.radii.b)}reset(){this.sweepT=this.breakT=0;for(const t of this.impacts)t.z=-1}hide(){this.group.visible=!1}hit(t,e){const i=this.impacts[this.nextImpact];this.nextImpact=(this.nextImpact+1)%al;const s=(t-this.group.position.x)/this.radii.a,r=-(e-this.group.position.z)/this.radii.b;i.set(s*.97,r*.97,0)}restore(t,e){this.sweepT=.5,this.fx.sparksAt(t,e,Pr,10,7)}shatter(t,e,i){if(this.breakT=.3,i>0){this.fx.sparksAt(t,e,Pr,12,9);return}this.fx.shards(t,e,1.3,Pr,16777215),this.fx.ring(t,e,2.8,Pr,.3),this.fx.sparksAt(t,e,16777215,16,11)}update(t,e,i,s,r,o){this.t+=t,this.group.position.set(e,.2,i);for(const d of this.impacts)d.z>=0&&(d.z=d.z+t>Mf?-1:d.z+t);this.sweepT=Math.max(0,this.sweepT-t),this.breakT=Math.max(0,this.breakT-t);const a=this.breakT>0||this.impacts.some(d=>d.z>=0),c=o&&(s>0||a||r>=0);if(this.group.visible=c,!c)return;this.shell.visible=s>0||a;const l=this.shellMat.uniforms;l.uTime.value=this.t,l.uIdle.value=s>0?.38+.1*Math.min(s-1,3):0,l.uSweep.value=this.sweepT>0?1-this.sweepT/.5:0,l.uBreak.value=this.breakT/.3*.9,this.charge.visible=r>=0,r>=0&&(this.chargeMat.uniforms.uProgress.value=r,this.chargeMat.uniforms.uBlink.value=r>.85&&Math.floor(this.t*14)%2===0?1:0)}}const q_=`
  varying vec3 vN;
  varying vec3 vV;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vN = normalize(mat3(modelMatrix) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Y_=`
  uniform vec3 uColor;
  uniform float uPower;
  uniform float uDot;
  varying vec3 vN;
  varying vec3 vV;
  void main() {
    float ndv = clamp(dot(normalize(vN), normalize(vV)), 0.0, 1.0);
    // 三段硬边色阶：白芯 → 浅色 → 本色
    vec3 col = ndv > 0.72 ? vec3(1.0) : (ndv > 0.42 ? mix(uColor, vec3(1.0), 0.55) : uColor);
    // 最外一圈加美漫网点（和机体同一套 45° 屏幕网格）
    if (ndv <= 0.42) {
      vec2 q = gl_FragCoord.xy / uDot;
      q = vec2(q.x + q.y, q.x - q.y) * 0.7071;
      if (length(fract(q) - 0.5) < 0.24) col *= 0.7;
    }
    gl_FragColor = vec4(col * uPower, 1.0);
    #include <colorspace_fragment>
  }
`;function Z_(n,t){const e=new Zo;for(let s=0;s<n*2;s++){const r=s/(n*2)*Math.PI*2,o=1+.35*Math.sin(s*2.3+t)*Math.cos(s*1.7+t*2),a=s%2?.62:o,c=Math.cos(r)*a,l=Math.sin(r)*a;s===0?e.moveTo(c,l):e.lineTo(c,l)}e.closePath();const i=new vl(e);return i.rotateX(-Math.PI/2),i}const K_=new qt(16777215),j_=!1;class J_{constructor(t){H(this,"group",new be);H(this,"orbMat");H(this,"auraOuterMat",Le(16777215,{intensity:1.15,side:Fn}));H(this,"auraInnerMat",Le(16777215,{intensity:1.35,side:Fn}));H(this,"orbOutline");H(this,"auraOuter");H(this,"auraInner");H(this,"arcs",[]);H(this,"arcLayer");H(this,"t",0);H(this,"arcT",0);H(this,"burstT",0);H(this,"color",new qt);this.orbMat=new sn({uniforms:{uColor:{value:new qt(16777215)},uPower:{value:1},uDot:Ml.uDot},vertexShader:q_,fragmentShader:Y_});const e=new ue(z(1,20,14),this.orbMat);this.orbOutline=new ue(z(1,20,14),J0);const i=Le(920594,{side:Fn}),s=(r,o,a)=>{const c=new be,l=Z_(9,o),d=new ue(l,i);d.scale.setScalar(1.1),d.position.y=a-.02;const h=new ue(l,r);return h.position.y=a,c.add(d,h),c};this.auraOuter=s(this.auraOuterMat,1.3,-.3),this.auraInner=s(this.auraInnerMat,4.1,-.2),this.auraOuter.visible=this.auraInner.visible=j_,this.group.add(this.auraOuter,this.auraInner,this.orbOutline,e),this.group.visible=!1,t.add(this.group),this.arcLayer=new Yn(t,y(1,1,1),Le(16777215,{intensity:1.3}),120,.035)}burst(){this.burstT=.12;for(let t=0;t<6;t++)this.spawnArc(2.1+Math.random()*.8)}hide(){this.group.visible=!1,this.arcs.length=0,this.arcLayer.begin(),this.arcLayer.end()}update(t,e,i,s,r,o,a,c=!1){if(this.t+=t,this.burstT=Math.max(0,this.burstT-t),r<=.01){this.group.visible&&this.hide();return}this.group.visible=!0,this.color.set(o),this.group.position.set(e,i,s),this.group.scale.setScalar(r);const l=c&&Math.floor(this.t*30)%2===0;this.orbMat.uniforms.uColor.value.copy(l?K_:this.color),this.orbMat.uniforms.uPower.value=1.15,this.orbOutline.scale.setScalar(1+.07/r),this.auraOuterMat.uniforms.uColor.value.copy(this.color);const d=1.25+.45*a+this.burstT*6;if(this.auraOuter.scale.setScalar(d*(.92+Math.random()*.16)),this.auraInner.scale.setScalar(d*.72*(.9+Math.random()*.2)),this.auraOuter.rotation.y=this.t*2.2,this.auraInner.rotation.y=-this.t*3.1,this.arcT-=t,this.arcT<=0){this.arcT=.06;const h=Math.round(a*2.5);for(let f=0;f<h;f++)this.spawnArc(1.6+Math.random()*.6)}this.arcLayer.begin();for(let h=this.arcs.length-1;h>=0;h--){const f=this.arcs[h];if(f.life-=t,f.life<=0){this.arcs.splice(h,1);continue}const u=Math.max(.05,r*.1);for(let m=0;m<f.pts.length-1;m++){const v=f.pts[m],p=f.pts[m+1],g=e+v.x*r,M=s+v.z*r,_=e+p.x*r,x=s+p.z*r,A=Math.hypot(_-g,x-M)+u*.6;this.arcLayer.push((g+_)/2,i+.1,(M+x)/2,u,u,A,Math.atan2(_-g,x-M),f.color)}}this.arcLayer.end()}spawnArc(t){if(this.arcs.length>24)return;const e=Math.random()*Math.PI*2,i=Math.cos(e),s=Math.sin(e),r=[],o=3;for(let a=0;a<=o;a++){const c=.95+(t-.95)*a/o,l=a===0?0:(a%2?1:-1)*(.18+Math.random()*.2);r.push(new U(i*c-s*l,0,s*c+i*l))}this.arcs.push({pts:r,life:.06+Math.random()*.05,color:Math.random()<.6?16777215:16774048})}}const Fa=[2,3,4,6],xc=[2,4],jh=[10325247,11894271,13073919,14904319,16732120],Mc=30,_c=5,Q_=3,Oa=["KA-BOOM!","POW!","BLAM!","KRAK!","WHAM!","BOOM!","轰！","砰！"],t3={10:"连击 ×10！",25:"杀疯了！",50:"无人能挡！",80:"传奇连击！",120:"神 · 连 · 击！",200:"天空主宰！！"},e3={drone:3,swooper:3,gunship:12,carrier:5,supply:5,bomber:25,turret:8,boss:0,bug:1,mine:1,node:2,asteroid:2,pod:3,sniper:8,shieldbearer:10,minelayer:8,ace:10,prism:8,healer:8,traincar:6,pylon:15,mothership:30},n3=new Set(["gunship","bomber","mothership","pylon","shieldbearer","traincar"]),i3={falcon:16751135,rhino:16751135,hummingbird:5111039,thunder:13073919},Li=class Li{constructor(t,e,i,s){H(this,"root",new be);H(this,"bounds",{left:-9,right:9,top:-14,bottom:14});H(this,"level",0);H(this,"levelTime",0);H(this,"enemies",[]);H(this,"ebul",[]);H(this,"pbul",[]);H(this,"pickups",[]);H(this,"bolts",[]);H(this,"rays",[]);H(this,"prismCharge",0);H(this,"prismRelease",0);H(this,"prismOrbR",0);H(this,"lasers",[]);H(this,"timers",[]);H(this,"scriptIdx",0);H(this,"perkIdx",0);H(this,"bossSpawned",!1);H(this,"bossWarned",!1);H(this,"boss",null);H(this,"state","idle");H(this,"shake",0);H(this,"scroll",6);H(this,"enemyTs",1);H(this,"bulletTs",1);H(this,"d",Za(0));H(this,"mech",null);H(this,"pushX",0);H(this,"pushZ",0);H(this,"wrapX",!1);H(this,"defaultBounce",0);H(this,"slowmo",0);H(this,"time",0);H(this,"cfg");H(this,"px",0);H(this,"pz",10);H(this,"pvx",0);H(this,"score",0);H(this,"kills",0);H(this,"levelKills",0);H(this,"lives",3);H(this,"power",1);H(this,"sub",1);H(this,"powerXp",0);H(this,"subXp",0);H(this,"ult",2);H(this,"gauge",0);H(this,"armor",0);H(this,"invuln",0);H(this,"respawn",0);H(this,"alive",!0);H(this,"god",!1);H(this,"scripted",!0);H(this,"holdScript",!1);H(this,"mode","campaign");H(this,"wave",0);H(this,"waveBoss",!1);H(this,"waveSupplied",!1);H(this,"waveScript",[]);H(this,"combo",0);H(this,"comboT",0);H(this,"maxCombo",0);H(this,"grazes",0);H(this,"mods",T0());H(this,"owned",{});H(this,"nextMilestone",1e5);H(this,"shieldT",0);H(this,"shieldHp",0);H(this,"critPopT",0);H(this,"fireCd",0);H(this,"subCd",0);H(this,"wingCd",0);H(this,"droneCd",0);H(this,"droneMissileCd",0);H(this,"rearCd",0);H(this,"novaT",0);H(this,"bulletTimeCd",0);H(this,"extraSupplied",!1);H(this,"dragX",0);H(this,"dragZ",0);H(this,"comboOn",{});H(this,"shieldFx");H(this,"muzzle");H(this,"ultTimers",{slow:0,shield:0,swarm:0,bomb:0});H(this,"ultDuration",1);H(this,"playerModel",null);H(this,"hitDot");H(this,"shieldMesh");H(this,"wingmen",[]);H(this,"laserOn",!1);H(this,"laserDrawW",0);H(this,"ebOuter");H(this,"ebInner");H(this,"pbNeedle");H(this,"pbOrb");H(this,"beams");H(this,"beamCaps");H(this,"pixelToWorld",.03);this.fx=e,this.input=i,this.events=s,t.add(this.root);const r=z(1,10,8);this.ebOuter=new Yn(t,r,Le(16777215,{intensity:1}),1500,.09,!0),this.ebInner=new Yn(t,r,Le(16777215,{intensity:1.5}),1500,0,!0),this.ebInner.core.renderOrder=12,this.pbNeedle=new Yn(t,y(1,1,1),Le(16777215,{intensity:1.6}),900,.05),this.pbOrb=new Yn(t,r,Le(16777215,{intensity:1.6}),500,.07),this.beams=new Yn(t,y(1,1,1),Le(16777215,{intensity:2.4}),240,.08),this.beamCaps=new Yn(t,q(.5,.5,1,18),Le(16777215,{intensity:2.4}),240,.08),this.hitDot=new ue(z(1,10,8),Le(16777215,{intensity:2}));const o=new ue(z(1,10,8),Le(14829868,{side:pn}));o.scale.setScalar(1.45),this.hitDot.add(o),this.hitDot.renderOrder=20,this.hitDot.material.depthTest=!1,this.root.add(this.hitDot),this.shieldMesh=new ue(z(1.9,20,14),Le(8382719,{opacity:.35,intensity:1.6}));const a=new ue(z(1.9,20,14),Le(1118228,{side:pn}));a.scale.setScalar(1.05),this.shieldMesh.add(a),this.shieldMesh.visible=!1,this.root.add(this.shieldMesh),this.shieldFx=new X_(e),this.root.add(this.shieldFx.group),this.muzzle=new J_(this.root);for(let c=0;c<8;c++){const l=M0("hummingbird");l.scale.setScalar(.45),l.visible=!1,this.root.add(l),this.wingmen.push(l)}}setBounds(t){this.bounds=t}startRun(t){this.cfg=t,this.score=0,this.kills=0,this.lives=2,this.power=1,this.sub=1,this.powerXp=this.subXp=0,this.ult=t.pilot.id==="max"?3:2,this.gauge=0,this.combo=this.comboT=this.maxCombo=this.grazes=0,this.mods=T0(),this.owned={},this.comboOn={},this.nextMilestone=1e5,this.shieldFx.setHull(nc[t.vehicle.id]),this.playerModel&&this.root.remove(this.playerModel),this.playerModel=M0(t.vehicle.id),this.root.add(this.playerModel),this.mode=t.mode??"campaign",this.wave=0,this.mode==="endless"?(this.startLevel(Math.floor(Math.random()*Ue.length)),this.beginWave()):this.startLevel(t.level)}maxArmor(){return this.cfg.vehicle.armor+(this.cfg.pilot.id==="anvil"?1:0)+this.mods.shieldGen+this.mods.ironWall}get perkCtx(){return{pilot:this.cfg.pilot.id,vehicle:this.cfg.vehicle.id,cleared:this.cfg.cleared??[],all:this.cfg.allPerks}}startLevel(t){this.clearField(),this.level=t,this.d=Za(t),this.levelTime=0,this.levelKills=0,this.scriptIdx=0,this.perkIdx=0,this.bossSpawned=this.bossWarned=!1,this.holdScript=!1,this.boss=null,this.state="playing",this.alive=!0,this.respawn=0,this.armor=this.maxArmor(),this.shieldHp=0,this.px=0,this.pz=this.bounds.bottom-3,this.invuln=2,this.enemyTs=1,this.bulletTs=1,this.pushX=this.pushZ=0,this.wrapX=!1,this.defaultBounce=0,this.scroll=6,this.slowmo=0,this.dragX=this.dragZ=0,this.novaT=3,this.rearCd=this.bulletTimeCd=0,this.extraSupplied=!1,this.shieldFx.reset(),this.ultTimers={slow:0,shield:0,swarm:0,bomb:0},this.events.ultVisual("slow",!1),this.input.reset();const e=Ue[t];this.mode==="campaign"&&(this.events.banner(e.name,e.subtitle),e.tip&&this.later(2.6,()=>this.events.callout(e.tip,"perk"))),this.setupStage(t)}setupStage(t){var e,i,s,r;this.level=t,this.d=this.mode==="endless"?fM(Math.max(1,this.wave)):Za(t),this.levelTime=0,this.scriptIdx=0,this.perkIdx=0,this.bossSpawned=this.bossWarned=!1,this.holdScript=!1;for(const o of ec(E0(t)))o.dispose();for(const o of CM[t]??[])for(const a of ec(Uh(o,t,this.d.mk)))a.dispose();(i=(e=this.mech)==null?void 0:e.stop)==null||i.call(e,this),this.mech=mf(Ue[t].mech),(r=(s=this.mech)==null?void 0:s.start)==null||r.call(s,this)}beginWave(){this.wave++;const t=this.wave>1?this.level:-1;let e=Math.floor(Math.random()*Ue.length);for(;e===t;)e=Math.floor(Math.random()*Ue.length);if(this.setupStage(e),this.waveBoss=this.wave%_c===0,this.waveSupplied=!1,this.waveScript=[],!this.waveBoss){const i=mc[e],s=i[i.length-1][0],r=Math.random()*Math.max(1,s-(Mc-5));for(const[o,a]of i)o>=r&&o<r+Mc-5&&this.waveScript.push([o-r+2,a])}this.events.waveStart(this.wave,e,this.waveBoss)}runWave(){for(;this.scriptIdx<this.waveScript.length&&this.waveScript[this.scriptIdx][0]<=this.levelTime;)this.waveScript[this.scriptIdx][1](this),this.scriptIdx++;if(this.waveBoss){!this.bossWarned&&this.levelTime>=.5&&(this.bossWarned=!0,this.events.banner("WARNING!",`${Ue[this.level].bossName} 正在接近`,"warning"),this.events.flashScreen("red"),Pe.warn()),!this.bossSpawned&&this.levelTime>=3.5&&(this.bossSpawned=!0,vc(this,this.level,Math.round(Ue[this.level].bossHp*(.5+.05*this.wave))));return}!this.waveSupplied&&this.levelTime>=10&&(this.waveSupplied=!0,hc(this,(Math.random()-.5)*8),this.events.callout("补给机来了！击落它拿强化","perk")),this.levelTime>=Mc&&this.beginWave()}clearField(){var t,e;(e=(t=this.mech)==null?void 0:t.stop)==null||e.call(t,this),this.mech=null;for(const i of this.enemies)this.disposeEnemy(i);for(const i of this.pickups)this.root.remove(i.model);this.enemies=[],this.pickups=[],this.ebul=[],this.pbul=[],this.bolts=[],this.rays=[],this.prismCharge=0,this.lasers=[],this.timers=[],this.fx.clear()}stop(){this.clearField(),this.state="idle",this.playerModel&&(this.playerModel.visible=!1),this.hitDot.visible=!1,this.shieldMesh.visible=!1,this.shieldFx.hide(),this.muzzle.hide();for(const t of this.wingmen)t.visible=!1;this.events.ultVisual("slow",!1);for(const t of[this.ebOuter,this.ebInner,this.pbNeedle,this.pbOrb,this.beams,this.beamCaps])t.begin(),t.end()}later(t,e){this.timers.push({t,fn:e})}spawnBossNow(){return this.bossWarned=this.bossSpawned=!0,vc(this,this.level,Ue[this.level].bossHp)}skipToBoss(){var t,e;for(const i of this.enemies)i.boss||(i.dead=!0);if(this.mode==="endless"){if(this.waveBoss)return;this.wave=Math.ceil(this.wave/_c)*_c-1,this.beginWave();return}(e=(t=this.mech)==null?void 0:t.skip)==null||e.call(t,this),this.scriptIdx=mc[this.level].length,this.perkIdx=pc.length,Number.isFinite(fc[this.level])&&(this.levelTime=fc[this.level]-3.5)}addEnemy(t){const e=t.kind==="boss"?E0(this.level):Uh(t.kind,t.tint,t.tint===this.level?this.d.mk:1),i={...t,model:e,mats:ec(e),maxHp:t.hp,t:0,t2:0,dead:!1,flash:0,yaw:0,invuln:!1,entered:!1,elite:!1,ghost:!1,data:{},delay:t.delay??0};return i.boss||(i.hp*=this.d.hp),(t.kind==="gunship"||t.kind==="bomber")&&Math.random()<.22+this.mods.eliteBonus&&(i.elite=!0,i.hp*=2.5,i.score*=3,i.drop="perk",e.scale.setScalar(1.15)),i.maxHp=i.hp,e.position.set(i.x,0,i.z),e.visible=i.delay<=0,this.root.add(e),this.enemies.push(i),i.boss&&(this.boss=i),i}angleToPlayer(t,e){return Math.atan2(this.pz-e,this.px-t)}shoot(t,e,i,s,r=16726992,o=.22){return this.shootEx(t,e,i,s,{color:r,r:o})}shootEx(t,e,i,s,r={}){const o=s*this.d.bspd,a={x:t,z:e,vx:Math.cos(i)*o,vz:Math.sin(i)*o,r:r.r??.22,color:r.color??16726992,grazed:!1,acc:r.acc??0,maxSpd:(r.maxSpd??14)*this.d.bspd,turn:r.turn??0,wait:r.wait??0,reaim:!!r.reaim,life:r.life??99,split:r.split??0,splitSpd:r.splitSpd??5,bounce:r.bounce??this.defaultBounce,wrapped:!1};return this.ebul.push(a),a}cd(t){const e=Ue[this.level].fire,i=e?this.boss&&!this.boss.dead?e[1]:e[0]:1;return t/(this.d.rate*i)}get mk(){return this.d.mk}aimed(t,e,i,s,r,o,a){const c=this.angleToPlayer(t,e);for(let l=0;l<s;l++)this.shoot(t,e,c+(l-(s-1)/2)*r,i,o,a)}ring(t,e,i,s,r,o,a){for(let c=0;c<i;c++)this.shoot(t,e,r+c/i*Math.PI*2,s,o,a)}laser(t,e,i,s,r={}){const o={owner:t,ox:e,oz:i,ang:s,sweep:r.sweep??0,warn:r.warn??.9,dur:r.dur??1,t:0,w:r.w??1.1,color:r.color??16722538,len:r.len??45};return this.lasers.push(o),o}bossPhase(t,e){this.fx.explode(t.x+(Math.random()-.5)*4,t.z,2.2,...Pa("boss",this.level)),this.shake=.7,Pe.bigBoom(),this.clearBullets(!1),this.lasers.length=0,this.events.flashScreen("white"),this.events.popup(Oa[Math.floor(Math.random()*Oa.length)],t.x,t.z,"pow big"),this.events.callout(e===2?"Boss 暴怒了！":"Boss 进入第二阶段！","warn")}update(t){var s;if(this.state==="idle")return;let e=t;this.slowmo>0&&(this.slowmo-=t,e=t*.3),this.time+=e;const i=e*this.enemyTs;for(let r=this.timers.length-1;r>=0;r--){const o=this.timers[r];o.t-=e,o.t<=0&&(this.timers.splice(r,1),o.fn())}this.state==="playing"&&this.scripted&&this.runScript(i),this.scripted&&((s=this.mech)==null||s.update(this,i)),this.updateCombo(e),this.updatePlayer(e),this.updatePerkTimers(e,t),this.updateUlt(e),this.updateEnemies(i),this.updateEBullets(i),this.updateLasers(i),this.updatePBullets(e),this.updatePickups(e),this.fx.update(e,this.scroll*.3),this.shake=Math.max(0,this.shake-t*1.8),this.critPopT-=t,this.render(e)}runScript(t){var s,r;if(this.levelTime+=t,this.mode==="endless"){this.runWave();return}if(this.holdScript)return;const e=mc[this.level];for(;this.scriptIdx<e.length&&e[this.scriptIdx][0]<=this.levelTime;)e[this.scriptIdx][1](this),this.scriptIdx++;for(;this.perkIdx<pc.length&&pc[this.perkIdx]<=this.levelTime;)hc(this,(Math.random()-.5)*8),this.events.callout("补给机来了！击落它拿强化","perk"),this.perkIdx++;this.mods.extraSupply&&!this.extraSupplied&&this.levelTime>=75&&(this.extraSupplied=!0,hc(this,(Math.random()-.5)*8),this.events.callout("加急补给到了！","perk"));const i=fc[this.level];!this.bossWarned&&this.levelTime>=i-3&&(this.bossWarned=!0,this.events.banner("WARNING!",`${Ue[this.level].bossName} 正在接近`,"warning"),this.events.flashScreen("red"),Pe.warn()),!this.bossSpawned&&this.levelTime>=i&&(this.bossSpawned=!0,vc(this,this.level,Ue[this.level].bossHp),(r=(s=this.events).bossEnter)==null||r.call(s,this.level))}get mult(){const t=this.mods.frenzy?140:60;return 1+Math.min(this.combo,t)/20}addScore(t,e,i,s=!0){const r=Math.round(t*(s?this.mult:1));for(this.score+=r,e!==void 0&&i!==void 0&&this.events.scoreGain(r,e,i);this.score>=this.nextMilestone;)this.events.callout(`${(this.nextMilestone/1e3).toFixed(0)}K 分！`,"milestone"),this.events.flashScreen("gold"),Pe.pickup(),this.nextMilestone+=1e5;return r}get comboWindow(){return 2.2+this.mods.comboTime}updateCombo(t){this.combo<=0||(this.comboT-=t,this.comboT<=0&&(this.combo>=10&&this.events.popup(`连击结束 ×${this.combo}`,this.px,this.pz-2,"score"),this.combo=0))}bumpCombo(){this.combo++,this.comboT=this.comboWindow,this.maxCombo=Math.max(this.maxCombo,this.combo);const t=t3[this.combo];t&&(this.events.callout(t,"combo"),Pe.pickup())}updatePlayer(t){const e=this.cfg.vehicle,i=this.playerModel;if(!this.alive){i.visible=!1,this.hitDot.visible=!1,this.respawn-=t,this.respawn<=0&&this.lives>=0&&this.state==="playing"&&(this.alive=!0,this.px=0,this.pz=this.bounds.bottom+2,this.invuln=3,this.armor=this.maxArmor(),this.shieldHp=0,this.dragX=this.dragZ=0);return}let s=e.speed*this.mods.speed*(this.input.focus?.45:1);this.ultTimers.shield>0&&(s*=1.6);const[r,o]=this.input.axis(),[a,c]=this.input.takeDrag(),l=this.px;this.px+=r*s*t,this.pz+=o*s*t,this.dragX+=a*this.pixelToWorld*1.15,this.dragZ+=c*this.pixelToWorld*1.15;const d=Math.hypot(this.dragX,this.dragZ);if(d>1e-4){const v=e.speed*this.mods.speed*(this.ultTimers.shield>0?1.6:1)*1.7,p=Math.min(1,v*t/d);this.px+=this.dragX*p,this.pz+=this.dragZ*p,this.dragX*=1-p,this.dragZ*=1-p}this.px+=this.pushX*t,this.pz+=this.pushZ*t,this.invuln>2.4&&this.pz>this.bounds.bottom-3&&(this.pz-=6*t);const h=.9,f=this.px,u=this.pz;if(this.wrapX){const v=this.bounds.right-this.bounds.left;this.px<this.bounds.left?this.px+=v:this.px>this.bounds.right&&(this.px-=v)}else this.px=nn.clamp(this.px,this.bounds.left+h,this.bounds.right-h);this.invuln<=2.4&&(this.pz=nn.clamp(this.pz,this.bounds.top+2,this.bounds.bottom-1.2)),!this.wrapX&&this.px!==f&&(this.dragX=0),this.pz!==u&&(this.dragZ=0),this.pvx=nn.lerp(this.pvx,(this.px-l)/Math.max(t,1e-4),.2),this.invuln=Math.max(0,this.invuln-t),i.visible=this.invuln<=0||this.ultTimers.shield>0||Math.floor(this.invuln*12)%2===0,i.position.set(this.px,0,this.pz),i.rotation.z=nn.clamp(-this.pvx/e.speed,-1,1)*.75,i.traverse(v=>{v.userData.flame&&(v.scale.z=.8+Math.random()*.6),v.userData.coil&&(v.rotation.z+=t*8*v.userData.coil)});const m=i3[e.id];for(const[v,p]of qx[e.id])this.fx.trail(this.px+v,this.pz+p+.3,m,.2,.22);if(this.hitDot.visible=this.input.focus,this.hitDot.position.set(this.px,1.2,this.pz),this.hitDot.scale.setScalar(Math.max(e.hitRadius,.18)),this.mods.shieldGen>0&&this.armor<this.maxArmor()&&(this.shieldT+=t,this.shieldT>=18&&(this.shieldT=0,this.armor++,this.shieldFx.restore(this.px,this.pz),Pe.pickup(),this.events.popup("护盾恢复！",this.px,this.pz-1.5,"warn"))),(this.state==="playing"||this.state==="clear")&&(this.fireMain(t),this.fireSub(t)),this.input.takeUlt()&&this.state==="playing"&&this.useUlt(),!this.god&&this.invuln<=0&&this.ultTimers.shield<=0){const v=e.hitRadius;for(const p of this.enemies)if(!(p.dead||p.delay>0||p.ghost||p.ground)&&Math.abs(p.x-this.px)<p.hw*.8+v&&Math.abs(p.z-this.pz)<p.hd*.8+v){this.hurt();break}}}fireMain(t){var c;const e=this.cfg.vehicle,i=this.power,s=(this.ultTimers.slow>0?1.5:1)*this.mods.rate*(this.lastStandOn?1.2:1)*(this.comboOn.bloodbelt?1+Math.min(.4,this.combo*.01):1);this.fireCd-=t*s;const r=this.px,o=this.pz-1.2;if(e.main==="laser"){this.laserOn=!0;const l=this.laserWidth,d=(26+8*(i-1))*s;for(const h of this.enemies)if(!(h.dead||h.delay>0||h.ghost||h.z>this.pz)&&Math.abs(h.x-r)<h.hw+l/2&&h.z>this.bounds.top-1){if(h.frontShield&&Math.abs(r-h.x)<h.hw*.7){Math.random()<t*20&&this.fx.sparksAt(r,h.z+h.hd,16777215,2,6),(c=h.onBlock)==null||c.call(h,h,d*t);continue}this.hitEnemy(h,d*t,r,h.z+h.hd*.6,!1),this.mods.shock>0&&Math.random()<this.mods.shock*t*3&&this.arc(h),Math.random()<t*25&&this.fx.sparksAt(r+(Math.random()-.5)*l,h.z+h.hd*.6,8387839,2,8)}return}if(this.laserOn=!1,e.main==="prism"){this.prismCharge+=t*s/(1.15-.07*i),this.prismCharge>=1&&(this.prismCharge=0,this.firePrism(r,this.prismMuzzleZ,i));return}if(this.fireCd>0)return;Pe.shoot();const a=this.mods.pierce;if(e.main==="vulcan"){this.fireCd=.09;for(const l of[-.22,.22])this.addPB("needle",r+l,o,0,42,1,a,16765498);for(let l=1;l<i;l++)this.addPB("needle",r-.3,o,-.09*l,42,1,a,16765498),this.addPB("needle",r+.3,o,.09*l,42,1,a,16765498);for(let l=1;l<=this.mods.spread;l++){const d=.09*i+.1*l;this.addPB("needle",r-.45,o,-d,42,1,a,16765498),this.addPB("needle",r+.45,o,d,42,1,a,16765498)}this.fx.flash(r,o-.2,.45,16771488,.05)}else if(e.main==="cannon"){this.fireCd=.22;const l=[[[0,0]],[[-.35,0],[.35,0]],[[0,0],[-.5,-.05],[.5,.05]],[[-.3,0],[.3,0],[-.7,-.08],[.7,.08]],[[0,0],[-.4,-.04],[.4,.04],[-.8,-.14],[.8,.14]]][i-1];for(const[d,h]of l)this.addPB("shell",r+d,o-1.2,h,30,6,2+a,16747039);for(let d=1;d<=this.mods.spread;d++)for(const h of[-1,1])this.addPB("shell",r+h*(.9+.3*d),o-1.2,h*(.16+.08*d),30,6,2+a,16747039);this.fx.flash(r,o-1.5,.9,16756816,.07),this.shake=Math.max(this.shake,.08)}}firePrism(t,e,i){const s=24+7*i,r=Math.min(7,1+Math.ceil(i/2)+this.mods.spread),o=.7+2.5*this.mods.homing,a=this.bounds;let c=null,l=1/0;for(const w of this.enemies)w.dead||w.delay>0||w.ghost||w.z>=e||w.z<a.top-1||Math.abs(w.x-t)>w.hw+o+(e-w.z)*.08*this.mods.homing||e-w.z<l&&(l=e-w.z,c=w);const d=c?Math.atan2(c.z-e,c.x-t):-Math.PI/2,h=Math.cos(d),f=Math.sin(d),u=[];for(const w of this.enemies){if(w.dead||w.delay>0||w.ghost)continue;const C=w.x-t,P=w.z-e,S=C*h+P*f;S<=0||Math.abs(-C*f+P*h)<Math.max(w.hw,w.hd)*.8+.35&&u.push([S,w])}u.sort((w,C)=>w[0]-C[0]);const m=u.slice(0,1+this.mods.pierce).map(w=>w[1]),v=m[0]??null,p=m[m.length-1],g=m.length>this.mods.pierce&&p?u.find(w=>w[1]===p)[0]:(e-a.top+2)/Math.max(.2,-f),M=.35+.15*i,_=jh[i-1];this.rays.push({x0:t,z0:e,x1:t+h*g,z1:e+f*g,w:M,life:.2,max:.2,color:_,follow:!0,glow:i>=4?1+(i-4)*.4:0}),this.prismRelease=Li.PRISM_RELEASE,this.muzzle.burst(),this.fx.flash(t,e,.6+.12*i,_,.08),this.fx.ring(t,e,.6+.12*i,_,.18);for(let w=0;w<4+i;w++){const C=d+(Math.random()-.5)*1.6;this.fx.streak(t,e,Math.cos(C)*14,Math.sin(C)*14,16777215,.03,.12)}Pe.zap();for(const w of m)this.prismHit(w,s,f<0&&Math.abs(h)<.5);if(!v)return;const x=[];for(const w of this.enemies){if(w.dead||w.delay>0||w.ghost||m.includes(w))continue;const C=(w.x-v.x)**2+(w.z-v.z)**2;C<11*11&&x.push([C,w])}x.sort((w,C)=>w[0]-C[0]),this.fx.ring(v.x,v.z,1.2,_,.2),this.fx.flash(v.x,v.z,1.3,16777215,.06);const A=new qt(_).lerp(new qt(16777215),.35).getHex();for(const[,w]of x.slice(0,r))this.rays.push({x0:v.x,z0:v.z,x1:w.x,z1:w.z,w:M*.45,life:.16,max:.16,color:A}),this.prismHit(w,s*.5,!1)}prismHit(t,e,i){var s;if(i&&t.frontShield){(s=t.onBlock)==null||s.call(t,t,e),this.fx.sparksAt(t.x,t.z+t.hd,16777215,4,7);return}this.hitEnemy(t,e,t.x,t.z),this.fx.sparksAt(t.x,t.z,14725375,4,8),this.mods.shock>0&&Math.random()<this.mods.shock*(this.comboOn.thunder?2:1)&&this.arc(t)}fireSub(t){const e=this.cfg.vehicle,i=this.sub;this.subCd-=t*this.mods.subRate;const s=(e.sub==="wingmen"?2+(this.mods.squadron?2:0):0)+(this.ultTimers.swarm>0?2:0),r=Math.min(2,this.mods.drones);this.wingCd-=t,this.droneCd-=t;const o=this.wingCd<=0;o&&(this.wingCd=.12);const a=this.droneCd<=0;a&&(this.droneCd=.15),this.droneMissileCd-=t;const c=this.comboOn.swarmnet&&this.droneMissileCd<=0;c&&(this.droneMissileCd=1.2);for(let l=0;l<8;l++){const d=this.wingmen[l],h=l<s,f=l>=6&&l-6<r,u=(h||f)&&this.alive;if(d.visible=u,!u)continue;const m=nc[e.id];let v,p,g=0;if(f){const M=this.time*2.6+(l-6)*Math.PI;v=this.px+Math.cos(M)*(m.span+1),p=this.pz+Math.sin(M)*(m.len+.4),g=1,d.rotation.z=-Math.sin(M)*.35}else{const M=l%2?1:-1,_=Math.min(2,(e.sub==="wingmen"?0:1)+Math.floor(l/2));v=this.px+M*(m.span+[.9,2.3,3.7][_]),p=this.pz+[.6,1.6,2.6][_],d.rotation.z=-M*.2}if(d.position.x+=(v-d.position.x)*Math.min(1,t*10),d.position.z+=(p-d.position.z)*Math.min(1,t*10),d.position.y+=(g-d.position.y)*Math.min(1,t*10),h&&o){const M=e.sub==="wingmen"?i:2;for(let _=0;_<M;_++){const x=M===1?0:(_/(M-1)-.5)*.16;this.addPB("wing",d.position.x,d.position.z-.5,x,36,1,0,8387839)}}if(f&&a&&this.addPB("wing",d.position.x,d.position.z-.5,0,36,1.5,0,10289003),f&&c){const M=this.addPB("missile",d.position.x,d.position.z,(Math.random()-.5)*1.2,14,4,0,10289003,2.5);M.target=this.nearestEnemy(M.x,M.z)}}if(this.mods.rear>0&&(this.rearCd-=t,this.rearCd<=0)){this.rearCd=.28;const l=this.mods.rear*2;for(let d=0;d<l;d++)this.addPB("wing",this.px,this.pz+1,Math.PI+(d/(l-1)-.5)*.3*this.mods.rear,32,1,0,16765498)}if(!(this.subCd>0))if(e.sub==="homing"){this.subCd=[.8,.6,.45][i-1];const l=(i>=3?4:2)+(this.mods.salvo?2:0);for(let d=0;d<l;d++){const h=d%2?1:-1,f=this.addPB("missile",this.px+h*.8,this.pz,h*(.6+d*.2),16,3+this.mods.salvo,0,16747039,2.5);f.target=this.nearestEnemy(f.x,f.z)}}else if(e.sub==="cluster"){this.subCd=[1.1,.9,.75][i-1];const l=i>=3?2:1;for(let d=0;d<l;d++){const h=l===1?0:d?1:-1;this.addPB("bomb",this.px+h,this.pz-1,h*.15,14,6+i*2,0,3946562,.6)}}else e.sub==="chain"&&(this.subCd=[.7,.55,.45][i-1],this.chainLightning(i+1+(this.mods.coil?2:0),5*(this.mods.coil?1.5:1)))}chainLightning(t,e){let i=[this.px,this.pz-1],s=this.nearestEnemy(i[0],i[1],14);if(!s)return;Pe.zap();const r=new Set,o=[i];for(let a=0;a<t&&s;a++)r.add(s),o.push([s.x,s.z]),this.hitEnemy(s,e,s.x,s.z,!0),this.fx.sparksAt(s.x,s.z,11792639,5,9),this.fx.flash(s.x,s.z,.8,10482687,.08),i=[s.x,s.z],s=this.nearestEnemy(i[0],i[1],7,r);this.bolts.push({pts:o,life:.14,color:10482687})}nearestEnemy(t,e,i=99,s){let r=null,o=i*i;for(const a of this.enemies){if(a.dead||a.delay>0||a.ghost||a.z<this.bounds.top-.5||a.z>this.bounds.bottom||s!=null&&s.has(a))continue;const c=(a.x-t)**2+(a.z-e)**2;c<o&&(o=c,r=a)}return r}addPB(t,e,i,s,r,o,a,c,l=1){const d=t==="needle"||t==="shell",h={kind:t,x:e,z:i,vx:Math.sin(s)*r,vz:-Math.cos(s)*r,dmg:o,pierce:a,life:l,color:c,lastHit:null,target:null,main:d};return d&&this.mods.homing>0&&(h.target=this.nearestEnemy(e,i,18)),this.pbul.push(h),h}useUlt(){if(this.ult<=0||!this.alive)return;const t=this.cfg.pilot.id;if(this.ultTimers.slow>0||this.ultTimers.shield>0||this.ultTimers.swarm>0||this.ultTimers.bomb>0)return;this.ult--,Pe.ult(),this.events.flashScreen("white");const i=this.mods.ultPower;if(t==="max"){const s=this.mods.doubleBomb?1.2:0;this.ultTimers.bomb=1.6+s,this.ultDuration=1.6+s,this.invuln=Math.max(this.invuln,2.2+s),this.clearBullets(!0),this.events.banner("地毯轰炸！","","ult"),this.bombPass(0,16*i),this.mods.doubleBomb&&this.later(1.2,()=>this.events.callout("二次轰炸！","perk epic")),this.mods.doubleBomb&&this.bombPass(1.2,16*i*.6)}else if(t==="lia")this.ultTimers.slow=(6+(this.mods.timeSand?3:0))*i,this.ultDuration=this.ultTimers.slow,this.events.banner("时停领域！","","ult"),this.events.ultVisual("slow",!0);else if(t==="anvil")this.ultTimers.shield=5*i,this.ultDuration=this.ultTimers.shield,this.events.banner("护盾冲撞！","","ult");else{this.ultTimers.swarm=(8+(this.mods.hive?4:0))*i,this.ultDuration=this.ultTimers.swarm,this.events.banner("蜂群召唤！","","ult");const s=Math.round((this.mods.hive?50:30)*i);for(let r=0;r<s;r++)this.later(r*.05,()=>{if(!this.alive)return;const o=(Math.random()-.5)*2.6,a=this.addPB("missile",this.px,this.pz,o,14,6,0,10289003,3);a.target=this.nearestEnemy(this.px,this.pz-6)})}}bombPass(t,e){for(let i=0;i<8;i++)this.later(t+i*.1,()=>{const s=this.bounds.bottom-2-i*((this.bounds.bottom-this.bounds.top)/8);for(let r=0;r<4;r++){const o=this.bounds.left+2+r*((this.bounds.right-this.bounds.left-4)/3)+(Math.random()-.5)*2;this.fx.explode(o,s,1.4)}this.shake=.6,Pe.boom(),this.clearBullets(!0);for(const r of this.enemies)!r.dead&&r.delay<=0&&r.z>this.bounds.top-1&&this.hitEnemy(r,e,r.x,r.z,!1)})}updateUlt(t){const e=this.ultTimers;if(e.bomb>0&&(e.bomb-=t),e.swarm>0&&(e.swarm-=t),e.slow>0&&(e.slow-=t,this.enemyTs=.25,e.slow<=0&&(this.enemyTs=1,this.events.ultVisual("slow",!1))),e.shield>0){e.shield-=t;const i=1.9;this.shieldMesh.visible=this.alive,this.shieldMesh.position.set(this.px,0,this.pz),this.shieldMesh.scale.setScalar(1+Math.sin(performance.now()*.02)*.04);for(const s of this.enemies)s.dead||s.delay>0||s.ghost||Math.abs(s.x-this.px)<s.hw+i&&Math.abs(s.z-this.pz)<s.hd+i&&(this.hitEnemy(s,90*t,this.px,this.pz-1.5,!1),Math.random()<t*15&&this.fx.sparksAt(this.px,this.pz-1.5,8382719,3,8));for(const s of this.ebul)(s.x-this.px)**2+(s.z-this.pz)**2<i*i&&(s.r=-1,this.addScore(10,void 0,void 0,!1))}else this.shieldMesh.visible=!1}get ultActive(){const t=this.ultTimers,e=Math.max(t.bomb,t.slow,t.shield,t.swarm);return e>0?e/this.ultDuration:0}get lastStandOn(){return this.mods.lastStand>0&&this.armor===0}get noseZ(){return this.pz-nc[this.cfg.vehicle.id].nose}get prismPeakW(){return(.35+.15*this.power)*1.15}get prismMuzzleZ(){return this.noseZ-this.prismPeakW*Li.MUZZLE_K*.85}get laserMuzzleZ(){return this.noseZ-this.laserDrawW*Li.MUZZLE_K*.85}get laserWidth(){return(.35+.15*this.power)*(1+.25*this.mods.spread)}updatePerkTimers(t,e){if(this.bulletTimeCd-=e,this.mods.nova>0&&this.alive&&this.state==="playing"&&(this.novaT-=t,this.novaT<=0)){this.novaT=this.mods.nova>=2?6:8.5;const i=3.2+.6*this.mods.nova;if(this.clearAround(i,8382719),this.comboOn.pulse){for(const s of this.enemies)!s.dead&&!s.ghost&&s.delay<=0&&(s.x-this.px)**2+(s.z-this.pz)**2<(i+1)**2&&this.hitEnemy(s,25,s.x,s.z,!1);this.addGauge(6)}}}clearAround(t,e){let i=0;for(const s of this.ebul)(s.x-this.px)**2+(s.z-this.pz)**2>t*t||(s.r=-1,i++%3===0&&this.fx.sparksAt(s.x,s.z,e,1,4));this.fx.ring(this.px,this.pz,t,e,.4),this.fx.ring(this.px,this.pz,t*.6,16777215,.3),Pe.zap()}arc(t){const e=new Set([t]);let i=t;const s=this.comboOn.thunder?2:1,r=[[t.x,t.z]];for(let o=0;o<s;o++){const a=this.nearestEnemy(i.x,i.z,6,e);if(!a)break;e.add(a),r.push([a.x,a.z]),this.hitEnemy(a,4,a.x,a.z,!1),this.fx.sparksAt(a.x,a.z,11792639,3,7),i=a}r.length>1&&(this.bolts.push({pts:r,life:.12,color:11792639}),Pe.zap())}hitEnemy(t,e,i,s,r=!0){if(t.dead)return;let o=e*this.mods.dmg*(this.mods.frenzy&&this.combo>=10?1.4:1)*(this.lastStandOn?1.3:1);(t.boss||t.elite)&&(o*=1+this.mods.bossDmg),r&&!t.invuln&&Math.random()<this.mods.crit&&(o*=this.comboOn.lethal?3.5:2.5,this.fx.flash(i,s,.7,16756768,.07),this.critPopT<=0&&(this.critPopT=.22,this.events.popup(`暴击 ${Math.round(o*10)}`,i+(Math.random()-.5),s,"crit"))),this.damage(t,o)}damage(t,e){t.dead||t.invuln||(t.hp-=e,t.flash=.05,this.mods.execute&&!t.boss&&t.hp>0&&t.hp<t.maxHp*.15&&(t.hp=0,this.fx.flash(t.x,t.z,1.2,16722506,.08)),t.hp<=0&&this.kill(t))}kill(t){var s;t.dead=!0,(s=t.onDeath)==null||s.call(t,t),this.kills++,this.levelKills++,this.bumpCombo();const e=e3[t.kind]??3;if(this.addGauge(e),t.boss){this.onBossDead(t);return}this.addScore(t.score,t.x,t.z);const i=n3.has(t.kind)||t.elite;if(this.fx.explode(t.x,t.z,i?2.2:t.kind==="turret"?1.4:1,...Pa(t.kind,t.tint)),i?(this.shake=Math.max(this.shake,.45),this.slowmo=Math.max(this.slowmo,.06),Pe.bigBoom(),this.events.popup(Oa[Math.floor(Math.random()*Oa.length)],t.x,t.z,"pow")):(this.shake=Math.max(this.shake,.12),Pe.boom()),t.drop&&this.spawnPickup(t.drop,t.x,t.z),t.medal?this.spawnPickup("medal",t.x+.5,t.z):this.mods.miner&&Math.random()<.3*this.mods.miner&&this.spawnPickup("medal",t.x,t.z),this.mods.chainBoom>0){const r=this.mods.chainBoom,o=this.comboOn.breach;this.later(.08,()=>this.blast(t.x,t.z,2.2+.5*r+(o?1.2:0),8*r*(o?2:1)))}}addGauge(t){for(this.cfg.pilot.id==="lia"&&(t*=1.3),t*=this.mods.ultCharge,this.gauge+=t;this.gauge>=100;){if(this.ult>=3){this.gauge=100;break}this.gauge-=100,this.ult++,this.events.popup("大招 +1",this.px,this.pz-1.5,"score")}}onBossDead(t){this.state="clear",this.slowmo=1.2,this.clearBullets(!0),this.lasers.length=0;for(const e of this.enemies)!e.boss&&!e.dead&&this.kill(e);this.events.popup("K.O.!",t.x,t.z,"pow big"),this.events.flashScreen("white");for(let e=0;e<10;e++)this.later(e*.18,()=>{this.fx.explode(t.x+(Math.random()-.5)*t.hw*2,t.z+(Math.random()-.5)*t.hd*2,1.6,...Pa("boss",this.level)),Pe.boom(),this.shake=.6});this.later(1.9,()=>{this.fx.explode(t.x,t.z,4.5,...Pa("boss",this.level)),Pe.bigBoom(),this.shake=1.4,this.events.flashScreen("gold"),t.model.visible=!1,this.addScore(t.score,t.x,t.z),this.events.callout(`Boss 击破！+${Math.round(t.score*this.mult).toLocaleString()}`,"milestone");for(let e=0;e<10;e++)this.spawnPickup("medal",t.x+(Math.random()-.5)*6,t.z+(Math.random()-.5)*3)}),this.mode==="endless"?this.later(3.5,()=>{this.state==="clear"&&(this.state="playing",this.boss=null,this.lives++,this.events.callout("Boss 波通过！生命 +1","milestone"),this.beginWave())}):this.later(5,()=>this.events.levelClear())}breakShieldLayer(){this.armor--,this.shieldHp=0,this.invuln=1.2,this.shake=.5,Pe.hurt(),this.shieldFx.shatter(this.px,this.pz,this.armor),this.events.popup(this.armor>0?`护盾破碎！剩 ${this.armor} 层`:"护盾破碎！",this.px,this.pz-1.5,"warn");const t=Math.max(this.shieldFx.radii.a,this.shieldFx.radii.b)+1.6;this.clearAround(this.mods.ironWall?t*1.8:t,this.mods.ironWall?16756768:8382719)}blockBullet(t,e,i,s){const{a:r,b:o}=this.shieldFx.radii,a=1/Math.sqrt((t/r)**2+(e/o)**2),c=this.px+t*a,l=this.pz+e*a;this.shieldFx.hit(c,l),this.fx.sparksAt(c,l,i,3,6),this.addGauge(.5*this.mods.graze),s&&(this.shieldHp<=0&&(this.shieldHp=Q_),this.shieldHp--,this.shieldHp<=0?(this.events.flashScreen("red"),this.breakShieldLayer()):Pe.graze())}hurt(){if(!(this.god||this.invuln>0||!this.alive||this.state!=="playing")){if(this.events.flashScreen("red"),this.armor>0){this.shieldFx.hit(this.px,this.pz-this.shieldFx.radii.b),this.breakShieldLayer();return}this.alive=!1,this.fx.explode(this.px,this.pz,2.4,parseInt(this.cfg.vehicle.color.slice(1),16),15921126),this.shake=1,Pe.hurt(),this.lives--,this.combo>=10&&this.events.popup(`连击中断 ×${this.combo}`,this.px,this.pz-2,"warn"),this.combo=0,this.clearBullets(!1),this.lasers.length=0,this.power>1&&this.spawnPickup("P",this.px,this.pz-2,!0),this.power=Math.max(1,this.power-1),this.powerXp=0,this.ult=Math.max(this.ult,this.cfg.pilot.id==="max"?3:2),this.ultTimers.shield=0,this.lives<0?(this.state="over",this.later(2,()=>this.events.gameOver())):this.respawn=1.4}}clearBullets(t){let e=0,i=0;for(const s of this.ebul)t&&(i+=10),e++%4===0&&e<160&&this.fx.sparksAt(s.x,s.z,16769354,1);i>0&&this.addScore(i,this.px,this.pz-3,!1),this.ebul.length=0}updateEnemies(t){const e=this.bounds;let i=0;for(const s of this.enemies){if(!s.dead&&s.delay>0){s.delay-=t,s.delay<=0&&(s.model.visible=!0),this.enemies[i++]=s;continue}if(s.dead||(s.t+=t,s.update(s,t),!s.entered&&s.z>e.top&&s.x>e.left-1&&s.x<e.right+1&&(s.entered=!0,s.elite&&this.events.popup("精英!",s.x,s.z+1.5,"elite")),(s.z>e.bottom+5||s.entered&&(s.z<e.top-10||s.x<e.left-6||s.x>e.right+6)||s.t>40)&&!s.boss&&!s.persist&&(s.dead=!0)),s.dead&&!(s.boss&&this.state==="clear"&&s.model.visible)){this.disposeEnemy(s),this.boss===s&&(this.boss=null);continue}s.model.position.set(s.x,0,s.z),s.model.rotation.y=s.yaw,s.boss&&this.state==="clear"&&(s.model.position.x+=(Math.random()-.5)*.3),s.flash=Math.max(0,s.flash-t);const r=s.flash>0&&Math.floor(s.t*24)%2===0?.35:0;for(const o of s.mats)o.uniforms.uFlash.value=r,s.elite&&o.uniforms.uEmissive.value.setRGB(.35,.16,0).multiplyScalar(.6+.4*Math.sin(s.t*8));for(const o of s.model.children)o.userData.spin&&(o.rotation.y+=o.userData.spin*t);this.enemies[i++]=s}this.enemies.length=i}disposeEnemy(t){this.root.remove(t.model);for(const e of t.mats)e.dispose()}updateEBullets(t){const e=this.bounds,i=this.cfg.vehicle.hitRadius,s=this.alive&&this.state==="playing",r=!this.god&&s&&this.invuln<=0&&this.ultTimers.shield<=0;let o=0;const a=t*this.bulletTs,c=e.right-e.left;for(const l of this.ebul)if(!(l.r<0)){if(l.wait>0){if(l.wait-=a,l.wait<=0&&l.reaim){const d=Math.hypot(l.vx,l.vz),h=this.angleToPlayer(l.x,l.z);l.vx=Math.cos(h)*d,l.vz=Math.sin(h)*d}}else{if(l.acc!==0){const d=Math.hypot(l.vx,l.vz)||.001,h=nn.clamp(d+l.acc*a,.6,l.maxSpd);l.vx*=h/d,l.vz*=h/d}if(l.turn!==0){const d=Math.cos(l.turn*a),h=Math.sin(l.turn*a),f=l.vx*d-l.vz*h;l.vz=l.vx*h+l.vz*d,l.vx=f}l.x+=l.vx*a,l.z+=l.vz*a}if(l.life<99&&(l.life-=a,l.life<=0)){if(l.split>0){const d=Math.random()*Math.PI;for(let h=0;h<l.split;h++)this.shootEx(l.x,l.z,d+h/l.split*Math.PI*2,l.splitSpd/this.d.bspd,{color:l.color,r:Math.max(.18,l.r*.75)});this.fx.flash(l.x,l.z,.6,l.color,.06)}continue}if(l.bounce>0&&(l.x<e.left+.2&&l.vx<0||l.x>e.right-.2&&l.vx>0)&&(l.vx=-l.vx,l.bounce--,this.fx.sparksAt(l.x,l.z,l.color,2,5)),this.wrapX&&!l.wrapped&&(l.x<e.left-.3?(l.x+=c+.6,l.wrapped=!0):l.x>e.right+.3&&(l.x-=c+.6,l.wrapped=!0)),!(l.x<e.left-2||l.x>e.right+2||l.z<e.top-4||l.z>e.bottom+2)){if(s){if(this.armor>0&&this.ultTimers.shield<=0){const{a:f,b:u}=this.shieldFx.radii,m=l.x-this.px,v=l.z-this.pz;if((m/(f+l.r))**2+(v/(u+l.r))**2<1){this.blockBullet(m,v,l.color,r);continue}}const d=(l.x-this.px)**2+(l.z-this.pz)**2,h=l.r+i;if(r&&d<h*h){if(this.hurt(),this.ebul.length===0)return;continue}!l.grazed&&d<(h+.9)**2&&(l.grazed=!0,this.grazes++,this.addScore(20*this.mods.graze,void 0,void 0,!1),this.addGauge(.8*this.mods.graze*(this.mods.timeSand&&this.ultTimers.slow>0?3:1)),this.comboOn.grazeshield&&this.armor<this.maxArmor()&&(this.shieldT+=.6),this.mods.bulletTime&&this.bulletTimeCd<=0&&(this.bulletTimeCd=4,this.slowmo=Math.max(this.slowmo,.5),this.fx.ring(this.px,this.pz,2.6,10482687,.5)),this.fx.sparksAt((l.x+this.px)/2,(l.z+this.pz)/2,10482687,2,5),Pe.graze())}this.ebul[o++]=l}}this.ebul.length=o}updateLasers(t){const e=this.cfg.vehicle.hitRadius,i=!this.god&&this.alive&&this.state==="playing"&&this.invuln<=0&&this.ultTimers.shield<=0;let s=0;for(const r of this.lasers)if(!(r.owner&&r.owner.dead)&&(r.t+=t,!(r.t>r.warn+r.dur))){if(r.ang+=r.sweep*t,r.t>r.warn){r.t-t<=r.warn&&Pe.zap();const[o,a]=this.laserOrigin(r),c=this.px-o,l=this.pz-a,d=Math.cos(r.ang),h=Math.sin(r.ang),f=c*d+l*h,u=Math.abs(-c*h+l*d);i&&f>0&&f<r.len&&u<r.w/2+e*.8&&this.hurt()}this.lasers[s++]=r}this.lasers.length=s}laserOrigin(t){return t.owner?[t.owner.x+t.ox,t.owner.z+t.oz]:[t.ox,t.oz]}updatePBullets(t){var s;const e=this.bounds;let i=0;for(const r of this.pbul){if(r.life-=t,r.kind==="missile"||r.main&&this.mods.homing>0){r.kind==="missile"&&(!r.target||r.target.dead)&&(r.target=this.nearestEnemy(r.x,r.z));const c=Math.hypot(r.vx,r.vz);let l=Math.atan2(r.vz,r.vx);if(r.target&&!r.target.dead){let f=Math.atan2(r.target.z-r.z,r.target.x-r.x)-l;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;const u=r.kind==="missile"?7:2.2*this.mods.homing;l+=nn.clamp(f,-u*t,u*t)}const d=r.kind==="missile"?Math.min(c+30*t,26):c;r.vx=Math.cos(l)*d,r.vz=Math.sin(l)*d,r.kind==="missile"&&Math.random()<t*40&&this.fx.trail(r.x,r.z+.3,r.color===10289003?10289003:16756816,.16,.25)}if(r.x+=r.vx*t,r.z+=r.vz*t,r.kind==="bomb"&&r.life<=0){this.blast(r.x,r.z,2+this.sub*.4,r.dmg);continue}if(r.life<=0||r.z<e.top-2||r.z>e.bottom+2||r.x<e.left-3||r.x>e.right+3)continue;let o=!0;const a=r.kind==="shell"?.35:r.kind==="bomb"?.4:.15;for(const c of this.enemies)if(!(c.dead||c.delay>0||c.ghost||c===r.lastHit)&&Math.abs(r.x-c.x)<c.hw+a&&Math.abs(r.z-c.z)<c.hd+a){if(c.frontShield&&r.vz<0&&r.z>c.z+c.hd*.2&&Math.abs(r.x-c.x)<c.hw*.7&&r.kind!=="bomb"){this.fx.sparksAt(r.x,r.z,16777215,2,7),(s=c.onBlock)==null||s.call(c,c,r.dmg),o=!1;break}if(r.kind==="bomb"){this.blast(r.x,r.z,2+this.sub*.4,r.dmg),o=!1;break}if(this.hitEnemy(c,r.dmg,r.x,r.z),r.main&&this.mods.shock>0&&Math.random()<this.mods.shock*(this.comboOn.thunder?2:1)&&this.arc(c),r.kind==="shell"&&this.mods.heShell&&this.blast(r.x,r.z,1.3,3),Pe.hit(),this.fx.sparksAt(r.x,r.z,c.invuln?16777215:r.color,2,7),(r.kind==="shell"||r.kind==="missile")&&this.fx.flash(r.x,r.z,.6,16760944,.05),r.pierce>0)r.pierce--,r.lastHit=c;else{o=!1;break}}o&&(this.pbul[i++]=r)}this.pbul.length=i}blast(t,e,i,s){this.fx.explode(t,e,i*.6,16756816,9080729),Pe.boom();for(const r of this.enemies)r.dead||r.delay>0||r.ghost||Math.abs(r.x-t)<r.hw+i&&Math.abs(r.z-e)<r.hd+i&&this.hitEnemy(r,s,r.x,r.z,!1)}spawnPickup(t,e,i,s=!1){const r=tM(t);r.position.set(e,.5,i),t==="perk"&&r.scale.setScalar(1.3),this.root.add(r);const o=Math.random()*Math.PI*2,a=t!=="medal";this.pickups.push({kind:t,model:r,x:e,z:i,vx:a?Math.cos(o)*3:0,vz:a?-2:4,t:0,full:s})}updatePickups(t){const e=this.bounds;let i=0;for(const s of this.pickups){s.t+=t;const r=Math.hypot(this.px-s.x,this.pz-s.z),o=s.kind==="medal"&&this.comboOn.jackpot?99:(s.kind==="medal"?4:2.2)*this.mods.magnet;if(r<o&&this.alive&&r>.01?(s.vx=(this.px-s.x)/r*15,s.vz=(this.pz-s.z)/r*15):s.kind!=="medal"&&(s.vz=Math.min(s.vz+t*5,s.t>5?7:4.5),s.t<5&&((s.x<e.left+1||s.x>e.right-1)&&(s.vx=-s.vx),s.z<e.top+1&&(s.vz=Math.abs(s.vz)),s.z>e.bottom-3&&s.vz>0&&(s.vz=-3.5))),s.x+=s.vx*t,s.z+=s.vz*t,s.model.position.set(s.x,.5+Math.sin(s.t*5)*.2,s.z),s.model.rotation.y+=t*(s.kind==="perk"?4:2),s.model.rotation.x=-.9,s.kind==="perk"&&Math.random()<t*12&&this.fx.sparksAt(s.x,s.z,16756768,1,3),this.alive&&r<1.6){this.collect(s),this.root.remove(s.model);continue}if(s.z>e.bottom+2){this.root.remove(s.model);continue}this.pickups[i++]=s}this.pickups.length=i}collect(t){Pe.pickup();const e=this.cfg.pilot.id==="vex"?2:1;let i="";switch(t.kind){case"P":this.power<5?(this.powerXp=t.full?Fa[this.power-1]:this.powerXp+1,this.powerXp>=Fa[this.power-1]?(this.power++,this.powerXp=0,i=this.power===5?"火力 MAX!":"火力 UP!"):i=`火力 ${this.powerXp}/${Fa[this.power-1]}`):i=`+${this.addScore(2e3*e,t.x,t.z,!1)}`;break;case"M":this.sub<3?(this.subXp++,this.subXp>=xc[this.sub-1]?(this.sub++,this.subXp=0,i=this.sub===3?"副武器 MAX!":"副武器 UP!"):i=`副武器 ${this.subXp}/${xc[this.sub-1]}`):i=`+${this.addScore(2e3*e,t.x,t.z,!1)}`;break;case"B":this.ult<3?(this.ult++,i="大招 +1"):i=`+${this.addScore(3e3*e,t.x,t.z,!1)}`;break;case"medal":i=`+${this.addScore(500*e*(1+.5*this.mods.miner)*(this.comboOn.jackpot?2:1),t.x,t.z)}`;break;case"life":this.lives++,i="生命 +1";break;case"perk":this.fx.ring(t.x,t.z,3,16756768,.4),this.events.flashScreen("gold"),this.events.perkChoice(xf(this.owned,this.perkCtx));return}t.kind!=="medal"&&this.addScore(100*e,void 0,void 0,!1),this.events.popup(i,t.x,t.z-1,t.kind==="medal"?"score small":"score")}applyPerk(t,e=!1){const i=bn.find(r=>r.id===t);if(!i)return;const s=vf(this.owned,t);this.owned[t]=(this.owned[t]??0)+1,i.apply(this.mods);for(const r of Cs)this.comboOn[r.id]=H_(this.owned,r.id);i.instant==="life"&&this.lives++,i.instant==="armor"&&(this.armor++,this.shieldFx.restore(this.px,this.pz)),!e&&(s.forEach((r,o)=>this.later(1+o*1.1,()=>{this.events.callout(`联动！${r.name}`,"perk legendary",t),this.events.popup(r.desc,this.px,this.pz-2.5,"score"),this.events.flashScreen("gold")})),this.events.callout(`${i.name}！`,`perk ${i.rarity}`,i.id),this.invuln=Math.max(this.invuln,1),this.input.reset())}render(t){var c;const e=this.mods.shieldGen>0&&this.armor<this.maxArmor()?this.shieldT/18:-1;this.shieldFx.update(t,this.px,this.pz,this.armor,e,this.alive&&this.state!=="over"&&this.ultTimers.shield<=0),this.ebOuter.begin(),this.ebInner.begin();for(const l of this.ebul){const d=l.r*1.3;this.ebOuter.push(l.x,.6,l.z,d,d,d,0,l.color),this.ebInner.push(l.x,.6,l.z,d*.55,d*.55,d*.55,0,16777215)}this.ebOuter.end(),this.ebInner.end(),this.pbNeedle.begin(),this.pbOrb.begin();for(const l of this.pbul){const d=Math.atan2(l.vx,l.vz);switch(l.kind){case"needle":this.pbNeedle.push(l.x,.3,l.z,.16,.16,1.15,d,l.color);break;case"wing":this.pbNeedle.push(l.x,.3,l.z,.11,.11,.8,d,l.color);break;case"missile":this.pbNeedle.push(l.x,.3,l.z,.2,.2,.7,d,l.color);break;case"shell":this.pbOrb.push(l.x,.3,l.z,.34,.34,.75,d,l.color);break;case"bomb":this.pbOrb.push(l.x,.3,l.z,.36,.36,.36,0,l.color);break}}let i=0,s=0,r=0,o=!1;if(((c=this.cfg)==null?void 0:c.vehicle.main)==="prism"&&this.alive&&this.state!=="over"&&this.state!=="idle"){const l=this.prismCharge,d=this.prismPeakW*Li.MUZZLE_K;this.prismRelease=Math.max(0,this.prismRelease-t);const h=this.prismRelease/Li.PRISM_RELEASE;s=jh[this.power-1];const f=Math.max(0,(l-.15)/.85);i=Math.max(d*f**1.4,d*h*h),r=Math.max(l,h),o=l>.85,this.prismOrbR=i}else this.laserOn&&this.alive&&this.state!=="over"&&(this.laserDrawW=this.laserWidth*(.85+Math.random()*.3),i=this.laserDrawW*Li.MUZZLE_K,s=3860735,r=.5);this.muzzle.update(t,this.px,.85,this.noseZ-i*.85,i,s,r,o),this.pbNeedle.end(),this.pbOrb.end(),this.beams.begin(),this.beamCaps.begin();const a=(l,d,h,f,u,m,v,p,g)=>{this.beams.push(h,f,u,m,.3,v,p,g),this.beamCaps.push(l,f,d,m,.3,m,0,g)};for(let l=this.rays.length-1;l>=0;l--){const d=this.rays[l];if(d.life-=t,d.life<=0){this.rays.splice(l,1);continue}d.follow&&this.alive&&(d.x0=this.px,d.z0=this.noseZ-this.prismOrbR*.85);const h=d.life/d.max,f=Math.hypot(d.x1-d.x0,d.z1-d.z0),u=Math.atan2(d.x1-d.x0,d.z1-d.z0),m=(d.x0+d.x1)/2,v=(d.z0+d.z1)/2,p=d.w*(h>.8?1.15:h);d.glow&&a(d.x0,d.z0,m,.35,v,p*(1.12+.1*d.glow),f,u,d.color),a(d.x0,d.z0,m,.5,v,p,f,u,d.color),a(d.x0,d.z0,m,.65,v,p*.4,f,u,16777215)}if(this.laserOn&&this.alive&&this.state!=="over"){const l=this.bounds.top-1,d=this.laserMuzzleZ,h=d-l,f=this.laserDrawW;a(this.px,d,this.px,.3,(d+l)/2,f,h,0,3860735),a(this.px,d,this.px,.45,(d+l)/2,f*.4,h,0,16777215)}for(const l of this.lasers){const[d,h]=this.laserOrigin(l),f=l.len,u=d+Math.cos(l.ang)*f/2,m=h+Math.sin(l.ang)*f/2,v=Math.atan2(Math.cos(l.ang),Math.sin(l.ang));if(l.t<l.warn)Math.floor(l.t*16)%2===0&&this.beams.push(u,.7,m,.09,.09,f,v,l.color);else{const p=Math.min(1,(l.t-l.warn)*8)*Math.min(1,(l.warn+l.dur-l.t)*6),g=l.w*p*(.9+Math.random()*.2);a(d,h,u,.7,m,g,f,v,l.color),a(d,h,u,.85,m,g*.45,f,v,16777215)}}for(let l=this.bolts.length-1;l>=0;l--){const d=this.bolts[l];if(d.life-=t,d.life<=0){this.bolts.splice(l,1);continue}for(let h=0;h<d.pts.length-1;h++){const[f,u]=d.pts[h],[m,v]=d.pts[h+1];let p=f,g=u;for(let M=1;M<=3;M++){const _=M/3,x=M<3?(Math.random()-.5)*1.2:0,A=M<3?(Math.random()-.5)*1.2:0,w=f+(m-f)*_+x,C=u+(v-u)*_+A,P=Math.hypot(w-p,C-g);this.beams.push((p+w)/2,.5,(g+C)/2,.16,.16,P,Math.atan2(w-p,C-g),d.color),p=w,g=C}}}this.beams.end(),this.beamCaps.end()}hud(){const t=this.boss&&!this.boss.dead&&this.boss.t>.1?{ratio:Math.max(0,this.boss.hp/this.boss.maxHp),name:Ue[this.level].bossName}:this.boss&&this.state==="clear"?{ratio:0,name:Ue[this.level].bossName}:null,e=bn.filter(i=>this.owned[i.id]).map(i=>`${i.id}:${this.owned[i.id]}`).join(",");return{score:this.score,lives:this.lives,ult:this.ult,gauge:this.gauge,power:this.power,sub:this.sub,powerXp:this.powerXp,powerNeed:Fa[this.power-1]??0,subXp:this.subXp,subNeed:xc[this.sub-1]??0,boss:t,ultActive:this.ultActive,combo:this.combo,comboT:Math.max(0,this.comboT/this.comboWindow),mult:this.mult,grazes:this.grazes,perks:e,wave:this.mode==="endless"?this.wave:0}}};H(Li,"MUZZLE_K",.65),H(Li,"PRISM_RELEASE",.14);let A0=Li;class s3{constructor(t){H(this,"keys",new Set);H(this,"dragDx",0);H(this,"dragDy",0);H(this,"ultQueued",!1);H(this,"pauseQueued",!1);H(this,"pointers",new Map);H(this,"lastTap",0);window.addEventListener("keydown",i=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),!i.repeat&&(this.keys.add(i.code),["KeyX","KeyK","Space"].includes(i.code)&&(this.ultQueued=!0),["Escape","KeyP"].includes(i.code)&&(this.pauseQueued=!0))}),window.addEventListener("keyup",i=>this.keys.delete(i.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.pointers.clear()}),t.addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("pointerdown",i=>{var r;if(i.target.closest("#ui, button, .card, .no-drag"))return;if(i.button===2){this.ultQueued=!0;return}const s=performance.now();(this.pointers.size>=1||i.pointerType!=="mouse"&&s-this.lastTap<280)&&(this.ultQueued=!0),this.lastTap=s,this.pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),(r=t.setPointerCapture)==null||r.call(t,i.pointerId)}),t.addEventListener("pointermove",i=>{const s=this.pointers.get(i.pointerId);s&&(this.pointers.keys().next().value===i.pointerId&&(this.dragDx+=i.clientX-s.x,this.dragDy+=i.clientY-s.y),s.x=i.clientX,s.y=i.clientY)});const e=i=>this.pointers.delete(i.pointerId);t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e)}get focus(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}axis(){const t=this.keys;let e=0,i=0;return(t.has("ArrowLeft")||t.has("KeyA"))&&(e-=1),(t.has("ArrowRight")||t.has("KeyD"))&&(e+=1),(t.has("ArrowUp")||t.has("KeyW"))&&(i-=1),(t.has("ArrowDown")||t.has("KeyS"))&&(i+=1),e&&i&&(e*=Math.SQRT1_2,i*=Math.SQRT1_2),[e,i]}takeDrag(){const t=[this.dragDx,this.dragDy];return this.dragDx=this.dragDy=0,t}queueUlt(){this.ultQueued=!0}takeUlt(){const t=this.ultQueued;return this.ultQueued=!1,t}takePause(){const t=this.pauseQueued;return this.pauseQueued=!1,t}reset(){this.ultQueued=this.pauseQueued=!1,this.dragDx=this.dragDy=0}}const _f="sky-raiders.save.v1",C0=()=>({totalScore:0,totalKills:0,hiScore:0,cleared:[],reached:0});function r3(){try{const n=localStorage.getItem(_f);if(n)return{...C0(),...JSON.parse(n)}}catch{}return C0()}function yf(n){try{localStorage.setItem(_f,JSON.stringify(n))}catch{}}function o3(){const n=C0();return yf(n),n}const Ki="#14101a",a3={common:"#d9d2bf",rare:"#4fa8ff",epic:"#a64dff",legendary:"#ff8a1f"};function gi(n,t,e,i,s,r=0){const o=[];for(let a=0;a<e*2;a++){const c=r+a/(e*2)*Math.PI*2-Math.PI/2,l=a%2?s:i;o.push(`${(n+Math.cos(c)*l).toFixed(1)},${(t+Math.sin(c)*l).toFixed(1)}`)}return o.join(" ")}function l3(n,t,e,i,s=0){const r=[];for(let o=0;o<e;o++){const a=s+o/e*Math.PI*2;r.push(`${(n+Math.cos(a)*i).toFixed(1)},${(t+Math.sin(a)*i).toFixed(1)}`)}return r.join(" ")}const So=(n,t,e="#ffd23a",i=1)=>`<path d="M${n-3.5} ${t}V${t-10}A3.5 3.5 0 0 1 ${n+3.5} ${t-10}V${t}z" fill="${e}" fill-opacity="${i}" stroke-opacity="${i}"/>`,c3=(n,t,e="#f2efe6")=>`<path d="M${n} ${t-2.5}h13l5 2.5l-5 2.5h-13z" fill="${e}"/><path d="M${n+13} ${t-2.5}l5 2.5l-5 2.5z" fill="#e2492c"/>
   <path d="M${n+1} ${t-2.5}l-3 -3h4zM${n+1} ${t+2.5}l-3 3h4z" fill="#2f7ad9"/>`,d3={dmg:`<polygon points="${gi(24,24,11,17,9)}" fill="#ffd23a"/>
    <polygon points="${gi(24,24,7,9,5,.3)}" fill="#ff8a1f"/>
    <circle cx="24" cy="24" r="2.6" fill="#fff6dc" stroke="none"/>`,rate:`${[[14,14],[24,8],[34,14]].map(([n,t])=>`<path d="M${n} ${t+21}v6" stroke="#fff6dc" stroke-width="2.2"/>
    <path d="M${n-3.5} ${t+17}V${t+4}A3.5 3.5 0 0 1 ${n+3.5} ${t+4}V${t+17}z" fill="#ffd23a"/>
    <path d="M${n-3.5} ${t+17}h7v4h-7z" fill="#ff8a1f"/>`).join("")}`,speed:`<g transform="rotate(35 24 24)">
    <path d="M20 31Q24 45 28 31z" fill="#ff8a1f"/><path d="M22 31Q24 39 26 31z" fill="#ffd23a" stroke="none"/>
    <path d="M19 24L13 33L19 31zM29 24L35 33L29 31z" fill="#e2492c"/>
    <path d="M24 6C30 11 31 22 29 31H19C17 22 18 11 24 6z" fill="#f2efe6"/>
    <circle cx="24" cy="17" r="3.4" fill="#47d6ff"/>
  </g>`,magnet:`<g transform="rotate(-20 24 26)">
    <path d="M12 12V25A12 12 0 0 0 36 25V12H28V25A4 4 0 0 1 20 25V12z" fill="#e2492c"/>
    <path d="M12 9h8v6h-8zM28 9h8v6h-8z" fill="#e6e8ee"/>
  </g>
  <path d="M9 9l3 3M24 3v4M39 9l-3 3" stroke="#fff6dc" stroke-width="2.4"/>`,graze:`<circle cx="32" cy="17" r="7" fill="#ff3bd0"/><circle cx="32" cy="17" r="2.8" fill="#fff" stroke="none"/>
    <polygon points="15,6 25,6 21,19 29,19 15,42 19,26 11,26" fill="#ffd23a"/>`,sub:`<g transform="rotate(-40 24 24)">
    <path d="M10 22L3 24L10 26z" fill="#ff8a1f"/>
    <path d="M12 21L8 14L17 21zM12 27L8 34L17 27z" fill="#2f7ad9"/>
    <path d="M10 21H30L38 24L30 27H10z" fill="#f2efe6"/>
    <path d="M30 21L38 24L30 27z" fill="#e2492c"/>
    <path d="M20 21v6" stroke-width="1.8"/>
  </g>`,pierce:`<path d="M21 7h7v12l-4 2-3-2zM21 41h7V29l-3-2-4 2z" fill="#8a8f99"/>
    <path d="M5 21H29L41 24L29 27H5z" fill="#ffd23a"/>
    <path d="M29 21L41 24L29 27z" fill="#e6e8ee"/>
    <path d="M17 13l-4-3M32 12l4-3M17 36l-4 3M32 36l4 3" stroke="#fff6dc" stroke-width="2"/>`,crit:`<circle cx="22" cy="26" r="14" fill="#f2efe6"/><circle cx="22" cy="26" r="9.5" fill="#e2492c"/>
    <circle cx="22" cy="26" r="5" fill="#f2efe6"/><circle cx="22" cy="26" r="1.8" fill="#e2492c" stroke="none"/>
    <polygon points="${gi(35,13,5,8,3.6)}" fill="#ffd23a"/>`,shield:`<path d="M24 6L38 11V22C38 31 32 37 24 42C16 37 10 31 10 22V11z" fill="#7fe8ff"/>
    <path d="M24 10L34 13.8V22C34 29 30 34 24 38z" fill="#3ab4e0" stroke="none"/>
    <polygon points="${gi(24,23,5,7,3)}" fill="#fff6dc"/>`,ult:`<path d="M20 6h8v5h-8z" fill="#8a8f99"/>
    <rect x="14" y="10" width="20" height="31" rx="3" fill="#f2efe6"/>
    <rect x="17" y="24" width="14" height="14" fill="#9cff6b" stroke="none"/>
    <polygon points="27,12 18,27 24,27 20,38 31,22 25,22" fill="#ffd23a"/>`,chain:`<polygon points="${gi(15,31,8,10,5.5)}" fill="#ff8a1f"/>
    <polygon points="${gi(37,34,6,6.5,3.4)}" fill="#e2492c"/>
    <polygon points="${gi(28,18,10,13,7,.2)}" fill="#ffd23a"/>
    <circle cx="28" cy="18" r="2.6" fill="#fff6dc" stroke="none"/>`,homing:`<path d="M12 38Q12 20 27 17" fill="none" stroke-width="4.6"/>
    <path d="M12 38Q12 20 27 17" fill="none" stroke="#fff6dc" stroke-width="2" stroke-dasharray="3 3"/>
    <circle cx="32" cy="16" r="5.5" fill="#fff6dc" stroke="#e2492c" stroke-width="2.6"/>
    <circle cx="32" cy="16" r="1.6" fill="#e2492c" stroke="none"/>
    <g transform="rotate(-50 17 30)"><path d="M10 30L6 26L13 28zM10 30L6 34L13 32z" fill="#2f7ad9"/>
    <path d="M8 27H21L26 30L21 33H8z" fill="#f2efe6"/><path d="M21 27L26 30L21 33z" fill="#e2492c"/></g>`,drone:`<ellipse cx="24" cy="26" rx="16" ry="7" fill="none" stroke-width="4.2"/>
    <ellipse cx="24" cy="26" rx="16" ry="7" fill="none" stroke="#fff6dc" stroke-width="1.8"/>
    <path d="M24 10L31 33L24 29L17 33z" fill="#ffd23a"/>
    <circle cx="8.5" cy="26" r="4.4" fill="#9cff6b"/><circle cx="39.5" cy="26" r="4.4" fill="#9cff6b"/>`,frenzy:`<path d="M24 7C24 7 35 21 35 29A11 11 0 0 1 13 29C13 21 24 7 24 7z" fill="#d61f36"/>
    <ellipse cx="19.5" cy="28" rx="2.4" ry="4" fill="#fff6dc" stroke="none" transform="rotate(20 19.5 28)"/>
    <path d="M6 14l4 3M40 14l-4 3M7 30h4M37 30h4" stroke="#fff6dc" stroke-width="2.4"/>`,rear:`<path d="M24 6L31 22L24 18.5L17 22z" fill="#f2efe6"/>
    <g transform="rotate(180 24 33)">${So(18,39)}${So(30,39)}</g>
    <path d="M18 43v3M30 43v3" stroke="#fff6dc" stroke-width="2"/>`,miner:`<circle cx="22" cy="26" r="12.5" fill="#ffd23a"/><circle cx="22" cy="26" r="8.5" fill="none" stroke-width="1.8"/>
    <polygon points="${gi(22,26,5,5.5,2.4)}" fill="#e2492c" stroke-width="1.6"/>
    <polygon points="${gi(37,12,4,6,1.8)}" fill="#fff6dc" stroke-width="1.6"/>`,combo:`<path d="M21 6h6v4h-6z" fill="#8a8f99"/>
    <circle cx="24" cy="26" r="14" fill="#f2efe6"/>
    <path d="M24 26V16M24 26l6 4" stroke-width="2.6"/>
    <circle cx="36" cy="36" r="7" fill="#9cff6b"/><path d="M36 32.5v7M32.5 36h7" stroke-width="2.2"/>`,spread:`${[-30,0,30].map(n=>`<g transform="rotate(${n} 24 40)">${So(24,30)}<path d="M24 31v6" stroke="#fff6dc" stroke-width="2"/></g>`).join("")}`,laststand:`<path d="M24 4C30 12 38 14 36 26C35 34 30 38 24 40C18 38 13 34 12 26C10 14 18 12 24 4z" fill="#ff8a1f"/>
    <path d="M24 13L33 16.5V24C33 30 29 35 24 38C19 35 15 30 15 24V16.5z" fill="#8a8f99"/>
    <path d="M24 14l-2 7 4 4-3 6 1 7" fill="none" stroke-width="2.2"/>`,boss:`<path d="M11 32L13 16L19 23L24 11L29 23L35 16L37 32z" fill="#ffd23a"/>
    <path d="M11 32h26v5H11z" fill="#e2492c"/>
    <circle cx="24" cy="26" r="8" fill="none" stroke="#e2492c" stroke-width="2.6"/>
    <path d="M24 15v5M24 32v5M13 26h5M30 26h5" stroke="#e2492c" stroke-width="2.4"/>`,ultpow:`${[13,21,29].map((n,t)=>`<path d="M10 ${n+8}L24 ${n}L38 ${n+8}V${n+14}L24 ${n+6}L10 ${n+14}z" fill="${["#ffd23a","#ff8a1f","#e2492c"][t]}"/>`).join("")}`,elite:`<path d="M24 5L28.5 19.5L43 24L28.5 28.5L24 43L19.5 28.5L5 24L19.5 19.5z" fill="#ffd23a"/>
    <path d="M24 14L26 22L34 24L26 26L24 34L22 26L14 24L22 22z" fill="#fff6dc" stroke="none"/>
    <polygon points="${gi(38,9,4,4.5,1.5)}" fill="#fff6dc" stroke-width="1.4"/>`,nova:`<circle cx="24" cy="24" r="15" fill="none" stroke-width="5"/><circle cx="24" cy="24" r="15" fill="none" stroke="#7fe8ff" stroke-width="2.4"/>
    <circle cx="24" cy="24" r="9.5" fill="none" stroke-width="5"/><circle cx="24" cy="24" r="9.5" fill="none" stroke="#fff6dc" stroke-width="2.4"/>
    <circle cx="24" cy="24" r="4.2" fill="#7fe8ff"/>`,shock:`<g transform="rotate(35 20 28)">${So(20,40)}<path d="M16.5 40h7v4h-7z" fill="#ff8a1f"/></g>
    <polygon points="31,6 38,6 34,15 40,15 28,30 31,19 26,19" fill="#7fe8ff"/>`,execute:`<path d="M12 22C12 13 17 8 24 8C31 8 36 13 36 22C36 27 33 30 31 31V37H17V31C15 30 12 27 12 22z" fill="#f2efe6"/>
    <circle cx="19" cy="22" r="3.6" fill="${Ki}"/><circle cx="29" cy="22" r="3.6" fill="${Ki}"/>
    <path d="M24 26l-2 4h4z" fill="${Ki}"/><path d="M21 33v4M24 33v4M27 33v4" stroke-width="1.8"/>`,bullettime:`<g transform="rotate(35 24 26)">
      <path d="M20.5 44V34A3.5 3.5 0 0 1 27.5 34V44" fill="none" stroke="#fff6dc" stroke-width="1.8" stroke-dasharray="2.5 2"/>
      <path d="M20.5 37V27A3.5 3.5 0 0 1 27.5 27V37" fill="none" stroke="#fff6dc" stroke-width="1.8" stroke-dasharray="2.5 2"/>
      ${So(24,30,"#7fe8ff")}</g>
    <path d="M9 18A16 16 0 0 1 22 7" fill="none" stroke-width="4.4"/><path d="M9 18A16 16 0 0 1 22 7" fill="none" stroke="#ffd23a" stroke-width="2"/>`,supply:`<path d="M9 22A15 12 0 0 1 39 22z" fill="#e2492c"/><path d="M19 22A5 12 0 0 1 29 22" fill="#fff6dc"/>
    <path d="M11 22L20 32M37 22L28 32M24 22v10" stroke-width="1.8"/>
    <rect x="17" y="31" width="14" height="11" fill="#c98e4a"/><path d="M17 31l14 11M31 31l-14 11" stroke-width="1.6"/>`,"x-max":`${[[18,18],[30,28]].map(([n,t])=>`<g transform="rotate(15 ${n} ${t})"><path d="M${n-3.5} ${t-9}l-2 -3h11l-2 3z" fill="#2b2f3a"/>
    <ellipse cx="${n}" cy="${t}" rx="4.5" ry="7" fill="#e2492c"/><path d="M${n-2} ${t-2}v4" stroke="#fff6dc" stroke-width="1.6"/></g>`).join("")}
    <path d="M13 32v4M25 41v3M36 14v4" stroke="#fff6dc" stroke-width="2"/>`,"x-lia":`<path d="M14 8h20v3H14zM14 37h20v3H14z" fill="#8e3bd9"/>
    <path d="M16 11h16C32 18 27 21 24 24C27 27 32 30 32 37H16C16 30 21 27 24 24C21 21 16 18 16 11z" fill="#f2efe6"/>
    <path d="M19 15h10C27 19 25 21 24 22C23 21 21 19 19 15zM18.5 36C19 32 22 30 24 29C26 30 29 32 29.5 36z" fill="#ffd23a" stroke="none"/>`,"x-anvil":`<path d="M8 15H36C38 15 40 17 40 19C36 21 33 22 30 22V28H33V35H15V28H19V22H14C11 22 8 19 8 15z" fill="#8a8f99"/>
    <path d="M10 15h26" stroke="#fff6dc" stroke-width="2" stroke-opacity="0.7"/>
    <path d="M24 37l-3 5h6z" fill="#ff8a1f"/>`,"x-vex":`${[[18,18],[30,18],[24,29]].map(([n,t])=>`<polygon points="${l3(n,t,6,7,Math.PI/6)}" fill="#9cff6b"/>`).join("")}
    <circle cx="24" cy="29" r="2.2" fill="${Ki}"/><circle cx="18" cy="18" r="1.6" fill="${Ki}" stroke="none"/><circle cx="30" cy="18" r="1.6" fill="${Ki}" stroke="none"/>`,"v-falcon":`<g transform="rotate(-50 24 24)">${[16,24,32].map(n=>c3(9,n)).join("")}</g>`,"v-rhino":`<polygon points="${gi(33,15,8,10,5.5)}" fill="#ffd23a"/>
    <g transform="rotate(-45 22 26)"><path d="M10 21h13l7 5l-7 5h-13z" fill="#ff8a1f"/><path d="M10 21h4v10h-4z" fill="#8a8f99"/></g>`,"v-hummingbird":`${[[24,9],[14,22],[34,22],[9,34],[39,34]].map(([n,t],e)=>`<path d="M${n} ${t}l${e?4:5} ${e?9:11}l-${e?4:5} -2.5l-${e?4:5} 2.5z" fill="${e?"#1fc8b0":"#f2efe6"}"/>`).join("")}`,"v-thunder":`<path d="M12 34C8 34 8 28 12 28H36C40 28 40 22 36 22H12C8 22 8 16 12 16H36" fill="none" stroke-width="5.5"/>
    <path d="M12 34C8 34 8 28 12 28H36C40 28 40 22 36 22H12C8 22 8 16 12 16H36" fill="none" stroke="#c78cff" stroke-width="2.6"/>
    <polygon points="30,4 37,4 33,13 39,13 27,30 30,18 25,18" fill="#ffd23a"/>`,life:`<path d="M24 40C10 31 7 23 10 16C13 10 21 10 24 16C27 10 35 10 38 16C41 23 38 31 24 40z" fill="#ff4f6a"/>
    <path d="M21.5 18h5v5h5v5h-5v5h-5v-5h-5v-5h5z" fill="#fff6dc"/>`};let Jh=!1;function h3(){if(Jh||typeof document>"u")return;Jh=!0;const n=document.createElement("div");n.style.cssText="position:absolute;width:0;height:0;overflow:hidden",n.innerHTML=`<svg width="0" height="0" aria-hidden="true"><defs>
    <pattern id="pk-dots" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
      <circle cx="1" cy="1" r="0.9" fill="${Ki}" fill-opacity="0.18"/>
    </pattern></defs></svg>`,document.body.appendChild(n)}function sr(n,t=""){h3();const e=bn.find(s=>s.id===n),i=a3[(e==null?void 0:e.rarity)??"common"];return`<svg class="pk-ic ${t}" viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="24" cy="24" r="21.5" fill="${i}" stroke="${Ki}" stroke-width="3"/>
    <circle cx="24" cy="24" r="20" fill="url(#pk-dots)"/>
    <path d="M9 17A16.5 16.5 0 0 1 20 7.6" fill="none" stroke="#fff" stroke-opacity="0.6" stroke-width="2.6" stroke-linecap="round"/>
    ${e!=null&&e.only?'<circle cx="24" cy="24" r="18.6" fill="none" stroke="#ffd23a" stroke-width="1.8"/>':""}
    <g stroke="${Ki}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">${d3[n]??""}</g>
  </svg>`}class u3{constructor(t,e,i,s){H(this,"els",{});H(this,"last",{});H(this,"popups",0);H(this,"coins",0);H(this,"shown",0);H(this,"bumpT",0);this.root=t,this.stage=e,t.innerHTML=`
      <div class="scorebox" data-k="scorebox">
        <div class="score comic" data-k="score">0</div>
        <div class="hi comic" data-k="hi"></div>
      </div>
      <div class="combo hidden" data-k="combo">
        <div class="cn comic" data-k="comboN"></div>
        <div class="cm comic" data-k="comboM"></div>
        <div class="cbar"><i data-k="comboBar"></i></div>
      </div>
      <div class="perks" data-k="perks"></div>
      <div class="wave comic hidden" data-k="wave"></div>
      <div class="fps hidden" data-k="fps"></div>
      <button class="pause interactive no-drag" data-k="pause" title="暂停 (Esc)">❚❚</button>
      <div class="boss hidden" data-k="boss"><div class="nm comic" data-k="bossName"></div><div class="hp"><i data-k="bossHp"></i></div></div>
      <div class="lives" data-k="lives"></div>
      <div class="weap comic" data-k="weap"></div>
      <div class="ultbar hidden" data-k="ultbar"><i data-k="ultbarFill"></i></div>
      <div class="ultbtn interactive no-drag" data-k="ultbtn" title="大招 (X / 空格 / 右键)"><div class="inner"><span class="n comic" data-k="ultN">0</span><span class="l" data-k="ultL">大招</span></div></div>
      <div class="screenflash" data-k="flash"></div>
    `,t.querySelectorAll("[data-k]").forEach(r=>this.els[r.dataset.k]=r),this.els.pause.addEventListener("click",i),this.els.ultbtn.addEventListener("pointerdown",r=>{r.stopPropagation(),s()})}set(t,e,i=!1){this.last[t]!==e&&(this.last[t]=e,i?this.els[t].innerHTML=e:this.els[t].textContent=e)}toggle(t,e){const i=`__vis_${t}`,s=e?"1":"0";this.last[i]!==s&&(this.last[i]=s,this.els[t].classList.toggle("hidden",!e))}setUltName(t){this.set("ultL",t)}showFps(t){this.toggle("fps",t)}resetScore(){this.shown=0}update(t,e,i,s,r=1/60){const o=t.score-this.shown;this.shown=o<1?t.score:this.shown+Math.max(1,o*Math.min(1,r*7)),this.set("score",Math.floor(this.shown).toLocaleString()),this.bumpT=Math.max(0,this.bumpT-r);const a=1+this.bumpT*1.6;this.els.score.style.transform=`scale(${a.toFixed(3)}) rotate(${(-this.bumpT*12).toFixed(2)}deg)`,this.els.score.classList.toggle("hot",this.bumpT>.05),this.set("hi",`最高 ${Math.max(e,t.score).toLocaleString()}`),this.set("fps",`${s.toFixed(0)} FPS`);const c='<div class="life"></div>'.repeat(Math.max(0,t.lives))+'<div class="armor"></div>'.repeat(i);this.set("lives",c,!0);const l=(h,f)=>f?" "+"▰".repeat(h)+"▱".repeat(f-h):"";if(this.set("weap",`火力 ${t.power===5?"MAX":"Lv"+t.power}${l(t.powerXp,t.powerNeed)}  副武器 ${t.sub===3?"MAX":"Lv"+t.sub}${l(t.subXp,t.subNeed)}  擦弹 ${t.grazes}`),this.last.perksKey!==t.perks){this.last.perksKey=t.perks;const h=t.perks?t.perks.split(",").map(f=>{const[u,m]=f.split(":");return`<span class="pk">${sr(u)}${Number(m)>1?`<b>${m}</b>`:""}</span>`}).join(""):"";this.set("perks",h,!0)}this.set("ultN",String(t.ult));const d=t.ult>=3?100:Math.floor(t.gauge);if(this.last.g!==String(d)&&(this.last.g=String(d),this.els.ultbtn.style.setProperty("--g",`${d}%`)),this.els.ultbtn.classList.toggle("empty",t.ult<=0),this.els.ultbtn.classList.toggle("ready",t.ult>0),this.toggle("ultbar",t.ultActive>0),t.ultActive>0&&(this.els.ultbarFill.style.width=`${t.ultActive*100}%`),this.toggle("combo",t.combo>=3),t.combo>=3){this.set("comboN",`${t.combo} 连击`),this.set("comboM",`×${t.mult.toFixed(1)}`),this.els.comboBar.style.width=`${(t.comboT*100).toFixed(1)}%`;const h=t.combo>=80?"t4":t.combo>=50?"t3":t.combo>=25?"t2":t.combo>=10?"t1":"t0";this.last.tier!==h&&(this.last.tier=h,this.els.combo.className=`combo ${h}`),this.last.comboCount!==String(t.combo)&&(this.last.comboCount=String(t.combo),this.els.comboN.animate([{transform:"scale(1.5) rotate(-6deg)"},{transform:"scale(1) rotate(-3deg)"}],{duration:160}))}if(this.toggle("wave",t.wave>0),t.wave>0&&this.set("wave",`第 ${t.wave} 波`),this.toggle("boss",!!t.boss),t.boss){this.set("bossName",t.boss.name);const h=`${(Math.ceil(t.boss.ratio*200)/2).toFixed(1)}%`;this.last.bossHpW!==h&&(this.last.bossHpW=h,this.els.bossHp.style.width=h)}}scoreGain(t,e,i){const s=t>=2e4?14:t>=3e3?8:t>=800?5:t>=200?2:1,r=this.els.score.getBoundingClientRect(),o=this.root.getBoundingClientRect(),a=r.left-o.left+20,c=r.top-o.top+14;for(let d=0;d<s&&this.coins<60;d++){this.coins++;const h=document.createElement("div");h.className=`coin ${t>=3e3?"big":""}`;const f=e+(Math.random()-.5)*30,u=i+(Math.random()-.5)*30;h.style.left=`${f}px`,h.style.top=`${u}px`,this.root.appendChild(h);const m=(f-a)*.3+(Math.random()-.5)*80,v=-40-Math.random()*60,p=h.animate([{transform:"translate(-50%,-50%) scale(0.4)",opacity:1},{transform:`translate(calc(-50% + ${m}px), calc(-50% + ${v}px)) scale(1.2)`,opacity:1,offset:.3},{transform:`translate(calc(-50% + ${a-f}px), calc(-50% + ${c-u}px)) scale(0.6)`,opacity:.9}],{duration:550+Math.random()*250+d*25,easing:"cubic-bezier(.4,0,.9,.5)"}),g=()=>{h.isConnected&&(h.remove(),this.coins--,this.bumpT=Math.min(.35,this.bumpT+(t>=3e3?.12:.05)))};p.onfinish=g,setTimeout(g,1600)}const l=t>=2e4?"gain huge":t>=3e3?"gain big":t>=800?"gain mid":"gain";t>=100&&this.popupAt(`+${t.toLocaleString()}`,e,i-10,l)}callout(t,e="",i){this.root.querySelectorAll(".callout").forEach(r=>r.remove());const s=document.createElement("div");s.className=`callout comic ${e}`,s.textContent=t,i&&s.insertAdjacentHTML("afterbegin",sr(i,"callout-ic")),s.addEventListener("animationend",()=>s.remove()),this.root.appendChild(s)}flash(t){const e=this.els.flash;e.className=`screenflash ${t}`;const i=t==="gold"?600:t==="red"?450:250;e.animate([{opacity:.8},{opacity:0}],{duration:i,easing:"ease-out"})}banner(t,e="",i=""){this.stage.querySelectorAll(".banner").forEach(r=>r.remove());const s=document.createElement("div");s.className=`banner ${i}`,s.innerHTML=`<div class="t comic">${t}</div>${e?`<div class="s">${e}</div>`:""}`,s.addEventListener("animationend",r=>r.target===s&&s.remove()),this.root.appendChild(s)}popup(t,e,i,s=""){this.popupAt(t,e,i,s)}popupAt(t,e,i,s=""){if(this.popups>16)return;this.popups++;const r=document.createElement("div");r.className=`popup comic ${s}`,r.textContent=t,r.style.left=`${e}px`,r.style.top=`${i}px`;const o=()=>{r.isConnected&&(r.remove(),this.popups--)};r.addEventListener("animationend",o),setTimeout(o,1600),this.root.appendChild(r)}clearTransient(){this.root.querySelectorAll(".banner, .popup, .coin, .callout").forEach(t=>t.remove()),this.popups=0,this.coins=0}}async function f3(){try{const n=await fetch(`version.json?t=${Date.now()}`,{cache:"no-store"});if(!n.ok)return;const{id:t}=await n.json();if(!t||t==="mvzlxc1d")return;const e="sky-raiders.reloadedFor";if(sessionStorage.getItem(e)===t)return;sessionStorage.setItem(e,t);const i=new URL(location.href);i.searchParams.set("v",t),location.replace(i.toString())}catch{}}const Ko=(n,t,e)=>e?{who:n,text:t,sfx:e}:{who:n,text:t},qe=(n,t)=>Ko("cap",n,t),Mt=(n,t)=>Ko("ops",n,t),ae=(n,t)=>Ko("boss",n,t),vi=(n,t)=>Ko("king",n,t),gt=(n,t,e,i)=>Ko("pilot",{max:n,lia:t,anvil:e,vex:i}),ve=(n,t)=>({t:n,line:t}),ao=[{intro:[qe("第一幕 · 突围。三天前，自由之翼的基地被掠夺者夷为平地。"),Mt("{name}，听得到吗？这里是渡鸦。机库塌了，你是唯一飞出来的。"),gt("听得一清二楚！耳朵还在嗡嗡响，刚才那下炸得够劲。","听得到。其他人呢？……算了，不用回答。","听得到。渡鸦，你没事。太好了。","听见了。废墟里的机器还在叫，叫得很难听。"),Mt("往北飞，穿过荒原。到了北边的中继站，我们再想办法。")],bossIn:[ae("自由之翼的漏网之鱼？王说过，一个都不许放跑。","呼——！"),gt("那他得多派几个人来，光你一个可不够！","那你得先追上我。祝你好运。","我不跑。你过来。","你的引擎在咳嗽。它撑不了多久了。")],bossDown:[ae("不……我的天空核心……王会把我拆成零件的……"),Mt("天空核心？{name}，扫描一下它的残骸，我想知道那是什么。"),gt("扫好了！一颗发光的铁疙瘩，烫手得很。","扫描完毕。能量读数高得不正常。","扫了。亮的。很烫。","它还在跳……像一颗心脏。")],radio:[ve(15,Mt("两侧有俯冲机，别贴着边飞。")),ve(40,gt("哈！这些铁皮一碰就散！","比想象的还好对付。","打中了。下一个。","它们飞得很慌张。"))]},{intro:[qe("酸海群岛。海水能把钢板泡穿，没人愿意在这里迫降。"),Mt("核心的数据破译了。王在收集它们，每个军阀手里都有一颗。"),Mt("这片海底下就有一颗。声呐显示……那东西大得离谱。"),gt("越大越好，打起来才过瘾！","越大的保险箱，往往越好撬。","大的我来打。","它在下面翻了个身。它知道我们来了。")],bossIn:[ae("又一只掉进我海里的虫子。","哗啦——！"),gt("虫子？你见过会放火箭的虫子吗！","这么大的块头，转身一定很慢。","好大。……没关系。","它身上缠满了锁链。是王给它上的锁。")],bossDown:[ae("拿去吧……反正王的那门炮……已经快造好了……"),gt("什么炮？喂，把话说完再沉啊！","炮？渡鸦，你听到了吗？","炮。渡鸦，什么炮？","它沉下去了。最后那句话，不是在骗人。"),Mt("我听到了。先离开这片海，炮的事我来查。")],radio:[ve(18,Mt("雷达上有东西在水下跟着你。")),ve(42,gt("这海的味道跟臭鸡蛋一样！","别回头，水里那位还跟着。","水下有东西。我知道。","它在下面……看着。"))]},{intro:[qe("与此同时，北方工业区。一万根烟囱，昼夜不停。"),Mt("查到了，掠夺者的战机全是这座工厂造的。厂主自称「机械神」。"),Mt("{name}，拆了这里，掠夺者至少半年补不上飞机。"),gt("半年？我争取让他们一辈子都补不上！","一整座工厂当目标，这单划算。","拆东西。我会。","机械神……它把自己也焊进了流水线。")],bossIn:[ae("血肉是瑕疵，钢铁才是完美！你不过是个待修正的错误。","哐！哐！哐！"),gt("错误？我这个错误专门炸你这种完美！","完美的东西有个缺点：一碰就碎。","我不是错误。我是铁砧。","你在发烧。你的芯片烧得太久了。")],bossDown:[ae("生产线……停止……熔炉那边……还会有新的核心……"),Mt("熔炉？核心是在熔岩炼狱锻造的。下一个目标有了。"),gt("太好了，我正嫌这里不够热闹！","先说好，熔岩会弄脏我的靴子。","熔岩，很热。我去。","它最后在哼一首歌……是摇篮曲。")],radio:[ve(20,Mt("生产线还在出新飞机，别停火！")),ve(45,gt("出得越多，我炸得越多！","刚下线的，还带着漆味。","好吵。快点打完。","这些机器，都是刚出生的。"))]},{intro:[qe("北境，冰封峡谷。零下六十度，机翼上结满了霜。"),Mt("{name}，峡谷里风很大，会把你往一边推，注意修正航向。"),Mt("这里也有一颗核心。守着它的，是一条会飞的冰鳐。"),gt("冻得我雪茄都点不着……这仇我记下了。","冷倒是不怕。我讨厌的是风。","冷。我不怕冷。","风里有声音。它在说「回去」。")],bossIn:[ae("在我的峡谷里，一切终将静止。包括你的心跳。","嘶——"),gt("我的心跳？现在快得很，兴奋的！","想让我停下？排队吧，想这么做的人很多。","我的心跳得很稳。","你身体里的冰，已经裂开了。")],bossDown:[ae("冰……化了……天穹要塞的主炮……会替我……"),Mt("天穹要塞……原来核心是拿去给那门主炮充能的。"),Mt("那门炮一旦造好，能把任何一座城市从地图上抹掉。"),gt("那就在它造好之前，把它拆成废铁！","所以得赶在它充满之前。明白。","不让它开炮。","我在冰面上看到了它的影子……很大。")],radio:[ve(16,Mt("侧风来了，稳住机身！")),ve(40,gt("这风也太欺负人了！","风向又变了。烦人。","风很大。我很重。","风在帮它们。"))]},{intro:[qe("熔岩炼狱。每一颗天空核心，都诞生在这座熔炉里。"),Mt("{name}，地面随时会喷岩浆，看到发红的地方就绕开。"),vi("有意思。一只小鸟，竟然一路飞到了我的熔炉门口。"),gt("喂，偷听别人频道的！报上名来！","能切进加密频道的人可不多。你是谁？","你是谁？","这个声音……我在每颗核心里都听到过。")],bossIn:[ae("我是熔炉之主！每一颗核心，都在我的火焰中诞生！","轰——！"),gt("比谁的火大？那你可找对人了！","火焰很漂亮。可惜烧不了多久。","很烫。还是要打。","你的火在哭。它不想再烧了。")],bossDown:[ae("熔炉熄了……可王手里的核心……已经够多了……"),Mt("刚才那个声音，是掠夺者之王。{name}，他已经盯上你了。"),gt("盯上我？好啊，省得我满世界找他！","被大人物盯上，说明我干得不错。","他盯着我。我不怕。","他看我们的眼神……很疲惫。")],radio:[ve(14,Mt("地面发红了，快离开那块区域！")),ve(38,gt("烫烫烫！差点烤熟！","差一点就被烤焦了。","烫。跳过去。","大地在吐气。"))]},{intro:[qe("第二幕 · 反击。午夜霓虹城，整座城市的电被人掐断了。"),Mt("霓虹教父把电力全攥在手里，现在全城都得向他买光。"),Mt("城里一片漆黑，{name}，你只能靠探照灯看路了。"),gt("没灯？那我就自己放点烟花照亮！","黑暗？那是我的老朋友。","黑。我不怕黑。……有点怕。","黑暗里，机器的眼睛最亮。")],bossIn:[ae("欢迎光临，客人。在我的城里，连光都要收费。","啪！"),gt("收费？我拿一整箱火箭付账！","真巧，我向来不付钱。","我没钱。我有拳头。","你偷走了所有人的光。我来讨回来。")],bossDown:[ae("灯……亮了……王不会放过你的……他一直在看……"),vi("霓虹教父是个废物。不过你，小鸟……你让我很感兴趣。"),gt("感兴趣？下一个就轮到你了！","谢谢夸奖。不过我不签名。","你别看我。","你躲在每一块屏幕后面。我看得见你。")],radio:[ve(12,Mt("暗处有东西靠近，用灯照它！")),ve(36,gt("谁关的灯？给我出来！","黑暗里，我比你们自在。","看不见。乱打一通。","它们在黑暗里发光。"))]},{intro:[qe("雷暴之海。这片海上的雷，一年到头从没停过。"),Mt("雷会劈中它们的飞机。{name}，把敌人往雷云底下引。"),vi("雷霆海妖会把你撕碎的。我会好好听着你的惨叫。"),gt("惨叫？我只会放声大笑！","陛下这么闲，天天来串门？","你很吵。","雷站在我们这边。你感觉不到吗？")],bossIn:[ae("暴风是我的歌喉，闪电是我的利爪！","咔啦啦——轰！"),gt("唱得真难听！我给你伴奏！","闪电很快。可惜，我更快。","打雷。我不躲。","你的雷声里，有东西在哭。")],bossDown:[ae("风暴……停了……但王的风暴……才刚开始……"),Mt("{name}，南边沙海有方尖碑在给掠夺者的部队加护盾。"),gt("方尖碑？听起来就很好炸！","那就先拆塔。了解。","拆塔。我会。","风刚才告诉我了：沙子里有塔。")],radio:[ve(15,Mt("把它们引到雷云底下！")),ve(40,gt("好雷！再来一个！","借雷一用，不用还。","雷，谢谢你帮忙。","雷听见我了。"))]},{intro:[qe("沙海遗迹。三千年前的神殿，如今成了掠夺者的护盾站。"),Mt("被方尖碑连着的敌人打不动。{name}，先拆塔，再收拾它们。"),vi("你拆一座塔，我就建十座。你飞得了那么久吗？"),gt("十座？正好够我练手！","建塔要十年，拆塔只要十秒。","你建。我拆。","这些塔在念很古老的咒文。")],bossIn:[ae("我是不朽的！黄金甲壳之下，是永恒的太阳！","嗡——"),gt("黄金？炸碎了还能拿去卖钱！","黄金？我最喜欢偷这个了。","亮晶晶的。敲碎它。","你的永恒是借来的。该还了。")],bossDown:[ae("不朽……原来……也会碎……"),gt("会！而且碎得特别响！","三千年，到今天为止。","碎了。捡一块金子回去。","咒文念完了。它可以休息了。"),Mt("{name}，有一列装甲列车正往要塞运送核心。截住它。")],radio:[ve(12,Mt("先打方尖碑，护盾自然就没了！")),ve(38,gt("塔倒了！真漂亮！","又一座。比偷画还容易。","又一座。推倒。","碑文在燃烧。"))]},{intro:[qe("与此同时，荒原铁路线上，一列火车正驶向天穹要塞……"),Mt("那是掠夺者的补给线，车厢里装满了天空核心。"),Mt("整列火车都是炮台。{name}，一节一节地拆，别贪快。"),gt("劫火车！我小时候的梦想！","劫火车？这活儿我熟。","火车很大。我更大。","铁轨在发抖。它也不想载这些东西。")],bossIn:[ae("全速前进！碾碎铁轨上的一切障碍！","呜——！"),gt("这一站，你得下车了！","你的时刻表，我已经改过了。","来吧。我站着不动。","你的锅炉快炸了。它在求你停下。")],bossDown:[ae("脱轨了……王的补给……断了……","哐当！"),vi("你敢动我的补给线？很好，我会亲自记住你。"),gt("记牢了：麦克斯！带火箭的那个！","记住我？没人记得住小偷的脸。","铁砧。两个字。记住。","你记不住的。你连自己是谁都忘了。")],radio:[ve(14,Mt("先打车顶的炮塔！")),ve(40,gt("这节车厢炸得真带劲！","下一节，归我了。","追上了。","铁轨在哭。"))]},{intro:[qe("虫巢丛林。王的生化兵器，就在这片绿色地狱里孵化。"),Mt("这些虫子被打碎还会分裂。{name}，速战速决，别让它们越变越多。"),vi("我的孩子们饿了。你看起来很美味。"),gt("虫子？我这儿有专治虫子的火箭！","我讨厌虫子。它们总在最糟的时候出现。","虫子不好吃。我不吃。","这些虫子没有灵魂，只剩饥饿。")],bossIn:[ae("我的孩子们会吞没整片天空。而你，是它们的第一餐。","嘶嘶嘶……"),gt("你生多少，我炸多少！","生得再快，也快不过我的扳机。","你是虫妈妈。我不怕你。","你的意识……是被人硬塞进去的。是谁？")],bossDown:[ae("孩子们……别哭……王答应过……会给我们一片天空……"),gt("他也答应过别人。全是骗人的。","王的承诺，向来不值钱。","她被骗了。……有点可怜。","她到最后都还相信他。"),Mt("{name}，前方云层里有架红色战机。是个王牌，小心。")],radio:[ve(12,Mt("大的会分裂，先打大的！")),ve(36,gt("越打越多？越炸越爽！","数不清了，干脆别数。","又变多了。头晕。","它们在分裂……像谎言。"))]},{intro:[qe("第三幕 · 真相。王牌空域，云层之上，有人已经等候多时。"),Mt("那些王牌会躲子弹，{name}，预判他们的走位。"),Mt("还有那架红色战机……那种飞法，我只在一个人身上见过。"),gt("渡鸦？你声音怎么怪怪的？","你认识他。对吗，渡鸦？","渡鸦。你还好吗？","渡鸦，你的手在发抖。")],bossIn:[ae("终于来了个像样的对手。按空战礼节，我先报上名号：赤色男爵。","嗡——！"),gt("礼节？我的礼节就是一发火箭！","莉娅。记住这个名字，你只有一分钟。","铁砧。你好。……现在打架。","你的战机很干净。可惜跟错了人。")],bossDown:[ae("好身手。作为败者，我告诉你一件事：王，就是「铁鹰」。"),ae("自由之翼的创始人。当年丢下他的僚机……就是渡鸦。"),gt("铁鹰？渡鸦？谁来给我解释一下？！","渡鸦。你欠我一个解释。现在。","渡鸦……是好人。我相信他。","原来如此。难怪他的声音那么疲惫。"),Mt("……")],radio:[ve(15,Mt("他们躲进云里了，等他们出来！")),ve(40,gt("别躲了！出来挨打！","你的闪避，我看穿了。","云里有人。我看到了。","云在替他们说谎。"))]},{intro:[qe("水晶洞窟。一万面晶壁，映出一万张面孔。"),Mt("……男爵说的是真的。二十年前，我是铁鹰的僚机。"),Mt("他被包围的那天，我掉头逃了。我不求你原谅。"),gt("过去的事就让它过去！老渡鸦，继续带路！","谁都有偷不回来的时间。继续导航吧。","你逃过。现在没逃。这就够了。","你的心有裂痕。可它没有碎。")],bossIn:[ae("每一道光，都会在我体内折射千次。你的子弹也一样。","叮——"),gt("折射？那我就多打几发！","镜子游戏？小心把自己照碎。","好亮。眯着眼打。","晶体在给我指路。")],bossDown:[ae("碎了……光……终于……自由了……","哗啦！"),gt("一地玻璃渣！谁来扫一下？","碎镜子招七年霉运。还好你没有七年了。","碎了。小心扎脚。","镜子碎掉的那一刻，映出了一条路。"),Mt("……谢谢你，{name}。前面是引力废墟，离要塞不远了。")],radio:[ve(15,Mt("子弹会在晶壁上反弹，留神！")),ve(40,gt("弹来弹去，眼都花了！","反弹角度，我算好了。","子弹乱跳。我乱躲。","光在为我拐弯。"))]},{intro:[qe("引力废墟。一座被奇点吞掉了一半的旧城。"),Mt("引力井会把你和子弹都往里拽。{name}，别靠得太近。"),vi("渡鸦把真相告诉你了？那他有没有说，那天他跑得有多快？"),gt("他跑得快？我炸得更快！","这是我和你之间的事，别扯上渡鸦。","渡鸦是朋友。你闭嘴。","你在伤害他。因为你自己也在痛。")],bossIn:[ae("万物终将坠落。你的子弹，你的希望，都会落进我的中心。","嗡嗡嗡——"),gt("我的火箭只往前飞，不往下掉！","坠落需要时间。我不打算给你。","拉我？我很重。拉不动。","你很饿。一直都很饿。")],bossDown:[ae("引力……反转了……连我……也要坠落……"),gt("掉吧掉吧！可别拉上我！","下去吧。底下没人等你。","掉下去了。我站稳了。","它终于可以闭上眼睛了。"),Mt("{name}，雷达上有车队……它们在你后面！")],radio:[ve(16,Mt("离黑洞远点，它会拽你！")),ve(40,gt("这黑洞还挺会帮忙！","时间在这里变慢了。","被拉住了。用力。","重力在为我弯腰。"))]},{intro:[qe("极速追击。时速一千二百公里，敌人从后方紧追不舍。"),Mt("{name}，它们从你身后追上来了！别光盯着前面！"),vi("我的公路霸王从不放过猎物。好好尝尝被追杀的滋味吧。"),gt("追我？先吃我的尾气！","想追上我？先追上时间再说。","后面有人。我转身打。","后面的引擎在咆哮。我听得很清楚。")],bossIn:[ae("这条天路是我的地盘！敢超我车的，都得死！","轰轰轰——！"),gt("超车？我直接把你炸翻！","开太快了。我帮你踩个刹车。","你很快。我很硬。","你的引擎快烧穿了。它在求饶。")],bossDown:[ae("翻车了……该死……前面就是……防火墙……","吱——嘎！"),gt("翻得好！下个路口见！","终点线到了。可惜不是你的。","车坏了。我不赔。","烟尘落下了。前面的光墙在嗡嗡作响。"),Mt("前面就是天穹要塞的最后一道防线了。")],radio:[ve(10,Mt("后方来敌！别光看前面！")),ve(35,gt("想从后面偷袭？没门！","背后？我从不留破绽。","后面。知道了。","背后的风在报信。"))]},{intro:[qe("激光防线。天穹要塞之前的最后一道墙。"),Mt("栅栏之间会留出缺口。{name}，看准了再穿，擦一下就是焦炭。"),Mt("穿过这里，就能看到天穹要塞了。最后冲一次。"),gt("激光？我的火箭炸开时也会发光！","激光网？博物馆里的比这难多了。","墙。撞过去。……找缺口？好。","这些光束织成了一张网。网的另一头有人。")],bossIn:[ae("警告：检测到未授权访问。启动清除程序。","哔——哔——"),gt("访问？我是来砸场子的！","密码？我从来不用密码。","门。开开。","你的防火墙挡不住我。")],bossDown:[ae("系统……崩溃……要塞……失去屏障……","滋滋——"),Mt("防线打开了！……等等，要塞外面有一支舰队。那些编号……"),gt("编号怎么了？渡鸦，说话啊！","渡鸦？说清楚。","渡鸦，怎么了？","门后面……有很多亡灵。")],radio:[ve(14,Mt("栅栏有缺口，看准了再穿！")),ve(40,gt("差点烫到我的雪茄！","缺口半秒后打开。","好烫。绕过去。","光网在呼吸。"))]},{intro:[qe("第四幕 · 王座。天穹要塞外围，一支不该存在的舰队。"),Mt("那些编号……是自由之翼阵亡飞行员的战机。"),vi("我把他们都带回来了。忠诚的战士，不该就那样安息。"),gt("拿死人当铁皮使？！这回我真火了！","连死者的安宁都要偷？我都不屑干。","他们是战友。……我很难过。","他们被锁在铁壳里。我听得到他们在哭。")],bossIn:[ae("……归队……归队……铁鹰在召唤……","呜——"),Mt("那是……老雷的旗舰。它只有现形的时候才打得中。"),gt("老兄，对不住了。我送你一程！","你的时间早就停了。我帮你结束它。","对不起。我送你回家。","我会解开你的锁链。安息吧。")],bossDown:[ae("……谢谢……告诉渡鸦……我们不怪他……"),Mt("……收到。安息吧，老雷。"),gt("这笔账，我连本带利找王算！","这一次，我替你们把时间要回来。","我会记住你们。永远。","他们自由了。风正往王座吹去。")],radio:[ve(15,Mt("等它们现形再打！")),ve(40,gt("兄弟们，安息吧！","它们在虚实之间徘徊。","看不见。等它出来。","亡灵们，我听见了。"))]},{intro:[qe("深空裂隙。空间在这里，像一张被对折的纸。"),Mt("{name}，这片空间是折起来的。飞出左边，你会从右边钻出来。"),gt("左出右进？那我炸两遍！","我连时间都偷过，空间算什么。","左边，右边……我晕了。","裂隙的另一头，有一只眼睛。"),Mt("我这边的仪表全乱了。{name}，接下来要靠你自己了。")],bossIn:[ae("我注视着一切的两端。你无处可逃。","咕噜……"),gt("大眼珠子！吃我一记火箭眼药水！","盯着我看？小心，我会偷走你的视线。","大眼睛。戳它。","你看见的未来里，有你自己的死亡。")],bossDown:[ae("我看见了……前方……时间……停止了……"),gt("看清楚了吗？这就叫被炸！","时间停止？那是我的地盘。","眼睛闭上了。晚安。","它最后的预言：时钟在等我们。"),Mt("前面是时间回廊。王的倒计时……也快到了。")],radio:[ve(15,Mt("子弹会从另一边绕回来！")),ve(40,gt("左边炸完炸右边！","绕了一圈，又见面了。","又回来了。","空间在折叠。"))]},{intro:[qe("时间回廊。在这里，一秒可能就是一万年。"),Mt("这里的时间不稳定。钟一响，所有东西都会停下来。"),gt("时间停了？我的火箭可不会等！","偷时间的人，遇上了管时间的人。有意思。","时间停了。我没停。","这里的齿轮在倒着转。很危险。")],bossIn:[ae("我掌管每一秒。你的生命，不过是我表盘上的一格。","滴答、滴答——"),gt("表盘？我把你炸成闹钟！","你的时间到了。这句台词，我等了很久。","钟很吵。砸了它。","你的发条快断了。我听得见。")],bossDown:[ae("不可能……你偷走了……我的时间……","铛——！"),gt("时间就是火药！全拿来炸你了！","最后三秒归我了。不用找零。","钟停了。……几点了？我饿了。","指针停下了，然后转向了要塞。"),Mt("{name}，要塞主炮开始充能了。目标是最后一座自由城市。")],radio:[ve(14,Mt("钟响了！等时间恢复再动！")),ve(40,gt("停一下？我照样炸！","这一秒，归我。","停了，又动了。","指针在逆行。"))]},{intro:[qe("天穹要塞。一座浮在云端的钢铁山脉。"),Mt("要塞的炮台会覆盖整片空域。{name}，看到红圈就躲开。"),vi("再过一分钟，最后一座自由城市就会化为灰烬。你赶得上吗？"),gt("一分钟？够我炸十遍了！","一分钟？对我来说绰绰有余。","赶得上。我飞得快。","主炮在挣扎。它不想开火。")],bossIn:[ae("主炮充能百分之九十。所有炮位，开火！","轰！轰！轰！"),gt("比火力？我可是火箭狂人！","炮弹再多，也追不上我。","炮很大。我的盾更大。","核心在喊着要自由。我听到了。")],bossDown:[ae("主炮……过载……核心……全部释放……","KRAKA-BOOM!"),Mt("主炮摧毁！城市保住了！{name}，干得漂亮！"),gt("这才叫烟花！史上最大的那种！","倒计时归零。是你们的。","城市没事。我很开心。","核心正在回到天空。"),Mt("王座就在要塞顶上。铁鹰……在等你。")],radio:[ve(12,Mt("红圈要落炮弹了，快离开！")),ve(40,gt("炸要塞！我的梦想！","炮击间隔三秒，够了。","炮弹，我挡。","要塞在发抖。它怕了。"))]},{intro:[qe("天空母舰。二十片天空的尽头，掠夺者之王的旗舰就停在云上。"),Mt("{name}，母舰太大了，我一段一段给你引路。这一次，我陪你飞到最后。"),vi("你很强，小鸟。比当年的渡鸦强多了。来，坐到我身边。"),gt("坐你旁边？我只坐火箭！","你的提议？白送我都不要。","不。我有朋友了。","你的王座是空的。你自己也知道。")],bossIn:[ae("我建立了自由之翼，也亲手埋葬了它。现在，轮到你了。","轰隆隆——！"),Mt("铁鹰！这一次，我不会走。"),gt("今晚吃烤鹰！炸就完事了！","铁鹰先生，你的时间——到了。","你是坏人。我打坏人。","你的灵魂锈透了。我帮你擦亮它。")],bossDown:[ae("咳……我只是……想让天空……不再有人坠落……"),ae("渡鸦……你回来了……这次……你没走……"),Mt("我没走，老大。我一直都在。……安息吧。"),gt("结束了……老渡鸦，我们回家吧。","他的时间停了。我们的，才刚开始。","结束了。……想回家。","他又飞起来了。这一次，没有锁链。")],radio:[ve(15,Mt("舰首防空炮开火了，先把它们拆掉！")),ve(45,gt("最后一战，火箭全开！","最后一秒，也是我的。","我不累。打到底。","所有人都在为我们祈祷。"))]}],p3=[qe("三个月后。二十片天空，再也看不到掠夺者的旗帜。"),qe("自由城市的上空，第一次有孩子在放风筝。"),Mt("{name}，今天没有任务……我只是想说声谢谢。"),Mt("铁鹰的旧机库我收拾好了。自由之翼，重新开张。"),gt("开张大吉！庆功的烟花归我放！","终于有空了。偷来的时间，我还回去一部分。","太好了。……可以吃饭了吗？","天空在安睡。暂时而已。"),Mt("渡鸦，结束通讯。……飞得开心点，伙计。"),qe("然而，在第二十一片天空的阴影里，有什么东西睁开了眼睛……"),qe("完……？","未完待续！")],Qh=256;let Lr=null;const tu=new Map;function m3(){return Lr||(Lr=new Vu({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Lr.setPixelRatio(1),Lr.setSize(Qh,Qh,!1),Lr.setClearColor(0,0)),Lr}function bf(n,t,e){const i=tu.get(n);if(i)return i;const s=m3(),r=new Gu;r.add(t),t.updateMatrixWorld(!0);const o=new ks().setFromObject(t),a=new Xn(30,1,.1,200);e(a,o),a.updateMatrixWorld(),s.render(r,a);const c=s.domElement.toDataURL("image/png");return tu.set(n,c),c}function g3(n){return bf(`p-${n}`,tf(n),t=>{t.position.set(1.2,.15,4.3),t.lookAt(0,-.35,0)})}function eu(n){const t=E0(n);return bf(`b-${n}`,t,(e,i)=>{const s=i.getCenter(new U),r=i.getSize(new U),o=Math.max(r.x,r.z,r.y)*1.7;e.position.set(s.x+o*.15,s.y+o*.8,s.z+o*.62),e.lookAt(s)})}const v3=`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<path d="M18 100 Q20 70 50 66 Q80 70 82 100Z" fill="#1d3a4a" stroke="#0e0c12" stroke-width="4"/>
<path d="M50 14 C30 14 24 30 25 46 C26 62 36 70 50 70 C64 70 74 62 75 46 C76 30 70 14 50 14Z" fill="#e8b48e" stroke="#0e0c12" stroke-width="4"/>
<path d="M24 44 C22 18 40 8 54 10 C70 12 80 24 76 44 C70 32 60 26 46 28 C36 30 30 36 24 44Z" fill="#14161c" stroke="#0e0c12" stroke-width="3"/>
<rect x="28" y="38" width="44" height="13" rx="5" fill="#2aa3c9" stroke="#0e0c12" stroke-width="3"/>
<rect x="33" y="41" width="12" height="4" fill="#bff2ff"/>
<path d="M22 46 C22 30 34 20 50 20 C66 20 78 30 78 46" fill="none" stroke="#0e0c12" stroke-width="5"/>
<rect x="15" y="42" width="10" height="16" rx="4" fill="#2b2f3a" stroke="#0e0c12" stroke-width="3"/>
<path d="M22 56 Q26 66 40 62" fill="none" stroke="#0e0c12" stroke-width="3"/>
<circle cx="41" cy="62" r="3" fill="#2aa3c9" stroke="#0e0c12" stroke-width="2"/>
<path d="M42 58 Q50 61 58 58" fill="none" stroke="#0e0c12" stroke-width="2.5"/>
</svg>`)}`;function Sf(n,t){switch(n){case"pilot":return{name:t.pilotName,color:t.pilotColor,img:g3(t.pilotId),villain:!1,side:"l"};case"ops":return{name:"渡鸦",color:"#2aa3c9",img:v3,villain:!1,side:"r"};case"boss":return{name:t.bossName,color:"#d8342c",img:eu(t.level),villain:!0,side:"r"};case"king":return{name:"掠夺者之王",color:"#b8860b",img:eu(19),villain:!0,side:"r"};default:return{name:"",color:"#ffd23a",img:"",villain:!1,side:"l"}}}const wf=(n,t)=>(typeof n.text=="string"?n.text:n.text[t.pilotId]).replace(/\{name\}/g,t.pilotName),ll=n=>n.replace(/&/g,"&amp;").replace(/</g,"&lt;");function x3(n,t){const e=n.sfx?`<div class="sfx comic">${ll(n.sfx)}</div>`:"";if(n.who==="cap")return`<div class="cpanel cap"><div class="capbox"><span class="tx"></span></div>${e}</div>`;const i=Sf(n.who,t);return`<div class="cpanel ${i.side} ${i.villain?"vil":""}" style="--c:${i.color}">
    <div class="por"><img src="${i.img}" alt=""/><div class="nm comic">${ll(i.name)}</div></div>
    <div class="bub"><span class="tx"></span></div>${e}</div>`}const M3=3,_3=40;function yl(n,t,e){return t.length?new Promise(i=>{const s=document.createElement("div");s.className="comic-overlay",s.innerHTML=`<div class="comic-page"></div>
      <button class="comic-skip">跳过 »</button>
      <div class="comic-next">点击继续 ▸</div>`,n.appendChild(s);const r=s.querySelector(".comic-page");let o=-1,a=null;const c=()=>{a&&(clearInterval(a.timer),a.tx.textContent=a.full,a=null)},l=()=>{if(a)return c();if(o++,o>=t.length)return d();o%M3===0&&(r.innerHTML="");const f=t[o];r.insertAdjacentHTML("beforeend",x3(f,e));const m=r.lastElementChild.querySelector(".tx"),v=wf(f,e),p={tx:m,full:v,shown:0,timer:0};p.timer=window.setInterval(()=>{p.shown++,m.textContent=v.slice(0,p.shown),p.shown>=v.length&&c()},1e3/_3),a=p},d=()=>{c(),window.removeEventListener("keydown",h),s.classList.add("out"),setTimeout(()=>s.remove(),180),i()},h=f=>{if(f.code==="Escape")d();else if(f.code==="Space"||f.code==="Enter")l();else return;f.preventDefault()};s.addEventListener("click",f=>{f.target.closest(".comic-skip")?d():l()}),window.addEventListener("keydown",h),l()}):Promise.resolve()}let ki=null,R0=0;function y3(n,t,e){ki==null||ki.remove(),clearTimeout(R0);const i=Sf(t.who,e),s=document.createElement("div");s.className=`radio-bubble ${i.villain?"vil":""}`,s.style.setProperty("--c",i.color),s.innerHTML=`<div class="por">${i.img?`<img src="${i.img}" alt=""/>`:""}</div>
    <div class="bub"><div class="nm comic">${ll(i.name||"旁白")}</div><div class="tx">${ll(wf(t,e))}</div></div>`,n.appendChild(s),ki=s,R0=window.setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),300),ki===s&&(ki=null)},3800)}function jo(){clearTimeout(R0),ki==null||ki.remove(),ki=null}const Ef={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class lo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const b3=new Uu(-1,1,1,-1,0,1);class S3 extends on{constructor(){super(),this.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Se([0,2,0,0,2,0],2))}}const w3=new S3;class nd{constructor(t){this._mesh=new ue(w3,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,b3)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class E3 extends lo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof sn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bo.clone(t.uniforms),this.material=new sn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new nd(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nu extends lo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class T3 extends lo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class A3{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ct);this._width=i.width,this._height=i.height,e=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ui}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new E3(Ef),this.copyPass.material.blending=ts,this.clock=new Fx}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}nu!==void 0&&(o instanceof nu?i=!0:o instanceof T3&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class C3 extends lo{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const R3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class eo extends lo{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new ct(t.x,t.y):new ct(256,256),this.clearColor=new qt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new si(r,o,{type:Ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new si(r,o,{type:Ui});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const u=new si(r,o,{type:Ui});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=R3;this.highPassUniforms=Bo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ct(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Ef;this.copyUniforms=Bo.clone(d.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:No,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qt,this.oldClearAlpha=1,this.basic=new W0,this.fsQuad=new nd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ct(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=eo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=eo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new sn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new sn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}eo.BlurDirectionX=new ct(1,0);eo.BlurDirectionY=new ct(0,1);const P3={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class L3 extends lo{constructor(){super();const t=P3;this.uniforms=Bo.clone(t.uniforms),this.material=new Nx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new nd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Te.getTransfer(this._outputColorSpace)===Be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===au?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===cu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===du?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===uu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const vn=new URLSearchParams(location.search),$o=vn.has("debug");f3();const Si=document.getElementById("stage"),I3=document.getElementById("gl"),Ps=document.getElementById("ui"),no=document.getElementById("hud"),is=new Vu({canvas:I3,antialias:!0,powerPreference:"high-performance"}),id=Math.min(window.devicePixelRatio,1.5);is.setPixelRatio(id);is.info.autoReset=!1;Ml.uDot.value=4.5*id;const co=new Gu,xn=new Xn(45,2/3,1,200),sd=new U(0,34,9),rd=new U(0,0,-1);xn.position.copy(sd);xn.lookAt(rd);const ur=new A3(is,new si(400,600,{type:Ui,samples:4}));ur.addPass(new C3(co,xn));const Tf=new eo(new ct(400,600),.5,.3,1.15);ur.addPass(Tf);ur.addPass(new L3);function od(){const n=!!Pt.lowFx;Tf.enabled=!n;const t=n?1:id;is.setPixelRatio(t),ur.setPixelRatio(t),Ml.uDot.value=4.5*t,ad()}const ds=new rM(co);ds.setTheme("desert");const rr=new oM(co),Fi=new s3(Si);let Pt=r3();vn.has("unlockall")&&(Pt.unlockAll=!0);ff(!!Pt.muted);let yc=0;const Do=()=>yf({...Pt,unlockAll:void 0}),Cn=new u3(no,Si,()=>kf(),()=>Fi.queueUlt());Cn.showFps($o||vn.has("fps"));const P0=(n,t)=>{const e=new U(n,0,t).project(xn);return[(e.x+1)/2*Si.clientWidth,(1-e.y)/2*Si.clientHeight]},it=new A0(co,rr,Fi,{banner:(n,t,e)=>Cn.banner(n,t,e),popup:(n,t,e,i)=>{const[s,r]=P0(t,e);Cn.popup(n,s,r,i)},scoreGain:(n,t,e)=>{const[i,s]=P0(t,e);Cn.scoreGain(n,i,s)},callout:(n,t,e)=>Cn.callout(n,t,e),flashScreen:n=>Cn.flash(n),perkChoice:n=>Df(n),ultVisual:(n,t)=>Si.classList.toggle(n,t),levelClear:()=>F3(),bossEnter:n=>{var t;!Qo()||ie!=="playing"||(jo(),ie="story",yl(Ps,((t=ao[n])==null?void 0:t.bossIn)??[],ta(n)).then(()=>{ie==="story"&&(Fi.reset(),ie="playing")}))},waveStart:(n,t,e)=>{const i=Ue[t];ds.setTheme(i.theme),Cn.banner(`第 ${n} 波`,e?`Boss 来袭：${i.bossName}`:`${i.name.split(" · ")[1]}${i.tip?` · ${i.tip.split("：")[0]}`:""}`,e?"warning":"")},gameOver:()=>O3()});function ad(){const n=window.innerWidth,t=window.innerHeight;let e=Math.min(n-8,(t-8)*(2/3)),i=e*1.5;n<560&&(e=n,i=Math.min(t,n*1.9)),(e<100||i<150)&&(e=400,i=600),Si.style.width=`${e}px`,Si.style.height=`${i}px`,is.setSize(e,i,!1),ur.setSize(e,i),xn.aspect=e/i,xn.updateProjectionMatrix(),xn.position.copy(sd),xn.lookAt(rd),xn.updateMatrixWorld();const s=new ju,r=new bs(new U(0,1,0),0),o=(f,u)=>(s.setFromCamera(new ct(f,u),xn),s.ray.intersectPlane(r,new U)),a=o(-1,-1),c=o(1,-1),l=o(-1,1),d=o(1,1),h={left:Math.max(a.x,l.x),right:Math.min(c.x,d.x),top:l.z,bottom:a.z};it.setBounds(h),it.pixelToWorld=(h.right-h.left)/e}window.addEventListener("resize",ad);ad();od();const ld=new be,Ao=new be;ld.add(Ao);co.add(ld);let Es=null,Af=null,Cf="none";const ji=new be;ji.visible=!1;co.add(ji);let Xr=null;function hs(n,t,e=.33){Es&&Ao.remove(Es),Es=null,Cf=n,ji.visible=n==="pilot";for(const o of[...ji.children])ji.remove(o),o.traverse(a=>{a instanceof ue&&(a.geometry.dispose(),a.material.dispose())});if(Xr=n==="pilot"?uM(t):null,Xr&&ji.add(Xr.group),n==="none")return;const i=n==="pilot"?tf(t):M0(t),s=new be;s.add(i),Es=s,Ao.add(s);const r=new ju;r.setFromCamera(new ct(0,e),xn),ld.position.copy(r.ray.at(18,new U)),ji.position.copy(r.ray.at(26,new U)),ji.lookAt(xn.position),n==="pilot"?(Ao.rotation.set(-1.2,0,0),s.scale.setScalar(1.45)):(Ao.rotation.set(.5,0,0),s.scale.setScalar(1.25))}let ie="menu",Zn=Rn[0],ws=yn[0],Jo=0,Ls="campaign",L0=0,I0=0,Br=0,jn=!1;const k3=["dmg","dmg","rate","rate","crit","crit","spread","spread","pierce","drone","drone","homing","shield","shield","ult"],qr=n=>jn||to(n,Pt),Qo=()=>Ls==="campaign"&&Pt.story!==!1&&!vn.has("nostory");for(const n of ao)n.radio.sort((t,e)=>t.t-e.t);const ta=n=>({pilotId:Zn.id,pilotName:Zn.name,pilotColor:Zn.color,level:n,bossName:Ue[n].bossName}),Sn=n=>{Ps.innerHTML=n},re=(n,t)=>Ps.querySelectorAll(n).forEach(e=>e.addEventListener("click",()=>{m_(),t(e)}));function In(){ie="menu",it.stop(),jo(),no.classList.add("hidden"),Cn.clearTransient(),ds.setTheme(Ue[Math.floor(Math.random()*Math.min(Ue.length,Pt.reached+3))].theme),hs("vehicle",yn[Math.floor(Math.random()*yn.length)].id,-.05);const n=Rn.filter(t=>to(t.unlock,Pt)).length+yn.filter(t=>to(t.unlock,Pt)).length;Sn(`
    <div class="screen">
      <div class="logo"><div class="en comic">SKY<br/>RAIDERS</div><div class="cn comic">天空掠夺者</div></div>
      <div class="btn-col">
        <button class="btn" data-a="start">开始游戏</button>
        <button class="btn ${Wr(Pt)?"red":"alt locked-btn"}" data-a="endless">${Wr(Pt)?"无限挑战":"🔒 无限挑战（通关全部 20 关后解锁）"}</button>
        <div class="btn-row">
          <button class="btn alt" data-a="codex">图鉴</button>
          <button class="btn alt" data-a="help">操作说明</button>
        </div>
        ${$o?'<button class="btn alt" data-a="practice">选关体验（满配）</button>':""}
        <div class="btn-row">
          <button class="btn alt small" data-a="mute">音效：${Pt.muted?"关":"开"}</button>
          <button class="btn alt small" data-a="fx">画质：${Pt.lowFx?"流畅":"高"}</button>
          <button class="btn alt small" data-a="story">剧情：${Pt.story===!1?"关":"开"}</button>
          <button class="btn alt small" data-a="reset">重置存档</button>
        </div>
        <div class="footer-note">最高分 ${Pt.hiScore.toLocaleString()} · 通关 ${Pt.cleared.length}/${Ue.length} 关 · 累计击落 ${Pt.totalKills}<br/>
        已解锁 ${n}/${Rn.length+yn.length} 名驾驶员与载具 · ${bn.filter(t=>Wo(t,{cleared:Pt.cleared,all:Pt.unlockAll})).length}/${bn.length} 种强化
        ${Pt.endlessWave?`<br/>无限挑战最高第 ${Pt.endlessWave} 波 · ${(Pt.endlessScore??0).toLocaleString()} 分`:""}${$o?" · 调试模式（B 跳 Boss，G 无敌）":""}</div>
      </div>
    </div>`),re("[data-a=start]",()=>{Ls="campaign",jn=!1,Xo()}),re("[data-a=practice]",()=>cd()),re("[data-a=endless]",()=>{Wr(Pt)&&(Ls="endless",jn=!1,Xo())}),re("[data-a=help]",()=>z3()),re("[data-a=codex]",()=>Rf()),re("[data-a=mute]",()=>{Pt.muted=!Pt.muted,ff(Pt.muted),Do(),In()}),re("[data-a=fx]",()=>{Pt.lowFx=!Pt.lowFx,Do(),od(),In()}),re("[data-a=story]",()=>{Pt.story=Pt.story===!1,Do(),In()}),re("[data-a=reset]",()=>{confirm("确定清空所有解锁进度和分数吗？")&&(Pt=o3(),vn.has("unlockall")&&(Pt.unlockAll=!0),In())})}let Ba="general";const iu=["common","rare","epic","legendary"];function Rf(){hs("none");const n={cleared:Pt.cleared,all:Pt.unlockAll},t=m=>Wo(m,n),e=m=>bn.find(v=>v.id===m),i=m=>`🔒 未解锁 · 通关第 ${(m.unlock??0)+1} 关后解锁`,s=m=>{var v;return(v=m.only)!=null&&v.pilot?`${Rn.find(p=>p.id===m.only.pilot).name}专属`:`${yn.find(p=>p.id===m.only.vehicle).name}专属`},r=(m,v)=>iu.indexOf(m.rarity)-iu.indexOf(v.rarity)||(m.unlock??-1)-(v.unlock??-1),o=bn.filter(m=>!m.only).sort(r),a=bn.filter(m=>m.only),c=m=>t(e(m.a))&&t(e(m.b)),l=m=>`
    <div class="cx-card ${m.rarity} ${m.only?"excl":""} ${t(m)?"":"locked"}">
      <div class="ic">${sr(m.id)}</div>
      <div class="bd">
        <div class="nm">${m.name}<span class="rr">${m.only?s(m):gf[m.rarity]}</span></div>
        <div class="ds">${m.desc}</div>
        <div class="ft">${t(m)?`等级上限 Lv${m.max}`:i(m)}</div>
      </div>
    </div>`,d=m=>{const v=e(m.a),p=e(m.b),g=[v,p].filter(M=>!t(M));return`
    <div class="cx-card combo ${c(m)?"":"locked"}">
      <div class="ic pair">${sr(v.id)}<b>+</b>${sr(p.id)}</div>
      <div class="bd">
        <div class="nm">${m.name}<span class="rr">联动</span></div>
        <div class="ds">${m.desc}</div>
        <div class="ft">${g.length?`🔒 未解锁 · 需先解锁${g.map(M=>`「${M.name}」`).join("")}`:`激活条件：同时持有「${v.name}」与「${p.name}」`}</div>
      </div>
    </div>`},h=m=>`${m.filter(t).length}/${m.length}`,f=[["general","通用强化",h(o)],["excl","专属强化",h(a)],["combo","联动",`${Cs.filter(c).length}/${Cs.length}`]],u=Ba==="general"?o.map(l):Ba==="excl"?a.map(l):Cs.map(d);Sn(`
    <div class="screen dim codex">
      <h2 class="title-h comic">图鉴</h2>
      <div class="cx-tabs">${f.map(([m,v,p])=>`<button class="cx-tab ${m===Ba?"on":""}" data-tab="${m}">${v}<i>${p}</i></button>`).join("")}</div>
      <div class="cx-list">${u.join("")}</div>
      <button class="btn" data-a="back">返回</button>
    </div>`),re("[data-tab]",m=>{Ba=m.dataset.tab,Rf()}),re("[data-a=back]",()=>In())}function z3(){hs("none"),Sn(`
    <div class="screen dim center">
      <h2 class="title-h comic">操作说明</h2>
      <div class="panel help">
        <p><b>移动：</b><kbd>WASD</kbd> / <kbd>方向键</kbd>；按住 <kbd>Shift</kbd> 精确慢速移动并显示判定点</p>
        <p><b>鼠标 / 触屏：</b>按住任意位置拖动，飞机跟随手指相对移动</p>
        <p><b>射击：</b>全自动连射</p>
        <p><b>大招：</b><kbd>X</kbd> / <kbd>K</kbd> / <kbd>空格</kbd> / 鼠标右键 / 右下角按钮 / 双指点击</p>
        <p><b>暂停：</b><kbd>Esc</kbd> / <kbd>P</kbd> / 右上角按钮</p>
        <hr/>
        <p><span class="tag" style="background:#e2492c;color:#fff">P</span>主武器火力升级：攒够几个升一级，最高 5 级，HUD 上的小方块是进度</p>
        <p><span class="tag" style="background:#2f8be0;color:#fff">M</span>副武器升级：攒够几个升一级，最高 3 级</p>
        <p><span class="tag" style="background:#f5b31b">B</span>大招次数 +1（击落敌机也会充能）</p>
        <p><span class="tag" style="background:#ffe14a">勋章</span>额外得分，靠近会自动吸附</p>
        <p>普通模式从第一关开始闯关，通关关卡会解锁新的驾驶员、载具和强化；20 关全部通关后开放<b>无限挑战</b>（随机关卡轮换，每 5 波一个 Boss，看你能撑多久）。进度保存在本机浏览器里。</p>
      </div>
      <button class="btn" data-a="back">返回</button>
    </div>`),re("[data-a=back]",()=>In())}function Pf(n){if(!n)return"";const[t,e]=n.progress(Pt);return`<p>🔒 解锁条件：${n.text}</p><div class="bar"><i style="width:${t/e*100}%"></i></div>
    <p style="text-align:right;font-size:11px">${t.toLocaleString()} / ${e.toLocaleString()}</p>`}function Lf(n,t,e,i,s,r){return`<div class="card ${s?"locked":""} ${r?"sel":""}" data-id="${n}">
    ${s?'<div class="lock">未解锁</div>':""}
    <div class="badge comic" style="background:${i}">${t[0]}</div>
    <div class="nm">${t}</div><div class="sub">${e}</div></div>`}function Xo(){ie="menu",qr(Zn.unlock)||(Zn=Rn[0]);const n=()=>{hs("pilot",Zn.id);const t=Zn,e=qr(t.unlock);Sn(`
      <div class="screen">
        <h2 class="title-h comic">选择驾驶员</h2>
        <div class="spacer"></div>
        <div class="hero-name comic">${t.name}！</div>
        <div class="panel">
          <h3>${t.name} <span style="font-size:13px;opacity:.7">「${t.title}」</span></h3>
          <p><span class="tag" style="background:${t.color};color:#fff">大招</span><b>${t.ult}</b> —— ${t.ultDesc}</p>
          <p>${t.passive}</p>
          ${e?"":Pf(t.unlock)}
        </div>
        <div class="cards">${Rn.map(i=>Lf(i.id,i.name,i.ult,i.color,!qr(i.unlock),i===t)).join("")}</div>
        <div class="btn-row">
          <button class="btn alt" data-a="back">返回</button>
          <button class="btn" data-a="next" ${e?"":"disabled"}>下一步</button>
        </div>
      </div>`),re(".card",i=>{Zn=Rn.find(s=>s.id===i.dataset.id),n()}),re("[data-a=back]",()=>jn?cd():In()),re("[data-a=next]",()=>If())};n()}function If(){qr(ws.unlock)||(ws=yn[0]);const n=e=>`<div class="pips">${[1,2,3,4,5].map(i=>`<b class="${i<=e?"on":""}"></b>`).join("")}</div>`,t=()=>{hs("vehicle",ws.id);const e=ws,i=qr(e.unlock);Sn(`
      <div class="screen">
        <h2 class="title-h comic">选择载具</h2>
        <div class="spacer"></div>
        <div class="panel">
          <h3>${e.name} <span style="font-size:13px;opacity:.7">「${e.role}」</span></h3>
          <p>${e.desc}</p>
          <p><span class="tag">主武器</span>${e.mainName} <span class="tag">副武器</span>${e.subName}</p>
          <div class="stats">
            <span>火力</span>${n(e.stats.fire)}<span>速度</span>${n(e.stats.speed)}
            <span>体型</span>${n(e.stats.size)}<span>耐久</span>${n(e.stats.armor)}
          </div>
          ${i?"":Pf(e.unlock)}
        </div>
        <div class="cards">${yn.map(s=>Lf(s.id,s.name,s.role,s.color,!qr(s.unlock),s===e)).join("")}</div>
        <div class="btn-row">
          <button class="btn alt" data-a="back">返回</button>
          <button class="btn" data-a="next" ${i?"":"disabled"}>出击！</button>
        </div>
      </div>`),re(".card",s=>{ws=yn.find(r=>r.id===s.dataset.id),t()}),re("[data-a=back]",()=>Xo()),re("[data-a=next]",()=>dr(Ls,jn?Jo:0))};t()}function cd(){ie="menu",jn=!0,Ls="campaign",hs("none"),Sn(`
    <div class="screen dim center">
      <h2 class="title-h comic">选关体验</h2>
      <div class="footer-note">开局满火力、满副武器、3 次大招，外加一套强化；成绩和解锁不写进存档</div>
      <div class="lvl-list">${Ue.map((n,t)=>`<div class="lvl ${t>=3?"hard":""}" data-lv="${t}">${n.name}<small>Boss：${n.bossName}${n.tip?` · ${n.tip.split("：")[0]}`:""}</small></div>`).join("")}</div>
      <button class="btn alt" data-a="back">返回</button>
    </div>`),re("[data-lv]",n=>{Jo=Number(n.dataset.lv),Xo()}),re("[data-a=back]",()=>{jn=!1,In()})}function D3(){it.power=5,it.sub=3,it.powerXp=it.subXp=0,it.ult=3;for(const n of k3)it.applyPerk(n,!0);Cn.callout("满配就绪！","milestone")}function dr(n,t=0){var i;Ls=n,Jo=t,hs("none"),Sn(""),jo(),n==="campaign"&&ds.setTheme(Ue[t].theme);const e=()=>{no.classList.remove("hidden"),Cn.clearTransient(),Cn.setUltName(Zn.ult),Cn.resetScore(),L0=I0=0,it.startRun({pilot:Zn,vehicle:ws,level:t,mode:n,cleared:Pt.cleared,allPerks:!!Pt.unlockAll||jn}),jn&&D3(),Br=0,Fi.reset(),ie="playing"};Qo()?(no.classList.add("hidden"),ie="story",yl(Ps,((i=ao[t])==null?void 0:i.intro)??[],ta(t)).then(e)):e()}function kf(){ie==="playing"&&(ie="paused",Sn(`
    <div class="screen dim center">
      <h2 class="title-h comic">暂停</h2>
      <div class="btn-col" style="margin:20px 0">
        <button class="btn" data-a="resume">继续</button>
        <button class="btn alt" data-a="retry">重新开始本局</button>
        <button class="btn red" data-a="quit">退出到标题</button>
      </div>
    </div>`),re("[data-a=resume]",()=>zf()),re("[data-a=retry]",()=>dr(Ls,Jo)),re("[data-a=quit]",()=>{jn||dd(null),In()}))}function zf(){Sn(""),Fi.reset(),ie="playing"}function U3(n){const t=vf(it.owned,n.id);if(t.length)return t.map(s=>`<div class="cb on"><i>可激活</i>「${s.name}」${s.desc}</div>`).join("");if(it.owned[n.id])return"";const e=V_(n.id)[0];if(!e)return"";const i=bn.find(s=>s.id===(e.a===n.id?e.b:e.a));return`<div class="cb"><i>联动</i>${n.name} + ${i.name} →「${e.name}」</div>`}function Df(n){if(ie!=="playing"||!n.length)return;ie="perk",Sn(`
    <div class="screen dim center">
      <h2 class="title-h comic" style="font-size:34px">选择一项强化！</h2>
      <div class="perk-cards">
        ${n.map(i=>`<div class="perk-card ${i.rarity} ${i.only?"excl":""}" data-perk="${i.id}">
          <div class="ic">${sr(i.id)}</div>
          <div><div class="nm">${i.name} <span class="lv">${it.owned[i.id]?`Lv${it.owned[i.id]} → Lv${it.owned[i.id]+1}`:""}</span></div><div class="ds">${i.desc}</div>${U3(i)}</div>
          <div class="rr">${i.only?i.only.pilot?"驾驶员专属":"载具专属":gf[i.rarity]}</div></div>`).join("")}
      </div>
      ${ol(it.owned).length?`<div class="combo-list">已激活联动：${ol(it.owned).map(i=>`<b>${i.name}</b>`).join("")}</div>`:""}
      <div class="footer-note" style="margin-top:8px">按 1 / 2 / 3 或点击选择</div>
    </div>`);const t=i=>{window.removeEventListener("keydown",e),Sn(""),ie="playing",it.applyPerk(i)},e=i=>{const s=["Digit1","Digit2","Digit3"].indexOf(i.code);s>=0&&n[s]&&t(n[s].id)};window.addEventListener("keydown",e),re("[data-perk]",i=>t(i.dataset.perk))}function dd(n){const t=[...Rn,...yn].filter(o=>to(o.unlock,Pt)),e=bn.filter(o=>Wo(o,{cleared:Pt.cleared})),i=Wr(Pt);it.mode==="endless"&&(Pt.endlessWave=Math.max(Pt.endlessWave??0,it.wave),Pt.endlessScore=Math.max(Pt.endlessScore??0,it.score)),Pt.totalScore+=it.score-L0,Pt.totalKills+=it.kills-I0,L0=it.score,I0=it.kills,Pt.hiScore=Math.max(Pt.hiScore,it.score),n!==null&&(Pt.cleared.includes(n)||Pt.cleared.push(n),Pt.reached=Math.max(Pt.reached,Math.min(n+1,Ue.length-1))),Do();const s=[];for(const o of[...Rn,...yn])t.includes(o)||!to(o.unlock,Pt)||("ult"in o?s.push({kind:"驾驶员",name:o.name,desc:`「${o.title}」大招：${o.ult}`,color:o.color,badge:o.name[0]}):s.push({kind:"战机",name:o.name,desc:`「${o.role}」${o.mainName} / ${o.subName}`,color:o.color,badge:o.name[0]}));const r=bn.filter(o=>!e.includes(o)&&Wo(o,{cleared:Pt.cleared}));return r.length&&s.push({kind:"强化",name:`${r.length} 种新强化`,desc:r.map(o=>o.name).join("、"),color:"#ff8a1f",badge:"强"}),!i&&Wr(Pt)&&s.push({kind:"模式",name:"无限挑战",desc:"随机关卡轮换，每 5 波一个 Boss",color:"#e2492c",badge:"∞"}),s}function N3(){const n=[];for(const i of[...Rn,...yn])i.unlock&&!to(i.unlock,Pt)&&n.push([i.unlock.level,`${"ult"in i?"驾驶员":"战机"}「${i.name}」`]);const t=new Map;for(const i of bn)i.unlock===void 0||Pt.cleared.includes(i.unlock)||t.set(i.unlock,[...t.get(i.unlock)??[],i.name]);for(const[i,s]of t)n.push([i,`强化「${s.slice(0,2).join("」「")}」${s.length>2?`等 ${s.length} 种`:""}`]);if(Wr(Pt)||n.push([Ue.length-1,"无限挑战"]),!n.length)return"";const e=Math.min(...n.map(i=>i[0]));return`下一个解锁：通关第 ${e+1} 关 → ${n.filter(i=>i[0]===e).map(i=>i[1]).join("、")}`}function Uf(n){const t=n.map(i=>`<div class="unlock-card">
      <div class="badge comic" style="background:${i.color}">${i.badge}</div>
      <div><div class="uk">🔓 新解锁 · ${i.kind}</div><div class="un">${i.name}</div><div class="ud">${i.desc}</div></div>
    </div>`).join(""),e=N3();return`${t}${e?`<div class="unlock-next">${e}</div>`:""}`}function F3(){var n;if(ie==="playing")if(jo(),Qo()){const t=it.level;ie="story";const e=[...((n=ao[t])==null?void 0:n.bossDown)??[],...t>=Ue.length-1?p3:[]];yl(Ps,e,ta(t)).then(su)}else su()}function su(){if(ie="result",jn)return Nf(!0);const n=it.level,t=5e3*(n+1),e=Math.max(0,it.lives)*2e3;it.score+=t+e;const i=dd(n),s=n>=Ue.length-1;Sn(`
    <div class="screen dim center">
      <h2 class="title-h comic" style="font-size:40px">${s?"全部通关！":"关卡完成！"}</h2>
      <div class="panel">
        <h3>${Ue[n].name}</h3>
        <div class="result-lines">
          <span>本关击落</span><span>${it.levelKills}</span>
          <span>最高连击</span><span>${it.maxCombo}</span>
          <span>擦弹</span><span>${it.grazes}</span>
          <span>通关奖励</span><span>+${t.toLocaleString()}</span>
          <span>剩余生命奖励</span><span>+${e.toLocaleString()}</span>
          <span>当前总分</span><span>${it.score.toLocaleString()}</span>
        </div>
        ${Uf(i)}
        ${s?'<p style="margin-top:8px">掠夺者之王的究极战机被击落，二十片天空全部重获自由。无限挑战已经开放，看看你能撑到第几波！</p>':""}
      </div>
      <div class="btn-row" style="margin-top:16px">
        ${s?"":'<button class="btn" data-a="next">下一关</button>'}
        <button class="btn alt" data-a="title">返回标题</button>
      </div>
    </div>`),re("[data-a=next]",()=>{var o;Sn(""),Cn.clearTransient(),ds.setTheme(Ue[n+1].theme);const r=()=>{it.cfg.cleared=Pt.cleared,it.startLevel(n+1),Br=0,Fi.reset(),ie="playing"};Qo()?(ie="story",yl(Ps,((o=ao[n+1])==null?void 0:o.intro)??[],ta(n+1)).then(r)):r()}),re("[data-a=title]",()=>In())}function Nf(n){const t=it.level,e=t>=Ue.length-1;Sn(`
    <div class="screen dim center">
      <h2 class="title-h comic" style="font-size:40px;${n?"":"color:#e2492c"}">${n?"体验完成！":"GAME OVER"}</h2>
      <div class="panel">
        <h3>${Ue[t].name}</h3>
        <div class="result-lines">
          <span>本关击落</span><span>${it.levelKills}</span>
          <span>最高连击</span><span>${it.maxCombo}</span>
          <span>擦弹</span><span>${it.grazes}</span>
          <span>得分</span><span>${it.score.toLocaleString()}</span>
        </div>
        <div class="footer-note" style="margin-top:6px">选关体验不记录成绩和解锁</div>
      </div>
      <div class="btn-row" style="margin-top:16px">
        <button class="btn" data-a="retry">再打一次</button>
        ${n&&!e?'<button class="btn alt" data-a="nextlv">下一关</button>':""}
      </div>
      <div class="btn-row">
        <button class="btn alt" data-a="pick">换一关</button>
        <button class="btn alt" data-a="title">返回标题</button>
      </div>
    </div>`),re("[data-a=retry]",()=>dr("campaign",t)),re("[data-a=nextlv]",()=>dr("campaign",t+1)),re("[data-a=pick]",()=>cd()),re("[data-a=title]",()=>{jn=!1,In()})}function O3(){if(ie!=="playing")return;if(ie="result",jo(),jn)return Nf(!1);const n=it.mode==="endless",t=Pt.endlessWave??0,e=dd(null);Sn(`
    <div class="screen dim center">
      <h2 class="title-h comic" style="font-size:44px;color:#e2492c">GAME OVER</h2>
      <div class="panel">
        ${n&&it.wave>t?'<div class="unlock-new">🏆 无限挑战新纪录！</div>':""}
        <div class="result-lines">
          ${n?`<span>坚持到</span><span>第 ${it.wave} 波</span><span>最高纪录</span><span>第 ${Pt.endlessWave} 波</span>`:`<span>到达关卡</span><span>${Ue[it.level].name}</span>`}
          <span>本局击落</span><span>${it.kills}</span>
          <span>最高连击</span><span>${it.maxCombo}</span>
          <span>最终得分</span><span>${it.score.toLocaleString()}</span>
          <span>最高分</span><span>${Pt.hiScore.toLocaleString()}</span>
        </div>
        ${Uf(e)}
      </div>
      <div class="btn-row" style="margin-top:16px">
        <button class="btn" data-a="retry">再来一局</button>
        <button class="btn alt" data-a="title">返回标题</button>
      </div>
    </div>`),re("[data-a=retry]",()=>dr(Ls,Jo)),re("[data-a=title]",()=>In())}let bc=performance.now(),Uo=60,Ha=0,Sc=0;const wc={t:0},Ec=new U;$o&&window.addEventListener("keydown",n=>{ie==="playing"&&(n.code==="KeyB"&&it.skipToBoss(),n.code==="KeyG"&&(it.god=!it.god))});function Ff(n){var i;requestAnimationFrame(Ff);const t=Math.min((n-bc)/1e3,1/30);if(Ha+=n-bc,Sc++,Ha>500&&(Uo=Sc*1e3/Ha,Ha=Sc=0),bc=n,wc.t+=t,ie==="playing"&&!Pt.lowFx&&document.visibilityState==="visible"&&(yc=Uo<45?yc+t:0,yc>4&&(Pt.lowFx=!0,Do(),od(),Cn.callout("已自动切换到流畅画质","perk"))),ie==="playing"){Fi.takePause()?kf():it.update(t);const s=Qo()?(i=ao[it.level])==null?void 0:i.radio:void 0;for(;s&&Br<s.length&&s[Br].t<=it.levelTime;)y3(Si,s[Br].line,ta(it.level)),Br++}else ie==="paused"?Fi.takePause()&&zf():Fi.takePause();const e=ie==="paused"?0:it.scroll;if(ds.update(t,e),ie==="fxdemo"?X3(t):ie==="showcase"?W3(t):ie!=="playing"&&ie!=="paused"&&rr.update(t,0),Es&&(Cf==="pilot"?Es.rotation.y=Af??Math.sin(wc.t*.9)*.55:Es.rotation.y+=t*.9,Es.position.y=Math.sin(wc.t*2)*.3),ji.visible&&(Xr==null||Xr.tick(t)),xn.position.copy(sd),it.shake>0&&(ie==="playing"||ie==="showcase")){const s=it.shake*.6;xn.position.x+=(Math.random()-.5)*s,xn.position.z+=(Math.random()-.5)*s}xn.lookAt(rd),Si.classList.contains("dark")&&(Ec.set(it.px,0,it.pz).project(xn),Si.style.setProperty("--lx",`${(Ec.x+1)/2*100}%`),Si.style.setProperty("--ly",`${(1-Ec.y)/2*100}%`)),is.info.reset(),ur.render(t),(ie==="playing"||ie==="paused"||ie==="perk"||ie==="story")&&Cn.update(it.hud(),Pt.hiScore,it.armor,Uo,t)}const ss=[...Rn.map(n=>({pilot:n,vehicle:yn[0],kind:"pilot",dur:n.id==="max"?6:10})),...yn.map(n=>({pilot:Rn[1],vehicle:n,kind:"vehicle",dur:7}))];let wi=0,$s=0,Co=!0,Ka=[],ja=5,Ja=3;const Xs={},B3=["dmg","rate","spread","pierce","crit","homing","sub","drone","shock","chain","rear","nova","ultpow"];function Ro(){const n=ss[wi];it.power=ja,it.sub=Ja,it.mods=T0(),it.owned={},it.comboOn={};for(const t of bn)if(!(t.only&&t.only.pilot!==n.pilot.id&&t.only.vehicle!==n.vehicle.id))for(let e=0;e<(Xs[t.id]??0);e++)it.applyPerk(t.id);it.armor=it.maxArmor(),it.invuln=0}function H3(n){const t=it.bounds,e=(Math.random()-.5)*(t.right-t.left-5),i=t.top+9+Math.random()*6;let s=.6+Math.random();it.addEnemy({kind:Math.random()<.5?"drone":"swooper",tint:0,x:e,z:t.top-2,hp:14,hw:1,hd:.8,score:100,update(r,o){r.z+=(i-r.z)*Math.min(1,o*2),r.x=e+Math.sin(r.t*.9+e)*1.5,n&&(s-=o,s<=0&&r.t>1&&(s=1.6,it.ring(r.x,r.z,8,3.2,r.t,16726992)))}})}function cl(n){wi=(n+ss.length)%ss.length,$s=0;const t=ss[wi];it.scripted=!1,it.startRun({pilot:t.pilot,vehicle:t.vehicle,level:0}),it.god=!0,Ro(),t.kind==="pilot"&&(it.ult=3),Ka=t.kind==="pilot"?[1.2]:[],ds.setTheme(["desert","ocean","factory","snow","neon","crystal","clouds","space"][wi]),zr()}function V3(){const n=ss[wi],t=bn.filter(e=>e.only&&(e.only.pilot===n.pilot.id||e.only.vehicle===n.vehicle.id)).map(e=>e.id);return[...B3,...t]}function zr(){const n=ss[wi],t=n.pilot,e=n.vehicle,i=r=>`<div class="pips">${[1,2,3,4,5].map(o=>`<b class="${o<=r?"on":""}"></b>`).join("")}</div>`,s=n.kind==="pilot"?`<h3><span class="sc-badge" style="background:${t.color}">${t.name[0]}</span>${t.name} <small>「${t.title}」</small></h3>
       <p><span class="tag" style="background:${t.color};color:#fff">大招</span><b>${t.ult}</b> —— ${t.ultDesc}</p>
       <p>${t.passive}</p>`:`<h3><span class="sc-badge" style="background:${e.color}">${e.name[0]}</span>${e.name} <small>「${e.role}」</small></h3>
       <p>${e.desc}</p>
       <p><span class="tag">主武器</span>${e.mainName} <span class="tag">副武器</span>${e.subName}</p>
       <div class="stats"><span>火力</span>${i(e.stats.fire)}<span>速度</span>${i(e.stats.speed)}<span>体型</span>${i(e.stats.size)}<span>耐久</span>${i(e.stats.armor)}</div>`;Sn(`
    <div class="sc">
      <div class="sc-bar">
        <div class="sc-tabs">
          <span class="sc-group">驾驶员</span>${ss.map((r,o)=>r.kind==="pilot"?`<button class="btn alt small ${o===wi?"on":""}" data-sc="${o}">${r.pilot.name}</button>`:"").join("")}
          <span class="sc-group">战机</span>${ss.map((r,o)=>r.kind==="vehicle"?`<button class="btn alt small ${o===wi?"on":""}" data-sc="${o}">${r.vehicle.name}</button>`:"").join("")}
        </div>
        <div class="sc-tabs">
          <span class="sc-group">主武器</span>${[1,2,3,4,5].map(r=>`<button class="btn alt small ${r===ja?"on":""}" data-pw="${r}">${r}</button>`).join("")}
          <span class="sc-group">副武器</span>${[1,2,3].map(r=>`<button class="btn alt small ${r===Ja?"on":""}" data-sw="${r}">${r}</button>`).join("")}
        </div>
        <div class="sc-perks">
          <span class="sc-group">强化</span>${V3().map(r=>{const o=bn.find(c=>c.id===r),a=Xs[r]??0;return`<button class="sc-perk ${a?"on":""} ${o.only?"excl":""}" data-pk="${r}" title="${o.name}：${o.desc}（点击升级，满级后归零）">${sr(r)}<span>${o.name}</span><b>${a}/${o.max}</b></button>`}).join("")}
          <button class="btn alt small" data-a="clearperks">清空</button>
        </div>
        ${ol(it.owned).length?`<div class="sc-combos">已激活联动：${ol(it.owned).map(r=>`<b title="${r.desc}">${r.name}</b>`).join("")}</div>`:""}
        <div class="sc-tabs">
          <button class="btn alt small" data-a="replay">重播</button>
          <button class="btn alt small ${Co?"on":""}" data-a="auto">自动轮播：${Co?"开":"关"}</button>
          <button class="btn alt small" data-a="exit">回游戏</button>
        </div>
      </div>
      <div class="panel sc-info">${s}<p class="sc-note">${n.kind==="pilot"?"演示用游隼，开场 1 秒自动放大招 · ":""}主武器 ${ja} 级 · 副武器 ${Ja} 级${Object.values(Xs).some(r=>r)?" · 已加强化":""}</p></div>
    </div>`),re("[data-sc]",r=>cl(Number(r.dataset.sc))),re("[data-pw]",r=>{ja=Number(r.dataset.pw),Ro(),zr()}),re("[data-sw]",r=>{Ja=Number(r.dataset.sw),Ro(),zr()}),re("[data-pk]",r=>{const o=bn.find(a=>a.id===r.dataset.pk);Xs[o.id]=((Xs[o.id]??0)+1)%(o.max+1),Ro(),zr()}),re("[data-a=clearperks]",()=>{for(const r of Object.keys(Xs))delete Xs[r];Ro(),zr()}),re("[data-a=replay]",()=>cl(wi)),re("[data-a=auto]",()=>{Co=!Co,zr()}),re("[data-a=exit]",()=>{history.replaceState(null,"",location.pathname),it.scripted=!0,it.stop(),In()})}function G3(){ie="showcase",no.classList.add("hidden"),hs("none"),cl(0)}function W3(n){const t=ss[wi];$s+=n;const e=it.bounds;it.px=Math.sin($s*.7)*3.5;const i=e.bottom-8.5;it.pz=t.pilot.id==="anvil"&&t.kind==="pilot"&&$s>1.2?i-(.5-.5*Math.cos(($s-1.2)*1.3))*(i-e.top-8):i,Ka.length&&$s>=Ka[0]&&(Ka.shift(),Fi.queueUlt());let s=0;for(const r of it.enemies)r.dead||s++;s<7&&Math.random()<n*6&&H3(t.kind==="pilot"),it.update(n),Co&&$s>t.dur&&cl(wi+1)}const Of=[{name:"多形状碎片",desc:"薄板 / 细杆 / 三角楔混合，大爆炸会甩出大块装甲",x:-4.3,zk:.3,play:(n,t)=>rr.shards(n,t,2,12597547,16764735)},{name:"火星余烬",desc:"发光小火星向外飘散，闪烁着熄灭",x:4.3,zk:.3,play:(n,t)=>rr.embers(n,t,2)},{name:"完整组合（大型敌机）",desc:"火球 + 碎片 + 余烬，就是游戏里击落炮艇的样子",x:0,zk:.72,play:(n,t)=>rr.explode(n,t,2.2,12597547,16764735)}];let k0=1,Qa=!1,tl=0;function Bf(n){const t=it.bounds;return[n.x,t.top+(t.bottom-t.top)*n.zk]}function $3(){ie="fxdemo",it.stop(),no.classList.add("hidden"),hs("none"),ds.setTheme("desert");const n=()=>{Sn(`
      <div class="fxdemo">
        <div class="fxdemo-bar">
          <b>爆炸特效预览</b>
          ${[1,.5,.25].map(t=>`<button class="btn alt small ${t===k0?"on":""}" data-speed="${t}">${t===1?"原速":`${t}×`}</button>`).join("")}
          <button class="btn alt small" data-a="pause">${Qa?"继续":"暂停"}</button>
          <button class="btn alt small" data-a="exit">回游戏</button>
        </div>
        ${Of.map(t=>{const[e,i]=Bf(t),[s,r]=P0(e,i+3.2);return`<div class="fxdemo-label" style="left:${s}px;top:${r}px"><b>${t.name}</b><span>${t.desc}</span></div>`}).join("")}
      </div>`),re("[data-speed]",t=>{k0=Number(t.dataset.speed),n()}),re("[data-a=pause]",()=>{Qa=!Qa,n()}),re("[data-a=exit]",()=>{history.replaceState(null,"",location.pathname),rr.clear(),In()})};n(),window.addEventListener("resize",()=>ie==="fxdemo"&&n()),tl=0}function X3(n){if(Qa)return;const t=n*k0;if(tl-=t,tl<=0){tl=2.2;for(const e of Of){const[i,s]=Bf(e);e.play(i,s)}}rr.update(t,0)}vn.has("fxdemo")?$3():vn.has("showcase")?G3():In();requestAnimationFrame(Ff);Object.assign(window,{__game:it,__fps:()=>Uo,__save:()=>Pt});if($o){Object.assign(window,{__start:(t,e,i,s="campaign")=>{Zn=Rn.find(r=>r.id===t),ws=yn.find(r=>r.id===e),dr(s,i)},__step:(t,e=0)=>{let i=0,s=0;for(let r=0;r<t*60&&(ie==="playing"||ie==="perk");r++)if(ie==="perk"&&Ps.querySelector("[data-perk]").click(),it.update(1/60),ds.update(1/60,it.scroll),e&&r%e===0){const o=performance.now();is.info.reset(),ur.render(1/60),i+=performance.now()-o,s++}return Cn.update(it.hud(),Pt.hiScore,it.armor,Uo),{app:ie,renderMsAvg:s?i/s:0,calls:is.info.render.calls,tris:is.info.render.triangles}},__click:t=>{var e;return(e=Ps.querySelector(t))==null?void 0:e.click()}});const n=vn.get("show");if(n){const[t,e]=n.split(":");vn.has("yaw")&&(Af=Number(vn.get("yaw"))),t==="pilot"?(Zn=Rn.find(i=>i.id===e)??Rn[0],Pt.unlockAll=!0,Xo()):t==="vehicle"&&(ws=yn.find(i=>i.id===e)??yn[0],Pt.unlockAll=!0,If())}if(vn.has("demo")){if(Zn=Rn[1],dr(vn.has("endless")?"endless":"campaign",Number(vn.get("demo"))||0),it.god=!0,it.power=4,it.sub=2,vn.has("boss")&&it.skipToBoss(),vn.has("perks"))for(const e of["drone","drone","chain","crit"])it.applyPerk(e);const t=Number(vn.get("step")||0);for(let e=0;e<t*60;e++)it.boss&&(it.px+=(it.boss.x-it.px)*.05),it.update(1/60);vn.has("perkui")&&Df(xf(it.owned,it.perkCtx))}}
