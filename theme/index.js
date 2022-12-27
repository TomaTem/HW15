let theme = document.querySelector('#theme');
let div = document.querySelector('#container');

function ChangeTheme() {
    if (theme.value==1) {
        div.style.cssText=`color: #968089;
        height: 100vh;
        background-color: #a4e6f4`;
    }
    else if (theme.value==2) {
        div.style.cssText=`color: #8a9bab;
        height: 100vh;
        background-color: #efc0ea`;
    }
    else if (theme.value==3) {
        div.style.cssText=`color: #a3a6af;
        height: 100vh;
        background-color: #d8c2b2`;
    }
    else {
        div.style.cssText=`color: black;
        height: 100vh;
        background-color: white`;
    }
    
}






