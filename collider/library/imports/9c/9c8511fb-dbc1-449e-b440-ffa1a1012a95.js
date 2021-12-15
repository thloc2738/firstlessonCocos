"use strict";
cc._RF.push(module, '9c851H728FEnrRA/6GhASqV', 'player');
// Script/player.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
        isTouch: false,
        deltatime: 0

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        this.spAnim.setEventListener(function (entry, event) {
            var data = event.data;

            cc.log(data.name);
        });
    },
    start: function start() {},

    onCollisionEnter: function onCollisionEnter(other, self) {
        console.log('on collision enter');

        this.isTouch = true;
    },
    onCollisionStay: function onCollisionStay(other, self) {
        console.log('on collision stay');
    },
    onCollisionExit: function onCollisionExit(other, self) {
        console.log('on collision exit');
    },
    update: function update(dt) {
        if (this.isTouch == false) {
            this.target.y -= dt * 50;
        } else {
            this.deltatime += dt;
            if (this.deltatime >= 2) {
                this.target.y += dt * 50;
            }
        }
    }
});

cc._RF.pop();