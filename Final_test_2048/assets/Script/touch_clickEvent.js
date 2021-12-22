const Emitter = require("registerEvent");
cc.Class({
    extends: cc.Component,

    properties: {
        _xtouchUp: 0,
        _ytouchUp: 0,
        _xtouchDown: 0,
        _ytouchDown: 0,

    },

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchDown, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchUp, this);

    },

    touchDown(event) {
        this._xtouchDown = event.getLocationX();
        this._ytouchDown = event.getLocationY();
        cc.log(this._xtouchDown, this._ytouchDown);
    },
    touchUp(event) {
        this._xtouchUp = event.getLocationX();
        this._ytouchUp = event.getLocationY();
        this.isMove();
        cc.warn(this._xtouchUp, this._ytouchUp)
    },
    isMove() {

        if (this._xtouchDown != null && this._ytouchDown != null && this._xtouchUp != null && this._ytouchUp != null) {
            if (Math.abs(this._xtouchUp - this._xtouchDown) > Math.abs(this._ytouchUp - this._ytouchDown)) {
                if (this._xtouchUp > this._xtouchDown) {
                    Emitter.instance.emit("MOVERIGHT");
                }
                else {
                    Emitter.instance.emit("MOVELEFT");
                }
            }
            else {
                if (this._ytouchUp > this._ytouchDown) {
                    Emitter.instance.emit("MOVEUP");
                    cc.log("MOVEUP");
                }
                else {
                    cc.log("MOVEDOWN");
                    Emitter.instance.emit("MOVEDOWN");
                }
            }
        }
        else cc.error("ERROR!!!")
    },
    // update (dt) {},
});
