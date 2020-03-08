// order
let typeInst = document.querySelectorAll(".type-of-repair li a");

for(i=0; i < typeInst.length; i++){
    typeInst[i].addEventListener('click', show);
}

function show(event){   
    let clickElement = this.getAttribute("data-text"),
        activeElement = document.querySelector(".installation__active"),
        nextElement = document.querySelector(`${clickElement}`);
    
    activeElement.classList.remove('installation__active');
    nextElement.classList.add('installation__active');

    event.preventDefault();
};
// order
