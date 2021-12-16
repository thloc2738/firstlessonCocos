const Emitter = require("registerEvent");

cc.Class({
    extends: cc.Component,

    properties: {
        mainScene: cc.Node,
        item: cc.Prefab,
        listFlag: [],
        boxLayout: cc.Layout,
        xPosition: [],
        yPosition: [],
        fillTable: [],
        count: 0,
        isFill: [],
        emptyNode: cc.Prefab,
    },
    createTable() {
        for (let i = 0; i < 16; i++) {
            let x, y;
            if (i % 4 == 0) {
                x = -232;
                y = 27 + (i / 4) * (-155);
            } else if (i % 4 == 1) {
                x = -77;
                y = 27 + ((i - 1) / 4) * (-155);
            } else if (i % 4 == 2) {
                x = 77;
                y = 27 + ((i - 2) / 4) * (-155);
            } else if (i % 4 == 3) {
                x = 232;
                y = 27 + ((i - 3) / 4) * (-155);
            }
            this.xPosition.push(x);
            this.yPosition.push(y);
        }
    },
    createItem(value) {
        let _item = cc.instantiate(this.item);
        // _item.setParent(this.mainScene);
        // this.mainScene.children[value].setParent(this.mainScene);
        this.mainScene.children[value] = _item;
        cc.log(this.mainScene.children)
        this.mainScene.children[value].x = this.xPosition[value];
        this.mainScene.children[value].y = this.yPosition[value];
        cc.tween(this.mainScene.children[value])
            .to(0.5, { scale: 1 })
            .start()
    },
    isCreate(value, list) {
        for (let index = 0; index <= list.length; index++) {
            if (value == list[index]) {
                return true;
            }
        }
        return false;
    },
    onLoad() {
        // this.createEmptyParentNode();

        // this.emptyTable(this.isFill, 0);
        // cc.log(this.isFill);
        // this.createTable()
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.moveRight, this);
        // this.mainScene.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
        //     this.addItemInBox(this.isFill);
        // }, this);
    },
    addItemInBox(listItem) {
        let number;
        if (this.fillTable.length <= 15) {
            do {
                number = Math.floor(Math.random() * 16);

            } while (this.isCreate(number, this.fillTable) == true && this.fillTable.length <= 15 && listItem[number] != 0);
            cc.log("NUMBER: " + number);

            this.createItem(number);
            this.fillTable.push(number);
            listItem[number] = 2;
            cc.log(listItem);
            cc.log(this.fillTable)
        }
    },

    moveRight: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                cc.log("right");
                this.goRight(this.isFill);
                break;
        }
    },
    goRight(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i] == 0 && (k % 4) > 0) {
                    if (array[k - 1] == 0) {
                        k--;
                    }
                    else {
                        array[i] += array[k - 1];
                        array[k - 1] = 0;
                        k--;
                    }
                }
            }

        }

        for (let i = array.length - 1; i > 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i] != 0 && (k % 4) > 0) {
                    if (array[i] != array[k - 1]) {
                        k--
                    }
                    else {
                        array[i] += array[i - 1];
                        array[i - 1] = 0;
                        k--
                    }
                }
            }
        }
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i] == 0 && (k % 4) > 0) {
                    if (array[k - 1] == 0) {
                        k--;
                    }
                    else {
                        array[i] = array[k - 1];
                        array[k - 1] = 0;
                        k--;
                    }
                }

            }
        }
        cc.log(array)
    },

    rightMoment(list) {
        for (let i = 0; i < 16; i++) {
            if (this.fillTable.length > 0) {

            }
        }
        cc.log(this.isFill);
    },

    moveUp() {

    },
    moveDown() {

    },
    createEmptyParentNode() {
        for (let i = 0; i < 16; i++) {
            let emptyN = cc.instantiate(this.emptyNode);
            this.mainScene.addChild(emptyN);
        }
    },
    emptyTable(list, value) {
        for (let index = 0; index < 16; index++) {
            list.push(value);
        }

    },
});