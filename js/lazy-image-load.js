function checkLazies(){
    console.log("checking for lazy load");
    let screenBottom = window.pageYOffset + window.innerHeight;
    let images = document.getElementsByClassName('js-lazy-image');
    for(let i = 0; i < images.length; i++){
        if(images[i].getBoundingClientRect.top <= screenBottom + 200){
            console.log("must load image");
            images[i].classList.remove('js-lazy-image');
            images[i].setAttribute('src', images[i].getAttribute('real'));
        }
    }
}