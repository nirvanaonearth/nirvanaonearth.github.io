function init(){
    let sliders = document.getElementsByClassName('js-slider');
    for(let i = 0; i < sliders.length; i++){
        let slides = sliders[i].getElementsByClassName('js-slide');
        sliders[i].currentSlide = 0;
        if(slides.length == 0)
            continue;
        slides[0].classList.add('picked');
        let controllers = document.createElement('div');
        controllers.classList.add('controllers');
        let backward = document.createElement('button');
        backward.classList.add('move');
        backward.classList.add('backward');
        backward.possible = false;
        backward.classList.add('impossible');
        let forward = document.createElement('button');
        forward.classList.add('move');
        forward.classList.add('forward');
        if(slides.length > 1){
            forward.possible = true;
        }
        else{
            forward.possible = false;
            forward.classList.add('impossible');
        }
        let byNumberList = [];
        for(let j = 0; j < slides.length; j++){
            let byNumber = document.createElement('button');
            byNumber.classList.add('move');
            byNumber.classList.add('bynumber');
            if(j == 0){
                byNumber.classList.add('current-slide');
            }
            byNumber.textContent = '' + (j + 1);
            byNumberList.push(byNumber);
            byNumber.onclick = () => {
                slides[sliders[i].currentSlide].classList.remove('picked');
                byNumberList[sliders[i].currentSlide].classList.remove('current-slide');
                sliders[i].currentSlide = j;
                byNumberList[sliders[i].currentSlide].classList.add('current-slide');
                if(j == 0){
                    backward.possible = false;
                    backward.classList.add('impossible');
                }else{
                    backward.classList.remove('impossible');
                    backward.possible = true;
                }
                if(j == slides.length - 1){
                    forward.possible = false;
                    forward.classList.add('impossible');
                }else{
                    forward.possible = true;
                    forward.classList.remove('impossible');
                }
                slides[sliders[i].currentSlide].classList.add('picked');
            }
        }
        backward.onclick = () => {
            if(!backward.possible){
                return;
            }
            slides[sliders[i].currentSlide].classList.remove('picked');
            sliders[i].currentSlide -= 1;
            slides[sliders[i].currentSlide].classList.add('picked');
            if(sliders[i].currentSlide == 0){
                backward.possible = false;
                backward.classList.add('impossible');
            }
            byNumberList[sliders[i].currentSlide + 1].classList.remove('current-slide');
            byNumberList[sliders[i].currentSlide].classList.add('current-slide');
            forward.possible = true;
            forward.classList.remove('impossible');
        }
        forward.onclick = () => {
            if(!forward.possible){
                return;
            }
            slides[sliders[i].currentSlide].classList.remove('picked');
            sliders[i].currentSlide += 1;
            slides[sliders[i].currentSlide].classList.add('picked');
            if(sliders[i].currentSlide == slides.length - 1){
                forward.possible = false;
                forward.classList.add('impossible');
            }
            byNumberList[sliders[i].currentSlide - 1].classList.remove('current-slide');
            byNumberList[sliders[i].currentSlide].classList.add('current-slide');
            backward.possible = true;
            backward.classList.remove('impossible');
        }
        backward.textContent = '<';
        forward.textContent = '>';
        controllers.append(backward);
        for(let j = 0; j < byNumberList.length; j++){
            controllers.append(byNumberList[j]);
        }
        controllers.append(forward);
        sliders[i].append(controllers);

    }

    
}

init();