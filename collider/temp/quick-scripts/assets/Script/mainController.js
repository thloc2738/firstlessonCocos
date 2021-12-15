(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/mainController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '98b400MtORNBZWh8gOfBTvM', 'mainController', __filename);
// Script/mainController.js

"use strict";

var Emitter = require('registerEvent');
cc.Class({
  extends: cc.Component,

  properties: {
    player: cc.Node
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },

  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 0 && self.tag == 0) {
      this.jump_Move();
    }
  },
  onCollisionStay: function onCollisionStay(other, self) {},
  onCollisionExit: function onCollisionExit(other, self) {},
  start: function start() {},
  update: function update(dt) {},
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.up:
        Emitter.instance.emit("JUMP");
        break;
      case cc.macro.KEY.left:
        Emitter.instance.emit("Go_left");
        break;
      case cc.macro.KEY.right:
        Emitter.instance.emit("Go_right");
        break;
      case cc.macro.KEY.space:
        Emitter.instance.emit("SHOOTING");
        break;
    }
  }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=mainController.js.map
        