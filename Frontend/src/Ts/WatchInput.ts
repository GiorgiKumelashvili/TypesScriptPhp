const textInput = document.querySelector('.text');

function showkeys(event) {
    console.log(event.key);
}

// Live watching an text input
export default function WatchInputs():void {
    textInput.addEventListener('focus', () => {
        console.log('joined ---------------')
        document.addEventListener('keypress', showkeys);
    });
    
    textInput.addEventListener('focusout', () => {
        console.log('left ---------------')
        document.removeEventListener('keypress', showkeys);
    });
}
