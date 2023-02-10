let a='';
 let error=[];
function Form(a){
    // alert('shining');
}
function Btn(){
    let pswd=document.getElementById('pswd').value;
    let passerror=document.getElementById('passerror');
    let pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    console.log(pswd.match(pattern),pswd,"d")
    if(pswd.length===0){
        passerror.innerHTML="Your password is empty"
        error.push('exists')
    }else if(pswd.match(pattern)===null){
        passerror.innerHTML="Your password is not strong enough"

    }
    let user=document.getElementById('user').value;
    let usererror=document.getElementById('usererror');
    if(user.length===0){
        error.push('exists')

        usererror.innerHTML="Enter your name"
}
let bar=document.getElementById('bar');
if( error.length===0){
    // popup.style.transform="translateX(-30%)"
    // bar.style.transform="scale(1.0)"
    bar.style.transform="scale(1.5)";
    bar.style.transition="transform 3s ease-in-out"
}}

function Gayab(){
    let bar=document.getElementById('bar');
    // alert('fred');
    console.log(bar.style.transform=="scale(1.5)")
    if(bar.style.transform==="scale(1.5)"){
        // alert('gayab')
        bar.style.transform="scale(0)";
        bar.style.transition="transform 2s ease-in-out";


    }
}
function Effect(a){
        // alert('hffgg')
        let imgg=document.getElementById(a);
        console.log(imgg.style.transform)

        if( imgg.style.transform==="scale(1.5)"){
            imgg.style.transform="scale(1)";
            imgg.style.transition="transform 5s ease-in";
        console.log(imgg.style.transform)

        }else{
            imgg.style.transform="scale(1.5)";
            imgg.style.transition="transform 1s ease-in";
        console.log(imgg.style.transform)
        }

}
