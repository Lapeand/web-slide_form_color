let slides = document.querySelectorAll(".hero_slaider");

let index = 0;
setInterval(function(){
    slides[index].classList.remove('visible');
    index++;

    if(index+1>slides.length){
        index=0;
    }

    slides[index].classList.add('visible');
}, 4000)