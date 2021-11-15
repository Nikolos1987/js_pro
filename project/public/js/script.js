let click=0
let slider=document.querySelectorAll('.slide__button')
slider.forEach(items=>items.addEventListener('click',SliderChenge))
let pic=document.querySelector('.slide__girl')
let z=document.createElement('img')
z.classList.add("slide__img")
pic.appendChild(z)
z.src="image/girl.png"
z.height=777

let picArray=["5",'6','7','8','9']
function SliderChenge(){
    if (this==slider[0]){
        click-=1
        if (click==-1){
            click=4
        }
        z.src=`image/${picArray[click]}.png`
       
    }
    else{
        click+=1
        if (click==4){
            click=0
        }
        console.log(click)
        z.src=`image/${picArray[click]}.png`
    }
    
    
}
