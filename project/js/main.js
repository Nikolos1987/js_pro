const products = [
    {id: 1, title: 'Notebook', price: 2000, pic:'note.jpg'},
    {id: 2, title: 'Mouse', price: 20,pic:'mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200,pic:'keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, pic:'geympad.jpg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <img src="${item.pic}" width="150" height="120">
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    let productsList = list.map(item => renderProduct(item));
    console.log(...productsList);
    
    document.querySelector('.products').innerHTML =productsList.join('');
};

renderPage(products);

