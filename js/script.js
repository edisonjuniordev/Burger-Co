const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilterAll = document.querySelector('.filter-all');

// Função para formatar o valor como moeda (Real brasileiro)
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Mostra os itens na tela
function showAll(productsArray) {
    let myLi = '';

    productsArray.forEach((product) => {
        myLi += `
            <li>
                <img src="${product.src}" alt="${product.name}">
                <span class="category-badge">${product.category}</span>
                <p class="product-name">${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        `;
    });

    list.innerHTML = myLi;
}

// Aplica 10% de desconto
function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product, // Spread operator para manter as outras propriedades intactas
        price: product.price * 0.9, 
    }));

    showAll(newPrices);
}

// Soma todos os itens
function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

    list.innerHTML = `
        <li class="total-value">
            <p>O valor de todo o cardápio é:</p>
            <p class="item-price">${formatCurrency(totalValue)}</p>
        </li>
    `;
}

// Filtra apenas produtos veganos
function filterAllItems() {
    const filteredItems = menuOptions.filter((product) => product.vegan);
    showAll(filteredItems);
}

// Event Listeners
buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', mapAllItems);
buttonSumAll.addEventListener('click', sumAllItems);
buttonFilterAll.addEventListener('click', filterAllItems);
