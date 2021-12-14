"use strict";
cc._RF.push(module, '4e58f1dRN9MnZxSiacN9Ruk', 'enemy');
// Script/enemy.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        var _this = this;

        console.log('on collision enter');
        var action = cc.sequence(cc.delayTime(0.25), cc.callFunc(function () {
            _this.node.destroy();
        }));
        this.node.runAction(action);
    },
    onCollisionStay: function onCollisionStay(other, self) {
        console.log('on collision stay');
    },
    onCollisionExit: function onCollisionExit(other, self) {
        console.log('on collision exit');
    },
    start: function start() {},
    update: function update(dt) {}
});

cc._RF.pop();