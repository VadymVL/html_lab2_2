var empty_fields = false; //if was any error
var lang_checkbox_checked = false;
var lang_checkbox_count = 6;
var gender_radio_checked = false; //if radio was checked
var gender_radio_count = 2;
var age_radio_checked = false;
var age_radio_count = 5;
var text_input_count = 7;

function isNotEmpty(field) {

    var fieldData = field.value;
	var fieldTag = field.tagName.toLowerCase();
	var fieldType = "";
	
	if (field.hasAttributes()) { //get element type
       var attrs = field.attributes;
	   for(var i=0; i < attrs.length; i++) {		 
		 if(attrs[i].name.toLowerCase() == "type") fieldType += attrs[i].value.toLowerCase();
       }
     }

	if(fieldType == "checkbox") {
		if(field.checked) {
			lang_checkbox_checked = true;
			document.getElementById("langs").className = "FieldOk";
			return true;
		} else {
			lang_checkbox_count--;
			if(lang_checkbox_count == 0) { //if all checkboxes unchecked
				lang_checkbox_checked = false;
				lang_checkbox_count = 6;
				empty_fields = true;
			}
			if(!lang_checkbox_checked) document.getElementById("langs").className = "FieldError";
			return false;
		}
	}
	
	if(fieldType == "radio") {
		if(field.checked) {
			if(field.name == "gender") {
				gender_radio_checked = true;
				document.getElementById("genders").className = "FieldOk";
			} else {
				age_radio_checked = true;
				document.getElementById("ages").className = "FieldOk";
			}
			return true;
		} else {
			if(field.name == "gender") {
				gender_radio_count--;
				if(gender_radio_count == 0) { //if all checkboxes unchecked
					gender_radio_checked = false;
					gender_radio_count = 2;
					empty_fields = true;
				}
			} else {
				age_radio_count--;
				if(age_radio_count == 0) { //if all checkboxes unchecked
					age_radio_checked = false;
					age_radio_count = 5;
					empty_fields = true;
				}
			}
			if(!age_radio_checked)document.getElementById("ages").className = "FieldError";
			if(!gender_radio_checked)document.getElementById("genders").className = "FieldError";
			return false;
		}
	}
	
	if(fieldType == "reset") { //not check it
		return true;
	}
	
	if(fieldTag == "button") { //not check it
		return true;
	}
	
	if(fieldTag == "textarea") { //not necessary input
		return true;
	}
		
    if (fieldData.length == 0 || fieldData == "") {
        field.className = "FieldError"; //Class to highlight 
		empty_fields = true;
        return false;
    } else {
		if(field.name == "postal_code") {
			if(fieldData.length !=5 || checkForNoNumbers(fieldData)) {
				field.className = "FieldError";
				document.getElementById("alert_message").innerHTML += "<br>Postal code should contain only numbers and have 5 digits!"
				return false;
			} else {
				field.className = "FieldOk";
				return true;
			}
		} else if(field.name == "email_adress") {
			if(fieldData.indexOf("@") == -1) {
				field.className = "FieldError";
				document.getElementById("alert_message").innerHTML += "<br>Email adress should be correct and contain '@'!"
				return false;
			} else {
				field.className = "FieldOk";
				return true;
			}
		} else if(field.name == "password") {
			if(fieldData.length < 6) {
				field.className = "FieldError";
				document.getElementById("alert_message").innerHTML += "<br>Password should have 6 characters length!"
				return false;
			} else {
				field.className = "FieldOk";
				return true;
			}
		} else {
			if(checkForNoLetters(fieldData)) {
				field.className = "FieldError";
				var element_name;
				switch(field.name) {
					case "first_name":element_name="First name field";break;
					case "last_name":element_name="First name field";break;
					case "country":element_name="Country name field";break;
					case "city":element_name="City name field";break;
				}
				document.getElementById("alert_message").innerHTML += "<br>" + element_name + " should contain only letters!"
				return false;
			} else {
				field.className = "FieldOk";
				return true;
			}
		}
        //field.className = "FieldOk"; //Resets field back to default
        //return true; //Submits form
    }
}

function rawSubmit() {
	var form = document.input_form;
	var result = "";
	document.getElementById("alert_message").innerHTML = "";
	lang_checkbox_count = 6;
	age_radio_count = 5;
	gender_radio_count = 2;
	text_input_count = 7;
	empty_fields = false;
	for(var i=0; i < form.length; i++) {
		//if(!isNotEmpty(form[i])) return;
		if(isNotEmpty(form[i])) {
			if(form[i].value.length > 0) { //for not required fields
				if(i>0) result += ", ";
				result += + form[i].value;
			}
		}
	}
	
	if(empty_fields) {
		document.validation_form.results.value = "";
		return;
	}
	/*
	if(checkForNumbers(form.country.value)) {
		console.log("1");
		alert_mesage = "Country name shouldn't have numbers!";
		form.country.className = "FieldError";
		return;
	} 
	
	if(checkForNumbers(form.city.value)) {
		alert("City name shouldn't have numbers!");
		form.city.className = "FieldError";
		return;
	}
	
	if(checkForNumbers(form.first_name.value)) {
		alert("Your name shouldn't have numbers!");
		form.first_name.className = "FieldError";
		return;
	}
	
	if(checkForNumbers(form.last_name.value)) {
		alert("Your last name shouldn't have numbers!");
		form.last_name.className = "FieldError";
		return;
	}
	
	if(!checkForNumbers(form.postal_code.value)) {
		alert("Postal code shouldn't have letters!");
		form.postal_code.className = "FieldError";
		return;
	}*/
	
	document.validation_form.results.value = result;
}

function checkForNoNumbers(string) {
	 for (var i=0; i < string.length; i++)
	{ 
		if ((string.charAt(i) < "0") || (string.charAt(i) > "9"))
		{ 
		return true;
		} 
	} 
	return false;
}

function checkForNoLetters(string) {
	 for (var i=0; i < string.length; i++)
	{ 
		if ((string.charAt(i) < "a") || (string.charAt(i) > "z")) {
			if ((string.charAt(i) < "A") || (string.charAt(i) >"Z")) {
				return true;
			}
		}
	}
	return false;
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

function clearSubmit() {
	var form = document.input_form;
	//clear all errors
	for(var i=0; i < form.length; i++) {
		form[i].className = "clear";
	}
	//clear all errors
	document.getElementById("langs").className = "clear";
	document.getElementById("ages").className = "clear";
	document.getElementById("genders").className = "clear";
	//reset to defaults
	empty_fields = false; //if was any error
	lang_checkbox_checked = false;
	lang_checkbox_count = 6;
	gender_radio_checked = false; //if radio was checked
	gender_radio_count = 2;
	age_radio_checked = false;
	age_radio_count = 5;
	text_input_count = 7;
	empty_fields = false;
}