window.__require=function e(t,i,n){function c(o,r){if(!i[o]){if(!t[o]){var l=o.split("/");if(l=l[l.length-1],!t[l]){var h="function"==typeof __require&&__require;if(!r&&h)return h(l,!0);if(s)return s(l,!0);throw new Error("Cannot find module '"+o+"'")}}var a=i[o]={exports:{}};t[o][0].call(a.exports,function(e){return c(t[o][1][e]||e)},a,a.exports,e,t,i,n)}return i[o].exports}for(var s="function"==typeof __require&&__require,o=0;o<n.length;o++)c(n[o]);return c}({1:[function(e,t,i){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function c(e){return"function"==typeof e}function s(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function r(e){return void 0===e}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!s(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,i,n,s,l,h;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var a=new Error('Uncaught, unspecified "error" event. ('+t+")");throw a.context=t,a}if(r(i=this._events[e]))return!1;if(c(i))switch(arguments.length){case 1:i.call(this);break;case 2:i.call(this,arguments[1]);break;case 3:i.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),i.apply(this,s)}else if(o(i))for(s=Array.prototype.slice.call(arguments,1),n=(h=i.slice()).length,l=0;l<n;l++)h[l].apply(this,s);return!0},n.prototype.addListener=function(e,t){var i;if(!c(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,c(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(i=r(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!c(t))throw TypeError("listener must be a function");var i=!1;function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments))}return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var i,n,s,r;if(!c(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=(i=this._events[e]).length,n=-1,i===t||c(i.listener)&&i.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(i)){for(r=s;r-- >0;)if(i[r]===t||i[r].listener&&i[r].listener===t){n=r;break}if(n<0)return this;1===i.length?(i.length=0,delete this._events[e]):i.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,i;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(c(i=this._events[e]))this.removeListener(e,i);else if(i)for(;i.length;)this.removeListener(e,i[i.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?c(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(c(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},{}],controller:[function(e,t,i){"use strict";cc._RF.push(t,"7bc839/UlhNaav7f6bY+f/x","controller");var n=e("registerEvent");cc.Class({extends:cc.Component,properties:{mainScene:cc.Node,item:cc.Prefab,emptyPrefab:cc.Prefab,listFlag:[],boxLayout:cc.Layout,xyPosition:[],fillTable:[],checkList:[],isFill:[],_count:0,arr:[],score:cc.Label,bestScore:cc.Label,moveSound:cc.AudioSource,clickSound:cc.AudioSource,_blockLeft:!1,_blockRight:!1,_blockUp:!1,_blockDown:!1,arrFrame:[cc.SpriteFrame],aniFlag:!0,topRank:cc.Layout,topRankPrefabs:cc.Prefab,topScore:cc.Node,scoreEnd:cc.Label,gameOverPopUp:cc.Node,gameOverTrans:cc.Node,_topPlay:0,yourScore:cc.Label,yourScoreWin:cc.Label,_blockMove:!1,winnerPopUp:cc.Node,_testwin:2048},createTable:function(){for(var e=0;e<16;e++){var t=void 0,i=void 0,n=void 0;e%4==0?(t=-232,i=245+e/4*-155,n=cc.v3(t,i,0)):e%4==1?(t=-77,i=245+(e-1)/4*-155,n=cc.v3(t,i,0)):e%4==2?(t=77,i=245+(e-2)/4*-155,n=cc.v3(t,i,0)):e%4==3&&(t=232,i=245+(e-3)/4*-155,n=cc.v3(t,i,0)),this.xyPosition.push(n)}cc.log(this.xyPosition)},onLoad:function(){n.instance=new n,n.instance.registerEvent("MOVELEFT",this.swipeLeft.bind(this)),n.instance.registerEvent("MOVERIGHT",this.swipeRight.bind(this)),n.instance.registerEvent("MOVEUP",this.swipeUp.bind(this)),n.instance.registerEvent("MOVEDOWN",this.swipeDown.bind(this)),n.instance.registerEvent("RESETGAME",this.resetGame.bind(this)),n.instance.registerEvent("ONMOVESOUND",this.onMoveSound.bind(this)),n.instance.registerEvent("OFFMOVESOUND",this.offMoveSound.bind(this)),parseInt(this.bestScore.string)<=cc.sys.localStorage.getItem("Score")&&(this.bestScore.string=cc.sys.localStorage.getItem("Score")),this.emptyTable(this.isFill,0),this.emptyTable(this.checkList,0),cc.log(this.isFill),this.createTable(),this.createPrefabsTable(this.mainScene,this.emptyPrefab),this.addItemInBox(this.isFill),this.addItemInBox(this.isFill),this._blockMove||cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.move2048,this)},winnerGame:function(){if(!this._blockMove){this.winnerPopUp.x=380,this.winnerPopUp.y=1670,this.winnerPopUp.scale=1;var e=cc.instantiate(this.topRankPrefabs);e.getChildByName("name").getComponent(cc.Label).string="Top "+ ++this._topPlay+": ",e.getChildByName("score").getComponent(cc.Label).string=parseInt(this.score.string),this.topRank.node.addChild(e),this.checkTopRank(this.topRank.node,this.score.string),this.yourScoreWin.string=this.score.string,this.gameOverTrans.active=!0,this.winnerPopUp.active=!0,cc.log("CONGLATULATION");var t=cc.moveTo(1,380,640);t.easing(cc.easeBounceOut(1)),this.winnerPopUp.runAction(t),cc.sys.localStorage.setItem("Score",JSON.stringify(parseInt(this.score.string))),cc.log(JSON.parse(cc.sys.localStorage.getItem("Score"))),this._blockMove=!0}},onMoveSound:function(){this.moveSound.volume=1},offMoveSound:function(){this.moveSound.volume=0},resetGame:function(){this._blockMove=!1,this.mainScene.enabled=!0,this.gameOverPopUp.active=!1,this.gameOverTrans.active=!1,this.clickSound.play();for(var e=0;e<this.isFill.length;e++)this.isFill[e]=0,this.checkList[e]=0;for(var t=0;t<this.fillTable.length;t++)this.fillTable[t].removeChild(this.fillTable[t].children[1]);this.addItemInBox(this.isFill),this.addItemInBox(this.isFill),this.score.string=parseInt(0),this._blockDown=!1,this._blockLeft=!1,this._blockRight=!1,this._blockUp=!1},createItem:function(e){return this.mainScene.children[e].addChild(cc.instantiate(this.item)),this.mainScene.children[e].children[1].getChildByName("numb").getComponent(cc.Label).string=2,this.mainScene.children[e].children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[0],this.mainScene.children[e].position=this.xyPosition[e],this.isFill[e]=2,cc.tween(this.mainScene.children[e].children[1]).to(.5,{scale:1}).start(),this._count++,this.fillTable[e]=this.mainScene.children[e],this.mainScene.children[e]},setColor:function(e){2==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[0]:4==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[1]:8==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[2]:16==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[3]:32==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[4]:64==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[5]:128==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[6]:256==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[7]:512==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[8]:1024==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[9]:2048==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[10]:4096==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[11]:8192==e.children[1].getChildByName("numb").getComponent(cc.Label).string?e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[12]:16386==e.children[1].getChildByName("numb").getComponent(cc.Label).string&&(e.children[1].getComponent(cc.Sprite).spriteFrame=this.arrFrame[13])},addItemInBox:function(e){if(this.checkAddItem()){var t=void 0;do{t=Math.floor(16*Math.random())}while(0!=e[t]);this.createItem(t)}},checkAddItem:function(){for(var e=0;e<this.isFill.length;e++)if(0==this.isFill[e])return!0;return!1},swipeRight:function(){this._blockMove||(this.moveSound.play(),this.tempArray(this.checkList,this.isFill),this.goRight_1(this.fillTable),this.goRight_2(this.fillTable),this.goRight_3(this.fillTable),this.equal_Array(this.isFill,this.checkList)?1==this.fullList(this.isFill)&&(this._blockRight=!0):this.addItemInBox(this.isFill))},swipeLeft:function(){this._blockMove||(this.moveSound.play(),this.tempArray(this.checkList,this.isFill),this.goLeft_1(this.fillTable),this.goLeft_2(this.fillTable),this.goLeft_3(this.fillTable),this.equal_Array(this.isFill,this.checkList)?1==this.fullList(this.isFill)&&(this._blockLeft=!0):this.addItemInBox(this.isFill))},swipeUp:function(){this._blockMove||(this.moveSound.play(),this.tempArray(this.checkList,this.isFill),this.goUp_1(this.fillTable),this.goUp_2(this.fillTable),this.goUp_3(this.fillTable),this.equal_Array(this.isFill,this.checkList)?1==this.fullList(this.isFill)&&(this._blockUp=!0):this.addItemInBox(this.isFill))},swipeDown:function(){this._blockMove||(this.moveSound.play(),this.tempArray(this.checkList,this.isFill),this.goDown_1(this.fillTable),this.goDown_2(this.fillTable),this.goDown_3(this.fillTable),this.equal_Array(this.isFill,this.checkList)?1==this.fullList(this.isFill)&&(this._blockDown=!0):this.addItemInBox(this.isFill))},onSound:function(e){},move2048:function(e){switch(e.keyCode){case cc.macro.KEY.right:this._blockMove||(this.moveSound.play(),this.tempArray(this.checkList,this.isFill),this.goRight_1(this.fillTable),this.goRight_2(this.fillTable),this.goRight_3(this.fillTable),this.equal_Array(this.isFill,this.checkList)?1==this.fullList(this.isFill)&&(this._blockRight=!0):this.addItemInBox(this.isFill));break;case cc.macro.KEY.left:this._blockMove||(this.moveSound.play(),this.tempArray(this.checkList,this.isFill),this.goLeft_1(this.fillTable),this.goLeft_2(this.fillTable),this.goLeft_3(this.fillTable),this.equal_Array(this.isFill,this.checkList)?1==this.fullList(this.isFill)&&(this._blockLeft=!0):this.addItemInBox(this.isFill));break;case cc.macro.KEY.up:this._blockMove||(this.moveSound.play(),this.tempArray(this.checkList,this.isFill),this.goUp_1(this.fillTable),this.goUp_2(this.fillTable),this.goUp_3(this.fillTable),this.equal_Array(this.isFill,this.checkList)?1==this.fullList(this.isFill)&&(this._blockUp=!0):this.addItemInBox(this.isFill));break;case cc.macro.KEY.down:this._blockMove||(this.moveSound.play(),this.tempArray(this.checkList,this.isFill),this.goDown_1(this.fillTable),this.goDown_2(this.fillTable),this.goDown_3(this.fillTable),this.equal_Array(this.isFill,this.checkList)?1==this.fullList(this.isFill)&&(this._blockDown=!0):this.addItemInBox(this.isFill))}if(parseInt(this.bestScore.string)<=parseInt(this.score.string)&&(this.bestScore.string=this.score.string),1==this._blockDown&&1==this._blockUp&&1==this._blockLeft&&1==this._blockRight&&!this._blockMove){this.gameOverPopUp.x=380,this.gameOverPopUp.y=1670,this.gameOverPopUp.scale=1;var t=cc.instantiate(this.topRankPrefabs);t.getChildByName("name").getComponent(cc.Label).string="Top "+ ++this._topPlay+": ",t.getChildByName("score").getComponent(cc.Label).string=parseInt(this.score.string),this.topRank.node.addChild(t),this.checkTopRank(this.topRank.node,this.score.string),this.yourScore.string=this.score.string,this.gameOverTrans.active=!0,this.gameOverPopUp.active=!0,cc.log("GAME OVER");var i=cc.moveTo(1,380,640);i.easing(cc.easeBounceOut(1)),this.gameOverPopUp.runAction(i),cc.sys.localStorage.setItem("Score",JSON.stringify(parseInt(this.score.string))),cc.log(JSON.parse(cc.sys.localStorage.getItem("Score"))),this._blockMove=!0}},checkTopRank:function(e){if(e.childrenCount>0)for(var t=0;t<e.childrenCount-1;t++)if(parseInt(e.children[t].getChildByName("score").getComponent(cc.Label).string)<parseInt(e.children[t+1].getChildByName("score").getComponent(cc.Label).string)){var i=e.children[t].getChildByName("score").getComponent(cc.Label).string;e.children[t].getChildByName("score").getComponent(cc.Label).string=e.children[t+1].getChildByName("score").getComponent(cc.Label).string,e.children[t+1].getChildByName("score").getComponent(cc.Label).string=i}},fullList:function(e){for(var t=0;t<e.length;t++)if(0==e[t])return!1;return!0},equal_Array:function(e,t){for(var i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0},tempArray:function(e,t){for(var i=0;i<t.length;i++)e[i]=t[i]},goDown_1:function(e){for(var t=e.length-1;t>=0;t--){var i=t;if(t>=4)for(;e[t].childrenCount<2&&i-4>=0;)e[i-4].childrenCount<2?i-=4:(this.aniFlag=!1,e[t].addChild(cc.instantiate(this.item)),cc.tween(e[i-4].children[1]).to(1,{position:this.xyPosition[t]}).start(),e[t].position=this.xyPosition[t],e[t].children[1].scale=1,e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i-4].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]),this.isFill[i-4]=0,this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),e[i-4].children[1].destroy(),e[i-4].removeChild(e[i-4].children[1]),i-=4)}},goDown_2:function(e){for(var t=e.length-1;t>=0;t--){var i=t;if(t>=4&&2==e[t].childrenCount)for(var n=0;n%4<3;n++)if(2==e[t].childrenCount&&2==e[i-4].childrenCount&&e[t].children[1].getChildByName("numb").getComponent(cc.Label).string==e[i-4].children[1].getChildByName("numb").getComponent(cc.Label).string){e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i-4].children[1].getChildByName("numb").getComponent(cc.Label).string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),2048==parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string)&&this.winnerGame(),this.setColor(e[t]),this.isFill[i-4]=0;var c=cc.sequence(cc.scaleTo(.25,1.25),cc.scaleTo(.25,1));e[t].runAction(c),this.score.string=parseInt(this.score.string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),e[i-4].children[1].destroy(),e[i-4].removeChild(e[i-4].children[1])}}},goDown_3:function(e){for(var t=e.length-1;t>=0;t--){var i=t;if(t>=4)for(;e[t].childrenCount<2&&i-4>=0;)e[i-4].childrenCount<2?i-=4:(e[t].addChild(cc.instantiate(this.item)),e[t].children[1].scale=1,e[t].position=this.xyPosition[t],e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i-4].children[1].getChildByName("numb").getComponent(cc.Label).string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]),this.isFill[i-4]=0,this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),e[i-4].children[1].destroy(),e[i-4].removeChild(e[i-4].children[1]),i-=4)}},goUp_1:function(e){for(var t=0;t<e.length;t++){var i=t;if(t<e.length-4)for(;e[t].childrenCount<2&&i+4<e.length;)e[i+4].childrenCount<2?i+=4:(e[t].addChild(cc.instantiate(this.item)),e[t].position=this.xyPosition[t],e[t].children[1].scale=1,e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i+4].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]),this.isFill[i+4]=0,this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),e[i+4].children[1].destroy(),e[i+4].removeChild(e[i+4].children[1]),i+=4)}},goUp_2:function(e){for(var t=0;t<e.length;t++){var i=t;if(t<e.length-4&&2==e[t].childrenCount)for(var n=0;n%4<3;n++)if(2==e[t].childrenCount&&2==e[i+4].childrenCount&&e[t].children[1].getChildByName("numb").getComponent(cc.Label).string==e[i+4].children[1].getChildByName("numb").getComponent(cc.Label).string){e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i+4].children[1].getChildByName("numb").getComponent(cc.Label).string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]),2048==parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string)&&this.winnerGame();var c=cc.sequence(cc.scaleTo(.25,1.25),cc.scaleTo(.25,1));e[t].runAction(c),this.score.string=parseInt(this.score.string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.isFill[i+4]=0,this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),e[i+4].children[1].destroy(),e[i+4].removeChild(e[i+4].children[1])}}},goUp_3:function(e){for(var t=0;t<e.length;t++){var i=t;if(t<e.length-4)for(;e[t].childrenCount<2&&i+4<e.length;)e[i+4].childrenCount<2?i+=4:(e[t].addChild(cc.instantiate(this.item)),e[t].position=this.xyPosition[t],e[t].children[1].scale=1,e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i+4].children[1].getChildByName("numb").getComponent(cc.Label).string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]),this.isFill[i+4]=0,this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),e[i+4].children[1].destroy(),e[i+4].removeChild(e[i+4].children[1]),i+=4)}},goLeft_1:function(e){for(var t=0;t<e.length;t++){var i=t;if(t<e.length-1)for(;e[t].childrenCount<2&&i%4<3;)e[i+1].childrenCount<2?i++:(e[t].addChild(cc.instantiate(this.item)),e[t].position=this.xyPosition[t],e[t].children[1].scale=1,e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i+1].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]),this.isFill[i+1]=0,this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),e[i+1].children[1].destroy(),e[i+1].removeChild(e[i+1].children[1]),i++)}},goLeft_2:function(e){for(var t=0;t<e.length;t++){var i=t;if(t<e.length-1&&2==e[t].childrenCount)for(var n=0;n%4<3;n++)if(2==e[t].childrenCount&&2==e[i+1].childrenCount&&e[t].children[1].getChildByName("numb").getComponent(cc.Label).string==e[i+1].children[1].getChildByName("numb").getComponent(cc.Label).string){e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i+1].children[1].getChildByName("numb").getComponent(cc.Label).string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),2048==parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string)&&this.winnerGame(),this.score.string=parseInt(this.score.string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]),this.setColor(e[t]);var c=cc.sequence(cc.scaleTo(.25,1.25),cc.scaleTo(.25,1));e[t].runAction(c),this.isFill[i+1]=0,this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),e[i+1].children[1].destroy(),e[i+1].removeChild(e[i+1].children[1])}}},goLeft_3:function(e){for(var t=0;t<e.length;t++){var i=t;if(t<e.length-1)for(;e[t].childrenCount<2&&i%4<3;)e[i+1].childrenCount<2?i++:(e[t].addChild(cc.instantiate(this.item)),e[t].position=this.xyPosition[t],e[t].children[1].scale=1,e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i+1].children[1].getChildByName("numb").getComponent(cc.Label).string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]),this.isFill[i+1]=0,this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),e[i+1].children[1].destroy(),e[i+1].removeChild(e[i+1].children[1]),i++)}},goRight_1:function(e){for(var t=e.length-1;t>=0;t--){var i=t;if(t>0)for(;e[t].childrenCount<2&&i%4>0;)e[i-1].childrenCount<2?i--:(e[t].addChild(cc.instantiate(this.item)),e[t].position=this.xyPosition[t],e[t].children[1].scale=1,e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i-1].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]),this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.isFill[i-1]=0,e[i-1].children[1].destroy(),e[i-1].removeChild(e[i-1].children[1]),i--)}},goRight_2:function(e){for(var t=e.length-1;t>=0;t--){var i=t;if(t>0&&2==e[t].childrenCount)for(var n=i;n%4>0;n--)if(2==e[t].childrenCount&&2==e[i-1].childrenCount&&e[t].children[1].getChildByName("numb").getComponent(cc.Label).string==e[i-1].children[1].getChildByName("numb").getComponent(cc.Label).string){e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i-1].children[1].getChildByName("numb").getComponent(cc.Label).string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),2048==parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string)&&this.winnerGame(),this.score.string=parseInt(this.score.string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]);var c=cc.sequence(cc.scaleTo(.25,1.25),cc.scaleTo(.25,1));e[t].runAction(c),this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.isFill[i-1]=0,e[i-1].children[1].destroy(),e[i-1].removeChild(e[i-1].children[1])}}},goRight_3:function(e){for(var t=e.length-1;t>=0;t--){var i=t;if(t>0)for(;e[t].childrenCount<2&&i%4>0;)e[i-1].childrenCount<2?i--:(e[t].addChild(cc.instantiate(this.item)),e[t].position=this.xyPosition[t],e[t].children[1].scale=1,e[t].children[1].getChildByName("numb").getComponent(cc.Label).string=parseInt(e[i-1].children[1].getChildByName("numb").getComponent(cc.Label).string)+parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.setColor(e[t]),this.isFill[t]=parseInt(e[t].children[1].getChildByName("numb").getComponent(cc.Label).string),this.isFill[i-1]=0,e[i-1].children[1].destroy(),e[i-1].removeChild(e[i-1].children[1]),i--)}},emptyTable:function(e,t){for(var i=0;i<16;i++)e.push(t)},createPrefabsTable:function(){for(var e=0;e<16;e++)this.mainScene.addChild(cc.instantiate(this.emptyPrefab)),this.mainScene.children[e].addChild(cc.instantiate(this.emptyPrefab)),this.fillTable[e]=this.mainScene.children[e]},checkGameOVER:function(){if(!this._blockMove){this.gameOverPopUp.x=380,this.gameOverPopUp.y=1670,this.gameOverPopUp.scale=1;var e=cc.instantiate(this.topRankPrefabs);e.getChildByName("name").getComponent(cc.Label).string="Top "+ ++this._topPlay+": ",e.getChildByName("score").getComponent(cc.Label).string=parseInt(this.score.string),this.topRank.node.addChild(e),this.checkTopRank(this.topRank.node,this.score.string),this.yourScore.string=this.score.string,this.gameOverTrans.active=!0,this.gameOverPopUp.active=!0,cc.log("GAME OVER");var t=cc.moveTo(1,380,640);t.easing(cc.easeBounceOut(1)),this.gameOverPopUp.runAction(t),cc.sys.localStorage.setItem("Score",JSON.stringify(parseInt(this.score.string))),cc.log(JSON.parse(cc.sys.localStorage.getItem("Score"))),this._blockMove=!0}}}),cc._RF.pop()},{registerEvent:"registerEvent"}],menuScene:[function(e,t,i){"use strict";cc._RF.push(t,"a962a/qyW9OHLTKLbtwvZnc","menuScene");var n=e("registerEvent");cc.Class({extends:cc.Component,properties:{pageView:cc.PageView,menu:cc.Node,tutorial:cc.Node,option:cc.Node,_xmouseUp:null,_xmouseDown:null,page3:cc.Node,backgroundMusic:cc.AudioSource,bgm:cc.Slider,soundCheck:cc.Toggle,clickBtn:cc.AudioSource},volumeBGM:function(){this.backgroundMusic.volume=this.bgm.progress},tutorialScenee:function(){this.clickBtn.play(),this.tutorial.active=!0,this.tutorial.x=357.19,this.tutorial.y=640.162,this.menu.active=!1,this.option.active=!1},optionScene:function(){this.clickBtn.play(),this.menu.active=!1,this.tutorial.active=!1,this.option.active=!0},menuScene:function(){this.clickBtn.play(),this.tutorial.active=!1,this.option.active=!1,this.menu.active=!0},onLoad:function(){cc.log(this.soundCheck),this.bgm.node.on("slide",this.volumeBGM,this),this.soundCheck.node.on("toggle",this.muteSound,this),this.backgroundMusic.play(),this.backgroundMusic.loop=!0,this.page3.on(cc.Node.EventType.MOUSE_DOWN,this.mouseDown,this),this.page3.on(cc.Node.EventType.MOUSE_UP,this.mouseUp,this),n.instance=new n},muteSound:function(){0==this.soundCheck.isChecked?this.clickBtn.volume=0:this.clickBtn.volume=1},onBGM:function(){this.backgroundMusic.play(),this.backgroundMusic.loop=!0},offBGM:function(){this.backgroundMusic.play()},mouseDown:function(e){this._xmouseDown=e.getLocationX(),cc.log(this._xmouseDown)},mouseUp:function(e){this._xmouseUp=e.getLocationX(),cc.warn(this._xmouseUp),this.tutorialPage()},tutorialPage:function(){if(this._xmouseUp<this._xmouseDown){this.menu.active=!0;var e=cc.spawn(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("GamePlay")}));this.menu.runAction(e);var t=cc.moveTo(1,-400,640);this.tutorial.runAction(t)}},start:function(){}}),cc._RF.pop()},{registerEvent:"registerEvent"}],mouse_clickEvent:[function(e,t,i){"use strict";cc._RF.push(t,"d4ce938cDZGF5t7ryuq75lV","mouse_clickEvent");var n=e("registerEvent");cc.Class({extends:cc.Component,properties:{_xmouseUp:0,_ymouseUp:0,_xmouseDown:0,_ymouseDown:0},onLoad:function(){this.node.on(cc.Node.EventType.MOUSE_DOWN,this.mouseDown,this),this.node.on(cc.Node.EventType.MOUSE_UP,this.mouseUp,this)},mouseDown:function(e){this._xmouseDown=e.getLocationX(),this._ymouseDown=e.getLocationY(),cc.log(this._xmouseDown,this._ymouseDown)},mouseUp:function(e){this._xmouseUp=e.getLocationX(),this._ymouseUp=e.getLocationY(),this.isMove(),cc.warn(this._xmouseUp,this._ymouseUp)},isMove:function(){null!=this._xmouseDown&&null!=this._ymouseDown&&null!=this._xmouseUp&&null!=this._ymouseUp?Math.abs(this._xmouseUp-this._xmouseDown)>Math.abs(this._ymouseUp-this._ymouseDown)?this._xmouseUp>this._xmouseDown?n.instance.emit("MOVERIGHT"):n.instance.emit("MOVELEFT"):this._ymouseUp>this._ymouseDown?(n.instance.emit("MOVEUP"),cc.log("MOVEUP")):(cc.log("MOVEDOWN"),n.instance.emit("MOVEDOWN")):cc.error("ERROR!!!")}}),cc._RF.pop()},{registerEvent:"registerEvent"}],optionBtn:[function(e,t,i){"use strict";cc._RF.push(t,"a86060SnVhBoaaOXqY4Dw5N","optionBtn");var n=e("registerEvent");cc.Class({extends:cc.Component,properties:{exitBtn:cc.Button,musicBtn:cc.Button,soundBtn:cc.Button,menuBtn:cc.Button,optionBtn:cc.Button,newgameBtn:cc.Button,leadBoard:cc.Button,optionSprite:cc.SpriteFrame,backSprite:cc.SpriteFrame,muteSprite:cc.SpriteFrame,unmusicSprite:cc.SpriteFrame,soundSprite:cc.SpriteFrame,musicSprite:cc.SpriteFrame,_isClick:!0,_soundClick:!0,_musicClick:!0,_exitClick:!0,exitPopup:cc.Node,transparentBg:cc.Node,clickSound:cc.AudioSource,topRank:cc.Node,_animFlag:!0,transparentToprank:cc.Node,gameOverPopUp:cc.Node,gameOverTrans:cc.Node,backgroundMusic:cc.AudioSource,scrollMusic:cc.Slider,gameWinnerPopUp:cc.Node},onLoad:function(){cc.log(this.optionBtn,"Option button"),this.backgroundMusic.play(),this.backgroundMusic.loop=!0,this.scrollMusic.node.on("slide",this.volumeBGM,this);var e=cc.repeatForever(cc.rotateBy(.5,15));this.optionBtn.node.runAction(e);var t=cc.repeatForever(cc.sequence(cc.rotateTo(3.25,-45),cc.rotateTo(2.75,45)));this.exitBtn.node.runAction(t);var i=cc.repeatForever(cc.sequence(cc.rotateTo(2.75,-55),cc.rotateTo(2.5,55)));this.menuBtn.node.runAction(i);var n=cc.repeatForever(cc.sequence(cc.rotateTo(3,40),cc.rotateTo(2.25,-40)));this.soundBtn.node.runAction(n);var c=cc.repeatForever(cc.sequence(cc.rotateTo(2,-30),cc.rotateTo(2,30)));this.musicBtn.node.runAction(c);var s=cc.repeatForever(cc.sequence(cc.rotateTo(2,40),cc.rotateTo(3,-40)));this.newgameBtn.node.runAction(s);var o=cc.repeatForever(cc.sequence(cc.rotateTo(2.5,-40),cc.rotateTo(3.5,40)));this.leadBoard.node.runAction(o)},volumeBGM:function(){this.backgroundMusic.volume=this.scrollMusic.progress},optionClickBtn:function(){var e=this;if(this._isClick){this.clickSound.play(),this.optionBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=this.backSprite,this._isClick=!1;var t=cc.moveTo(.5,-250,700);this.musicBtn.node.runAction(t);var i=cc.moveTo(.5,-120,700);this.soundBtn.node.runAction(i);var n=cc.moveTo(.5,5,700);this.menuBtn.node.runAction(n);var c=cc.moveTo(.5,125,700);this.exitBtn.node.runAction(c)}else{this.clickSound.play(),this.optionBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=this.optionSprite,this._isClick=!0;t=cc.moveTo(.5,250,700);this.musicBtn.node.runAction(t);i=cc.moveTo(.5,250,700);this.soundBtn.node.runAction(i);n=cc.moveTo(.5,250,700);this.menuBtn.node.runAction(n);c=cc.moveTo(.5,250,700);this.exitBtn.node.runAction(c);var s=cc.sequence(cc.spawn(cc.moveTo(.5,250,700),cc.scaleTo(1,0)),cc.callFunc(function(){e.scrollMusic.node.active=!1,e._musicClick=!0}));this.scrollMusic.node.runAction(s)}},soundClick:function(){this.clickSound.play(),this._soundClick?(this.soundBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=this.muteSprite,this._soundClick=!1,this.clickSound.volume=0,n.instance.emit("OFFMOVESOUND")):(this.soundBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=this.soundSprite,this._soundClick=!0,this.clickSound.volume=1,n.instance.emit("ONMOVESOUND"))},musicClick:function(){if(this.clickSound.play(),this._musicClick){this.scrollMusic.node.active=!0,this.scrollMusic.node.x=-250,this.scrollMusic.node.y=700,this.scrollMusic.node.scale=0;var e=cc.spawn(cc.scaleTo(.5,1),cc.moveTo(.5,-330,700));this.scrollMusic.node.runAction(e),this._musicClick=!1}else{this.scrollMusic.node.x=-330,this.scrollMusic.node.y=700,this.scrollMusic.node.scale=1;e=cc.spawn(cc.scaleTo(.5,0),cc.moveTo(.5,-250,700));this.scrollMusic.node.runAction(e),this._musicClick=!0}},exitGame:function(){cc.game.end()},closeExit:function(){var e=this;if(this.clickSound.play(),this.exitPopup.x=360,this.exitPopup.y=664,this._exitClick){var t=cc.sequence(cc.spawn(cc.scaleTo(.25,0),cc.moveTo(.25,525,1190)),cc.callFunc(function(){e.exitPopup.active=!1,e.transparentBg.active=!1}));this.exitPopup.runAction(t)}},closeGameOverPopup:function(){var e=cc.sequence(cc.spawn(cc.scaleTo(1,0),cc.moveTo(1,720,1280)),cc.callFunc(function(){n.instance.emit("RESETGAME")}));e.easing(cc.easeBounceIn(1)),this.gameOverPopUp.runAction(e)},closeWinnerPopup:function(){var e=cc.sequence(cc.spawn(cc.scaleTo(1,0),cc.moveTo(1,720,1280)),cc.callFunc(function(){n.instance.emit("RESETGAME")}));e.easing(cc.easeBounceIn(1)),this.gameWinnerPopUp.runAction(e)},keepPlay:function(){var e=this,t=cc.sequence(cc.spawn(cc.scaleTo(1,0),cc.moveTo(1,720,1280)),cc.callFunc(function(){e.gameOverTrans.active=!1}));t.easing(cc.easeBounceIn(1)),this.gameWinnerPopUp.runAction(t)},menuScene:function(){this.clickSound.play(),cc.director.loadScene("Menu")},showRank:function(){this.clickSound.play(),this.topRank.scale=0,this.topRank.x=230,this.topRank.y=210,this.topRank.active=!0,this.transparentToprank.active=!0;var e=cc.spawn(cc.scaleTo(.75,1),cc.moveTo(.75,0,0));this.topRank.runAction(e)},hideRank:function(){var e=this;this.clickSound.play(),this.topRank.x=0,this.topRank.y=0,this.topRank.scale=1;var t=cc.sequence(cc.spawn(cc.scaleTo(.25,0),cc.moveTo(.25,230,210)),cc.callFunc(function(){e.transparentToprank.active=!1,e.topRank.active=!1,e.transparentToprank.active=!1}));this.topRank.runAction(t)},exitBtnClick:function(){if(this.clickSound.play(),this.transparentBg.active=!0,this.exitPopup.active=!0,this.exitPopup.scale=0,this.exitPopup.x=525,this.exitPopup.y=1190,this._exitClick){var e=cc.spawn(cc.scaleTo(.75,1),cc.moveTo(.75,360,664));this.exitPopup.runAction(e)}},start:function(){}}),cc._RF.pop()},{registerEvent:"registerEvent"}],playGame:[function(e,t,i){"use strict";cc._RF.push(t,"b9f43s0i6BF+6bKo8Lzv6PM","playGame");e("registerEvent");cc.Class({extends:cc.Component,properties:{mainScene:cc.Node,item:cc.Prefab,listItem:[],listFlag:[],playZone:cc.Layout},onLoad:function(){for(var e=0;e<2;e++)this.listItem.push(void 0),this.createItem(1)},dragSceneTouch:function(){this.mainScene.on(cc.Node.EventType.MOUSE_DOWN,function(e){console.log("Mouse down"),this.mainScene.on(cc.Node.EventType.MOUSE_UP,function(e){cc.log("Mouse up")},this)},this)},createItem:function(e){var t=cc.instantiate(this.item);return this.playZone.node.getChildByName(e.toString()).addChild(t),cc.tween(this.playZone.node.getChildByName(e.toString()).children[0]).to(.15,{scale:1}).start(),e},isCreate:function(e,t){for(var i=0;i<t.length;i++)if(e==t[i])return!0;return!1},start:function(){var e=cc.sequence(cc.moveTo(0,this.playZone.node.getChildByName("1").x,this.playZone.node.getChildByName("1").y),cc.moveTo(3,this.playZone.node.getChildByName("4").x,this.playZone.node.getChildByName("4").y));this.playZone.node.getChildByName("1").children[0].runAction(e)}}),cc._RF.pop()},{registerEvent:"registerEvent"}],registerEvent:[function(e,t,i){"use strict";cc._RF.push(t,"5b6b3fRQbBIhYG0LeickLsV","registerEvent");var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=e("events"),o=function(){function e(){c(this,e),this._emiter=new s,this._emiter.setMaxListeners(100)}return n(e,[{key:"emit",value:function(){var e;(e=this._emiter).emit.apply(e,arguments)}},{key:"registerEvent",value:function(e,t){this._emiter.on(e,t)}},{key:"registerOnce",value:function(e,t){this._emiter.once(e,t)}},{key:"removeEvent",value:function(e,t){this._emiter.removeListener(e,t)}},{key:"destroy",value:function(){this._emiter.removeAllListeners(),this._emiter=null,e.instance=null}}]),e}();o.instance=null,t.exports=o,cc._RF.pop()},{events:1}],touch_clickEvent:[function(e,t,i){"use strict";cc._RF.push(t,"be5c5+OFnBEAJCRSHTPgwYz","touch_clickEvent");var n=e("registerEvent");cc.Class({extends:cc.Component,properties:{_xtouchUp:0,_ytouchUp:0,_xtouchDown:0,_ytouchDown:0},onLoad:function(){this.node.on(cc.Node.EventType.TOUCH_START,this.touchDown,this),this.node.on(cc.Node.EventType.TOUCH_END,this.touchUp,this)},touchDown:function(e){this._xtouchDown=e.getLocationX(),this._ytouchDown=e.getLocationY(),cc.log(this._xtouchDown,this._ytouchDown)},touchUp:function(e){this._xtouchUp=e.getLocationX(),this._ytouchUp=e.getLocationY(),this.isMove(),cc.warn(this._xtouchUp,this._ytouchUp)},isMove:function(){null!=this._xtouchDown&&null!=this._ytouchDown&&null!=this._xtouchUp&&null!=this._ytouchUp?Math.abs(this._xtouchUp-this._xtouchDown)>Math.abs(this._ytouchUp-this._ytouchDown)?this._xtouchUp>this._xtouchDown?n.instance.emit("MOVERIGHT"):n.instance.emit("MOVELEFT"):this._ytouchUp>this._ytouchDown?(n.instance.emit("MOVEUP"),cc.log("MOVEUP")):(cc.log("MOVEDOWN"),n.instance.emit("MOVEDOWN")):cc.error("ERROR!!!")}}),cc._RF.pop()},{registerEvent:"registerEvent"}],"use_v2.1-2.2.1_cc.Toggle_event":[function(e,t,i){"use strict";cc._RF.push(t,"cc56cYOCGFK+q7sN2NDex9E","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["controller","menuScene","mouse_clickEvent","optionBtn","playGame","registerEvent","touch_clickEvent","use_v2.1-2.2.1_cc.Toggle_event"]);