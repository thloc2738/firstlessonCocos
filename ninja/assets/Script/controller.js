const Emitter = require('registerEvent');
cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
        spAnim: sp.Skeleton,
        walkSound: cc.AudioSource,
        leftBtnAc: cc.Button,
        rightBtnAc: cc.Button,
        jumpBtnAc: cc.Button,
        leftBtnTw: cc.Button,
        rightBtnTw: cc.Button,
        jumpBtnTw: cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.left_Move, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.right_Move, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.jump_move, this);

        this.leftBtnAc.node.on("click", this.left_Action, this);
        this.rightBtnAc.node.on("click", this.right_Action, this);
        this.jumpBtnAc.node.on("click", this.jump_Action, this);

        this.leftBtnTw.node.on("click", this.left_Tween, this);
        this.rightBtnTw.node.on("click", this.right_Tween, this);
        this.jumpBtnTw.node.on("click", this.jump_Tween, this);
        this.target.x = 560;
        this.target.y = 80;
        this.spAnim.setEventListener((entry, event) => {
            const { data } = event;
            if (data.name == "footstep") {
                this.walkSound.play();
            }
        });
    },

    start() {
        this.spAnim.addAnimation(0, "run", true);
    },
    left_Action() {
        Emitter.instance.emit("LeftAction");
    },
    right_Action() {
        Emitter.instance.emit("RightAction");
    },
    jump_Action() {
        Emitter.instance.emit("JumpAction");
    },
    left_Tween() {
        Emitter.instance.emit("LeftTween");
    },
    right_Tween() {
        Emitter.instance.emit("RightTween");
    },
    jump_Tween() {
        Emitter.instance.emit("JumpTween");
    },

    jump_move(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                Emitter.instance.emit("MOVE_JUMP");
                break;
        }
    },
    left_Move(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                Emitter.instance.emit("MOVE_LEFT");
                break;
        }
    },
    right_Move(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                Emitter.instance.emit("MOVE_RIGHT");
                break;
        }
    },
    // update (dt) {},
});
