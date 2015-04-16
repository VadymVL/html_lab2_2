function checkForm(form) {

    var nameField = form.name;
    var mailField = form.mail;
    if (isNotEmpty(nameField)) {
        if(isNotEmpty(mailField)) {
            return true;
        }
    }
    return false;
}

function isNotEmpty(field) {

    var fieldData = field.value;

    if (fieldData.length == 0 || fieldData == "" || fieldData == fieldData) {

        field.className = "FieldError"; //Classs to highlight 
        //alert("Please correct the errors in order to continue.");
        return false;
    } else {

        field.className = "FieldOk"; //Resets field back to default
        return true; //Submits form
    }
}


function submitForm() {
	alert("!");
}

//function checkForm(form) {
//	if(form.name.value.length == 0) form.name.style.borderColor="green ";//alert("Введiть iм`я!");
//	if(form.mail.value.length == 0) ;//alert("Введiть mail!");

//if(form.name.value.length == 0) 
//document.getElementById("name").addClass("error");
//document.getElementById("name").focus();


//document.getElementById("name").style.border="5px solid red";//document.getElementById("name").className = document.getElementById("name").className + " error";  // this adds the error class

//}