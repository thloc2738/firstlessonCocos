
cc.Class({
    extends: cc.Component,

    properties: {
        item: cc.Prefab,
        list: cc.Layout,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    createItem() {
        let item = cc.instantiate(this.userInfo);
        this.list.getChildByName("1").addChild(item);
        cc.log(this.list.getChildByName("1"));
    },
    start() {

    },

    // update (dt) {},
});
