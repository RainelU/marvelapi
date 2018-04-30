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
			<span style='width:100%;text-aling:center;position:relative;text-transform:uppercase;color:#5fa941;'>
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
	$('#Login').modal('toggle');
});

nameLogin.addEventListener('click', function(){
	iconLU.style.color = "grey";
});

passLogin.addEventListener('click', function(){
	iconPU.style.color = "grey";
});

/****** FINAL DE LA VALIDACIÓN DE LOS LOGIN'S Y REGISTER *******/

const URL = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2a376b9caa79d2a09aa7815eb679dbd0&hash=6a52d9b444c4ea46c9a0f4cbb3999b57";

let container = document.getElementById("container-search");
let imgContainer = document.querySelector("img-search");
const INPUT_SEARCH = document.querySelector("#search-input");
const BTN_SEARCH = document.querySelector("#search-btn"); 

fetch(URL)
.then(function(r){
	return r.json();
}).then(function(json){
	let arrayName = [];
	for (var i = 0; i < json.data.results.length; i++) {
		let element = json.data.results[i];
		let elementName = element;

		arrayName.push(elementName);
	}

	const BTN_ALL = document.querySelector("#all-btn");
	BTN_ALL.addEventListener("click", function(e){
		e.preventDefault();
		container.innerHTML = "";
		for (var t = 0; t < arrayName.length; t++) {
			let item = arrayName[t];
			$('#Search').modal('show');
			container.innerHTML += `
				<a class="a-config" href="${item.thumbnail.path}/landscape_medium.jpg">${item.name}</a>
			`;

			let a = document.createElement("a");
			let img = document.createElement("img");
				
			a.appendChild(img);
			a.href = `${item.urls[0].url}`;
			container.appendChild(a);

			img.src = `${item.thumbnail.path}/landscape_medium.jpg`;
			img.className = "img-config";
		}
	});

	BTN_SEARCH.addEventListener("click", function r(e){
		container.innerHTML = "";
		e.preventDefault();
		for (var j = 0; j < arrayName.length; j++) {
			let item = arrayName[j];
			if(INPUT_SEARCH.value.length <= 0){
				return false;
			}else if (item.name.search(INPUT_SEARCH.value) != -1) {
				$('#Search').modal('show');
				container.innerHTML += `
					<a class="a-config">${item.name}</a>
				`;

				let a = document.createElement("a");
				let img = document.createElement("img");
				
				a.appendChild(img);
				a.href = `${item.urls[0].url}`;
				container.appendChild(a);

				img.src = `${item.thumbnail.path}/landscape_medium.jpg`;
				img.className = "img-config";
			}
		}
	});
}).catch(function(error){
	alertify.error("No es posible establecer conexión a internet");
}).catch(function(success){
	alertify.success("Conexión Establecida");
});


BTN_SEARCH.addEventListener("click", function(e){
	if (!/^\S/.test(INPUT_SEARCH.value)) {
		alertify.error("Ingresa un valor");
		return false;

		$('#Search').modal('dispose');
		$('#Search').style.display = "none";
		$('#Search').style.visibility = "hidden";

	}
});

window.onload = function(){
	var contenedor = document.getElementById("contenedor_carga");
	contenedor.style.visibility = "hidden";
	contenedor.style.opacity = "0";
	contenedor.style.zIndex = "-5000";
};

const BTN_UNDER = document.querySelector("#btn-under");

$(document).ready(function(){
	$('#btn-under').click(function(){
		$('body, html').animate({
			scrollTop: "0px"
		}, 1000);

		$(window).scroll(function(){
			if ($(this).scrollTop() > 0) {
				$('#btn-under').slideDown(500);
			}else{
				$('#btn-under').slideUp(500);
			}
		});
	});
});