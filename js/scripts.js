//collapse or hidden button and studies from above link
// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// event listener on button
// Studied this link to understand mailto:
// https://www.rapidtables.com/web/html/mailto.html

document.querySelector("button").addEventListener("click", (c) => {
    c.preventDefault();
    
});

function Validation() {

    // this function takes input as input values to the form.
    //processes those values for error validation by error message.
    //output is validated input.

    let body=document.getElementById('body').value.trim();
    let subject=document.getElementById('subject').value.trim();
    let senderEmail=document.getElementById('senderEmail').value.trim();
    let cC=document.getElementById('cC').value.trim();
    let bCC=document.getElementById('bCC').value.trim();
    if ((subject==="")||(body==="")||(senderEmail==="")||(cC==="")||(bCC==="")) {
        alert("Please enter all fields of Contact Form");
        return false;
    }

    // checks whether email is valid or not.

    ValidateEmail();
    let badWords=new Array("feldercarb", "frack", "skinjob", "vulgacarb");
    let error=0;
    for (let i=0; i<badWords.length; i++) {
        let val=badWords[i];
        if ((body.toLowerCase()).indexOf(val.toString())>-1||(subject.toLowerCase()).indexOf(val.toString())>-1) {
            error=error+1;
        }
    }
    if (error>0) {
        alert("Please donot use swear words like 'feldercarb', 'frack', 'skinjob', 'vulgacarb' and delete Unprofessional language from the form.");
    }
    else {
        document.location.href="mailto:kourh0316@gmail.com?bCC="+bCC+"&cC="+cC+"&subject="+subject+"&body="+body;
    }
}
function ValidateEmail() {

    //takes user input email .
    // run the function to check whether input email is valid and through error message ig email is invalid.
    //output valid email.

    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

    let mailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (senderEmail.value.match(mailFormat)&&cC.value.match(mailFormat)&&bCC.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        form.senderEmail.focus();
        return false;
    }
}

