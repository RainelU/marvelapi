		/***** REGISTER FORM ******/
let name = document.getElementById("name-reg");
let email = document.getElementById("email-reg").value;
let pass = document.getElementById("pass-reg");
let confirmPass = document.getElementById("confirmpass-reg");

let divName = document.getElementById("div-label-name");
let divEmail = document.getElementById("div-label-email");
let divPass = document.getElementById("div-label-pass");
let divConfirmPass = document.getElementById("div-label-confirmpass");

		/********* LOG IN FORM**********/
let modalLogin = document.getElementById("Login")
let nameLogin = document.getElementById("name-login");
let passLogin = document.getElementById("pass-login");

let divNameLogin = document.getElementById("div-name-login");
let divPassLogin = document.getElementById("div-pass-login");
let divWelcomeAdmin = document.getElementById("welcome-admin");
let iconLU = document.getElementById("i-user-login");
let iconPU = document.getElementById("i-pass-login")

		/**** <a> TRANSITIONS ***/
let pasedLogin = document.querySelector("#a-event");

const BTN_LOGIN = document.getElementById("btn-login");
const BTN_REGISTER = document.getElementById("btn-register");

BTN_REGISTER.addEventListener('click', function(e){
	/***Start Name Input Validate***/

	if (!/^\S/.test(name.value)) {
		divName.innerHTML = `
			<span>* No debe tener espacios en blanco</span>
			<i class='fa fa-check' style='position: absolute; color: red; right: 0;'></i>
		`;

		e.preventDefault();
	}else if(name.value.length <= 5){
		divName.innerHTML = "";
		divName.innerHTML = `
			<span>* Debe tener más de 5 carácteres</span>
			<i class='fa fa-check' style='position: absolute; color: red; right: 0;'></i>
		`;

		e.preventDefault();
	}else if(name.value.length >= 18){
		divName.innerHTML = `
			<span>* Debe tener menos de 18 carácteres</span>
			<i class='fa fa-check' style='position: absolute; color: red; right: 0;'></i>
		`;

		e.preventDefault();
	}else{
		divName.innerHTML = `
			<span> 
			<i class='fa fa-check' style='position: absolute; color: green; right:0;'></i></span>
		`;
	}
	/****Start Email Validate****/
	if (!/^[@hotmail.com]/) {
		divEmail.innerHTML = `
			<span>* Debe tener @hotmail.com or @gmail.com</span>
		`;
	}
	/*****End Email Validate******/

	/***Start PassWord Validate****/
	if(!/^\S/.test(pass.value)){
		
		divPass.innerHTML = `
			<span>* No debe tener espacios en blanco</span>
			<i class='fa fa-check' style='position: absolute; color: red; right: 0;'></i>
		`;

		e.preventDefault();
	}else if(pass.value.length <= 6){
		divPass.innerHTML = `
			<span>* Debe tener más de 6 carácteres</span>
			<i class='fa fa-check' style='position: absolute; color: red; right: 0;'></i>
		`;

		e.preventDefault();
	}else if(pass.value.length >= 24){
		divPass.innerHTML = `
			<span>* Debe tener menos de 24 carácteres</span>
			<i class='fa fa-check' style='position: absolute; color: red; right: 0;'></i>
		`;

		e.preventDefault();
	}else{
		divPass.innerHTML = `
			<i class='fa fa-check' style='position: absolute; color: green; right: 0;'></i>
		`;
	}

	/*****End Password Validate****/

	/****Start ConfirmPas Validate****/
	if(!/^\S/.test(confirmPass.value)){
		divConfirmPass.innerHTML = `
			<span>* No debe tener espacios en blanco</span>
			<i class='fa fa-check' style='position: absolute; color: red; right: 0;'></i>
		`;

		e.preventDefault();
	}else if(confirmPass.value.length <= 6){
		divConfirmPass.innerHTML = `
			<span>* Debe tener más de 6 carácteres</span>
			<i class='fa fa-check' style='position: absolute; color: red; right: 0;'></i>
		`;

		e.preventDefault();
	}else if(confirmPass.value.length >= 24){
		divConfirmPass.innerHTML = `
			<span>* Debe tener menos de 24 carácteres</span>
			<i class='fa fa-check' style='position: absolute; color: red; right: 0;'></i>
		`;
	}else if(confirmPass.value != pass.value){
		divConfirmPass.innerHTML = `
			<span>* Las contraseñas no son iguales</span>
			<i class='fa fa-check' style='position: absolute; color: red; right: 0;'></i>
		`;

		e.preventDefault();
	}else{
		divConfirmPass.innerHTML = `
			<i class='fa fa-check' style='position: absolute; color: green; right: 0;'></i>
		`;
	}

	/****End ConfirmPas Validate****/
});

BTN_LOGIN.addEventListener('click', function(e){
	if (!/^\S/.test(nameLogin.value)) {
		divNameLogin.innerHTML = `
			<span>* No debe tener espacios en blanco</span>
		`;

		e.preventDefault();
	}else if(nameLogin.value != "RainelU_ADMIN"){
		divNameLogin.innerHTML = `
			<span>* No eres el ADMIN</span>
		`;

		e.preventDefault();
	}else{
		divNameLogin.innerHTML = `
		`;

		divWelcomeAdmin.style.width = "100%";
		divWelcomeAdmin.style.textAlign = "center";
		divWelcomeAdmin.innerHTML = `
			<span style='width:100%;text-aling:center;position:relative;top:100px;text-transform:uppercase;color:green;'>
				Bienvenido, ADMINISTRADOR Rainel.
			</span>
		`;

		e.preventDefault();
	}

	if (!/^\S/.test(passLogin.value)) {
		divWelcomeAdmin.innerHTML = "";
		divPassLogin.innerHTML = `
			<span>* No debe tener espacios en blanco</span>
		`;

		e.preventDefault();
	}else if(passLogin.value != "mynameisrainel"){
		divWelcomeAdmin.innerHTML = "";
		divPassLogin.innerHTML = `
			<span>* La contraseña es incorrecta</span>
		`;
	}else{
		divPassLogin.innerHTML = "";
	}
});

pasedLogin.addEventListener('click', function(){
	modalLogin.style.display = "none";
});

nameLogin.addEventListener('click', function(){
	iconLU.style.color = "grey";
});

passLogin.addEventListener('click', function(){
	iconPU.style.color = "grey";
});