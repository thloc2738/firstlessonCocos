
cc.Class({
    extends: cc.Component,

    properties: {
        flag: false,
        _listId: [],
        _listPass: [],
        _listPhone: [],
        username: {
            default: null,
            type: cc.EditBox,
        },
        password: {
            default: null,
            type: cc.EditBox,
        },
        confirmPass: {
            default: null,
            type: cc.EditBox,
        },
        phoneNumber: {
            default: null,
            type: cc.EditBox,
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
        contentUser: cc.Node,
    },
    first_Scene() {
        this.firstScene.active = true;
        this.secondScene.active = false;
        this.thirdScene.active = false;
        cc.audioEngine.play(this.backAudio, false, 3);
    },
    second_Scene() {
        cc.audioEngine.play(this.infoSuccess, false, 3);
        this.firstScene.active = false;
        this.secondScene.active = true;
        this.thirdScene.active = false;
    },
    third_Scene() {
        this.firstScene.active = false;
        this.secondScene.active = false;
        this.thirdScene.active = true;
        cc.audioEngine.play(this.nextAudio, false, 3);
    },
    sighUpSuccess() {
        if (this.lowPassword() == true && this.reEnterPhone() == true && this.reEnterPass() == true && this.isMatchId() == true) {
            cc.audioEngine.play(this.success, false, 3);
            if (this.findId(this.username.string) == false) {
                this._listId.push(this.username.string);
                this._listPass.push(this.password.string);
                this._listPhone.push(this.phoneNumber.string);
                cc.log(this._listId);
                this.infoTable();
                // this.second_Scene();
                this.newSignup();
                return true;
            }

        }
        else if (this.lowPassword() == false || this.reEnterPhone() == false || this.reEnterPass() == false || this.isMatchId() == false) {
            cc.audioEngine.play(this.fail, false, 1);
            return false;
        }
    },
    isMatchId() {
        if (this.username.string.length < 6) {
            this.lowId.active = true;
            // cc.audioEngine.play(this.fail, false, 1)
            this.flag = false;
            return this.flag;
        }
        else {
            this.lowId.active = false;
            this.findId(this.username.string);
            if (this.flag == true) {
                this.matchId.active = true;
                // cc.audioEngine.play(this.fail, false, 1)
                this.flag = false;
                return this.flag;
            }
            else {
                this.matchId.active = false;
                // cc.log(this._listId);
                // cc.audioEngine.play(this.success, false, 3);
                this.flag = true;
                return this.flag;
            }

        }
    },
    findId(value) {
        if (this._listId.length == 0) {
            this.flag = false
            return this.flag;
        }
        for (let index = 0; index < this._listId.length; index++) {
            if (value == this._listId[index]) {
                this.flag = true;
                return this.flag;
            }
            else {
                this.flag = false;
                return this.flag;
            }
        }
    },
    lowPassword() {
        if (this.password.string.length < 6) {
            this.lowPass.active = true;
            this.rePass.active = false;
            return false;
        }
        else {
            this.lowPass.active = false;
            this.reEnterPass.active = false;
            return true;
        }
    },
    reEnterPass() {
        if (this.password.string != this.confirmPass.string) {
            this.rePass.active = true;
            this.lowPass.active = false;
            return false;
        }
        else {
            this.rePass.active = false;
            this.lowPass.active = false;
            // this._listPass.push(this.password.string);
            return true;
        }
    },
    reEnterPhone() {
        if (this.phoneNumber.string == "") {
            this.rePhone.active = true;
            cc.audioEngine.play(this.fail, false, 1)
            return false;
        }
        else {
            this.rePhone.active = false;
            // this._listPhone.push(this.phoneNumber.string);
            return true;
        }
    },

    informationUser() {
        this.idInfo.string = this._listId[this._listId.length - 1];
        this.passInfo.string = this._listPass[this._listPass.length - 1];
        this.phoneInfo.string = this._listPhone[this._listPhone.length - 1];
    },

    infoTable() {
        let item = cc.instantiate(this.userInfo);
        this.contentUser.addChild(item);
        let userNode = item.getChildByName("userNode");
        let passNode = item.getChildByName("passNode");
        let phoneNode = item.getChildByName("phoneNode");

        let usertxt = userNode.getChildByName("usertxt");
        let passtxt = passNode.getChildByName("passtxt");
        let phonetxt = phoneNode.getChildByName("phonetxt");

        let userlb = usertxt.getComponent(cc.Label);
        let passlb = passtxt.getComponent(cc.Label);
        let phonelb = phonetxt.getComponent(cc.Label);

        userlb.string = this.username.string;
        passlb.string = this.password.string;
        phonelb.string = this.phoneNumber.string;

    },
    newSignup() {
        this.username.string = "";
        this.password.string = "";
        this.confirmPass.string = "";
        this.phoneNumber.string = "";
    }

});
