const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = data;
                 this.render()
                 this.addprod()
                 
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
           
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
    addprod(){
        let buttons=document.querySelectorAll('.buy-btn');//добавление продуктов в корзину
         console.log(buttons)   
             
         let click=(event)=>{
            if(event.target===buttons[0]){
                basket.goods.push(JSON.parse(JSON.stringify(this.goods[0])))
                console.log(basket)

                basket.baskerrender()
            }
         }
      buttons.forEach(button=>{
            button.addEventListener('click',click)
        })
            
    }
    
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
 
class basketList{//массив корзины
    constructor(){
        this.goods = []  
        this.btn()

         
            
        
    }
       
    btn(){
        console.log(this.goods)
        let btn=document.querySelector('.btn-cart')                           
        btn.addEventListener('click',function(){            
            let z=document.querySelector('.basketList')
            z.classList.toggle('open')
            console.log(basket.goods[0].product_name)
           
            {
                z.innerHTML=`количество товаров в корзине :${basket.goods.length}
        <div>${basket.goods[i].product_name}</div>
        `}
       

            
        })
    }
    baskerrender(){
        let header=document.querySelector('.basketRend')
        header.innerText=this.goods.length      
           
            }
       



}
let basket=new basketList()
console.log(basket)