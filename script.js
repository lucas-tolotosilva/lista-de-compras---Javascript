let input = document.getElementById("item-input");
let add = document.getElementById("item-button");
let ul = document.getElementById("items");
let items = document.getElementsByTagName("li");
let itemButtons = document.getElementsByClassName("remove");

add.addEventListener("click", criaElemento)

function criaElemento(){
    let li = document.createElement("li");
    let xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.className = "remove";

    li.appendChild(xButton);

    let texto = document.createTextNode(input.value);

    li.appendChild(texto);

    ul.appendChild(li)

    input.value = "";

    buttonEvents()
}

function deletaItem(){
    this.parentElement.remove();
}

function buttonEvents(){
    for(i= 0; i < itemButtons.length; i++ ){
        itemButtons[i].addEventListener("click", deletaItem);
    }
}

