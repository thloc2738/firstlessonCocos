const Emitter = require("registerEvent");
cc.Class({
    extends: cc.Component,

    properties: {
        exitBtn: cc.Button,
        musicBtn: cc.Button,
        soundBtn: cc.Button,
        menuBtn: cc.Button,
        optionBtn: cc.Button,
        newgameBtn: cc.Button,
        leadBoard: cc.Button,
        optionSprite: cc.SpriteFrame,
        backSprite: cc.SpriteFrame,
        muteSprite: cc.SpriteFrame,
        unmusicSprite: cc.SpriteFrame,
        soundSprite: cc.SpriteFrame,
        musicSprite: cc.SpriteFrame,
        _isClick: true,
        _soundClick: true,
        _musicClick: true,
        _topClick: true,
        exitPopup: cc.Node,
        transparentBg: cc.Node,
        clickSound: cc.AudioSource,
        topRank: cc.Node,
        _animFlag: true,
        transparentToprank: cc.Node,
        gameOverPopUp: cc.Node,
        gameOverTrans: cc.Node,
        backgroundMusic: cc.AudioSource,
        scrollMusic: cc.Slider,
    },


    onLoad() {
        cc.log(this.optionBtn, "Option button");
        this.backgroundMusic.play();
        this.backgroundMusic.loop = true;
        this.scrollMusic.node.on('slide', this.volumeBGM, this);
        var action = cc.repeatForever(cc.sequence(cc.rotateTo(3,45), cc.rotateTo(3,-45)));
        this.optionBtn.node.runAction(action);
        var a = cc.spawn(cc.delayTime(1),cc.repeatForever(cc.sequence(cc.rotateTo(3,45), cc.rotateTo(3,-45))));
        this.exitBtn.node.runAction(a);
        // var action = cc.delayTime(1,cc.repeatForever(cc.sequence(cc.rotateTo(3,45), cc.rotateTo(3,-45))));
        // this.menuBtn.node.runAction(action);
        // var action = cc.repeatForever(cc.sequence(cc.delayTime(1.5),cc.rotateTo(3,45), cc.rotateTo(3,-45)));
        // this.soundBtn.node.runAction(action);
        // var action = cc.repeatForever(cc.sequence(cc.delayTime(2),cc.rotateTo(3,45), cc.rotateTo(3,-45)));
        // this.musicBtn.node.runAction(action);
    },
    volumeBGM() {
        this.backgroundMusic.volume = this.scrollMusic.progress;
    },
    optionClickBtn() {
        if (this._isClick) {
            this.clickSound.play();
            this.optionBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.backSprite;
            this._isClick = false;
            var music = cc.moveTo(.5, -177, 700);
            this.musicBtn.node.runAction(music);

            var sound = cc.moveTo(.5, -59, 700);
            this.soundBtn.node.runAction(sound);

            var menu = cc.moveTo(.5, 51, 700);
            this.menuBtn.node.runAction(menu);

            var exit = cc.moveTo(.5, 171, 700);
            this.exitBtn.node.runAction(exit);
        }
        else {
            this.clickSound.play();
            this.optionBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.optionSprite;
            this._isClick = true;
            var music = cc.moveTo(.5, 286, 700);
            this.musicBtn.node.runAction(music);

            var sound = cc.moveTo(.5, 286, 700);
            this.soundBtn.node.runAction(sound);

            var menu = cc.moveTo(.5, 286, 700);
            this.menuBtn.node.runAction(menu);

            var exit = cc.moveTo(.5, 286, 700);
            this.exitBtn.node.runAction(exit);
        }

    },
    soundClick() {
        this.clickSound.play();
        if (this._soundClick) {
            this.soundBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.muteSprite;
            this._soundClick = false;
            Emitter.instance.emit("OFFSOUND");
            // this.backgroundMusic.pause();
        }
        else {
            this.soundBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.soundSprite;
            this._soundClick = true;
            Emitter.instance.emit("ONSOUND");
            this.backgroundMusic.resume();
            // this.backgroundMusic.loop = true;
        }
    },
    musicClick() {
        this.clickSound.play();
        if (this._musicClick) {
            this.scrollMusic.node.active = true;
            this.scrollMusic.node.x = 0;
            this.scrollMusic.node.y = 0;
            this.scrollMusic.node.scale = 0;
            var action = cc.spawn(cc.scaleTo(1,1), cc.moveTo(1,0,-90));
            this.scrollMusic.node.runAction(action);
            this._musicClick = false;
        }
        else {
            this.scrollMusic.node.x = 0;
            this.scrollMusic.node.y = -90;
            this.scrollMusic.node.scale = 1;
            var action = cc.spawn(cc.scaleTo(.5,0), cc.moveTo(.5,0,0));
            this.scrollMusic.node.runAction(action);
            this._musicClick = true;
        }
    },
    exitGame() {
        cc.game.end();
    },
    closeExit() {
        this.clickSound.play();
        this.exitPopup.x = 360;
        this.exitPopup.y = 664;
        if (this._soundClick) {
            var exitpopup = cc.sequence(cc.spawn(cc.scaleTo(.25, 0), cc.moveTo(.25, 525, 1190)), cc.callFunc(() => {
                this.exitPopup.active = false;
                this.transparentBg.active = false;
            }));
            this.exitPopup.runAction(exitpopup);
        }

    },
    closeGameOverPopup() {
        var action = cc.sequence(cc.spawn(cc.scaleTo(1, 0), cc.moveTo(1, 720, 1280)), cc.callFunc(() => {
            Emitter.instance.emit("RESETGAME");
        }));
        action.easing(cc.easeBounceIn(1));
        this.gameOverPopUp.runAction(action);

    },
    menuScene() {
        this.clickSound.play();
        cc.director.loadScene("Menu");
    },
    showRank() {
        this.clickSound.play();
        this.topRank.scale = 0;
        this.topRank.x = 230;
        this.topRank.y = 210;
        this.topRank.active = true;
        this.transparentToprank.active = true;
        var action = cc.spawn(cc.scaleTo(0.75, 1), cc.moveTo(0.75, 0, 0));
        this.topRank.runAction(action);
    },
    hideRank() {
        this.clickSound.play();
        this.topRank.x = 0;
        this.topRank.y = 0;
        this.topRank.scale = 1;
        var action = cc.sequence(cc.spawn(cc.scaleTo(0.25, 0), cc.moveTo(0.25, 230, 210)), cc.callFunc(() => {
            this.transparentToprank.active = false;
            this.topRank.active = false;
            this.transparentToprank.active = false;
        }));
        this.topRank.runAction(action);

    },
    exitBtnClick() {
        this.clickSound.play();
        this.transparentBg.active = true;
        this.exitPopup.active = true;
        this.exitPopup.scale = 0;
        this.exitPopup.x = 525;
        this.exitPopup.y = 1190;
        if (this._soundClick) {
            var exitpopup = cc.spawn(cc.scaleTo(.75, 1), cc.moveTo(.75, 360, 664));
            this.exitPopup.runAction(exitpopup);
        }

    },
    start() {

    },

    // update (dt) {},
});
