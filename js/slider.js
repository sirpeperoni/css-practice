document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider')
    const slidesContainer = slider.querySelector('.slides');
    const slideItems = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const dots = slider.querySelectorAll('.dot');

    let currentSlide = 2;
    let offsets = []
    const totalSlides = slideItems.length;

    function calculateOffsets() {
        const slideWidth = calculateSlideWidth();
        offsets = [];
        
        for (let i = 0; i < totalSlides; i++) {
            const offset = (i - currentSlide) * slideWidth;
            offsets.push(offset);
        }
        
        return offsets;
    }

    function calculateSlideWidth() {
        const slide = slideItems[0];
        const slideStyle = window.getComputedStyle(slide);
        const width = slide.offsetWidth;
        const marginLeft = parseFloat(slideStyle.marginLeft) || 0;
        const marginRight = parseFloat(slideStyle.marginRight) || 0;
        return width + marginLeft + marginRight;
    }

    function updateSlider() {

        const offset = -offsets[currentSlide];
        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = `translateX(${offset}px)`;

        slideItems.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
          });

        dots.forEach((dot, index) => {
           dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
          currentSlide++;
        } else {
          currentSlide = 0;
          slidesContainer.style.transition = 'none';
          slidesContainer.style.transform = `translateX(-${offsets[currentSlide]}px)`;
          setTimeout(() => {
            slidesContainer.style.transition = 'transform 0.5s ease-in-out';
            currentSlide = 0;
            updateSlider(slideItems.length);
          }, 50);
          return;
        }
        updateSlider();
    }

    function prevSlide() {
        if (currentSlide > 0) {
          currentSlide--;
        } else {
          currentSlide = totalSlides - 1;

          slidesContainer.style.transition = 'none';
          slidesContainer.style.transform = `translateX(${offsets[currentSlide]}px)`;

          setTimeout(() => {
            slidesContainer.style.transition = 'transform 0.5s ease-in-out';
            currentSlide = totalSlides - 1;
            updateSlider();
          }, 50);
          return;
        }
        updateSlider();
    }

    function goToSlide(index) {
        if (index >= 0 && index < totalSlides) {
          currentSlide = index;
          updateSlider();
        }
    }

    function initSlider() {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        dots.forEach(dot => {
          dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.dataset.slide);
            goToSlide(slideIndex);
          });
        });

        offsets = calculateOffsets()
        console.log(offsets)
    }


    initSlider()
})