
cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    },

    start() {

    },
    onCollisionEnter: function (other, self) {
        cc.warn("1234");
    },
    onCollisionStay: function (other, self) {
        console.log('on collision stay');
        cc.log("other: " + other);
        cc.log("self: " + self)
    },
    onCollisionExit: function (other, self) {
        console.log('on collision exit');
        cc.log("other: " + other);
        cc.log("self: " + self)
    },
    update(dt) { },
});
