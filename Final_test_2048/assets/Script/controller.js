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
        this.createPrefabsTable(this.mainScene, this.emptyPrefab)
        this.emptyTable(this.isFill, 0);
        this.createTable()
        // cc.log(this.fillTable[0].childrenCount)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.moveRight, this);
        this.mainScene.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            this.addItemInBox(this.isFill);
            // this.goRight(this.isFill);
        }, this);
        
    },
    createItem(value) {
        cc.log("Object: " + this.mainScene)
        this.mainScene.children[value].addChild(cc.instantiate(this.item));
        this.mainScene.children[value].children[1].getChildByName("numb").getComponent(cc.Label).string = 2;
        this.mainScene.children[value].position = this.xyPosition[value];
        this.isFill[value] = 2
        cc.tween(this.mainScene.children[value].children[1])
            .to(0.5, { scale: 1 })
            .start()
        this._count++;
        this.fillTable[value] = this.mainScene.children[value];
        cc.log(this.fillTable[value].childrenCount)
       
        return this.mainScene.children[value];
    },

    
    
    addItemInBox(listItem) {
        if(this.checkAddItem()){
            let number;
            // cc.log(this.fillTable.length)
            // cc.log(this.fillTable.length + " length")
            do {
                number = Math.floor(Math.random() * 16);
                cc.log("Number: "+number);
            } while (listItem[number] != 0);
            
            this.createItem(number);
            // this.fillTable[number] = this.createItem(number);
            // cc.log(this.fillTable);
            listItem[number] = 2;
            
            // cc.log("1 "+listItem.length);
            // cc.log(this.fillTable[number].children[1].getChildByName("numb").getComponent(cc.Label).string)
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
                cc.log(this.isFill)
                // this.right_table();
                this.goRight(this.fillTable);
                break;
        }
    },
    right_table() {
        
        cc.log(this.fillTable);
    },
    goRight(array) {
        
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i].childrenCount != 2 && (k % 4) > 0) {
                    cc.log("Array[i] " + array[i])
                    if (array[k - 1].childrenCount != 2) {
                        cc.log("321" + array[i])
                        k--;
                    }
                    else {
                        cc.log(array[i]+ "123")
                        // array[i].children[2].getChildByName("numb").getComponent(cc.Label).string += array[k - 1].children[2].getChildByName("numb").getComponent(cc.Label).string;
                        // array[k - 1].children[2].destroy();
                        k--;
                    }
                }
            }
        }
        // cc.log(array)
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                if(array[i]!=0){
                    while(array[i] == array[k-1] && i > 0){
                        array[i] += array[k-1];
                        array[k-1] = 0;
                    }
                }
               
            }
        }
        // cc.log(array)
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i].childrenCount != 2 && (k % 4) > 0) {
                    if (array[k - 1].childrenCount != 2) {
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
        // cc.log(array)
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
    createPrefabsTable(parentNode ,prefab){
        for(let index = 0; index < 16; index++){
            let item = cc.instantiate(prefab);
            parentNode.addChild(item);
            parentNode.children[index].addChild(cc.instantiate(this.emptyPrefab))
            this.fillTable[index] = parentNode.children;
        }
        cc.log(parentNode.children[0].childrenCount)
    }
});