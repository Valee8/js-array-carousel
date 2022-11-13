// Consegna:
// Dato un array contenente una lista di cinque immagini (che create voi in base alle img che vi passo),
// creare un carosello come nello screenshot allegato.

const arrayImmagini = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

const immaginiCollection = document.getElementsByClassName("item");

const miniaturaCollection = document.getElementsByClassName("item-miniatura");

for (let i = 0; i < arrayImmagini.length; i++) {

    const slider = document.querySelector(".slider");

    const miniature = document.querySelector(".miniature");

    const next = document.querySelector(".next");

    const prev = document.querySelector(".prev");

    let activeItem = 0;

    slider.innerHTML += `
    <div class="item">
        <img src="img/${arrayImmagini[i]}" alt="immagine">
    </div>`;

    miniature.innerHTML += `
    <div class="item-miniatura">
        <img src="img/${arrayImmagini[i]}" alt="immagine">
    </div>`;
    
    immaginiCollection[activeItem].classList.add("active");

    miniaturaCollection[activeItem].classList.add("active");

    next.addEventListener("click", 
        function() {

            if (activeItem < arrayImmagini.length - 1) {
                immaginiCollection[activeItem].classList.remove("active");

                miniaturaCollection[activeItem].classList.remove("active");

                activeItem++;

                immaginiCollection[activeItem].classList.add("active");

                miniaturaCollection[activeItem].classList.add("active");


            }

            else {
                activeItem = 0;

                immaginiCollection[activeItem].classList.add("active");

                miniaturaCollection[activeItem].classList.add("active");

                immaginiCollection[arrayImmagini.length - 1].classList.remove("active");

                miniaturaCollection[arrayImmagini.length - 1].classList.remove("active");


            }

        }
    );                

    prev.addEventListener("click", 
        function() {

            if (activeItem <= arrayImmagini.length - 1 && activeItem > 0) {

                immaginiCollection[activeItem].classList.remove("active");

                miniaturaCollection[activeItem].classList.remove("active");

                activeItem--;

                immaginiCollection[activeItem].classList.add("active");

                miniaturaCollection[activeItem].classList.add("active");

            }

            else {
                activeItem = arrayImmagini.length - 1;

                immaginiCollection[activeItem].classList.add("active");

                miniaturaCollection[activeItem].classList.add("active");

                immaginiCollection[0].classList.remove("active");

                miniaturaCollection[0].classList.remove("active");
                
            }

        }
    );

}

console.log(arrayImmagini);

console.log(immaginiCollection);

console.log(miniaturaCollection);