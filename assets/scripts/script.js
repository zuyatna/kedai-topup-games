var discount = 0;

function getProduct(name) {
    document.getElementById('name-game').value = name;
    window.scrollTo(0, document.body.scrollHeight);

    clearPaymentMethod();

    var container = document.querySelector('.pilih-item');
    container.innerHTML = '';

    for (var i = 0; i < 4; i++) {
        var item = getItem(name, i);

        var cardContainer = document.createElement('div');
        cardContainer.className = 'col-6 col-sm-3 mx-auto d-flex justify-content-center';

        var card = document.createElement('div');
        card.className = 'card card-width';
        card.style.cursor = 'pointer';
        card.onclick = function() {
            getPaymentMethod(item.price);
        };

        var cardImg = document.createElement('img');
        cardImg.src = '../images/diamond.png';
        cardImg.className = 'card-img-top';
        cardImg.alt = name;

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        var cardTitle = document.createElement('p');
        cardTitle.className = 'card-title fs-5 fw-semibold';
        cardTitle.textContent = item.count + ' Diamonds';

        var listGroup = document.createElement('ul');
        listGroup.className = 'list-group list-group-flush';

        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = 'Rp ' + item.price.toLocaleString();

        cardBody.appendChild(cardTitle);
        listGroup.appendChild(listItem);
        card.appendChild(cardImg);
        card.appendChild(cardBody);
        card.appendChild(listGroup);
        cardContainer.appendChild(card);
        container.appendChild(cardContainer);
    }
}

function getPaymentMethod(price) {
    window.scrollTo(0, document.body.scrollHeight);
    
    var paymentSummary = document.querySelector('.payment-summary');
    paymentSummary.innerHTML = '';

    var paymentText = document.createElement('p');
    paymentText.className = 'fs-5 fw-normal';
    paymentText.textContent = 'Payment: Rp ' + price.toLocaleString();

    paymentSummary.appendChild(paymentText);

    var discountText = document.createElement('p');
    discountText.className = 'fs-5 fw-normal';
    discountText.textContent = 'Discount: Rp ' + (price * discount).toLocaleString();

    paymentSummary.appendChild(discountText);

    var totalPayment = price - (price * discount);
    var totalPaymentText = document.createElement('p');
    totalPaymentText.className = 'fs-5 fw-normal';
    totalPaymentText.textContent = 'Total Payment: Rp ' + totalPayment.toLocaleString();

    paymentSummary.appendChild(totalPaymentText);

    var payButton = document.createElement('button');
    payButton.className = 'btn btn-primary mt-3';
    payButton.textContent = 'Proceed to Payment';
    payButton.onclick = function() {
        alert('Proceeding to payment of Rp ' + price.toLocaleString());
    };

    paymentSummary.appendChild(payButton);
}

function clearPaymentMethod() {
    var paymentSummary = document.querySelector('.payment-summary');
    paymentSummary.innerHTML = '';
}

function getItem(name, index) {
    switch (name) {
        case 'Mobile Legends':
            return mlbb[index];
        case 'Free Fire':
            return ff[index];
        case 'Wuthering Waves':
            return wuwa[index];
        case 'Genshin Impact':
            return genshin[index];
        case 'Honkai: Star Rail':
            return honkai[index];
        case 'Infinity Nikki':
            return nikki[index];
        case 'PUBG: Mobile':
            return pubg[index];
        case 'Arknights':
            return arknights[index];
        default:
            return null;
    }
}

var mlbb = [
    { count: 85, price: 21850 },
    { count: 170, price: 43700 },
    { count: 250, price: 65500 },
    { count: 500, price: 131000 },
];

var ff = [
    { count: 15, price: 5700 },
    { count: 47, price: 49800 },
    { count: 120, price: 66800},
    { count: 320, price: 109000 },
];

var wuwa = [
    { count: 250, price: 13200 },
    { count: 500, price: 26400 },
    { count: 1000, price: 52800 },
    { count: 2000, price: 105600 },
];

var genshin = [
    { count: 60, price: 10000 },
    { count: 300, price: 50000 },
    { count: 980, price: 160000 },
    { count: 1980, price: 320000 },
];

var honkai = [
    { count: 300, price: 50000 },
    { count: 980, price: 160000 },
    { count: 1980, price: 320000 },
    { count: 3280, price: 520000 },
];

var nikki = [
    { count: 75, price: 27900 },
    { count: 150, price: 55800 },
    { count: 300, price: 111600 },
    { count: 600, price: 223200 },
];

var pubg = [
    { count: 57, price: 10900 },
    { count: 60, price: 10900 },
    { count: 180, price: 32700 },
    { count: 600, price: 109000 },
];

var arknights = [
    { count: 105, price: 119000 },
    { count: 210, price: 238000 },
    { count: 330, price: 357000 },
    { count: 700, price: 714000 },
];