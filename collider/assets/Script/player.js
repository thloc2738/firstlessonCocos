
cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
        isTouch: false,
        deltatime: 0,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        this.spAnim.setEventListener((entry, event) => {
            const { data } = event;
            cc.log(data.name);

        });
    },

    start() {

    },
    onCollisionEnter: function (other, self) {
        console.log('on collision enter');

        this.isTouch = true;
    },
    onCollisionStay: function (other, self) {
        console.log('on collision stay');

    },
    onCollisionExit: function (other, self) {
        console.log('on collision exit');

    },
    update(dt) {
        if (this.isTouch == false) {
            this.target.y -= dt * 50;
        } else {
            this.deltatime += dt;
            if (this.deltatime >= 2) {
                this.target.y += dt * 50;
            }
        }





    },
});
