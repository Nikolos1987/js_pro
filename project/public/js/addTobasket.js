


class addTobasket{
    constructor(){
        this.basketadd()
       
        this.goods=[{name:"MANGO PEOPLE T-SHIRT",        
    prise:300,
    id:0,
    img:"image/Rectangle 15 copy.png"},
                {name:"Туфли женские",
                price:100,
                img:"image/Image.png",
                id:1
            },
            {name:"шляпа",
                price:100,
                img:"image/Rectangle 16 copy.png",
                id:2
            },
        ]

    }
    basketadd(){
        let btn=document.querySelectorAll(".productscard__capsule__shadow__button")
        
        btn.forEach(x=>x.addEventListener('click',add))
       
        function add(){
            let find=""
            let findElem=""
        switch(this){
            case btn[0]:
                findElem=bsk.basketArr.find(x=>x.name==="MANGO PEOPLE T-SHIRT")    
                if(findElem){
                    find=bsk.basketArr.findIndex(x=>x.name==="MANGO PEOPLE T-SHIRT")
                    bsk.basketArr[find].quontity+=1
                    bsk.basketRand()
                }else{  
            bsk.basketArr.push(JSON.parse(JSON.stringify(basket.goods[0])))
         find=bsk.basketArr.findIndex(x=>x.name==="MANGO PEOPLE T-SHIRT")
            bsk.basketArr[find].quontity=1
            console.log(bsk.basketArr)           
            bsk.basketRand()}  
            break;             
            case btn[1]: 
            findElem=bsk.basketArr.find(x=>x.name==="Туфли женские")    
                if(findElem){
                    find=bsk.basketArr.findIndex(x=>x.name==="Туфли женские")
                    bsk.basketArr[find].quontity+=1
                    bsk.basketRand()
                }else{                 
            bsk.basketArr.push(JSON.parse(JSON.stringify(basket.goods[1])))
          find=bsk.basketArr.findIndex(x=>x.name=="Туфли женские")
            bsk.basketArr[find].quontity=1
        
            bsk.basketRand()}
         
            break;            
            case btn[2]:
                findElem=bsk.basketArr.find(x=>x.name==="шляпа")    
                if(findElem){
                    find=bsk.basketArr.findIndex(x=>x.name==="шляпа")
                    bsk.basketArr[find].quontity+=1
                    bsk.basketRand()
                }else{      
                bsk.basketArr.push(JSON.parse(JSON.stringify(basket.goods[2])))
          find=bsk.basketArr.findIndex(x=>x.name==="шляпа")
            bsk.basketArr[find].quontity=1
            bsk.basketRand()}
            
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
        this.visual()    
        
    }
    visual(){
       let battle= document.querySelector('.header__burgermenu__basket')
       let dsfas=document.querySelectorAll(".header__burgermenu__search")
       dsfas[1].addEventListener('click',()=>{
           battle.classList.toggle('open')
       })
      }


    basketchange(){
let buttons=document.querySelectorAll('.btn__change__1')
buttons.forEach(x=>
    x.addEventListener('click',()=>{
    let a=(event.target.dataset.name)
    let finded=this.basketArr.findIndex(x=>x.name==a)
    this.basketArr[finded].quontity+=1
    this.basketRand()
     
}))
let buttonsA=document.querySelectorAll('.btn__change__2')
buttonsA.forEach(x=>
    x.addEventListener('click',()=>{
    let a=(event.target.dataset.name)
    let finded=this.basketArr.findIndex(x=>x.name==a)
    this.basketArr[finded].quontity-=1
    if(this.basketArr[finded].quontity==0){
         this.basketArr.splice(a,1)
        
    }
    this.basketRand()
     
}))
    }
    basketRemove(){
        let rmBTN=document.querySelectorAll(".remove")
        console.log(rmBTN)
        let goods=document.querySelectorAll(".goods")

        rmBTN.forEach(x=>x.addEventListener('click',()=>{
            let z=(event.target.dataset.number)           
            let find= this.basketArr.findIndex(x=>x.id==z)
            this.basketArr.splice(find,1)
           this.basketRand()
           

        })     
    )
 this.basketchange()
    }
    basketRand(){

  let bask=document.querySelector('.header__burgermenu__basket')
  bask.innerHTML=""
  this.basketArr.forEach(x=>
    bask.insertAdjacentHTML("afterbegin",`    
     <div  class="goods">
        <img  class="header__burgermenu__image" src="${x.img}" > 
        <p>${x.name}</p>
        <p><button class="btn__change__1" data-name="${x.name}">+</button>${x.quontity}<button class="btn__change__2" data-name="${x.name}">-</button></p>
        <button data-number="${x.id}" class="remove">x</button> 
      `))
this.basketRemove()

    
    

    }
}


let bsk=new basketinit()
let basket=new addTobasket()