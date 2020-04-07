let items = document.querySelectorAll('.js-place-before');
let list = [];
for(let i = 0; i < items.length; i++){
    console.log('found an item: ' + items[i]);
    let current = items[i].querySelectorAll('li');
    let input = document.createElement('input');
        let label = document.createElement('label');
        label.innerText = 'больше'
        input.className = 'show-content';
        input.id = 'show-extra-' + i;
        input.type = 'checkbox';
        label.setAttribute('for', input.id);
        label.className = 'actual-content';
        list.push({in: input, l: label});
        console.log('created pair of input-label: ' + list[list.length - 1]);
        console.log('input.id = ' + list[list.length - 1].in.id)
}

let cnt = 0;


for(let i = 0; i < items.length; i++){
    console.log('placing before ' + items[i]);
    items[i].before(list[i].in);
    items[i].before(list[i].l);
}

/*<input type="checkbox" class="show-content" id="show-extra-1">
                        <label for="show-extra-1" class="actual-content"></label>*/