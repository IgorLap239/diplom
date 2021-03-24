const menuPopUp = () => {
    const menu = document.querySelector('.popup-menu'),
        burgerButton = document.querySelector('.menu-button > img'),
        closeMenuBtn = document.querySelector('.close-menu-btn > img');

    const handlerMenu = (event) => {
        const target = event.target;
        let menuStyle = getComputedStyle(menu);
        if (menuStyle.display === 'none') {
            if (target === burgerButton) {
                menu.style.display = 'flex';
            }
        } else if (menuStyle.display === 'flex') {
            if (target === closeMenuBtn || target.closest('.scroll')) {
                menu.style.display = 'none';
            }
        }
    };
    window.addEventListener('click', handlerMenu);

};

export default menuPopUp;