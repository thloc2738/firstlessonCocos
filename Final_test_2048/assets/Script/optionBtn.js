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
        _exitClick: true,
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
        gameWinnerPopUp: cc.Node,
    },


    onLoad() {
        cc.log(this.optionBtn, "Option button");
        this.backgroundMusic.play();
        this.backgroundMusic.loop = true;
        this.scrollMusic.node.on('slide', this.volumeBGM, this);
        var option = cc.repeatForever(cc.rotateBy(.5,15));
        this.optionBtn.node.runAction(option);
        var exit = cc.repeatForever(cc.sequence(cc.rotateTo(3.25,-45), cc.rotateTo(2.75,45)));
        this.exitBtn.node.runAction(exit);
        var menu = cc.repeatForever(cc.sequence(cc.rotateTo(2.75,-55), cc.rotateTo(2.5,55)));
        this.menuBtn.node.runAction(menu);
        var sound = cc.repeatForever(cc.sequence(cc.rotateTo(3,40), cc.rotateTo(2.25,-40)));
        this.soundBtn.node.runAction(sound);
        var music = cc.repeatForever(cc.sequence(cc.rotateTo(2,-30),cc.rotateTo(2,30)));
        this.musicBtn.node.runAction(music);
        var newgame = cc.repeatForever(cc.sequence(cc.rotateTo(2,40),cc.rotateTo(3,-40)));
        this.newgameBtn.node.runAction(newgame);
        var lead = cc.repeatForever(cc.sequence(cc.rotateTo(2.5,-40),cc.rotateTo(3.5,40)));
        this.leadBoard.node.runAction(lead);
    },
    volumeBGM() {
        this.backgroundMusic.volume = this.scrollMusic.progress;
    },
    optionClickBtn() {
        if (this._isClick) {
            this.clickSound.play();
            this.optionBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.backSprite;
            this._isClick = false;
            var music = cc.moveTo(.5, -250, 700);
            this.musicBtn.node.runAction(music);

            var sound = cc.moveTo(.5, -120, 700);
            this.soundBtn.node.runAction(sound);

            var menu = cc.moveTo(.5, 5, 700);
            this.menuBtn.node.runAction(menu);

            var exit = cc.moveTo(.5, 125, 700);
            this.exitBtn.node.runAction(exit);
        }
        else {
            this.clickSound.play();
            this.optionBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.optionSprite;
            this._isClick = true;
            var music = cc.moveTo(.5, 250, 700);
            this.musicBtn.node.runAction(music);

            var sound = cc.moveTo(.5, 250, 700);
            this.soundBtn.node.runAction(sound);

            var menu = cc.moveTo(.5, 250, 700);
            this.menuBtn.node.runAction(menu);

            var exit = cc.moveTo(.5, 250, 700);
            this.exitBtn.node.runAction(exit);

            var action = cc.sequence(cc.spawn(cc.moveTo(.5,250,700),cc.scaleTo(1,0)),cc.callFunc(()=>{
                this.scrollMusic.node.active = false;
                this._musicClick = true;
            }));
            this.scrollMusic.node.runAction(action);
        }

    },
    soundClick() {
        this.clickSound.play();
        if (this._soundClick) {
            this.soundBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.muteSprite;
            this._soundClick = false;
            this.clickSound.volume = 0;
            Emitter.instance.emit("OFFMOVESOUND");
        }
        else {
            this.soundBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.soundSprite;
            this._soundClick = true;
            this.clickSound.volume = 1;
            Emitter.instance.emit("ONMOVESOUND");
        }
    },
    musicClick() {
        this.clickSound.play();
        if (this._musicClick) {
            this.scrollMusic.node.active = true;
            this.scrollMusic.node.x = -250;
            this.scrollMusic.node.y = 700;
            this.scrollMusic.node.scale = 0;
            var action = cc.spawn(cc.scaleTo(0.5,1), cc.moveTo(0.5,-330,700));
            this.scrollMusic.node.runAction(action);
            this._musicClick = false;
        }
        else {
            this.scrollMusic.node.x = -330;
            this.scrollMusic.node.y = 700;
            this.scrollMusic.node.scale = 1;
            var action = cc.spawn(cc.scaleTo(.5,0), cc.moveTo(.5,-250,700));
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
        if (this._exitClick) {
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
    closeWinnerPopup() {
        var action = cc.sequence(cc.spawn(cc.scaleTo(1, 0), cc.moveTo(1, 720, 1280)), cc.callFunc(() => {
            Emitter.instance.emit("RESETGAME");
        }));
        action.easing(cc.easeBounceIn(1));
        this.gameWinnerPopUp.runAction(action);

    },
    keepPlay(){
        var action = cc.sequence(cc.spawn(cc.scaleTo(1, 0), cc.moveTo(1, 720, 1280)), cc.callFunc(() => {
            this.gameOverTrans.active = false;
        }));
        action.easing(cc.easeBounceIn(1));
        this.gameWinnerPopUp.runAction(action);

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
        if (this._exitClick) {
            var exitpopup = cc.spawn(cc.scaleTo(.75, 1), cc.moveTo(.75, 360, 664));
            this.exitPopup.runAction(exitpopup);
        }

    },
    start() {

    },

    // update (dt) {},
});
