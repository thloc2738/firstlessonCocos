const Emitter = require('library');
cc.Class({
    extends: cc.Component,

    properties: {

    },



    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.left_Move, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.right_Move, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.jump_Move, this);
    },
    left_Move(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                Emitter.instance.emit("MOVELEFT");

        }

    },
    right_Move(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                Emitter.instance.emit("MOVERIGHT", "+10");
                console.log('Press right arrow key');
        }
    },
    jump_Move(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                Emitter.instance.emit("MOVEJUMP", "JUMP P");
                console.log('Press up arrow key');
        }
    },
    start() {

    },


    // update (dt) {},
});
