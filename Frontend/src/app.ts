import User         from "./Ts/classes/User";
import WatchInput   from './Ts/WatchInput';

function main():void {
    WatchInput();
    
    // Main function in whole Page
    let UserMan:User = new User('gio', 'gio@gmail.com', '1234fgh5', false);
}

window.addEventListener('load', main);