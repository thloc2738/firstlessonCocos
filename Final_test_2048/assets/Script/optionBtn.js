
cc.Class({
    extends: cc.Component,

    properties: {
     exitBtn: cc.Button,
     musicBtn: cc.Button,
     soundBtn: cc.Button,
     menuBtn:cc.Button,
     optionBtn: cc.Button,
     newgameBtn: cc.Button,
     leadBoard: cc.Button,
     optionSprite: cc.SpriteFrame,
     backSprite: cc.SpriteFrame,
     muteSprite: cc.SpriteFrame,
     unmusicSprite: cc.SpriteFrame,
     soundSprite: cc.SpriteFrame,
     musicSprite: cc.SpriteFrame,
     _isClick: true,
     _soundClick: true,
     _musicClick: true,
     exitPopup: cc.Node,
     transparentBg: cc.Node,
    },


    onLoad () {
        cc.log(this.optionBtn, "Option button")

    },
    optinClickBtn(){
        if(this._isClick){
            this.optionBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.backSprite;
            this._isClick = false;
            var music = cc.moveTo(.5, -177, 635);
            this.musicBtn.node.runAction(music);

            var sound = cc.moveTo(.5, -59, 635);
            this.soundBtn.node.runAction(sound);

            var menu = cc.moveTo(.5, 51, 635);
            this.menuBtn.node.runAction(menu);

            var exit = cc.moveTo(.5,171,635);
            this.exitBtn.node.runAction(exit);
        }
        else{
            this.optionBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.optionSprite;
            this._isClick = true;
            var music = cc.moveTo(.5, 286,635);
            this.musicBtn.node.runAction(music);

            var sound = cc.moveTo(.5, 286,635);
            this.soundBtn.node.runAction(sound);

            var menu = cc.moveTo(.5, 286,635);
            this.menuBtn.node.runAction(menu);

            var exit = cc.moveTo(.5, 286,635);
            this.exitBtn.node.runAction(exit);
        }
    },
    soundClick(){
        if(this._soundClick){
            this.soundBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.muteSprite;
            this._soundClick = false;
        }
        else{
            this.soundBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.soundSprite;
            this._soundClick = true;
        }
    },
    musicClick(){
        if(this._musicClick){
            this.musicBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.unmusicSprite;
            this._musicClick = false;
        }
        else{
            this.musicBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.musicSprite;
            this._musicClick = true;
        }
    },
    exitGame(){
        cc.game.end();
    },
    closeExit(){

        this.exitPopup.x = 360;
        this.exitPopup.y = 664;
        if(this._soundClick){
            var exitpopup = cc.sequence(cc.spawn(cc.scaleTo(.25,0), cc.moveTo(.25,525,1190)), cc.callFunc(()=>{
                this.exitPopup.active = false;
                this.transparentBg.active = false;
            }));
            this.exitPopup.runAction(exitpopup);
        }
        
    },
    exitBtnClick(){
        this.transparentBg.active = true;
        this.exitPopup.active = true;
        this.exitPopup.scale = 0;
        this.exitPopup.x = 525;
        this.exitPopup.y = 1190;
        if(this._soundClick){
            var exitpopup = cc.spawn(cc.scaleTo(.75,1), cc.moveTo(.75,360,664));
            this.exitPopup.runAction(exitpopup);
        }
        
    },
    start () {

    },

    // update (dt) {},
});
