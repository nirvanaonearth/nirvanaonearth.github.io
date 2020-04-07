let base = document.querySelector(".js-switch-base");
let tar = document.querySelector(".js-switch-input");
let tatTxt = document.querySelector(".js-switch");
base.addEventListener('change', function(e){
    let pick = e.target;
    console.log("picked " + pick.id);
    if(pick.value === "Позвонить"){
        tar.type = 'tel';
        tatTxt.innerHTML = "Ваш номер телефона:";
    }
    else{
        tar.type = 'email';
        tatTxt.innerHTML = "Электронный адрес:";
    }
});