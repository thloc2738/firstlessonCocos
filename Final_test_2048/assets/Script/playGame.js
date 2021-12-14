const Emitter = require("registerEvent");

cc.Class({
    extends: cc.Component,

    properties: {
        mainScene: cc.Node,
        item: cc.Prefab,
        listItem: [],
        listFlag: [],
        playZone: cc.Layout,
    },

    onLoad() {
        let number;

        for (let index = 0; index < 2; index++) {
            // do {
            //     number = Math.floor(Math.random() * 16) + 1;
            //     cc.log("NUMBER: " + number);
            // } while (this.isCreate(number, this.listItem) == true && this.listItem.length < 16 );
            this.listItem.push(number);
            this.createItem(1);
        }



        // Emitter.instance = new Emitter();
        // let number;
        // let dragScene = this.dragSceneTouch.bind(this);
        // Emitter.instance.registerEvent("DRAG", dragScene);
        // this.mainScene.on('mousedown', function (event) {
        //     let number;
        //     if (this.listItem.length <= 16) {
        //     do {
        //         number = Math.floor(Math.random() * 16) + 1;
        //         cc.log("NUMBER: " + number);
        //     } while (this.isCreate(number, this.listItem) == true && this.listItem.length < 16 );
        //     this.listItem.push(number);
        //         this.createItem(number);
        //     }
        // }, this);
        // this.dragSceneTouch();
    },
    dragSceneTouch() {
        this.mainScene.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            console.log('Mouse down');

            this.mainScene.on(cc.Node.EventType.MOUSE_UP, function (event) {
                cc.log("Mouse up");
            }, this);
        }, this);
    },
    createItem(value) {
        let _item = cc.instantiate(this.item);
        this.playZone.node.getChildByName(value.toString()).addChild(_item);
        cc.tween(this.playZone.node.getChildByName(value.toString()).children[0])
            .to(0.15, { scale: 1 })
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
        var seq = cc.sequence(cc.moveTo(0, this.playZone.node.getChildByName("1").x, this.playZone.node.getChildByName("1").y),
            cc.moveTo(3, this.playZone.node.getChildByName("4").x, this.playZone.node.getChildByName("4").y));
        this.playZone.node.getChildByName("1").children[0].runAction(seq);

    }


    // update (dt) {},
});
