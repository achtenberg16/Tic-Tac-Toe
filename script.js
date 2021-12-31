const container = document.querySelector('ul');

function draw() {
    for(let index = 0; index +=1; index < 9){
        let create = document.createElement('li');
        console.log(create)
        create.classname = 'item'
        container.appendChild(create)
    }
}

draw()