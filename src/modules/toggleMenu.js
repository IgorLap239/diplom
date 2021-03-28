const toggleMenu = () => {
    const clubSelect = document.querySelector('.clubs-list > p'),
        clubList = document.querySelector('.clubs-list > ul');

    const handlerMenu = () => {
        const target = event.target;
        let clubListStyle = getComputedStyle(clubList);
        if (target === clubSelect) {
            if (clubListStyle.display === 'none') {

                clubList.style.display = 'block';
            } else if (clubListStyle.display === 'block') {
                clubList.style.display = 'none';
            }
        } else if (clubListStyle.display === 'block') {
            if (!target.closest('.clubs-list > p')) {
                clubList.style.display = 'none';
            }
        }
    };
    window.addEventListener('click', handlerMenu);

};

export default toggleMenu;