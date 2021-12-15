"use strict";
cc._RF.push(module, '4e58f1dRN9MnZxSiacN9Ruk', 'enemy');
// Script/enemy.js

'use strict';

var Emitter = require('registerEvent');
cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        console.log('on collision enter');
        if (other.tag == 3 && self.tag == 1) {
            this.node.destroy();
        }

        // let action = cc.sequence(cc.delayTime(0.35), cc.callFunc(() => {
        //     this.node.destroy();
        // }));
        // this.node.runAction(action);

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