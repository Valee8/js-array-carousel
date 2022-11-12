// Consegna:
// Dato un array contenente una lista di cinque immagini (che create voi in base alle img che vi passo),
// creare un carosello come nello screenshot allegato.

const imageArray = document.getElementsByClassName("immagine");

const miniatureArray = document.getElementsByClassName("immagine-miniatura");


for (let i = 1; i <= 5; i++) {

    const slider = document.querySelector(".slider");

    const miniature = document.querySelector(".miniature");

    const next = document.querySelector(".next");

    const prev = document.querySelector(".prev");

    let activeItem = 0;

    slider.innerHTML += `
    <div class="immagine">
        <img src="img/0${i}.webp" alt="immagine">
    </div>`;

    miniature.innerHTML += `
    <div class="immagine-miniatura">
        <img src="img/0${i}.webp" alt="immagine">
    </div>`;

    imageArray[activeItem].classList.add("active");
    miniatureArray[activeItem].classList.add("active");

    next.addEventListener("click", 
        function() {

            if (activeItem < imageArray.length - 1) {
                imageArray[activeItem].classList.remove("active");

                miniatureArray[activeItem].classList.remove("active");

                activeItem++;

                imageArray[activeItem].classList.add("active");

                miniatureArray[activeItem].classList.add("active");

            }

            else {
                activeItem = 0;

                imageArray[activeItem].classList.add("active");

                miniatureArray[activeItem].classList.add("active");

                imageArray[imageArray.length - 1].classList.remove("active");

                miniatureArray[imageArray.length - 1].classList.remove("active");
            }

        }
    );                

    prev.addEventListener("click", 
        function() {

            if (activeItem <= imageArray.length - 1 && activeItem > 0) {

                imageArray[activeItem].classList.remove("active");

                miniatureArray[activeItem].classList.remove("active");

                activeItem--;

                imageArray[activeItem].classList.add("active");

                miniatureArray[activeItem].classList.add("active");

            }

            else {
                activeItem = imageArray.length - 1;

                imageArray[activeItem].classList.add("active");

                miniatureArray[activeItem].classList.add("active");
                
                imageArray[0].classList.remove("active");
                
                miniatureArray[0].classList.remove("active");
            }

        }
    );

}

console.log(imageArray);

console.log(miniatureArray);