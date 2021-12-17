const Emitter = require("registerEvent");

cc.Class({
    extends: cc.Component,

    properties: {
        mainScene: cc.Node,
        item: cc.Prefab,
        listFlag: [],
        boxLayout: cc.Layout,
        xyPosition: [],
        fillTable: [],
        isFill: [],
        count: 0,
        arr: [],
    },
    createTable() {
        for (let i = 0; i < 16; i++) {
            let x, y, pos;
            if (i % 4 == 0) {
                x = -232;
                y = 27 + (i / 4) * (-155);
                pos = cc.v3(x, y, 0);
            } else if (i % 4 == 1) {
                x = -77;
                y = 27 + ((i - 1) / 4) * (-155);
                pos = cc.v3(x, y, 0);
            } else if (i % 4 == 2) {
                x = 77;
                y = 27 + ((i - 2) / 4) * (-155);
                pos = cc.v3(x, y, 0);
            } else if (i % 4 == 3) {
                x = 232;
                y = 27 + ((i - 3) / 4) * (-155);
                pos = cc.v3(x, y, 0);
            }
            cc.log(pos)
            this.xyPosition.push(pos);
        }

        cc.log(this.xyPosition)
    },
    createItem(value, index) {
        let _item = cc.instantiate(this.item);
        this.mainScene.addChild(_item);
        this.mainScene.children[index].getChildByName("numb").getComponent(cc.Label).string = 2;
        cc.log(this.mainScene.children[index])
        this.mainScene.children[index].position = this.xyPosition[value];
        cc.tween(this.mainScene.children[index])
            .to(0.5, { scale: 1 })
            .start()
        this.count++;
    },
    isCreate(node, list) {
        for (let index = 0; index <= list.length; index++) {
            if (node.position == list[index]) {
                return true;
            }
        }
        return false;
    },
    onLoad() {
        this.emptyTable(this.isFill, 0);
        this.createTable()
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.moveRight, this);
        this.mainScene.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            cc.log(this.isFill);
            this.addItemInBox(this.isFill);
        }, this);
    },
    addItemInBox(listItem) {
        let number;
        if (this.fillTable.length <= 15) {
            do {
                number = Math.floor(Math.random() * 16);

            } while (this.isCreate(number, this.fillTable) == true && this.fillTable.length <= 15 && listItem[number] != 0);

            this.createItem(number, this.count);
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
                this.right_table();
                this.goRight(this.isFill);
                // cc.log(this.isFill);
                // this.goRight(this.arr);
                break;
        }
    },
    right_table() {
        if (this.fillTable.length > 0) {
            for (let j = 0; j < this.fillTable.length; j++) {


            }
        }
        cc.log(this.fillTable);
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
        // cc.log(array)

        for (let i = array.length - 1; i > 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i] != 0 && (k % 4) > 0) {
                    if (array[i] != array[k - 1]) {
                        k--
                    }
                    else if (array[i] == array[k - 1]) {
                        array[i] += array[i];
                        array[i - 1] = 0;
                        k--
                    }
                }
            }
        }
        // cc.log(array)
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
    goLeft() {
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
    emptyTable(list, value) {
        for (let index = 0; index < 16; index++) {
            list.push(value);
        }

    },
});