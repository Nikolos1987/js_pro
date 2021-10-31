class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
        this.goodList()//запуск метода подсчета
    }
    goodList(){//метод подсчета
        let summ=0    
      for(let person of this.goods){
         summ=summ+person.price        
        }
      console.log(summ)               
           
    

    }
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());

        }
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

class basket{//корзина по принципу товаров на странице.образовываем массив товаров, считаем их сумму
    // отрисовываем на странице.Так же добавляем метод добаления товаров в массив корзины 
    constructor(){
        this.container = container;
        this.goods = [];
        this.basketCount();
        this.render();
        this.basketAdd()//добавление товара в массив корзины
    }
    basketCount(){}
    render(){}
    basketAdd(){}


}




