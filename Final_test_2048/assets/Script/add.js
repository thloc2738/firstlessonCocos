
cc.Class({
    extends: cc.Component,
    properties: {
       arr:[],
       
    },

  //4 0 4 4 => 0 0 4 8

    onLoad () {
        this.arr.push(4);
        this.arr.push(2);
        this.arr.push(2);
        this.arr.push(2);
        for(let i = this.arr.length - 1; i >= 0; i--){
            if(i > 0){
                if(this.arr[i] == this.arr[i-1] || this.arr[i] == 0){
                    this.arr[i] += this.arr[i-1];
                    this.arr[i-1] = 0;
                    if(i < this.arr.length -1){
                        if(this.arr[i] == this.arr[this.arr.length - 1]){
                            this.arr[this.arr.length - 1] = this.arr[i] + this.arr[this.arr.length - 1];
                        this.arr[i] = 0;}
                    }
                }
            }
            else{
                if(this.arr[i + 1] == this.arr[i + 2] || this.arr[i] == 0){
                    this.arr[i + 2] = this.arr[i + 1] + this.arr[i + 2];
                    this.arr[i + 1] = 0;
                }
            }
            
        }
        cc.log(this.arr);
    },

    start () {

    },

    // update (dt) {},
});
