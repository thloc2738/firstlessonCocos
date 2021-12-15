
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onCollisionEnter: function (other, self) {
        if (other.tag == 0 && self.tag == 3) {
            this.node.destroy();
        }

    },
    onCollisionStay: function (other, self) {
    },
    onCollisionExit: function (other, self) {
    },
    start() {

    },

    // update (dt) {},
});
