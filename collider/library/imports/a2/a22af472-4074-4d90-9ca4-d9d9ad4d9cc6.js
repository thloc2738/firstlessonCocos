"use strict";
cc._RF.push(module, 'a22afRyQHRNkJyk2dmtTZzG', 'bullet');
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