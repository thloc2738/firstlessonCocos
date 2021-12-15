const Emitter = require('registerEvent');

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

    onLoad() {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("Go_left", this.goLeft.bind(this));
        Emitter.instance.registerEvent("Go_right", this.goRight.bind(this));
        Emitter.instance.registerEvent("JUMP", this.goJump.bind(this));
        Emitter.instance.registerEvent("SHOOTING", this.goShoot.bind(this));

        this.node.getComponent("sp.Skeleton").setAnimation(0, "idle", true);
        this.node.getComponent("sp.Skeleton").setEventListener((entry, event) => {
            this.current = cc.audioEngine.play(this.walkSoundd, false, 1);
        });
    },
    goLeft() {

        this.target.scaleX = -0.1
        this.target.scaleY = 0.1;

        if (this.target.x <= -442) {
            this.target.x = 420;
            this.target.getComponent("sp.Skeleton").setAnimation(0, "portal", false);
            this.target.getComponent("sp.Skeleton").addAnimation(0, "idle", true);
        }
        else {
            this.target.getComponent("sp.Skeleton").setAnimation(0, "run", false);
            this.target.getComponent("sp.Skeleton").addAnimation(0, "idle", true);
            var seq = cc.moveBy(0.5, -50, 0);
            this.target.runAction(seq);
        }
    },
    goRight() {
        this.target.getComponent("sp.Skeleton").setAnimation(0, "run", false);
        this.target.getComponent("sp.Skeleton").addAnimation(0, "idle", true);
        this.target.scaleX = 0.1
        this.target.scaleY = 0.1;
        if (this.target.x >= 440) {
            this.target.x = -430;
            this.target.getComponent("sp.Skeleton").setAnimation(0, "portal", false);
            this.target.getComponent("sp.Skeleton").addAnimation(0, "idle", true);
        }
        else {
            var seq = cc.moveBy(0.5, 50, 0);
            this.target.runAction(seq);
        }
    },
    goJump() {

        let _jump = this.target.getComponent("sp.Skeleton");
        _jump.setAnimation(0, "jump", false);
        _jump.addAnimation(0, "run", false);
        if (this.target.scaleX > 0) {
            if (this.target.x >= 440) {
                this.target.x = 440;
            }
            else {
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
    goShoot() {
        this.current = cc.audioEngine.play(this.shootSound, false, 1);
        let item = cc.instantiate(this.bullet);
        this.target.getComponent("sp.Skeleton").setAnimation(0, "shoot", false);
        this.target.getComponent("sp.Skeleton").addAnimation(0, "idle", true);
        let action = cc.sequence(
            cc.delayTime(0.2),
            cc.callFunc(() => {
                let moveDirection
                this.mainScene.addChild(item);

                if (this.target.scaleX > 0) {
                    item.x = this.target.x + 35;
                    item.y = this.target.y + 20;
                    moveDirection = cc.moveBy(20, 20000, 0)
                }
                else {
                    item.x = this.target.x - 35;
                    item.y = this.target.y + 20;
                    moveDirection = cc.moveBy(20, -20000, 0)
                }
                item.runAction(moveDirection)
            }),


        );


        item.runAction(action);
        cc.log(this.target.x);

    },
    start() {

    },

    // update (dt) {},
});
