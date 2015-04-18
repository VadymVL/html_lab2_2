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
	input_form.password.value + ", " + 
	input_form.country.value + ", " + 
	input_form.city.value + ", " + 
	input_form.postal_code.value + ", " + 
	input_form.gender.value + ", " + 
	input_form.age.value;// + ", "; + 
	
	for(var i=0; i < input_form.lang.length; i++) {
		if(input_form.lang[i].checked) {
			result += ", " + input_form.lang[i].value;
		}
	}
	
	result +=  ", " +
	input_form.interests.value + ", " + 
	input_form.bio.value + ", " + 
	input_form.about.value + ", " + 
	input_form.skills.value + ", " + 
	input_form.comment.value;

	document.validation_form.results.value = result;
	//alert(result);
	return;
}

function sendEmail() {
	var body = document.validation_form.results.value;//email_form.results.value;
	var mail_link = 'mailto:deloreanr@mail.ru?subject=Register&body=' + encodeURIComponent(body) + "&bcc=deloreanr@mail.ua";
	if(body != "" || body.length != 0) { 
		window.location.href = mail_link;
		document.validation_form.results.className = "FieldOk";
	} else {
		document.validation_form.results.className = "FieldError";
	}
}

function resetError(element) {
	element.className = "FieldOk";
}