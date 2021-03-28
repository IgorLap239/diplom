const servicesSlider = () => {

    class SliderCarousel {
        constructor() {
            this.main = document.querySelector(`#services > .wrapper`);
            this.wrap = this.main.querySelector('.services-slider');
            this.slides = this.main.querySelectorAll('.services-slider > .slide');
            this.slidesToShow = 4;
            this.currentPosition = this.slides.length;
            this.options = {
                position: this.currentPosition,
                widthSlide: Math.floor(100 / this.slidesToShow),
                maxPosition: this.slides.length - this.slidesToShow,
            };
            this.currentPosition = this.slides.length;
        }

        addArrow() {
            this.prev = document.createElement('div');
            this.next = document.createElement('div');

            this.prev.classList.add('slider-arrow');
            this.next.classList.add('slider-arrow');
            this.prev.innerHTML = "<span>❮</span>";
            this.next.innerHTML = "<span>❯</span>";
            this.prev.classList.add('prev');
            this.next.classList.add('next');
            this.main.append(this.prev);
            this.main.append(this.next);
        }

        cloneItems() {
            this.slides.forEach(item => {
                item.classList.add('clone');
                this.slides[0].insertAdjacentElement('beforebegin', item.cloneNode(true));
                item.classList.remove('clone');
                this.lengthAll = this.wrap.querySelectorAll('.slide').length;
            });
        }

        controlSlider() {
            this.prev.addEventListener('click', this.prevSlide.bind(this));
            this.next.addEventListener('click', this.nextSlide.bind(this));
        }

        prevSlide() {
            --this.currentPosition;
            console.log(this.currentPosition);
            this.wrap.style.transform = `translateX(-${this.currentPosition * this.options.widthSlide}%)`;
        }

        nextSlide() {
            if (this.options.infinity || this.options.position < this.options.widthSlide) {
                ++this.currentPosition;
                console.log(this.currentPosition);
                this.wrap.style.transform = `translateX(-${this.currentPosition * this.options.widthSlide}%)`;
            }
        }

        addClass() {
            this.main.classList.add('services__slider');
            this.wrap.classList.add('services__slider__wrap');
            this.slides.forEach(item => {
                item.classList.add('services_slide');
            });
        }


        /**/
        addStyle() {
            const style = document.createElement('style');
            style.id = "slider_style";
            style.textContent = `
            .services__slider {
                overflow: hidden !important;
                position: relative;
            }
            .services__slider__wrap {
                transition: transform 0.5s !important;
                will-change: transform !important;
                padding: 0px 0px !important;
            }
    
            .services_slide {
                flex: 0 0 ${this.options.widthSlide}%;
                margin: 0 auto !important;
            }
            `;

            document.head.appendChild(style);
        }

        eventListeners() {
            this.wrap.addEventListener('transitionend', () => {
                if (this.currentPosition === this.lengthAll - this.slidesToShow) {
                    for (let i = 0; i < this.slides.length; i++) {
                        console.log(this.wrap.children[i]);
                        this.wrap.append(this.wrap.children[0]);
                    }
                    this.currentPosition = this.slides.length - this.slidesToShow;
                    this.wrap.style.transition = 'none';
                    this.wrap.style.transform = `translateX(-${this.currentPosition * this.options.widthSlide}%)`;
                    setTimeout(() => this.wrap.style.transition = '');
                }
                if (this.currentPosition === 0) {
                    for (let i = 0; i < this.slides.length; i++) {
                        console.log(this.wrap.children[i]);
                        this.wrap.prepend(this.wrap.lastElementChild);
                    }
                    this.currentPosition = this.slides.length;
                    this.wrap.style.transition = 'none';
                    this.wrap.style.transform = `translateX(-${this.currentPosition * this.options.widthSlide}%)`;
                    setTimeout(() => this.wrap.style.transition = '');
                }
            });
        }

        init() {
            this.addStyle();
            this.addClass();
            this.addArrow();
            this.cloneItems();
            this.wrap.style.transform = `translateX(-${this.currentPosition * this.options.widthSlide}%)`;
            this.controlSlider();
            this.eventListeners();
        }
    }

    const carousel = new SliderCarousel();
    carousel.init();
};

export default servicesSlider;