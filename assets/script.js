const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Initialisation de la position et du nombres de slides
let position = 0; 
const numberSlides = slides.length;

// Appel des fonctions
createDots();
createCaroussel(position);
updateDot();

// Ciblage des éléments flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Event listener sur la flèche gauche et la droite pour mise a jour de la position et création du carousel 
arrowLeft.addEventListener("click", () => {
    position = (position === 0) ? numberSlides - 1 : position - 1;
    createCaroussel(position);
});

arrowRight.addEventListener("click", () => {
    position = (position === numberSlides - 1) ? 0 : position + 1;
    createCaroussel(position);
});

// Création d'une div pour chaque points avec attribution de la class dot à chacun
function createDots(){
	const dots = document.querySelector(".dots"); 
	for (let index = 0; index < slides.length; index++) { 
		const dot= document.createElement("div"); 
		dot.setAttribute("class", "dot"); 
		dots.appendChild(dot); 
	// Ajout d'un event au clic sur chaque point 
	dot.addEventListener("click", function () { 
		position = index; 
		createCaroussel(position); 
	});
}};

// Mise à jour de l'apprence des points en fonction de la position actuelle
function updateDot() {
    const bulletdots = document.querySelectorAll(".dot");
    bulletdots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === position);
    });
};

// Mise a jour de l'image et de la légende en fonction de la position actuelle
function createCaroussel(position) {
    const { image, tagLine } = slides[position];
    const img = document.querySelector(".banner-img");
    img.setAttribute("src", `./assets/images/slideshow/${image}`);
    img.setAttribute("alt", "Slide Image");
    const p = document.querySelector("p");
    p.innerHTML = tagLine;
    updateDot();
};





