const Emitter = require("registerEvent");
cc.Class({
    extends: cc.Component,

    properties: {
        pageView: cc.PageView,
        menu: cc.Node,
        tutorial: cc.Node,
        option: cc.Node,
        _xmouseUp: null,
        _xmouseDown: null,
        page3: cc.Node,
        backgroundMusic: cc.AudioSource,
        bgm: cc.Slider,
        soundCheck: cc.Toggle,
        clickBtn: cc.AudioSource,
    },
    volumeBGM() {
        this.backgroundMusic.volume = this.bgm.progress;
    },
    tutorialScenee() {
        this.clickBtn.play();
        this.tutorial.active = true;
        this.tutorial.x = 357.19;
        this.tutorial.y = 640.162;
        this.menu.active = false;
        this.option.active = false;
    },
    optionScene() {
        this.clickBtn.play();
        this.menu.active = false;
        this.tutorial.active = false;
        this.option.active = true;
    },
    menuScene() {
        this.clickBtn.play();
        this.tutorial.active = false;
        this.option.active = false;
        this.menu.active = true;
    },

    onLoad() {
        cc.log(this.soundCheck);
        this.bgm.node.on('slide', this.volumeBGM, this);
        this.soundCheck.node.on('toggle', this.muteSound, this);
        this.backgroundMusic.play();
        this.backgroundMusic.loop = true;
        this.page3.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDown, this);
        this.page3.on(cc.Node.EventType.MOUSE_UP, this.mouseUp, this);
        Emitter.instance = new Emitter();
    },
    muteSound() {
        if (this.soundCheck.isChecked == false) {
            this.clickBtn.volume = 0;
        }
        else {
            this.clickBtn.volume = 1;
        }
    },
    onBGM() {
        this.backgroundMusic.play();
        this.backgroundMusic.loop = true;
    },
    offBGM() {
        this.backgroundMusic.play();
    },
    mouseDown(event) {
        this._xmouseDown = event.getLocationX();
        cc.log(this._xmouseDown);
    },
    mouseUp(event) {
        this._xmouseUp = event.getLocationX();
        cc.warn(this._xmouseUp);
        this.tutorialPage();
    },
    tutorialPage() {
        if (this._xmouseUp < this._xmouseDown) {

            this.menu.active = true;
            var outmenu = cc.spawn(cc.fadeOut(1), cc.callFunc(() => {
                cc.director.loadScene("GamePlay");
            }));
            this.menu.runAction(outmenu);
            var action = cc.moveTo(1, -400, 640);
            this.tutorial.runAction(action);
        }
    },
    start() {

    },

    // update (dt) {},
});
