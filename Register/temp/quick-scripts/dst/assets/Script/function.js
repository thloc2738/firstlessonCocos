
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/function.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmdW5jdGlvbi5qcyJdLCJuYW1lcyI6WyJzaWduVXBGb3JuIiwiaWQiLCJwYXNzIiwicGhvbmUiLCJsaXN0SWQiLCJmbGFnIiwiY2hlY2tpZCIsImxlbmd0aCIsImkiLCJjYyIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHO0FBQ2JDLEVBQUFBLEVBQUUsRUFBRSxFQURTO0FBRWJDLEVBQUFBLElBQUksRUFBRSxFQUZPO0FBR2JDLEVBQUFBLEtBQUssRUFBRSxFQUhNO0FBSWJDLEVBQUFBLE1BQU0sRUFBRSxFQUpLO0FBS2JDLEVBQUFBLElBQUksRUFBRSxLQUxPO0FBT2JDLEVBQUFBLE9BQU8sRUFBRSxtQkFBWTtBQUNqQixRQUFJLEtBQUtGLE1BQUwsQ0FBWUcsTUFBWixJQUFzQixDQUExQixFQUE2QjtBQUN6QjtBQUNILEtBRkQsTUFHSztBQUNELFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLSixNQUFMLENBQVlHLE1BQWhDLEVBQXdDQyxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLFlBQUksS0FBS0osTUFBTCxDQUFZSSxDQUFaLEtBQWtCLEtBQUtQLEVBQTNCLEVBQStCO0FBQzNCLGVBQUtJLElBQUwsR0FBWSxLQUFaO0FBQ0FJLFVBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLEtBQUtMLElBQUwsR0FBWSxhQUFuQjtBQUNILFNBSEQsTUFJSztBQUNESSxVQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTyxLQUFLTCxJQUFaO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUF0QlksQ0FBakI7QUF3QkFNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlosVUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzaWduVXBGb3JuID0ge1xyXG4gICAgaWQ6IFwiXCIsXHJcbiAgICBwYXNzOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBsaXN0SWQ6IFtdLFxyXG4gICAgZmxhZzogZmFsc2UsXHJcblxyXG4gICAgY2hlY2tpZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RJZC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdElkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0SWRbaV0gPT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLmZsYWcgKyBcImFzZGJnYWZzYWRmXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2codGhpcy5mbGFnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHNpZ25VcEZvcm47Il19