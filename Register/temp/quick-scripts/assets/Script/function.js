(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/function.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6d0e4++loNIxZO//H8ks4q7', 'function', __filename);
// Script/function.js

"use strict";

var signUpForn = {
    id: "",
    pass: "",
    phone: "",
    listId: [],
    flag: false,

    checkid: function checkid() {
        if (this.listId.length == 0) {
            return;
        } else {
            for (var i = 0; i < this.listId.length; i++) {
                if (this.listId[i] == this.id) {
                    this.flag = false;
                    cc.log(this.flag + "asdbgafsadf");
                } else {
                    cc.log(this.flag);
                }
            }
        }
    }
};
module.exports = signUpForn;

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
        //# sourceMappingURL=function.js.map
        