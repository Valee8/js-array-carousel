// Consegna:
// Dato un array contenente una lista di cinque immagini (che create voi in base alle img che vi passo),
// creare un carosello come nello screenshot allegato.

for (let i = 1; i <= 5; i++) {

    const slider = document.querySelector(".slider");

    let activeItem = 0;

    slider.innerHTML += `
    <div class="immagine">
        <img src="img/0${i}.webp" alt="immagine">
    </div>`;

    const imageArray = document.getElementsByClassName("immagine");

    imageArray[activeItem].classList.add("active");

    console.log(imageArray);
}