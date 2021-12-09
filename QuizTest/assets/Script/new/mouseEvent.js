const Emitter = require('library');
cc.Class({
    extends: cc.Component,
    properties: {
        btn_L: cc.Button,
        btn_R: cc.Button,
        btn_J: cc.Button,

    },
    onLoad() {
        this.btn_L.node.on('click', this.left_M, this);
        this.btn_R.node.on('click', this.right_M, this);
        this.btn_J.node.on('click', this.jump_M, this);
        Emitter.instance.registerEvent("RESET", this.resetBtn.bind(this));

    },
    left_M() {
        Emitter.instance.emit("MOVELEFT");
    },
    right_M() {
        Emitter.instance.emit("MOVERIGHT");
    },
    jump_M() {
        Emitter.instance.emit("MOVEJUMP");
    },
    resetBtn(value) {
        this.btn_L.interactable = value;
        this.btn_R.interactable = value;
        this.btn_J.interactable = value;
    },
});