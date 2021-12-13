const Emitter = require('registerEvent');
cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
        spAnim: sp.Skeleton,
        walkSound: cc.AudioSource,
    },


    onLoad() {

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.left_Move, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.right_Move, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.jump_move, this);
        this.target.x = 259;
        this.target.y = 205;
        this.spAnim.setEventListener((entry, event) => {
            const { data } = event;
            if (data.name == "footstep") {
                this.walkSound.play();
            }
        });
    },
    start() {
        this.spAnim.addAnimation(0, "run", true);

    },
    jump_move(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                Emitter.instance.emit("MOVEJUMP");
                break;
        }
    },
    left_Move(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                Emitter.instance.emit("MOVELEFT");
                break;
        }
    },
    right_Move(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                Emitter.instance.emit("MOVERIGHT");
                break;
        }
    },
    resetPosition() {
        this.target.x = 259;
        this.target.y = 205;
    },
    easeSineIn() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeSineIn());
        this.target.runAction(seq);

    },
    easeSineOut() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeSineOut());
        this.target.runAction(seq);
    },
    easeSineInOut() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeSineInOut());
        this.target.runAction(seq);
    },
    easeInQuad() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeQuadraticActionIn());
        this.target.runAction(seq);
    },
    easeOutQuad() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeQuadraticActionOut());
        this.target.runAction(seq);
    },
    easeInOutQuad() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeQuadraticActionInOut());
        this.target.runAction(seq);
    },
    easeInCubic() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeCubicActionIn());
        this.target.runAction(seq);
    },
    easeOutCubic() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeCubicActionOut());
        this.target.runAction(seq);
    },
    easeInOutCubic() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeCubicActionInOut());
        this.target.runAction(seq);
    },
    easeInQuart() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeQuarticActionIn());
        this.target.runAction(seq);
    },
    easeOutQuart() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeQuarticActionOut());
        this.target.runAction(seq);
    },
    easeInOutQuart() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeQuarticActionInOut());
        this.target.runAction(seq);
    },
    easeInQuint() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeQuinticActionIn());
        this.target.runAction(seq);
    },
    easeOutQuint() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeQuinticActionOut());
        this.target.runAction(seq);
    },
    easeInOutQuint() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeQuinticActionInOut());
        this.target.runAction(seq);
    },
    easeInExpo() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeExponentialIn());
        this.target.runAction(seq);
    },
    easeOutExpo() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeExponentialOut());
        this.target.runAction(seq);
    },
    easeInOutExpo() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeExponentialInOut());
        this.target.runAction(seq);
    },
    easeInCirc() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeCircleActionIn());
        this.target.runAction(seq);
    },
    easeOutCirc() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeCircleActionOut());
        this.target.runAction(seq);
    },
    easeInOutCirc() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeCircleActionInOut());
        this.target.runAction(seq);
    },
    easeBackIn() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeBackIn());
        this.target.runAction(seq);
    },
    easeBackOut() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeBackOut());
        this.target.runAction(seq);
    },
    easeBackInOut() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeBackInOut());
        this.target.runAction(seq);
    },
    easeInElastic() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeElasticIn(3.0));
        this.target.runAction(seq);
    },
    easeOutElastic() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeElasticOut(3.0));
        this.target.runAction(seq);
    },
    easeInOutElastic() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeElasticInOut(3.0));
        this.target.runAction(seq);
    },
    easeInBounce() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeBounceIn());
        this.target.runAction(seq);
    },
    easeOutBounce() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeBounceOut());
        this.target.runAction(seq);
    },
    easeInOutBounce() {
        var seq = cc.sequence(cc.moveTo(0, 259, 205), cc.moveTo(3, 680, 205));
        seq.easing(cc.easeBounceInOut());
        this.target.runAction(seq);
    },


    // update (dt) {},
});
