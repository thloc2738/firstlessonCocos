
cc.Class({
    extends: cc.Component,
    properties: {
        arr: [],

    },

    //4 0 4 4 => 0 0 4 8

    onLoad() {
        this.arr.push(2);
        this.arr.push(0);
        this.arr.push(0);
        this.arr.push(0);

        this.arr.push(2);
        this.arr.push(0);
        this.arr.push(2);
        this.arr.push(0);

        this.arr.push(2);
        this.arr.push(2);
        this.arr.push(2);
        this.arr.push(2);

        this.arr.push(0);
        this.arr.push(2);
        this.arr.push(2);
        this.arr.push(0);
        
        cc.log(this.arr);
        for (let i = this.arr.length - 1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                    while(this.arr[i] == 0 && (k % 4) > 0){
                        if(this.arr[k-1] == 0){
                            k--;
                        }
                        else{
                            this.arr[i] += this.arr[k-1];
                            this.arr[k-1] = 0;
                            k--;
                        }
                    }
                    
                
                
            }
            cc.log("i: "+i)
        }
        cc.log(this.arr);
        for(let i = this.arr.length -1; i > 0; i--) {
            let k = i;
            if(i > 0){

                    if(this.arr[i] != this.arr[i-1]){
                    }
                    else{
                        this.arr[i] += this.arr[i-1];
                        this.arr[i-1] = 0;
                    }
                
            }
           
            

        }
        for (let i = this.arr.length -1; i >= 0; i--) {
            let k = i;
            if (i > 0) {
                    while(this.arr[i] == 0 && (k%4) > 0){
                        if(this.arr[k-1] == 0){
                            k--;
                        }
                        else{
                            this.arr[i] = this.arr[k-1];
                            this.arr[k-1] = 0;
                            k--;
                        }
                    }
                
            }
        }
        cc.log(this.arr)
    },
    

    start() {

    },

    // update (dt) {},
});
