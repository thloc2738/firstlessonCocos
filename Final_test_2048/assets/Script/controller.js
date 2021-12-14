const Emitter = require("registerEvent");

cc.Class({
    extends: cc.Component,

    properties: {
        mainScene: cc.Node,
        item: cc.Prefab,
        listItem: [],
        listFlag: [],
        boxLayout: cc.Layout,
        xPosition: [],
        yPosition: [],
        fillTable: [],
        count: 0,
        isFill: [],
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
    createItem(value, count) {
        let _item = cc.instantiate(this.item);
        this.mainScene.addChild(_item);
        this.mainScene.children[count].x = this.xPosition[value];
        this.mainScene.children[count].y = this.yPosition[value];
        cc.tween(this.mainScene.children[count])
            .to(0.5, { scale: 1 })
            .start()
        this.count++;
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
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.moveRight, this);

        this.emptyTable(false);
        this.createTable()
        this.mainScene.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            this.addItemInBox();

        }, this);
    },
    addItemInBox() {
        let number;
        if (this.fillTable.length <= 15) {
            do {
                number = Math.floor(Math.random() * 16);

            } while (this.isCreate(number, this.fillTable) == true && this.fillTable.length <= 15);
            this.createItem(number, this.count);
            this.fillTable.push(number);
            this.isFill[number] = true;
        }
    },

    moveRight: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                cc.log("right");
                this.rightMoment(this.isFill);
                break;
        }
    },



    rightMoment(list) {
        let index1 = -1;
        let index2 = -1;
        for (let i = 0; i < 16; i++) {
            if (i % 4 == 3) {
                for (let j = 0; j <= this.fillTable.length; j++) {
                    if (i == this.fillTable[j]) {
                        index1 = j;
                        break;
                    }
                }

                for (let k = 0; k <= this.fillTable.length; k++) {
                    if ((i - 1) == this.fillTable[k]) {
                        index2 = k;
                        break;
                    }
                }


                cc.log("ab " + index1);
                cc.log("ac " + index2);
                if (this.mainScene.children[index1] && this.mainScene.children[index2]) {
                    this.mainScene.children[index2].x = this.mainScene.children[index1].x;
                    this.mainScene.children[index2].y = this.mainScene.children[index].y;
                }
                break;
                // if(list[i] == false){

                //     // if(list[i-1]== true){
                //     //     list[i] = true;
                //     //     list[i-1] = false;

                //     // }
                // }else{

                // }
            }
        }
    },
    moveRight() {

    },
    moveUp() {

    },
    moveDown() {

    },
    emptyTable(isFilled) {
        for (let index = 0; index < 16; index++) {
            this.isFill.push(isFilled);
        }

    },
});