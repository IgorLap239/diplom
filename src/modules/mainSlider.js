const mainSlider = () => {
    const slider = document.querySelector('.main-slider');
    let slide = slider.querySelectorAll('.slide');


    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
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

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    startSlide(2000);
};

export default mainSlider;