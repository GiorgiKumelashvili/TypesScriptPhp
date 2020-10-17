window.addEventListener('load', main);
import User         from "./Ts/User";
import WatchInput   from './Ts/WatchInput';
import './prototypes';

function main():void {
    WatchInput();

    // Main function in whole Page
    let UserMan:User = new User('g', 'g', 12, false, 'g', 'g');
    console.log(UserMan);

    let arr = [1,2,3];
    arr.log();
}