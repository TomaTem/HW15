function sum() {
    let a=document.querySelectorAll('input.sum')[0].value;
    let b=document.querySelectorAll('input.sum')[1].value;
    document.querySelector('#sum-res').innerHTML = +a + +b;
}

function sub() {
    let a=document.querySelectorAll('input.sub')[0].value;
    let b=document.querySelectorAll('input.sub')[1].value;
    document.querySelector('#sub-res').innerHTML = a - b;
}

function mul() {
    let a=document.querySelectorAll('input.mul')[0].value;
    let b=document.querySelectorAll('input.mul')[1].value;
    document.querySelector('#mul-res').innerHTML = a * b;
}

function del() {
    let a=document.querySelectorAll('input.del')[0].value;
    let b=document.querySelectorAll('input.del')[1].value;
    if (b==0) {
        alert ("На ноль делить нельзя!");
    } else {
        document.querySelector('#del-res').innerHTML = a / b;
    }
}

function col1() {
    let colDiv = document.querySelector('#div1');
    colDiv.style.backgroundColor = "#4BBCF4";
}

function col2() {
    let colDiv = document.querySelector('#div2');
    colDiv.style.backgroundColor = "#4BBCF4";
}

function col3() {
    let colDiv = document.querySelector('#div3');
    colDiv.style.backgroundColor = "#4BBCF4";
}

function col4() {
    let colDiv = document.querySelector('#div4');
    colDiv.style.backgroundColor = "#4BBCF4";
}
