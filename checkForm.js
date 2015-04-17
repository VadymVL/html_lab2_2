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

function sendEmail() {
	var body = document.validation_form.results.value;//email_form.results.value;
	var mail_link = 'mailto:deloreanr@mail.ru?subject=Register&body=' + encodeURIComponent(body) + "&bcc=deloreanr@mail.ua";
	//window.location.href = mail_link; 
	//window.open(mail_link);
	window.location.href = mail_link;
	console.log(mail_link);
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
var ColorValue = 0x0;

function setbackground()
{
window.setTimeout( "changeColor()", 10); // 5000 milliseconds delay
changeColor();

//var elm = document.getElementById(id);
	//elm.style.background
	
//var index = Math.round(Math.random() * 9);

/*var ColorValue = "FFFFFF"; // default color - white (index = 0)

if(index == 1)
ColorValue = "FFCCCC"; //peach
if(index == 2)
ColorValue = "CCAFFF"; //violet
if(index == 3)
ColorValue = "A6BEFF"; //lt blue
if(index == 4)
ColorValue = "99FFFF"; //cyan
if(index == 5)
ColorValue = "D5CCBB"; //tan
if(index == 6)
ColorValue = "99FF99"; //lt green
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FFCC99"; //lt orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey*/

}

function changeColor() {
	ColorValue++;
if(ColorValue >= 0xFFFFFF) ColorValue = 0x0;

document.getElementsByTagName("body")[0].style.background = "#" + ColorValue;
}