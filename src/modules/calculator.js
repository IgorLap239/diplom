const calculator = (price = 100) => {
    const cardOrder = document.getElementById('card_order'),
        times = cardOrder.querySelectorAll('input[name="card-type"]'),
        clubs = cardOrder.querySelectorAll('.club > input'),
        promoSale = cardOrder.querySelector('input[placeholder="Промокод"]'),
        totalPrice = document.getElementById('price-total'),
        mozaika1 = 1999,
        mozaika6 = 9900,
        mozaika9 = 13900,
        mozaika12 = 19900,
        schelkovo1 = 2999,
        schelkovo6 = 14990,
        schelkovo9 = 21990,
        schelkovo12 = 24990;

    const clubSelect = () => {
        let clubName = '';
        clubs.forEach(item => {
            if (item.checked) {
                clubName = item.value;
            }
        });
        return clubName;
    };

    const periodSelect = () => {
        let period = 0;
        times.forEach(item => {
            if (item.checked) {
                period = item.value;
            }
        });
        return period;
    };

    const countSum = () => {
        let club = clubSelect(),
            time = periodSelect();
        if (promoSale.value !== 'ТЕЛО2019') {
            totalPrice.textContent = eval(`${club}${time}`);
        } else {
            totalPrice.textContent = Math.floor(eval(`${club}${time}`) * 0.7);
        }
    };

    cardOrder.addEventListener('change', countSum);
    if (location.href.match(/index.html/i)) {
        countSum();
    }
};

export default calculator;