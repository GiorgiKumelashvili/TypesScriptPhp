interface Array<T> {
    isAnyEmpty(checkWhich:string): boolean;
}

Array.prototype.isAnyEmpty = function (checkWhich:string):boolean {
    if (checkWhich == 'Texts') {
        return this.some(el => el == '' || el == undefined || el == null);
    }
    else if (checkWhich == 'NumBool') {
        console.log(this)
        console.log('hello')
        return this.some(el => isNaN(el) || el == undefined || el == null);
    }
}