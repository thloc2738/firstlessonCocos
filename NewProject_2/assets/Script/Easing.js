
cc.Class({
    extends: cc.Component,

    properties: {
        // easeIBtn: cc.Button,
        target: cc.Node,
    },


    onLoad() {
        this.target.x = 300;
        this.target.y = 300;

    },
    easeSineIn() {
        var action = cc.moveBy(0.5, 500, 2);
        action.easing(cc.easeSineIn());
        this.target.runAction(action);
    },
    easeSineOut() {
        var action = cc.moveBy(0.5, 500, 2);
        action.easing(cc.easeSineOut());
        this.target.runAction(action);
    },
    easeSineInOut() {
        var action = cc.moveBy(0.5, 500, 2);
        action.easing(cc.easeSineInOut());
        this.target.runAction(action);
    },
    easeInQuad() {
        var action = cc.moveBy(0.5, 500, 2);
        action.easing(cc.easeQuadraticActionIn());
        this.target.runAction(action);
    },
    easeOutQuad() {
        var action = cc.moveBy(0.5, 500, 2);
        action.easing(cc.easeQuadraticActionOut());
        this.target.runAction(action);
    },
    easeInOutQuad() {
        var action = cc.moveBy(0.5, 500, 2);
        action.easing(cc.easeQuadraticActionInOut());
        this.target.runAction(action);
    },
    easeInCubic() {
        var action = cc.moveBy(0.5, 500, 2);
        action.easing(cc.easeCubicActionIn());
        this.target.runAction(action);
    },
    easeInCubic() {
        var action = cc.moveBy(0.5, 500, 2);
        action.easing(cc.easeCubicActionOut());
        this.target.runAction(action);
    },
    easeInOutCubic() {
        var action = cc.moveBy(0.5, 500, 2);
        action.easing(cc.easeCubicActionInOut());
        this.target.runAction(action);
    },
    easeInQuart() {
        var action = cc.moveBy(0.5, 500, 2)
        action.easing(cc.easeQuarticActionIn());
        this.target.runAction(action);
    },
    easeOutQuart() {
        var action = cc.moveBy(0.5, 500, 2)
        // action.easing(cc.easeQuarticActionOut());
        action.easing(cc.QuarticActionOut());
        this.target.runAction(action);
    },
    easeInOutQuart() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.QuarticActionInOut());
        this.target.runAction(action);
    },
    easeInQuint() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeQuinticActionIn());
        this.target.runAction(action);
    },
    easeOutQuint() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeQuadraticActionOut());
        this.target.runAction(action);
    },
    easeInOutQuint() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeQuinticActionInOut());
        this.target.runAction(action);
    },
    easeInExpo() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeExponentialIn());
        this.target.runAction(action);
    },
    easeOutExpo() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeExponentialOut());
        this.target.runAction(action);
    },
    easeInOutExpo() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeExponentialInOut());
        this.target.runAction(action);
    },
    easeInCirc() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeCircleActionIn());
        this.target.runAction(action);
    },
    easeOutCirc() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeCircleActionOut());
        this.target.runAction(action);
    },
    easeInOutCirc() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeCircleActionInOut());
        this.target.runAction(action);
    },
    easeBackIn() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeBackIn());
        this.target.runAction(action);
    },
    easeBackOut() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeBackOut());
        this.target.runAction(action);
    },
    easeBackInOut() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeBackInOut());
        this.target.runAction(action);
    },
    easeInElastic() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeElasticIn(3.0));
        this.target.runAction(action);
    },
    easeOutElastic() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeElasticOut(3.0));
        this.target.runAction(action);
    },
    easeInOutElastic() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeElasticInOut(3.0));
        this.target.runAction(action);
    },
    easeInBounce() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeBounceIn());
        this.target.runAction(action);
    },
    easeOutBounce() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeBounceOut());
        this.target.runAction(action);
    },
    easeInOutBounce() {
        var action = cc.moveTo(0.5, 800, 2)
        action.easing(cc.easeBounceInOut());
        this.target.runAction(action);
    },


    // update (dt) {},
});
