const menuPopUp = () => {
    const menu = document.querySelector('.popup-menu'),
        burgerButton = document.querySelector('.menu-button > img'),
        closeMenuBtn = document.querySelector('.close-menu-btn > img');

    const handlerMenu = (event) => {
        const target = event.target;
        let menyStyle = getComputedStyle(menu);
        if (menyStyle.display === 'none') {
            if (target === burgerButton) {
                menu.style.display = 'flex';
            }
        } else if (menyStyle.display === 'flex') {
            console.log(target);
            if (target === closeMenuBtn || target.closest('.scroll')) {
                menu.style.display = 'none';
            }
        }
    };
    window.addEventListener('click', handlerMenu);

};

export default menuPopUp;