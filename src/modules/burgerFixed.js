const burgerFixed = () => {
    const burgerMenu = document.querySelector('.menu-button, .hidden-large');

    function handleWindowScroll(floatElement) {
        window.onscroll = function() {
            if (+window.innerWidth < 768) {
                if (window.scrollY > floatElement.offsetTop) {
                    if (floatElement.style.position !== 'fixed') {
                        floatElement.style.position = 'fixed';
                        floatElement.style.top = '0';
                    }
                } else {
                    if (floatElement.style.position === 'fixed') {
                        floatElement.style.position = '';
                        floatElement.style.top = '';
                    }
                }
            } else {
                floatElement.style.position = '';
                floatElement.style.top = '';
            }
        };
    }

    window.addEventListener('resize', () => {
        handleWindowScroll(burgerMenu.closest('.top-menu'));
    });
    handleWindowScroll(burgerMenu.closest('.top-menu'));
};

export default burgerFixed;