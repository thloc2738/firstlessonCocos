"use strict";
cc._RF.push(module, '179cdFiHcRHD5O9VUEiHvww', 'controller');
// Script/controller.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _listId: [],
        _listPass: [],
        _listPhone: [],
        username: {
            default: null,
            type: cc.EditBox
        },
        password: {
            default: null,
            type: cc.EditBox
        },
        confirmPass: {
            default: null,
            type: cc.EditBox
        },
        phoneNumber: {
            default: null,
            type: cc.EditBox
        },
        matchId: cc.Node,
        lowId: cc.Node,
        lowPass: cc.Node,
        rePass: cc.Node,
        rePhone: cc.Node,
        fail: cc.AudioClip,
        success: cc.AudioClip,
        infoSuccess: cc.AudioClip,
        backAudio: cc.AudioClip,
        nextAudio: cc.AudioClip,
        //scene
        firstScene: cc.Node,
        secondScene: cc.Node,
        thirdScene: cc.Node,
        //congratuation
        idInfo: cc.Label,
        passInfo: cc.Label,
        phoneInfo: cc.Label,
        userInfo: cc.Prefab,
        contentUser: cc.Node
    },
    first_Scene: function first_Scene() {
        this.firstScene.active = true;
        this.secondScene.active = false;
        this.thirdScene.active = false;
        cc.audioEngine.play(this.backAudio, false, 3);
    },
    second_Scene: function second_Scene() {
        cc.audioEngine.play(this.infoSuccess, false, 3);
        this.firstScene.active = false;
        this.secondScene.active = true;
        this.thirdScene.active = false;
    },
    third_Scene: function third_Scene() {
        this.firstScene.active = false;
        this.secondScene.active = false;
        this.thirdScene.active = true;
        cc.audioEngine.play(this.nextAudio, false, 3);
    },
    sighUpSuccess: function sighUpSuccess() {
        if (this.lowPassword() == true && this.reEnterPhone() == true && this.reEnterPass() == true && this.isMatchId() == true) {
            cc.audioEngine.play(this.success, false, 3);
            if (this.findId(this.username.string) == false) {
                this._listId.push(this.username.string);
                this._listPass.push(this.password.string);
                this._listPhone.push(this.phoneNumber.string);
                cc.log(this._listId);
                this.infoTable();
                this.second_Scene();
                this.newSignup();
                return true;
            }
        } else if (this.lowPassword() == false || this.reEnterPhone() == false || this.reEnterPass() == false || this.isMatchId() == false) {
            cc.audioEngine.play(this.fail, false, 1);
            return false;
        }
    },
    isMatchId: function isMatchId() {
        if (this.username.string.length < 6) {
            this.lowId.active = true;
            return false;
        } else {
            this.lowId.active = false;
            this.findId(this.username.string);
            if (this.findId(this.username.string) == true) {
                this.matchId.active = true;
                return false;
            } else {
                this.matchId.active = false;
                return true;
            }
        }
    },
    findId: function findId(value) {
        if (this._listId.length == 0) {
            return false;
        }
        for (var index = 0; index < this._listId.length; index++) {
            if (value == this._listId[index]) {
                cc.log("value " + this._listId[index]);
                return true;
            }
        }
        return false;
    },
    lowPassword: function lowPassword() {
        if (this.password.string.length < 6) {
            this.lowPass.active = true;
            this.rePass.active = false;
            return false;
        } else {
            this.lowPass.active = false;
            this.reEnterPass.active = false;
            return true;
        }
    },
    reEnterPass: function reEnterPass() {
        if (this.password.string != this.confirmPass.string) {
            this.rePass.active = true;
            this.lowPass.active = false;
            return false;
        } else {
            this.rePass.active = false;
            this.lowPass.active = false;
            return true;
        }
    },
    reEnterPhone: function reEnterPhone() {
        if (this.phoneNumber.string == "") {
            this.rePhone.active = true;
            cc.audioEngine.play(this.fail, false, 1);
            return false;
        } else {
            this.rePhone.active = false;
            return true;
        }
    },
    informationUser: function informationUser() {
        this.idInfo.string = this._listId[this._listId.length - 1];
        this.passInfo.string = this._listPass[this._listPass.length - 1];
        this.phoneInfo.string = this._listPhone[this._listPhone.length - 1];
    },
    infoTable: function infoTable() {
        var item = cc.instantiate(this.userInfo);
        this.contentUser.addChild(item);
        var userNode = item.getChildByName("userNode");
        var passNode = item.getChildByName("passNode");
        var phoneNode = item.getChildByName("phoneNode");

        var usertxt = userNode.getChildByName("usertxt");
        var passtxt = passNode.getChildByName("passtxt");
        var phonetxt = phoneNode.getChildByName("phonetxt");

        var userlb = usertxt.getComponent(cc.Label);
        var passlb = passtxt.getComponent(cc.Label);
        var phonelb = phonetxt.getComponent(cc.Label);

        userlb.string = this.username.string;
        passlb.string = this.password.string;
        phonelb.string = this.phoneNumber.string;
    },
    newSignup: function newSignup() {
        this.username.string = "";
        this.password.string = "";
        this.confirmPass.string = "";
        this.phoneNumber.string = "";
    }
});

cc._RF.pop();