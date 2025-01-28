const form=document.querySelector('form')
const nr1=document.querySelector('#nr1');
const nr2=document.querySelector('#nr2');
const btn1=document.querySelector('#btn1')
const btn2=document.querySelector('#btn2')
const btn3=document.querySelector('#btn3')


function adunare(){
    if(nr1.value===""||nr2.value===""){
        document.querySelector('#rez').innerHTML="guh"
        return
    }
    document.querySelector('#rez').innerHTML="Rezultatul este: "+(parseInt(nr1.value)+parseInt(nr2.value))
}

function scadere(){
    if(nr1.value===""||nr2.value===""){
        document.querySelector('#rez').innerHTML="guh"
        return
    }
    document.querySelector('#rez').innerHTML="Rezultatul este: "+(nr1.value-nr2.value)
}

function inmultire(){
    if(nr1.value===""||nr2.value===""){
        document.querySelector('#rez').innerHTML="guh"
        return
    }
    document.querySelector('#rez').innerHTML="Rezultatul este: "+nr1.value*nr2.value;
}

btn1.addEventListener('click', adunare)
btn2.addEventListener('click', scadere)
btn3.addEventListener('click', inmultire)