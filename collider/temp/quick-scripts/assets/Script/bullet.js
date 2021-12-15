(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/bullet.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a22afRyQHRNkJyk2dmtTZzG', 'bullet', __filename);
// Script/bullet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.tag == 0 && self.tag == 3) {
            this.node.destroy();
        }
    },
    onCollisionStay: function onCollisionStay(other, self) {},
    onCollisionExit: function onCollisionExit(other, self) {},
    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=bullet.js.map
        