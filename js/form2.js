let a='';
let error=[];
// let Gayab=[];
function Form(a){
    // alert('firing');
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
        passerror.innerHTML="Your password must contain small letters"

    }

    let name=document.getElementById('name').value;
    let nameerror=document.getElementById('nameerror');
    // let pattern=/[a-z]/;
    // console.log(pswd.match(pattern),"d")
    if(name.length===0){
        error.push('exists')

        nameerror.innerHTML="please,fill your name"
}
let country=document.getElementById('country').value;
    let countryerror=document.getElementById('countryerror');
    if(country.length===0){
        error.push('exists')

        countryerror.innerHTML="enter country name"
}
let email=document.getElementById('email').value;
    let emailerror=document.getElementById('emailerror');
    if(email.length===0){
        error.push('exists')

        emailerror.innerHTML="enter email id"
}
let phone=document.getElementById('phone').value;
    let phoneerror=document.getElementById('phoneerror');
    let patternn=/[0-9]/;
    console.log(phone.match(patternn),"d")
    if(phone.length===0){
        phoneerror.innerHTML="enter phone number"
    
        error.push('exists')}
    else if(phone.match(patternn)===null) {
        phoneerror.innerHTML="words are invalid"


    }
    let popup=document.getElementById('popup');
    // console.log(error)
    if( error.length===0){
        // popup.style.transform="translateX(-30%)"
        popup.style.transform="scale(1.0)"
        // popup.style.transform="scale(1.2) 10s ease-in-out"
    }
    let bar=document.getElementById('bar');
if(error.length===0){
    // bar.style.transform="translateX("
        bar.style.width="200px"
        bar.style.transition="width 10s ease-in-out"
}

    
  
}

function Gayab(){
    let popup=document.getElementById('popup');
    // alert('fred');
    console.log(popup.style.transform=="scale(1)",popup.style.transform)
    if(popup.style.transform==="scale(1)"){
        // alert('gayab')
        popup.style.transform="scale(0)";
        popup.style.transition="transform .8ms ease-in-out";


    }
}
// function Progress(){
// let bar=document.getElementById('bar');
// if(error.length===0){
//         bar.style.width="200px"
//         bar.style.transition="width 10s ease-in-out"
// }
// }