const toggleMenu = () => {
    const clubSelect = document.querySelector('.clubs-list > p'),
        clubList = document.querySelector('.clubs-list > ul');

    const handlerMenu = () => {
        let clubListStyle = getComputedStyle(clubList);
        if (clubListStyle.display === 'none') {
            clubList.style.display = 'block';
        } else if (clubListStyle.display === 'block') {
            clubList.style.display = 'none';
        }
    };
    clubSelect.addEventListener('click', handlerMenu);

};

export default toggleMenu;