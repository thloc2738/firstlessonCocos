
cc.Class({
    extends: cc.Component,

    properties: {
        pageView: cc.PageView,
        menu: cc.Node,
        tutorial: cc.Node,
        option: cc.Node,
        clickSound: cc.AudioSource,
    },
    tutorialScenee() {
        this.menu.active = false;
        this.tutorial.active = true;
        this.option.active = false;
    },
    optionScene() {
        this.menu.active = false;
        this.tutorial.active = false;
        this.option.active = true;
    },
    menuScene() {
        this.tutorial.active = false;
        this.option.active = false;
        this.menu.active = true;
    },

    // onLoad () {},
    tutorialPage() {
        if (this.pageView.getCurrentPageIndex() == 2) {
            cc.director.loadScene("GamePlay");
            this.tutorial.active = false;
        }
    },
    start() {

    },

    // update (dt) {},
});
