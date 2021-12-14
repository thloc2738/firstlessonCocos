const Emitter = require('registerEvent');
cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
    },

    onLoad() {
        let move_Left = this.goLeft.bind(this)
        let move_Right = this.goRight.bind(this);
        let move_Jump = this.goJump.bind(this);
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("MOVE_LEFT", move_Left);
        Emitter.instance.registerEvent("MOVE_RIGHT", move_Right);
        Emitter.instance.registerEvent("MOVE_JUMP", move_Jump);
    },
    onDisable() {
        Emitter.instance.removeEvent("MOVERIGHT", move_Left);
        Emitter.instance.removeEvent("MOVELEFT", move_Left);
        Emitter.instance.removeEvent("MOVEJUMP", move_Right);

    },
    test() {
        cc.log('test')
    },
    goLeft() {
        cc.log("123");
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
    goRight() {
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
    goJump() {
        let _jump = this.target.getComponent("sp.Skeleton");
        _jump.setAnimation(0, "jump", false);
        _jump.addAnimation(0, "run", true);
        if (this.target.scaleX > 0) {
            if (this.target.x <= 60) {
                this.target.x = 60;
            }
            else {
                var seq = cc.sequence(cc.moveBy(0.4, 50, 50), cc.moveBy(0.4, 25, -50));
                this.target.runAction(seq);
            }

        } else {
            if (this.target.x >= 1060) {
                this.target.x = 1060;
            } else {
                var seq = cc.sequence(cc.moveBy(0.4, -50, 50), cc.moveBy(0.4, -25, -50));
                this.target.runAction(seq);
            }

        }
    }
});
