
let button = document.querySelector('.burger');
let nav =  document.querySelector('.nav');
let test=document.querySelector('.test');
button.onclick = function() {
   nav.classList.toggle('open');
   nav.classList.toggle('close');
   test.onclick=function(){
    nav.classList.toggle('open');
    nav.classList.toggle('close');  
   }
};
