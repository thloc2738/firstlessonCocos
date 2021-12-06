
cc.Class({
    extends: cc.Component,
    target: cc.Node,
    properties: {
        flagLeft: false,
        flafRight: false,
        flagJump: false,
        btnL: cc.Button,
        btnR: cc.Button,
        btnJ: cc.Button,
        canMove: true,
        moveSpeed: 2,
        frameEnd: 60,
        _count: 0,
    },

    update(dt) {
        if (this.flagLeft || this.flagJump || this.flafRight) {
            if (this._count > this.frameEnd) {
                this.resetBtn(true);
                this.resetFlag();
                return;
            }
            if (this.flagLeft) {
                this.node.scaleX = 0.5;
                this.node.x -= this.moveSpeed;
                this.resetBtn(false);
                if (this.node.x < 85) {
                    this.node.x = 85;
                }

            } else if (this.flafRight) {
                this.node.scaleX = -0.5;
                this.node.x += this.moveSpeed;
                this.resetBtn(false);
                if (this.node.x >= 872) {
                    this.node.x = 872;
                }
            } else if (this.flagJump) {
                this.resetBtn(false);
                if (this._count < this.frameEnd / 3) {
                    this.node.y += this.moveSpeed;
                } else if (this._count >= this.frameEnd * 2 / 3) {
                    this.node.y -= this.moveSpeed;
                } else if (this._count >= this.frameEnd / 3 && this._count < this.frameEnd * 2 / 3) {
                    if (this.node.scaleX < 0) {
                        this.node.angle -= 360 / (this.frameEnd / 3);
                    }
                    else {
                        this.node.angle += 360 / (this.frameEnd / 3);
                    }
                }


            }
            this._count++;

        }
    },
    moveLeft() {
        this.flagLeft = true;
        this.flafRight = false;
        this.flagJump = false;
        this._count = 0;
    },
    moveRight() {
        this.flafRight = true;
        this.flagLeft = false;
        this.flagJump = false;
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
        this.flagLeft = false;
        this._count = 0;
    },
    reset() {
        this.node.x = 480;
        this.node.y = 230;
    },
    resetBtn(value) {
        this.btnL.interactable = value;
        this.btnR.interactable = value;
        this.btnJ.interactable = value;
    }
});
