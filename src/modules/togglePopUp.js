const togglePopUp = () => {
    const giftPopUp = document.getElementById('gift'),
        freeVisitPopUp = document.getElementById('free_visit_form'),
        callbackPopUp = document.getElementById('callback_form'),
        freeVisitBtn = document.querySelector('.open-popup'),
        callbackBtn = document.querySelector('.callback-btn'),
        giftBtn = document.querySelector('.fixed-gift > img'),
        giftBlock = document.querySelector('.fixed-gift');
    //giftPopupContent = giftPopUp.querySelector('.form-wrapper');


    const popUpSelect = (target) => {
        //let popUpContent = document.querySelector('.form-wrapper');
        if (target === giftBtn) {
            giftBlock.style.display = 'none';
            giftPopUp.style.display = 'block';
            const popUpContent = giftPopUp.querySelector('.form-wrapper');
            return popUpContent;
        } else if (target === freeVisitBtn) {
            freeVisitPopUp.style.display = 'block';
            const popUpContent = freeVisitPopUp.querySelector('.form-wrapper');
            return popUpContent;
        } else if (target === callbackBtn) {
            callbackPopUp.style.display = 'block';
            const popUpContent = callbackPopUp.querySelector('.form-wrapper');
            return popUpContent;
        }
    };
    const popUpAnimate = (event) => {
        const target = event.target;
        const popUpContent = popUpSelect(target);
        if (document.documentElement.clientWidth > 768) {
            const draw = (timePassed) => {
                popUpContent.style.top = timePassed / 10 + 'px';

            };

            const start = Date.now(); // запомнить время начала
            const timer = setInterval(() => {
                // сколько времени прошло с начала анимации?
                const timePassed = Date.now() - start;
                if (timePassed >= 1010) {
                    clearInterval(timer);
                    return;
                }
                // отрисовать анимацию на момент timePassed, прошедший с начала анимации
                draw(timePassed);
            }, 20);
        }
    };

    const popUpClose = (event) => {
        let target = event.target;
        const popUp = target.closest('.popup');
        if (target.classList.contains('close-btn') || target.classList.contains('close_icon')) {
            popUp.style.display = 'none';
        } else {
            target = target.closest('.form-wrapper');
            if (!target) {
                popUp.style.display = 'none';
            }
        }
    };
    window.addEventListener('click', popUpAnimate);
    window.addEventListener('click', popUpClose);
};

export default togglePopUp;