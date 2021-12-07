"use strict";
cc._RF.push(module, '6d0e4++loNIxZO//H8ks4q7', 'function');
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