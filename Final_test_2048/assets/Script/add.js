
cc.Class({
    extends: cc.Component,
    properties: {
        arr: [],

    },

    //4 0 4 4 => 0 0 4 8

    onLoad() {
        this.arr.push(2);
        this.arr.push(2);
        this.arr.push(0);
        this.arr.push(2);
        cc.log(this.arr);
        for (let i = this.arr.length - 1; i >= 0; i--) {
            let k = i;
            let z = i;

            if (i > 0) {

                cc.log("123" + this.arr);
                while ((this.arr[k] + this.arr[k - 1] == this.arr[k - 1] || this.arr[k] - this.arr[k - 1] == 0) && k > 0) {
                    this.arr[k] += this.arr[k - 1];
                    this.arr[k - 1] = 0;
                    k--;
                }
                if (this.arr[z] == 0) {
                    // if (this.arr[z - 1] == 0) {
                    //     z--;
                    // }
                    if (this.arr[z - 1] != 0) {
                        this.arr[z] += this.arr[z - 1];
                        this.arr[z - 1] = 0;
                    }
                }
                else {
                    if (this.arr[z] == this.arr[z - 1]) {
                        this.arr[z] += this.arr[z - 1];
                        this.arr[z - 1] = 0;
                        z--;
                    }
                }
            }
            else {
                if (this.arr[this.arr.length - 1] == 0) {
                    if (this.arr[this.arr.length - 1 - i] == 0 && i < this.arr.length) {
                        i++;
                    }
                    if (this.arr[this.arr.length - 1 - i] != 0) {
                        this.arr[this.arr.length - 1] += this.arr[this.arr.length - 1 - i];
                        this.arr[this.arr.length - 1 - i] = 0;
                    }

                }
            }
            cc.log(this.arr)


        }

    },

    start() {

    },

    // update (dt) {},
});
