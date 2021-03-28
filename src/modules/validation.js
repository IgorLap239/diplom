const validation = () => {
    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        bannerForm = document.getElementById('banner-form'),
        cardOrderForm = document.getElementById('card_order'),
        footerForm = document.getElementById('footer_form');

    const connectFormInput = (e) => {
        const target = e.target;
        if (target.matches('input[name="name"]')) {
            target.value = target.value.replace(/[^А-Яа-я ]/g, '');
        } else if (target.matches('input[name="phone"]')) {
            target.value = target.value.replace(/[^0-9\+]/g, '');
        }
    };

    const connectFormValidation = (e) => {
        const target = e.target,
            targetForm = target.closest('form');
        target.value = target.value.replace(/ +/g, ' ').trim();
        target.value = target.value.replace(/-+/g, '-');
        target.value = target.value.replace(/^-*/g, '');
        target.value = target.value.replace(/-*$/g, '');
        if (target.matches('input[name="name"]')) {
            if (target.value.length < 2) {
                showError(target, targetForm);
                targetForm.querySelector('button').setAttribute("disabled", "disabled");
            } else {
                showSuccess(target, targetForm);
                targetForm.querySelector('button').removeAttribute("disabled");
                targetForm.querySelector('button').style.display = 'inline-block';
                target.value = target.value[0].toUpperCase() + target.value.substr(1, ).toLowerCase();
            }
        }
        if (target.matches('input[name="phone"]')) {
            if ((target.value[0] !== '+' && target.value.length === 7) || (target.value[0] !== '+' && target.value.length === 11) || (target.value[0] === '+' && target.value.length === 12)) {
                showSuccess(target, targetForm);
                targetForm.querySelector('button').removeAttribute("disabled");
                targetForm.querySelector('button').style.display = 'inline-block';
            } else {
                showError(target, targetForm);
                targetForm.querySelector('button').setAttribute("disabled", "disabled");
            }
        }
        let targetFormInputs = targetForm.querySelectorAll('input');
        targetFormInputs.forEach((item) => {
            if (item.classList.contains('error')) {
                targetForm.querySelector('button').setAttribute("disabled", "disabled");
            }
        });
    };

    const showError = (elem, targetForm) => {
        elem.classList.remove('success');
        elem.classList.add('error');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            return;
        }
        if (elem.matches('input[name="name"]') && targetForm.querySelector('.name-error')) {
            return;
        }
        if (elem.matches('input[name="phone"]') && targetForm.querySelector('.phone-error')) {
            return;
        }
        const errorDiv = document.createElement('div');
        if (elem.matches('input[name="name"]')) {
            errorDiv.textContent = 'Имя должно состоять минимум из 2 символов';
            errorDiv.classList.add('name-error');
        } else if (elem.matches('input[name="phone"]')) {
            errorDiv.textContent = 'Введите номер длинной от 7 до 13 цифр';
            errorDiv.classList.add('phone-error');
        } else if (elem.matches('input[type="checkbox"]')) {
            errorDiv.textContent = 'Для отправки формы отметьте согласие на обработку персональных данных';
        }
        errorDiv.classList.add('validator-error');
        if (targetForm !== bannerForm) {
            elem.insertAdjacentElement('afterend', errorDiv);
        } else {
            targetForm.insertAdjacentElement('beforeEnd', errorDiv);
        }

    };

    const showSuccess = (elem, targetForm) => {
        elem.classList.remove('error');
        elem.classList.add('success');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            elem.nextElementSibling.remove();
        }
        if (targetForm === bannerForm) {
            if (elem.matches('input[name="name"]')) {
                targetForm.querySelector('.name-error').remove();
            } else if (elem.matches('input[name="phone"]')) {
                targetForm.querySelector('.phone-error').remove();
            }
        }
    };

    const applyStyle = () => {
        const style = document.createElement('style');
        style.textContent = `
        input.success {
          border: 2px solid green !important;
        }
        input.error {
          border: 2px solid red  !important;
        }

        .validator-error {
          font-size: 14px;
          font-weight: bold;
          padding-top: 10px;
          font-family: sans-serif;
          color: red;
        }
        `;

        document.head.appendChild(style);
    };
    applyStyle();

    const eventListeners = () => {
        form1.addEventListener('input', connectFormInput);
        form1.addEventListener('focusout', connectFormValidation);
        form2.addEventListener('input', connectFormInput);
        form2.addEventListener('focusout', connectFormValidation);
        bannerForm.addEventListener('input', connectFormInput);
        bannerForm.addEventListener('focusout', connectFormValidation);
        cardOrderForm.addEventListener('input', connectFormInput);
        cardOrderForm.addEventListener('focusout', connectFormValidation);
        footerForm.addEventListener('input', connectFormInput);
        footerForm.addEventListener('focusout', connectFormValidation);
    };

    eventListeners();

};

export default validation;