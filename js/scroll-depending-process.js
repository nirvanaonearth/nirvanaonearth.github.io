let sticky = document.getElementById('sticky-item');
let afterwho = document.querySelector('.before-head');

function stickyCheck(){
    if(window.pageYOffset >= afterwho.offsetHeight){
        console.log('must be sticky');
        sticky.classList.add('sticky');
    }
    else{
        console.log('isn\'t sticky anymore');
        sticky.classList.remove('sticky');
    }
}

function getCoords(elem) {
    var box = elem.getBoundingClientRect();
  
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  
  }

function checkLazies(){
    console.log("checking for lazy load");
    let screenBottom = window.pageYOffset + window.innerHeight;
    console.log("screen bottom = " + screenBottom);
    let images = document.getElementsByClassName('js-lazy-image');
    let value = false;
    for(let i = 0; i < images.length; i++){
        console.log("image top is: " + getCoords(images[i]).top);
        if(getCoords(images[i]).top <= screenBottom + 200){
            console.log("must load image");
            console.log(images[i]);
            images[i].setAttribute('src', images[i].getAttribute('real'));            
            images[i].classList.remove('js-lazy-image');
        }
        else{
            value = true;
        }
    }
    return document.getElementsByClassName('js-lazy-image').length > 0;
}

let flag = true;

window.onscroll = function(){
    stickyCheck();
    if(flag){
        flag = checkLazies();
    }
};