lucide.createIcons();
const books = document.querySelectorAll('.book');
const categories = document.querySelectorAll('.category_card');

// Burger Menu Toggle
const burgerToggle = document.getElementById('burger-toggle');
const navMenu = document.getElementById('nav-menu');

if (burgerToggle && navMenu) {
  burgerToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

for (let i = 0; i < books.length; i++) {
  books[i].addEventListener('click', function () {
    location.href = `/pages/prophet_mhmd`;
    console.log('test');
  })
}

for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener('click', function () {
    location.href = `/pages/tafseer`
  })
}


// Initialize Swiper
const swiper = new Swiper('.books-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
  },
});
