const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
document.addEventListener('DOMContentLoaded', function() {
 const banner = document.getElementById('banner');
  if (!banner) return console.error('#banner introuvable');
 // Attendre le chargement du HTML 
}
  // Fonctions principales
  function showSlide(index) {
    if (index < 0 | index >= slides.length) return;
    
    slidesElements.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('dot_selected', i === index);
    });
    
    currentIndex = index;
  }

  // Navigation
  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  }

  // Événements
  function setupEventListeners() {
  elements.nextBtn.onclick = () => { nextSlide(); resetInterval(); };
  elements.prevBtn.onclick = () => { prevSlide(); resetInterval(); };
}
 

  // Initialisation finale
  showSlide(0);
  setupEventListeners();
  startInterval();
);