const Emitter = require('library');
cc.Class({
    extends: cc.Component,

    properties: {
        frame: 0,
        lastFrame: 30,
        animflag: true,
        isPress: false,
    },



    onLoad() {
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.left_Move, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.right_Move, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.jump_Move, this);
        // Emitter.instance.registerEvent("LOCKPRESS", this.lockPress.bind(this));
    },
    update(dt) {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.left_Move, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.right_Move, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.jump_Move, this);
        if (cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.left_Move, this)) {
            if (this.animflag) {
                if (this.frame > this.lastFrame || this.frame == 0) {
                    this.animflag = true;
                    this.frame = 0;
                    return;
                }
                else if (this.frame == this.lastFrame) {
                    this.animflag = true;
                }
                else {
                    this.animflag = false;
                }
                //this.animflag = true;
                this.frame++;
            }
            else return;
        }
        else {

        }

        // cc.log(this.frame);



    },
    left_Move(event) {
        if (!this.animflag) return
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                Emitter.instance.emit("MOVELEFT");
                break;
        }

    },
    right_Move(event) {
        if (!this.animflag) return

        switch (event.keyCode) {
            case cc.macro.KEY.right:
                Emitter.instance.emit("MOVERIGHT");
                break;
        }
    },
    jump_Move(event) {
        if (!this.animflag) return

        switch (event.keyCode) {
            case cc.macro.KEY.up:
                Emitter.instance.emit("MOVEJUMP");
                break;
        }
    },
    lockPress(value) {
        this.animflag = value;
    }

});
