
cc.Class({
    extends: cc.Component,

    properties: {
        isTouch: false,
        player: cc.Node,
        _tagOther: 1,
        countTime: 0,
        delayAnim: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let target = this.player.getComponent("sp.Skeleton");
        target.setAnimation(0, "run", true);
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
    },
    onCollisionEnter: function (other, self) {
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
    shoot() {
        let target = this.player.getComponent("sp.Skeleton");
        target.setAnimation(0, "shoot", false);
        target.addAnimation(0, "run", true);
    },
    onCollisionStay: function (other, self) {
        console.log('on collision stay');

    },
    onCollisionExit: function (other, self) {
        console.log('on collision exit');

    },
    jump() {
        this.animJump();
        if (this.player.scaleX >= 0) {
            var seq = cc.sequence(cc.moveBy(0.4, 20, 20), cc.moveBy(0.4, 20, -20))
        }
        else {
            var seq = cc.sequence(cc.moveBy(0.4, -20, 20), cc.moveBy(0.4, -20, -20))
        }
        this.player.runAction(seq);
    },
    animJump() {
        let target = this.player.getComponent("sp.Skeleton");
        target.setAnimation(0, "jump", false);
        target.addAnimation(0, "run", true);
        this.isTouch = false;
    },
    update(dt) {
        if (!this.delayAnim) {
            if (this.isTouch == false) {
                if (this.node.scaleX >= 0) {
                    this.node.x += 70 * dt;
                }
                else {
                    this.node.x -= 70 * dt;
                }
            }
        } else {
            let action = cc.sequence(cc.delayTime(0.5), cc.callFunc(() => {

                this.delayAnim = false;
            }));
            this.player.runAction(action);
        }

    },
});
