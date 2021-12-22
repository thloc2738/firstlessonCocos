const Emitter = require("registerEvent");
cc.Class({
    extends: cc.Component,

    properties: {
        _xmouseUp: 0,
        _ymouseUp: 0,
        _xmouseDown: 0,
        _ymouseDown: 0,

    },

    onLoad() {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.mouseUp, this);

    },

    mouseDown(event) {
        this._xmouseDown = event.getLocationX();
        this._ymouseDown = event.getLocationY();
        cc.log(this._xmouseDown, this._ymouseDown);
    },
    mouseUp(event) {
        this._xmouseUp = event.getLocationX();
        this._ymouseUp = event.getLocationY();
        this.isMove();
        cc.warn(this._xmouseUp, this._ymouseUp)
    },
    isMove() {

        if (this._xmouseDown != null && this._ymouseDown != null && this._xmouseUp != null && this._ymouseUp != null) {
            if (Math.abs(this._xmouseUp - this._xmouseDown) > Math.abs(this._ymouseUp - this._ymouseDown)) {
                if (this._xmouseUp > this._xmouseDown) {
                    Emitter.instance.emit("MOVERIGHT");
                }
                else {
                    Emitter.instance.emit("MOVELEFT");
                }
            }
            else {
                if (this._ymouseUp > this._ymouseDown) {
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
