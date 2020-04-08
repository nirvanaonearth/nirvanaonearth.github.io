let boxes = document.getElementsByClassName('js-project-box');
console.log("setting id's for extra viewers");

for(let i = 0; i < boxes.length; i++){
    let current = boxes[i];
    let input = current.getElementsByClassName('js-proj-show-extra')[0];
    let label = current.getElementsByClassName('js-label-for-extra')[0];
    input.id = "js-show-extra-item" + i;
    label.setAttribute('for', input.id);
}