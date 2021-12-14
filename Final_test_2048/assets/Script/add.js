
cc.Class({
    extends: cc.Component,
    properties: {
        arr: [],

    },

    //4 0 4 4 => 0 0 4 8

    onLoad() {
        this.arr.push(2);
        this.arr.push(2);
        this.arr.push(2);
        this.arr.push(2);
        cc.log(this.arr);
        let leng = this.arr.length - 1;
        for (let i = this.arr.length - 1; i >= 0; i--) {
            let k = i;
            let z = i;
            if (k > 0) {
                while (this.arr[k] == 0 && k > 0) {
                    if (this.arr[k] + this.arr[k - 1] == this.arr[k - 1]) {
                        this.arr[k] += this.arr[k - 1];
                        this.arr[k - 1] = 0;
                        k--;
                    }

                }
                while (this.arr[z] != 0 && z > 0) {
                    if (this.arr[z] == this.arr[z - 1]) {
                        this.arr[z] += this.arr[z - 1];
                        this.arr[z - 1] = 0;
                        z--
                    }
                }

            }
            else {
                let j = 0;
                // while (this.arr[leng - k] == 0 && k < leng) {
                //     if (this.arr[leng - k] + this.arr[leng - k - 1] == this.arr[leng - k - 1]) {
                //         this.arr[leng - k] = this.arr[leng - k - 1]
                //         this.arr[leng - k - 1] = 0;
                //         k++;
                //     }

                // }
                k = 0;

                while (this.arr[leng - j] == this.arr[leng - j - 1] && j < leng) {
                    if (this.arr[leng - j] + this.arr[leng - j - 1] == this.arr[leng - j] * 2) {
                        this.arr[leng - j] += this.arr[leng - j - 1];
                        this.arr[leng - j - 1] = 0;
                        cc.log(this.arr[leng - j - 1]);
                        j++
                    }
                    if (this.arr[leng - j] + this.arr[leng - j - 1] == this.arr[leng - j - 1]) {
                        this.arr[leng - j] = this.arr[leng - j - 1]
                        this.arr[leng - j - 1] = 0;
                        j++;
                    }
                }
                while (this.arr[k] != 0 && k < leng - 1) {
                    if (this.arr[k] + this.arr[k + 1] == this.arr[k]) {
                        this.arr[k + 1] += this.arr[k];
                        this.arr[k] = 0;
                    }
                    k++
                }



            }
            cc.log(this.arr)


        }

    },

    start() {

    },

    // update (dt) {},
});
