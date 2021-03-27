const sendForm = () => {
    const thanksPopUp = document.getElementById('thanks');

    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        bannerForm = document.getElementById('banner-form'),
        cardOrderForm = document.getElementById('card_order'),
        footerForm = document.getElementById('footer_form'),
        statusMessage = document.createElement('div');

    statusMessage.style.cssText = `font-size: 2rem;
      color: #ffffff;`;

    const formHandler = (event) => {
        event.preventDefault();
        const target = event.target;
        if (target === cardOrderForm || target === footerForm) {
            let radioCheck = target.querySelectorAll('input[type="radio"]');
            let counter = 0;
            radioCheck.forEach(item => {
                if (item.checked === false) {
                    counter++;
                }
            });
            if (counter === radioCheck.length) {
                const errorDiv = document.createElement('div');
                errorDiv.textContent = 'Выберите клуб';
                errorDiv.classList.add('validator-error');
                errorDiv.style.paddingRight = '30px';
                errorDiv.style.paddingBottom = '5px';
                target.querySelector('button').insertAdjacentElement('beforebegin', errorDiv);
                return;
            } else {
                if (target.querySelector('button').previousElementSibling && target.querySelector('button').previousElementSibling.classList.contains('validator-error')) {
                    target.querySelector('button').previousElementSibling.remove();
                }
            }
        }

        let check = target.querySelector('input[type="checkbox"]');
        if (check) {
            const elem = check.closest('p');
            if ((!check.checked)) {
                const errorDiv = document.createElement('div');
                errorDiv.textContent = 'Требуется согласие';
                errorDiv.classList.add('validator-error');
                if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
                    return;
                }
                elem.insertAdjacentElement('afterend', errorDiv);
                return;
            } else {
                if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
                    elem.nextElementSibling.remove();
                }
            }
        }
        target.append(statusMessage);
        const formData = new FormData(target);
        let body = {};
        for (let val of formData.entries()) {
            if (val[0] !== 'form_name') {
                body[val[0]] = val[1];
            }
        }
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }

                if (target === bannerForm || target === cardOrderForm || target === footerForm) {
                    statusMessage.remove();
                    thanksPopUp.style.display = 'block';
                    clearInputs(target);
                } else {
                    target.innerHTML = `<div class="form-content">
                    <h4>Спасибо!</h4>
                    <p style='font-size: 20px;
                    width: 90%;
                    color: #fff;
                    font-weight: 500;
                    margin-top: 30px'>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
                    <button class="btn close-btn">OK</button>
                    </div>`;
                }
                setTimeout(() => {
                    let popUps = document.querySelectorAll('.popup');
                    popUps.forEach(item => {
                        if (item.style.display === 'block') {
                            item.style.display = 'none';
                        }
                    });
                }, 5000);
            })
            .catch(() => {
                if (target === bannerForm || target === cardOrderForm || target === footerForm) {
                    statusMessage.remove();
                    thanksPopUp.innerHTML = `<div class="form-content">
                    <h4>Упс!</h4>
                    <p style='font-size: 20px;
                    width: 90%;
                    color: #fff;
                    font-weight: 500;
                    margin-top: 30px'>В процессе отправки <br> произошла ошибка</p>
                    <button class="btn close-btn">OK</button>
                    </div>`;
                    thanksPopUp.style.display = 'block';
                    clearInputs(target);
                } else {
                    target.innerHTML = `<div class="form-content">
                    <h4>Упс!</h4>
                    <p style='font-size: 20px;
                    width: 90%;
                    color: #fff;
                    font-weight: 500;
                    margin-top: 30px'>В процессе отправки <br> произошла ошибка</p>
                    <button class="btn close-btn">OK</button>
                    </div>`;
                }
                setTimeout(() => {
                    let popUps = document.querySelectorAll('.popup');
                    popUps.forEach(item => {
                        if (item.style.display === 'block') {
                            item.style.display = 'none';
                        }
                    });
                }, 5000);
            });
    };

    const postData = (body) => {
        statusMessage.textContent = '';
        statusMessage.insertAdjacentHTML('afterBegin', `
            <progress id="elem"></progress>
            `);
        document.getElementById('elem').style.cssText = `
                width: 50px;
            `;
        requestAnimationFrame(animate);
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    const animate = () => {
        let start = performance.now();
        const duration = 1000;
        let timeFraction = start / duration;
        if (timeFraction > 1) {
            timeFraction = 1;
        }
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    };

    const clearInputs = (target) => {
        target.querySelectorAll('input').forEach(item => {
            item.value = '';
            if (item.matches('input[type="radio"]') || item.matches('input[type="checkbox"]')) {
                item.checked = false;
            }
        });
    };

    const eventListeners = () => {
        form1.addEventListener('submit', formHandler);
        form2.addEventListener('submit', formHandler);
        bannerForm.addEventListener('submit', formHandler);
        cardOrderForm.addEventListener('submit', formHandler);
        footerForm.addEventListener('submit', formHandler);
    };

    eventListeners();
};

export default sendForm;