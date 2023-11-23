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

// Déclaration de la variable sur la position 0
let position = 0; 
// Déclaration de la constante du tableau des slides
const numberOfSlide = slides.length;

// appel des fonctions
createDots();
createCaroussel(position);
updateDot();

// Cibler les éléments flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Event Listener flèche gauche au clic inverse du clic gauche
arrowLeft.addEventListener("click", function () {
    if (position == 0) {
        position = numberOfSlide - 1;
    }
    else {
        position--;
    }
        createCaroussel(position);
});

// Event listener flèche gauche au clic
arrowRight.addEventListener("click", function () {
	// vérifier si la position actuelle est à la dernière diapo
    if (position == numberOfSlide - 1) {
        position = 0; // si c'est la cas réinitialiser à la première
    } else {
            position++; // si ce n'est pas le cas incrémente de 1
    }
    createCaroussel(position); // appel de la fonction carroussel

});

// Création des points
function createDots(){
	const dots = document.querySelector(".dots"); //Cicler dots auquel ajouter les points
	for (let index = 0; index < slides.length; index++) { // Création de la boucle des diapos
		const dot= document.createElement("div"); // création d'un élément div pour chaque point
		dot.setAttribute("class", "dot"); // attribution de la class dot a chaque div
		dots.appendChild(dot); // ajout de dot à l'élément dots
	dot.addEventListener("click", function () { // Ajout d'un event au clic pour chaque point
		position = index; // Définit la position sur celle du point cliqué
		createCaroussel(position); // Mise à jour du carrousel
});
}
}

// Mis à jour du point en cours de visionnage
function updateDot() {
	const listPoints = document.querySelectorAll(".dot"); //Ciblage de tous les éléments dot	
	for (let index = 0; index < listPoints.length; index++) {
		const dot = listPoints[index]; // création de la boucle
	if (index == position){ // vérifier si le point correspond a l'image affichée en cours
		dot.classList.add('dot_selected'); // Si oui ajout de la classe pour le point en cours	
	}
	else{
		dot.classList.remove('dot_selected'); // suppression de la classe pour tous les autres	 
	}}};


// Création du carroussel
function createCaroussel(position){
	const element = slides[position]; //Récupère l'élément à la position spécifié
	const img = document.querySelector(".banner-img"); // Cible l'élément avec la class banner-img
		img.setAttribute("src" , "./assets/images/slideshow/"+ element.image); // récupère le src
	const p = document.querySelector("p"); // Cible l'élément p
		p.innerHTML= element.tagLine; // Change le texte sur l'image
	updateDot(); // Appel de la fonction de mis a jour des points
};





