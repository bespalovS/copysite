// === СЛАЙДЕР ===
    const slides = document.getElementById('slides');
    const slideCount = slides.children.length;
    const slideWidth = slides.children[0].offsetWidth + 30;
    let currentIndex = 0;
    let directionForward = true;

    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function autoSlide() {
      if (directionForward) {
        currentIndex++;
        if (currentIndex >= slideCount - 5) {
          directionForward = false;
        }
      } else {
        currentIndex--;
        if (currentIndex <= 0) {
          directionForward = true;
        }
      }
      updateSlider();
    }

    setInterval(autoSlide, 3000);

    // === ПАРАЛЛАКС БУРГЕРА ===
    const burgerImg = document.getElementById('burgerImg');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      burgerImg.style.transform = `translate(-50%, calc(-40% - ${scrollY * 0.05}px))`;
    });

    const croImg = document.getElementById('croImg');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      croImg.style.transform = `translate(-50%, calc(-40% - ${scrollY * 0.05}px))`;
    });