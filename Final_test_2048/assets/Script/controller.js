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
        _blockLeft: false,
        _blockRight: false,
        _blockUp: false,
        _blockDown: false,
        arrFrame: [cc.SpriteFrame]
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
        if (parseInt(this.bestScore.string) <= cc.sys.localStorage.getItem("Score")) {
            this.bestScore.string = cc.sys.localStorage.getItem("Score");
        }
        this.emptyTable(this.isFill, 0);
        this.emptyTable(this.checkList, 0)
        cc.log(this.isFill)
        this.createTable()
        this.createPrefabsTable(this.mainScene, this.emptyPrefab)
        this.addItemInBox(this.isFill);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.move2048, this);
        this.mainScene.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            let firstXClick = event.getLocationX();
            let firstYClick = event.getLocationY();
            this.mainScene.on(cc.Node.EventType.MOUSE_UP, function (event) {
                let secondXClick = event.getLocationX();
                let secondYClick = event.getLocationY();

                cc.warn(firstXClick, firstYClick);
                cc.error(secondXClick, secondYClick)
                // let deltaX = Math.abs(secondXClick - firstXClick);
                // let deltaY = Math.abs(secondYClick - firstYClick);
                // if (deltaX > deltaY) {
                //     if (secondXClick - firstXClick > 0) {
                //         this.swipeRight();
                //     }
                //     else {
                //         this.swipeLeft();
                //     }
                // } else {
                //     if (secondYClick - firstYClick > 0) {
                //         this.swipeUp();
                //     }
                //     else {
                //         this.swipeDown();
                //     }
                // }
                firstXClick = null;
                firstYClick = null;
                secondXClick = null;
                secondYClick = null;

            }, this);
        }, this);
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
    addItemInBox(listItem) {
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
    },
    swipeLeft() {
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
    },
    swipeUp() {
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
    },
    swipeDown() {
        if (this._blockDown == false) {
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
                if (this._blockDown == false) {
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
        }
        if (parseInt(this.bestScore.string) <= parseInt(this.score.string)) {
            this.bestScore.string = this.score.string;
        }
        if (this._blockDown == true && this._blockUp == true && this._blockLeft == true && this._blockRight == true) {
            cc.log("GAME OVER");
            cc.sys.localStorage.setItem('Score', JSON.stringify(parseInt(this.score.string)));
            cc.log(JSON.parse(cc.sys.localStorage.getItem('Score')));

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
    goDown_1(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i >= 4) {
                while (array[i].childrenCount < 2 && k - 4 >= 0) {
                    if (array[k - 4].childrenCount < 2) {
                        k -= 4;
                    }
                    else {
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
                        array[k - 4].removeChild(array[k - 4].children[1]);
                        k -= 4;
                    }
                }
            }
        }
    },
    goDown_2(array) {
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
                                    array[k - 4].removeChild(array[k - 4].children[1]);
                                }
                            }

                        }
                    }
                }
            }
        }
    },
    goDown_3(array) {
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
                        array[k - 4].removeChild(array[k - 4].children[1])
                        k -= 4;
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