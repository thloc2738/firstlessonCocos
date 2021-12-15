const Emitter = require('registerEvent');
cc.Class({
  extends: cc.Component,

  properties: {
    player: cc.Node,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

  },
  onCollisionEnter: function (other, self) {
    if (other.tag == 0 && self.tag == 0) {
      this.jump_Move();
    }

  },
  onCollisionStay: function (other, self) {
  },
  onCollisionExit: function (other, self) {
  },
  start() { },

  update(dt) { },
  onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.up:
        Emitter.instance.emit("JUMP");
        break;
      case cc.macro.KEY.left:
        Emitter.instance.emit("Go_left");
        break;
      case cc.macro.KEY.right:
        Emitter.instance.emit("Go_right");
        break;
      case cc.macro.KEY.space:
        Emitter.instance.emit("SHOOTING");
        break;
    }
  },
});
