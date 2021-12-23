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
        checkList: [],
        isFill: [],
        _count: 0,
        arr: [],
        score: cc.Label,
        bestScore: cc.Label,
        moveSound: cc.AudioSource,
        clickSound: cc.AudioSource,
        _blockLeft: false,
        _blockRight: false,
        _blockUp: false,
        _blockDown: false,
        arrFrame: [cc.SpriteFrame],
        aniFlag: true,
        topRank: cc.Layout,
        topRankPrefabs: cc.Prefab,
        topScore: cc.Node,
        scoreEnd: cc.Label,
        gameOverPopUp: cc.Node,
        gameOverTrans: cc.Node,
        _topPlay: 0,
        yourScore: cc.Label,
        _blockMove: false,
        isMute: false,
    },
    offMoveSound() {
        this.moveSound.volume = 0;
    },
    onMoveSound() {
        this.moveSound.volume = 1;
    },
    createTable() {
        for (let i = 0; i < 16; i++) {
            let x, y, pos;
            if (i % 4 == 0) {
                x = -232;
                y = 245 + (i / 4) * (-155);
                pos = cc.v3(x, y, 0);
            } else if (i % 4 == 1) {
                x = -77;
                y = 245 + ((i - 1) / 4) * (-155);
                pos = cc.v3(x, y, 0);
            } else if (i % 4 == 2) {
                x = 77;
                y = 245 + ((i - 2) / 4) * (-155);
                pos = cc.v3(x, y, 0);
            } else if (i % 4 == 3) {
                x = 232;
                y = 245 + ((i - 3) / 4) * (-155);
                pos = cc.v3(x, y, 0);
            }
            // cc.log(pos)
            this.xyPosition.push(pos);
        }

        cc.log(this.xyPosition)
    },
    onLoad() {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("MOVELEFT", this.swipeLeft.bind(this));
        Emitter.instance.registerEvent("MOVERIGHT", this.swipeRight.bind(this));
        Emitter.instance.registerEvent("MOVEUP", this.swipeUp.bind(this));
        Emitter.instance.registerEvent("MOVEDOWN", this.swipeDown.bind(this));
        Emitter.instance.registerEvent("RESETGAME", this.resetGame.bind(this));
        Emitter.instance.registerEvent("ONSOUND", this.onMoveSound.bind(this));
        Emitter.instance.registerEvent("OFFSOUND", this.offMoveSound.bind(this));
        if (parseInt(this.bestScore.string) <= cc.sys.localStorage.getItem("Score")) {
            this.bestScore.string = cc.sys.localStorage.getItem("Score");
        }
        this.emptyTable(this.isFill, 0);
        this.emptyTable(this.checkList, 0)
        cc.log(this.isFill)
        this.createTable()
        this.createPrefabsTable(this.mainScene, this.emptyPrefab)
        this.addItemInBox(this.isFill);
        this.addItemInBox(this.isFill);
        if (!this._blockMove) {
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.move2048, this);
        }



    },
    resetGame() {
        this._blockMove = false;
        this.mainScene.enabled = true;
        this.gameOverPopUp.active = false;
        this.gameOverTrans.active = false;
        this.clickSound.play();
        for (let i = 0; i < this.isFill.length; i++) {
            this.isFill[i] = 0;
            this.checkList[i] = 0;
        }
        for (let i = 0; i < this.fillTable.length; i++) {
            this.fillTable[i].removeChild(this.fillTable[i].children[1]);
        }
        this.addItemInBox(this.isFill);
        this.addItemInBox(this.isFill);
        this.score.string = parseInt(0);
        this._blockDown = false;
        this._blockLeft = false;
        this._blockRight = false;
        this._blockUp = false;
    },
    createItem(value) {
        this.mainScene.children[value].addChild(cc.instantiate(this.item));
        this.mainScene.children[value].children[1].getChildByName("numb").getComponent(cc.Label).string = 2;
        this.mainScene.children[value].children[1].getComponent(cc.Sprite).spriteFrame = this.arrFrame[0];
        this.mainScene.children[value].position = this.xyPosition[value];
        this.isFill[value] = 2;
        cc.tween(this.mainScene.children[value].children[1])
            .to(0.5, { scale: 1 })
            .start()
        this._count++;
        this.fillTable[value] = this.mainScene.children[value];
        return this.mainScene.children[value];
    },
    setColor(node) {
        if (node.children[1].getChildByName("numb").getComponent(cc.Label).string == 2) {
            node.children[1].getComponent(cc.Sprite).spriteFrame = this.arrFrame[0];
        } else if (node.children[1].getChildByName("numb").getComponent(cc.Label).string == 4) {
            node.children[1].getComponent(cc.Sprite).spriteFrame = this.arrFrame[1];
        } else if (node.children[1].getChildByName("numb").getComponent(cc.Label).string == 8) {
            node.children[1].getComponent(cc.Sprite).spriteFrame = this.arrFrame[2];
        } else if (node.children[1].getChildByName("numb").getComponent(cc.Label).string == 16) {
            node.children[1].getComponent(cc.Sprite).spriteFrame = this.arrFrame[3];
        } else if (node.children[1].getChildByName("numb").getComponent(cc.Label).string == 32) {
            node.children[1].getComponent(cc.Sprite).spriteFrame = this.arrFrame[4];
        } else if (node.children[1].getChildByName("numb").getComponent(cc.Label).string == 64) {
            node.children[1].getComponent(cc.Sprite).spriteFrame = this.arrFrame[5];
        } else if (node.children[1].getChildByName("numb").getComponent(cc.Label).string == 128) {
            node.children[1].getComponent(cc.Sprite).spriteFrame = this.arrFrame[6];
        } else if (node.children[1].getChildByName("numb").getComponent(cc.Label).string == 256) {
            node.children[1].getComponent(cc.Sprite).spriteFrame = this.arrFrame[7];
        } else if (node.children[1].getChildByName("numb").getComponent(cc.Label).string == 512) {
            node.children[1].getComponent(cc.Sprite).spriteFrame = this.arrFrame[8];
        }
    },
    addItemInBox(listItem) {    //random item
        if (this.checkAddItem()) {
            let number;
            do {
                number = Math.floor(Math.random() * 16);
            } while (listItem[number] != 0);
            this.createItem(number);
            // listItem[number] = 2;
        }
    },

    checkAddItem() {
        for (let i = 0; i < this.isFill.length; i++) {
            if (this.isFill[i] == 0) {
                return true;
            }
        }
        return false
    },
    swipeRight() {
        if (!this._blockMove) {
            this.moveSound.play();
            this.tempArray(this.checkList, this.isFill);
            this.goRight_1(this.fillTable);
            this.goRight_2(this.fillTable);
            this.goRight_3(this.fillTable);
            if (!this.equal_Array(this.isFill, this.checkList))
                this.addItemInBox(this.isFill);
            else {
                if (this.fullList(this.isFill) == true) {
                    this._blockRight = true;
                }
            }
        }
    },
    swipeLeft() {
        if (!this._blockMove) {
            this.moveSound.play();
            this.tempArray(this.checkList, this.isFill);
            this.goLeft_1(this.fillTable);
            this.goLeft_2(this.fillTable);
            this.goLeft_3(this.fillTable);
            if (!this.equal_Array(this.isFill, this.checkList))
                this.addItemInBox(this.isFill);
            else {
                if (this.fullList(this.isFill) == true) {
                    this._blockLeft = true;
                }
            }
        }
    },
    swipeUp() {
        if (!this._blockMove) {
            this.moveSound.play();
            this.tempArray(this.checkList, this.isFill);
            this.goUp_1(this.fillTable);
            this.goUp_2(this.fillTable);
            this.goUp_3(this.fillTable);
            if (!this.equal_Array(this.isFill, this.checkList))
                this.addItemInBox(this.isFill);
            else {
                if (this.fullList(this.isFill) == true) {
                    this._blockUp = true;
                }
            }
        }
    },
    swipeDown() {
        if (!this._blockMove) {
            this.moveSound.play();
            this.tempArray(this.checkList, this.isFill);
            this.goDown_1(this.fillTable);
            this.goDown_2(this.fillTable);
            this.goDown_3(this.fillTable);
            if (!this.equal_Array(this.isFill, this.checkList))
                this.addItemInBox(this.isFill);
            else {
                if (this.fullList(this.isFill) == true) {
                    this._blockDown = true;
                }
            }
        }
    },
    onSound(state) {
        if (state == "on") {

        }
    },
    move2048: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:

                this.moveSound.play();
                this.tempArray(this.checkList, this.isFill);
                this.goRight_1(this.fillTable);
                this.goRight_2(this.fillTable);
                this.goRight_3(this.fillTable);
                if (!this.equal_Array(this.isFill, this.checkList))
                    this.addItemInBox(this.isFill);
                else {
                    if (this.fullList(this.isFill) == true) {
                        this._blockRight = true;
                    }
                }

                break;
            case cc.macro.KEY.left:
                this.moveSound.play();
                this.tempArray(this.checkList, this.isFill);
                this.goLeft_1(this.fillTable);
                this.goLeft_2(this.fillTable);
                this.goLeft_3(this.fillTable);
                if (!this.equal_Array(this.isFill, this.checkList))
                    this.addItemInBox(this.isFill);
                else {
                    if (this.fullList(this.isFill) == true) {
                        this._blockLeft = true;
                    }
                }

                break;
            case cc.macro.KEY.up:
                this.moveSound.play();
                this.tempArray(this.checkList, this.isFill);
                this.goUp_1(this.fillTable);
                this.goUp_2(this.fillTable);
                this.goUp_3(this.fillTable);
                if (!this.equal_Array(this.isFill, this.checkList))
                    this.addItemInBox(this.isFill);
                else {
                    if (this.fullList(this.isFill) == true) {
                        this._blockUp = true;
                    }
                }
                break;
            case cc.macro.KEY.down:
                this.moveSound.play();
                this.tempArray(this.checkList, this.isFill);
                this.goDown_1(this.fillTable);
                this.goDown_2(this.fillTable);
                this.goDown_3(this.fillTable);
                if (!this.equal_Array(this.isFill, this.checkList))
                    this.addItemInBox(this.isFill);
                else {
                    if (this.fullList(this.isFill) == true) {
                        this._blockDown = true;
                    }
                }

                break;
        }

        if (parseInt(this.bestScore.string) <= parseInt(this.score.string)) {
            this.bestScore.string = this.score.string;
        }
        //=============================== GAME OVER ====================================
        if (this._blockDown == true && this._blockUp == true && this._blockLeft == true && this._blockRight == true) {

            if (!this._blockMove) {
                this.gameOverPopUp.x = 380;
                this.gameOverPopUp.y = 1670;
                this.gameOverPopUp.scale = 1;
                let top = cc.instantiate(this.topRankPrefabs);
                top.getChildByName("name").getComponent(cc.Label).string = "Top " + ++this._topPlay + ": ";
                top.getChildByName("score").getComponent(cc.Label).string = parseInt(this.score.string);
                this.topRank.node.addChild(top);
                this.checkTopRank(this.topRank.node, this.score.string);
                this.yourScore.string = this.score.string;
                this.gameOverTrans.active = true
                this.gameOverPopUp.active = true;
                cc.log("GAME OVER");
                var action = cc.moveTo(1, 380, 640);
                action.easing(cc.easeBounceOut(1));
                this.gameOverPopUp.runAction(action);
                cc.sys.localStorage.setItem('Score', JSON.stringify(parseInt(this.score.string)));
                cc.log(JSON.parse(cc.sys.localStorage.getItem('Score')));
                this._blockMove = true;
            }

        }
    },
    checkTopRank(topList) {
        if (topList.childrenCount > 0) {
            for (let i = 0; i < topList.childrenCount - 1; i++) {
                if (parseInt(topList.children[i].getChildByName("score").getComponent(cc.Label).string) < parseInt(topList.children[i + 1].getChildByName("score").getComponent(cc.Label).string)) {
                    let temp = topList.children[i].getChildByName("score").getComponent(cc.Label).string;
                    topList.children[i].getChildByName("score").getComponent(cc.Label).string = topList.children[i + 1].getChildByName("score").getComponent(cc.Label).string;
                    topList.children[i + 1].getChildByName("score").getComponent(cc.Label).string = temp;
                }

            }
        }

    },
    fullList(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == 0) {
                return false;
            }
        }
        return true;
    },
    equal_Array(arrayA, arrayB) {
        for (let i = 0; i < arrayA.length; i++) {
            if (arrayA[i] !== arrayB[i]) {
                return false;
            }
        }
        return true;

    },
    tempArray(arrayA, arrayB) {
        for (let i = 0; i < arrayB.length; i++) {
            arrayA[i] = arrayB[i];
        }
    },
    goDown_1(array) {   //  2  2     0  0   
        //  0  2 =>  0  0
        //  2  0     2  2
        //  0  0     2  2
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i >= 4) {
                while (array[i].childrenCount < 2 && k - 4 >= 0) {
                    if (array[k - 4].childrenCount < 2) {
                        k -= 4;
                    }
                    else {
                        this.aniFlag = false;
                        array[i].addChild(cc.instantiate(this.item));
                        cc.tween(array[k - 4].children[1])
                            .to(1, { position: this.xyPosition[i] })
                            .start()
                        array[i].position = this.xyPosition[i];
                        array[i].children[1].scale = 1;
                        array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k - 4].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.setColor(array[i]);
                        this.isFill[k - 4] = 0;
                        this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        array[k - 4].children[1].destroy();
                        array[k - 4].removeChild(array[k - 4].children[1]);
                        k -= 4;

                    }
                }
            }
        }
    },
    goDown_2(array) {   //      2   0           0   0
        //      2   2   =>      4   0
        //      2   2           0   4
        //      2   0           4   0
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i >= 4) {
                if (array[i].childrenCount == 2) {
                    for (let index = 0; index % 4 < 3; index++) {
                        if (array[i].childrenCount == 2) {
                            if (array[k - 4].childrenCount == 2) {
                                if (array[i].children[1].getChildByName("numb").getComponent(cc.Label).string == array[k - 4].children[1].getChildByName("numb").getComponent(cc.Label).string) {
                                    array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k - 4].children[1].getChildByName("numb").getComponent(cc.Label).string)
                                        + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    this.setColor(array[i]);
                                    this.isFill[k - 4] = 0;
                                    var action = cc.sequence(cc.scaleTo(0.25, 1.25), cc.scaleTo(0.25, 1));
                                    array[i].runAction(action);
                                    this.score.string = parseInt(this.score.string) + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    array[k - 4].children[1].destroy();
                                    array[k - 4].removeChild(array[k - 4].children[1]);
                                }
                            }

                        }
                    }
                }
            }
        }
    },
    goDown_3(array) {   //  0   4           0   0
        //  4   8   =>      0   4
        //  4   2           4   8
        //  0   0           4   0
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i >= 4) {
                while (array[i].childrenCount < 2 && k - 4 >= 0) {
                    if (array[k - 4].childrenCount < 2) {
                        k -= 4;
                    }
                    else {
                        array[i].addChild(cc.instantiate(this.item));
                        array[i].children[1].scale = 1;
                        array[i].position = this.xyPosition[i];

                        array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k - 4].children[1].getChildByName("numb").getComponent(cc.Label).string)
                            + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.setColor(array[i]);
                        this.isFill[k - 4] = 0;
                        this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        array[k - 4].children[1].destroy();
                        array[k - 4].removeChild(array[k - 4].children[1])
                        k -= 4;
                        // this.aniFlag = true;
                    }
                }
            }
        }

    },
    goUp_1(array) {
        for (let i = 0; i < array.length; i++) {
            let k = i;
            if (i < array.length - 4) {
                while (array[i].childrenCount < 2 && (k + 4) < array.length) {
                    if (array[k + 4].childrenCount < 2) {
                        k += 4;
                    }
                    else {
                        array[i].addChild(cc.instantiate(this.item));
                        array[i].position = this.xyPosition[i];
                        array[i].children[1].scale = 1;
                        array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k + 4].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.setColor(array[i]);
                        this.isFill[k + 4] = 0;
                        this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        array[k + 4].children[1].destroy();
                        array[k + 4].removeChild(array[k + 4].children[1]);
                        k += 4;
                    }
                }
            }
        }
    },
    goUp_2(array) {
        for (let i = 0; i < array.length; i++) {
            let k = i;
            if (i < array.length - 4) {
                if (array[i].childrenCount == 2) {
                    for (let index = 0; index % 4 < 3; index++) {
                        if (array[i].childrenCount == 2) {
                            if (array[k + 4].childrenCount == 2) {
                                if (array[i].children[1].getChildByName("numb").getComponent(cc.Label).string == array[k + 4].children[1].getChildByName("numb").getComponent(cc.Label).string) {
                                    array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k + 4].children[1].getChildByName("numb").getComponent(cc.Label).string)
                                        + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    this.setColor(array[i]);
                                    var action = cc.sequence(cc.scaleTo(0.25, 1.25), cc.scaleTo(0.25, 1));
                                    array[i].runAction(action);
                                    this.score.string = parseInt(this.score.string) + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    this.isFill[k + 4] = 0;
                                    this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    array[k + 4].children[1].destroy();
                                    array[k + 4].removeChild(array[k + 4].children[1]);
                                }
                            }

                        }
                    }
                }
            }
        }
    },
    goUp_3(array) {
        for (let i = 0; i < array.length; i++) {
            let k = i;
            if (i < array.length - 4) {
                while (array[i].childrenCount < 2 && (k + 4) < array.length) {
                    if (array[k + 4].childrenCount < 2) {
                        k += 4;
                    }
                    else {
                        array[i].addChild(cc.instantiate(this.item));
                        array[i].position = this.xyPosition[i];
                        array[i].children[1].scale = 1;
                        array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k + 4].children[1].getChildByName("numb").getComponent(cc.Label).string)
                            + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.setColor(array[i]);
                        this.isFill[k + 4] = 0;
                        this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        array[k + 4].children[1].destroy();
                        array[k + 4].removeChild(array[k + 4].children[1])
                        k += 4;
                    }
                }
            }
        }
    },
    goLeft_1(array) {
        for (let i = 0; i < array.length; i++) {
            let k = i;
            if (i < array.length - 1) {
                while (array[i].childrenCount < 2 && (k % 4) < 3) {
                    if (array[k + 1].childrenCount < 2) {
                        k++;
                    }
                    else {
                        array[i].addChild(cc.instantiate(this.item));
                        array[i].position = this.xyPosition[i];
                        array[i].children[1].scale = 1;
                        array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k + 1].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.setColor(array[i]);
                        this.isFill[k + 1] = 0;
                        this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        array[k + 1].children[1].destroy();
                        array[k + 1].removeChild(array[k + 1].children[1]);
                        k++;
                    }
                }
            }
        }
    },
    goLeft_2(array) {
        for (let i = 0; i < array.length; i++) {
            let k = i;
            if (i < array.length - 1) {
                if (array[i].childrenCount == 2) {
                    for (let index = 0; index % 4 < 3; index++) {
                        if (array[i].childrenCount == 2) {
                            if (array[k + 1].childrenCount == 2) {
                                if (array[i].children[1].getChildByName("numb").getComponent(cc.Label).string == array[k + 1].children[1].getChildByName("numb").getComponent(cc.Label).string) {
                                    array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k + 1].children[1].getChildByName("numb").getComponent(cc.Label).string)
                                        + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    this.score.string = parseInt(this.score.string) + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    this.setColor(array[i]);
                                    this.setColor(array[i]);
                                    var action = cc.sequence(cc.scaleTo(0.25, 1.25), cc.scaleTo(0.25, 1));
                                    array[i].runAction(action);
                                    this.isFill[k + 1] = 0;
                                    this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    array[k + 1].children[1].destroy();
                                    array[k + 1].removeChild(array[k + 1].children[1]);
                                }
                            }

                        }
                    }
                }
            }
        }
    },
    goLeft_3(array) {
        for (let i = 0; i < array.length; i++) {
            let k = i;
            if (i < array.length - 1) {
                while (array[i].childrenCount < 2 && (k % 4) < 3) {
                    if (array[k + 1].childrenCount < 2) {
                        k++;
                    }
                    else {
                        array[i].addChild(cc.instantiate(this.item));
                        array[i].position = this.xyPosition[i];
                        array[i].children[1].scale = 1;
                        array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k + 1].children[1].getChildByName("numb").getComponent(cc.Label).string)
                            + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.setColor(array[i]);
                        this.isFill[k + 1] = 0;
                        this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        array[k + 1].children[1].destroy();
                        array[k + 1].removeChild(array[k + 1].children[1])
                        k++;
                    }
                }
            }
        }
    },
    goRight_1(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i].childrenCount < 2 && (k % 4) > 0) {
                    if (array[k - 1].childrenCount < 2) {
                        k--;
                    }
                    else {
                        array[i].addChild(cc.instantiate(this.item));
                        array[i].position = this.xyPosition[i];
                        array[i].children[1].scale = 1;
                        array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k - 1].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.setColor(array[i]);
                        this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.isFill[k - 1] = 0;
                        array[k - 1].children[1].destroy();
                        array[k - 1].removeChild(array[k - 1].children[1]);
                        k--;
                    }
                }
            }
        }
    },
    goRight_2(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                if (array[i].childrenCount == 2) {
                    for (let index = k; index % 4 > 0; index--) {
                        if (array[i].childrenCount == 2) {
                            if (array[k - 1].childrenCount == 2) {
                                if (array[i].children[1].getChildByName("numb").getComponent(cc.Label).string == array[k - 1].children[1].getChildByName("numb").getComponent(cc.Label).string) {
                                    array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k - 1].children[1].getChildByName("numb").getComponent(cc.Label).string)
                                        + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    this.score.string = parseInt(this.score.string) + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    this.setColor(array[i]);
                                    var action = cc.sequence(cc.scaleTo(0.25, 1.25), cc.scaleTo(0.25, 1));
                                    array[i].runAction(action);

                                    this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                                    this.isFill[k - 1] = 0;
                                    array[k - 1].children[1].destroy();
                                    array[k - 1].removeChild(array[k - 1].children[1]);
                                }
                            }

                        }
                    }
                }
            }
        }
    },
    goRight_3(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i].childrenCount < 2 && (k % 4) > 0) {
                    if (array[k - 1].childrenCount < 2) {
                        k--;
                    }
                    else {
                        array[i].addChild(cc.instantiate(this.item));
                        array[i].position = this.xyPosition[i];
                        array[i].children[1].scale = 1;
                        array[i].children[1].getChildByName("numb").getComponent(cc.Label).string = parseInt(array[k - 1].children[1].getChildByName("numb").getComponent(cc.Label).string)
                            + parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.setColor(array[i]);
                        this.isFill[i] = parseInt(array[i].children[1].getChildByName("numb").getComponent(cc.Label).string);
                        this.isFill[k - 1] = 0;
                        array[k - 1].children[1].destroy();
                        array[k - 1].removeChild(array[k - 1].children[1])
                        k--;
                    }
                }
            }
        }
    },
    emptyTable(list, value) {
        for (let index = 0; index < 16; index++) {
            list.push(value);
        }

    },
    createPrefabsTable() {
        for (let index = 0; index < 16; index++) {
            this.mainScene.addChild(cc.instantiate(this.emptyPrefab));
            this.mainScene.children[index].addChild(cc.instantiate(this.emptyPrefab))
            this.fillTable[index] = this.mainScene.children[index];
        }

    }
});