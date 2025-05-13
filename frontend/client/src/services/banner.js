let index = 0;

function mudarSlide(direcao) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  index = (index + direcao + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;

  atualizarDots();
}

function irParaSlide(novoIndex) {
  index = novoIndex;
  const slides = document.querySelector('.slides');
  slides.style.transform = `translateX(-${index * 100}%)`;

  atualizarDots();
}

function atualizarDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

setInterval(() => mudarSlide(1), 5000);

window.irParaSlide = irParaSlide;
