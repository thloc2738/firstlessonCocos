
cc.Class({
    extends: cc.Component,
    properties: {
        arr: [],

    },

    //4 0 4 4 => 0 0 4 8

    onLoad() {
     
    },

    goRight(array) {
        cc.log(array)
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i] == 0 && (k % 4) > 0) {
                    if (array[k - 1] == 0) {
                        k--;
                    }
                    else {
                        array[i] += array[k - 1];
                        array[k - 1] = 0;
                        k--;
                    }
                }
            }
        }
        cc.log(array)
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                if(array[i]!=0){
                    while(array[i] == array[k-1] && i > 0){
                        array[i] += array[k-1];
                        array[k-1] = 0;
                    }
                }
               
            }
        }
        cc.log(array)
        for (let i = array.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                while (array[i] == 0 && (k % 4) > 0) {
                    if (array[k - 1] == 0) {
                        k--;
                    }
                    else {
                        array[i] = array[k - 1];
                        array[k - 1] = 0;
                        k--;
                    }
                }
            }
        }
        cc.log(array)
    },
   
    start() {

    },

    // update (dt) {},
});
