const Emitter = require('library')
cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
        _flagLeft: false,
        _flafRight: false,
        _flagJump: false,
        _canMove: true,
        moveSpeed: 1,
        frameEnd: 30,
        _count: 0,
        btn_Reset: cc.Button,
        animflag: true,
    },
    onLoad() {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("MOVELEFT", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("MOVERIGHT", this.moveRight.bind(this));
        Emitter.instance.registerEvent("MOVEJUMP", this.jumpMove.bind(this));
        Emitter.instance.registerEvent("GETANIMFLAG", this.getAnimFlag.bind(this));

    },
    update(dt) {
        if (this.flagLeft || this.flagJump || this.flafRight) {
            if (this._count > this.frameEnd) {
                this.visibleBtn(true);
                this.resetFlag();
                // Emitter.instance.emit("LOCKPRESS", true);
                return;
            }
            else {
                // Emitter.instance.emit("LOCKPRESS", false);
                if (this.flagLeft) {
                    this.target.scaleX = 0.5;
                    this.target.x -= this.moveSpeed;
                    this.visibleBtn(false);
                    if (this.target.x < 85) {
                        this.target.x = 85;
                    }
                } else if (this.flafRight) {
                    this.target.scaleX = -0.5;
                    this.target.x += this.moveSpeed;
                    this.visibleBtn(false);
                    if (this.target.x >= 872) {
                        this.target.x = 872;
                    }
                } else if (this.flagJump) {
                    this.visibleBtn(false);
                    if (this._count < this.frameEnd / 3) {
                        this.target.y += this.moveSpeed;
                    } else if (this._count >= this.frameEnd * 2 / 3) {
                        this.target.y -= this.moveSpeed;
                    } else if (this._count >= this.frameEnd / 3 && this._count < this.frameEnd * 2 / 3) {
                        if (this.target.scaleX < 0) {
                            this.target.angle -= 360 / (this.frameEnd / 3);
                        }
                        else {
                            this.target.angle += 360 / (this.frameEnd / 3);
                        }
                    }
                }
            }
            this._count++;
        }
    },
    disablePress(value) {

    },
    getAnimFlag() {
        cc.log("Flag: " + this.animflag);
        return this.animflag;
    },
    moveLeft() {
        this.flagLeft = true;
        this.flafRight = false;
        this.flagJump = false;
        this.animflag = false;
        cc.log("LEFT");
        this._count = 0;
    },
    moveRight() {
        this.flafRight = true;
        this.flagLeft = false;
        this.flagJump = false;
        this.animflag = false;
        cc.log("RIGHT");
        this._count = 0;
    },
    resetFlag() {
        this.flafRight = false;
        this.flagJump = false;
        this.flagLeft = false;
    },
    jumpMove() {
        this.flagJump = true;
        this.flafRight = false;
        this.flafRight = false;
        this.animflag = false;
        cc.log("JUMP");
        this._count = 0;
    },
    reset() {
        this.target.x = 480;
        this.target.y = 230;

    },
    visibleBtn(value) {
        Emitter.instance.emit("RESET", value);
    }
});
