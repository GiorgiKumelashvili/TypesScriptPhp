const textInput = document.querySelector('.text');

function showkeys(event) {
    console.log(event.key);
}

// Live watching an text input
export default function WatchInputs():void {
    textInput.addEventListener('focus', () => {
        document.addEventListener('keypress', showkeys);
    });
    
    textInput.addEventListener('focusout', () => {
        document.removeEventListener('keypress', showkeys);
    });
}
