'use strict';

// ventana emergente para San Andres

var solicitarBtn = document.getElementById("solicitar-btn");
var popupForm = document.getElementById("popup-form");


solicitarBtn.addEventListener("click", function() {
    popupForm.style.display = "block";
});
var closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function() {
    popupForm.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
});


// ventana emergente para cartagena

var solicitarBtn = document.getElementById("btn-cartagena");
var popupForm = document.getElementById("popupcartagena");
solicitarBtn.addEventListener("click", function() {
    popupForm.style.display = "block";
});

var closeBtn = document.querySelector(".btn-cerrarcarta");


closeBtn.addEventListener("click", function() {
    popupForm.style.display = "none";
});


window.addEventListener("click", function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
});

// ventana emergente para medellin

var solicitarBtn = document.getElementById("btn-medellin");
var popupForm = document.getElementById("popupmedellin");

solicitarBtn.addEventListener("click", function() {
    popupForm.style.display = "block";
});


var closeBtn = document.querySelector(".btn-cerrarmede");

closeBtn.addEventListener("click", function() {
    popupForm.style.display = "none";
});


window.addEventListener("click", function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
});

