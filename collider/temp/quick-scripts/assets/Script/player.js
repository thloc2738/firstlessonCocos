(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9c851H728FEnrRA/6GhASqV', 'player', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=player.js.map
        