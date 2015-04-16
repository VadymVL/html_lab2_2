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
	var input_form = document.input_form;
	var result = input_form.first_name.value + ", " + 
	input_form.last_name.value + ", " + 
	input_form.email_adress.value + ", " + 
	input_form.gender.value + ", " + 
	input_form.age.value
	document.validation_form.results.value = result;
	//alert(result);
	return;
}

function sendEmail(email_form) {
	var body = email_form.results.value;
	var mail_link = "mailto:deloreanr@mail.ru?subject=Register&body=" + encodeURIComponent(body) + "&bcc=deloreanr@mail.ua";
	//window.location.href = mail_link; 
	window.open(mail_link);
	//alert(mail_link);
}

//function checkForm(form) {
//	if(form.name.value.length == 0) form.name.style.borderColor="green ";//alert("Введiть iм`я!");
//	if(form.mail.value.length == 0) ;//alert("Введiть mail!");

//if(form.name.value.length == 0) 
//document.getElementById("name").addClass("error");
//document.getElementById("name").focus();


//document.getElementById("name").style.border="5px solid red";//document.getElementById("name").className = document.getElementById("name").className + " error";  // this adds the error class

//}