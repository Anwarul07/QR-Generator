console.log(" welcome to qr generator");

let imgbox= document.getElementById("imgBox");
let qrtext= document.getElementById("qrtext");
let qrimg= document.getElementById("qr")

function generate(){

    if(qrtext.value.length>0){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value;
        imgbox.classList.add("show");
    }
 

}