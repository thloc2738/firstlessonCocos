window.__require=function t(i,s,e){function n(o,r){if(!s[o]){if(!i[o]){var h=o.split("/");if(h=h[h.length-1],!i[h]){var a="function"==typeof __require&&__require;if(!r&&a)return a(h,!0);if(c)return c(h,!0);throw new Error("Cannot find module '"+o+"'")}}var l=s[o]={exports:{}};i[o][0].call(l.exports,function(t){return n(i[o][1][t]||t)},l,l.exports,t,i,s,e)}return s[o].exports}for(var c="function"==typeof __require&&__require,o=0;o<e.length;o++)n(e[o]);return n}({controller:[function(t,i,s){"use strict";cc._RF.push(i,"179cdFiHcRHD5O9VUEiHvww","controller"),cc.Class({extends:cc.Component,properties:{flag:!1,_listId:[],_listPass:[],_listPhone:[],username:{default:null,type:cc.EditBox},password:{default:null,type:cc.EditBox},confirmPass:{default:null,type:cc.EditBox},phoneNumber:{default:null,type:cc.EditBox},matchId:cc.Node,lowId:cc.Node,lowPass:cc.Node,rePass:cc.Node,rePhone:cc.Node,fail:cc.AudioClip,success:cc.AudioClip,infoSuccess:cc.AudioClip,backAudio:cc.AudioClip,nextAudio:cc.AudioClip,firstScene:cc.Node,secondScene:cc.Node,thirdScene:cc.Node,idInfo:cc.Label,passInfo:cc.Label,phoneInfo:cc.Label,userInfo:cc.Prefab,contentUser:cc.Node},first_Scene:function(){this.firstScene.active=!0,this.secondScene.active=!1,this.thirdScene.active=!1,cc.audioEngine.play(this.backAudio,!1,3)},second_Scene:function(){cc.audioEngine.play(this.infoSuccess,!1,3),this.firstScene.active=!1,this.secondScene.active=!0,this.thirdScene.active=!1},third_Scene:function(){this.firstScene.active=!1,this.secondScene.active=!1,this.thirdScene.active=!0,cc.audioEngine.play(this.nextAudio,!1,3)},sighUpSuccess:function(){if(1==this.lowPassword()&&1==this.reEnterPhone()&&1==this.reEnterPass()&&1==this.isMatchId()){if(cc.audioEngine.play(this.success,!1,3),0==this.findId(this.username.string))return this._listId.push(this.username.string),this._listPass.push(this.password.string),this._listPhone.push(this.phoneNumber.string),cc.log(this._listId),this.infoTable(),this.newSignup(),!0}else if(0==this.lowPassword()||0==this.reEnterPhone()||0==this.reEnterPass()||0==this.isMatchId())return cc.audioEngine.play(this.fail,!1,1),!1},isMatchId:function(){return this.username.string.length<6?(this.lowId.active=!0,this.flag=!1,this.flag):(this.lowId.active=!1,this.findId(this.username.string),1==this.flag?(this.matchId.active=!0,this.flag=!1,this.flag):(this.matchId.active=!1,this.flag=!0,this.flag))},findId:function(t){if(0==this._listId.length)return this.flag=!1,this.flag;for(var i=0;i<this._listId.length;i++)return t==this._listId[i]?(this.flag=!0,this.flag):(this.flag=!1,this.flag)},lowPassword:function(){return this.password.string.length<6?(this.lowPass.active=!0,this.rePass.active=!1,!1):(this.lowPass.active=!1,this.reEnterPass.active=!1,!0)},reEnterPass:function(){return this.password.string!=this.confirmPass.string?(this.rePass.active=!0,this.lowPass.active=!1,!1):(this.rePass.active=!1,this.lowPass.active=!1,!0)},reEnterPhone:function(){return""==this.phoneNumber.string?(this.rePhone.active=!0,cc.audioEngine.play(this.fail,!1,1),!1):(this.rePhone.active=!1,!0)},informationUser:function(){this.idInfo.string=this._listId[this._listId.length-1],this.passInfo.string=this._listPass[this._listPass.length-1],this.phoneInfo.string=this._listPhone[this._listPhone.length-1]},infoTable:function(){var t=cc.instantiate(this.userInfo);this.contentUser.addChild(t);var i=t.getChildByName("userNode"),s=t.getChildByName("passNode"),e=t.getChildByName("phoneNode"),n=i.getChildByName("usertxt"),c=s.getChildByName("passtxt"),o=e.getChildByName("phonetxt"),r=n.getComponent(cc.Label),h=c.getComponent(cc.Label),a=o.getComponent(cc.Label);r.string=this.username.string,h.string=this.password.string,a.string=this.phoneNumber.string},newSignup:function(){this.username.string="",this.password.string="",this.confirmPass.string="",this.phoneNumber.string=""}}),cc._RF.pop()},{}],function:[function(t,i,s){"use strict";cc._RF.push(i,"6d0e4++loNIxZO//H8ks4q7","function");var e={id:"",pass:"",phone:"",listId:[],flag:!1,checkid:function(){if(0!=this.listId.length)for(var t=0;t<this.listId.length;t++)this.listId[t]==this.id?(this.flag=!1,cc.log(this.flag+"asdbgafsadf")):cc.log(this.flag)}};i.exports=e,cc._RF.pop()},{}],"use_v2.1-2.2.1_cc.Toggle_event":[function(t,i,s){"use strict";cc._RF.push(i,"fd6cb9vzWlBW4j+yXoOm3GE","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["controller","function","use_v2.1-2.2.1_cc.Toggle_event"]);