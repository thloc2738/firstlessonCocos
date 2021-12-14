"use strict";
cc._RF.push(module, '194563rwcRL96FkZ8xSCQyj', 'ground');
// Script/ground.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    },
    start: function start() {},

    onCollisionEnter: function onCollisionEnter(other, self) {
        cc.warn("1234");
    },
    onCollisionStay: function onCollisionStay(other, self) {
        console.log('on collision stay');
        cc.log("other: " + other);
        cc.log("self: " + self);
    },
    onCollisionExit: function onCollisionExit(other, self) {
        console.log('on collision exit');
        cc.log("other: " + other);
        cc.log("self: " + self);
    },
    update: function update(dt) {}
});

cc._RF.pop();