var signUpForn = {
    id: "",
    pass: "",
    phone: "",
    listId: [],
    flag: false,

    checkid: function () {
        if (this.listId.length == 0) {
            return;
        }
        else {
            for (let i = 0; i < this.listId.length; i++) {
                if (this.listId[i] == this.id) {
                    this.flag = false;
                    cc.log(this.flag + "asdbgafsadf")
                }
                else {
                    cc.log(this.flag);
                }
            }
        }
    }
}
module.exports = signUpForn;