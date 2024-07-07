let currentSlide = 0;
let element = document.getElementById('contactBtn');
let element2 = document.getElementById('button2');
let footer = document.getElementById('down');
let footer2 = document.getElementById('down');
let contact = document.getElementById('contact');
let button = document.getElementById('btn');
let about1 = document.getElementById('about');

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(
    ".slider-wrapper"
  ).style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Initialize slider
showSlide(currentSlide);

element.addEventListener('click',function(){
  footer.scrollIntoView({
    behavior:'smooth'
  });
})
element2.addEventListener('click',function(){
  footer.scrollIntoView({
    behavior:'smooth'
  });
})

function about(){
  window.location.href = '/aboutus.html'
}
function home(){
  window.location.href = '/index.html'
}
function scrollto(){
  about1.scrollIntoView({
  'behavior':'smooth'
  })
}