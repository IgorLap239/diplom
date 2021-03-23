const giftPopUp = () => {
    const giftPopup = document.getElementById('gift'),
        giftBtn = document.querySelector('.fixed-gift > img'),
        giftBlock = document.querySelector('.fixed-gift'),
        giftPopupContent = giftPopup.querySelector('.form-wrapper');

    giftBtn.addEventListener('click', () => {
        giftBlock.style.display = 'none';
        giftPopup.style.display = 'block';
        if (document.documentElement.clientWidth > 768) {
            const draw = (timePassed) => {
                giftPopupContent.style.top = timePassed / 10 + 'px';

            };

            const start = Date.now(); // запомнить время начала
            const timer = setInterval(() => {
                // сколько времени прошло с начала анимации?
                const timePassed = Date.now() - start;
                if (timePassed >= 1010) {
                    clearInterval(timer); // закончить анимацию через 2 секунды
                    return;
                }

                // отрисовать анимацию на момент timePassed, прошедший с начала анимации
                draw(timePassed);
            }, 20);
        }


    });

    giftPopup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('close-btn') || target.classList.contains('close_icon')) {
            giftPopup.style.display = 'none';
        } else {
            target = target.closest('.form-wrapper');
            if (!target) {
                giftPopup.style.display = 'none';
            }
        }
    });
};

export default giftPopUp;