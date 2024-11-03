// this file is generated using chatgpt
let currentIndex = 0;

function setupCarousel(images) {
  const imageLinks = images;

  const carouselTrack = document.querySelector(".carousel-track");
  const dotsContainer = document.querySelector(".carousel-dots");

  images.forEach((link, index) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    slide.style.backgroundImage = `url(${link})`;
    carouselTrack.appendChild(slide);

    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  document
    .querySelector(".carousel-button.next")
    .addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % imageLinks.length;
      updateCarousel();
    });

  document
    .querySelector(".carousel-button.prev")
    .addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
      updateCarousel();
    });
}

function updateCarousel() {
  const carouselTrack = document.querySelector(".carousel-track");
  const slideWidth = carouselTrack.clientWidth;
  carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}
