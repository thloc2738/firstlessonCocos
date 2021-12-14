const Emitter = require('registerEvent');
cc.Class({
    extends: cc.Component,

    properties: {
        obj: cc.Node,
    },
    onLoad() {
        let move_Left = this.goLeft.bind(this)
        let move_Right = this.goRight.bind(this);
        let move_Jump = this.goJump.bind(this);
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("MOVELEFT", move_Left);
        Emitter.instance.registerEvent("MOVERIGHT", move_Right);
        Emitter.instance.registerEvent("MOVEJUMP", move_Jump);
    },
    onDisable() {
        Emitter.instance.removeEvent("MOVERIGHT", move_Left);
        Emitter.instance.removeEvent("MOVELEFT", move_Left);
        Emitter.instance.removeEvent("MOVEJUMP", move_Right);

    },
    goLeft() {
        this.obj.scaleX = -0.2
        this.obj.scaleY = 0.2;

        if (this.obj.x <= 259) {
            this.obj.x = 259;
        }
        else {
            var seq = cc.moveBy(0.5, -100, 0);
            this.obj.runAction(seq);
        }
    },
    goRight() {
        this.obj.scaleX = 0.2
        this.obj.scaleY = 0.2;
        if (this.obj.x >= 690) {
            this.obj.x = 690;
        }
        else {
            var seq = cc.moveBy(0.5, 100, 0);
            this.obj.runAction(seq);
        }

    },
    goJump() {
        let _jump = this.obj.getComponent("sp.Skeleton");
        _jump.setAnimation(0, "jump", false);
        _jump.addAnimation(0, "run", true);
        if (this.obj.scaleX > 0) {
            if (this.obj.x <= 259) {
                this.obj.x = 259;
            }
            else {
                var seq = cc.sequence(cc.moveBy(0.4, 50, 50), cc.moveBy(0.4, 25, -50));
                this.obj.runAction(seq);
            }

        } else {
            if (this.obj.x >= 690) {
                this.obj.x = 690;
            } else {
                var seq = cc.sequence(cc.moveBy(0.4, -50, 50), cc.moveBy(0.4, -25, -50));
                this.obj.runAction(seq);
            }

        }
    }
});