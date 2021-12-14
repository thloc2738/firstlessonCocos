
cc.Class({
    extends: cc.Component,

    properties: {

    },



    onLoad() {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },
    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        let action = cc.sequence(cc.delayTime(0.25), cc.callFunc(() => {
            this.node.destroy();
        }));
        this.node.runAction(action);


    },
    onCollisionStay: function (other, self) {
        console.log('on collision stay');

    },
    onCollisionExit: function (other, self) {
        console.log('on collision exit');

    },
    start() {

    },

    update(dt) { },
});
