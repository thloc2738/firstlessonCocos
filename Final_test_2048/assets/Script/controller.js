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
<<<<<<< HEAD
    onLoad() {
=======
    onLoad(){

>>>>>>> 4e6f02ad2b22b298d48910e57cb24dc9a887eee4
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.moveRight, this);

        this.emptyTable(false);
        this.createTable()
<<<<<<< HEAD
        this.mainScene.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            this.addItemInBox();

        }, this);
    },
    addItemInBox() {
=======
        let number;
            this.mainScene.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            this.addItemInBox(this.isFill);
            
        }, this);
    },
    addItemInBox(listItem){
>>>>>>> 4e6f02ad2b22b298d48910e57cb24dc9a887eee4
        let number;
        if (this.fillTable.length <= 15) {
            do {
                number = Math.floor(Math.random() * 16);
<<<<<<< HEAD

            } while (this.isCreate(number, this.fillTable) == true && this.fillTable.length <= 15);
            this.createItem(number, this.count);
            this.fillTable.push(number);
            this.isFill[number] = true;
=======
                
            } while (this.isCreate(number, this.fillTable) == true && this.fillTable.length <= 15 && listItem[number] == true);
        cc.log("NUMBER: " + this.fillTable.length);

        this.createItem(number,this.count);
        this.fillTable.push(number);
        listItem[number] = true;
        cc.log(listItem);
>>>>>>> 4e6f02ad2b22b298d48910e57cb24dc9a887eee4
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


<<<<<<< HEAD

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
=======
    rightMoment(list){
        cc.log("aa "+ this.fillTable);
        for(let i = 0; i < 16; i++){
            if(this.fillTable.length > 0){
                if(i % 4 == 3){
                        if(this.isFill[i] == false){ // i = false
                            if(this.isFill[i-1] == true){   // i-1 = true
                                for(let j = 0; j < this.fillTable.length; j++){ // i-1 -> i
                                    if((i-1) == this.fillTable[j]){
                                        this.isFill[i-1] = false;
                                        this.isFill[i] = true;
                                        this.fillTable[j] = i;
                                        this.mainScene.children[j].x = this.xPosition[i];
                                        this.mainScene.children[j].y = this.yPosition[i];
                                    }
                                }
                                if(this.isFill[i-2] == true){ // i-2 = true
                                    for(let j = 0; j < this.fillTable.length; j++){
                                        if((i-2) == this.fillTable[j]){
                                            this.isFill[i-2] = false;
                                            this.isFill[i-1] = true;
                                            this.fillTable[j] = i-1;
                                            this.mainScene.children[j].x = this.xPosition[i-1];
                                            this.mainScene.children[j].y = this.yPosition[i-1];
                                        }
                                    }
                                }
                            }
                            else{               //[i-1] = false

                            }
                            
                            for(let k = 0; k < this.fillTable.length; k++){
>>>>>>> 4e6f02ad2b22b298d48910e57cb24dc9a887eee4

                            }
                        }
                        else{           // i = true
                            if(this.isFill[i-1] == false){

<<<<<<< HEAD
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
=======
                            }
                        }
                }
>>>>>>> 4e6f02ad2b22b298d48910e57cb24dc9a887eee4
            }
        }
        cc.log(this.isFill);
    },
<<<<<<< HEAD
    moveRight() {

    },
    moveUp() {
=======

    moveUp(){
>>>>>>> 4e6f02ad2b22b298d48910e57cb24dc9a887eee4

    },
    moveDown() {

    },
    emptyTable(isFilled) {
        for (let index = 0; index < 16; index++) {
            this.isFill.push(isFilled);
        }

    },
});