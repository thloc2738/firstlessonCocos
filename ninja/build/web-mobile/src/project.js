window.__require=function t(e,n,i){function s(c,o){if(!n[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var h="function"==typeof __require&&__require;if(!o&&h)return h(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+c+"'")}}var u=n[c]={exports:{}};e[c][0].call(u.exports,function(t){return s(e[c][1][t]||t)},u,u.exports,t,e,n,i)}return n[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<i.length;c++)s(i[c]);return s}({1:[function(t,e,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function s(t){return"function"==typeof t}function r(t){return"number"==typeof t}function c(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(t){if(!r(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},i.prototype.emit=function(t){var e,n,i,r,a,h;if(this._events||(this._events={}),"error"===t&&(!this._events.error||c(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var u=new Error('Uncaught, unspecified "error" event. ('+e+")");throw u.context=e,u}if(o(n=this._events[t]))return!1;if(s(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:r=Array.prototype.slice.call(arguments,1),n.apply(this,r)}else if(c(n))for(r=Array.prototype.slice.call(arguments,1),i=(h=n.slice()).length,a=0;a<i;a++)h[a].apply(this,r);return!0},i.prototype.addListener=function(t,e){var n;if(!s(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,s(e.listener)?e.listener:e),this._events[t]?c(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,c(this._events[t])&&!this._events[t].warned&&(n=o(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(t,e){if(!s(e))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(t,i),n||(n=!0,e.apply(this,arguments))}return i.listener=e,this.on(t,i),this},i.prototype.removeListener=function(t,e){var n,i,r,o;if(!s(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(r=(n=this._events[t]).length,i=-1,n===e||s(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(c(n)){for(o=r;o-- >0;)if(n[o]===e||n[o].listener&&n[o].listener===e){i=o;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},i.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(s(n=this._events[t]))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},i.prototype.listeners=function(t){return this._events&&this._events[t]?s(this._events[t])?[this._events[t]]:this._events[t].slice():[]},i.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(s(e))return 1;if(e)return e.length}return 0},i.listenerCount=function(t,e){return t.listenerCount(e)}},{}],controller:[function(t,e,n){"use strict";cc._RF.push(e,"faee7MMkyhEW7BMSrk0TJAh","controller");var i=t("registerEvent");cc.Class({extends:cc.Component,properties:{target:cc.Node,spAnim:sp.Skeleton,walkSound:cc.AudioSource,leftBtnAc:cc.Button,rightBtnAc:cc.Button,jumpBtnAc:cc.Button,leftBtnTw:cc.Button,rightBtnTw:cc.Button,jumpBtnTw:cc.Button},onLoad:function(){var t=this;cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.left_Move,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.right_Move,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.jump_move,this),this.leftBtnAc.node.on("click",this.left_Action,this),this.rightBtnAc.node.on("click",this.right_Action,this),this.jumpBtnAc.node.on("click",this.jump_Action,this),this.leftBtnTw.node.on("click",this.left_Tween,this),this.rightBtnTw.node.on("click",this.right_Tween,this),this.jumpBtnTw.node.on("click",this.jump_Tween,this),this.target.x=560,this.target.y=80,this.spAnim.setEventListener(function(e,n){"footstep"==n.data.name&&t.walkSound.play()})},start:function(){this.spAnim.addAnimation(0,"run",!0)},left_Action:function(){i.instance.emit("LeftAction")},right_Action:function(){i.instance.emit("RightAction")},jump_Action:function(){i.instance.emit("JumpAction")},left_Tween:function(){i.instance.emit("LeftTween")},right_Tween:function(){i.instance.emit("RightTween")},jump_Tween:function(){i.instance.emit("JumpTween")},jump_move:function(t){switch(t.keyCode){case cc.macro.KEY.space:i.instance.emit("JumpAction"),cc.log("red")}},left_Move:function(t){switch(t.keyCode){case cc.macro.KEY.left:i.instance.emit("LeftAction")}},right_Move:function(t){switch(t.keyCode){case cc.macro.KEY.right:i.instance.emit("RightAction")}},resetBtn:function(){this.leftBtnAc.interactable=value,this.rightBtnA.interactable=value,this.jumpBtnAc.interactable=value,this.leftBtnTw.interactable=value,this.rightBtnTw.interactable=value,this.jumpBtnTw.interactable=value}}),cc._RF.pop()},{registerEvent:"registerEvent"}],keyboard:[function(t,e,n){"use strict";cc._RF.push(e,"9d514b3xUBJg44OrHwXqOPI","keyboard");var i=t("registerEvent");cc.Class({extends:cc.Component,properties:{target:cc.Node},onLoad:function(){var t=this.goLeft.bind(this),e=this.goRight.bind(this),n=this.goJump.bind(this);i.instance=new i,i.instance.registerEvent("MOVE_LEFT",t),i.instance.registerEvent("MOVE_RIGHT",e),i.instance.registerEvent("MOVE_JUMP",n)},onDisable:function(){i.instance.removeEvent("MOVE_RIGHT",move_Left),i.instance.removeEvent("MOVE_LEFT",move_Left),i.instance.removeEvent("MOVE_JUMP",move_Right)},test:function(){cc.log("test")},goLeft:function(){if(cc.log("123"),this.target.scaleX=-.2,this.target.scaleY=.2,this.target.x<=45)this.target.x=45;else{var t=cc.moveBy(.5,-100,0);this.target.runAction(t)}},goRight:function(){if(this.target.scaleX=.2,this.target.scaleY=.2,this.target.x>=1085)this.target.x=1085;else{var t=cc.moveBy(.5,100,0);this.target.runAction(t)}},goJump:function(){var t=this.target.getComponent("sp.Skeleton");if(t.setAnimation(0,"jump",!1),t.addAnimation(0,"run",!0),this.target.scaleX>0)if(this.target.x<=60)this.target.x=60;else{var e=cc.sequence(cc.moveBy(.4,50,50),cc.moveBy(.4,25,-50));this.target.runAction(e)}else if(this.target.x>=1060)this.target.x=1060;else{e=cc.sequence(cc.moveBy(.4,-50,50),cc.moveBy(.4,-25,-50));this.target.runAction(e)}}}),cc._RF.pop()},{registerEvent:"registerEvent"}],mouseclick:[function(t,e,n){"use strict";cc._RF.push(e,"f86c1A0JltKYLNmGvxE2UZh","mouseclick");var i=t("registerEvent");cc.Class({extends:cc.Component,properties:{leftBtnAc:cc.Button,rightBtnAc:cc.Button,jumpBtnAc:cc.Button,leftBtnTw:cc.Button,rightBtnTw:cc.Button,jumpBtnTw:cc.Button,target:cc.Node},onLoad:function(){i.instance=new i;var t=this.goLeftAction.bind(this),e=this.goRighAction.bind(this),n=this.goJumpAction.bind(this);i.instance.registerEvent("LeftAction",t),i.instance.registerEvent("RightAction",e),i.instance.registerEvent("JumpAction",n);var s=this.goLeftTween.bind(this),r=this.goRightTween.bind(this),c=this.goJumpTween.bind(this);i.instance.registerEvent("LeftTween",s),i.instance.registerEvent("RightTween",r),i.instance.registerEvent("JumpTween",c)},goLeftAction:function(){var t=this;if(this.resetBtn(!1),this.target.scaleX=-.2,this.target.scaleY=.2,this.target.x<=45)this.target.x=45;else{var e=cc.sequence(cc.moveBy(.5,-100,0),cc.callFunc(function(){t.resetBtn(!0)}));this.target.runAction(e)}},goRighAction:function(){var t=this;if(this.resetBtn(!1),this.target.scaleX=.2,this.target.scaleY=.2,this.target.x>=1085)this.target.x=1085;else{var e=cc.sequence(cc.moveBy(.5,100,0),cc.callFunc(function(){t.resetBtn(!0)}));this.target.runAction(e)}},goJumpAction:function(){var t=this;this.resetBtn(!1);var e=this.target.getComponent("sp.Skeleton");if(e.setAnimation(0,"jump",!1),e.addAnimation(0,"run",!0),this.target.scaleX>0)if(cc.log("left"),this.target.x>=1060)this.target.x=1060;else{var n=cc.sequence(cc.moveBy(.4,50,50),cc.moveBy(.4,25,-50),cc.callFunc(function(){t.resetBtn(!0)}));this.target.runAction(n)}else if(this.target.x<=60)this.target.x=60;else{n=cc.sequence(cc.moveBy(.4,-50,50),cc.moveBy(.4,-25,-50),cc.callFunc(function(){t.resetBtn(!0)}));this.target.runAction(n),this.resetBtn(!0)}},goLeftTween:function(){var t=this;this.resetBtn(!1),this.target.scaleX=-.2,this.target.x<=45?this.target.x=45:cc.tween(this.target).by(.4,{position:cc.v2(-100,0)}).call(function(){t.resetBtn(!0)}).start()},goRightTween:function(){var t=this;this.resetBtn(!1),this.target.scaleX=-.2,this.target.x>=1085?this.target.x=1085:(this.target.scaleX=.2,cc.tween(this.target).by(.4,{position:cc.v2(100,0)}).call(function(){t.resetBtn(!0)}).start())},goJumpTween:function(){var t=this;this.resetBtn(!1);var e=this.target.getComponent("sp.Skeleton");e.setAnimation(0,"jump",!1),e.addAnimation(0,"run",!0),this.target.scaleX>0?this.target.x>=1060?this.target.x=1060:cc.tween(this.target).by(.4,{position:cc.v2(50,50)}).by(.4,{position:cc.v2(25,-50)}).call(function(){t.resetBtn(!0)}).start():this.target.x<=60?this.target.x=60:cc.tween(this.target).by(.4,{position:cc.v2(-50,50)}).by(.4,{position:cc.v2(-25,-50)}).call(function(){t.resetBtn(!0)}).start()},resetBtn:function(t){this.leftBtnAc.interactable=t,this.rightBtnAc.interactable=t,this.jumpBtnAc.interactable=t,this.leftBtnTw.interactable=t,this.rightBtnTw.interactable=t,this.jumpBtnTw.interactable=t}}),cc._RF.pop()},{registerEvent:"registerEvent"}],registerEvent:[function(t,e,n){"use strict";cc._RF.push(e,"1f468wVMDJKL60iJQJzPk8C","registerEvent");var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=t("events"),c=function(){function t(){s(this,t),this._emiter=new r,this._emiter.setMaxListeners(100)}return i(t,[{key:"emit",value:function(){var t;(t=this._emiter).emit.apply(t,arguments)}},{key:"registerEvent",value:function(t,e){this._emiter.on(t,e)}},{key:"registerOnce",value:function(t,e){this._emiter.once(t,e)}},{key:"removeEvent",value:function(t,e){this._emiter.removeListener(t,e)}},{key:"destroy",value:function(){this._emiter.removeAllListeners(),this._emiter=null,t.instance=null}}]),t}();c.instance=null,e.exports=c,cc._RF.pop()},{events:1}]},{},["controller","keyboard","mouseclick","registerEvent"]);