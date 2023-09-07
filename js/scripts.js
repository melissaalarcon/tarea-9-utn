document.addEventListener("DOMContentLoaded", () => { // Cuando carga el documento...
    
    // Hacemos el fetch a la api
    const base = "https://api-dolar-argentina.herokuapp.com/";
    const endpoint = "api/dolarblue";

    fetch(base + endpoint, (data) => {
        if (!data) {
            console.log("Failed to connect api");
        } else {
            console.log(data);
        }
    })

    // Cambiar de color los navs
    const navs = Array.from(document.getElementsByClassName("nav-link"));
    var actual = 0;

    setInterval(function() {
        colorLink(navs, actual);
        if (actual === navs.length - 1) {
            actual = 0;
        } else {
            ++actual;
        }
    }, 1000)

    // Cambiar la imagen de la card
    var actual2 = 1;
    const card = document.querySelector(".card-img-top");

    setInterval(function() {
        card.src = "img/" + actual2 + ".svg";
        if (actual2 === 3) {
            actual2 = 1;
        } else {
            ++actual2;
        }
    }, 1000)

});

function colorLink(elements, index) {
    for (let el of elements) {
        let elIndex = elements.indexOf(el);

        if (elIndex === index) {
            el.style.color = "red";
        } else {
            el.style.color ="white"
        }
    }
}

