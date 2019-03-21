(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Panorama=e():t.Panorama=e()})(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(t,e,i){var n=i(2)(i(1),i(3),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={source:{type:String,default:null},caption:{type:String,default:null},repeat:{type:Boolean,default:!0},direction:{type:String,default:"horizontal"},animationTime:{type:Number,default:700},easing:{type:String,default:"ease-out"}};e.default={name:"Panorama",props:n,data:function(){return{ready:!1,width:200,height:100,imageWidth:200,imageHeight:100}},computed:{styling:function(){var t="no-repeat";return 1==this.repeat&&(t="repeat"),{backgroundImage:"url("+this.source+") ",backgroundRepeat:t,transition:"background "+this.animationTime+"ms "+this.easing,position:"relative",float:"left",width:"100%",height:"100%",minHeight:"100px",backgroundSize:"auto "+this.height+"px",cursor:"move"}},loaderStyling:function(){return{position:"absolute",top:"50%",left:"50%",marginLeft:"-30px",marginRight:"-9px",backgroundColor:"white"}},captionStyling:function(){return{padding:"10px 10px",width:"100%",background:"rgba(0,0,0,0.2)",color:"white",textAlign:"center",position:"absolute",bottom:0}}},mounted:function(){this.init()},beforeDestroy:function(){},methods:{init:function(){var t=this;if(!this.source)return void console.error("Image source is not defined!");var e=this;this.width=this.$el.clientWidth,this.height=this.$el.clientHeight,this.image=new Image,this.image.src=this.source,this.image.onload=function(){e.imageWidth=e.image.naturalWidth,e.imageHeight=e.image.naturalHeight;var i=e.$el,n={w:parseInt(i.clientWidth),h:parseInt(i.clientHeight)};t.width,t.height;t.origin={x:0,y:0},t.start={x:0,y:0},t.movecontinue=!1,e.ready=!0,e.$emit("load")}},touchHandler:function(t){var e=t.changedTouches,i=e[0],n="";switch(t.type){case"touchstart":n="mousedown";break;case"touchmove":n="mousemove";break;case"touchend":n="mouseup";break;default:return}var o=document.createEvent("MouseEvent"),r=2;navigator.userAgent.match(/Android/i)&&(r=10),o.initMouseEvent(n,!0,!0,window,1,i.screenX,i.screenY,i.clientX*r,i.clientY*r,!1,!1,!1,!1,0,null),i.target.dispatchEvent(o)},move:function(t){var e={x:!1,y:!1},i={x:this.start.x-(this.origin.x-t.clientX),y:this.start.y-(this.origin.y-t.clientY)};return"horizontal"==this.direction?(1==this.repeat?e.x=!0:e.x=i.x<0&&-1*i.x<bounds.w,this.movecontinue&&e.x&&(this.start.x=i.x,this.start.y=0)):(1==this.repeat?e.y=!0:e.y=i.y<0&&-1*i.y<bounds.h,this.movecontinue&&e.y&&(this.start.y=i.y,this.start.x=0)),this.change(this.start.x,this.start.y),this.origin.x=t.clientX,this.origin.y=t.clientY,t.stopPropagation(),!1},handle:function(t){return this.movecontinue=!1,this.$el.omousemove=null,"mousedown"==t.type&&(this.origin.x=t.clientX,this.origin.y=t.clientY,this.movecontinue=!0,this.$el.onmousemove=this.move),t.stopPropagation(),!1},reset:function(){this.change(0,0)},change:function(t,e){this.start={x:t,y:e},this.$el.style.backgroundPosition=t+"px "+e+"px",this.$emit("viewchange",this.getView())},setRotation:function(t){var e=this.width*t/360;this.change(e,0)},getView:function(){var t=360*this.start.x/this.width;return{x:this.start.x,y:this.start.y,angle:t,width:this.width,height:this.height,imageWidth:this.imageWidth,imageHeight:this.imageHeight}}}}},function(t,e){t.exports=function(t,e,i,n){var o,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=s.computed||(s.computed={});Object.keys(n).forEach(function(t){var e=n[t];u[t]=function(){return e}})}return{esModule:o,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panorama pv-container pv-animating",class:{"pv-vertival":"vertical"===t.direction},style:t.styling,on:{touchstart:t.touchHandler,touchmove:t.touchHandler,touchend:t.touchHandler,mousedown:t.handle,mouseup:t.handle,mouseleave:t.handle}},[t.caption&&t.ready?i("div",{staticClass:"pv-caption",style:t.captionStyling},[t._v(t._s(t.caption))]):t._e(),t._v(" "),t.ready?t._e():i("div",{staticClass:"pv-loader",style:t.loaderStyling},[t._v("Loading...")])])},staticRenderFns:[]}},function(t,e,i){t.exports=i(0)}])});
//# sourceMappingURL=Panorama.js.map