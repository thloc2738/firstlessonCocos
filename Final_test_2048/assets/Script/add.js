
cc.Class({
    extends: cc.Component,
    properties: {
        arr: [],

    },

    //4 0 4 4 => 0 0 4 8

    onLoad() {
        // this.arr.push(2);
        // this.arr.push(2);
        // this.arr.push(4);
        // this.arr.push(2);

        // this.arr.push(2);
        // this.arr.push(2);
        // this.arr.push(2);
        // this.arr.push(2);

        // this.arr.push(4);
        // this.arr.push(0);
        // this.arr.push(2);
        // this.arr.push(2);

        // this.arr.push(2);
        // this.arr.push(0);
        // this.arr.push(2);
        // this.arr.push(2);
        
        // cc.log(this.arr);
        // for (let i = 0; i < this.arr.length; i++) {
        //     let k = i;
        //     if (i < this.arr.length -1) {
        //             while(this.arr[i] == 0 && (k % 4) < 3){
        //                 if(this.arr[k+1] == 0){
        //                     k++;
        //                 }
        //                 else{
        //                     this.arr[i] += this.arr[k+1];
        //                     this.arr[k+1] = 0;
        //                     k++;
        //                 }
        //             } 
        //     }
        // }
        // cc.log(this.arr);
        // for(let i = 0; i < this.arr.length; i++) {
        //     let k = i;
        //     if(i < this.arr.length -1){
        //         while(this.arr[i] !=0 &&(k % 4) < 3){
        //             if(this.arr[i] != this.arr[k+1]){
        //                 k++
        //             }
        //             else{
        //                 this.arr[i] += this.arr[k+1];
        //                 this.arr[k+1] = 0;
        //                 k++
        //             }
        //         }
        //     }
        // }
        // cc.log(this.arr);
        // for (let i = this.arr.length -1; i >= 0; i--) {
        //     let k = i;
        //     if (i > 0) {
        //             while(this.arr[i] == 0 && (k%4) > 0){
        //                 if(this.arr[k-1] == 0){
        //                     k--;
        //                 }
        //                 else{
        //                     this.arr[i] = this.arr[k-1];
        //                     this.arr[k-1] = 0;
        //                     k--;
        //                 }
        //             }
                
        //     }
        // }
        // cc.log(this.arr)
    },
    

    start() {

    },

    // update (dt) {},
});
