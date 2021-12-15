"use strict";
cc._RF.push(module, 'b3d3dIEv39FGqNxLCaM02x9', 'moveAction');
// Script/moveAction.js

"use strict";

var Emitter = require('registerEvent');

cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
        mainScene: cc.Node,
        bullet: cc.Prefab,
        walkSoundd: cc.AudioClip,
        shootSound: cc.AudioClip
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var _this = this;

        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("Go_left", this.goLeft.bind(this));
        Emitter.instance.registerEvent("Go_right", this.goRight.bind(this));
        Emitter.instance.registerEvent("JUMP", this.goJump.bind(this));
        Emitter.instance.registerEvent("SHOOTING", this.goShoot.bind(this));

        this.node.getComponent("sp.Skeleton").setAnimation(0, "idle", true);
        this.node.getComponent("sp.Skeleton").setEventListener(function (entry, event) {
            _this.current = cc.audioEngine.play(_this.walkSoundd, false, 1);
        });
    },
    goLeft: function goLeft() {

        this.target.scaleX = -0.1;
        this.target.scaleY = 0.1;

        if (this.target.x <= -442) {
            this.target.x = 420;
            this.target.getComponent("sp.Skeleton").setAnimation(0, "portal", false);
            this.target.getComponent("sp.Skeleton").addAnimation(0, "idle", true);
        } else {
            this.target.getComponent("sp.Skeleton").setAnimation(0, "run", false);
            this.target.getComponent("sp.Skeleton").addAnimation(0, "idle", true);
            var seq = cc.moveBy(0.5, -50, 0);
            this.target.runAction(seq);
        }
    },
    goRight: function goRight() {
        this.target.getComponent("sp.Skeleton").setAnimation(0, "run", false);
        this.target.getComponent("sp.Skeleton").addAnimation(0, "idle", true);
        this.target.scaleX = 0.1;
        this.target.scaleY = 0.1;
        if (this.target.x >= 440) {
            this.target.x = -430;
            this.target.getComponent("sp.Skeleton").setAnimation(0, "portal", false);
            this.target.getComponent("sp.Skeleton").addAnimation(0, "idle", true);
        } else {
            var seq = cc.moveBy(0.5, 50, 0);
            this.target.runAction(seq);
        }
    },
    goJump: function goJump() {

        var _jump = this.target.getComponent("sp.Skeleton");
        _jump.setAnimation(0, "jump", false);
        _jump.addAnimation(0, "run", false);
        if (this.target.scaleX > 0) {
            if (this.target.x >= 440) {
                this.target.x = 440;
            } else {
                var seq = cc.sequence(cc.moveBy(0.4, 15, 50), cc.moveBy(0.4, 15, -50));
                this.target.runAction(seq);
            }
        } else {
            if (this.target.x <= -442) {
                this.target.x = -442;
            } else {
                var seq = cc.sequence(cc.moveBy(0.4, -15, 50), cc.moveBy(0.4, -15, -50));
                this.target.runAction(seq);
            }
        }
    },
    goShoot: function goShoot() {
        var _this2 = this;

        this.current = cc.audioEngine.play(this.shootSound, false, 1);
        var item = cc.instantiate(this.bullet);
        this.target.getComponent("sp.Skeleton").setAnimation(0, "shoot", false);
        this.target.getComponent("sp.Skeleton").addAnimation(0, "idle", true);
        var action = cc.sequence(cc.delayTime(0.2), cc.callFunc(function () {
            var moveDirection = void 0;
            _this2.mainScene.addChild(item);

            if (_this2.target.scaleX > 0) {
                item.x = _this2.target.x + 35;
                item.y = _this2.target.y + 20;
                moveDirection = cc.moveBy(20, 20000, 0);
            } else {
                item.x = _this2.target.x - 35;
                item.y = _this2.target.y + 20;
                moveDirection = cc.moveBy(20, -20000, 0);
            }
            item.runAction(moveDirection);
        }));

        item.runAction(action);
        cc.log(this.target.x);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();