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
};