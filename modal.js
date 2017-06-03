// width of side nav when open
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// width of side nav when closed
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var modal = document.getElementById('modal');

var span = document.getElementsByClassName("close")[0];

// close the modal
span.onclick = function() {
    modal.style.display = "none";
};

setTimeout(function (){
	modal.style.display = "block";
}, 3000);

//submit button in Modal
let submit = document.getElementById('submit');
let email = document.getElementById('email');
let password = document.getElementById('password');
submit.addEventListener('click', func);
function func () {
	if (email.value.length > 6 && password.value.length > 4) {
		alert("Thank you, an email will be sent shortly.")
	}else {
		alert('Invalid email/password')
	}
};