const contador = document.getElementById('carro');
const boton = document.querySelectorAll('.button');

let counter = 0;

function updateCounter() {
  contador.innerHTML = `${counter}`;
}


boton.forEach(button => {
  button.addEventListener('click', () => {
    counter++;
    updateCounter(); 
  });
});


updateCounter();

/////////////////////////////////////////////////ALERTA////////////////////////////////////////////
const AppleImg = document.getElementById('Apple');  // Solo funciona cuando aparecen por primera vez, no sé porqué, lo siento pero intente ponerlo a los 3 y no funciono, funciona solo en una imagen.
const linuxImg = document.getElementById('linux'); // lo mismo acá, de funcionar funciona pero oslo porq hay uno.
const windowsImg = document.getElementById('Windows'); // aca solo funciona el primero que aparece.
linuxImg.addEventListener('click', () => {
    alert('Este juego es compatible con Linux');
});

windowsImg.addEventListener('click', () => {
    alert('Este juego es compatible con Windows');
});

AppleImg.addEventListener('click', () => {
    alert('Este juego es compatible con Apple/Mac/Iphone');
});

/////////////////////////////////////////Carrusel////////////////////////////////////////////

let Actual = 1;

function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) {
        Actual = 1;
    }
    if (n < 1) {
       Actual = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[Actual - 1].style.display = "block";
}

function changeSlide(n) {
    showSlide(Actual += n);
}

showSlide(Actual);