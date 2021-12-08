
cc.Class({
    extends: cc.Component,

    properties: {
      topRank: cc.Node,
    },
    menuScene(){
        cc.director.loadScene("Menu");
    },
    showRank(){
        this.topRank.active = true;
    },
    hideRank(){
        this.topRank.active = false;
    },

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
