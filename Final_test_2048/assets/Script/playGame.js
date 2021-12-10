
cc.Class({
    extends: cc.Component,

    properties: {
        mainScene: cc.Node,
        item: cc.Prefab,
        listItem: [],
        listFlag: [],
        playZone: cc.Layout,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.mainScene.on('mousedown', function (event) {
            let number;
            do {
                number = Math.floor(Math.random() * 16) + 1;
            } while (this.isCreate(number, this.listItem) == true);
            this.listItem.push(number);
            if (this.listItem.length <= 16) {
                this.createItem(number);
            }
        }, this);
    },
    createItem(value) {
        let _item = cc.instantiate(this.item);

        this.playZone.node.getChildByName(value.toString()).addChild(_item);
        cc.tween(this.playZone.node.children[0])
            .to(1, { scale: 0.6 })
            .to(1, { scale: 1 })
            .start()
        return value;
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
