
cc.Class({
    extends: cc.Component,

    properties: {

    },
    gamePlayScenee() {
        cc.director.loadScene("GamePlay");
    },
    optionScene() {
        cc.director.loadScene("Option");
    },
    exitGame() {
        cc.game.end();
    },

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});
