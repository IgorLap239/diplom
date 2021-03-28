const gallerySlider = () => {
    const gallerySlider = document.querySelector('.gallery-slider');

    let slide = gallerySlider.querySelectorAll('.slide');

    let currentSlide = 0,
        interval;

    for (let i = 1; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
        dot[index].classList.remove('slick-active');
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
        dot[index].classList.add('slick-active');
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
    };

    const addArrow = () => {
        let prevArrow = document.createElement('div'),
            nextArrow = document.createElement('div');

        prevArrow.classList.add('slider-arrow');
        nextArrow.classList.add('slider-arrow');
        prevArrow.innerHTML = "<span>❮</span>";
        nextArrow.innerHTML = "<span>❯</span>";
        prevArrow.classList.add('prev');
        nextArrow.classList.add('next');
        gallerySlider.prepend(prevArrow);
        gallerySlider.append(nextArrow);
    };

    const addDot = (items) => {
        const dots = document.createElement('ul');
        let li = document.createElement('li');

        dots.classList.add('slider-dots');
        gallerySlider.append(dots);
        li.innerHTML = "<button></button>";
        li.classList.add('slick-active');
        dots.append(li);
        for (let i = 1; i < items; i++) {
            li = document.createElement('li');
            li.innerHTML = "<button></button>";
            dots.append(li);
        }
        return dots.querySelectorAll('li');
    };

    const dot = addDot(slide.length);

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    gallerySlider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
        if (!target.matches('span, button')) {
            return;
        }

        prevSlide(slide, currentSlide);
        if (target.closest('.next')) {
            currentSlide++;
        } else if (target.closest('.prev')) {
            currentSlide--;
        } else if (target.closest('li')) {
            dot.forEach((elem, index) => {
                if (elem === target.closest('li')) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide);
    });

    gallerySlider.addEventListener('mouseover', (event) => {
        if (event.target.matches('span') ||
            event.target.matches('button')) {
            stopSlide();
        }
    });

    gallerySlider.addEventListener('mouseout', (event) => {
        if (event.target.matches('span') ||
            event.target.matches('button')) {
            startSlide(2500);
        }
    });
    addArrow();
    startSlide(2500);
};

export default gallerySlider;