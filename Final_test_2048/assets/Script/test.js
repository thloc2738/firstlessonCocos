
// cc.Class({
//     extends: cc.Component,

//     properties: {
//         item: cc.Prefab,
//         list: cc.Layout,
//         listItem: [],
//         test: 5,
//     },

//     // LIFE-CYCLE CALLBACKS:

//     onLoad() {
//         this.createItem();


//     },
//     createItem() {
//         let item = cc.instantiate(this.item);
//         let number = Math.floor(Math.random() * 16) + 1;
//         this.list.node.getChildByName(number.toString()).addChild(item);
//         return number;
//     },
//     isCreate(value, list) {
//         for (let index = 0; index < list.length; index++) {
//             if (value == list[index]) {
//                 list.length += 1;
//                 return true;
//             }
//         }
//         return false;
//     },
//     start() {
//     },

//     // update (dt) {},
// });
