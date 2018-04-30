const URL = "http://gateway.marvel.com/v1/public/series?ts=1&apikey=2a376b9caa79d2a09aa7815eb679dbd0&hash=6a52d9b444c4ea46c9a0f4cbb3999b57";
fetch(URL)
	.then(function(r){
		return r.json();
	}).then(function(json){
		let array = [];
		for (var i = 0; i < json.data.results.length; i++) {
			let element = json.data.results[i];
			let elementImg = element.thumbnail.path;

			const IMG_ONE_ROW = document.querySelector("#imageonerow");
			const IMG_TWO_ROW = document.querySelector("#imagetworow");
			const IMG_THREE_ROW = document.querySelector("#imagethreerow");

			IMG_ONE_ROW.innerHTML += `
				<div class="div-config-series">
					<a href="${element.urls[0].url}" class="a-config-series">${element.title}</a>
					<a href="${element.urls[0].url}">
						<img class="img-config-series" src="${elementImg}/standard_amazing.jpg" alt="Serie" width="200" height="200">
					</a>
				</div>
			`;
			IMG_TWO_ROW.innerHTML += `
				<div class="div-config-series">
					<a href="${element.urls[0].url}" class="a-config-series">${element.title}</a>
					<a href="${element.urls[0].url}">
						<img class="img-config-series" src="${elementImg}/standard_amazing.jpg" alt="Serie" width="200" height="200">
					</a>
				</div>
			`;
			IMG_THREE_ROW.innerHTML += `
				<div class="div-config-series">
					<a href="${element.urls[0].url}" class="a-config-series">${element.title}</a>
					<a href="${element.urls[0].url}">
						<img class="img-config-series" src="${elementImg}/standard_amazing.jpg" alt="Serie" width="200" height="200">
					</a>
				</div>
			`;
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

$(document).ready(function(){
	var screen = $('#ajax-loading');
	configureLoadingScreen();
});

function configureLoadingScreen(screen){
	$(document)
	.ajaxStart(function(){
		screen.fadeIn();
		screen.style.display = "none";
		console.log("a");
	})
	.ajaxStop(function(){
		screen.fadeOut();
		screen.style.display = "block";
	});
};