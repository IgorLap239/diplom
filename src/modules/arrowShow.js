const arrowShow = () => {
    const arrow = document.getElementById('totop');
    arrow.style.display = 'none';
    window.addEventListener('scroll', function() {
        if (window.scrollY > 600) {
            arrow.style.display = 'block';
        } else if (window.scrollY < 500) {
            arrow.style.display = 'none';
        }
    });

};

export default arrowShow;