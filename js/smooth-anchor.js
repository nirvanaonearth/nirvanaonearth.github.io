let sections = document.getElementsByClassName('content-section');
for(let i = 0; i < sections.length - 1; i++){
    let anchor = document.createElement('a');
    anchor.href = '#';
    anchor.className = 'next-screen-button';
    anchor.onclick = (e) => {
        e.preventDefault();
        sections[i + 1].scrollIntoView({
            behavior: 'smooth'
        });
    };
    sections[i].appendChild(anchor);
}

let anchor = document.createElement('a');
anchor.href = '#';
anchor.className = 'next-screen-button';
anchor.style.transform = 'rotate(180deg)';
anchor.onclick = (e) => {
    e.preventDefault();
    sections[0].scrollIntoView({
        behavior: 'smooth'
    });
};
sections[sections.length - 1].appendChild(anchor);


let otherAnchors = document.querySelectorAll('a[href^="#"');
for(let i = 0; i < otherAnchors.length; i++){
    console.log('parsing anchor ' + otherAnchors[i]);
    otherAnchors[i].addEventListener('click', (e) =>{
        e.preventDefault();
        console.log('clicked');
        let dest = e.target.getAttribute('href');
        console.log(dest);
        if(dest === "#")
            return;
        document.querySelector(dest).scrollIntoView({behavior: 'smooth'});
        return true;
    });
}