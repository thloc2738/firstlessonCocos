(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/playerControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '02fdc9Fiz9LVrsrWs8cB68C', 'playerControl', __filename);
// Script/playerControl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        isTouch: false,
        player: cc.Node,
        _tagOther: 1,
        countTime: 0,
        delayAnim: false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var target = this.player.getComponent("sp.Skeleton");
        target.setAnimation(0, "run", true);
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        console.log('on collision enter');
        if (other.tag == 0 && self.tag == 0) {
            this.jump();
        }
        if (other.tag == 1 && self.tag == 1) {
            this.delayAnim = true;
            this.shoot();
        }
        if (other.tag == 2 && self.tag == 0) {
            this.player.scaleX *= -1;
        }
    },
    shoot: function shoot() {
        var target = this.player.getComponent("sp.Skeleton");
        target.setAnimation(0, "shoot", false);
        target.addAnimation(0, "run", true);
    },

    onCollisionStay: function onCollisionStay(other, self) {
        console.log('on collision stay');
    },
    onCollisionExit: function onCollisionExit(other, self) {
        console.log('on collision exit');
    },
    jump: function jump() {
        this.animJump();
        if (this.player.scaleX >= 0) {
            var seq = cc.sequence(cc.moveBy(0.4, 20, 20), cc.moveBy(0.4, 20, -20));
        } else {
            var seq = cc.sequence(cc.moveBy(0.4, -20, 20), cc.moveBy(0.4, -20, -20));
        }
        this.player.runAction(seq);
    },
    animJump: function animJump() {
        var target = this.player.getComponent("sp.Skeleton");
        target.setAnimation(0, "jump", false);
        target.addAnimation(0, "run", true);
        this.isTouch = false;
    },
    update: function update(dt) {
        var _this = this;

        if (!this.delayAnim) {
            if (this.isTouch == false) {
                if (this.node.scaleX >= 0) {
                    this.node.x += 70 * dt;
                } else {
                    this.node.x -= 70 * dt;
                }
            }
        } else {
            var action = cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {

                _this.delayAnim = false;
            }));
            this.player.runAction(action);
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
        //# sourceMappingURL=playerControl.js.map
        