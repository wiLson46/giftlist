window.onload = function() {
    document.getElementById("link1").onclick = function fun() {
        soloTodos();
    }
    document.getElementById("link2").onclick = function fun() {
        soloBarato();
    }
    document.getElementById("link3").onclick = function fun() {
        soloMedio();
    }
    document.getElementById("link4").onclick = function fun() {
        soloCaro();
    }
    document.getElementById("link5").onclick = function fun() {
        soloSoñar();
    }
    document.getElementById("link6").onclick = function fun() {
        soloLoved();
    }
}


function soloTodos(e) {

    var barato = document.querySelectorAll("div.cartaBarato");
    [].forEach.call(barato, function(el) {
        el.classList.remove("d-none");
    });
    var medio = document.querySelectorAll("div.cartaMedio");
    [].forEach.call(medio, function(el) {
        el.classList.remove("d-none");
    });
    var caro = document.querySelectorAll("div.cartaCaro");
    [].forEach.call(caro, function(el) {
        el.classList.remove("d-none");
    });
    var soñar = document.querySelectorAll("div.cartaSoñar");
    [].forEach.call(soñar, function(el) {
        el.classList.remove("d-none");
    });

}

function soloBarato(e) {

    var medio = document.querySelectorAll("div.cartaMedio");
    [].forEach.call(medio, function(el) {
        el.classList.add("d-none");
    });
    var caro = document.querySelectorAll("div.cartaCaro");
    [].forEach.call(caro, function(el) {
        el.classList.add("d-none");
    });
    var soñar = document.querySelectorAll("div.cartaSoñar");
    [].forEach.call(soñar, function(el) {
        el.classList.add("d-none");
    });
    var barato = document.querySelectorAll("div.cartaBarato");
    [].forEach.call(barato, function(el) {
        el.classList.remove("d-none");
    });

}

function soloMedio(e) {

    var barato = document.querySelectorAll("div.cartaBarato");
    [].forEach.call(barato, function(el) {
        el.classList.add("d-none");
    });
    var caro = document.querySelectorAll("div.cartaCaro");
    [].forEach.call(caro, function(el) {
        el.classList.add("d-none");
    });
    var soñar = document.querySelectorAll("div.cartaSoñar");
    [].forEach.call(soñar, function(el) {
        el.classList.add("d-none");
    });
    var medio = document.querySelectorAll("div.cartaMedio");
    [].forEach.call(medio, function(el) {
        el.classList.remove("d-none");
    });

}

function soloCaro(e) {

    var barato = document.querySelectorAll("div.cartaBarato");
    [].forEach.call(barato, function(el) {
        el.classList.add("d-none");
    });
    var medio = document.querySelectorAll("div.cartaMedio");
    [].forEach.call(medio, function(el) {
        el.classList.add("d-none");
    });
    var soñar = document.querySelectorAll("div.cartaSoñar");
    [].forEach.call(soñar, function(el) {
        el.classList.add("d-none");
    });
    var caro = document.querySelectorAll("div.cartaCaro");
    [].forEach.call(caro, function(el) {
        el.classList.remove("d-none");
    });
}

function soloSoñar(e) {

    var barato = document.querySelectorAll("div.cartaBarato");
    [].forEach.call(barato, function(el) {
        el.classList.add("d-none");
    });
    var medio = document.querySelectorAll("div.cartaMedio");
    [].forEach.call(medio, function(el) {
        el.classList.add("d-none");
    });
    var caro = document.querySelectorAll("div.cartaCaro");
    [].forEach.call(caro, function(el) {
        el.classList.add("d-none");
    });
    var soñar = document.querySelectorAll("div.cartaSoñar");
    [].forEach.call(soñar, function(el) {
        el.classList.remove("d-none");
    });
}

function soloLoved(e) {

    var barato = document.querySelectorAll("div.cartaBarato");
    [].forEach.call(barato, function(el) {
        el.classList.add("d-none");
    });
    var medio = document.querySelectorAll("div.cartaMedio");
    [].forEach.call(medio, function(el) {
        el.classList.add("d-none");
    });
    var caro = document.querySelectorAll("div.cartaCaro");
    [].forEach.call(caro, function(el) {
        el.classList.add("d-none");
    });
    var soñar = document.querySelectorAll("div.cartaSoñar");
    [].forEach.call(soñar, function(el) {
        el.classList.add("d-none");
    });
    var loved = document.querySelectorAll("div.loved");
    [].forEach.call(loved, function(el) {
        el.classList.remove("d-none");
    });
}

console.log("script cargado");