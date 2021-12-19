const Emitter = require("registerEvent");

cc.Class({
    extends: cc.Component,

    properties: {
        mainScene: cc.Node,
        item: cc.Prefab,
        emptyPrefab: cc.Prefab,
        listFlag: [],
        boxLayout: cc.Layout,
        xyPosition: [],
        fillTable: [],
        isFill: [],
        _count: 0,
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
            // cc.log(pos)
            this.xyPosition.push(pos);
        }

        cc.log(this.xyPosition)
    },
    onLoad() {
        
        
        this.emptyTable(this.isFill, 0);
        this.createTable()
        this.createPrefabsTable(this.mainScene, this.emptyPrefab)
        // cc.log(this.fillTable[0].childrenCount)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.moveRight, this);
        this.mainScene.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            this.addItemInBox(this.isFill);
            // this.goRight(this.isFill);
        }, this);
        
    },
    createItem(value) {
        cc.log(this.mainScene)
        this.mainScene.children[value].addChild(cc.instantiate(this.item));
        this.mainScene.children[value].children[1].getChildByName("numb").getComponent(cc.Label).string = 2;
        this.mainScene.children[value].position = this.xyPosition[value];
        this.isFill[value] = 2
        cc.tween(this.mainScene.children[value].children[1])
            .to(0.5, { scale: 1 })
            .start()
        this._count++;
        this.fillTable[value] = this.mainScene.children[value];
        return this.mainScene.children[value];
    },

    
    
    addItemInBox(listItem) {
        if(this.checkAddItem()){
            let number;
            do {
                number = Math.floor(Math.random() * 16);
                // cc.log("Number: "+number);
            } while (listItem[number] != 0);
            this.createItem(number);
            listItem[number] = 2;
        }
    },

    checkAddItem(){
        for(let i = 0; i< this.isFill.length; i++){
            if(this.isFill[i] == 0){
                return true;
            }
        }
        return false
    },

    moveRight: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                // this.right_table();
                this.goRight_1(this.fillTable);
                // this.goRight_2(this.fillTable);
                break;
        }
    },
    right_table() {
        
        cc.log(this.fillTable);
    },
    goRight_1(array) {
        let isMove = true;
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i].childrenCount < 2 && (k % 4) > 0)  {
                    if (array[k - 1].childrenCount < 2) {
                        k--;
                    }
                    else {
                        array[i].addChild(cc.instantiate(this.item));
                        array[i].position = this.xyPosition[i];
                        array[i].children[1].scale = 1;
                        cc.tween(array[i].children[1])
                        .to(0.5, { scale: 1 })
                        .start()
                        array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k - 1].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.isFill[k-1] = 0;
                        this.isFill[i] = array[i].children[1].getChildByName("numb").getComponent(cc.Label);
                        array[k-1].removeChild(array[k-1].children[1]);
                        k--;
                    }
                }
            }
        }
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                if(array[i].childrenCount == 2){
                    //cc.log(array[5].children[1].getChildByName("numb"), " undefined");
                    if(array[k-1].childrenCount == 2){
                        while((array[i].children[1].getChildByName("numb").getComponent(cc.Label).string == array[k-1].children[1].getChildByName("numb").getComponent(cc.Label).string) && (k % 4) > 0){
                            cc.log(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string, " i");
                            cc.log(array[k-1].children[1].getChildByName("numb").getComponent(cc.Label).string, " k-1");
                            array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k - 1].children[1].getChildByName("numb").getComponent(cc.Label).string) + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string) ;
                            array[k-1].removeChild(array[k-1].children[1]);
                            // array[k-1].children[1].destroy();
                            // if(k-1>0){
                            //     k--;
                            // }
                        }
                        
                    }
                    
                }
            }
        }
               
        //     }
        // }
        // // cc.log(array)
        // for (let i = array.length - 1; i >= 0; i--) {
        //     let k = i;
        //     if (i > 0) {
        //         while (array[i].childrenCount != 2 && (k % 4) > 0) {
        //             if (array[k - 1].childrenCount != 2) {
        //                 k--;
        //             }
        //             else {
        //                 // array[i].addChild(cc.instantiate(this.item));
        //                 array[i].position = this.xyPosition[i];
        //                 cc.tween(array[i].children[1])
        //                 .to(0.5, { scale: 1 })
        //                 .start()
        //                 array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k - 1].children[1].getChildByName("numb").getComponent(cc.Label).string) + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string) ;
        //                 array[k - 1].children[1].destroy();
        //                 k--;
        //             }
        //         }
        //     }
        // }
        // cc.log(array)
    },
    goRight_2(array){
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                if(array[i].childrenCount == 2){
                    cc.log(array[1].children[1].getChildByName("numb"), " k-1");
                    if(array[k-1].childrenCount == 2){
                        while((array[i].children[1].getChildByName("numb").getComponent(cc.Label).string == array[k-1].children[1].getChildByName("numb").getComponent(cc.Label).string) && (k % 4) > 0){
                            cc.log(array[i].children[1].getChildByName("numb"), " i");
                            cc.log(array[k-1].children[1].getChildByName("numb"), " k-1");
                            array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k - 1].children[1].getChildByName("numb").getComponent(cc.Label).string) + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string) ;
                            array[k-1].removeChild(array[k-1].children[1]);
                            // array[k-1].children[1].destroy();
                            if(k-1>0){
                                k--;
                            }
                        }
                        
                    }
                    
                }
            }
        }
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
    createPrefabsTable(){
        for(let index = 0; index < 16; index++){
            // let item = cc.instantiate(prefab);
            this.mainScene.addChild(cc.instantiate(this.emptyPrefab));
            this.mainScene.children[index].addChild(cc.instantiate(this.emptyPrefab))
            this.fillTable[index] = this.mainScene.children[index];
        }
        
    }
});