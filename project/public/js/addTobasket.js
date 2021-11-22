class addTobasket{
    constructor(){
        this.basketadd()
       
        this.goods=[{name:"MANGO PEOPLE T-SHIRT",        
    prise:300,
    img:"image/Rectangle 15 copy.png"},
                {name:"Туфли женские",
                price:100,
                img:"image/Image.png"
            },
            {name:"шляпа",
                price:100,
                img:"image/Rectangle 16 copy.png"
            },
        ]

    }
     basketRand(){
         console.log(bsk.basketArr)
   
    }

    basketadd(){
        let btn=document.querySelectorAll(".productscard__capsule__shadow__button")
        
        btn.forEach(x=>x.addEventListener('click',add))
       
        function add(){
        switch(this){
            case btn[0]:bsk.basketArr.push(JSON.parse(JSON.stringify(basket.goods[0])))
            basket.basketRand()  
            break;             
            case btn[1]:bsk.basketArr.push(JSON.parse(JSON.stringify(basket.goods[1])))
            basket.basketRand()
            break;
            case btn[2]:bsk.basketArr.push(JSON.parse(JSON.stringify(basket.goods[2])))
            basket.basketRand()
            break;
            case btn[3]:console.log(2)
            break;
            case btn[4]:console.log(2)
            break;
            case btn[5]:console.log(2)
            break;
              

         }
         

        }
        

    }
   
   
}


class basketinit{
    constructor(){        
        this.basketArr=[] 
        this.basketRand()
    }
    basketRand(){
  
   

    }
}
let bsk=new basketinit()
let basket=new addTobasket()

