
cc.Class({
    extends: cc.Component,

    properties: {
        item: cc.Prefab,
        list: cc.Layout,
        listItem: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        for (let index = 0; index < 5; index++) {
            this.createItem();
        }

    },
    createItem() {
        let item = cc.instantiate(this.item);
        let number = Math.floor(Math.random() * 16) + 1;
        if (this.isCreate(number, this.listItem) == false) {
            this.list.node.getChildByName(number.toString()).addChild(item);
        }

    },
    isCreate(value, list) {
        for (let index = 0; index < list.length; index++) {
            if (value == list[index]) {
                return true;
            }
        }
        return false;
    },
    start() {
    },

    // update (dt) {},
});
