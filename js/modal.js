let openingBtn=document.querySelector('.openingBtn');
let modal=document.querySelector('.modal');
let close=document.querySelector('.icon_close');

openingBtn.addEventListener("click", function(){
    modal.classList.add('modal_opened');
});
close.addEventListener("click", function(){
    modal.classList.remove('modal_opened');
});