const Emitter = require('registerEvent');
cc.Class({
    extends: cc.Component,

    properties: {
        leftBtn: cc.Button,
        rightBtn: cc.Button,
        jumpBtn: cc.Button,
        target: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Emitter.instance = new Emitter();
        let move_LeftAc = this.goLeftAction.bind(this)
        let move_RightAc = this.goRighAction.bind(this);
        let move_JumpAc = this.goJumpAction.bind(this);
        Emitter.instance.registerEvent("LeftAction", move_LeftAc);
        Emitter.instance.registerEvent("RightAction", move_RightAc);
        Emitter.instance.registerEvent("JumpAction", move_JumpAc);

        let move_LeftTw = this.goLeftTween.bind(this)
        let move_RightTw = this.goRightTween.bind(this);
        let move_JumpTw = this.goJumpTween.bind(this);
        Emitter.instance.registerEvent("LeftTween", move_LeftTw);
        Emitter.instance.registerEvent("RightTween", move_RightTw);
        Emitter.instance.registerEvent("JumpTween", move_JumpTw);
    },
    goLeftAction() {
        this.target.scaleX = -0.2
        this.target.scaleY = 0.2;

        if (this.target.x <= 45) {
            this.target.x = 45;
        }
        else {
            var seq = cc.moveBy(0.5, -100, 0);
            this.target.runAction(seq);
        }
    },
    goRighAction() {
        this.target.scaleX = 0.2
        this.target.scaleY = 0.2;
        if (this.target.x >= 1085) {
            this.target.x = 1085;
        }
        else {
            var seq = cc.moveBy(0.5, 100, 0);
            this.target.runAction(seq);
        }
    },
    goJumpAction() {
        let _jump = this.target.getComponent("sp.Skeleton");
        _jump.setAnimation(0, "jump", false);
        _jump.addAnimation(0, "run", true);
        if (this.target.scaleX > 0) {
            cc.log("left");
            if (this.target.x >= 1060) {
                this.target.x = 1060;
            }
            else {
                var seq = cc.sequence(cc.moveBy(0.4, 50, 50), cc.moveBy(0.4, 25, -50));
                this.target.runAction(seq);
            }

        } else {
            if (this.target.x <= 60) {
                this.target.x = 60;
            } else {
                var seq = cc.sequence(cc.moveBy(0.4, -50, 50), cc.moveBy(0.4, -25, -50));
                this.target.runAction(seq);
            }

        }
    },

    goLeftTween() {
        this.target.scaleX = -0.2;
        if (this.target.x <= 45) {
            this.target.x = 45;
        }
        else {
            cc.tween(this.target)
                .by(0.4, { position: cc.v2(-100, 0) })
                .start()
        }

    },
    goRightTween() {
        this.target.scaleX = -0.2;
        if (this.target.x >= 1085) {
            this.target.x = 1085;
        }
        else {
            this.target.scaleX = 0.2;
            cc.tween(this.target)
                .by(0.4, { position: cc.v2(100, 0) })
                .start()
        }

    },
    goJumpTween() {
        let _jump = this.target.getComponent("sp.Skeleton");
        _jump.setAnimation(0, "jump", false);
        _jump.addAnimation(0, "run", true);
        if (this.target.scaleX > 0) {
            if (this.target.x >= 1060) {
                this.target.x = 1060;
            }
            else {
                cc.tween(this.target)
                    .by(0.4, { position: cc.v2(50, 50) })
                    .by(0.4, { position: cc.v2(25, -50) })
                    .start()
            }
        }
        else {
            if (this.target.x <= 60) {
                this.target.x = 60;
            }
            else {
                cc.tween(this.target)
                    .by(0.4, { position: cc.v2(-50, 50) })
                    .by(0.4, { position: cc.v2(-25, -50) })
                    .start()
            }
        }
    },

    start() {

    },

    // update (dt) {},
});
