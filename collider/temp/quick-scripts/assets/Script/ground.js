(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ground.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '194563rwcRL96FkZ8xSCQyj', 'ground', __filename);
// Script/ground.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    },
    start: function start() {},

    onCollisionEnter: function onCollisionEnter(other, self) {
        cc.warn("1234");
    },
    onCollisionStay: function onCollisionStay(other, self) {
        console.log('on collision stay');
        cc.log("other: " + other);
        cc.log("self: " + self);
    },
    onCollisionExit: function onCollisionExit(other, self) {
        console.log('on collision exit');
        cc.log("other: " + other);
        cc.log("self: " + self);
    },
    update: function update(dt) {}
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
        //# sourceMappingURL=ground.js.map
        