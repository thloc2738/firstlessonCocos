const Emitter = require('registerEvent');
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
        if (other.tag == 3 && self.tag == 1) {
            this.node.destroy();
        }

        // let action = cc.sequence(cc.delayTime(0.35), cc.callFunc(() => {
        //     this.node.destroy();
        // }));
        // this.node.runAction(action);


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
