document.getElementById("file-input").addEventListener("change", function () {
    document.getElementById("file-name").textContent =
        this.files[0] ? this.files[0].name : "";
});
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper not found. Make sure CDN script is loaded.');
    return;
  }

  const teamSwiper = new Swiper('.team-swiper', {
    loop: true,
    speed: 800,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 40,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 12
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      init() {
        updateSlidesTransform(this);
      },
      resize() {
        updateSlidesTransform(this);
      },
      transitionStart() {
        updateSlidesTransform(this);
      },
      setTranslate() {
        updateSlidesTransform(this);
      },
      slideChange() {
        updateSlidesTransform(this);
      },
      progress() {
        updateSlidesTransform(this);
      }
    }
  });

  function updateSlidesTransform(swiper) {
    const maxScale = 1.08;
    const minScale = 0.86;
    const translateXFactor = 40;

    for (let i = 0; i < swiper.slides.length; i++) {
      const slideEl = swiper.slides[i];
      const progress = slideEl.progress;
      const p = Math.max(-2, Math.min(2, progress));
      const scale = maxScale - (Math.abs(p) * (maxScale - minScale) / 2);
      const translateX = p * translateXFactor;
      const translateY = -Math.abs(1 - Math.abs(p)) * 10;
      const zIndex = Math.round(100 - Math.abs(p) * 50);
      slideEl.style.transform = `translate3d(${translateX}px, ${translateY}px, 0px) scale(${scale})`;
      slideEl.style.zIndex = zIndex;
      const opacity = (Math.abs(p) > 1.5) ? 0.6 : (1 - Math.abs(p) * 0.15);
      slideEl.style.opacity = opacity;
    }
  }
const swiper = new Swiper('.team__contenier', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 800,
});

});
