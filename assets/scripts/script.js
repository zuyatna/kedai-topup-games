var discount = 0;

function saveDiscount(value) {
    localStorage.setItem('discount', value);
}

function loadDiscount() {
    var savedDiscount = localStorage.getItem('discount');
    if (savedDiscount !== null) {
        discount = parseFloat(savedDiscount);
    }
}

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

        (function(item) {
            card.onclick = function() {
                getPaymentMethod(item.price);
            };
        })(item);

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

    var table = document.createElement('table');
    table.className = 'table';

    var tbody = document.createElement('tbody');

    var paymentRow = document.createElement('tr');
    var paymentLabel = document.createElement('td');
    paymentLabel.textContent = 'Payment:';

    var paymentValue = document.createElement('td');
    paymentValue.textContent = 'Rp ' + price.toLocaleString();
    paymentRow.appendChild(paymentLabel);
    paymentRow.appendChild(paymentValue);
    tbody.appendChild(paymentRow);

    var discountRow = document.createElement('tr');
    var discountLabel = document.createElement('td');
    discountLabel.textContent = 'Discount:';

    var discountValue = document.createElement('td');

    if (discount > 0) {
        discountValue.textContent = '- Rp ' + (price * discount).toLocaleString();
        discountValue.style.color = 'green';
        discountRow.appendChild(discountLabel);
        discountRow.appendChild(discountValue);
        tbody.appendChild(discountRow);

        var congratsRow = document.createElement('tr');
        var congratsLabel = document.createElement('td');
        congratsLabel.textContent = 'Kamu Hemat:';

        var congratsValue = document.createElement('td');
        congratsValue.textContent = (discount * 100) + '%';
        congratsValue.style.color = 'green';
        congratsRow.appendChild(congratsLabel);
        congratsRow.appendChild(congratsValue);
        tbody.appendChild(congratsRow);
    } else {
        discountValue.textContent = 'Rp 0';
        discountRow.appendChild(discountLabel);
        discountRow.appendChild(discountValue);
        tbody.appendChild(discountRow);
    }

    var totalPayment = price - (price * discount);
    var totalPaymentRow = document.createElement('tr');
    var totalPaymentLabel = document.createElement('td');
    totalPaymentLabel.textContent = 'Total Payment:';

    var totalPaymentValue = document.createElement('td');
    totalPaymentValue.textContent = 'Rp ' + totalPayment.toLocaleString();
    totalPaymentRow.appendChild(totalPaymentLabel);
    totalPaymentRow.appendChild(totalPaymentValue);
    tbody.appendChild(totalPaymentRow);

    table.appendChild(tbody);
    paymentSummary.appendChild(table);

    var payButtonContainer = document.createElement('div');
    payButtonContainer.className = 'd-flex justify-content-center';

    var payButton = document.createElement('button');
    payButton.className = 'btn btn-primary mt-3';
    payButton.textContent = 'Proceed to Payment';
    payButton.onclick = function() {
        proceedPayment(totalPayment);
    };

    payButtonContainer.appendChild(payButton);
    paymentSummary.appendChild(payButtonContainer);
}

function proceedPayment(totalPayment) {
    alert('Proceeding to payment of Rp ' + totalPayment.toLocaleString());
    saveDiscount(0);
    discount = 0;
    clearProduct();
    clearPaymentMethod();
}

function clearPaymentMethod() {
    var paymentSummary = document.querySelector('.payment-summary');
    paymentSummary.innerHTML = '';
}

function clearProduct() {
    document.getElementById('name-game').value = 'Pilih game terlebih dahulu...';
    var container = document.querySelector('.pilih-item');
    container.innerHTML = '';

    var textPlaceholder = document.createElement('p');
    textPlaceholder.className = 'fs-6 fw-normal';
    textPlaceholder.textContent = 'Pilih item terlebih dahulu!';

    container.appendChild(textPlaceholder);
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
    { count: 85, price: 20900 },
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
    { count: 250, price: 49900 },
    { count: 500, price: 99900 },
    { count: 1000, price: 199900 },
    { count: 2000, price: 399900 },
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

// https://github.com/VincentGarreau/particles.js/?tab=readme-ov-file
document.addEventListener('DOMContentLoaded', function() {
    const gachaElement = document.querySelector('.gacha');
    
    // Only add event listener if element exists
    if (gachaElement) {
        gachaElement.addEventListener('click', function() {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#ff0000'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: false
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ff0000',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
            });

            setTimeout(function() {
                document.getElementById('particles-js').innerHTML = '';
        
                document.querySelector('main').style.display = 'block';
        
                var randomDiscount = Math.floor(Math.random() * 41) + 10;
        
                discount = randomDiscount / 100;
                
                saveDiscount(discount);
        
                var discountParagraph = document.querySelector('.discount-container');
                discountParagraph.innerHTML = '';
        
                var discountText = document.createElement('p');
                discountText.className = 'fs-5 fw-normal margin-section';
                discountText.textContent = 'Selamat kamu mendapatkan diskon: ' + randomDiscount + '%';
        
                discountParagraph.appendChild(discountText);
        
                document.querySelector('.btn-outline-primary').addEventListener('click', function() {
                    if (discountParagraph) {
                        discountParagraph.remove();
                    }
                });
            }, 2000);
        
            document.querySelector('main').style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('exampleFormControlInput2');
    
    // Only add event listener if elements exist
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('bi-eye');
                icon.classList.toggle('bi-eye-slash');
            }
        });
    }
});

loadDiscount();