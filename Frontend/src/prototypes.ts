interface Array<T> {
    isAnyEmpty(checkWhich:string): boolean;
    log(): any;
}

Array.prototype.isAnyEmpty = function (checkWhich:string):boolean {
    if (checkWhich == 'Texts') {
        return this.some(el => el == '' || el == undefined || el == null);
    }
    else if (checkWhich == 'NumBool') {
        return this.some(el => isNaN(el) || el == undefined || el == null);
    }
}

Array.prototype.log = function ():any {
    console.log('ahahhahahaha');
}