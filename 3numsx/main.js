const form=document.querySelector('form')
const nums=document.querySelector('#nums')
const submit=document.querySelector('#enter')
const compile=document.querySelector('#compile')
const rez=document.querySelector('#rez')
const conf=document.querySelector('#conf')

let array=[]
let best=[]

form.addEventListener('submit',onSubmit)

function onSubmit(e){
e.preventDefault()
array.push(nums.value)
conf.innerHTML="Ai introdus numarul: "+array.length
nums.value=null
}

function enter(){
    let x,q=1
    while(array.length>0){
        let val=array.pop()
        if(best.length<3 || val>best[best.length-1]){
            best.push(val)
        }
    }
    while(best.length>0){
        x=best.pop()
        q*=x

    }
    rez.innerHTML=q
}
compile.addEventListener('click', enter)
compile.addEventListener('keypress', enter)