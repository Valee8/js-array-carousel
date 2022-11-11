// Consegna:
// Dato un array contenente una lista di cinque immagini (che create voi in base alle img che vi passo),
// creare un carosello come nello screenshot allegato.

for (let i = 1; i <= 5; i++) {
    const container = document.getElementById("container");

    const div = document.createElement("div");

    const image = div.classList.add("image");

    container.append(div);

    div.innerHTML += `<img src="img/0${i}.webp" alt="immagine" class="immagine">`;

    const imageArray = container.getElementsByClassName("immagine");

    console.log("test:", imageArray);
}